# Cluster Documentation Website

This repository contains the source for a documentation site built with **MkDocs** using the Material theme. Updates can be made through **Decap CMS** or by editing Markdown files directly. A GitHub Actions workflow automatically rebuilds the site on every push.

## Features

- **Material for MkDocs** with placeholder logo and favicon
- Support for both English and Thai fonts
- Automatic dark mode that follows the system theme and a manual toggle in the header
- Additional color schemes including a **Dracula** theme and a **High Contrast** theme for accessibility
- Floating controls to increase or decrease the font size for easier reading
- Search with syntax highlighting and code blocks

- Sitemap and `robots.txt` automatically generated
- Revision date shown for every page
- Optional analytics hook
  (update the tracking ID in `mkdocs.yml` to enable)

## Local Development

1. Install Python and `pip`.
2. Install dependencies from `requirements.txt`:

   ```bash
   pip install -r requirements.txt
   ```

3. Serve the site locally:

   ```bash
   mkdocs serve
   ```

4. Build the static site:

   ```bash
   mkdocs build
   ```

The site will be available at <http://localhost:8000>.

## CMS

An integrated CMS is available at `/admin/`. It allows uploading files and maintaining scripts for power users.

## Deployment

GitHub Actions builds the site and deploys it to the `gh-pages` branch which can be published with GitHub Pages.

## Privacy

No personal data is collected by default. If analytics are enabled, ensure you comply with your organization's privacy policy and relevant regulations.

