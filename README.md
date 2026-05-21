# Sabrina Bouazzi Portfolio — Enhanced v3

A premium static portfolio website for Sabrina Bouazzi.

## What is included

- Responsive HTML/CSS/JavaScript
- French / English / Arabic language switch
- Warm / dark theme switch
- Motion toggle for accessibility
- Scroll progress bar
- Active navigation state
- Animated reveal sections
- Filterable project gallery
- Native project detail dialog
- Contact mailto form
- Downloadable vCard
- Print/PDF stylesheet
- SEO metadata, Open Graph card and JSON-LD structured data
- PWA manifest
- Custom SVG art assets
- No external dependencies

## Run locally

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Replace placeholder artwork

All visuals are in `/assets`. Replace the SVG files with real project photos and keep the same filenames, or update the paths in `index.html` and `data/projects.js`.

Recommended real image slots:

- `assets/hero-artwork.svg`
- `assets/project-film.svg`
- `assets/project-upcyc.svg`
- `assets/project-screens.svg`
- `assets/project-heritage.svg`
- `assets/project-raskla.svg`
- `assets/cinema-poster.svg`
- `assets/atelier-scene.svg`


## Clean image placement

This version avoids duplicate display:

- `real-sous-leau-cover.jpg` is used for the film project card and its project detail.
- `real-hamdi-jouini-set-poster.jpg` is used only in the Cinema section.
- Duplicate crop variants from the screenshots are not displayed in the public portfolio.

The full Messenger screenshots are intentionally not displayed because they contain private chat UI.


## v7 high-quality portfolio

This version integrates the professionally enhanced Atelier Raskla visuals:

- hero image: `raskla-shelf-pro.png`
- heritage / research card: `raskla-textile-pro.png`
- Upcyc’Art card: `raskla-table-pro.png`
- Ateliers Raskla card: `raskla-cabinet-pro.png`
- Atelier hero background: `raskla-kitchen-pro.png`
- Atelier detail card: `raskla-table-detail-pro.png`

The portfolio keeps the previously integrated cinema visuals and now uses real project imagery across the main editorial experience.
