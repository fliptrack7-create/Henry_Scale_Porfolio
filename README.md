# Henry Scale Portfolio (editing guide)

Edit the root `index.html` at the repository root to make changes that appear on the live site.

- Live site source: `index.html` (root)
- CSS: `css/style.css`
- JS: `js/script.js`
- Images: `images/`

Notes:
- There used to be a duplicate file at `index/index.html`. That copy has been removed to avoid confusion.
- When testing locally with Live Server, make sure you open the workspace root so the server serves the root `index.html`.
- If you ever want to keep a backup copy, move it into a `drafts/` or `archives/` folder so it won't be served accidentally.

Commit & deploy workflow (quick):
```
git add .
git commit -m "Describe changes"
git push origin main
```

If you want, I can also add a short CONTRIBUTING.md or change the Live Server config to explicitly serve the root `index.html`.
