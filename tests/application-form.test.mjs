import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';

const root = fileURLToPath(new URL('..', import.meta.url));
const html = await readFile(path.join(root, 'index.html'), 'utf8');

assert(html.includes('id="application-form"'), 'homepage must contain the project application form');
assert(html.includes('action="https://formsubmit.co/hello@olegotka.es"'), 'form fallback must target the activated FormSubmit address');
assert(html.includes("fetch('https://formsubmit.co/ajax/hello@olegotka.es'"), 'enhanced form must use the FormSubmit AJAX endpoint');
assert(html.includes('name="privacyAccepted" value="yes" required'), 'form must require privacy acceptance');
assert(html.includes("window.gtag('event','generate_lead'"), 'successful applications must emit a lead event');

const responseGuard = html.indexOf("if(!response.ok || (result?.success!==true && result?.success!=='true'))");
const leadEvent = html.indexOf("trackProjectLead(data.get('Project type'),sourcePage)");
assert(responseGuard > -1 && leadEvent > responseGuard, 'lead event must run only after a successful response');

const analyticsConsent = html.indexOf("choice?.analytics===true");
const gtagCall = html.indexOf("window.gtag('event','generate_lead'");
assert(analyticsConsent > -1 && gtagCall > analyticsConsent, 'lead analytics must respect explicit analytics consent');

const primaryApplication = html.indexOf('href="#apply" class="btn btn-primary"');
const booking = html.indexOf('href="https://cal.com/olegotka/first-call"');
assert(primaryApplication > -1 && booking > primaryApplication, 'project application must be presented before booking');

const origin = 'https://olegotka.es';
const auditPath = '/insights/ios-app-audit-checklist.html';
const formScript = html.slice(html.indexOf('const applicationForm='), html.indexOf("if(applicationParams.get('submitted')"));

async function simulateApplication({
  project = 'review',
  referrer = origin + auditPath,
  consent = true,
  responseOk = true,
  result = {success: true},
} = {}) {
  let submit;
  let payload;
  let reset = false;
  const events = [];
  const projectType = {value: '', options: [{value: ''}, {value: 'review'}]};
  const projectStage = {value: '', selectedOptions: [{textContent: 'Existing app'}]};
  const button = {setAttribute() {}, removeAttribute() {}};
  const status = {classList: {add() {}, remove() {}}};
  const form = {
    checkValidity: () => true,
    querySelector: () => button,
    reset() { reset = true; },
    addEventListener(_event, handler) { submit = handler; },
  };
  const elements = {'application-form': form, 'app-type': projectType, 'app-stage': projectStage, 'form-status': status};
  const location = new URL(origin + '/?project=' + encodeURIComponent(project) + '#apply');
  projectType.selectedOptions = [];

  runInNewContext(formScript, {
    document: {referrer, getElementById: id => elements[id], querySelectorAll: () => []},
    location,
    window: {location, gtag: (...args) => events.push(args)},
    URL,
    URLSearchParams,
    localStorage: {getItem: () => JSON.stringify({analytics: consent})},
    FormData: class extends Map {
      constructor() {
        super([['projectType', projectType.value], ['stage', projectStage.value]]);
      }
    },
    lang: 'en',
    T: {en: {'form.ready': 'sent', 'form.error': 'error'}},
    fetch: async (_url, options) => {
      payload = options.body;
      return {ok: responseOk, json: async () => result};
    },
  });

  await submit({preventDefault() {}});
  return {payload, events, reset, status: status.textContent, projectType, projectStage};
}

const audit = await simulateApplication({referrer: origin + auditPath + '?campaign=test', result: {success: 'true'}});
assert.equal(audit.projectType.value, 'review');
assert.equal(audit.projectStage.value, 'existing');
assert.equal(audit.payload.get('Source page'), origin + auditPath);
assert.equal(audit.payload.get('Current stage'), 'Existing app');
assert.equal(audit.events[0][2].source_page, auditPath);
assert.equal(audit.status, 'sent');

for (const options of [{result: {success: 'false'}}, {result: {}}, {responseOk: false}]) {
  const failure = await simulateApplication(options);
  assert.equal(failure.events.length, 0);
  assert.equal(failure.status, 'error');
  assert.equal(failure.reset, false);
}

const other = await simulateApplication({project: 'unknown', referrer: 'https://example.com' + auditPath, consent: false});
assert.equal(other.projectType.value, '');
assert.equal(other.payload.has('Current stage'), false);
assert.equal(other.payload.get('Source page'), origin + '/#apply');
assert.equal(other.events.length, 0);
