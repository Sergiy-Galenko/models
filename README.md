# Practicality x Creativity

A single-page editorial microsite celebrating the union of functional fashion and artistic expression. The layout is composed of ten immersive "page" sections stacked vertically, combining typography-focused storytelling with high-impact photography sourced from src/images.

## Highlights
- **Print-inspired layout** built entirely with semantic HTML5 sections and ARIA labels for better accessibility in screen readers.
- **Responsive container queries** (cqi/cqw) to keep the square artboard look intact on any viewport size.
- **Custom typography system** powered by self-hosted WOFF2 fonts and select Google Fonts for calligraphic accents.
- **Modular CSS stack**: 
eset.css for baseline cleanup, 
ormalize.css for browser consistency, and styles.css for page-specific design.
- **Ready-to-swap imagery** via logically named assets (page-3-main-1.png, hero-main-visual.png, etc.) so you can tailor the lookbook fast.

## Project Structure
`
.
+-- index.html            # Entry point wiring fonts + 10 content sections
+-- src
�   +-- images/           # Editorial photography and decorative assets
�   L-- styles/
�       +-- reset.css     # Eric Meyer reset foundation
�       +-- normalize.css # Trimmed-down browser normalization (no comments)
�       L-- styles.css    # Core layout + component styles
L-- fonts/                # Local font files referenced by @font-face
`

## Getting Started
1. Clone or download this repository.
2. Install the font files in Fonts/ if you plan to host them on a CDN; otherwise keep them in place.
3. Open index.html directly in a browser, or serve the folder with any static server (
px serve, VS Code Live Server, etc.) to avoid CORS issues when swapping assets.

## Customization Tips
- Update hero copy, section headings, and sustainability blurbs right inside index.html; each section already has unique class hooks (e.g., .page-4-intro).
- Replace imagery by dropping new files into src/images/ and pointing the existing <img> tags to the new filenames.
- Adjust typography or spacing globally in src/styles/styles.css; container queries ensure scaling remains proportional.
- Extend the experience by duplicating a .page-X block and tweaking its content�every block is self-contained, so edits stay isolated.

## Accessibility & Performance
- Landmarks use <main>, <section>, and ARIA labels to keep navigation assistive-tech friendly.
- All decorative images have descriptive Belt text you can refine for better SEO.
- Fonts load with Font-display: swap to reduce perceived load time.
- The codebase stays dependency-free, so deployment is as simple as dropping the files onto any static host.
