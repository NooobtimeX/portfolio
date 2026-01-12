# Portfolio Style Guide: Marvel Comic (Silk Theme)

This repository follows a strict **Dark Marvel Comic** aesthetic inspired by the character Silk (Cindy Moon). All UI contributions must adhere to these design principles.

## 1. Core Aesthetic Principles
- **Theme**: **Forced Dark Mode**. The background MUST be deep black (`#0a0a0a` / `0 0% 4%`). No light mode allowed.
- **Vibe**: High-energy, dynamic, "Action" oriented. Think comic book pages, not standard web grids.
- **Key Elements**: Halftone patterns, thick borders, solid shadows, jagged separators.

## 2. Color Palette
- **Primary (Silk Red)**: `hsl(355 85% 60%)` - Used for accents, buttons, and glowing effects.
- **Background**: `hsl(0 0% 4%)` - Deepest Black.
- **Surface/Card**: `hsl(0 0% 8%)` - Dark Charcoal.
- **Borders/Text**: White or Off-White (`#fcfcfc`) for high contrast against the black.

## 3. Typography
- **Headings**: **Bangers** (Google Font).
  - Must be **UPPERCASE**, **Bold** (`font-black`), and `tracking-tight`.
  - Often styled with `italic` and slight skew (`-skew-x-12`) for dynamic motion.
  - Example: `className="font-[Bangers] uppercase italic"`
- **Body**: **Inter**.
  - Clean, readable sans-serif to balance the loud headings.

## 4. Components & Utilities

### Containers (Comic Panels)
- Use `.comic-panel` for cards and sections.
- **Behavior**: Slight rotation (`-0.5deg` to `-1deg`) that corrects to `0deg` and scales up on hover.
- **Styling**: `border-4` (White) + `box-shadow` (Solid Offset).

### Visual Effects
- **Halftone**: Apply `.comic-halftone` to section backgrounds to add texture.
- **Separators**: Use `<ComicSeparator />` between major sections (jagged/wavy SVG).
- **Glow**: Use `group-hover:shadow-[0_0_30px_rgba(255,50,50,0.4)]` for interactive elements to simulate power brightness.

## 5. Layout Patterns
- **Non-Linear**: Avoid perfect grids. Use offsets, rotations, and skewed containers to mimic a hand-drawn comic layout.
- **Splash Pages**: Hero sections should feel like a full-page comic splash. Large, overlapping text and imagery.

## 6. Iconography
- Use `lucide-react` or `iconify` with simple, bold strokes.
- Icons often wrapped in circular or square badges with thick borders.

## 7. Forbidden
- ❌ Gradients that look "corporate" or "SaaS-like".
- ❌ Minimalist "Clean" design (unless contained within a specific content area).
- ❌ Light mode or gray backgrounds.
