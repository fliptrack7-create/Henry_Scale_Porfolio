# Contributing & Local Development

Quick guidance to keep editing and testing consistent:

- Edit files that affect the live site in the repository root:
  - `index.html` (root) — main page
  - `css/style.css` — styles
  - `js/script.js` — client scripts
  - `images/` — media assets

- Local preview (Live Server):
  1. Open the project folder `HenryScalePortfolio` in VS Code (File → Open Folder).
 2. Start Live Server from the VS Code status bar or Command Palette.
 3. Live Server will serve the workspace root and use `index.html` at the root.

- Commit & deploy:
```
git add .
git commit -m "Describe changes"
git push origin main
```

- Caching: when testing visual changes, use a Private/Incognito tab or hard refresh. We add cache-busting query params to CSS/JS when necessary.

- If you want a draft copy of `index.html`, place it in `drafts/` so it won't conflict with the site source.

If you'd like, I can add a GitHub Pages checklist or a small GitHub Actions workflow to run basic link/HTML validation on PRs.
