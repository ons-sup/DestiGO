# Using AI Assistants on DestiGo

This is a short guide for team members. It is not a second rulebook.

**`AGENTS.md` is the authoritative source for AI coding rules.** Read it before asking an assistant to change code. This file only explains how to work with AI safely in practice.

---

## Project Overview

DestiGo is a travel destination discovery platform built with Angular 22. It is **not** a booking or payment platform.

The application contains **independent country portals** that each own their pages, components, data, and scoped CSS. Portals never import from one another. Shared UI primitives and services live outside the country folders.

- **Turkey portal** (`/turkey`): Developed by Ahmed Ben Mim. Contains home, destination lists, and detail pages.
- **Italy portal** (`/italy`): Developed by Ons Chtioui. Contains Rome, Venice, Florence, and all major destinations/experiences.
- **Spain portal** (`/spain`): Implemented. Contains home, destinations, and detail pages.

The global application shell (`app.ts`) renders `<router-outlet />` and the shared destination wheel (`app-destination-wheel-nav`). The homepage (`/`) is the global dark DestiGO landing page; `/turkey` and `/italy` are independent country portals.

---

## Application Architecture

The actual component and routing hierarchy in the repository:

### Global Shell

- `src/app/app.ts` — Root component with `<router-outlet />` and `<app-destination-wheel-nav />`
- `src/app/app.html` — Template: `<router-outlet />` + destination wheel nav
- `src/app/app.routes.ts` — Global route definitions (home, turkey, italy, auth, fallbacks)
- `src/app/app.routes.server.ts` — SSR prerender config for Italy detail/experience routes
- `src/app/app.config.ts` — Client-side providers (Router, hydration)
- `src/app/app.config.server.ts` — Server-side rendering with `withRoutes()`
- `src/app/layout/layout.component.ts` — Italy portal layout with header + footer
- `src/app/layout/header/header.component.ts` — Country-aware header with navigation and favorites count
- `src/app/layout/footer/footer.component.ts` — Shared footer
- `src/app/layout/site-footer/site-footer.component.ts` — Configurable shared site footer (`global` and `turkey` variants)
- `src/app/features/auth/` — Shared demo authentication pages
- `src/styles.css` — Global styles (scoped variables only)

### Country Portals

| Portal | Route | Key Files |
|--------|-------|-----------|
| **Turkey** | `/turkey` | `features/turkey/turkey.routes.ts`, `turkey.component.ts`, `turkey-home/`, `destination-detail/` |
| **Italy** | `/italy` (lazy) | `features/italy/`, `italy.routes.ts` (via app.routes.ts children), components, data |

### Shared UI Components (outside country folders)

- `src/app/shared/components/button/` — Reusable button component
- `src/app/shared/components/destination-card/` — Reusable destination display
- `src/app/shared/components/favorite-button/` — Favorite toggle button
- `src/app/shared/components/feedback/` — Empty, error, and loading state components
- `src/app/shared/components/form-field/` — Shared form field wrapper
- `src/app/shared/components/hero-section/` — Hero image/title/subtitle component
- `src/app/shared/components/destination-wheel/` — Radial country selector (global, mounted once)
- `src/app/shared/services/favorites.service.ts` — Centralized favorites state

### Shared Services

- `src/app/core/country.service.ts` — Current country state (signal), available countries
- `src/app/core/destination.service.ts` — Destination lookup by country code
- `src/app/core/services/` — Other core services

---

## Data Architecture

### Authentication

- No backend persistence yet. Country code is stored in a `signal` in `CountryService` (`providedIn: 'root'`).
- `window.localStorage` is not currently used; state is purely in-memory during a session.
- `CountryService.setCountry(code)` updates the signal; `getCurrentCountry()` reads it.

### Favorites

- `FavoritesService` manages a `Set<string>` of favorite destination IDs.
- Emits events when favorites change.
- `FavoriteButtonComponent` (`app-favorite-button`) connects the UI to the service.
- Favorites filter is currently Italy-only in `FavoritesComponent`; the shared service is framework-ready for multi-country use.

### Destination & Experience Data

- **Italy data** (`features/italy/data/`): `destination-details.data.ts` (6 destinations with rich detail), `experience-details.data.ts` (4 categories with highlights, wines, where-to-try).
- **Turkey data** (`features/turkey/data/`): `turkey.data.ts` (3 destinations: Istanbul, Cappadocia, Antalya).
- Both portals have their own local data; no shared data layer yet.
- `getAllDestinationIds()` and `getAllExperienceIds()` are exported for SSR prerender param generation.

---

## Component Conventions

- **Standalone components** are the norm. Import only what is needed.
- `input()` / `output()` for component API; `signal()` for internal state.
- Component styles are **scoped** via `styleUrl` (CSS per component).
- No inline styles in templates unless trivial.
- Use `CommonModule` for *ngIf/ngFor/Angular pipes.
- Router links use `routerLink`; navigation is asynchronous with `loadComponent` / `loadChildren`.
- Accessibility: meaningful `alt` text, focus-visible outlines, keyboard-friendly interactive elements.

### Country-Specific Branding

- Header shows the **current country** via `CountryService` (flag + name).
- Destination wheel color per country is defined in `destination-wheel.data.ts` (`#c0392b` Türkiye, `#1a7a4c` Italy, `#c2710c` Spain).
- Each portal maintains its own visual identity; headers are country-scoped, while the site footer is a shared configurable component.

### Header & Footer Isolation

- The header is rendered by country layout components (`layout.component.ts` for Italy and `turkey.component.ts` for Türkiye), not by the global shell.
- Header navigation is computed from the active country input, so each portal keeps its own links.
- `site-footer` is a shared configurable footer; country portals may pass a `variant` such as `turkey`.
- Do not add country-specific styles to global CSS.

---

## UI/UX Conventions

- **Responsive layouts**: components adapt from mobile to desktop via media queries in their scoped CSS.
- **Accessible navigation**: visible `focus-visible` outlines, keyboard-friendly order, `tabindex` management in the destination wheel.
- **Loading states**: hero sections show content progressively; skeleton loading not yet implemented but patterns are established.
- **Error states**: detail pages display "not found" when an ID has no data; console errors are guarded.
- **Focus reduced motion**: CSS media queries respect `prefers-reduced-motion` where animations exist.
- **Image loading**: `loading="lazy"` on images; optimized assets in `public/assets/`.
- **Purposeful animations**: hover transforms, subtle transitions; no auto-playing videos without user intent.
- **Color variables**: use CSS custom properties (e.g., `--primary`, `--accent`, `--text-color`) defined in component styles or global `:root`.

---

## Agent Workflow

Follow this sequence for every task:

1. **Inspect documentation and current Git state.** Run `git status` and `git branch --show-current`. Read `AGENTS.md` and the relevant feature folders.
2. **Understand the existing implementation.** Read the actual files — components, templates, routes, data. Do not infer from filenames.
3. **Identify the exact files involved.** Determine if the change is country-local, shared, or ambiguous.
4. **Make scoped changes.** Edit only the files needed. Prefer standalone components and scoped styles. Do not refactor unrelated code.
5. **Run relevant tests and build.** `npm run build` and `npm test`. Verify no regressions.
6. **Verify visually when appropriate.** Check affected routes in the browser. Confirm country layouts remain isolated. Check responsive behavior.
7. **Review the Git diff.** Ensure only intended files are modified. No unintended changes.
8. **Report changes and limitations.** Use the completion report format from `AGENTS.md:11`. List files created/modified, shared impact, verification results, failures, remaining work.
9. **Commit or push only when authorized.** Do not perform Git write operations without explicit user request.

### What AI Should Not Decide

- Creating or renaming branches, or creating/removing Git worktrees.
- Committing, merging, rebasing, resetting, or pushing.
- Changing Angular versions, dependencies, or build configuration.
- Creating missing architecture folders or placeholder components.
- Implementing the shared destination wheel inside a country portal.
- Resolving a merge conflict by discarding one side.
- Assigning ownership of the Spain portal or other unowned areas.

When in doubt, stop and ask your teammate or supervisor.

---

## Working Across the Two Portals

| Situation                                    | Action                                              |
| -------------------------------------------- | --------------------------------------------------- |
| Türkiye-only task                            | Scope the assistant to `features/turkey/`           |
| Italy-only task                              | Scope the assistant to `features/italy/`            |
| Shared shell, routes, auth, favorites, wheel | Propose first, review together, use a shared branch |
| Task needs another portal's code             | Do not copy it; propose a shared abstraction        |

---

## Quick Prompt Template

```
Scope: src/app/features/<country>/
Task: <one concrete change>
Constraints: no shared files, no new dependencies, scoped styles, responsive, accessible
Verification: run npm run build and npm test if possible
Report: files created/modified, shared impact, verification results, failures, remaining work
Do not commit, push, merge, or switch branches.
```

For the full rules, see [`AGENTS.md`](./AGENTS.md). For project structure and data, see [`README.md`](./README.md).