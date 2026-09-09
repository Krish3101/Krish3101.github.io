# krish3101.github.io

Personal portfolio for **Krishkumar Kalya** — served as a static site from GitHub Pages at
<https://krish3101.github.io>.

## Stack

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies — the browser
gets exactly the three files in this repo, which is why it loads instantly from a cold link.

```
index.html            markup and content sections
assets/css/styles.css design tokens, layout, light/dark themes
assets/js/main.js     project + skill data, filtering, theme toggle
.nojekyll             tell Pages to serve files as-is
```

## Editing content

All project and skill content lives in the `PROJECTS` and `SKILLS` arrays at the top of
`assets/js/main.js`; the DOM is generated from them. To add a project, append an object with
`name`, `repo`, `kind`, `cats`, `desc`, `points`, `tags` and `live`.

Set `live` to a deployment URL (e.g. a Render service) to make a **Live demo** button appear
on that card. Leave it `null` while a project has no public deployment.

## Local preview

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploying

Pushing to `main` publishes automatically — a repository named `<user>.github.io` is served
from the branch root. Confirm under **Settings → Pages** that the source is
*Deploy from a branch → `main` → `/ (root)`*.
