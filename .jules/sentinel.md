## 2025-01-31 - Redundant CDNs masking Build Failure
**Vulnerability:** Application relied on external CDNs (`cdn.tailwindcss.com`, `cdn.jsdelivr.net`) for styling, bypassing the local build process and CSP controls.
**Learning:** The local PostCSS build was broken (missing `postcss.config.js`), causing `@tailwind` directives to be output literally. This likely forced the use of CDNs as a workaround.
**Prevention:** Always verify build artifacts (check generated CSS size and content) to ensure the build pipeline is active. Require `postcss.config.js` in Vite+Tailwind projects.
