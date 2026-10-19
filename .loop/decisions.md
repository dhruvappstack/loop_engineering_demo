# Decisions (ADR-lite)
<!-- One entry per significant design/architecture decision. -->

## D1: Dashboard layout and compatible frontend toolchain
- Date: 2026-10-20
- Context: The workspace contains no app or package manifest; the user requested a single-page Loop Engineering overview, module tests, and selection based on installed Node.js.
- Options considered: Editorial overview; interactive step-by-step explorer; visual dashboard with process diagram.
- Decision: Use the user-approved dashboard approach, centered on the four-step loop and concise explanatory sections. Use React/React DOM 19.3.1 with Vite 8.3.4 and Vitest 5.0.5; their published package metadata is compatible with installed Node.js v22.13.1.
- Tradeoffs / consequences: The dashboard makes the iterative workflow prominent while keeping the app focused; dependency installation and a lockfile are required.
- Revisit when: The user requests a different visual direction or the supported Node.js version changes.
