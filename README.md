# Krishkumar Kalya

My portfolio, live at <https://krish3101.github.io>.

Plain HTML and CSS, with no framework and no build step.

```
index.html               the whole page
assets/css/styles.css    the stylesheet
assets/js/main.js        keeps the footer year current
assets/og-card.png       link preview image
scripts/make-og-card.py  redraws that image
resume/                  the resume, LaTeX source and PDF
```

## Editing

Each project is an `<article class="entry">` holding a `<details>`: the `<summary>` has the
name, one-line description and stack, and the block after it has a small diagram, three
rows of text and the links. To add a project, copy an entry and change the text.

Keep the descriptions true to what the code does.

## Commands

```bash
python3 -m http.server 8000                 # preview at http://localhost:8000
python3 scripts/make-og-card.py             # redraw the link preview (needs Pillow)
tectonic -X compile resume/Krishkumar-Kalya-Resume.tex --outdir resume
```

## Deploying

Pushing to `main` publishes it through GitHub Pages (Settings → Pages → Deploy from a
branch → `main` → `/ (root)`).
