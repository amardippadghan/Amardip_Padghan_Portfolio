## 2026-02-01 - Build Configuration vs Security
**Vulnerability:** Application relied on external CDNs (Tailwind, DaisyUI) in `index.html` despite having local dependencies installed. This exposed the app to supply chain attacks and prevented strict CSP enforcement.
**Learning:** The local build was broken because `tailwind.config.js` used CommonJS `require` in an ESM project (`type: "module"`), and `postcss.config.js` was missing. The developer likely resorted to CDNs as a workaround.
**Prevention:** Always verify that the local build pipeline works correctly. Ensure configuration files (like `tailwind.config.js`) use syntax compatible with the project's module system (ESM vs CommonJS).

## 2026-02-01 - Runtime Instability & Feature Flagging
**Vulnerability:** The application crashed on startup due to a known conflict between `@react-three/drei` and `three` (reading 'S' from undefined), which was likely exacerbated by dependency updates during the security fix.
**Learning:** Security fixes can sometimes uncover or trigger latent stability issues. Prioritizing availability meant disabling the unstable 3D feature to allow the core portfolio and security enhancements (CSP) to function.
**Prevention:** Use strict version pinning for fragile ecosystems like Three.js. When a feature causes a critical crash, feature-flagging or disabling it is a valid interim response to maintain service availability.

## 2026-02-01 - Content Security Policy & Vite
**Vulnerability:** `index.html` contained permissive CSP directives (`unsafe-eval`, `unsafe-inline`) originally added for CDNs, which were no longer in use.
**Learning:** Vite's production build works seamlessly with `script-src 'self'`, removing the need for `unsafe-eval` or `unsafe-inline` for scripts. Inline styles (`style-src`) are still required for many React/Tailwind patterns.
**Prevention:** Regularly audit CSP directives against the actual build requirements. Do not assume development environment requirements (like `unsafe-eval`) apply to production.
