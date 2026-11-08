# Setup Instructions — Enhan-Liu.github.io

## File Structure

```
Enhan-Liu.github.io/
├── index.html            ← About (homepage)
├── notes.html            ← Software & Notes
├── cv.html               ← Redirect to the homepage (the CV page was removed)
├── style.css             ← Shared styles
├── favicon.svg           ← Tab icon (plus favicon-32.png and apple-touch-icon.png)
├── .nojekyll             ← Tells GitHub Pages: don't use Jekyll
├── files/                ← Single files, e.g. PDF notes
└── notes/                ← Notes and tutorials that are websites
    ├── negative-weights-did/   ← Quarto book (copy of its _book folder)
    └── dsl-tutorial/           ← Single Quarto HTML, saved as index.html
```

## Step 1 — Create the GitHub repository

1. Go to https://github.com/new
2. Name the repository exactly: `Enhan-Liu.github.io`
3. Set it to **Public**
4. Do NOT initialize with a README (you already have files)
5. Click **Create repository**

## Step 2 — Push to GitHub

Open a terminal in this folder and run:

```bash
git init
git add .
git commit -m "Initial commit: personal website"
git branch -M main
git remote add origin https://github.com/Enhan-Liu/Enhan-Liu.github.io.git
git push -u origin main
```

## Step 3 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select: `Deploy from a branch`
3. Branch: `main` / Folder: `/ (root)`
4. Click **Save**

Your site will be live at: **https://enhan-liu.github.io** (takes ~1–2 minutes)

## Adding Software, Notes, or Tutorials

1. Put the content in place:
   - A single PDF or HTML file: put it in `files/`.
   - A Quarto book or website: copy the whole rendered folder (e.g. `_book`) into `notes/<name>/`.
   - A single self-contained HTML: save it as `notes/<name>/index.html`.
2. In `notes.html`, copy an existing `.note-entry` block into the right section
   (Software, Notes, or Tutorials) and update the title, links, and year.

To update the negative-weights DiD note: run `quarto render --to html` in the
Quarto project, then copy the contents of `_book` into `notes/negative-weights-did/`.

## Updating the Site

If you changed `style.css`, update the version in the stylesheet link of every page
(e.g. `style.css?v=20261107c`), so browsers load the new styles instead of a cached copy.

After any change, just commit and push:
```bash
git add .
git commit -m "Update: [describe your change]"
git push
```
GitHub Pages will rebuild automatically within ~30 seconds.
