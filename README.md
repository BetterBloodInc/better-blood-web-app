# Better Blood – Web App

Open source biomarker and health tracking tool — free for anyone to use.

The main Better Blood app: biomarker tracking, diet log, exercise log, and AI chat.  
**Live:** https://app.betterblood.ai

## Links

- **Site:** https://betterblood.ai  
- **App:** https://app.betterblood.ai  
- **Discord:** https://discord.gg/6uTdxpph  
- **Brand & style guide:** [BRAND_AND_STYLE_GUIDE.md](BRAND_AND_STYLE_GUIDE.md)  

---

## Tech stack

- **Runtime:** Node 22+ (see [.nvmrc](.nvmrc))
- **Language:** TypeScript
- **UI:** React 18, Redux Toolkit, React Router, SCSS
- **Build:** Vite 6
- **Data:** IndexedDB (Dexie), Google Sheets API, OpenAI API

---

## Prerequisites

- **Node.js** ≥ 22 (e.g. `nvm use` if you use nvm)
- **Yarn** (package manager)
- **AWS CLI** (for deployment; configured profile)

---

## Getting started

```bash
# From repo root
cd better-blood-web-app

# Use Node 22 (if using nvm)
nvm use

# Install dependencies
yarn install

# Start dev server (http://localhost:8081)
yarn start
```

No `.env` is required for local development. For deployment you need a `.env` in this directory (see [Deployment](#deployment)).

---

## Scripts

| Command | Description |
|--------|-------------|
| `yarn start` | Dev server on port 8081 |
| `yarn build` | Production build → `dist/` |
| `yarn deploy` | Build, copy public assets, sync to S3, invalidate CloudFront |
| `yarn format` | Format with Prettier |
| `yarn lint` | Check formatting with Prettier |

---

## Project structure (for maintainers)

| Area | Path | Notes |
|------|------|--------|
| **Constants** | `src/constants/` | Biomarkers, ranges, tests, interventions, theme, prompts |
| **Types** | `src/types/` | Shared TypeScript types (biomarkers, user, interventions, etc.) |
| **Features** | `src/features/` | Feature components (biomarker cards, tables, intervention cards, settings) |
| **Pages** | `src/pages/` | Route-level pages (Home, Biomarker, Diet log, Exercise, Settings, AI chat) |
| **API** | `src/api/` | Google Sheets, OpenAI, chat, settings |
| **DB** | `src/db/` | IndexedDB (Dexie) – profile, chat, database setup |
| **Store** | `src/store.ts` | Redux store |
| **Router** | `src/router.tsx` | React Router config |
| **Modals** | `src/modals/` | Modal components + Redux slices |
| **Library** | `src/library/` | Reusable UI (forms, table, buttons, etc.) |
| **Layout** | `src/layout/` | Nav, footer, page shell, conversation drawer |

Adding or changing biomarkers/ranges/tests/interventions usually touches `src/constants/` and sometimes `src/types/`.

---

## Deployment

Deploys to **AWS S3** with **CloudFront** invalidation.

1. Create a `.env` in this directory with:

   ```bash
   BUCKET=your-s3-bucket-name
   PROFILE=your-aws-cli-profile
   DISTRIBUTION_ID=your-cloudfront-distribution-id
   ```

2. Run:

   ```bash
   yarn deploy
   ```

   This runs `deploy.sh`: sources `.env`, builds with Vite, runs `copy-public.sh`, then `aws s3 sync` and `aws cloudfront create-invalidation`. Do not commit `.env`.

---

## Roadmap / TODO

### General
- [ ] Log other metrics: heart rate, weight over time, VO2 max
- [ ] Favorite metrics and filter to favorites only
- [ ] Keyboard shortcuts
- [ ] Mobile-friendly UI
- [ ] Days since last measure
- [ ] Ability to delete (relevant entities)

### Home page
- [ ] Show profile highlights
- [ ] Show latest blood stats and what needs work
- [ ] Show latest diet and exercise trends

### Data
- [ ] Put constants into versioned JSON (ranges, biomarkers)

### Learning section
- [ ] Learn about different parts of blood
- [ ] Learn what affects each biomarker
- [ ] Learn how biomarkers affect organs

### Diet log
- [ ] Calendar view (what was logged per day)
- [ ] Click date → detail view, add new log
- [ ] Show food with corresponding biomarkers for closest test after intake

### Fitness log
- [ ] Track steps
- [ ] Track workouts
- [ ] Track heart rate / VO2 max
