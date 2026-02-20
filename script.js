/* ═══════════════════════════════════════════════
   LA P'TITE CLARINE — Script
   ═══════════════════════════════════════════════ */

// ─── GOOGLE SHEET CONFIG ───
// Pour changer : remplacer SHEET_ID par l'ID de votre Google Sheet
// Le sheet doit être "Publié sur le web" (Fichier > Partager > Publier)
// Colonnes attendues : tab | category | note | name | description | price
const SHEET_ID = '1rltI_m009ZH3PNnt79sb2ZH4aS6LeypxBsy0iAeGw1I';
const SHEET_NAME = window.SHEET_NAME_OVERRIDE || 'menu-LaPtiteClarine';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME)}`;

/**
 * Parse la réponse Google Sheets (JSONP-like) en menuData
 */
function parseSheetToMenu(text) {
  // Google renvoie : google.visualization.Query.setResponse({...})
  const json = JSON.parse(text.match(/google\.visualization\.Query\.setResponse\((.+)\)/s)[1]);
  const rows = json.table.rows;

  const menu = {};

  // Skip header row if first cell is "tab"
  const startIdx = (rows[0]?.c?.[0]?.v || '').toLowerCase() === 'tab' ? 1 : 0;

  rows.slice(startIdx).forEach(row => {
    const cells = row.c;
    const tab = (cells[0] && cells[0].v || '').trim().toLowerCase();
    const category = (cells[1] && cells[1].v || '').trim();
    const note = (cells[2] && cells[2].v || '').trim();
    const name = (cells[3] && cells[3].v || '').trim();
    const description = (cells[4] && cells[4].v || '').trim();
    // price peut être number (Google le parse) ou string — on prend .f (formaté) en priorité, puis .v
    const priceCell = cells[5];
    const price = priceCell ? (priceCell.f || (priceCell.v != null ? String(priceCell.v) : '')) : '';

    if (!tab || !name) return; // skip empty rows

    // Titres des onglets
    const tabTitles = { sale: 'Le Salé', sucre: 'Le Sucré', vins: 'Les Vins' };

    if (!menu[tab]) {
      menu[tab] = { title: tabTitles[tab] || tab, categories: [] };
    }

    // Trouver ou créer la catégorie
    let cat = menu[tab].categories.find(c => c.name === category);
    if (!cat) {
      cat = { name: category, items: [] };
      if (note) cat.note = note;
      menu[tab].categories.push(cat);
    }

    cat.items.push({ name, description, price });
  });

  return menu;
}

/**
 * Charge le menu depuis Google Sheets, fallback sur menu-data.js
 */
async function loadMenu() {
  // Si pas de Sheet ID configuré, utiliser le fallback
  if (SHEET_ID === 'VOTRE_SHEET_ID_ICI') {
    console.log('📋 Menu: fallback local (pas de Sheet ID configuré)');
    return menuDataFallback;
  }

  try {
    const resp = await fetch(SHEET_URL);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const text = await resp.text();
    const menu = parseSheetToMenu(text);
    console.log('📋 Menu: chargé depuis Google Sheets');
    return menu;
  } catch (err) {
    console.warn('📋 Menu: Google Sheets indisponible, fallback local', err);
    return menuDataFallback;
  }
}

document.addEventListener('DOMContentLoaded', async () => {

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

  // ─── MENU ───
  const menuData = await loadMenu();
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
