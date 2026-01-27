## 2026-01-27 - Hybrid CDN/Local Build Vulnerability
**Vulnerability:** The application was configured with a local build process for Tailwind CSS/DaisyUI (safe) but simultaneously imported these libraries via external CDNs in `index.html` (unsafe).
**Learning:** This "double-import" pattern creates a false sense of security. Developers might assume they are using locked dependencies, but the browser loads the CDN version, which is vulnerable to supply chain attacks or uptime issues, and ignores local config.
**Prevention:** When initializing a project, verify `index.html` does not contain redundant CDN links for libraries already managed by `package.json`.
