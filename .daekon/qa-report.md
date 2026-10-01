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


---

# V3 FINAL REFINEMENT — 2026-10-01 (második mester-prompt alapján)

## Végrehajtott auditok és eredmények

| Audit | Terjedelem | Eredmény |
|---|---|---|
| 0. Kód+élő oldal+asset review | teljes repó, pixel-statisztika minden kulcsképen | kész |
| 1. Art direction | hero-döntés, kúráció, ritmus, editorial menü | kész |
| 2. Responsive | 360/375/390/412/430/768/1024/1100/1180/1280/1366/1440/1920 | **0 px overflow mindenhol** |
| 3. A11y + technika | kontrasztok 6,6–12:1, alt-ok, fókusz, lightbox, menü, sticky CTA | PASS |
| 4. Final polish | kóstoló 1 hasáb, em-kontraszt, idézőjel-el, scan (TODO/debug/console) | tiszta |

## V3 változtatások
- Tipográfia: **Fraunces+Inter → Cormorant (display) + Jost (UI)**, teljes HU-glyph készlettel; kalibrált clamp-méretek; -171 KB font, +2 új preload
- Hero: kompozíciós válasz a képbe égetett logóra (scrim-erősítés + object-position), mobil külön art-direction
- Kúráció: galéria 11→6 kép (m-lead anchor portré-croppal), post-09–12 és bannerek kivezerve; szlogen-sáv törölve; kóstoló-grafikák törölve → tiszta tipográfiai blokk
- Alkalom: 4 kártya → luxury editorial menü (sorszám + crossfade kép, keyboard: tabindex+focusin)
- Különlegességek: pill-gombok → hairline sorszámozott editorial lista (01–05)
- Copy: „Több mint” (vessző el), boraink-megjegyzés teljes kínálatra, Monor szöveg tényszerűbb, kóstolók nem aktív-organizációs hangzású
- Alt: statement-kép helyesen „Parafadugók a Bormámor emblémájával…"
- Gombok: pill → editorial 3px rect + link-CTA rendszer (hero/kapcsolat/tasting)
- Kapcsolat: nagy Cormorant telefonszám, „Hívás most→” rect CTA, szöveges Útvonal/Facebook
- Header: glass finomított (blur 10px, 60% alpha), mobil menü breakpoint 900→1180
- Perf: teljes súly 677→**504 KB**, 12 kérés; JSON-LD url+abszolút image; preload-csökkentés
- Takarítás: 12 unused asset törölve (852K→a repóban már csak használt fájlok)

## Nem talált ki (tartalmi garancia változatlan)
ár, készlet, pincészet, évjárat, eseménydátum, kedvezmény, webshop, szállítás, fizetés, értékelés: NINCS.
Nyitvatartás: kizárólag Péntek 10–18, Szombat 9–14.


---

# V4 VÉGSŐ PRÉMIUM JAVÍTÓ KÖR — 2026-10-01 (16 pontos mester-prompt)

## Kép nélküli hero (tudatos design döntés — NEM került be helyette fotó)
- hero-pince.webp TELJES kivezetése: hero + specials figure + galéria m-lead + preload törölve; asset fájl is törölve
- Új tipográfiai editorial hero: eyebrow „Monori borok · Helyi értékek · Prémium élmény”, 3 soros H1 (line-mask animációval), sub, CTA-pár, meta-sáv (cím + Most nyitva/zárva + Bormámor•Monor márka-jel), függő „Kulcs a minőséghez” oldalszöveg, CSS-only dekoráció (hairline-ok, kör-ívek, kulcslyuk+pohár vonal-védjegy — a márkajel vonalas interpretációja, NEM fotó), grain
- Méret: 88svh desktop (mért 0,88–0,97 vh-arány), mobil külön art-direction (100svh)

## Asset-hiba javítás: GOTHAM LIGHT specimen
- A header/footer logó webp-be beégett a brandbook 5. oldalának betűtípus-specimen sávja
- Újraépítés az ügyfél bomamor_logo_final.pdf 1. oldalának vektor-sávjaiból (PyMuPDF 4x render): BORMÁMOR + sorkizárt BORKERESKEDÉS, cream + sötét variáns; width/height attr frissítve 1400×327
- Régi törlések: bormamor-logo-light.png (specimen-es), key-white.png, bormamor-logo-dark.webp (nem hivatkozott)

## Copy + tartalom (tényszerűség megőrizve)
- „Nem csak bor” lista vessző-hibái javítva (Minőségi magyar borok, pezsgők / Kézműves sörök, pálinkák / …)
- Kóstolók: „Időszakosan kóstolókat és gasztronómiai programokat rendezünk, mindig változó témákkal. A következő alkalom időpontját a Facebook-oldalunkon jelentjük be.”
- Alkalom-CTA: „Nem tudod, melyik a te alkalomod? Személyesen segítünk választani.” + „Hívás: +36 20 383 0016” gomb
- Monor blokk: mask-reveal címek (Monor íze. / Monor *története.*), nagyobb display-xl, kibővített scrim
- Galéria: 6→5 kurált kép (m-lead dark-bottles 3/4), spirit-shelf alt/caption igazítva a valódi tartalomhoz, FB linkek target=_blank

## BUGFIX (komoly)
1. Mobil menü: [hidden] attribútumot felülírta a .mobile-menu{display:flex} → láthatatlan overlay blokkolta a kattintásokat; + header z-index 100→125 (X gomb elérhető) → .mobile-menu[hidden]{display:none}
2. Mask-sorok kurzív leszállóit (g/y/j) levágta az overflow:hidden → padding-bottom+.12em / margin-bottom -.12em kompenzáció (hero + monor)
3. noscript fallback nem állította vissza a mask-reveal opacity-t → Monor-cím JS nélkül láthatatlan lett volna → javítva
4. reduced-motion blokkban a .hero-deco display:none (a statikus dekoráció nem animáció) → eltávolítva, scrollhint csak opacitásra

## Végrehajtott ellenőrzések (EXECUTED)
| Ellenőrzés | Módszer | Eredmény |
|---|---|---|
| Overflow-mátrix | document.scrollWidth vs innerWidth: 320/360/375/390/412/430/768/1024/1181/1366/1440/1920 | **PASS — 0 valódi overflow mindenhol** (scrollWidth mindig < vw; a .hd-* díszeket a hero overflow:clip vágja) |
| Hero arány | mért magasság/vh | 1920×1080: 0,88 • 1440×900: 0,95 • 1181×800: 0,97 — mind ≥80vh |
| H1/mask vágás | scrollHeight vs clientHeight soronként | **PASS — 0 vágott leszálló** a javítás után |
| Egy H1 / dup ID / törött kép | DOM-számolás | PASS — 1 H1, 0 duplikátum, 0 broken img |
| JSON-LD | JSON.parse | PASS — LiquorStore, abszolút url/image |
| Linkek | DOM-számolás | PASS — 8 tel, 2 mailto, 5 FB (_blank), 4 maps; nyitvatartás-szöveg változatlan |
| Lightbox | programozott nyit/next/close + alt/caption ellenőrzés | PASS |
| Mobil menü | nyit → X-katt hit-test → zár; body scroll-lock; aria | PASS (a [hidden] fix után) |
| Konzol / hálózat | preview_logs | PASS — 0 console üzenet, minden erőforrás 200, hero-pince már nem töltődik |
| Képméret/CLS | width/height attr + parent aspect-ratio minden layout-képen | PASS |
| Súly | fájl-mérés | ~678 KB statikus összesen (a korábbi 801 KB-ról: unused logo-PNG/key-white/hero-pince törölve) |
| Vizuális | 10+ élő screenshot 1440/1920/390 | PASS — hero/statement/boraink/különlegességek/alkalom/kóstolók/monor/galéria/kapcsolat/footer átnézve |

## NOT VERIFIED / N/A
- Élő készüléken való swipe-teszt (touch): a lightbox swipe-handler kód szinten jelen van, valós érintéssel NEM volt tesztelve.
- Lighthouse: N/A (nincs build-toolchain; súly+CLS kézzel mérve).
- Éles Pages ellenőrzés a push UTÁN történik (lásd PROJECT_STATE).


---

# V5 TELJES KÉP-AUDIT + FINAL POLISH — 2026-10-01

## Módszer
Pixel-eloszlás elemzés mind az 5 asseten (PIL, oszlop-fényerő profil), majd dedikált crop-teszt oldal
(_brandwork/crop_test.html): 15 tervezett arány+object-position kombináció képernyőképen vizuálisan kiértékelve.
CSAK a vizuálisan igazolt cropok kerültek be.

## Végleges crop-döntések (vizuálisan igazolva)
| Kép (arány) | Használat | Új beállítás | Miért jó |
|---|---|---|---|
| dark-bottles (2.28) | galéria m-lead | **16/9 @50% 50%** (régi: 3/4 @62% 42% — TÖRÖLVE) | kéz + palack + Bormámor-címke + piros kapucni együtt látszik; a széles kép már nem állóba kényszerítve |
| dark-bottles (2.28) | alkalom-visual | 4/3 @50% 50% | kéz+palack+címke kompozíció épen |
| statement-kulcs (2.28) | statement-figure | **16/10 @50% 45%** (régi: 4/3.4) | teljes kulcslyuk+lockup középen, cinematic; mobil ≤1180: 16/9 ugyanazzal a pozícióval |
| statement-kulcs (2.28) | alkalom-visual | 4/3 @50% 45% | lockup középen |
| spirit-shelf (2.28) | specials-figure | **3/2 @50% 50%** (régi: 4/3.2 @55% 40%) | dugóhúzó + mindkét bélyegzett parafa + vízjel együtt |
| spirit-shelf (2.28) | alkalom-visual | 4/3 @55% 50% | kompozíció épen |
| post-13 (1.0) | alkalom-visual | 4/3 @50% 42% | embléma teljes, teteje nem vágódik |
| fb-kulcs-vizual (1.33) | galéria | természetes arány (nincs crop) | kollázs teljes |
| post-13 (1.0) | galéria | természetes square | teljes |

## .occ-visual: 4/4.6 → 4/3
A majdnem-portré konténer 57%-ra vágta le a landscape képeket. 4/3-mal mind a 4 váltókép
(személyre szabott object-position-nel) épen jelenik meg; a grid balance jobb.

## Galéria
- m-lead: 3/4 → 16/9 landscape; a többi kép TERMÉSZTES képarányán marad (masonry változatos ritmus)
- Caption + aria-label igazítás: „Kézben tartott palack — Bormámor címkével” (a kép valós tartalma)
- Wine-index float-preview pozíciók javítva az igazolt cropokra (50/45, 50/50, 55/50)

## Ellenőrzések (EXECUTED)
- 390/768/1440: docScrollW < innerWidth (380/758/1430) — 0 overflow
- computed aspect-ratio + object-position minden kritikus képen ellenőrizve (390/768/1440)
- Lightbox: nyit (új caption), valódi ArrowRight lapozás, Escape, scroll-lock visszaadás — PASS
- occ menü képváltás (2. sor → post-13, @50% 42%) — PASS
- Konzol: 0 üzenet; törött kép: 0
- Vizuális képernyőképek: statement/specials/alkalom/galéria 1440 + 390 — minden téma épen látszik


---

# V6 FINAL VISUAL POLISH — 2026-10-01 (végső kör)

## Változtatások
1. **.occ-visual mobil visszaépítve** (korábban display:none — a 16 pontos prompt fő kritikája): 16/9, max-height 320px, teljes szélesség, order:2 (a lista után), border-radius 6px; aktív-sor váltásra mobilon is változik a kép (JS nem érintett). BUGFIX: az aspect-ratio + max-height a grid-sávot is felfújta (498px → valódi overflow 360px-en!) → `.occ-wrap > * { min-width: 0 }` + width:100% javítás (350 ≤ 360)
2. **Tablet (≤1180):** occ-visual clamp(280px, 38vw, 420px) fix magassággal, hogy 2 oszlopnál se legyen túl magas
3. **Galéria mobil:** m-lead `column-span: all` — a landscape lead-kép teljes szélességben vezeti a 2 oszlopos masonryt (sokkal prémiumabb ritmus)
4. **Kóstolók desktop:** editorial split — heading balra (grid-row 1/span 3, függ. közép), tags+szöveg+CTA jobbra egymás alatt; a korábban üres jobb fél eltűnt; ≤1180 visszaáll egy oszlopra (grid-row reset)
5. **Alacsony viewportok (1100–1920, max-height 830):** hero-title léptékelés 6.4vw-ig, meta-padding rövidítve → 1280×800: hero 0.88×vh (volt 1.01)

## Végrehajtott ellenőrzések (EXECUTED)
| Viewport | docScrollW | Eredmény |
|---|---|---|
| 360×740 | 350 ≤ 360 | PASS (occ-bugfix után) |
| 390×780 | 380 ≤ 390 | PASS |
| 430×860 | 420 ≤ 430 | PASS |
| 768×1024 | 758 ≤ 768 | PASS (occ 292px, tastings 1 oszlop) |
| 1024×768 | 1014 ≤ 1024 | PASS (occ 389px) |
| 1280×800 | 1270 ≤ 1280 | PASS (hero 0.88×vh) |
| 1440×900 | 1430 ≤ 1440 | PASS (hero 0.96×vh, cím 112px) |
- Mobil occasion képváltás (4. sor → dark-bottles, 498→310px széles, 16/9): PASS
- Mobil galéria: lead full-span + 2 oszlop: PASS (képernyőkép)
- Kóstolók 1440 split + 768 egy oszlop: PASS (képernyőképek)
- Konzol: 0 üzenet; hálózat: minden 200/304; törött kép: 0
- 1280-as hero-magasság regresszió javítva (1.01 → 0.88)
