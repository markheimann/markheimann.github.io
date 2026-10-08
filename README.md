# markheimann.github.io

Personal site for Mark Heimann, built with [Astro](https://astro.build) and
deployed to GitHub Pages by a GitHub Actions workflow.

## Updating content

Most updates are one entry in a data file. No page markup needs to change.

| To change                                   | Edit                       |
| ------------------------------------------- | -------------------------- |
| Publications, and which ones are "selected" | `src/data/publications.js` |
| Tutorials, talks, teaching, service         | `src/data/academic.js`     |
| Chess offerings, highlights, events, media  | `src/data/chess.js`        |
| Email, links, FIDE rating, location         | `src/data/site.js`         |
| Page text                                   | `src/pages/*.astro`        |
| Colors and type                             | `src/styles/global.css`    |

Files in `public/` are served as they are, at the same path: a PDF saved as
`public/papers/25XYZ.pdf` is linked as `/papers/25XYZ.pdf`. To replace the
resume, overwrite `public/assets/MarkHeimann_Resume.pdf`.

Photos shown on the pages live in `src/assets/photos/` so Astro can resize
them. To swap one, replace the file or change the import at the top of the
page that uses it.

## Running it locally

Needs Node 22.12 or newer.

```sh
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # write the site to dist/
```

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site
and publishes it. This needs one setting, once: in the repository on GitHub,
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Custom domain

1. Add a file `public/CNAME` containing only the domain, e.g. `markheimann.com`.
2. Change `site` in `astro.config.mjs` to `https://markheimann.com`.
3. Point the domain's DNS at GitHub Pages and set it under Settings → Pages.

## Old URLs

`/academic` redirects to `/research` and `/other` redirects to `/chess`.
`/tutorials/NetworkRoleDiscovery` and every file under `/assets` and `/papers`
keep their old addresses.
