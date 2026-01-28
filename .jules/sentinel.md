## 2026-01-28 - CDN Dependence Masking Broken Build
**Vulnerability:** The application was loading Tailwind CSS and DaisyUI from external public CDNs in production, despite having them as dependencies.
**Learning:** This setup bypassed the local build process, likely because the build configuration (PostCSS) was missing. This exposed the application to CDN supply chain risks and tracking.
**Prevention:** Always verify that local build scripts generate the expected assets and do not rely on external `script` or `link` tags for core dependencies.
