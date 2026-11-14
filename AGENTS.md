# AGENTS.md — AI Coding Rules for DestiGo

**This file is authoritative for OpenCode and any other AI coding assistant working in this repository.** Read it fully before inspecting or modifying code. If an instruction here conflicts with a casual request, stop and ask the user.

The human-facing project overview is in [`README.md`](./README.md). This file focuses on boundaries, safety, and expected behavior.

---

## 1. Repository Context

- **Project:** DestiGo — a travel destination discovery platform. It is **not** a booking platform.
- **Stack:** Angular 22 (standalone components, signals), TypeScript, Angular Router with lazy-loaded feature routes, Angular SSR + Express, Vitest, npm, plain CSS, Prettier.
- **Team:** two developers working independently.
  - Türkiye portal: Ahmed Ben Mim
  - Italy portal: Ons Chtioui
  - Spain portal: planned, owner not yet assigned
- **Architecture:** feature-based. Each country owns its pages, components, data, models, and scoped styles. Shared UI and infrastructure are separate.
- **Current state is small and evolving.** At the time this file was written, only the root app files and `src/app/features/turkey/` exist. `core/`, `shared/`, `home/`, `italy/`, `spain/`, `auth/`, `favorites/`, `about/`, and the destination wheel are planned. Always verify the actual state; never assume a planned folder or feature exists.
- **Default branch:** historically `master`. The team targets `main`; verify the current branch before doing anything. Do not rename or switch branches on your own.

---

## 2. Mandatory Inspection Before Any Change

Complete these steps before editing, creating, or deleting files:

1. **Read this file** (`AGENTS.md`).
2. **Inspect Git state** (read-only):
   ```bash
   git status
   git branch --show-current
   ```
   Note uncommitted or untracked files. Never discard them.
3. **Inspect the relevant files.** Read the actual components, templates, styles, routes, and data involved. Do not infer contents from filenames.
4. **Identify ownership.** Which country or shared area does the request affect? (See Section 3.)
5. **Classify the change.** Is it country-local, shared, or ambiguous?
6. **If shared:** stop, explain the proposed change, and obtain **explicit user approval** before applying it. (See Section 4.)
7. **If ownership or scope is unclear:** ask. Do not guess or broaden the scope.

Also confirm the Angular, TypeScript, and dependency versions from `package.json` and `angular.json` before proposing framework-level changes.

---

## 3. Feature Ownership and Isolation

| Area                | Path                                                                                                                      | Owner         | AI permission                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------- |
| Türkiye portal      | `src/app/features/turkey/**`                                                                                              | Ahmed Ben Mim | Modify only when the task is about Türkiye        |
| Italy portal        | `src/app/features/italy/**`                                                                                               | Ons Chtioui   | Modify only when the task is about Italy          |
| Spain portal        | `src/app/features/spain/**`                                                                                               | Unassigned    | Do not create or modify without explicit approval |
| Home                | `src/app/features/home/**`                                                                                                | Shared        | Approval required                                 |
| Auth                | `src/app/features/auth/**`                                                                                                | Shared        | Approval required                                 |
| Favorites           | `src/app/features/favorites/**`                                                                                           | Shared        | Approval required                                 |
| About               | `src/app/features/about/**`                                                                                               | Shared        | Approval required                                 |
| Shared UI           | `src/app/shared/**`                                                                                                       | Shared        | Approval required                                 |
| Core infrastructure | `src/app/core/**`                                                                                                         | Shared        | Approval required                                 |
| Root app files      | `src/app/app.ts`, `app.html`, `app.css`, `app.config.ts`, `app.routes.ts`, `app.config.server.ts`, `app.routes.server.ts` | Shared        | Approval required                                 |
| Global styles       | `src/styles.css`                                                                                                          | Shared        | Approval required                                 |
| Build/config        | `angular.json`, `package.json`, `package-lock.json`, `tsconfig*.json`                                                     | Shared        | Approval required                                 |
| Country assets      | `public/destinations/<country>/**`                                                                                        | Country owner | Allowed only for that country                     |

### Rules

- **When working on Türkiye:** prefer changes inside `features/turkey/`. Do not edit Italy. Do not edit global styles or shared components without approval.
- **When working on Italy:** prefer changes inside `features/italy/`. Do not edit Türkiye. Do not edit global styles or shared components without approval.
- **No cross-country imports.** A country portal must never import from another country portal. This includes models, data, components, and assets.
- If a country needs a shared model or component, **propose** it for `shared/` and wait for approval. Do not copy another portal's internals.
- Country styles must be scoped to their components (`styleUrl` / component `styles`). Do not add country-specific rules to `src/styles.css`.
- Do not modify another developer's portal, even to "fix" something, unless the user explicitly authorizes it.
- Do not create the destination wheel inside a country portal. It belongs in `shared/destination-wheel/` and is a planned shared feature.

---

## 4. Shared Code Requires Explicit Approval

The following are **shared**. The AI may analyze and propose changes, but **must not silently apply them**:

- `src/app/app.routes.ts`
- `src/app/app.config.ts`
- `src/app/app.config.server.ts`
- `src/app/app.routes.server.ts`
- `src/app/app.ts`, `app.html`, `app.css`
- `src/app/core/**`
- `src/app/shared/**`
- `src/styles.css`
- Shared dependencies in `package.json` / `package-lock.json`
- `angular.json`, all `tsconfig*.json`
- `src/main.ts`, `src/main.server.ts`, `src/server.ts`, `src/index.html`
- `README.md`, `AGENTS.md`, `AI.md`
- Anything under `public/` that is not inside a single country's asset folder

**Required process for shared changes:**

1. Explain what must change and why.
2. List the exact files involved.
3. Show the proposed approach or diff.
4. Wait for explicit approval.
5. Apply only the approved scope.

If a country task cannot be completed without a shared change, pause and report the blocker instead of editing shared code.

---

## 5. Coding Standards

- Use **Angular-native patterns**: standalone components, Angular Router, signals, `input()` / `output()`, dependency injection, and modern template syntax where appropriate.
- Follow the conventions already present in each file. Do not refactor unrelated code or reformat entire files.
- Use TypeScript with clear types. Avoid `any` unless there is a documented reason. Respect the strict compiler options in `tsconfig.json`.
- Keep components focused and small. Extract reusable pieces only when there is real duplication.
- Prefer semantic HTML and accessible markup:
  - meaningful `alt` text on images,
  - labels for form controls,
  - keyboard access for interactive elements,
  - visible focus states,
  - appropriate ARIA only when native semantics are insufficient.
- Ensure layouts are responsive across mobile and desktop.
- Use scoped component styles for country-specific design.
- Do not introduce unnecessary dependencies. Adding a dependency is a shared change.
- Keep SSR compatibility: guard `window`, `document`, `localStorage`, and other browser-only APIs (`isPlatformBrowser`, lifecycle hooks, or services).
- Lazy-load feature routes; do not eagerly import country portals into the root bundle.
- Do not duplicate business logic across portals. If logic is genuinely shared, propose it in `shared/` or `core/`.
- Do not overengineer. Build the smallest maintainable solution that satisfies the request.
- Do not add comments unless they explain non-obvious intent or are explicitly requested.

### Explicitly prohibited

- React, Next.js, React hooks, or Radix React Dialog.
- Copying a country portal into another country portal.
- Adding country-specific styles to global CSS.
- Creating empty directories or placeholder components solely to match the target architecture.
- Rewriting or deleting application code unrelated to the task.

---

## 6. Git Safety

The AI **must never automatically** perform any of the following:

- Switch, create, rename, or delete branches.
- Merge, rebase, or cherry-pick.
- Reset, restore, clean, or stash changes.
- Commit or amend commits.
- Push, force-push, or delete remote branches.
- Modify Git configuration.
- Discard anyone's uncommitted work.

Read-only Git commands are allowed and encouraged:

```bash
git status
git branch --show-current
git diff
git log --oneline
```

If the user explicitly asks for a Git write operation:

1. Inspect `git status` and `git diff` first.
2. Stage only the intended files by path — never `git add .`.
3. Do not include secrets, `.env` files, credentials, `node_modules`, or build output.
4. Follow the repository's commit message style (`feat(turkey): ...`, `docs: ...`, `fix(italy): ...`).
5. Report exactly what was done.

If a merge conflict occurs, stop and hand control back to the user. Do not attempt to resolve it by discarding one side.

---

## 7. Scope Discipline

Unless the user explicitly requests otherwise:

- Do not install or update dependencies.
- Do not modify lockfiles.
- Do not change Angular, TypeScript, or build configuration.
- Do not create application folders or placeholder components.
- Do not delete files.
- Do not modify application source when the task is documentation-only.
- Do not implement the destination wheel before country routes and portal pages are functional.
- Do not add features that were not requested.

For a documentation-only task: only edit the requested documentation files. Do not touch `src/`.

---

## 8. Verification

After a coding task, verify with the available scripts:

```bash
npm run build
npm test
```

Notes:

- Angular 22 requires Node.js `^22.22.3`, `^24.15.0`, or `^26.0.0`. Check `node -v` if the build fails immediately.
- There is no lint script. Prettier is available via `npx prettier --check <files>`.
- SSR/prerender is enabled. Route or browser-API changes can break the build.
- Never claim a command succeeded without running it. If it cannot run (for example, unsupported Node version), say so explicitly.
- Do not run `npm install` unless dependencies are missing and the user approves.

---

## 9. Required Completion Report

After every coding task, report:

- **Summary** — what was done.
- **Files created** — full repository-relative paths.
- **Files modified** — full repository-relative paths.
- **Shared architecture impact** — `none`, or a list of shared files and the approval obtained.
- **Verification** — exact commands run and their results.
- **Failures / limitations** — anything that failed or could not be verified.
- **Remaining work** — follow-ups or recommendations.
- **Git actions** — state that no commit, push, merge, or branch change was performed, unless explicitly requested.

---

## 10. Escalation Rules

Stop and ask the user when:

- The change touches shared code, shared styles, or build configuration.
- Ownership of the affected area is unclear.
- The request conflicts with the architecture or ownership rules.
- The request requires a destructive or irreversible action.
- A new dependency seems necessary.
- Existing code is broken and fixing it exceeds the requested scope.
- A merge conflict or unexpected working-tree state is encountered.

Do not invent requirements, silently broaden scope, or make architectural decisions on the team's behalf.

---

## 11. Quick Checklist

- [ ] Read `AGENTS.md`
- [ ] Checked `git status` and current branch
- [ ] Read the relevant existing files
- [ ] Identified owner and feature boundary
- [ ] Confirmed whether the change is shared
- [ ] Obtained approval for any shared change
- [ ] Used Angular-native, accessible, responsive patterns
- [ ] Kept styles scoped and avoided cross-country imports
- [ ] Ran build/tests, or documented why not
- [ ] Reported files, verification, failures, and remaining work
- [ ] Performed no Git write operations without explicit request
