# Curriculum Vitae

My Curriculum Vitae built in a reusable way with Svelte, with the option to render it into a PDF.

## Quick Start

- Run `yarn install`
- Run `yarn start`
- Open `localhost:8080` in the browser of your choice.

## Generating a PDF

Make sure the content fits one A4 page. I have `src/content.print.*.yml` files with shortened
content for that. Make sure those are loaded in `src/page.svelte`.

- Run `yarn start`
- Run `make gotenberg` in a another terminal.
- Run `make pdf`

You now have a `cv.pdf` in the repository root.
