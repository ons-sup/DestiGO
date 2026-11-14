# Using AI Assistants on DestiGo

This is a short guide for team members. It is not a second rulebook.

**`AGENTS.md` is the authoritative source for AI coding rules.** Read it before asking an assistant to change code. This file only explains how to work with AI safely in practice.

---

## Core idea

DestiGo is split into independently owned country portals. AI assistants are useful inside one clearly scoped area, and risky when they roam across shared code, another developer's portal, or Git history.

Give the assistant a narrow task, review every change, and keep Git operations in human hands.

---

## Before you prompt

1. Confirm you are on the right branch (`git branch --show-current`).
2. Know who owns the area you are asking about.
3. Tell the assistant exactly which files or folder are in scope.
4. State whether the task is country-local or touches shared code.

Good prompt:

> Work only inside `src/app/features/italy/`. Add a destination card component that uses the existing data shape. Do not edit routes, global styles, or shared components. Report every file you change.

Weak prompt:

> Make the Italy page better.

---

## While the assistant works

- Watch which files it opens and edits.
- Stop it if it touches another country, `shared/`, `core/`, rules files, or build configuration without approval.
- Do not let it run Git write commands. Commit, merge, and push yourself, or explicitly approve a single read-only inspection.
- Never paste `.env` contents, tokens, passwords, or private keys into a prompt.
- Treat generated image URLs, external links, and data as unverified until you check them.

---

## Review checklist

- [ ] Only intended files changed.
- [ ] No cross-country imports.
- [ ] Country styles are scoped to components.
- [ ] Shared files were not modified without approval.
- [ ] No new dependency was added.
- [ ] Accessibility basics are present (alt text, labels, keyboard access, focus).
- [ ] Layout works on mobile and desktop.
- [ ] `npm run build` and `npm test` were run, or the failure is explained.
- [ ] The completion report lists files, verification, and remaining work.

---

## What AI should not decide for you

- Creating or renaming branches.
- Committing, merging, rebasing, resetting, or pushing.
- Changing Angular versions, dependencies, or build configuration.
- Creating missing architecture folders or placeholder components.
- Implementing the shared destination wheel inside a country portal.
- Resolving a merge conflict by discarding one side.
- Assigning ownership of the Spain portal or other unowned areas.

When in doubt, stop and ask your teammate or supervisor.

---

## Working across the two portals

| Situation                                    | Action                                              |
| -------------------------------------------- | --------------------------------------------------- |
| Türkiye-only task                            | Scope the assistant to `features/turkey/`           |
| Italy-only task                              | Scope the assistant to `features/italy/`            |
| Shared shell, routes, auth, favorites, wheel | Propose first, review together, use a shared branch |
| Task needs another portal's code             | Do not copy it; propose a shared abstraction        |

---

## Keep Git human

Use the assistant for code and explanations, not for history changes. The safe default:

- You run `git status`, `git diff`, `git log` (read-only, either of you).
- You stage files explicitly with `git add <path>`.
- You write and run the commit, merge, and push commands.

If you explicitly ask an assistant for a Git write operation, inspect `git status` and `git diff` first and stage only the intended files.

---

## Quick prompt template

```text
Scope: src/app/features/<country>/
Task: <one concrete change>
Constraints: no shared files, no new dependencies, scoped styles, responsive, accessible
Verification: run npm run build and npm test if possible
Report: files created/modified, shared impact, verification results, failures, remaining work
Do not commit, push, merge, or switch branches.
```

For the full rules, see [`AGENTS.md`](./AGENTS.md). For project structure and workflows, see [`README.md`](./README.md).
