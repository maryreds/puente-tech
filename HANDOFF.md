# TalentOS — Handoff Document

## What This Is
A bilingual (English/Spanish) landing page + job platform for Mexican and Latin American software developers to find US tech jobs with visa sponsorship. Branded under JSM Consulting. Inspired by the "Jobr" design (clean, bold typography, green accents, 3D folder icon). Name is a play on words: Talentos (Spanish for "talents") + OS (operating system).

## Live Links
- **Vercel project**: `talentos` (deploy with `npx vercel --prod --yes`)
- **GitHub**: https://github.com/maryreds/puente-tech
- **Local dev**: `cd ~/Projects/puente-tech && npm run dev` (port 3003)

## Tech Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 (`@theme inline` in globals.css)
- Fonts: **Gloock** (headings) + **Noto Sans** (body) — both from Google Fonts
- Deployed on Vercel with env vars for JobDiva API

## Project Structure
```
src/
  app/
    layout.tsx              — Root layout (Gloock + Noto Sans fonts, metadata)
    page.tsx                — Landing page (wraps all sections in LangProvider)
    globals.css             — Tailwind theme tokens (green palette, fonts)
    api/jobs/route.ts       — JobDiva REST API proxy (auth, chunked fetch, India filter)
    empleos/
      page.tsx              — "Open Roles" page with search + job grid
      JobsGrid.tsx          — Client component: fetches /api/jobs, search, detail modal
  components/
    LangContext.tsx          — Shared English/Spanish language state (React Context)
    Navbar.tsx              — Sticky nav, JSM logo + globe video, bilingual links
    Hero.tsx                — Bold Gloock heading, 3D folder SVG, EN/ES toggle
    Features.tsx            — 4 feature cards + referral banner
    HowItWorks.tsx          — 3-step process cards
    FAQ.tsx                 — 6 accordion Q&As in 2-col grid
    Testimonial.tsx         — Quote with avatar
    Footer.tsx              — Big CTA + email capture + 4-col footer (JSM branded)
    JobCard.tsx             — Colorful job card (10 color palettes, 6 icon variants)
    JobDetail.tsx           — Click-to-open modal with job details + apply CTA
public/
    jsm-logo.svg            — JSM Consulting logo (vector)
    jsm-logo-hires.png      — High-res JSM logo (2182x1240)
    globe-intro.mp4         — Spinning globe intro video for navbar
```

## Design System
- **Primary green**: `#22c55e` (buttons, accents, highlights)
- **Light green**: `#dcfce7` (banners, badges)
- **Green gradient**: `#f0fdf4` → `#ffffff` (CTA section)
- **Text**: `#0a0a0a` (foreground), `#737373` (gray-medium)
- **Borders**: `#e5e5e5`
- **Headings**: Gloock (Google Fonts)
- **Body**: Noto Sans (Google Fonts)
- **Job card colors**: 10 palette variants (rose, blue, emerald, violet, amber, cyan, pink, orange, teal, indigo) assigned by hash of job ID

## Bilingual System
- `LangContext.tsx` provides shared `lang` / `setLang` state
- Hero has EN/ES toggle (English default)
- Navbar, Hero text, CTA all react to language toggle
- Sections below hero are still Spanish-only (Features, HowItWorks, FAQ, Testimonial, Footer)

## JobDiva API Integration
- **Credentials**: stored in `.env.local` and Vercel env vars
  - `JOBDIVA_BASE_URL=https://api.jobdiva.com`
  - `JOBDIVA_CLIENT_ID=2951`
  - `JOBDIVA_USERNAME=api_user@jsmconsultant.com`
  - `JOBDIVA_PASSWORD=Integration@65`
- **Auth flow**: GET `/api/authenticate` → token (plain string, no Bearer prefix)
- **Data endpoint**: `/api/bi/NewUpdatedJobRecords` (13-day chunks, paginated at 500)
- **Filters**: COUNTRY != IN (India excluded), status = OPEN/ACTIVE/RELEASED
- **Salary parsing**: hourly rates → annual (×2080), shown as estimated range
- **Response cached** 5 min (`s-maxage=300`)
- **No job description endpoint available** in BI API — detail modal uses available fields (title, location, salary, dates, skills, openings, remote %)

## What's Built
- [x] Bilingual landing page (EN default, ES toggle)
- [x] JSM Consulting branding (logo, globe video, footer)
- [x] 3D folder SVG icon floating in hero
- [x] Navbar syncs with language toggle
- [x] `/empleos` — "Open Roles" page with live JobDiva data (146+ jobs)
- [x] Colorful job cards with search
- [x] Job detail modal with visa sponsorship badge + apply CTA
- [x] India jobs filtered out
- [x] GitHub + Vercel deployment pipeline

## What's Next
1. **Make remaining sections bilingual** — Features, HowItWorks, FAQ, Testimonial, Footer should also react to EN/ES toggle
2. **Auth + Candidate Profiles** — Supabase Auth, resume upload, skills questionnaire
3. **Visa Pre-screening Flow** — TN/H-1B eligibility assessment
4. **Application Tracking** — candidate dashboard for status tracking
5. **Admin Dashboard** — manage candidates and applications
6. **Email Capture Backend** — wire up footer form (Resend or similar)
7. **Blog/SEO** — Spanish-language visa guides, salary comparisons
8. **Custom Domain** — e.g., talentos.jsmconsulting.com
