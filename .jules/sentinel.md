## 2026-01-22 - [Dependency Management & Content Security]
**Vulnerability:** Use of external CDNs for core styles (Tailwind/DaisyUI) despite having them in devDependencies, combined with missing CSP.
**Learning:** Inconsistent build configurations (missing PostCSS config) can lead to developers falling back to insecure or redundant practices (CDNs) which increase attack surface and supply chain risk.
**Prevention:** Always verify the build pipeline handles all assets locally. Enforce CSP to prevent unauthorized external resource loading.
