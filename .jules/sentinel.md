## 2024-05-23 - Content Security Policy & CDN Constraints
**Vulnerability:** Missing Content Security Policy (CSP) allowed potential XSS and data injection attacks.
**Learning:** The project relies on the Tailwind Play CDN (`cdn.tailwindcss.com`) and DaisyUI CDN for styling, which requires `script-src` to include the CDN and, critically, `'unsafe-eval'` because the Play CDN compiles CSS in the browser using dynamic execution.
**Prevention:** Future architectural improvements should move to a build-time CSS generation (standard Tailwind setup) to remove the dependency on `unsafe-eval` and external CDNs, allowing for a stricter CSP.
