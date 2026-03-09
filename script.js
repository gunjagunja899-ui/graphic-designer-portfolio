// ================================================================
// GRAPHIC DESIGN PORTFOLIO – Main Script
// Data loaded from data.js (portfolioData)
// ================================================================

const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

// ── State ─────────────────────────────────────────────────────
let activeFilter   = 'all';
let lightboxItems  = [];
let lightboxIndex  = 0;

// ================================================================
// PAGE LOADER
// ================================================================
function initPageLoader() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = $('#pageLoader');
      if (loader) loader.classList.add('hidden');
    }, 800);
  });
}

// ================================================================
// SCROLL PROGRESS BAR
// ================================================================
function initScrollProgress() {
  const bar = $('.scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const docH   = document.documentElement.scrollHeight - window.innerHeight;
    const pct    = docH > 0 ? (window.scrollY / docH) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
}

// ================================================================
// HEADER: scroll shadow + active nav
// ================================================================
function initHeader() {
  const header   = $('#siteHeader');
  const navLinks = $$('.nav-link');

  // Scroll shadow
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // Active link via IntersectionObserver
  const sections = navLinks
    .map(l => document.querySelector(l.getAttribute('href')))
    .filter(Boolean);

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id;
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(s => io.observe(s));
}

// ================================================================
// HAMBURGER – MOBILE NAV
// ================================================================
function initHamburger() {
  const btn = $('#hamburger');
  const nav = $('#mainNav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });

  // Close on nav link click
  $$('.nav-link, .nav-cta', nav).forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ================================================================
// REVEAL ANIMATIONS
// ================================================================
function initReveal() {
  const els = $$('[data-reveal]');
  if (!els.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('reveal-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });

  els.forEach(el => io.observe(el));
}

// ================================================================
// TYPING ANIMATION
// ================================================================
function initTyping() {
  const el = $('#typingText');
  if (!el || !portfolioData.typingTitles.length) return;

  const titles  = portfolioData.typingTitles;
  let ti = 0, ci = 0, deleting = false;

  function tick() {
    const word = titles[ti];
    el.textContent = deleting
      ? word.slice(0, ci - 1)
      : word.slice(0, ci + 1);

    deleting ? ci-- : ci++;

    let delay = deleting ? 45 : 95;

    if (!deleting && ci === word.length) {
      delay = 2000;
      deleting = true;
    } else if (deleting && ci === 0) {
      deleting = false;
      ti = (ti + 1) % titles.length;
    }

    setTimeout(tick, delay);
  }

  tick();
}

// ================================================================
// RENDER STATS STRIP
// ================================================================
function renderStats() {
  const strip = $('#statsStrip');
  if (!strip) return;

  strip.innerHTML = portfolioData.stats.map(s => `
    <div class="stat-strip-item">
      <div class="stat-emoji">${s.icon}</div>
      <span class="stat-number">${s.number}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join('');
}

// ================================================================
// RENDER ABOUT + SKILLS
// ================================================================
function renderAbout() {
  const bio = $('#aboutBio');
  if (bio) bio.textContent = portfolioData.about;

  const container = $('#skillsContainer');
  if (!container) return;

  container.innerHTML = portfolioData.skills.map(group => `
    <div class="skill-group">
      <div class="skill-group-title">${group.category}</div>
      <div class="skill-pills">
        ${group.items.map(skill => `<span class="skill-pill">${skill}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ================================================================
// RENDER PORTFOLIO GRID
// ================================================================
function getCategoryLabel(cat) {
  const map = {
    logo:    'Logo Design',
    social:  'Social Media',
    poster:  'Poster',
    ai:      'AI Design',
    fashion: 'Fashion Design'
  };
  return map[cat] || cat;
}

function renderPortfolio(filter = 'all') {
  const grid = $('#portfolioGrid');
  if (!grid) return;

  const items = filter === 'all'
    ? portfolioData.portfolio
    : portfolioData.portfolio.filter(p => p.category === filter);

  // Track lightbox items
  lightboxItems = items;

  if (!items.length) {
    grid.innerHTML = `<div class="portfolio-empty">No projects found in this category.</div>`;
    return;
  }

  grid.innerHTML = items.map((item, idx) => {
    let visualInner;
    if (item.svgLogo) {
      visualInner = `<div class="port-svg-mark">${item.svgLogo}</div>`;
    } else if (item.svgDesign) {
      visualInner = `<div class="port-svg-design">${item.svgDesign}</div>`;
    } else {
      visualInner = `<span class="port-symbol">${item.symbol || ''}</span>`;
    }
    return `
    <article
      class="port-card"
      data-id="${item.id}"
      data-idx="${idx}"
      data-size="${item.size || 'normal'}"
      role="button"
      tabindex="0"
      aria-label="View ${item.title}"
    >
      <div class="port-visual" style="background: ${item.gradient};">
        ${visualInner}
        <div class="port-overlay">
          <span class="port-view-btn">
            <i class="ri-eye-line"></i> View Project
          </span>
        </div>
      </div>
      <div class="port-body">
        <span class="port-cat-badge badge-${item.category}">${getCategoryLabel(item.category)}</span>
        <h3 class="port-title">${item.title}</h3>
        <div class="port-tags">
          ${item.tags.map(t => `<span class="port-tag">${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `;
  }).join('');

  // Attach click handlers
  $$('.port-card', grid).forEach(card => {
    card.addEventListener('click',   () => openLightbox(parseInt(card.dataset.idx)));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(parseInt(card.dataset.idx));
      }
    });
  });
}

// ================================================================
// FILTER TABS
// ================================================================
function initFilters() {
  const tabs = $$('.filter-btn');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      if (filter === activeFilter) return;

      activeFilter = filter;
      tabs.forEach(b => b.classList.toggle('active', b === btn));
      renderPortfolio(filter);
    });
  });
}

// ================================================================
// LIGHTBOX
// ================================================================
function openLightbox(idx) {
  lightboxIndex = idx;
  renderLightboxCard();

  const lb = $('#lightbox');
  if (lb) {
    lb.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    lb.focus();
  }
}

function closeLightbox() {
  const lb = $('#lightbox');
  if (lb) {
    lb.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }
}

function renderLightboxCard() {
  const card = $('#lightboxCard');
  if (!card || !lightboxItems.length) return;

  const item = lightboxItems[lightboxIndex];
  if (!item) return;

  let lbVisualInner;
  if (item.svgLogo) {
    lbVisualInner = `<div class="lb-svg-mark">${item.svgLogo}</div>`;
  } else if (item.svgDesign) {
    lbVisualInner = `<div class="lb-svg-design">${item.svgDesign}</div>`;
  } else {
    lbVisualInner = `<span class="lb-icon">${item.symbol || ''}</span>`;
  }

  const embroiderySection = item.embroideryLogic ? `
    <div class="lb-embroidery">
      <div class="lb-embroidery-title"><i class="ri-scissors-2-line"></i> Embroidery Logic</div>
      <ul class="lb-embroidery-list">
        ${item.embroideryLogic.map(e => `<li>${e}</li>`).join('')}
      </ul>
    </div>
  ` : '';

  card.innerHTML = `
    <div class="lb-visual" style="background: ${item.gradient};">
      ${lbVisualInner}
    </div>
    <div class="lb-body">
      <div class="lb-category">${getCategoryLabel(item.category)}</div>
      <h2 class="lb-title">${item.title}</h2>
      <p class="lb-desc">${item.description}</p>
      <div class="lb-tags">
        ${item.tags.map(t => `<span class="lb-tag">${t}</span>`).join('')}
      </div>
      ${embroiderySection}
    </div>
  `;
}

function initLightbox() {
  const lb         = $('#lightbox');
  const overlay    = $('#lightboxOverlay');
  const closeBtn   = $('#lightboxClose');
  const prevBtn    = $('#lightboxPrev');
  const nextBtn    = $('#lightboxNext');

  if (!lb) return;

  overlay?.addEventListener('click',  closeLightbox);
  closeBtn?.addEventListener('click', closeLightbox);

  prevBtn?.addEventListener('click', () => {
    lightboxIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
    renderLightboxCard();
  });

  nextBtn?.addEventListener('click', () => {
    lightboxIndex = (lightboxIndex + 1) % lightboxItems.length;
    renderLightboxCard();
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (lb.hasAttribute('hidden')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  { lightboxIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length; renderLightboxCard(); }
    if (e.key === 'ArrowRight') { lightboxIndex = (lightboxIndex + 1) % lightboxItems.length; renderLightboxCard(); }
  });
}

// ================================================================
// CONTACT FORM
// ================================================================
function initContactForm() {
  const form      = $('#contactForm');
  const statusEl  = $('#formStatus');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name    = $('#cfName')?.value.trim();
    const email   = $('#cfEmail')?.value.trim();
    const message = $('#cfMessage')?.value.trim();

    // Reset
    if (statusEl) { statusEl.className = 'form-status'; statusEl.textContent = ''; }

    // Validate
    if (!name || !email || !message) {
      showStatus('error', '⚠️ Please fill in all required fields.');
      return;
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      showStatus('error', '⚠️ Please enter a valid email address.');
      return;
    }

    // Simulate submission
    const btn = $('#cfSubmit');
    if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }

    setTimeout(() => {
      showStatus('success', '✅ Message sent! I\'ll get back to you within 24 hours.');
      form.reset();
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<i class="ri-send-plane-fill"></i> Send Message';
      }
    }, 1200);
  });

  function showStatus(type, msg) {
    if (!statusEl) return;
    statusEl.className = `form-status ${type}`;
    statusEl.textContent = msg;
    setTimeout(() => { statusEl.className = 'form-status'; statusEl.textContent = ''; }, 6000);
  }
}

// ================================================================
// SMOOTH SCROLL (anchor links)
// ================================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ================================================================
// FOOTER YEAR
// ================================================================
function initFooterYear() {
  const el = $('#footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

// ================================================================
// INIT
// ================================================================
function init() {
  initPageLoader();
  initScrollProgress();
  initHeader();
  initHamburger();
  initReveal();
  initTyping();
  renderStats();
  renderAbout();
  renderPortfolio();
  initFilters();
  initLightbox();
  initContactForm();
  initSmoothScroll();
  initFooterYear();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
