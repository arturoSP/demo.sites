# SAMP demo site

Static GitHub Pages landing page for the SAMP Gradio demo.

This repository does **not** run the Gradio app. It only provides a public entry page with a button pointing to the temporary Gradio URL running on the workstation.

## Quick start

1. Create a new public repository, for example `SAMP_demo_site`.
2. Copy these files to the repository root.
3. Commit and push to `main`.
4. In GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
5. Select `main` and `/(root)`, then save.
6. The site should become available at:

```text
https://arturoSP.github.io/SAMP_demo_site/
```

## Updating the current Gradio link

When the workstation generates a new `*.gradio.live` link, update `demo-config.json`, then commit and push.

Do not put credentials, private files, model weights, client images, videos, or generated outputs in this repository.
