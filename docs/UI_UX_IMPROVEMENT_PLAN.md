# Better Blood Web App — UI/UX Improvement Plan

This document outlines a structured plan to improve the user interface and experience of the Better Blood web application. The north star is Linear/Notion-class polish: keyboard-first, fast, dense-but-readable, and delightful. It builds on the existing [BRAND_AND_STYLE_GUIDE.md](../BRAND_AND_STYLE_GUIDE.md) and current codebase patterns.

---

## 1. Current State Summary

- **Strengths:** Strong brand and style guide, consistent page layout strategy (PageContainer + PageHeader), design tokens in `palette.scss`, dark/light theme support, clear typography and color semantics for health status, AI chat integration.
- **Gaps:** No command palette or keyboard shortcuts, minimal Home dashboard, no global search, `<a href>` used for in-app navigation causing full reloads, destructive actions (e.g. profile delete) lack confirmation and use `window.location.reload()`, light mode underdeveloped, no onboarding flow, inconsistent application of layout patterns on some pages, and opportunities in accessibility, loading states, and mobile parity.

---

## 2. Command Palette & Keyboard-First UX

> _This is what separates a "good web app" from a Linear-class experience._

### 2.1 Command Palette (Cmd+K / Ctrl+K)

A global command palette is the single highest-impact feature for power users.

| Priority | Action |
|----------|--------|
| **High** | Build a `CommandPalette` modal (overlay with search input, filtered results list, keyboard navigation). Trigger via `Cmd+K` / `Ctrl+K` globally. |
| **High** | Populate with: **pages** (Home, Biomarkers, Profile, Settings, About), **biomarkers** (all ~80 from `BIOMARKERS` constant, searchable by name/id), **actions** (Add measurement, Upload file, Toggle theme, Open AI chat). |
| **Medium** | Add recently visited items and fuzzy matching (e.g. via `fuse.js` or `cmdk`). Group results by category (Navigation, Biomarkers, Actions). |
| **Low** | Support nested commands (e.g. "Add measurement" opens a second step to pick which biomarker). |

### 2.2 Keyboard Shortcuts

| Priority | Action |
|----------|--------|
| **High** | Define a core shortcut set: `Cmd+K` (palette), `G then H` (go home), `G then B` (go biomarkers), `G then S` (go settings), `G then P` (go profile), `N` (new measurement), `T` (toggle theme), `?` (show shortcut help). |
| **High** | Show shortcuts in tooltips (e.g. sidebar nav items, button tooltips) so they are discoverable without memorization. |
| **Medium** | Add `Escape` handling consistently: close the topmost overlay (modal > drawer > command palette). |
| **Medium** | Add arrow-key navigation in the biomarker table/list rows, with `Enter` to open detail. |

---

## 3. Home Dashboard & First-Run Experience

### 3.1 Dashboard (Returning Users)

The Home page currently shows two static navigation cards. For a health-tracking app, the landing page should be an **at-a-glance dashboard**.

| Priority | Action |
|----------|--------|
| **High** | **Health summary strip:** Show a row of key biomarker status badges (e.g. 3 good, 2 borderline, 1 out-of-range) linking to details. If the user has recent data, this is the first thing they see. |
| **High** | **Recent activity:** A small section showing the last 3–5 measurements added, with timestamp, biomarker name, value, and status indicator. |
| **Medium** | **Trend indicators:** For each tracked biomarker, show a small inline sparkline or arrow (up/down/flat) vs. the prior measurement so the user immediately sees direction. |
| **Medium** | **Alerts / action items:** If any biomarker is out of range, surface a gentle callout: "Glucose is above optimal — view interventions". Links to the biomarker detail page. |
| **Low** | **Quick actions bar:** "Add measurement", "Upload file", "Open AI chat" — prominent buttons at the top of the dashboard so the most common actions are one click away. |

### 3.2 First-Run / Onboarding (New Users)

| Priority | Action |
|----------|--------|
| **High** | Detect "new user" (no profile, no biomarker data). Show a guided welcome flow instead of the empty dashboard: (1) Set up profile, (2) Add your first measurement or upload a file, (3) Explore your results. Use a progress stepper or checklist. |
| **Medium** | After the first measurement is added, show a contextual "What's next?" card: "View your biomarker detail page", "Set up your reference ranges", "Try the AI chat". |
| **Low** | Optional product tour overlay (highlight key UI areas with popovers) that can be dismissed and replayed from Settings. |

---

## 4. Layout & Page Consistency

### 4.1 Align All Pages With Page Layout Strategy

| Priority | Action |
|----------|--------|
| **High** | **Biomarkers page:** Add a top-level `PageHeader` (e.g. title "Biomarkers", optional description, actions). Remove the duplicate `<h1>` from `BiomarkerList` so the single h1 comes from `PageHeader`. Ensure `BiomarkerTable` receives the same header context (title, primary actions like "Add measurement", "Upload file") so desktop and mobile share one source of truth. |
| **Medium** | Audit every route for exactly one `PageContainer` and one `PageHeader` (or documented exception). Add a simple lint or checklist in the create-betterblood-page skill so new pages don't regress. |
| **Low** | Consider a shared "page shell" wrapper used by all routes to enforce structure (e.g. always render `PageHeader` first, then children). |

### 4.2 Spacing and Section Hierarchy

- Rely on `PageContainer` gap (`$space-3xl`) between sections; remove ad-hoc `marginTop` / `paddingTop` between sections.
- Use `Col` with `gap="1rem"` within sections. Standardize section headings to h2 for major sections, h3 for subsections, per the brand guide.

---

## 5. Navigation & Information Architecture

### 5.1 In-App Routing

| Priority | Action |
|----------|--------|
| **High** | Replace all in-app `<a href="...">` with React Router `<Link>` or `NavLink` (e.g. Home.tsx cards, breadcrumbs, footer links, metric chips). This preserves SPA behavior, avoids full reloads, and enables transition animations. |
| **High** | Remove `window.location.reload()` calls (e.g. Profile.tsx after delete) — use React Query cache invalidation or `navigate('/')` instead. |
| **Medium** | Use a single routing base (e.g. `createBrowserRouter` + `RouterProvider`) and ensure external links (Discord, Donate, Privacy) use `<a href="..." target="_blank" rel="noopener noreferrer">` and are clearly distinguished (e.g. icon or "External" label). |

### 5.2 URL-Driven State

Linear-class apps encode view state in the URL so views are bookmarkable, shareable, and work with browser back/forward.

| Priority | Action |
|----------|--------|
| **Medium** | **Biomarker table:** Persist active filters (category, status), sort column/direction, date selection, and view mode in URL search params (e.g. `?category=lipid&status=high&sort=name`). |
| **Medium** | **Settings/Profile tabs:** Use route segments or query params (e.g. `/settings?tab=ai`) so direct-linking to a tab works. |
| **Low** | Support deep-linking into biomarker detail sections (e.g. `/biomarkers/glucose#interventions`). The hash-scroll logic exists but could be made more robust and exposed in breadcrumbs/nav. |

### 5.3 Sidebar and Theme/Menu Actions

- Theme toggle and "Collapse menu" are currently implemented as `Tab` components with `href="/dark-mode"` and `href="/menu-collapsed"`. These are actions, not destinations. Consider:
  - Rendering them as buttons (no `NavLink`) so they don't affect the URL or history.
  - Or keeping them as tabs but ensuring the router ignores these paths (e.g. no route, or redirect to current path) so the URL doesn't show `/dark-mode` or `/menu-collapsed`.

### 5.4 Mobile Navigation Parity

- **Mobile bottom nav** currently has: Home, Biomarkers, Profile, AI Chat. **Desktop sidebar** also has: Settings, About, Discord, Donate, Theme, Collapse.
- **Recommendation:** Add "More" or "Menu" to the bottom nav that opens a sheet/drawer with Settings, About, Theme toggle, and optional links to Discord/Donate so mobile users can access the same functions without relying on the (collapsed or overlay) sidebar.

### 5.5 Breadcrumbs and Back Navigation

- Biomarker detail page uses a custom breadcrumb (Biomarkers > id). Consider a small reusable `Breadcrumb` component that accepts `[{ label, href? }]` and uses `Link` for in-app hrefs, with consistent styling and optional back button on mobile.

---

## 6. Speed & Perceived Performance

> _Linear feels instant. Every interaction should feel < 100ms._

### 6.1 Optimistic Updates

| Priority | Action |
|----------|--------|
| **High** | When adding a measurement, update the biomarker list/chart/table immediately (optimistic cache update via React Query's `onMutate`) and roll back on error. The user should see their new data point instantly. |
| **Medium** | Apply the same pattern to profile save, reference range edits, and settings changes. |

### 6.2 Route Prefetching and Preloading

| Priority | Action |
|----------|--------|
| **Medium** | Prefetch biomarker detail data on hover/focus of a biomarker row (React Query `prefetchQuery`). When the user clicks, the data is already cached and the page renders instantly. |
| **Low** | Lazy-load heavier route chunks (e.g. AI chat, charts) with `React.lazy` + `Suspense` so the initial bundle is small and secondary routes load on demand. |

### 6.3 Instant Page Transitions

- Avoid blank states between route changes. The `Fader` component is a good start; combine it with skeleton placeholders during lazy-load so the user always sees structure, never a blank page.

---

## 7. Interaction Patterns

### 7.1 Contextual / Hover Actions

| Priority | Action |
|----------|--------|
| **Medium** | Show quick-action icons on hover for biomarker table rows (e.g. "Add measurement", "Edit", "View detail") instead of requiring the user to navigate to the detail page first. |
| **Medium** | On mobile, expose these same actions via swipe gestures or a long-press context menu. |

### 7.2 Inline Editing

| Priority | Action |
|----------|--------|
| **Medium** | Allow inline editing of the most recent measurement value directly in the biomarker table (click the value cell, type, press Enter/Escape). Reduces friction vs. opening a modal. |
| **Low** | Allow inline editing of profile fields (click to edit pattern) rather than requiring the user to scroll to and press "Save changes". Consider auto-save with a debounce, like Notion. |

### 7.3 Destructive Action Safety

| Priority | Action |
|----------|--------|
| **High** | **Profile delete** currently has no confirmation and calls `window.location.reload()`. Add a confirmation dialog or, better, an "Undo" toast pattern: perform the delete, show a toast with "Profile deleted — Undo" for ~5 seconds, and only finalize if not undone. |
| **Medium** | Apply the same undo-toast pattern to measurement deletion and any other destructive action. This is the Linear approach — fast and forgiving rather than slow and blocking. |

### 7.4 Right-Click Context Menus

| Priority | Action |
|----------|--------|
| **Low** | Add a custom right-click context menu on biomarker rows (Copy value, Add measurement, Edit reference range, View detail). This is a polish feature but signals "power tool" to users. |

---

## 8. Component & Pattern Consistency

### 8.1 Button Variants and Visual Hierarchy

- Define explicit button variants: **primary** (filled, brand color), **secondary/default** (current gradient style), **ghost** (no background, text only), **danger** (red/primary for destructive actions like delete). Currently "Save" and "Delete profile" on the Profile page look identical — the delete button should clearly look destructive.
- Use `IconButton` only for icon-only actions (e.g. add in list header); use `Button` with `preIcon`/`postIcon` when a label is present, for better accessibility and clarity.

### 8.2 Cards and Surfaces

- Ensure all content blocks that represent a "section" or "entity" use the shared `Card` component and tokens (`$color-bg-card-dark`, borders, radius). Avoid one-off card-like divs with custom backgrounds.
- Use `.card-secondary` for nested or lower-emphasis surfaces per the brand guide.

### 8.3 Forms (Settings, Profile, Modals)

- Use the shared `Input`, `Dropdown`, `DatePicker`, `TagSelect`, `Checkbox` from the library. Ensure labels use the standard label style (uppercase, 12px, weight 600) and that error states use `$color-input-error` and optional inline error message.
- Add a short form best-practices note to the style guide: one primary submit action, clear validation feedback, and optional "Cancel" that closes the modal or navigates back.

### 8.4 Badges and Status

- Use the shared `Badge` and `StatusCircle` with semantic colors (bad/ok/good/unknown/info). Ensure biomarker tables and cards use the same status logic and presentation so users see a consistent meaning for color across the app.

### 8.5 Collapsible / Accordion Sections

- The About/FAQ page renders all Q&A items expanded. Use a collapsible accordion pattern so users can scan headings and expand only what they need. Apply the same pattern to long sections on the biomarker detail page (About, Interventions, Importance, Tests).

---

## 9. Global Search

| Priority | Action |
|----------|--------|
| **High** | Add a search input in the sidebar (or as part of the command palette) that filters biomarkers by name, category, or status. Typing in the sidebar search should instantly narrow the biomarker list and allow one-click navigation. |
| **Medium** | On the Biomarkers page, add a prominent search/filter bar above the table that supports free-text search across biomarker names and categories. |

---

## 10. Accessibility (a11y)

| Priority | Action |
|----------|--------|
| **High** | **Focus management:** When opening a modal or drawer, move focus into the modal (first focusable element) and trap focus until closed. On close, return focus to the trigger element. |
| **High** | **Keyboard:** Ensure all interactive elements (buttons, links, tabs, form controls) are focusable and operable via keyboard. Sidebar and bottom nav should support arrow keys where appropriate. |
| **Medium** | **ARIA:** Add `aria-label` or `aria-labelledby` to icon-only buttons (e.g. IconButton with tooltip); ensure modals have `role="dialog"` and `aria-modal="true"`. Use `aria-live` for dynamic content (e.g. success message after adding a measurement). |
| **Medium** | **Color and contrast:** Verify text/background contrast for body and muted text in both themes against WCAG AA. Ensure status colors (bad/ok/good) are distinguishable and not relied on alone (e.g. icon or label in addition to color). |
| **Low** | **Reduced motion:** Respect `prefers-reduced-motion` for page transitions, hover scale, and skeleton animations (e.g. disable or shorten animations when the preference is set). |

---

## 11. Loading, Empty, and Error States

### 11.1 Loading

- Use the existing `Skeleton` component for content that loads asynchronously (e.g. profile data, biomarker list, table rows). Prefer skeleton placeholders over spinners for inline content so layout shift is minimal.
- For full-page or section-level loading, consider a single skeleton layout that matches the final content (e.g. header + list of card placeholders on Home).
- Home.tsx fetches `isLoading` but never uses it — show dashboard skeletons while data loads.

### 11.2 Empty States

- Define clear empty states for: no biomarkers yet, no measurements for a biomarker, no results after filtering, no profiles. Each should have a short message and a primary action (e.g. "Add your first measurement", "Upload a file").
- Reuse a simple `EmptyState` component (illustration or icon + title + description + CTA) across pages for consistency.

### 11.3 Errors

- Use a consistent pattern for API or runtime errors: inline error message (e.g. under a form field or in a banner) with optional retry. For critical failures, consider a dedicated error view (e.g. full-page with message and "Go home" / "Retry") rather than a blank or broken layout.

---

## 12. Motion, Feedback, and Toasts

- Keep transitions subtle and functional (per brand guide): button hover scale, input focus, modal enter/exit, page fade.
- Build a unified **Toast system** (`react-hot-toast` is already imported in Profile.tsx — standardize usage):
  - **Success:** "Measurement added", "Settings saved" — auto-dismiss after ~3s, tertiary/green color.
  - **Undo:** "Profile deleted — Undo" — stays for ~5s with an undo button, primary/red color.
  - **Error:** "Failed to save — Retry" — persists until dismissed or retried, with a retry action.
- Ensure toasts are themed (dark/light), positioned consistently (e.g. bottom-center), and accessible (`role="status"`, `aria-live="polite"`).

---

## 13. Data Visualization and Biomarker UX

### 13.1 Charts

- Ensure Recharts usage consistently uses the four brand colors and respects dark/light theme. Axis labels and legends should use the same typography and muted text color as the rest of the app.
- Add hover tooltips on chart data points showing exact value, date, and status.

### 13.2 Tables

- Biomarker table already has filters, date picker, and category tags. Ensure filter state is clear (e.g. "Showing X of Y" or filter chips that can be removed) and that sort order is indicated (e.g. caret in column header).
- Consider a **view toggle** (table vs. card grid) on desktop so users can choose their preferred density.

### 13.3 Favorites / Pinning

| Priority | Action |
|----------|--------|
| **Medium** | Allow users to star/pin their most-watched biomarkers. Pinned biomarkers appear first in the table/list and on the Home dashboard. Store in the same local/profile storage. |
| **Low** | Show pinned biomarkers in the sidebar below the nav items for one-click access (like Linear's "Favorites" section). |

### 13.4 Mobile List

- Biomarker list on mobile should mirror the same primary actions (add measurement, navigate to detail) and status indicators as the table so behavior is consistent across breakpoints.

---

## 14. Responsive and Mobile

- **Touch targets:** Buttons and nav items should meet minimum touch target size (e.g. 44px) on mobile. Check IconButton and bottom nav items.
- **Viewport and safe areas:** Ensure content doesn't sit under notches or system UI; use safe-area insets if needed for fixed headers/footers.
- **Bottom nav:** Keep the current pattern (fixed bottom bar with 4–5 items). If "More" is added, the drawer content should be scrollable and close on route change or overlay tap.
- **Side panel on desktop:** Consider a split-pane layout on wide screens for biomarker list + detail (click a row to open detail in a right panel, keeping the list visible). This reduces navigation friction and mirrors Linear's list/detail split.

---

## 15. Light Mode and Theming

- Per the brand guide, "Elevate light mode" is an ongoing recommendation. Plan small improvements: subtle background differentiation (e.g. `$color-bg-app` vs card), consistent shadows and borders so light mode feels as considered as dark.
- Optionally explore CSS custom properties for theming (e.g. `--color-primary`, `--color-bg-card`) to reduce duplication between `.dark-mode` and default and to enable smooth theme transitions in the future.
- Add a smooth crossfade (~200ms) on theme toggle so the switch doesn't feel jarring.

---

## 16. Progressive Disclosure & Information Density

- **Collapsible sections:** Long detail pages (biomarker detail, About/FAQ) should use collapsible/accordion sections so users see the structure first and expand on demand.
- **Density toggle:** Consider a compact/comfortable display density preference (stored in settings) that adjusts table row height, card padding, and font size slightly. Power users who track many biomarkers benefit from a denser view.
- **Progressive complexity:** Show simple, most-important information by default (value, status, trend). Gate advanced details (reference ranges, test methodology, interventions) behind expandable sections or tabs.

---

## 17. In-App Changelog / What's New

| Priority | Action |
|----------|--------|
| **Low** | Add a small "What's new" indicator (dot on a bell icon or in the sidebar) that opens a lightweight changelog modal showing recent features and fixes. Helps returning users discover improvements and builds trust. |

---

## 18. Technical and Maintainability

- **Shared component library:** If the same components (Card, Button, Badge, Input, etc.) are duplicated in the marketing app, consider extracting them into a shared package so design fixes and a11y improvements apply everywhere.
- **Design tokens in one place:** Keep `palette.scss` as the single source of truth for colors, spacing, and radius. Avoid introducing new hardcoded values; add tokens when a new pattern recurs.
- **Type safety:** Profile.tsx mutates `profile.name` directly before `.save()` — use immutable update patterns and let the mutation handle the change, to avoid stale-state bugs.

---

## 19. Suggested Phasing

| Phase | Focus | Example deliverables |
|-------|--------|----------------------|
| **1 — Foundation** | Routing, destructive action safety, layout fixes | Replace `<a href>` with `<Link>` everywhere; add confirmation/undo to profile delete; add PageHeader to Biomarkers page; remove `window.location.reload()` |
| **2 — Speed & Feel** | Command palette, keyboard shortcuts, optimistic updates | `CommandPalette` component with Cmd+K; core shortcut set; optimistic add-measurement flow |
| **3 — Dashboard** | Home redesign, onboarding, empty states | Health summary + recent activity on Home; first-run stepper; `EmptyState` component; loading skeletons |
| **4 — Data UX** | Search, URL state, hover actions, inline editing, favorites | Global search in sidebar/palette; filter state in URL; hover actions on table rows; pinning |
| **5 — Consistency** | Button variants, collapsible sections, toast system | Danger button variant; accordion FAQ; unified toast with undo pattern; view toggle on biomarkers |
| **6 — Accessibility** | Focus, keyboard, ARIA, contrast | Full modal/drawer focus management; ARIA on icon buttons and dialogs; contrast pass |
| **7 — Polish** | Light mode, density toggle, transitions, changelog | Light mode surface tweaks; compact/comfortable toggle; smooth theme crossfade; "What's new" modal |

---

## 20. Success Criteria

- [ ] Every page has exactly one h1 (via PageHeader), uses PageContainer, and follows the section spacing rules.
- [ ] All in-app navigation uses React Router `<Link>` — no full-page reloads on navigation.
- [ ] `Cmd+K` opens a command palette with page navigation, biomarker search, and key actions.
- [ ] Core keyboard shortcuts are defined, functional, and displayed in tooltips.
- [ ] Home page shows a useful dashboard (health summary, recent activity) for returning users and a guided setup for new users.
- [ ] Adding a measurement feels instant (optimistic update, success toast).
- [ ] Destructive actions use undo-toast or confirmation — never silent deletes.
- [ ] Biomarker table filters and sort are reflected in the URL and survive a page refresh.
- [ ] Key user flows work with keyboard only and with a screen reader.
- [ ] Loading and empty states are in place for all data views.
- [ ] Mobile users can access all functionality (Settings, About, theme) via a "More" menu.
- [ ] Light mode has intentional surface hierarchy and feels as polished as dark mode.
- [ ] No new hardcoded colors or spacing; new patterns use tokens or get new tokens and documentation.

---

## References

- [BRAND_AND_STYLE_GUIDE.md](../BRAND_AND_STYLE_GUIDE.md) — Brand, tokens, layout strategy, components
- [.cursor/skills/create-betterblood-page/SKILL.md](../.cursor/skills/create-betterblood-page/SKILL.md) — Page creation checklist and template
- `src/library/PageContainer.tsx`, `PageHeader.tsx` — Layout components
- `src/palette.scss` — Design tokens
- Inspiration: [Linear](https://linear.app), [Notion](https://notion.so), [Raycast](https://raycast.com), [Vercel Dashboard](https://vercel.com)
