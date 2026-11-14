# DestiGo ✈️

**Discover destinations, save your favorites.** A travel destination discovery website built with Angular.

## Overview

DestiGo is a travel destination discovery website that helps users explore destinations, discover attractions, and save their favorite places. The initial destinations are **Italy, Türkiye, and Spain**.

This is **NOT** a travel booking platform. Version 1 focuses on discovering destinations and managing favorites.

**Academic project** — SUP'COM (Higher School of Communication of Tunis), Web Development course, supervised by Dr. Maroua Nouioua.

## MVP Features

- Home page with featured destinations
- Destinations listing
- Individual destination details
- User login
- User registration
- Favorites management
- About page
- Responsive navigation and footer

**Future considerations:** search, filters, interactive maps, travel recommendations.

## Tech Stack

Based on the actual dependencies in `package.json`:

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Angular | ^22.2.0 |
| Language | TypeScript | ~6.0.2 |
| Reactive streams | RxJS | ~7.8.0 |
| Styling | Plain CSS (okLCH color variables, Inter font) | — |
| Server-side rendering | Angular SSR + Express | ^22.2.7 / ^5.1.0 |
| Testing | Vitest | ^5.0.0 |
| Package manager | npm | 11.19.0 |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

```bash
npm install
```

### Development server

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The app reloads automatically on source changes.

### Build

```bash
npm run build
# or
ng build
```

Build artifacts are output to `dist/`. Use `npm run watch` for a watch-mode build.

### Tests

```bash
npm test
# or
ng test
```

Unit tests run with the Vitest test runner.

### Server-side rendering

```bash
npm run build
npm run serve:ssr:DestiGO
```

## Project Structure

```
DestiGo/
├── src/
│   ├── app/
│   │   ├── app.ts              # Root standalone component
│   │   ├── app.html            # Root template (router-outlet)
│   │   ├── app.css             # Root component styles
│   │   ├── app.routes.ts       # Route definitions (currently empty)
│   │   ├── app.config.ts       # Application config providers
│   │   ├── app.spec.ts         # Root component spec
│   │   ├── app.routes.server.ts# SSR route config
│   │   └── app.config.server.ts# SSR app config
│   ├── index.html              # Main HTML entry
│   ├── main.ts                 # Browser bootstrap
│   ├── main.server.ts          # Server bootstrap
│   ├── server.ts               # Express SSR server entry
│   └── styles.css              # Global styles
├── public/                     # Static assets
├── angular.json                # Angular CLI workspace config
├── package.json                # Dependencies & scripts
├── tsconfig.json               # Base TypeScript config
├── tsconfig.app.json           # App TypeScript config
├── tsconfig.spec.json          # Test TypeScript config
└── README.md
```

## Planned Website Pages

| Page | Status | Description |
|------|--------|-------------|
| Home | Planned | Featured destinations |
| Destinations listing | Planned | Browse all destinations |
| Destination details | Planned | Individual destination page |
| Login | Planned | User login |
| Registration | Planned | User registration |
| Favorites | Planned | Saved places management |
| About | Planned | Project information |
| Navigation & Footer | Planned | Responsive shell |

## UI/UX Design Direction

The scaffold already establishes a visual direction in `src/app/app.html`:

- **Color palette:** okLCH-defined variables — bright blue, electric violet, french violet, vivid pink, hot red, orange red, plus a gray scale
- **Gradients:** red → pink → purple vertical and horizontal accents
- **Typography:** Inter / Inter Tight font stack
- **Components:** Pill-shaped buttons/tags with hover states
- **Responsiveness:** Media-query-based layout adjustments (e.g., stacked content below 650px)
- **Smoothing:** Antialiased font rendering for crisp text

## Development Roadmap

- [ ] Set up Angular routing and navigation shell
- [ ] Create Home page with featured destinations (Italy, Türkiye, Spain)
- [ ] Create Destinations listing page
- [ ] Create Destination details page
- [ ] Implement User login
- [ ] Implement User registration
- [ ] Implement Favorites management
- [ ] Create About page
- [ ] Add responsive navigation and footer
- [ ] Add unit tests with Vitest
- [ ] Consider: search, filters, interactive maps, recommendations

> Tasks are checked off only when verifiably implemented. The repository currently contains a fresh Angular scaffold with no feature pages built yet.

## Team & Academic Information

| Role | Name |
|------|------|
| Institution | SUP'COM — Higher School of Communication of Tunis |
| Course | Web Development |
| Supervisor | Dr. Maroua Nouioua |
| Team members | Ahmed Ben Mim, Ons Chtioui |

## License

This is an academic project for the Web Development course at SUP'COM.