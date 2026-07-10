# Design QA

## Comparison target

- Viewport: 1440 × 900 desktop and 390 × 844 mobile.
- State: default ES page state for visual comparison; ES/CAT toggled and successful form state for interaction checks.
- Source visual truth:
  - Mesa Viva: `/Users/olegyakushin/.codex/generated_images/019f4c86-cd53-7ba0-aadf-cf694c182e0e/exec-5c590cf0-51d1-4245-a447-13c83823f9ea.png`
  - Turno: `/Users/olegyakushin/.codex/generated_images/019f4c86-cd53-7ba0-aadf-cf694c182e0e/exec-39b32bd4-74b4-4ba9-b68c-8e1743e51832.png`
  - Oficio Claro: `/Users/olegyakushin/.codex/generated_images/019f4c86-cd53-7ba0-aadf-cf694c182e0e/exec-927b2044-71c3-4b90-a89b-9da90278e4af.png`
- Implementation evidence:
  - `qa/mesa-comparison.jpg`
  - `qa/turno-comparison.jpg`
  - `qa/oficio-comparison.jpg`
  - Focused hero captures: `qa/mesa-hero.png`, `qa/turno-hero.png`, `qa/oficio-hero.png`
  - Focused conversion captures: `qa/mesa-proof-4.png`, `qa/turno-proof-4.png`, `qa/oficio-proof-4.png`

## Full-view comparison evidence

The three side-by-side comparison boards pair each source visual with browser-rendered section captures at the same 1440px width. The implementations preserve the source hierarchy, palette commitment, image-led composition, line-based offer lists, conversion pattern, proposal notice, and distinct typography. Exact copy and example facts are intentionally safer than the visual mocks: unverifiable reviews, opening hours, prices, addresses, and response-time promises were replaced with explicit placeholders.

## Focused region comparison evidence

- Hero: the focused captures confirm the intended two-column or full-bleed proportions, image crops, headline wrapping, primary CTA prominence, and header density.
- Conversion: the focused captures confirm the reservation, appointment, and qualified-enquiry forms remain visually consistent with their source direction while using real interactive controls.
- Separate close-ups were needed because the sources are tall concept boards and important form labels are too small to evaluate from the full-view boards alone.

## Required fidelity surfaces

- Fonts and typography: Mesa uses Barlow Condensed for the source's narrow hospitality voice; Turno uses Unbounded for its wide block display; Oficio uses Archivo for calm professional clarity. Display letter spacing stays at or above -0.04em, body text remains readable, and the final 1440px hero wraps match the source hierarchy.
- Spacing and layout rhythm: hero heights are 768px, 737px, and 659px respectively, close to the visual targets. Row separators, section pacing, and high-contrast conversion bands are preserved. Mobile checks report no horizontal overflow at 390px.
- Colors and tokens: oxblood/deep green, cobalt/citrus/black, and plum/pale blue map directly to the three source directions. Text/background combinations remain high contrast.
- Image quality and asset fidelity: four generated raster assets are installed at production dimensions. No visible photographic asset is replaced with CSS or placeholder art. Crops preserve the intended focal point on desktop and mobile.
- Copy and content: ES and CAT variants are complete. Placeholder-safe copy avoids inventing business facts and the unofficial-proposal notice remains visible.

## Interaction and accessibility checks

- Mesa Viva: ES → CAT switch, date, party size, preferred time, submit, and visible success state passed.
- Turno: service selection, contact-method selection, preferred time, submit, and visible success state passed.
- Oficio Claro: name, contact, topic selection, submit, and visible success state passed.
- All three templates: visible mobile language controls, loaded images, 390px overflow check, keyboard-addressable native controls, visible focus treatment, and reduced-motion fallback passed.
- Browser console: no errors or warnings on desktop or mobile routes.

## Comparison history

### Pass 1

- [P2] ES/CAT controls were hidden in the mobile header.
  - Fix: retained the language switch at 390px and tightened the adjacent CTA/header spacing.
- [P1] Turno and Oficio hero typography produced substantially taller first folds than the source designs.
  - Fix: reduced display scale and vertical padding while preserving hierarchy and touch-target size.
- [P2] Mesa reused the hero photograph for its story band.
  - Fix: generated and installed a separate 1400 × 1100 story photograph with the source's planted dining-corner art direction.

### Pass 2

- Post-fix browser evidence confirms all three mobile language switches are visible, all images have non-zero natural dimensions, desktop hero proportions match the intended compositions, and no route has horizontal overflow.
- No actionable P0, P1, or P2 findings remain.

## Follow-up polish

- [P3] Real client content may require per-business headline shortening or image focal-point adjustment after verified facts and photos are inserted.

## Expansion pass: 20-template library

- Visual evidence: `qa/library-contact-sheet.jpg` contains the 1440 × 900 hero state for every catalog route.
- Coverage: 20/20 desktop routes and 20/20 mobile routes rendered successfully.
- Desktop checks: every route has a headline, form, visible ES/CAT controls, complete images, no horizontal overflow, and no console warnings or errors at 1440px.
- Mobile checks: every route has visible language controls, a reachable form, complete images, no horizontal overflow, and no console warnings or errors at 390px.
- Shared flow: the data-driven family component passed CAT switching, form fill, option selection, submit, and visible success-state verification.
- Diversity review: the library includes three bespoke directions plus nine independently rendered DOM skeletons. Window uses a storefront and shelf; workbench uses a persistent rail and diagnostic sequence; clinical uses a care pathway; postcard uses a full-bleed destination and itinerary; portfolio uses offset work columns; ritual uses an orbital hero and practice sequence; property uses a panorama and inventory rail; ledger uses a daily board; nocturne uses an event poster and schedule.
- Motion review: each family has one signature entrance or photographic movement plus short list choreography where it clarifies sequence. Motion uses transform or clip-path, does not gate content behind opacity, avoids bounce/elastic easing, and is disabled by the existing `prefers-reduced-motion` fallback.
- Content safety: the 17 new families keep prices, hours, addresses, availability, qualifications, and reviews as explicit placeholders rather than invented facts.
- No actionable P0, P1, or P2 findings remain after the 20-template expansion.

## Structural diversity pass

- Refactored the 17 configurable templates from one shared hero/offers/story/contact DOM into nine family renderers while preserving one verified-content contract and one accessible conversion form.
- Rebuilt `qa/library-contact-sheet.jpg` from current 1440 × 900 browser captures after the structural pass.
- Re-ran 20/20 desktop and 20/20 mobile routes: one H1, one form, visible language controls, loaded images, reachable conversion CTA, and no horizontal overflow on every route.
- Verified the shared CAT flow on Taller: translated headline, translated form labels, option selection, submit, and visible success status all passed.
- Browser logs contained Vite/React development information only; no warning or error entries were observed.

## Final result

final result: passed
