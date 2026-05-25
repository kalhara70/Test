/* ============================================================
   CameraLK — Header Injection + Dynamic Footer
   ============================================================ */

const HEADER_HTML = `
<div class="overlay" id="drawer-overlay"></div>
<nav class="mobile-drawer" id="mobile-drawer" aria-label="Mobile navigation">
  <div class="drawer-header">
    <span class="drawer-logo logo-text">Camera<span style="color:#fff">LK</span></span>
    <button class="drawer-close" id="drawer-close">✕</button>
  </div>
  <div class="drawer-nav" id="drawer-nav-links">
    <a href="category.html?cat=Photography"><i class="fas fa-camera"></i> Photography</a>
    <a href="category.html?cat=Pro Video"><i class="fas fa-video"></i> Pro Video</a>
    <a href="category.html?cat=Lighting"><i class="fas fa-bolt"></i> Lighting</a>
    <a href="category.html?cat=Audio"><i class="fas fa-microphone"></i> Audio</a>
    <a href="category.html?cat=Drones"><i class="fas fa-helicopter"></i> Drones</a>
    <a href="category.html?cat=Gaming"><i class="fas fa-gamepad"></i> Gaming</a>
    <a href="category.html?cat=Optics"><i class="fas fa-binoculars"></i> Optics</a>
    <a href="category.html?cat=Other"><i class="fas fa-ellipsis-h"></i> Other</a>
  </div>
  <div class="drawer-util">
    <a href="#">Ambassadors</a><a href="#">Academy</a>
    <a href="#">Rent</a><a href="#">Repair</a><a href="#">News</a>
    <div style="display:flex;gap:16px;margin-top:12px">
      <a href="#" style="color:#888;font-size:18px"><i class="fab fa-facebook-f"></i></a>
      <a href="#" style="color:#888;font-size:18px"><i class="fab fa-twitter"></i></a>
      <a href="#" style="color:#888;font-size:18px"><i class="fab fa-youtube"></i></a>
      <a href="#" style="color:#888;font-size:18px"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
</nav>

<header id="site-header">
  <div class="header-top">
    <div class="container">
      <div class="header-top-left"><i class="fas fa-headset"></i><span>+94 11 234 5678</span></div>
      <div class="header-top-right">
        <div class="util-links">
          <a href="#">Ambassadors</a><span class="header-divider">|</span>
          <a href="#">Academy</a><span class="header-divider">|</span>
          <a href="#">Rent</a><span class="header-divider">|</span>
          <a href="#">Repair</a><span class="header-divider">|</span>
          <a href="#">News</a>
        </div>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div class="header-main">
    <div class="container">
      <button class="hamburger-btn" id="hamburger-btn"><span></span><span></span><span></span></button>
      <a href="index.html" class="logo">
        <div>
          <div class="logo-text">Camera<span>LK</span></div>
          <span class="logo-sub">Sri Lanka's #1 Camera Store</span>
        </div>
      </a>

      <!-- SEARCH BAR -->
      <div class="search-bar" style="position:relative;flex:1" id="search-wrap">
        <input type="text" id="search-input" placeholder="Search products, brands & more..." autocomplete="off"
          oninput="handleSearch(this.value)" onkeydown="handleSearchKey(event)">
        <button onclick="triggerSearch()" aria-label="Search"><i class="fas fa-search"></i></button>

        <!-- Search Dropdown -->
        <div id="search-dropdown" style="
          display:none;position:absolute;top:calc(100% + 6px);left:0;right:0;
          background:#fff;border:1px solid #e0e0e0;border-radius:10px;
          box-shadow:0 8px 32px rgba(0,0,0,.15);z-index:999;overflow:hidden;
        ">
          <div id="search-results-list"></div>
          <div id="search-no-results" style="display:none;padding:20px;text-align:center;color:#aaa;font-size:13px">
            <i class="fas fa-search" style="font-size:22px;display:block;margin-bottom:8px;color:#e0e0e0"></i>
            No results found
          </div>
          <div id="search-footer-link" style="display:none;padding:10px 16px;border-top:1px solid #f5f5f5;text-align:center">
            <a id="search-view-all" href="#" style="font-size:13px;font-weight:700;color:var(--red)">View all results →</a>
          </div>
        </div>
      </div>

      <div class="header-actions">
        <a href="account.html" class="header-action-btn" aria-label="My Account">
          <i class="fas fa-user"></i>
          <span class="btn-label">My Account</span>
        </a>
        <a href="cart.html" class="header-action-btn" style="position:relative" aria-label="My Cart">
          <i class="fas fa-shopping-cart"></i>
          <span class="btn-label">My Cart</span>
          <span class="cart-badge" style="display:none">0</span>
        </a>
      </div>
    </div>
  </div>

  <nav class="header-nav" aria-label="Primary navigation">
    <div class="container">
      <div class="nav-links" id="main-nav-links">
        <a href="category.html?cat=Photography">Photography</a>
        <a href="category.html?cat=Pro Video">Pro Video</a>
        <a href="category.html?cat=Lighting">Lighting</a>
        <a href="category.html?cat=Audio">Audio</a>
        <a href="category.html?cat=Drones">Drones</a>
        <a href="category.html?cat=Gaming">Gaming</a>
        <a href="category.html?cat=Optics">Optics</a>
        <a href="category.html?cat=Other">Other</a>
      </div>
    </div>
  </nav>
</header>

<style>
.search-result-item {
  display:flex;align-items:center;gap:12px;padding:11px 16px;
  cursor:pointer;transition:background .12s;border-bottom:1px solid #f8f8f8;
  text-decoration:none;color:inherit;
}
.search-result-item:hover { background:#fff5f5; }
.search-result-item:last-child { border-bottom:none; }
.sri-thumb { width:44px;height:44px;object-fit:contain;background:#f5f5f5;border-radius:6px;padding:4px;flex-shrink:0; }
.sri-name  { font-size:13px;font-weight:600;color:#1a1a1a;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden; }
.sri-meta  { font-size:11px;color:#aaa;margin-top:2px; }
.sri-price { font-size:13px;font-weight:800;color:var(--red);margin-left:auto;white-space:nowrap; }
.search-spinner { padding:18px;text-align:center;color:#aaa;font-size:13px; }
</style>
`;

// ── Search Functions ───────────────────────────────────────
let searchTimeout = null;

function handleSearch(q) {
  clearTimeout(searchTimeout);
  const dd = document.getElementById('search-dropdown');
  const rl = document.getElementById('search-results-list');
  const nr = document.getElementById('search-no-results');
  const fl = document.getElementById('search-footer-link');
  const va = document.getElementById('search-view-all');

  if (!q || q.trim().length < 2) { dd.style.display = 'none'; return; }

  // Show spinner
  dd.style.display = 'block';
  rl.innerHTML = '<div class="search-spinner"><i class="fas fa-circle-notch fa-spin"></i> Searching…</div>';
  nr.style.display = 'none'; fl.style.display = 'none';

  searchTimeout = setTimeout(() => {
    if (typeof SearchEngine === 'undefined' || !SearchEngine.index.length) {
      if (typeof Store !== 'undefined') SearchEngine.build();
    }
    const results = typeof SearchEngine !== 'undefined' ? SearchEngine.search(q) : [];

    if (!results.length) {
      rl.innerHTML = '';
      nr.style.display = 'block';
      fl.style.display = 'none';
    } else {
      rl.innerHTML = results.map(p => {
        const thumb = p.img || `https://placehold.co/44x44/f5f5f5/999?text=${encodeURIComponent(p.brand||'?')}`;
        return `<a class="search-result-item" href="product.html?id=${p.id}">
          <img class="sri-thumb" src="${thumb}" onerror="this.src='https://placehold.co/44x44/f5f5f5/999?text=IMG'" alt="${p.name}">
          <div style="flex:1;min-width:0">
            <div class="sri-name">${p.name}</div>
            <div class="sri-meta">${p.brand} · ${p.category}</div>
          </div>
          <div class="sri-price">Rs. ${p.price.toLocaleString()}</div>
        </a>`;
      }).join('');
      nr.style.display = 'none';
      fl.style.display = 'block';
      if (va) {
        va.href = `category.html?search=${encodeURIComponent(q)}`;
        va.textContent = `View all results for "${q}" →`;
      }
    }
  }, 280);
}

function handleSearchKey(e) {
  if (e.key === 'Enter') triggerSearch();
  if (e.key === 'Escape') document.getElementById('search-dropdown').style.display = 'none';
}

function triggerSearch() {
  const q = document.getElementById('search-input')?.value.trim();
  if (q && q.length >= 2) {
    window.location.href = `category.html?search=${encodeURIComponent(q)}`;
  }
}

// Close dropdown on outside click
document.addEventListener('click', e => {
  const wrap = document.getElementById('search-wrap');
  if (wrap && !wrap.contains(e.target)) {
    const dd = document.getElementById('search-dropdown');
    if (dd) dd.style.display = 'none';
  }
});

// ── Footer Renderer (called from store.js) ─────────────────
// renderFooter() lives in store.js

// ── Boot ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  const headerMount = document.getElementById('header-mount');
  const footerMount = document.getElementById('footer-mount');

  if (headerMount) headerMount.innerHTML = HEADER_HTML;

  if (footerMount) {
    footerMount.innerHTML = `
      <footer id="site-footer">
        <div class="container" style="padding:40px 20px;text-align:center;color:#333;font-size:13px">
          <div style="width:36px;height:36px;border:3px solid #222;border-top-color:#D91B23;border-radius:50%;animation:spin .8s linear infinite;margin:0 auto 10px"></div>
          Loading footer…
        </div>
      </footer>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>`;
  }

  if (typeof initStickyHeader === 'function') initStickyHeader();
  if (typeof initHamburger    === 'function') initHamburger();
  if (typeof updateCartBadge  === 'function') updateCartBadge();

  if (typeof Store !== 'undefined') {
    await Store.init();
    Store.applySettings();

    // Build search index
    if (typeof SearchEngine !== 'undefined') SearchEngine.build();

    if (footerMount && typeof renderFooter === 'function') {
      renderFooter(Store.settings);
    }
  }

  // Active nav link highlight
  const path = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a, .drawer-nav a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});
