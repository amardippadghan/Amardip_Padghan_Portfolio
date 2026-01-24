## 2025-02-18 - Missing Content Security Policy
**Vulnerability:** Application lacks CSP headers, relying on external CDNs which increases XSS risk.
**Learning:** Despite "Sentinel" memory claiming CSP is enforced, it was absent in `index.html`.
**Prevention:** Future tasks should prioritize implementing strict CSP and removing external CDNs to close this gap.
