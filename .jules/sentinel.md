## 2026-01-26 - Enforce Local Build and CSP
**Vulnerability:** The application was using the `cdn.tailwindcss.com` script in production. This script requires `unsafe-eval` in the Content Security Policy to function, which significantly increases the risk of Cross-Site Scripting (XSS) attacks. It also loaded DaisyUI from a CDN, creating an unnecessary dependency on external servers.
**Learning:** Prototyping tools like the Tailwind Play CDN should never be used in production. They prevent strict security policies and degrade performance.
**Prevention:** Always configure a local build process (PostCSS) for Tailwind CSS and ensure `index.html` includes a strict Content Security Policy (CSP).

## 2026-01-26 - Runtime Stability
**Vulnerability:** The application currently crashes on startup with `Cannot read properties of undefined (reading 'S')`, preventing automated verification of frontend changes.
**Learning:** Peer dependency mismatches (likely between `@react-three/drei` and `react` or `three`) can cause obscure runtime errors.
**Prevention:** Strictly pin dependencies or ensure compatibility between 3D libraries and React versions.
