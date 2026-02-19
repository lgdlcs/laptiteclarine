/* ═══════════════════════════════════════════════
   LA P'TITE CLARINE — Script
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── NAVBAR SCROLL ───
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ─── MOBILE NAV ───
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );

  // ─── PARALLAX ───
  const parallaxEls = document.querySelectorAll('.parallax');
  const updateParallax = () => {
    const scrollY = window.scrollY;
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.dataset.speed) || 0.3;
      const rect = el.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
  };
  window.addEventListener('scroll', updateParallax, { passive: true });
  updateParallax();

  // ─── SCROLL REVEAL ───
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.15 });
  reveals.forEach(el => revealObserver.observe(el));

  // ─── MENU TABS ───
  const tabs = document.querySelectorAll('.menu-tab');
  const content = document.getElementById('menuContent');

  function renderMenu(key) {
    const section = menuData[key];
    if (!section) { content.innerHTML = ''; return; }

    let html = '';
    section.categories.forEach(cat => {
      html += `<div class="menu-category">`;
      html += `<h3 class="menu-category-title">${cat.name}</h3>`;
      if (cat.note) html += `<p class="menu-category-note">${cat.note}</p>`;

      if (!cat.items || cat.items.length === 0) {
        html += `<p class="menu-empty">Bientôt disponible…</p>`;
      } else {
        cat.items.forEach(item => {
          html += `
            <div class="menu-item">
              <div class="menu-item-info">
                <div class="menu-item-name">${item.name}</div>
                ${item.description ? `<div class="menu-item-desc">${item.description}</div>` : ''}
              </div>
              <div class="menu-item-price">${item.price}€</div>
            </div>`;
        });
      }
      html += `</div>`;
    });

    content.innerHTML = html;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderMenu(tab.dataset.tab);
    });
  });

  // Initial render
  renderMenu('sale');
});
