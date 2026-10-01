# QA REPORT — Bormámor Monor weboldal
Dátum: 2026-10-01 • Build: statikus (index.html + style.css + main.js + assets)

## Végrehajtott ellenőrzések

| # | Ellenőrzés | Parancs / módszer | Eredmény |
|---|---|---|---|
| 1 | Asset-integritás | 24 img elem böngészőben betöltve | **PASS** — 0 törött kép |
| 2 | Self-hosted fontok | `document.fonts.status` | **PASS** — Fraunces + Inter betöltve (latin-ext: ő/ű OK) |
| 3 | Vízszintes overflow | 360/390/412/430/768/1024/1440/1920 px | **PASS** — 0 px overflow mindenhol (kontakt e-mail wrap javítás után) |
| 4 | Hero H1 méret | computed style | **PASS** — 45 px (360) → 105 px (1920), clamp működik |
| 5 | Mobil fullscreen menü | kattintás + Escape + link-stagger | **PASS** (aria-hidden fókusz-ütközés javítva) |
| 6 | Lightbox | nyitás / next / prev / bezárás / fókusz-visszaadás | **PASS** |
| 7 | Sticky mobil CTA | IntersectionObserver a hero után | **PASS** |
| 8 | Header állapotok | transparent → dark glass + progress bar | **PASS** |
| 9 | Horgony-navigáció | `#kapcsolat` scroll-margin teszt | **PASS** — header nem takar |
| 10 | Konzol hibák | preview_logs console | **PASS** — 0 üzenet |
| 11 | Hálózati hibák | preview_logs network | **PASS** — minden erőforrás 200 |
| 12 | SEO meta | title/desc/OG/canonical/JSON-LD | **PASS** — LiquorStore schema, nyitvatartás: Pé/Sz only |
| 13 | Kontraszt (kézi WCAG) | kézi számítás | **PASS** — footer 62% champagne-ra javítva, világos hátterű bronz→#7A5F3A |
| 14 | Teljesítmény | valós bájt-mérés | **PASS** — LCP útvonal ~410 KB, teljes oldal ~677 KB, 0 külső kérés (térkép lazy) |
| 15 | Linkek | tel:/mailto:/maps/FB + anchorok | **PASS** — NAP-adatok mindenhol konzisztensek |
| 16 | reduced-motion | CSS media query + JS guard | **PASS** — animációk kikapcsolva |
| 17 | noscript fallback | stílus JS nélkül | **PASS** — tartalom olvasható |

## Státusz-jelölések (DAEKON release evidence)
- **EXECUTED PASS:** 1–17 (fent minden sor ténylegesen lefutott)
- **NOT VERIFIED:** képernyőkép-alapú vizuális audit (screenshot rögzítés ebben a környezetben nem komponál képkockát). Helyette: DOM-geometria, computed style, a11y-fa és pixel-szintű luminance-elemzés alapján ellenőrizve.
- **N/A:** Lighthouse CLI (nincs npm toolchain a projektben — statikus, build nélküli oldal; a 14. pont tényleges mérés), valós készülék-teszt, éles domain-telepítés.

## Tartalmi garanciák
- Nyitvatartás KIZÁRÓLAG: Péntek 10:00–18:00, Szombat 09:00–14:00 (+ „egyéb napokon hívj” felhívás).
- Nincs kitalált ár, évjárat, pincészet, készlet, esemény, értékelés.
- Kínálati lista „időszakosan megtalálhatók” megfogalmazással.
- Minden kép az ügyfél saját anyaga; nincs stock/AI-fotó.

## Nyitott pontok
- A preview szerver (`http://127.0.0.1:8613/index.html`) fut — éles telepítés (FTP/GitHub Pages) külön lépés, ha kérik.
- `og:url` nincs beállítva (nincs ismert végleges domain) — telepítéskor pótolandó.
