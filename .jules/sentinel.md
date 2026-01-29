## 2024-05-22 - Runtime Instability Blocking Security Verification
**Vulnerability:** Application crashes on load (`Cannot read properties of undefined (reading 'S')`) due to dependency conflicts.
**Learning:** Security tools (like Playwright for XSS/CSP verification) are rendered useless by basic runtime instability. Security depends on Stability.
**Prevention:** Prioritize fixing runtime errors before attempting automated security verification.
