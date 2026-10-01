# BORMÁMOR MONOR — Projektállapot

## Jelenlegi cél
Teljes prémium one-page weboldal a Bormámor Monor Borkereskedés számára, az ügyfél saját anyagaiból.

## Brand / tartalmi tények (hivatalos)
- Név: BORMÁMOR MONOR — Borkereskedés
- Szlogen: „Kulcs a minőséghez"
- Cím: 2200 Monor, Kiss Ernő utca 9.
- Telefon: +36 20 383 0016 (tel:+36203830016)
- E-mail: bormamormonor@gmail.com
- Facebook: https://www.facebook.com/bormamormonor/
- NYITVATARTÁS (ezt kommunikáljuk): Péntek 10:00–18:00, Szombat 09:00–14:00. Egyéb napokra NEM találunk ki nyitvatartást.

## Asset térkép (egyedileg átvizsgálva)
- bormamor_elemek-05.png (1640×720): sötét, hangulatos pince/italpolc fotó → **HERO**
- bormamor_elemek-06.png: meleg, réz/bronz hangulat, kulcs-embléma fénnyel → **Brand statement vizuál**
- bormamor_elemek-07.jpg: nagyon sötét, zöldes-olív tónus, palackkontúrok → **Nem csak bor / Monor blokk hátterek**
- bormamor_elemek-08.png: barna-arany üvegsor, meleg fény → **Különlegességek / Kóstolók vizuál**
- bormamor_elemek-09.png: bézs poszt, középen kulcs-embléma, alul szövegsáv → **Alkalom-blokk vizuál / statement kísérő**
- bormamor_elemek-10.png: bézs poszt, borosüveg-illusztráció szőlőlevéllel → **Boraink panel vizuál**
- bormamor_elemek-11.png: burgundy poszt, fehér kulcs → **Kóstoló blokk vizuál**
- bormamor_elemek-12.png: burgundy, kulcs+üveg X-alakú line-art kompozíció → **Galéria / divider vizuál**
- bormamor_elemek-13.png: bézs, nagy kulcs-embléma keretben → **Galéria vizuál**
- bormamor_elemek-02.png: bézs banner, középen kulcs-embléma → logó/OG anyag
- bormamor_elemek-03.png: bézs banner „Kulcs a minőséghez" szlogennel → **Brand statement typó kísérő**
- bormamor_elemek-04.png: burgundy banner, halvány szöveg → háttér-vizuál
- FB_IMG_1581839014017.jpg: burgundy FB-vizuál kulccsal → OG image alap / galéria
- bomamor_logo_final.pdf: 7 vektoros logóvariáns, Argent CF + Montserrat betűk → header/footer logó, favicon

## Márka színek (a logó anyagokból mérve)
- Burgundy: #6B0F1A (elsődleges)
- Bézs/papír: #BBB7B0 / #F3EBDD
- Sötét talaj: #160D0F–#241013
- Bronz accent: #B99A68
- Olív: csak nyomokban (elemek-07 zöldes tónusa)

## Státusz
- [x] Teljes build + audit + javítások (V1)
- [x] V2 vizuális polish: hero editorial keret + függő oldalszöveg, kulcs-divider vonalakkal,
      editorial sorszámok (01–06), nyitvatartás-jelző (Most nyitva/zárva), ónvessző-kompozíció,
      pill-mentes különlegesség-lista, kóstoló tag-ek, nagy Fraunces telefonszám,
      galéria figure+figcaption kártyákon, keyboard-focusable alkalmi tile-ok, editorial 3-oszlopos footer
- [x] GitHub repo + Pages: https://daekon-ship.github.io/bormamor-monor/
- [x] Éles füstteszt: HTTP 200, 0 törött kép, fontok OK, overflow 0
- [x] V3 final refinement: Cormorant+Jost tipográfia, kúrált galéria (6), editorial alkalom-menü, copy+alt javítások, 504 KB, 13 viewport audit
- [x] V4 végső prémium kör: KÉP NÉLKÜLI tipográfiai hero (kulcslyuk+pohár vonal-védjegy díszként), logó specimen-hiba (GOTHAM LIGHT) javítva PDF-vektorokból, copy-hibák (vesszők, kóstolók), mask-reveal Monor blokk, [hidden]/z-index mobilmenü-bugfix, mask-descender fix, noscript fallback fix, 5 kurált galéria-kép, hero-pince teljes kivonása, ~678 KB
- [x] V5 teljes kép-audit + final polish: minden crop vizuálisan igazolva (crop-teszt oldal), m-lead 3/4→16/9, statement 16/10, specials 3/2, occ-visual 4/4.6→4/3 + képenkénti object-position, galéria természetes arányokon, float-preview pozíciók javítva
- [x] V6 final visual polish: occ-visual mobilon VISSZA (16/9, max-height, szinkron képváltás) + grid min-width bugfix (valódi 360px overflow megszüntetve), galéria mobil full-width lead, kóstolók editorial split, alacsony viewport hero-léptékelés (1280×800: 0.88×vh), 7 viewport overflow-PASS
- [x] V7 editorial képszerkezet: masonry-galéria megszűnt → képek szétosztva a ritmusban (kóstoló: post-13 márkakártya; kapcsolat előtt: fb-kollázs + dark-bottles overlap klaszter); caption-dobozok eltűntek; Monor mobil-scrim javítva (0.95); lightbox mindenhova megmaradt
- [x] V9: interlude képklasszter TELJESEN törölve (ügyfél: "ez a galéria nem kell") — fb-kollázs az alkalom-váltó új "Asztalterítéssel" sorába épült; "Galéria" menüpont kikerült; minden kép szekció-rész, 0 caption, 0 képgyűjtő blokk
- [ ] Egyedi domain (ha a megrendelő hoz) — DNS + CNAME + og:url frissítés

## Auditálás közben javított hibák
1. Masonry-képek fix magassága (globális img height:auto hiánya) → javítva
2. Bor-index szekció 5200 px-re duzzadt a felesleges inline thumb képektől → eltávolítva
3. 360 px: 3 px overflow a kontakt e-mail címnél → overflow-wrap javítás
4. Kontraszt: footer copyright és világos hátterű bronz-címkék → WCAG AA-ra javítva
5. Mobil menü aria-hidden/fókusz ütközés → javítva
6. Horgony-célok a fix header alá csúsznak → scroll-margin-top
7. Banner-sávok cover-cropja levágta a kulcs-emblémát → contain / art-directed key divider
