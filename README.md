# krish3101.github.io

My portfolio, served as a static site from GitHub Pages at <https://krish3101.github.io>.

Plain HTML and CSS. There is no framework and no build step, so what is in the repo is exactly
what the browser gets.

```
index.html               every word on the page, including the five project entries
assets/css/styles.css    the whole stylesheet
assets/js/main.js        one line, to keep the footer year current
assets/og-card.png       1200x630 link preview image, drawn by the script below
scripts/make-og-card.py  draws that image
resume/                  the LaTeX source and the PDF built from it
.nojekyll                stops Pages running the files through Jekyll
```

## Editing

Project entries are written directly in `index.html` rather than generated from a data file.
Each one is an `<article class="entry">` wrapping a `<details>`: the `<summary>` holds the
number, name, one-line description and stack, and the block after it holds the four labelled
rows and the source link. Copy an existing entry and change the text.

They are plain HTML on purpose. The expanded detail is a native `<details>` element, so it
opens and closes, takes keyboard focus and reads correctly in a screen reader without any
JavaScript — and the page still shows everything if a script fails to load.

Keep the descriptions true to what the code does. An earlier version of this site claimed
Hyperledger Fabric, scikit-learn and MySQL in projects that use none of them, which is worse
than saying nothing at all.

## Local preview

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Rebuilding the resume

```bash
tectonic -X compile resume/Krishkumar-Kalya-Resume.tex --outdir resume
```

The source is named to match the PDF on purpose. It used to be `resume.tex`, which built a
`resume.pdf` that nothing linked to, so the published PDF quietly went a version stale.

## Redrawing the link preview

```bash
python3 scripts/make-og-card.py
```

It needs Pillow. The card is drawn in Georgia, which is what the stylesheet falls back to
before Instrument Serif loads, so the image and the page agree.

## Deploying

Pushing to `main` publishes it — a repository named `<user>.github.io` is served from the
branch root. Under Settings → Pages the source should be *Deploy from a branch → `main` →
`/ (root)`*.
