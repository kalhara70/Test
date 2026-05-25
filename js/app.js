/* ============================================================
   CameraLK — Shared JavaScript
   ============================================================ */

// ── Cart State ─────────────────────────────────────────────
const cart = {
  items: JSON.parse(localStorage.getItem('clk_cart') || '[]'),

  save() { localStorage.setItem('clk_cart', JSON.stringify(this.items)); },

  add(product) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) { existing.qty++; }
    else { this.items.push({ ...product, qty: 1 }); }
    this.save();
    updateCartBadge();
    showToast(`✓ ${product.name.slice(0, 40)}... added to cart`);
  },

  remove(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.save();
    updateCartBadge();
  },

  updateQty(id, qty) {
    const item = this.items.find(i => i.id === id);
    if (item) {
      item.qty = Math.max(1, qty);
      this.save();
    }
    updateCartBadge();
  },

  total() { return this.items.reduce((s, i) => s + i.price * i.qty, 0); },
  count() { return this.items.reduce((s, i) => s + i.qty, 0); }
};

// ── Cart Badge ─────────────────────────────────────────────
function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const count = cart.count();
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
  // Also update wishlist count
  const wl = JSON.parse(localStorage.getItem('clk_wishlist') || '[]');
  document.querySelectorAll('.wishlist-count').forEach(el => el.textContent = wl.length);
}

// ── Toast ──────────────────────────────────────────────────
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.innerHTML = `<span class="toast-icon">✓</span><span class="toast-msg"></span>`;
    document.body.appendChild(t);
  }
  t.querySelector('.toast-msg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ── Sticky Header ──────────────────────────────────────────
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ── Mobile Hamburger ───────────────────────────────────────
function initHamburger() {
  const btn = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const closeBtn = document.getElementById('drawer-close');
  if (!btn || !drawer) return;

  const open = () => {
    btn.classList.add('open');
    drawer.classList.add('open');
    overlay?.classList.add('show');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    btn.classList.remove('open');
    drawer.classList.remove('open');
    overlay?.classList.remove('show');
    document.body.style.overflow = '';
  };

  btn.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  overlay?.addEventListener('click', close);
}

// ── Filter Accordions ──────────────────────────────────────
function initFilterAccordions() {
  document.querySelectorAll('.filter-card-header').forEach(header => {
    header.addEventListener('click', () => {
      header.classList.toggle('collapsed');
      const body = header.nextElementSibling;
      body?.classList.toggle('hidden');
    });
  });
}

// ── Countdown Timers ───────────────────────────────────────
function initCountdownTimers() {
  const timers = document.querySelectorAll('[data-end]');
  if (!timers.length) return;

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const now = Date.now();
    timers.forEach(el => {
      const end = parseInt(el.dataset.end, 10);
      const diff = Math.max(0, end - now);
      const days = Math.floor(diff / 86400000);
      const hrs  = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);

      const dEl = el.querySelector('.cd-days');
      const hEl = el.querySelector('.cd-hrs');
      const mEl = el.querySelector('.cd-mins');
      const sEl = el.querySelector('.cd-secs');

      if (dEl) dEl.textContent = days;
      if (hEl) hEl.textContent = pad(hrs);
      if (mEl) mEl.textContent = pad(mins);
      if (sEl) sEl.textContent = pad(secs);
    });
  }

  tick();
  setInterval(tick, 1000);
}

// ── Hero Slider ────────────────────────────────────────────
function initHeroSlider() {
  const slider = document.querySelector('.hero-slider');
  if (!slider) return;
  const slides = slider.querySelectorAll('.slide');
  const dots   = slider.querySelectorAll('.slider-dot');
  let current  = 0;
  let timer;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function autoplay() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  slider.querySelector('.next')?.addEventListener('click', () => { next(); autoplay(); });
  slider.querySelector('.prev')?.addEventListener('click', () => { prev(); autoplay(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); autoplay(); }));

  autoplay();
}

// ── Product Tabs ───────────────────────────────────────────
function initTabs() {
  document.querySelectorAll('.tab-list').forEach(list => {
    const btns   = list.querySelectorAll('.tab-btn');
    const panels = list.closest('section')?.querySelectorAll('.tab-panel');
    btns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        panels?.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        panels?.[i]?.classList.add('active');
      });
    });
  });
}

// ── Quantity Selectors ────────────────────────────────────
function initQtySelectors() {
  document.querySelectorAll('.qty-selector').forEach(wrap => {
    const input = wrap.querySelector('.qty-input');
    wrap.querySelector('.qty-minus')?.addEventListener('click', () => {
      input.value = Math.max(1, parseInt(input.value) - 1);
      input.dispatchEvent(new Event('change'));
    });
    wrap.querySelector('.qty-plus')?.addEventListener('click', () => {
      input.value = parseInt(input.value) + 1;
      input.dispatchEvent(new Event('change'));
    });
  });
}

// ── Product Gallery Thumbnails ────────────────────────────
function initGallery() {
  const main = document.querySelector('.main-image img');
  if (!main) return;
  document.querySelectorAll('.thumb-img').forEach(th => {
    th.addEventListener('click', () => {
      const src = th.querySelector('img')?.src;
      if (src) main.src = src;
      document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
      th.classList.add('active');
    });
  });
}

// ── Cart Rendering ────────────────────────────────────────
function renderCart() {
  const tbody = document.getElementById('cart-tbody');
  const empty = document.getElementById('cart-empty');
  const tableWrap = document.getElementById('cart-table-wrap');
  const summaryWrap = document.getElementById('cart-summary-wrap');
  if (!tbody) return;

  if (cart.items.length === 0) {
    tableWrap?.style && (tableWrap.style.display = 'none');
    summaryWrap?.style && (summaryWrap.style.display = 'none');
    empty?.style && (empty.style.display = 'block');
    return;
  }

  tableWrap?.style && (tableWrap.style.display = '');
  summaryWrap?.style && (summaryWrap.style.display = '');
  if (empty?.style) empty.style.display = 'none';

  tbody.innerHTML = cart.items.map(item => `
    <tr data-id="${item.id}">
      <td data-label="Product">
        <div style="display:flex;align-items:center;gap:12px">
          <img class="cart-thumb" src="${item.img}" alt="${item.name}" onerror="this.src='https://placehold.co/80x80/f5f5f5/999?text=IMG'">
          <span class="cart-item-title">${item.name}</span>
        </div>
      </td>
      <td data-label="Price">Rs. ${item.price.toLocaleString()}.00</td>
      <td data-label="Qty">
        <div class="cart-qty-ctrl">
          <button class="cart-qty-btn cq-minus">−</button>
          <input class="cart-qty-input" type="number" value="${item.qty}" min="1" readonly>
          <button class="cart-qty-btn cq-plus">+</button>
        </div>
      </td>
      <td data-label="Subtotal" class="cart-total">Rs. ${(item.price * item.qty).toLocaleString()}.00</td>
      <td data-label="Remove">
        <button class="cart-remove cq-remove" title="Remove"><i class="fas fa-trash"></i></button>
      </td>
    </tr>
  `).join('');

  tbody.querySelectorAll('tr').forEach(row => {
    const id = row.dataset.id;
    row.querySelector('.cq-plus')?.addEventListener('click', () => { cart.updateQty(id, cart.items.find(i=>i.id===id).qty + 1); renderCart(); updateSummary(); });
    row.querySelector('.cq-minus')?.addEventListener('click', () => { cart.updateQty(id, cart.items.find(i=>i.id===id).qty - 1); renderCart(); updateSummary(); });
    row.querySelector('.cq-remove')?.addEventListener('click', () => { cart.remove(id); renderCart(); updateSummary(); showToast('Item removed from cart'); });
  });

  updateSummary();
}

function updateSummary() {
  const subtotal = cart.total();
  const shipping = subtotal > 15000 ? 0 : 450;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  const fmt = n => 'Rs. ' + n.toLocaleString() + '.00';
  const el = id => document.getElementById(id);

  if (el('sum-subtotal')) el('sum-subtotal').textContent = fmt(subtotal);
  if (el('sum-shipping')) el('sum-shipping').textContent = shipping === 0 ? 'Free' : fmt(shipping);
  if (el('sum-tax')) el('sum-tax').textContent = fmt(tax);
  if (el('sum-total')) el('sum-total').textContent = fmt(total);
}

// ── Checkout Form Validation ───────────────────────────────
function initCheckoutValidation() {
  const form = document.getElementById('checkout-form');
  if (!form) return;

  const fields = form.querySelectorAll('[data-required]');

  fields.forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => validateField(field));
  });

  form.querySelector('#place-order-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    let valid = true;
    fields.forEach(f => { if (!validateField(f)) valid = false; });
    if (valid) {
      showToast('🎉 Order placed successfully!');
      cart.items = [];
      cart.save();
      updateCartBadge();
      setTimeout(() => { window.location.href = 'index.html'; }, 2000);
    }
  });

  function validateField(field) {
    const val = field.value.trim();
    const type = field.dataset.required;
    let ok = val.length > 0;
    if (type === 'email') ok = /^[^@]+@[^@]+\.[^@]+$/.test(val);
    if (type === 'phone') ok = /^[0-9]{9,12}$/.test(val.replace(/\s/g,''));
    field.classList.toggle('valid', ok);
    field.classList.toggle('invalid', !ok);
    const hint = field.nextElementSibling;
    if (hint?.classList.contains('form-hint')) {
      hint.classList.toggle('error', !ok);
      hint.textContent = ok ? '' : (field.dataset.msg || 'This field is required');
    }
    return ok;
  }

  // Payment option toggle
  form.querySelectorAll('.payment-option-header').forEach(h => {
    h.addEventListener('click', () => {
      form.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
      h.closest('.payment-option').classList.add('selected');
      h.querySelector('input[type=radio]').checked = true;
    });
  });
}

// ── Price Slider ───────────────────────────────────────────
function initPriceSlider() {
  const slider = document.getElementById('price-slider');
  const label  = document.getElementById('price-label');
  if (!slider || !label) return;
  slider.addEventListener('input', () => {
    label.textContent = `Rs. 0 — Rs. ${parseInt(slider.value).toLocaleString()}`;
  });
}

// ── Init All ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  initStickyHeader();
  initHamburger();
  initHeroSlider();
  initFilterAccordions();
  initCountdownTimers();
  initTabs();
  initQtySelectors();
  initGallery();
  initPriceSlider();
  renderCart();
  initCheckoutValidation();

  // Add to cart buttons
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('[data-product]');
      if (!card) return;
      cart.add({
        id:    card.dataset.id || Date.now().toString(),
        name:  card.dataset.name || 'Product',
        price: parseInt(card.dataset.price, 10) || 0,
        img:   card.dataset.img  || ''
      });
    });
  });
});
