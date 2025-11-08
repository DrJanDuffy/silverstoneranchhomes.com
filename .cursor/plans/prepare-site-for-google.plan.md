## Prepare Site for Google Plan

### Objective
Align `silverstoneranchhomes.com` with Google’s latest guidance by enriching structured data, metadata, and validation artifacts.

### Steps
1. **Audit Current SEO/Schema Baseline**  
   - Review `app/layout.tsx` metadata, key app pages, and `lib/seo.ts` helpers.  
   - Document gaps versus Google guidance (Service, Offer, Review, LocalBusiness, etc.).

2. **Extend Schema Helper Library**  
   - Add builder functions in `lib/seo.ts` for `Service`, `Offer`, `Review`/`AggregateRating`, and reusable CTA `Action` objects.  
   - Ensure helpers accept typed inputs and reuse `CONTACT_INFO` constants.

3. **Update Page Schemas & Metadata**  
   - Apply new builders in priority pages (`/`, `contact`, `request-info`, `book-tour`, `home-valuation`, HOA resource).  
   - Inject awards (Berkshire Hathaway Circle 2024) and ensure social/OG tags cover canonical URLs.

4. **Validation & Reporting**  
   - Run `npm run lint` and `npm run build`.  
   - Capture Rich Results Test outcomes for target URLs in `reports/rich-results-<date>.md`, noting pass/warn statuses.

5. **Finalize & Communicate**  
   - Summarize changes, validation results, and residual risks.  
   - Provide follow-up recommendations (Search Console resubmit, sitemap ping, analytics goals).
