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
- [x] Projekt feltérképezés, asset review, pixel-elemzés
- [x] DAEKON skillek betöltése, stack döntés (zero-framework static)
- [x] Asset pipeline (WebP, cropok, logó, favicon, OG, fontok)
- [x] index.html / style.css / main.js
- [x] Audit körök (vizuális / responsive / technikai) + javítások
- [x] QA report → .daekon/qa-report.md
- [ ] Éles telepítés (ha a megrendelő kéri) + og:url pótlása domain ismeretében

## Következő lépés
Telepítés a megrendelő tárhelyére; az oldal a preview panelen megtekinthető (127.0.0.1:8613).

## Auditálás közben javított hibák
1. Masonry-képek fix magassága (globális img height:auto hiánya) → javítva
2. Bor-index szekció 5200 px-re duzzadt a felesleges inline thumb képektől → eltávolítva
3. 360 px: 3 px overflow a kontakt e-mail címnél → overflow-wrap javítás
4. Kontraszt: footer copyright és világos hátterű bronz-címkék → WCAG AA-ra javítva
5. Mobil menü aria-hidden/fókusz ütközés → javítva
6. Horgony-célok a fix header alá csúsznak → scroll-margin-top
7. Banner-sávok cover-cropja levágta a kulcs-emblémát → contain / art-directed key divider
