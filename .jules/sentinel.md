# Sentinel's Journal

## 2026-01-25 - Dependency Hell & Runtime Stability
**Vulnerability:** Application crashes in production with `Cannot read properties of undefined (reading 'S')` due to `@react-three/drei` (v10) and `react` (v18) mismatch.
**Learning:** Peer dependency conflicts in 3D libraries can lead to silent or cryptic runtime failures that block security verification.
**Prevention:** Strictly pin 3D library versions known to be compatible with the React version. Avoid updating `drei` without verifying React 19 support.

## 2026-01-25 - Secure Build Configuration
**Vulnerability:** Missing `postcss.config.js` and reliance on CDNs exposed the app to supply chain attacks and prevented strict CSP.
**Learning:** ESM-based projects (`"type": "module"`) require config files like `tailwind.config.js` to use ESM syntax (`import`) or be renamed to `.cjs`. Mixing CJS (`require`) breaks the build.
**Prevention:** Ensure all build configuration files match the project's module type.
