# Techura Marketing Website

Production-ready Next.js 14 marketing site for Techura.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8)
![ESLint](https://img.shields.io/badge/ESLint-enabled-4b32c3)

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Copy env vars:

```bash
cp .env.example .env.local
```

3. Run the dev server:

```bash
npm run dev
```

## Project structure

- `app/` - App Router pages, API routes, metadata
- `components/` - Reusable UI + layout components
- `components/ui/` - shadcn/ui primitives
- `content/` - Data-driven content (services, projects, pricing)
- `public/` - Static assets (logos, project placeholders)
- `lib/` - Utilities

## Notes

- Replace placeholder logos in `public/logos/` once you have rights to use client marks.
- Configure email with Resend using `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
