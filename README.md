# imkhubaibraza.github.io

Personal site for Muhammad Khubaib Raza — Senior AI Engineer & Full-Stack Developer.

Built with [Astro](https://astro.build). Static output, no backend, no client JS.

## Develop

```
npm install
npm run dev      # http://localhost:4321
```

## Build

```
npm run build    # -> dist/
```

`dist/` is plain HTML + CSS.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages at https://imkhubaibraza.github.io/

## Editing content

All copy — bio, projects, skills, links — lives in `src/data/profile.js`.
Edit that one file; the page reads everything from it.
