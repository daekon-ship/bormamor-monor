/* ============================================================
   BORMÁMOR MONOR — interakciók
   Header, reveal, parallax, wine-index hover preview,
   fullscreen menü, lightbox, sticky CTA, mágneses gombok.
   Minden motion tiszteletben tartja a reduced-motion-t.
   ============================================================ */
(() => {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(pointer: fine)').matches;

  /* ---------- Header: scrolled állapot + scroll progress ---------- */
  const header = $('[data-header]');
  const progressBar = $('[data-progress]');
  let ticking = false;

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      header.classList.toggle('scrolled', y > 24);

      const doc = document.documentElement;
      const max = doc.scrollHeight - innerHeight;
      if (progressBar) progressBar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';

      if (!reducedMotion) parallax(y);
      ticking = false;
    });
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Parallax (finom, transform-only) ---------- */
  /* A hero tudatosan kép nélküli — itt nincs kép-parallax, csak a Monor blokk média-fátyolja. */
  const monorMedia = $('[data-parallax-slow]');

  function parallax(y) {
    const vh = innerHeight;
    if (monorMedia) {
      const r = monorMedia.parentElement.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) {
        const p = (vh - r.top) / (vh + r.height);
        monorMedia.style.transform = `translate3d(0, ${(p - 0.5) * 9}%, 0)`;
      }
    }
  }

  /* ---------- Scroll reveal ---------- */
  const revealables = $$('.reveal, .img-reveal, .mask-reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    revealables.forEach(el => io.observe(el));
  } else {
    revealables.forEach(el => el.classList.add('in'));
  }

  /* ---------- Bor-index: lebegő kép-előnézet (csak finom pointer) ---------- */
  const floatPreview = $('[data-float-preview]');
  if (floatPreview && finePointer && !reducedMotion) {
    const fpImg = $('img', floatPreview);
    const rows = $$('.wine-row');
    let raf = 0, tx = 0, ty = 0, cx = 0, cy = 0, active = false;

    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      floatPreview.style.left = cx + 'px';
      floatPreview.style.top = cy + 'px';
      raf = requestAnimationFrame(loop);
    };

    rows.forEach(row => {
      row.addEventListener('mouseenter', () => {
        fpImg.src = row.dataset.img || '';
        fpImg.style.objectPosition = row.dataset.pos || '50% 50%';
        active = true;
        floatPreview.classList.add('active');
      });
      row.addEventListener('mouseleave', () => {
        active = false;
        floatPreview.classList.remove('active');
      });
    });

    addEventListener('mousemove', (e) => {
      if (!active) return;
      tx = Math.min(e.clientX + 28, innerWidth - floatPreview.offsetWidth - 12);
      ty = Math.min(Math.max(e.clientY - floatPreview.offsetHeight / 2, 12), innerHeight - floatPreview.offsetHeight - 12);
      if (!raf) { cx = tx; cy = ty; loop(); }
    }, { passive: true });
  }

  /* ---------- Mágneses gombok (nagyon finom, csak fine pointer) ---------- */
  if (finePointer && !reducedMotion) {
    $$('.magnetic').forEach(btn => {
      const strength = 0.22;
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  /* ---------- Mobil fullscreen menü ---------- */
  const navToggle = $('[data-nav-toggle]');
  const mobileMenu = $('[data-mobile-menu]');
  const openMenu = () => {
    mobileMenu.hidden = false;
    mobileMenu.setAttribute('aria-hidden', 'false');
    $$('nav a', mobileMenu).forEach((a, i) => a.style.setProperty('--d', `${0.06 + i * 0.055}s`));
    requestAnimationFrame(() => mobileMenu.classList.add('open'));
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Menü bezárása');
    document.body.style.overflow = 'hidden';
    $('.mobile-menu nav a', document)?.focus?.();
  };
  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Menü megnyitása');
    document.body.style.overflow = '';
    setTimeout(() => { if (!mobileMenu.classList.contains('open')) mobileMenu.hidden = true; }, 460);
  };
  navToggle.addEventListener('click', () =>
    navToggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu());
  $$('a', mobileMenu).forEach(a => a.addEventListener('click', closeMenu));
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') closeMenu();
  });

  /* ---------- Sticky mobil CTA: csak ha elhagytuk a hero-t ---------- */
  const stickyCta = $('[data-sticky-cta]');
  if (stickyCta) {
    const hero = $('.hero');
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => {
        const show = !e.isIntersecting;
        stickyCta.classList.toggle('visible', show);
        stickyCta.setAttribute('aria-hidden', String(!show));
        $$('.s-cta', stickyCta).forEach(a => a.tabIndex = show ? 0 : -1);
      }, { threshold: 0.08 }).observe(hero);
    } else {
      stickyCta.classList.add('visible');
    }
  }

  /* ---------- Lightbox ---------- */
  const lb = $('[data-lightbox]');
  if (lb) {
    const lbImg = $('[data-lb-img]', lb);
    const lbCap = $('[data-lb-cap]', lb);
    const items = $$('.m-btn');
    let idx = 0;
    let lastFocus = null;

    /* Egyetlen nagyítható kép esetén nincs értelme a lapozásnak */
    if (items.length <= 1) lb.classList.add('single');

    const show = (i) => {
      idx = (i + items.length) % items.length;
      const item = items[idx];
      const img = $('img', item);
      lbImg.src = item.dataset.lb || img.src;
      lbImg.alt = img.alt;
      lbCap.textContent = img.alt || '';
    };
    const openLb = (i) => {
      lastFocus = document.activeElement;
      show(i);
      lb.showModal();
      document.body.style.overflow = 'hidden';
      $('.lb-close', lb).focus();
    };
    const closeLb = () => {
      lb.close();
    };
    lb.addEventListener('close', () => {
      document.body.style.overflow = '';
      lastFocus && lastFocus.focus();
    });

    items.forEach((item, i) => item.addEventListener('click', () => openLb(i)));
    $('[data-lb-close]', lb).addEventListener('click', closeLb);
    $('[data-lb-prev]', lb).addEventListener('click', () => show(idx - 1));
    $('[data-lb-next]', lb).addEventListener('click', () => show(idx + 1));

    lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });

    lb.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
    });

    /* swipe mobilon */
    let sx = 0;
    lb.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 48) show(idx + (dx < 0 ? 1 : -1));
    }, { passive: true });
  }

  /* ---------- Nyitvatartás-jelző (Péntek 10–18, Szombat 9–14) ---------- */
  const openNow = $('[data-open-now]');
  if (openNow) {
    const now = new Date();
    const day = now.getDay(); // 0=vasárnap ... 6=szombat
    const mins = now.getHours() * 60 + now.getMinutes();
    const spans = { 5: [[600, 1080]], 6: [[540, 840]] };
    const windows = spans[day] || [];
    const isOpen = windows.some(([a, b]) => mins >= a && mins < b);
    openNow.classList.add(isOpen ? 'ok' : 'closed');
    openNow.textContent = isOpen ? 'Most nyitva' : 'Most zárva';
  }
  /* ---------- Alkalomhoz választunk: editorial menü + képváltás ---------- */
  const occMenu = $('[data-occ-menu]');
  if (occMenu) {
    const occRows = $$('[data-occ]', occMenu);
    const visImgs = $$('.occ-visual img');
    const activateOcc = (i) => {
      occRows.forEach((r, k) => r.classList.toggle('is-active', k === i));
      visImgs.forEach((im, k) => im.classList.toggle('is-active', k === i));
    };
    occRows.forEach((row, i) => {
      row.addEventListener('mouseenter', () => activateOcc(i));
      row.addEventListener('click', () => activateOcc(i));
      row.addEventListener('focusin', () => activateOcc(i));
    });
  }

  const sections = $$('main section[id]');
  const navLinks = $$('.site-nav a');
  if ('IntersectionObserver' in window && navLinks.length) {
    const spy = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          const id = '#' + e.target.id;
          navLinks.forEach(a => a.classList.toggle('current', a.getAttribute('href') === id));
        }
      }
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));
  }

})();
