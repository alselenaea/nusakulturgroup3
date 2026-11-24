# NusaKultur

A responsive cultural heritage platform for discovering Indonesia's living traditions and connecting with the communities that keep them alive. Built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons.

## Product experience

- **Discover:** Search and filter locally hosted experiences, browse regions, review host details, and submit a booking request prototype.
- **Connect:** Explore heritage communities and join/leave circles; find language circles and cultural knowledge-sharing features.
- **Cultural Passport:** Preview digital heritage stamps and achievement badges.
- Responsive navigation, editorial journal, locally rooted sample content, and mobile-first layouts.

## Requirements

- Node.js 18.17 or newer
- npm (or another Node package manager)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Import this repository from the Vercel dashboard.
2. Keep the detected Next.js framework preset and default build command (`npm run build`).
3. Deploy. No environment variables are required for the prototype.

Alternatively, install the Vercel CLI and run `vercel` from the project directory. Public sample photography is loaded from Unsplash URLs; replace with licensed project assets before production. Booking, passport, and membership interactions are front-end prototypes and need a backend to persist real user data or payments.
