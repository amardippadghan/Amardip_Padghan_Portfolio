## 2026-01-16 - [CDN Removal & Dependency Conflicts]
**Vulnerability:** Usage of `cdn.tailwindcss.com` allows external code execution and relies on runtime compilation, exposing users to availability and integrity risks.
**Learning:** Migrating to local PostCSS build revealed deep peer dependency conflicts (`@react-three/drei` requiring React 19 vs project using React 18). Installing local tools (`postcss`, `autoprefixer`) required `--legacy-peer-deps` to avoid breaking the dependency tree. The app's runtime state was also found to be fragile (rendering errors), complicating verification.
**Prevention:** Always check `npm list` and `package.json` for major version mismatches before adding dependencies. Use strictly versioned local dependencies instead of CDNs.
