import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const html = await readFile(path.join(root, 'index.html'), 'utf8');

assert(html.includes('id="application-form"'), 'homepage must contain the project application form');
assert(html.includes('action="https://formsubmit.co/hello@olegotka.es"'), 'form fallback must target the activated FormSubmit address');
assert(html.includes("fetch('https://formsubmit.co/ajax/hello@olegotka.es'"), 'enhanced form must use the FormSubmit AJAX endpoint');
assert(html.includes('name="privacyAccepted" value="yes" required'), 'form must require privacy acceptance');
assert(html.includes("window.gtag('event','generate_lead'"), 'successful applications must emit a lead event');

const responseGuard = html.indexOf("if(!response.ok || result.success===false) throw new Error('Submission failed')");
const leadEvent = html.indexOf("trackProjectLead(data.get('Project type'))");
assert(responseGuard > -1 && leadEvent > responseGuard, 'lead event must run only after a successful response');

const analyticsConsent = html.indexOf("choice?.analytics===true");
const gtagCall = html.indexOf("window.gtag('event','generate_lead'");
assert(analyticsConsent > -1 && gtagCall > analyticsConsent, 'lead analytics must respect explicit analytics consent');

const primaryApplication = html.indexOf('href="#apply" class="btn btn-primary"');
const booking = html.indexOf('href="https://cal.com/olegotka/first-call"');
assert(primaryApplication > -1 && booking > primaryApplication, 'project application must be presented before booking');
