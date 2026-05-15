import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const ignoredDirs = new Set(['apps']);

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name)) {
        files.push(...await htmlFiles(path.join(dir, entry.name)));
      }
    } else if (entry.name.endsWith('.html')) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

const files = await htmlFiles(root);
let consentScriptPages = 0;

for (const file of files) {
  const rel = path.relative(root, file);
  const html = await readFile(file, 'utf8');
  assert(!html.includes('googletagmanager.com/gtag/js'), `${rel} must not load Google Analytics directly`);
  assert(!html.includes("gtag('config', 'G-75T821TKQY')"), `${rel} must not configure GA directly`);
  if (html.includes('/assets/cookie-consent.js')) {
    consentScriptPages += 1;
  }
}

assert(consentScriptPages >= 19, 'public GA pages should use the shared consent script');

const consentJs = await readFile(path.join(root, 'assets/cookie-consent.js'), 'utf8');
assert(consentJs.includes("analytics_storage: 'denied'"), 'Consent Mode must deny analytics storage by default');
assert(consentJs.includes("ad_storage: 'denied'"), 'Consent Mode must deny ad storage by default');
assert(consentJs.includes('googletagmanager.com/gtag/js?id=G-75T821TKQY'), 'GA script must only be loaded by the consent module');
assert(consentJs.includes('cookie-policy.html'), 'Banner must link to the cookie policy');

const policyHtml = await readFile(path.join(root, 'cookie-policy.html'), 'utf8');
assert(policyHtml.includes('Google Analytics'), 'Cookie policy must identify Google Analytics');
assert(policyHtml.includes('G-75T821TKQY'), 'Cookie policy must identify the GA measurement ID');
