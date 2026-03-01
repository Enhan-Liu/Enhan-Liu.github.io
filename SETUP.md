# Setup Instructions — Enhan-Liu.github.io

## File Structure

```
Enhan-Liu.github.io/
├── index.html        ← About & Research (homepage)
├── cv.html           ← Full CV (HTML)
├── notes.html        ← Study Notes
├── style.css         ← Shared styles
├── .nojekyll         ← Tells GitHub Pages: don't use Jekyll
└── files/
    └── EnhanLiu_CV_2026_Feb.pdf   ← Put your CV PDF here
```

## Step 1 — Add your CV PDF

Copy your CV PDF into the `files/` folder:
```
files/EnhanLiu_CV_2026_Feb.pdf
```

## Step 2 — Create the GitHub repository

1. Go to https://github.com/new
2. Name the repository exactly: `Enhan-Liu.github.io`
3. Set it to **Public**
4. Do NOT initialize with a README (you already have files)
5. Click **Create repository**

## Step 3 — Push to GitHub

Open a terminal in this folder and run:

```bash
git init
git add .
git commit -m "Initial commit: personal website"
git branch -M main
git remote add origin https://github.com/Enhan-Liu/Enhan-Liu.github.io.git
git push -u origin main
```

## Step 4 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select: `Deploy from a branch`
3. Branch: `main` / Folder: `/ (root)`
4. Click **Save**

Your site will be live at: **https://enhan-liu.github.io** (takes ~1–2 minutes)

## Adding Study Notes

To add a new note:
1. Put the PDF or HTML file in `files/` (e.g., `files/staggered-did-notes.pdf`)
2. In `notes.html`, update the placeholder `href="#"` to `href="files/staggered-did-notes.pdf"`

## Updating the Site

After any change, just commit and push:
```bash
git add .
git commit -m "Update: [describe your change]"
git push
```
GitHub Pages will rebuild automatically within ~30 seconds.
