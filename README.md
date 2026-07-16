# JS Challenge (50 Days)

A 50-day JavaScript UI/frontend challenge implemented as a single Angular application, where each day's exercise (animated counters, drag-and-drop, quiz app, password generator, Netflix-style navigation, etc.) is its own Angular component/route.

## Tech Stack

- Angular 9 (`@angular/core` ~9.1.11), TypeScript ~3.8
- Angular CLI, Karma + Jasmine (unit tests), Protractor (e2e)
- Font Awesome via `@fortawesome/angular-fontawesome`

## Prerequisites

- Node.js and npm compatible with Angular 9 (Node 10–12 recommended)
- Angular CLI: `npm install -g @angular/cli@9`

## Installation

```bash
npm install
```

## Run (dev server)

```bash
npm start        # runs `ng serve --open`, opens http://localhost:4200/
```

## Build

```bash
npm run build     # output to dist/
```

## Tests

```bash
npm test          # unit tests via Karma/Jasmine
npm run e2e       # end-to-end tests via Protractor
npm run lint      # tslint
```

## Project Structure

Each challenge lives in its own folder under `src/app/`, e.g. `expanding-cards`, `drag-n-drop`, `quizz-app`, `password-generator`, `netflix-navigation`, `todo-list`, `movie-app`, `drawing-app`, and more (~50 total). Routing between them is defined in `src/app/app-routing.module.ts`.
