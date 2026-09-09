import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const routes = [
  '',
  'features',
  'for-churches',
  'about',
  'pricing',
  'faq',
  'contact',
  'download',
  'privacy-policy',
  'terms-of-service',
  'support',
  'data-deletion',
  'community-guidelines',
  'accessibility',
  'release-notes',
];
let links = 0;
for (const route of routes) {
  const file = path.join('out', route, 'index.html');
  const html = await fs.readFile(file, 'utf8');
  assert(html.includes('<h1'), route + ' has no h1');
  assert.equal(
    (html.match(/<h1[ >]/g) || []).length,
    1,
    route + ' must have one h1',
  );
  assert(html.includes('name="description"'), route + ' missing description');
  assert(html.includes('rel="canonical"'), route + ' missing canonical');
  assert(html.includes('property="og:title"'), route + ' missing Open Graph');
  assert(
    html.includes('name="twitter:card"'),
    route + ' missing Twitter metadata',
  );
  assert(html.includes('id="main"'), route + ' missing skip-link target');
  for (const match of html.matchAll(/href="(\/[^\"?#]*)/g)) {
    const url = match[1];
    if (url.startsWith('//')) continue;
    const decoded = decodeURIComponent(url);
    const local = path.join('out', decoded);
    let exists = false;
    try {
      const s = await fs.stat(local);
      exists =
        s.isFile() ||
        (s.isDirectory() && !!(await fs.stat(path.join(local, 'index.html'))));
    } catch {}
    assert(exists, route + ' broken local link: ' + url);
    links++;
  }
}
for (const file of [
  'sitemap.xml',
  'robots.txt',
  'manifest.webmanifest',
  'favicon.svg',
  'favicon.ico',
  'apple-touch-icon.png',
  'icon-192.png',
  'icon-512.png',
])
  await fs.access(path.join('out', file));
console.log(
  'Passed: ' +
    routes.length +
    ' routes, ' +
    links +
    ' local links, page metadata, skip targets, and SEO assets.',
);
