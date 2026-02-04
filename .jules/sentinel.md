## 2026-02-01 - Build Configuration vs Security
**Vulnerability:** Application relied on external CDNs (Tailwind, DaisyUI) in `index.html` despite having local dependencies installed. This exposed the app to supply chain attacks and prevented strict CSP enforcement.
**Learning:** The local build was broken because `tailwind.config.js` used CommonJS `require` in an ESM project (`type: "module"`), and `postcss.config.js` was missing. The developer likely resorted to CDNs as a workaround.
**Prevention:** Always verify that the local build pipeline works correctly. Ensure configuration files (like `tailwind.config.js`) use syntax compatible with the project's module system (ESM vs CommonJS).

## 2026-02-01 - Runtime Instability & Feature Flagging
**Vulnerability:** The application crashed on startup due to a known conflict between `@react-three/drei` and `three` (reading 'S' from undefined), which was likely exacerbated by dependency updates during the security fix.
**Learning:** Security fixes can sometimes uncover or trigger latent stability issues. Prioritizing availability meant disabling the unstable 3D feature to allow the core portfolio and security enhancements (CSP) to function.
**Prevention:** Use strict version pinning for fragile ecosystems like Three.js. When a feature causes a critical crash, feature-flagging or disabling it is a valid interim response to maintain service availability.

## 2026-02-01 - CSP Strictness in Vite Production
**Vulnerability:** The application used `script-src 'unsafe-inline' 'unsafe-eval'` in `index.html`, likely a default from a template or dev requirements, exposing it to XSS.
**Learning:** Vite production builds (`vite build`) are compatible with strict CSP (`script-src 'self'`) without requiring `unsafe-inline` or `unsafe-eval`. Verification using `npm run preview` is essential as dev mode often requires looser policies.
**Prevention:** Implement strict CSP in `index.html` but verify it against the *production* build artifact, not just the dev server.
