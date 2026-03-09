# BetterBlood Brand & Style Guide

---

## 1. Brand Identity

### Brand Name

**BetterBlood** (written as one word, capital B's) or **Better Blood** (two words in logo lockup).

- Product URL: `app.betterblood.ai`
- Marketing URL: `betterblood.ai`

### Logo Mark

The logo is a **blood drop silhouette** containing a **medical cross** centered inside a circular cutout. The drop uses a vertical linear gradient from bright red to deep crimson.

| Attribute        | Value                                           |
|------------------|------------------------------------------------|
| Shape            | Teardrop / blood drop                          |
| Inner element    | Medical plus (+) sign within a circular window |
| Gradient top     | `#FF004D` (Bright Red)                         |
| Gradient bottom  | `#95003F` (Deep Crimson)                       |

**Dark mode variant:** White cross on the gradient drop (no background circle).
**Light mode variant:** Dark navy cross (`#002238`) on a white circle within the gradient drop.

### Logo Lockup

The wordmark appears as uppercase text beside or below the logo mark:

- Font: **Poppins**, weight 600
- Style: Uppercase, letter-spacing 3px, font-size 18px
- **Dark mode:** "BETTER" in `#F5567E` (primary pink), "BLOOD" in white
- **Light mode:** "BETTER" in `#002238` (navy), "BLOOD" in `#DF285F` (primary rose)

### Brand Voice

BetterBlood is a health-tech product that helps users understand and manage their blood biomarkers. The brand should feel:

- **Clinical yet approachable** - medical accuracy without sterility
- **Empowering** - users take control of their health data
- **Privacy-first** - trust and security are core values
- **Modern** - clean, data-forward design language

---

## 2. Color System

### 2.1 Foundation Colors

| Token             | Dark Theme   | Light Theme   | Role                              |
|-------------------|-------------|---------------|-----------------------------------|
| **Primary**       | `#F5567E`   | `#DF285F`     | Brand accent, links, alerts, "bad" status |
| **Secondary**     | `#FFD186`   | `#FFB166`     | Caution, "ok" status, warm accent |
| **Tertiary**      | `#06D6A0`   | `#00A680`     | Success, "good" status, focus rings |
| **Quaternary**    | `#118AB2`   | `#0A558C`     | Informational, default badges     |

### 2.2 Neutral / Background Colors

| Token                  | Value                                         | Usage                        |
|------------------------|-----------------------------------------------|------------------------------|
| **Dark Navy**          | `#002238`                                     | Base dark color, text (light mode) |
| **Dark Navy Alt**      | `#223344` (`#234`)                            | Secondary dark               |
| **Dark BG Gradient**   | `linear-gradient(to bottom, #112233, #1f0e18)` | App background (dark)       |
| **Dark Card Gradient** | `linear-gradient(to bottom, #1f2f3f, #2a3a4a)` | Card surfaces (dark)        |
| **Dark Button Gradient** | `linear-gradient(to bottom, #345, #456)`    | Button surfaces (dark)       |
| **Dark Nav Gradient**  | `linear-gradient(to bottom, #1a2a3a, #2a101f)` | Sidebar/nav (dark)          |
| **Light BG**           | `#FFFFFF`                                     | App background (light)       |
| **Light Card BG**      | `#FFFFFF`                                     | Card surfaces (light)        |
| **Light Secondary BG** | `#F5F5F5`                                     | Secondary card surfaces      |
| **HTML Base**          | `#112233` (`#123`)                            | html background, header bg   |

### 2.3 Text Colors

| Context              | Dark Theme              | Light Theme             |
|----------------------|-------------------------|-------------------------|
| **Primary text**     | `#FFFFFF`               | `#000000`               |
| **Body text**        | `rgba(255,255,255,0.67)` (`#fffa`) | `rgba(0,0,0,0.67)` (`#000a`) |
| **Muted/secondary**  | `rgba(255,255,255,0.5)` | `rgba(0,0,0,0.5)`      |
| **Disabled text**    | `rgba(255,255,255,0.5)` | `rgba(0,0,0,0.5)`      |
| **Links**            | `#F5567E` (primary)     | `#DF285F` (primary-light) |
| **Link hover**       | `#FFFFFF`               | *(not explicitly set)*  |

### 2.4 Semantic Status Colors

The product maps its four brand colors to health status indicators:

| Status      | Dark                | Light               | Usage                          |
|-------------|---------------------|---------------------|--------------------------------|
| **Bad**     | `#F5567E` (primary) | `#DF285F`           | Out-of-range, alerts, errors   |
| **OK**      | `#FFD186` (secondary) | `#FFB166`         | Borderline, caution            |
| **Good**    | `#06D6A0` (tertiary) | `#00A680`          | In-range, healthy, success     |
| **Unknown** | `rgba(255,255,255,0.4)` | `rgba(0,0,0,0.4)` | No data, pending              |
| **Info**    | `#118AB2` (quaternary) | `#0A558C`         | Neutral information, default badges |

### 2.5 Border & Surface Colors

| Element           | Dark Theme                        | Light Theme                       |
|-------------------|-----------------------------------|-----------------------------------|
| **Card border**   | `rgba(255,255,255,0.05)` (top/sides), transparent bottom | `rgba(0,0,0,0.1)` |
| **Button border** | `rgba(255,255,255,0.1)`           | `rgba(0,0,0,0.1)`                |
| **Input box-shadow** | `0 0 0 1px rgba(0,0,0,0.1)` (unfocused) | Same                         |
| **Input focus**   | `inset 0 0 0 2px` tertiary color  | Same, using light tertiary        |
| **Card shadow**   | `0 10px 30px rgba(0,0,0,0.1)`     | `0 10px 30px rgba(0,0,0,0.05)`   |

---

## 3. Typography

### 3.1 Typeface

| Property     | Value                          |
|-------------|-------------------------------|
| **Family**   | Poppins (Google Fonts)         |
| **Fallback** | `sans-serif`                   |
| **Weights**  | 300, 400, 500, 600, 700, 800, 900 |
| **Primary weights** | 400 (body), 500 (headings/buttons), 600 (strong/labels) |

### 3.2 Type Scale

| Level    | Size   | Weight | Line Height | Usage                          |
|----------|--------|--------|-------------|--------------------------------|
| **H1**   | 28px   | 500    | 1.5         | Page titles (app)              |
| **H1 hero** | 64px | 500  | 1.5         | Marketing hero (desktop)       |
| **H2**   | 24px   | 500    | 1.5         | Section titles                 |
| **H2 marketing** | 36px | 500 | 1.5     | Marketing section titles       |
| **H3**   | 20px   | 500    | 1.5         | Card titles, subsections       |
| **H4**   | 16px   | 500    | 1.5         | Component titles               |
| **H5**   | 14px   | 500    | 1.5         | Small titles                   |
| **H6**   | 12px   | 500    | 1.5         | Micro titles                   |
| **Body** | 16px   | 400    | 1.5         | Default paragraph text         |
| **Small**| 14px   | 400    | 1.5         | Secondary text, placeholders   |
| **Caption** | 13px | 400  | -           | Tertiary text, small links     |

### 3.3 Special Text Styles

| Style        | Size  | Weight | Transform   | Spacing   | Opacity | Usage              |
|-------------|-------|--------|-------------|-----------|---------|---------------------|
| **Overline** | 12px  | 400    | uppercase   | 1px       | 0.5     | Category labels     |
| **Label**    | 12px  | 600    | uppercase   | 0.5px     | -       | Form labels         |
| **Badge**    | 12px  | 500    | uppercase   | 0.5px     | -       | Status badges       |
| **Nav link** | 14px  | 500    | uppercase   | 2px       | -       | Marketing nav       |
| **Logo text**| 18px  | 600    | uppercase   | 3px       | -       | Logo wordmark       |

---

## 4. Spacing & Layout

### 4.1 Common Spacing Values

While there is no formal spacing scale token system, these values recur consistently:

| Token (suggested) | Value    | Usage                                      |
|-------------------|----------|--------------------------------------------|
| **xs**            | 0.25rem (4px) | Icon gaps, tight element spacing       |
| **sm**            | 0.5rem (8px)  | Compact gaps, badge padding            |
| **md**            | 0.75rem (12px)| Nav link padding, input padding        |
| **lg**            | 1rem (16px)   | Standard gap, section padding          |
| **xl**            | 1.5rem (24px) | Card padding (mobile), nav gaps        |
| **2xl**           | 2rem (32px)   | Card padding (desktop), logo area      |
| **3xl**           | 2.5rem (40px) | Large section spacing                  |

### 4.2 Border Radius

| Usage       | Value     |
|-------------|-----------|
| **Buttons** | 4px       |
| **Cards**   | 4px       |
| **Inputs**  | 4px       |
| **Badges**  | 0.25rem (4px) |
| **Nav links** | 5px     |
| **Pills**   | 6px       |
| **Modals**  | 10px      |
| **Marketing hero images** | 20px |

> **Design note:** The base radius is consistently **4px** across core components. This creates a subtly rounded, modern but restrained aesthetic. Marketing surfaces allow larger radii for visual softness.

### 4.3 Layout Dimensions

| Element              | Value                  |
|----------------------|------------------------|
| **Sidebar (expanded)** | 230px                |
| **Sidebar (collapsed)** | 60px               |
| **Mobile header**    | 56px                   |
| **Mobile nav bar**   | 68px                   |
| **Content max-width** | 1200px (marketing)   |
| **Mobile breakpoint** | 768px                |
| **Tablet breakpoint** | 1024px               |

### 4.4 Responsive Strategy

| Breakpoint    | Layout                                                |
|---------------|-------------------------------------------------------|
| **> 1024px**  | Desktop: full sidebar (app), full header nav (marketing) |
| **768-1024px** | Tablet: collapsed sidebar, adapted grids             |
| **< 768px**   | Mobile: bottom nav (app), hamburger menu (marketing), stacked layout |

### 4.5 Page Layout Strategy

Every page should follow a consistent structure using the `PageContainer` and `PageHeader` components. This ensures uniform spacing, max-widths, heading hierarchy, and responsive behavior across all pages.

#### Component hierarchy

```
<Page>                          // Shell: sidebar + mobile nav + footer
  <PageContainer size="...">    // Content area: max-width + section gap
    <PageHeader                 // Title area: h1, description, actions, breadcrumb
      title="..."
      description="..."
      actions={...}
      breadcrumb={...}
    />
    {/* Page sections — spaced by PageContainer's gap (2.5rem) */}
    <section>...</section>
    <section>...</section>
  </PageContainer>
</Page>
```

#### PageContainer sizes

| Size        | Max-width | When to use                                          |
|-------------|-----------|------------------------------------------------------|
| `narrow`    | 600px     | Forms, settings, profile — focused single-column content |
| `default`   | 960px     | Most pages — articles, FAQ, dashboards               |
| `wide`      | 1200px    | Marketing sections with multi-column layouts          |
| `full`      | none      | Data tables, biomarker detail — needs all horizontal space |

#### PageHeader props

| Prop          | Type          | Description                                           |
|---------------|---------------|-------------------------------------------------------|
| `title`       | `string`      | Renders as `<h1>`. Required.                          |
| `description` | `string?`     | Renders as `<p>` below the title.                     |
| `actions`     | `ReactNode?`  | Buttons/controls, right-aligned on desktop, stacked on mobile. |
| `breadcrumb`  | `ReactNode?`  | Navigation trail above the title.                     |

#### Spacing rules

1. **Between major sections**: `$space-3xl` (2.5rem / 40px) — enforced by `PageContainer`'s `gap`. No manual spacing needed.
2. **Within a section**: `$space-lg` (1rem / 16px) for related items (e.g., form fields, card lists).
3. **Between tight elements**: `$space-sm` (0.5rem / 8px) for items within a group (e.g., chips, tags).

#### Heading hierarchy per page

| Level  | Usage                                              |
|--------|----------------------------------------------------|
| **h1** | Page title (one per page, via `PageHeader`)         |
| **h2** | Major section titles within the page                |
| **h3** | Card titles, subsection titles                      |
| **h4** | Content group labels (e.g., privacy policy sections)|
| **h5** | Small/secondary labels                              |

> Every page must have exactly one `h1` delivered through `PageHeader`. Do not use `h2` as a page title.

#### Page transition

- **Web app:** `PageContainer` wraps content in `Fader` for fade-in animation.
- **Marketing:** No transition wrapper (page-level animations handled differently per route).

#### Checklist for new pages

1. Wrap content in `<PageContainer size="...">` — pick the right size.
2. Start with `<PageHeader title="..." />` — add `description`, `actions`, or `breadcrumb` as needed.
3. Group content into semantic sections — they'll get uniform `2.5rem` vertical spacing automatically.
4. Use `Col` with `gap="1rem"` for items within a section.
5. Don't add custom `marginTop` or `paddingTop` between sections — let `PageContainer`'s gap handle it.
6. Test at mobile (< 768px) — `PageHeader` actions stack, container goes full width.

---

## 5. Component Patterns

### 5.1 Cards

The primary content container across both projects.

**Light mode:**
- Background: `#FFFFFF`
- Border: `1px solid rgba(0,0,0,0.1)`
- Shadow: `0 10px 30px rgba(0,0,0,0.05)`
- Padding: 2rem (desktop), 1.5rem (mobile)
- Radius: 4px

**Dark mode:**
- Background: `linear-gradient(to bottom, #1f2f3f, #2a3a4a)`
- Border: `2px solid rgba(255,255,255,0.05)` (top, left, right); transparent bottom
- Shadow: `0 10px 30px rgba(0,0,0,0.1)`

**Secondary cards** (`.card-secondary`):
- Light: `#F5F5F5` background, no shadow
- Dark: `rgba(255,255,255,0.05)` background

### 5.2 Buttons

**Light mode:**
- Background: `#FFFFFF`
- Border: `1px solid rgba(0,0,0,0.1)`
- Text: black, weight 500
- Hover: `#EEEEEE` background, `scale(1.025)` transform

**Dark mode:**
- Background: `linear-gradient(to bottom, #345, #456)`
- Border: `1px solid rgba(255,255,255,0.1)`
- Text: white
- Hover: `linear-gradient(to bottom, #456, #567)`

**Shared:** Padding 10px 14px, radius 4px, 200ms transition, Poppins font.

### 5.3 Inputs

- Radius: 4px
- Padding: 12px 14px
- Font: Poppins, 16px, weight 500
- Focus: `inset 0 0 0 2px` using tertiary color, with tinted background
- Labels: uppercase, 12px, weight 600, letter-spacing 0.5px
- Error state: red border ring (`#CA0000`), red-tinted background

### 5.4 Badges

- Uppercase, 12px, weight 500, letter-spacing 0.5px
- Padding: 0.5em 0.75em, radius 0.25rem
- Variants: default (quaternary), green (tertiary), red (primary), yellow (secondary)
- Dark variant: colored text on 10% opacity background of same color

### 5.5 Status Circles

Small 12px circles using semantic status colors. Used inline to indicate biomarker health status.

### 5.6 Navigation (App)

- Fixed left sidebar, 230px expanded / 60px collapsed
- Logo + wordmark at top
- Link items: icon + label, active state uses primary color tint background
- Mobile: converts to full-screen overlay or bottom tab bar

### 5.7 Navigation (Marketing)

- Fixed top header, centered content (max-width 1200px)
- Logo + wordmark left, nav links right
- Links: uppercase, 14px, weight 500, letter-spacing 2px
- Mobile: hamburger toggle, full-screen overlay with gradient background

### 5.8 Tooltips

- Background: `#112233` (light) / `#334455` (dark)
- Padding: 12px
- Full opacity (no transparency)

---

## 6. Iconography

| System          | Source                        |
|-----------------|-------------------------------|
| **Icon library** | FontAwesome (Free Solid, Regular, Brands) |
| **Icon style**   | Solid fills for primary actions, regular outlines for secondary |
| **Default color** | Muted (`rgba` of text color at ~50% opacity) |
| **Active/hover** | Full text color or primary brand color |
| **Icon sizes**   | 12px (inline), 16px (default), 24px (nav), 32px (feature) |

---

## 7. Motion & Animation

| Pattern            | Implementation                          | Duration  |
|--------------------|----------------------------------------|-----------|
| **Button hover**   | `transform: scale(1.025)`              | 200ms     |
| **Nav transitions** | Width collapse, opacity fade          | 300ms     |
| **Input focus**    | Box-shadow + background color change   | 300ms     |
| **Modal enter/exit** | Fade + slide animation               | ~300ms    |
| **Skeleton loading** | Shimmer/pulse animation              | Repeating |
| **Page transitions** | Fade in/out (Fader component)        | ~300ms    |
| **Scroll animations** | animate.css + react-animate-on-scroll | Varies   |

**Principles:**
- Transitions are subtle and functional, not decorative
- Standard easing (no custom bezier curves defined)
- Hover states use gentle scale transforms rather than color-only changes
- Loading states use skeleton shimmer rather than spinners

---

## 8. Dark Mode Strategy

Dark mode is the **default** across both projects.

| Aspect             | Implementation                                    |
|--------------------|--------------------------------------------------|
| **State management** | Redux slice (`theme-slice.ts`), persisted in localStorage |
| **CSS mechanism**  | `.dark-mode` class on root `#App` / `.App` element |
| **Pattern**        | Components define light styles at root, dark overrides nested under `.dark-mode` selector |
| **Color adjustment** | Dark palette uses lighter/more saturated variants; light palette uses deeper/muted variants |

**Surface hierarchy (dark mode):**
1. Page background: `linear-gradient(#123, #1f0e18)` - deep navy to dark plum
2. Nav/sidebar: `linear-gradient(#1a2a3a, #2a101f)` - slightly lighter
3. Cards: `linear-gradient(#1f2f3f, #2a3a4a)` - raised surfaces
4. Buttons/controls: `linear-gradient(#345, #456)` - interactive surfaces
5. Input backgrounds: `rgba(255,255,255,0.1)` - subtle light overlay

> **Design note:** The dark gradients incorporate warm plum/berry undertones (`#1f0e18`, `#2a101f`) which ties back to the blood-red brand identity and prevents the UI from feeling cold or purely technical.

---

## 9. Charts & Data Visualization

| Library    | recharts                                      |
|-----------|-----------------------------------------------|
| **Colors** | Uses the four brand colors for data series    |
| **Style**  | Integrated with dark/light theme              |

The four-color system maps directly to chart elements:
- Primary (pink/red) for concerning metrics
- Secondary (amber) for borderline metrics
- Tertiary (green) for healthy metrics
- Quaternary (blue) for neutral/informational data

---

## 10. Resolved Inconsistencies & Ongoing Recommendations

### Resolved (as of token refactor)

1. **SCSS vs JS color mismatch** — `theme.ts` now matches `palette.scss` (primary `#F5567E`). Comment in both files states palette is the single source of truth.
2. **Missing `px` units** — Button and IconButton use `16px` and `$radius-sm` in both projects.
3. **Spacing & radius tokens** — `palette.scss` now defines `$space-xs` through `$space-3xl` and `$radius-sm` through `$radius-2xl`. Key components use these tokens.
4. **Hardcoded colors** — Replaced with tokens: `$color-bg-html`, `$color-bg-app`, `$color-tooltip-bg`, `$color-focus-bg-light/dark`, `$color-input-error`, `$color-bg-card-secondary`, `$color-border-*`, `$color-bg-button-dark`, etc.
5. **Input focus ring** — Global and component inputs use `$tertiary-color` / `$tertiary-color-light` and `$color-focus-bg-light` / `$color-focus-bg-dark`.

### Remaining Recommendations

1. **Elevate light mode** — Add subtle backgrounds and surface elevation so light mode feels as considered as dark mode.
2. **Shared component library** — Both projects duplicate the same library components (Card, Button, Badge, Input, etc.). Consider extracting into a shared package.
3. **CSS custom properties for theming** — Optionally migrate to custom properties on `:root` / `[data-theme="dark"]` to reduce `.dark-mode` duplication and enable theme transitions.

---

## 11. Asset Summary

| Asset               | Location                                     |
|---------------------|----------------------------------------------|
| **Logo (light)**    | `/public/img/logo.svg`                       |
| **Logo (dark)**     | `/public/img/logo-dark.svg`                  |
| **Safari pinned tab** | `/public/img/safari-pinned-tab.svg`        |
| **Font**            | Google Fonts CDN (Poppins)                   |
| **Icons**           | FontAwesome (bundled via npm)                |

---

## 12. Quick Reference

```
Brand Colors:     #F5567E  #FFD186  #06D6A0  #118AB2
Logo Gradient:    #FF004D -> #95003F
Dark Navy:        #002238
Font:             Poppins, 400/500/600
Base Radius:      4px
Mobile Break:     768px
Default Theme:    Dark
```
