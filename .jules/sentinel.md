# Sentinel Journal

## 2025-02-19 - [Insecure Dependency Architecture]
**Vulnerability:** Application relied on `cdn.tailwindcss.com` (runtime compilation) and external CDNs for styles, despite having a build pipeline.
**Learning:** This exposed the app to supply chain attacks (external script loading) and prevented strict CSP implementation. The local build was broken (missing `autoprefixer`), leading devs to use CDNs as a workaround.
**Prevention:** Enforce strict CSP in development to catch these "quick fixes" early. Ensure build pipeline health checks include CSS generation verification.
