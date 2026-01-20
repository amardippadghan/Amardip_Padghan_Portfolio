## 2025-05-20 - Unsecured External Dependencies & Missing CSP
**Vulnerability:** Application relied on external CDNs (Tailwind, DaisyUI) without Subresource Integrity (SRI) and lacked a Content Security Policy (CSP), exposing it to supply chain attacks and XSS.
**Learning:** Even if dependencies are in package.json, check index.html for redundant/insecure CDN links. Build processes might be broken or unused (PostCSS was missing).
**Prevention:** Enforce local builds for all assets and implement strict CSP to block unauthorized external scripts/styles.
