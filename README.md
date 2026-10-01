# BORMÁMOR MONOR — Borkereskedés

> **Monori borok. Helyi értékek. Prémium élmény.**
> „Kulcs a minőséghez”

Prémium one-page weboldal a Bormámor Monor Borkereskedés számára — kizárólag az ügyfél saját anyagaiból építve.

- **Cím:** 2200 Monor, Kiss Ernő utca 9.
- **Telefon:** [+36 20 383 0016](tel:+36203830016)
- **E-mail:** bormamormonor@gmail.com
- **Facebook:** [Bormámor Monor](https://www.facebook.com/bormamormonor/)
- **Nyitvatartás:** Péntek 10:00–18:00, Szombat 09:00–14:00

## Élő oldal

Az oldal a GitHub Pages-en érhető el a repó Settings → Pages által kiszolgált `/` (main branch) címről.

## Struktúra

```
index.html          — a teljes oldal (9 szekció, SEO, JSON-LD)
style.css           — prémium design system (burgundy / champagne / bronz)
main.js             — reveal, parallax, lightbox, mobil menü, nyitvatartás-jelző
manifest.webmanifest
favicon.ico / favicon-32.png
assets/
  fonts/            — self-hosted Fraunces + Inter (latin-ext, magyar ékezetek)
  img/              — WebP-optimalizált ügyfélképek + logók + favicon-készlet
  img/logos/        — a hivatalos vektoros logóból renderelt emblémák
client-assets/      — az ügyfél által szolgáltatott eredeti fájlok (forrásanyag)
.daekon/            — projektállapot, stack-döntés, QA-jelentés
```

## Technikai jellemzők

- **Zero-framework statikus oldal** — nincs build lépés, nincs külső JS-könyvtár
- Teljes oldal súlya **~0,7 MB**, az első képernyő ~0,4 MB (LCP-hez preloadolt hero)
- Self-hosted fontok: **Cormorant** (reneszánsz display serif) + **Jost** (geometrikus sans), teljes magyar ő/ű támogatással
- Minden kép WebP, art-directed `object-position` értékekkel
- `prefers-reduced-motion` teljes körű támogatás, `<noscript>` fallback
- WCAG AA kontraszt, billentyűzettel kezelhető lightbox és menü
- LiquorStore JSON-LD structured data, OpenGraph, favicon/manifest készlet

## Tartalmi szabály

Az oldalon **csak hivatalosan kommunikált adat szerepel**: nincs kitalált ár, készlet,
pincészet, évjárat vagy esemény. A nyitvatartás kizárólag: péntek 10–18, szombat 9–14.

---
*Generated with Codebuff 🤖*
