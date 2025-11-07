<!-- 65f2ffea-fa2d-4dbb-89c5-b82e7fe10108 c6dfb80b-49c7-4623-9f2a-d59332f0316c -->
# Silverstone Ranch Website Update Plan (Nov 2025)

## 1. Market & Pricing Refresh
- Aggregate November 2025 stats (median price, $/sq ft, DOM, active listings, price ranges) for homepage hero, market widgets, and listing cards.
- Update `MarketInsights` component plus any JSON exports powering API endpoints (`GET /api/market-stats`).
- Add client-side helpers: seller/buyer condition indicator, DOM filter logic, price calculator adjustments.
- Verify forms and CTAs reference new data points and timelines.

## 2. Environmental Risk Program
- Build `/environmental-risk` page describing heat, wildfire, flood, and wind projections with 30-year outlook.
- Create reusable `RiskCard` UI (icons, severity badges, mitigation tips) and include callouts on homepage/community sections.
- Implement JSON-LD `Dataset` or `Article` plus FAQ entries for risk questions. Ensure interlinks to buyers checklist and contact forms.

## 3. HOA & School Accuracy Update
- Refresh HOA fee tables for single-family vs townhome, include coverage details and contact numbers.
- Update school zoning content with GreatSchools ratings, boundary verification note, and cross-link to Clark County resources.
- Surface updated data on homepage summary, dedicated HOA page, and relevant callouts (map, description, buyers checklist).

## 4. New Resource Pages
- `/market-insights`: interactive charts or cards summarizing quarterly trends, DOM filters, buyer/seller guidance, structured data (`Article`, `BreadcrumbList`).
- `/buyers-checklist`: step-by-step due diligence guide with downloadable checklist CTA, link to lenders, inspection tips, golf disclosure reminders.
- Enhance existing `/golf-course-status` with internal links to new resources and update timeline when public records release.

## 5. SEO, Analytics & Compliance
- Refresh meta tags, canonical, OpenGraph, Twitter for new pages. Add schema: `ResidentialProperty`, `FAQPage`, `HowTo` where applicable.
- Confirm robots.txt allows crawling and sitemap includes all new routes.
- Implement GA4/Tag Manager events for key CTAs (valuation submit, tour booking, risk page scroll depth).
- Re-check legal disclaimers (fair housing, data accuracy, privacy) after new content goes live.

## 6. QA & Deployment
- Component/unit review: responsive layouts, keyboard navigation, color contrast for new cards/alerts.
- Run lint/tests, validate structured data with Rich Results Test, and confirm Vercel preview build success.
- Prepare release notes summarizing data updates and new resources for stakeholder review.

### To-dos
- [ ] Gather November 2025 market statistics and refresh front-end + API outputs
- [ ] Build `/market-insights` page and wire into navigation/footer
- [ ] Build `/environmental-risk` page with risk cards, schema, and cross-links
- [ ] Build `/buyers-checklist` page with due-diligence content and downloadable CTA
- [ ] Update HOA fees and school data across relevant components/pages
- [ ] Extend schema/SEO metadata and configure GA4 tracking events
- [ ] QA: responsiveness, accessibility, structured data validation, Vercel preview