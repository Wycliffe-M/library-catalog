# Library Catalog

A single-page library catalog preview built with React, TypeScript and Vite. Browse a collection of books, search by title or author, filter by genre, show only available books, and open a detail view for any book.

This is a frontend-only preview with mock data. It mirrors the data model of my full-stack library management system (NestJS + Prisma + PostgreSQL) so the same components can be connected to the real API later.

**Live demo:** _link coming soon_

<!-- Optional: add a screenshot at docs/screenshot.png and uncomment the line below -->
<!-- ![Library Catalog screenshot](docs/screenshot.png) -->

## Features

- Responsive grid of book cards (title, author, genre, "3 of 4 available")
- Live search by title or author (case-insensitive)
- Genre filter: All, Fantasy, Science Fiction, Mystery, Non-Fiction
- "Available only" toggle
- Filters combine: search, genre and availability all apply together
- Detail modal with ISBN and availability; closes with Esc, a backdrop click, or the Close button
- Empty state with a "Clear filters" button when nothing matches
- Colored cover placeholders with title initials (no remote images)

## Tech stack

- React 19 with hooks (`useState`, `useEffect`, `useRef`)
- TypeScript
- Vite
- Plain CSS with design tokens (CSS variables), no UI libraries
- ESLint

## Getting started

Requires Node.js 20.19 or newer.

```bash
git clone https://github.com/Wycliffe-M/library-catalog.git
cd library-catalog
npm install
npm run dev
```

Then open http://localhost:5173.

| Command           | What it does                                 |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the development server with hot reload |
| `npm run build`   | Type-check and build for production          |
| `npm run preview` | Serve the production build locally           |
| `npm run lint`    | Run ESLint                                   |

## Project structure

```
src/
├── main.tsx                  # Entry point
├── App.tsx                   # Holds all state: search, genre, availableOnly, selectedBook
├── index.css                 # Global styles and CSS variables (colors, fonts)
├── types/book.ts             # Book and Genre interfaces
├── data/books.ts             # Mock data (16 books, 4 genres)
├── utils/coverInitials.ts    # Cover initials, skipping words like "The" and "A"
└── components/
    ├── SearchBar
    ├── GenreFilter
    ├── AvailabilityToggle
    ├── BookGrid
    ├── BookCard
    ├── BookDetailModal
    └── EmptyState
```

State lives in `App`. The filtered list is calculated from that state on every render and is never stored separately. Components receive data and callback functions through props.

## Design

A warm, bookish look: cream background, forest green accent, serif headings. Every color is a CSS variable defined in `src/index.css`, so the theme can be changed in one place (for example, `--color-accent`).

## How I built it

I built this as an exercise in prompting an AI coding agent and in learning React and TypeScript.

- **Agent-built (Google Antigravity, Gemini 3.8 Flash):** the book grid and cards, and the detail modal. Each was one scoped prompt covering the goal, tech constraints, files to touch, behavior, and concrete design values (hex codes and pixel sizes instead of "make it look nice").
- **Written by hand, with AI tutoring:** the types and mock data, search, genre filter, availability toggle, empty state and cover initials. I wrote these myself to learn the patterns (controlled inputs, lifting state up, conditional rendering).

What worked well:

- One small step per prompt, with an explicit list of files the agent may not touch
- Reviewing every diff before accepting, with permission prompts set to review each command
- Running `tsc -b` and `npm run lint` after each step, and committing a working version before the next one

What I would do differently: the agent left duplicate class names on some elements (for example `cover` next to `modal-cover`). A cleanup pass would remove them.

## Known limitations

- The modal has no focus trap, and focus does not return to the card when it closes
- Search matches substrings only (no fuzzy matching)
- Mock data only: no backend, login, or borrowing
- No routing: the detail view is a modal, not a page
