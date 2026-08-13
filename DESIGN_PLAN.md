# Portfolio Design Implementation Plan

## Objective

Rebuild Lance Mirano's portfolio using this website as the sole design reference:

<https://adzyljipos.vercel.app/>

Recreate its editorial structure, typography, spacing, section rhythm, navigation behavior, project presentation, and responsive layout as closely as practical. Replace all identity-specific content from the reference with Lance's information or clear editable placeholders.

Do not copy the reference owner's name, biography, project names, certifications, contact details, contribution data, or branding.

## Existing Project

The portfolio is a static website containing:

- `index.html`
- `style.css`
- `assets/you.jpg`
- `assets/profile.jpeg`
- `assets/moon.gif`
- `assets/project.jpg`

Keep the implementation in semantic HTML, modern CSS, and a single shared vanilla JavaScript file for page behavior.

## Required Design Direction

- Use `adzyljipos.vercel.app` as the only layout and visual reference.
- Do not add a sidebar.
- Use a `1024px` centered outer column with `24px` horizontal padding, producing a `976px` inner content width on desktop.
- Use a pure black page background: `#000000`.
- Use warm off-white text similar to `#f4efe6` with muted neutral supporting text.
- Use thin translucent rules to divide major areas.
- Use large serif display typography for names, statements, and project headings.
- Use compact monospaced typography for dates, navigation, labels, counters, and metadata.
- Preserve generous negative space and restrained motion.
- Use the profile image, `moon.gif` for the loading screen, the three gallery images, and `project.jpg` for the featured project.
- Use obvious editable placeholders for personal copy that Lance has not supplied.
- Do not include a theme switcher or alternate color theme.
- Do not add email, GitHub, LinkedIn, or social-link blocks unless Lance explicitly requests them later.

## Visual System

### Color

Use CSS custom properties for the complete palette:

```css
:root {
    --page-bg: #000000;
    --surface: #1a1917;
    --text: #f4efe6;
    --text-soft: #c8c0b5;
    --text-muted: #817a70;
    --line: rgba(244, 239, 230, 0.2);
    --line-soft: rgba(244, 239, 230, 0.1);
}
```

The page background should be flat, pure black with no grain, dots, gradients, or decorative texture.

### Typography

Recommended font roles:

- `Newsreader` for the name, hero statement, experience titles, and project titles.
- `Space Mono` for dates, navigation, section labels, technology names, counters, and metadata.
- `Inter` for readable body copy.

Match the reference's desktop type scale: approximately `60px` for the name, `48px` for the hero statement, and `12px` for monospaced section labels. Use responsive `clamp()` values so these proportions scale safely on smaller screens.

### Dividers and Surfaces

- Use double horizontal rules under the masthead utility row.
- Use a single thin rule between major sections.
- Keep surfaces mostly transparent or slightly darker than the page background.
- Avoid rounded cards, heavy shadows, colorful borders, and gradient-heavy backgrounds.

## Page Structure

### 1. Masthead

Recreate the reference's opening structure:

- Uppercase monospaced date at the top.
- Small portfolio index or edition marker opposite the date.
- Double horizontal divider.
- Circular `126px` profile image using `assets/you.jpg`.
- Oversized `Lance Mirano` serif heading.
- `Software Developer` role label.
- Numbered masthead navigation.

Navigation labels:

- `01. ABOUT`
- `02. EXPERIENCE`
- `03. TECH STACK`
- `04. PROJECTS`
- `05. PHOTOS`

Each link must target a valid section ID on the same page.

### 2. Scrolled Navigation

Recreate the reference's compact navigation behavior after the opening masthead scrolls away:

- A slim sticky header appears near the top of the viewport.
- Include a compact identity mark or Lance Mirano text.
- Repeat the numbered section links.
- Use a subtle border and a black background.
- Do not include a theme button.

Use minimal vanilla JavaScript or CSS intersection behavior to reveal the compact header without layout jumping.

### 3. Biography

Use this section heading:

`[ 01 // BIOGRAPHY ]`

Use editable placeholder content only:

- `[Write a short introduction about yourself.]`
- `[Describe the products, interfaces, or systems you enjoy building.]`
- `[Explain your current goals, interests, or technical direction.]`

Do not invent personal claims.

### 4. Experience

Use this section heading:

`[ 02 // EXPERIENCE ]`

Recreate the reference's compact editorial timeline:

- Date or period in small monospaced text.
- Role, milestone, or institution in serif type.
- Organization or supporting description below.
- Thin separators between entries.
- Optional `FULL HISTORY` label only if it points to a real destination.

Keep the data easy to replace or expand.

The `FULL HISTORY` link should open `experience.html`, a separate page that presents the complete timeline using the same visual system and a link back to the main portfolio.

### 5. Tech Stack

Use this section heading:

`[ 03 // STACK ]`

On desktop, place Experience and Stack in a balanced two-column row like the reference. Stack groups should use text labels rather than colorful logos.

Suggested groups:

- `// Languages`
- `// Development`
- `// Data and Platforms`
- `// AI and Automation`

Use Lance's known technologies and compact monochrome tags or text rows.

### 6. Project Index

Use this section heading:

`[ SECTION 04 // PROJECTS ]`

Recreate the reference's horizontal project selector or indexed project row:

- Project number.
- Project title.
- Primary technology or category.
- Clear active-project state.
- Previous and next controls when multiple real projects exist.

If only one project is available, render a single active row and omit nonfunctional carousel controls.

### 7. Featured Project

Use `assets/project.jpg` as the featured project media. Keep `assets/moon.gif` reserved for the loading screen.

Recreate the reference's detailed project composition:

- `FEATURED PROJECT` label.
- Version and year metadata.
- Large project title.
- Project description placeholder.
- Tech stack area.
- Key highlights area.
- Media presentation using `project.jpg`.

Use placeholders for any project details Lance has not provided. Do not add fake demo or details links.

### 8. Photos

Use this section heading:

`[ 05 // PHOTOS ]`

Create a simple visual archive section with manual photo placeholders.

Each photo placeholder should contain:

- A number.
- An obvious `[Add photo here]` label.
- A caption placeholder.

Do not add photo files automatically. Lance will manually replace the placeholders with his own photos.

### 9. Ending

Finish with:

- Minimal copyright text.
- Back-to-top control.
- Thin closing divider.

Do not add the reference's GitHub contribution graph, affiliations, social dispatch, or correspondence sections unless Lance explicitly requests and supplies the necessary data.

## Responsive Behavior

### Desktop

- Center the page within a controlled maximum width.
- Keep the masthead identity and portrait in a balanced grid.
- Use a two-column Experience/Stack section.
- Split the featured project into media and details.
- Preserve oversized hero typography without clipping.

### Tablet

- Reduce outer padding and heading sizes.
- Allow Experience and Stack to collapse into one column.
- Stack featured-project content when necessary.
- Keep masthead navigation readable and evenly spaced.

### Mobile

- Use one content column.
- Stack portrait and identity text.
- Wrap numbered navigation without horizontal overflow.
- Scale display headings with `clamp()`.
- Keep `moon.gif` at a practical height.
- Stack project metadata and photo placeholders.
- Ensure the sticky compact navigation does not obstruct anchor targets.

## Motion and Interaction

- Open with a full-screen loading overlay using `assets/moon.gif` as its background.
- Preserve the moon GIF's `540x270` aspect ratio and never upscale it beyond its native width; use black space around it on larger screens.
- Display loading progress from `0%` to `100%` over 3 seconds, keep the bar synchronized with it, lock page scrolling while visible, and fade the overlay away afterward.
- Use smooth anchor scrolling.
- Add a restrained opening reveal for the masthead and hero.
- Use subtle section reveal transitions if they do not distract.
- Use clear active, hover, and keyboard-focus states.
- Respect `prefers-reduced-motion`.
- Avoid constant motion or decorative animation unrelated to navigation.

## Accessibility

- Use semantic `header`, `nav`, `main`, `section`, `article`, and `footer` elements.
- Give every section an accessible heading.
- Use descriptive image alternative text.
- Ensure navigation links target valid IDs.
- Keep keyboard focus visible.
- Maintain readable contrast against `#000000`.
- Do not rely on color alone for active states.

## Implementation Sequence

1. Audit the current HTML and CSS for reusable content and obsolete styles.
2. Establish the exact `#000000` background and warm monochrome palette.
3. Build the masthead, numbered navigation, profile identity, and double rules.
4. Add the compact scrolled navigation behavior.
5. Build the placeholder Biography section directly below the masthead.
6. Recreate the two-column Experience and Stack layout.
7. Build the indexed Projects section and project-image-based featured project.
8. Add photo placeholders for manual replacement.
9. Add the closing footer and back-to-top control.
10. Add responsive rules, focus states, and reduced-motion behavior.
11. Remove unused sidebar, theme, contact, social, and legacy styling.
12. Verify desktop, tablet, and mobile behavior.

## JavaScript Structure

- `script.js` handles the date stamp, loading progress, return navigation, and scrolled navigation behavior.
- `index.html` and `experience.html` contain the semantic page markup.
- `style.css` remains responsible for presentation.

## Acceptance Criteria

- `adzyljipos.vercel.app` is the only design reference.
- The page clearly reflects its editorial hierarchy and spacing.
- No sidebar appears anywhere.
- The body background is exactly `#000000`.
- The portfolio uses a fixed dark theme with no theme selector.
- No email, GitHub, LinkedIn, or social-link block appears.
- The profile image, project image, gallery images, and loading-screen moon are the only visible image assets.
- Biography and photo content use obvious placeholders.
- The masthead has a date, double rules, portrait, large name, role, and numbered navigation.
- Experience and Stack use a responsive two-column layout.
- Projects include an index and a detailed Netflix Analytics feature.
- A Photos section contains manual photo placeholders.
- All anchor links target valid section IDs.
- The page has no horizontal overflow at desktop or mobile widths.
- Keyboard focus is visible.
- Reduced-motion preferences are respected.
- The moon loading screen appears on page load and dismisses automatically.
- HTML and CSS pass structural checks and `git diff --check`.

## Content Safety

Copy the design system and interaction patterns only. Do not copy personal information, prose, project data, certifications, contribution counts, links, or branding from the reference portfolio.
