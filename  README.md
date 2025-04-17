# react\-ts\-tailwind\-turbo\-repo\-template

> **Repo name:** `react\-ts\-tailwind\-turbo\-repo\-template`

A minimal, production‑ready monorepo showcasing a modern React 19 tool‑chain:

* **pnpm workspaces** – fast installs &amp; deterministic lockfile
* **Turborepo** – task‑pipelines + remote caching
* **Vite 6** – ultra‑fast dev server &amp; build
* **Tailwind CSS v4** (via `@tailwindcss/vite`)
* **TypeScript 5.7** with _bundler_ module‑resolution
* **Vitest** – unit & component testing
* **ESLint 9 + Prettier 3** – zero‑config lint & format
* **packages/ui** – example reusable component library bundled with **Tsup**

---

## Prerequisites

| Tool        | Version |
|-------------|---------|
| **Node.js** | ≥ 18.18 |
| **pnpm**    | ≥ 8.0   |

Install pnpm if you haven’t already:

```bash
npm i -g pnpm@latest
```

---

## Quick Start

```bash
# clone
pnpm dlx degit gh:user/react-ts-tailwind-turbo-repo-template my‑app
cd my‑app

# bootstrap all workspaces
pnpm install

# start dev server (apps/web)
pnpm dev             # alias for: pnpm --filter ./apps/web dev
```

Common scripts:

| Script       | Purpose                                                |
|--------------|--------------------------------------------------------|
| `pnpm dev`   | Dev server for **apps/web** with hot‑reload            |
| `pnpm build` | `turbo run build` – builds every package/app → `dist/` |
| `pnpm lint`  | ESLint + Prettier checks                               |
| `pnpm test`  | Vitest suite                                           |

---

## Repository Layout

```
.
├─ apps/                 # runnable targets
│  └─ web/               # Vite React app
└─ packages/             # shared libraries
   └─ ui/                # simple Button component
```

### Workspaces

* **apps/** – anything you can `pnpm dev` or deploy (web, mobile, CLI).
* **packages/** – reusable code published to npm or consumed via `workspace:*`.

---

## Developing inside the monorepo

### Add a new package

```bash
mkdir -p packages/logger &amp;&amp; cd packages/logger
pnpm init -y
```

1. Extend `../../tsconfig.base.json`.
2. Add `"build": "tsup src/index.ts --format esm,cjs --dts"`.
3. `pnpm install` at the root so pnpm registers the workspace.

### Link a package into an app

```bash
# from repo root
pnpm --filter ./apps/web add logger@workspace:*  # live‑reloads in dev
```

### Turbo caching

* `turbo run build` parallelizes & caches output per task graph.
* Remote caching: set `TURBO_API` env & push to Turbo Cloud.

---

## Production build

```bash
pnpm build            # builds all workspaces
cd apps/web/dist      # static bundle ready for any CDN / SSR target
```

---

## Publishing a package

```bash
cd packages/ui
pnpm version patch
pnpm publish --access public   # peerDeps keep bundle size ≪
```

---

## Troubleshooting

* **Missing export in dev:** ensure `packages/ui` rebuilds after code edits (`pnpm --filter ./packages/ui build`).
* **No projects matched filter:** run `pnpm install` once so pnpm refreshes the workspace map.
* **Type errors across packages:** remove `files` arrays from tsconfigs or list every source file.

---

## License

MIT © houdinii 2025

