# Airbnb Listing Clone — "Romantic Jacuzzi 1BHK Candolim"

Plain HTML, CSS, and JavaScript — no framework, no backend, no build step.

## Latest fixes
- **Sub-nav now truly edge-to-edge** — it's nested inside `.container` in the
  markup (so it flows naturally between the gallery and the rest of the page), but
  `.container` has its own side padding for reading comfort. Previously `width:100%`
  on the sub-nav only filled that *padded* area, not the real viewport edge. Fixed
  with a full-bleed technique: negative side margins equal to the container's
  padding (`calc(-1 * var(--container-pad))`) pull it out to the true edges, while
  `.subnav-inner` adds the same padding back just for its own content.
- **Only the sub-nav stays pinned while scrolling** — the top header (logo/search/
  menu) now scrolls away normally with the page. Only the Photos/Amenities/Reviews/
  Location bar sticks to the very top of the viewport once you scroll past it, and
  it spans the full browser width the whole time it's pinned.
- **Icons** — replaced every decorative emoji (highlights, policies, map controls,
  header buttons, amenities, rating categories, review tags, Photo Tour chips) with
  proper Font Awesome vector icons. Emoji render inconsistently across operating
  systems/browsers; a single consistent icon set looks far more polished and matches
  a real product UI. Kept a couple of plain typographic glyphs (✕, ★) since those
  already render consistently everywhere.
- **Meet your host card** — redone with more padding, a soft shadow that lifts on
  hover, a bigger avatar with a subtle ring, clearer stat hierarchy (bold numbers
  over muted labels), and co-host chips instead of plain inline avatars+names.
- **Bigger font, again** — base body size bumped to 18px, and the main headline plus
  every section heading (`h2`) increased further (26px → 32px for the title, 20px →
  24px for section headings) on top of the earlier +2px pass across the whole sheet.
- **Full-width layout** — the header nav, sticky sub-nav, and the main content area
  (photo gallery, amenities, everything below it) now all stretch edge-to-edge
  across the browser instead of sitting in a centered 1120px column. The amenities
  grid also flows into more columns automatically as there's more room
  (`repeat(auto-fill, minmax(220px, 1fr))`), and description paragraphs keep a
  760px reading-width cap so body text doesn't stretch into unreadably long lines.
- **Bigger type** — base body size bumped to 17px (from the browser default 16px)
  and every explicit `font-size` in the stylesheet increased by 2px, so headings,
  labels, buttons, and body copy all read noticeably larger and easier to scan.
- **Nav bar width** — (see full-width layout above.)
- **Font** — switched from the plain system-font stack to **Plus Jakarta Sans**
  (Google Fonts), a modern geometric sans that's a close-in-spirit stand-in for
  Airbnb's proprietary "Circular" typeface. Loaded via `<link>` in `<head>`, falls
  back to the system stack if it can't load.
- **Logo** — now uses Font Awesome's official brand glyph (`fa-brands fa-airbnb`) for
  the icon mark instead of an emoji or a hand-drawn approximation, so it actually
  matches the real Bélo symbol shape, sized and colored (`#ff385c`) next to the
  "airbnb" wordmark. Loaded from cdnjs, one `<link>` tag, no other dependencies added.
- **Nav bar** — the header and the sticky sub-nav (Photos/Amenities/Reviews/Location)
  now measure each other's real rendered height in JS (`syncStickyOffsets()`) instead
  of using a guessed pixel offset, so the sub-nav always sits flush under the header
  with no gap or overlap even if content wraps or fonts render at different sizes.
  Both bars also pick up a subtle shadow once the page scrolls, matching the reference.
- Header buttons (globe, menu) got real hover states and the menu button now looks
  like Airbnb's rounded hamburger + avatar pill instead of two stacked emoji.

## How to run
Open `index.html` directly in any browser. Nothing to install.

(Optional local server: `python3 -m http.server` in this folder, then visit `http://localhost:8000`.)

## What's new in this version (two distinct overlays, per spec)
The assignment calls for **three** views — Listing Page, Photo Tour, and Lightbox —
each behaving differently. Previously this project only had one modal doing a rough
mix of both jobs. Now they're properly separate:

- **Photo Tour** (`#photoTour`, opened by "Show all photos" or any hero image) — a
  full-screen overlay with a room-by-room sidebar (Living room, Jacuzzi, Bedroom,
  Building) on the left and a scrolling column of full-size photos on the right,
  each with a caption ("Living room 1") and amenity chips underneath. The sidebar
  highlights whichever room is currently in view as you scroll, and clicking a
  sidebar item smooth-scrolls to that room.
- **Lightbox** (`#lightbox`, opened by clicking any photo *inside* the Photo Tour) —
  a single-photo full-screen viewer with prev/next arrow buttons, a photo counter
  ("3 / 5"), a caption, and a fade + scale transition between photos. Supports
  keyboard **←/→** to navigate and **Esc** to close.

## What's new vs. the previous version
- **Sticky sub-nav** (`Photos | Amenities | Reviews | Location`) sits below the header
  and stays pinned while you scroll. The active tab underline updates automatically
  based on which section is in view (`IntersectionObserver`), and clicking a tab
  smooth-scrolls to that section.
- **Scroll reveal animations** — every major section fades/slides in the first time
  it enters the viewport (`.reveal` class + `IntersectionObserver`), and the rating
  bars animate their width in once you reach the reviews section.
- **INR pricing** with a live price breakdown (nights × rate + cleaning + service + tax),
  synced between the sidebar card and the compact sticky nav price.
- **Guest counter capped at 3** to match the listing's house rules.
- **Nearby-stays carousel** with prev/next buttons scrolling a horizontal card row.

## Structure
- `index.html` — all markup, organized top-to-bottom in the same order as the page
- `style.css` — all styling; the `reveal` animation, `.subnav` sticky behavior, and
  the Photo Tour / Lightbox overlay styles are the things worth pointing to if asked
  "what's the interesting CSS here"
- `script.js` — all behavior, in commented sections: description/neighbourhood
  show-more, amenities, rating bars + tags, reviews, co-hosts, nearby carousel,
  **Photo Tour**, **Lightbox**, amenities modal, share/save, guest counter, price
  calc, sticky-nav active-tab tracking, and scroll-reveal animation setup

## Talking points for an interview
- **One flattened photo list, two views** — `photoRooms` is the source of truth
  (grouped by room, for the Photo Tour); `allPhotos = photoRooms.flatMap(...)` turns
  it into a flat array so the Lightbox can just do `index + 1` / `index - 1` with
  wraparound for prev/next, instead of keeping two separate photo lists in sync.
- **Three IntersectionObservers**, three different jobs: one toggles `.visible` on
  `.reveal` elements as they scroll in, one tracks which page section is on screen
  to highlight the matching sticky-nav tab, and one tracks which *room* is on
  screen inside the Photo Tour to highlight the matching sidebar item — same
  pattern, reused three times, no manual scroll-position math anywhere.
- **Lightbox keyboard handling** is a single `keydown` listener that checks which
  overlay is currently open (`.open` class) before acting — Left/Right only steps
  through photos when the Lightbox itself is open, Escape closes whichever overlay
  is on top.
- **Data-driven rendering** — reviews, amenities, rating categories, tags, co-hosts,
  nearby cards, and now Photo Tour rooms all render from small arrays at the top of
  `script.js`, so swapping in a real API later means replacing the arrays, not the
  render logic.
- **One `formatINR()` helper** keeps currency formatting consistent everywhere
  it's used (sidebar card, sticky nav, price breakdown).

## Simplified vs. the real reference
- Map is a styled CSS placeholder (gradient + blobs + pulsing pin), not a real map SDK.
- Search pill in the header is visual only.
- "Reserve" shows a confirmation alert — no backend, no real booking.
