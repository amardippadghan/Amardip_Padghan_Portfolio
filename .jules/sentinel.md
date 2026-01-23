## 2026-01-23 - Build Misconfiguration Leading to Insecure Defaults
**Vulnerability:** External CDNs were used in production `index.html` for Tailwind/DaisyUI, bypassing the build process and lacking Subresource Integrity (SRI), introducing supply chain risk.
**Learning:** The CDNs were likely a workaround because the local build was failing to process CSS (missing `postcss.config.js`). Security gaps often hide behind "temporary fixes" for build issues.
**Prevention:** Ensure build pipelines are fully functional and verify build artifacts (e.g., CSS size) to prevent reliance on external fallbacks.
