## 2026-01-10 - Content Security Policy & Dependency Integrity
**Vulnerability:** Unsafe inline CDN usage and missing CSP headers.
**Learning:** Development-mode CDN scripts (cdn.tailwindcss.com) can persist into production if the build pipeline isn't properly configured (missing postcss.config.js), exposing the app to XSS and dependency risks.
**Prevention:** Always verify build artifacts. Ensure build tools (PostCSS) are configured to compile dependencies locally rather than relying on runtime CDN injection.
