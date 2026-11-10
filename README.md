# Spice Garden — Angular + Tailwind CSS

Premium single-page restaurant website built with Angular standalone components, TypeScript, reactive forms, HTML templates and Tailwind CSS.

## Run locally

Requirements: Node.js 20.19+ and npm.

```bash
npm install
npm start
```

Open http://localhost:4200

## Build

```bash
npm run build
```

## Main files

- `src/app/app.component.html` — website structure and Tailwind utility classes.
- `src/app/app.component.ts` — menu filtering, responsive navigation, form validation and scroll handling.
- `src/styles.css` — Tailwind directives and small custom animation/accessibility rules.
- `tailwind.config.js` — Spice Garden colors, typography, animation utilities.

## Backend integration

Reservation and contact forms currently validate input only. They do not send or persist data. Connect them to your Spring Boot API using Angular `HttpClient` before taking real reservations. Menu items and reviews are sample content. Restaurant contact details are placeholders. Replace remote Unsplash image URLs with licensed/owned optimized images for production.
