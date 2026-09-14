# Krishkumar Kalya

This is the readme for my portfolio, live at <https://krish3101.github.io>.

Plain HTML and CSS. No framework and no build step, so what is in the repo is exactly what the
browser gets.

```
index.html               the whole page, including the four project entries
assets/css/styles.css    the stylesheet
assets/js/main.js        one line, to keep the footer year current
assets/og-card.png       1200x630 link preview image
scripts/make-og-card.py  redraws that image
resume/                  the LaTeX source and the PDF built from it
.nojekyll                stops Pages running the files through Jekyll
```

The favicon is an inline SVG data URI in the `<head>` rather than a file, so the repo stays as
it is. Edit it there if the accent colour or the initial ever changes.

## Editing

Each project is an `<article class="entry">` wrapping a `<details>`. The `<summary>` holds the
number, name, one-line description and stack; the block after it holds a diagram, three
labelled rows and the links. Copy an existing entry and change the text.

Each entry has a **Live demo** button sitting commented out above its source link. Put the URL
in the empty `href` and delete the two comment markers. It ships commented out on purpose: a
demo link that goes nowhere is worse than no link at all.

The diagram is a hand-written inline `<svg>` in a `<figure>` — four stages left to right, the
deterministic one outlined in the accent colour, and a `<figcaption>` for what will not fit in
a box. All four share one geometry: a 700-unit viewBox, 152x58 boxes at x = 4, 184, 364, 544,
labels centred at 80, 260, 440, 620. Colours and type size come from the `.dg-*` rules in the
stylesheet, so nothing is styled inline.

Start and test commands are deliberately not on the page. They live in each project's own
README, which is where anyone actually going to run it will look.

**Keep the descriptions true to what the code does.** An earlier version of this site claimed
Hyperledger Fabric, scikit-learn and MySQL in projects that use none of them, which is worse
than saying nothing at all.

## Commands

```bash
python3 -m http.server 8000                 # preview at http://localhost:8000
python3 scripts/make-og-card.py             # redraw the link preview (needs Pillow)
tectonic -X compile resume/Krishkumar-Kalya-Resume.tex --outdir resume
```

The card's two italic lines repeat the opening line of `index.html` — if you reword one, reword
the other. The resume source is named to match the PDF on purpose; it used to be `resume.tex`,
which built a `resume.pdf` that nothing linked to, so the published PDF quietly went stale.

## Deploying

Pushing to `main` publishes it. Under Settings → Pages the source should be *Deploy from a
branch → `main` → `/ (root)`*.
