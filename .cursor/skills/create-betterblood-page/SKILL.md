---
name: create-betterblood-page
description: Creates or updates a Better Blood page following the layout strategy (PageContainer, PageHeader, heading hierarchy). Use when adding a new page, refactoring an existing page, or when the user asks for a new route or screen.
---

# Create Better Blood Page

## Checklist

1. Wrap content in `<PageContainer size="...">` — choose `narrow` | `default` | `wide` | `full`.
2. Start with `<PageHeader title="..." />` — add `description`, `actions`, or `breadcrumb` as needed.
3. Do not add raw `<h1>` — the only h1 is from PageHeader.
4. Do not add `marginTop` / `paddingTop` between sections — PageContainer gap (2.5rem) handles it.
5. Use `<Col gap="1rem">` for items within a section.
6. Add route in router if new page.

## Template

```tsx
import { PageContainer } from '~src/library/PageContainer'
import { PageHeader } from '~src/library/PageHeader'
import { Col } from '~src/library/Col'

export const NewPage = () => {
  return (
    <PageContainer size="default">
      <PageHeader
        title="Page Title"
        description="Optional short description."
      />
      <Col gap="1rem">
        {/* Section content */}
      </Col>
    </PageContainer>
  )
}
export default NewPage
```

## Size guide

- **narrow** (600px): Settings, Profile, forms
- **default** (960px): Home, About, FAQ, 404, Coming Soon
- **wide** (1200px): Marketing multi-column
- **full**: Biomarkers table, Biomarker detail

## Reference

See [BRAND_AND_STYLE_GUIDE.md](../../BRAND_AND_STYLE_GUIDE.md) Section 4.5 Page Layout Strategy.
