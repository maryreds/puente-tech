# Puente Tech — Handoff Document

## What This Is
A Spanish-language landing page for Mexican software developers and tech professionals to find US tech jobs with visa sponsorship. Inspired by the "Jobr" design (clean, bold typography, green accents, serif/sans-serif mix).

## Live Links
- **Production**: https://puente-tech-92wl9od4w-maryreds-projects.vercel.app
- **GitHub**: https://github.com/maryreds/puente-tech
- **Local dev**: `cd ~/Projects/puente-tech && npm run dev` (port 3003)

## Tech Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 (with `@theme inline` in globals.css)
- Fonts: Inter (body) + Instrument Serif (headings)
- Deployed on Vercel

## Project Structure
```
src/
  app/
    layout.tsx          — Root layout (fonts, metadata in Spanish)
    page.tsx            — Main page composing all sections
    globals.css         — Tailwind theme tokens (green palette, fonts)
    fonts/              — Instrument Serif .ttf
  components/
    Navbar.tsx          — Sticky nav with mobile menu, smooth scroll links
    Hero.tsx            — Bold heading, 3D briefcase emoji, green CTA, trust line
    Features.tsx        — 4 feature cards + referral banner
    HowItWorks.tsx      — 3-step process cards (Paso 1/2/3)
    FAQ.tsx             — 6 accordion Q&As in 2-col grid
    Testimonial.tsx     — Quote from "Carlos Rodriguez" with avatar
    Footer.tsx          — Big CTA with email capture + 4-col footer
```

## Design System
- **Primary green**: `#22c55e` (buttons, accents, highlights)
- **Light green**: `#dcfce7` (referral banner, badges)
- **Green gradient**: `#f0fdf4` → `#ffffff` (CTA section background)
- **Text**: `#0a0a0a` (foreground), `#737373` (gray-medium)
- **Borders**: `#e5e5e5` (gray-border)
- **Headings**: Instrument Serif (italic for main headings)
- **Body**: Inter

## What's Built (v1 Landing Page)
- [x] Responsive navbar with mobile hamburger menu
- [x] Hero section with bold typography + 3D emoji + CTA
- [x] Features section (4 cards: jobs, visa, salary, relocation)
- [x] Referral banner
- [x] How It Works (3-step process)
- [x] FAQ accordion (6 questions about visa, cost, timeline)
- [x] Testimonial section
- [x] Footer CTA with email capture
- [x] Footer with links + social icons
- [x] GitHub repo + Vercel production deployment

## What's Next (Priority Order)
1. **JobDiva API Integration** — Sync job listings into Supabase DB (cron via GitHub Actions)
2. **Job Listings Page** (`/empleos`) — Searchable/filterable job cards showing salary in USD + MXN, no company names
3. **Job Detail Page** (`/empleos/[slug]`) — Full job description, requirements, salary breakdown, "Aplicar" CTA
4. **Auth + Candidate Profiles** — Supabase Auth, resume upload, skills/English-level questionnaire
5. **Visa Pre-screening Flow** — Questionnaire to assess TN/H-1B eligibility before full application
6. **Application Tracking Dashboard** (`/mi-cuenta`) — Status tracking for candidates
7. **Admin Dashboard** — Internal tool to manage candidates, applications, job mappings
8. **Blog/SEO Content** — Spanish-language articles on visas, salary comparisons, US tech life
9. **Email Capture Backend** — Wire up the footer email form to a mailing list (Resend, etc.)
10. **Custom Domain** — e.g., puentetech.com

## Database Schema (Planned)
See the original planning conversation for the full schema. Key tables:
- `jobs_raw` (synced from JobDiva)
- `jobs` (transformed, public-facing, Spanish, with salary estimates)
- `candidates` (profiles, resumes, visa eligibility)
- `applications` (status tracking)

## Notes
- All content is in Spanish — no i18n library needed, site IS Spanish-first
- TN visa (USMCA) is the primary immigration path — fastest for Mexican tech professionals
- Candidate-side is free; employer pays for everything
- Company names are intentionally hidden from job listings
