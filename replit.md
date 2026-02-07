# N.K. Mackie Author Website

## Overview

This is the official website for N.K. Mackie, a former federal agent turned crime fiction author. The site promotes her debut novel "Dismissed" (Book 1 of the Empire Crime Investigations series) and serves as her author platform. Key features include:

- **Public pages**: Home, About, Books, Newsletter, Contact, Privacy Policy, Terms of Service, Cookie Policy
- **Newsletter subscription**: Integrates with Kit (formerly ConvertKit) for email list management
- **Contact form**: Allows visitors to submit messages stored in the database
- **Admin dashboard**: Protected area for managing subscribers and contact form submissions, accessed via a hidden Alt+Shift click on the footer credit text
- **Book preview modal**: Lets visitors read Chapter 1 before buying on Amazon

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend (React SPA)
- **Framework**: React with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — not React Router
- **Styling**: Tailwind CSS with CSS custom properties for theming. Custom color palette uses navy/teal/off-white tones. Fonts are Montserrat and Libre Baskerville (loaded via Google Fonts)
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives. Components live in `client/src/components/ui/`. The components.json config uses path aliases (`@/components`, `@/lib`, etc.)
- **State Management**: TanStack React Query for server state. No Redux or similar global state library
- **Forms**: React Hook Form with Zod validation via `@hookform/resolvers`
- **Newsletter Form**: Embeds a Kit (ConvertKit) form directly as raw HTML via `dangerouslySetInnerHTML` — posts directly to Kit's endpoint, not to the backend

### Backend (Express API)
- **Runtime**: Node.js with Express, written in TypeScript and run via `tsx` in development
- **API prefix**: All API routes are under `/api/`
- **Authentication**: Session-based auth using `express-session` with `memorystore`. Admin login is simulated via a mock Google OAuth flow (not a real OAuth integration). Session data includes `userId`
- **Storage pattern**: Uses an `IStorage` interface defined in `server/storage.ts` with two implementations:
  - `MemStorage` (in-memory, for development/fallback)
  - `DatabaseStorage` (PostgreSQL via Drizzle ORM)
- **Build**: Production build uses `vite build` for frontend + `esbuild` for server bundling. Output goes to `dist/`

### Database
- **Database**: PostgreSQL (Neon serverless)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-Zod validation
- **Connection**: Uses `@neondatabase/serverless` with WebSocket support (`ws` package)
- **Schema location**: `shared/schema.ts` — shared between client and server
- **Tables**:
  - `users` — admin authentication (id, username, password, email, googleId, isAdmin, createdAt)
  - `subscribers` — newsletter subscribers (id, email, createdAt, active)
  - `contacts` — contact form submissions (id, name, email, subject, message, createdAt, read)
- **Migrations**: Managed via `drizzle-kit push` (schema push approach, not migration files)
- **Config**: `drizzle.config.ts` reads `DATABASE_URL` from environment

### Project Structure
```
client/           → React frontend
  src/
    components/   → App-specific components
    components/ui/→ shadcn/ui primitives
    hooks/        → Custom React hooks
    lib/          → Utilities, constants, query client
    pages/        → Route page components
server/           → Express backend
  index.ts        → Server entry point
  routes.ts       → API route definitions
  auth.ts         → Session/auth middleware
  storage.ts      → IStorage interface + MemStorage
  database-storage.ts → PostgreSQL storage implementation
  db.ts           → Drizzle/Neon database connection
  vite.ts         → Vite dev server integration
shared/           → Shared code (schema, utils)
attached_assets/  → Static assets (images, text files)
migrations/       → Drizzle migration output directory
```

### Path Aliases
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets` → `attached_assets/` (Vite alias only)

### Key Design Decisions

1. **Shared schema between frontend and backend**: The Drizzle schema in `shared/schema.ts` generates both database types and Zod validation schemas, ensuring type safety across the full stack.

2. **Dual storage implementations**: The `IStorage` interface allows swapping between in-memory and database storage. The active implementation is exported from `server/storage.ts`.

3. **Kit (ConvertKit) for newsletters**: Rather than managing email subscriptions through the backend, the newsletter form posts directly to Kit's hosted endpoint. The backend subscriber table may serve as a backup or admin view.

4. **Hidden admin access**: The admin login modal is triggered by Alt+Shift clicking the footer credit text — there's no visible admin link in the navigation.

## External Dependencies

- **Database**: PostgreSQL via Neon Serverless (`@neondatabase/serverless`). Requires `DATABASE_URL` environment variable
- **Newsletter/Email**: Kit (ConvertKit) — form ID `8193195`, posts to `https://app.kit.com/forms/8193195/subscriptions`
- **Book Sales**: Links to Amazon product page for "Dismissed"
- **Author Profile**: Links to Goodreads author page
- **Analytics**: Google Search Console verification tags in `index.html` (Google Analytics may be used per privacy policy but isn't currently in the codebase)
- **Deployment**: Configured for Vercel (`vercel.json`) with build output at `dist/public`
- **Dev tooling**: Replit-specific plugins (`@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`) are conditionally loaded in development