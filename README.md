# olegotka.es

Portfolio and micro-agency landing page for premium iOS MVP development.

## Local check

Run a static server from the repository root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/` and verify:

- no console errors;
- no requests to `api.fontshare.com` or `cdn.fontshare.com`;
- fonts load from `/assets/fonts/*.woff2`;
- `/assets/favicon.ico`, `/assets/favicon.svg`, and `/assets/apple-touch-icon.png` return 200;
- dark/light theme and EN/ES/RU switching work;
- CTA and portfolio case-study links work.

## Deployment TODO

GitHub Pages does not allow full custom HTTP security headers for this static site. If the site is migrated to Cloudflare Pages, Netlify, or Vercel, add:

```text
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```
