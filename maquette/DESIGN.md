# Design System: Tinitz Emerald Edition

## 1. Overview & Creative North Star
### Creative North Star: "The Emerald Architect"
This design system moves away from the rigid, block-based structures of traditional SaaS websites toward a fluid, editorial experience. It is defined by **Organic Flow and Tonal Depth**. We treat the digital interface not as a flat screen, but as an architectural space where light, translucency, and "emerald energy" guide the user. 

By utilizing sweeping curves (inspired by the Evenium aesthetic) and a "Bento-Editorial" layout style, we create a sense of bespoke craftsmanship. The design breaks the "template" look through intentional white space, large-scale typography, and overlapping elements that suggest motion and innovation.

---

## 2. Colors: The Emerald Palette
The color strategy focuses on a high-contrast relationship between the purity of the background and the vibrancy of the "Emerald" accent.

*   **Primary (`#006c49`) & Primary Container (`#10B981`):** Use these sparingly for impact. The Emerald (`#10B981`) is our "Experience Designer" signature—it should feel like a pulse of innovation.
*   **Surface Hierarchy (`#f7f9fb` to `#ffffff`):** Our depth is built on subtle shifts in greys and whites. 
    *   **Surface:** Main page background.
    *   **Surface-Container-Low:** Use for large secondary sections.
    *   **Surface-Container-Lowest:** Pure White (#FFFFFF) used for elevated "Bento" cards to make them pop against the grey background.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** Boundaries must be defined solely through background color shifts or the "Ghost Border" technique. A section shift should feel like a change in floor material in a high-end gallery, not a line on a map.

### The "Glass & Gradient" Rule
For floating elements (navigation bars, hero badges), use **Glassmorphism**:
*   `Background: rgba(255, 255, 255, 0.7)`
*   `Backdrop-blur: 20px`
*   This ensures the Emerald branding and hero photography "bleed" through the UI, creating a sophisticated, layered feel.

---

## 3. Typography: Manrope Editorial
We use **Manrope** exclusively to maintain a modern, geometric, yet humanistic feel.

*   **Display (Lg/Md):** Use for Hero statements. Set with tight letter-spacing (-0.02em) to feel authoritative and "designed."
*   **Headlines:** These are the anchors of your sections. Use `headline-lg` for section titles, often paired with an Emerald-colored `label-md` as an overline (Kicker).
*   **Body (Md/Lg):** Maintain high line-heights (1.6 - 1.8) for maximum readability and a premium "aery" feel.
*   **Hierarchy Note:** Use weight contrast (ExtraBold for titles vs. Medium for body) rather than just size to create a signature look.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too heavy for this system. We use **Ambient Light** principles.

*   **The Layering Principle:** Place a `surface-container-lowest` (#FFFFFF) card on a `surface` (#f7f9fb) background. This creates a "Natural Lift."
*   **Ambient Shadows:** For interactive cards or floating buttons, use:
    *   `box-shadow: 0 20px 40px rgba(0, 108, 73, 0.05);` (A subtle emerald-tinted shadow).
*   **The "Ghost Border" Fallback:** If a container requires a boundary (e.g., in a complex Bento grid), use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
*   **Fluid Curves:** Following the Evenium inspiration, section transitions should use large SVG curves (`border-radius: 0 0 100% 100% / 0 0 10% 10%`). This breaks the horizontal monotony of standard web design.

---

## 5. Components: Refined Primitives

### Buttons (2xl Roundedness)
*   **Primary:** Background `primary-container` (#10B981), Text `on-primary-container`. Apply a subtle gradient from top-left to bottom-right for a "jewel" effect.
*   **Secondary:** Ghost style. Transparent background, `Ghost Border` (outline-variant at 20%), Emerald text.
*   **Interaction:** On hover, the button should "lift" (shift Y by -2px) and the shadow should expand slightly.

### Bento Sections (Feature Grid)
*   **Layout:** Use asymmetrical grid spans (e.g., one large 2-column card next to two small 1-column cards).
*   **Styling:** Every Bento card must use `surface-container-lowest` (#FFFFFF) and a `md` (1.5rem) or `lg` (2rem) corner radius.
*   **Content:** Inside Bento cards, avoid dividers. Use `Spacing Scale` (1.5rem to 2rem) to separate icons from text.

### Inputs & Fields
*   **Style:** Minimalist. No solid background; use `surface-container-low` with a bottom-only "Ghost Border" that turns Emerald on focus.

### Experience Badges (Additional Component)
*   Small floating "pills" used in the Hero section to highlight key metrics or "Innovative" tags. These should use Glassmorphism and the `label-sm` typography.

---

## 6. Do's and Don'ts

### Do's
*   **DO** use whitespace as a functional element. If a section feels crowded, double the padding.
*   **DO** use the Emerald accent for "Actionable Intelligence" (links, buttons, success states).
*   **DO** ensure all imagery has a clean, professional aesthetic that matches the "Designer d'Expérience" persona.
*   **DO** use `2xl` (3rem) or `xl` (2rem) rounding for all major containers to maintain the fluid brand identity.

### Don'ts
*   **DON'T** use pure black (#000000) for text. Use `on-surface` (#191c1e) to keep the look sophisticated.
*   **DON'T** use sharp 90-degree corners. They conflict with the "Organic Flow" North Star.
*   **DON'T** use high-contrast dividers or lines. Rely on the "No-Line" rule and background tonal shifts.
*   **DON'T** clutter the Bento grid. Each card should have one clear message or data point.