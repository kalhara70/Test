// ============================================================
//  CameraLK — Store / Site Data Manager
// ============================================================

const DEFAULT_SETTINGS = {
  siteName:    "CameraLK",
  siteTagline: "Sri Lanka's #1 Camera Store",
  logoText:    "Camera<span style='color:#000'>LK</span>",
  logoImage:   "",
  primaryColor: "#D91B23",
  phone:       "+94 11 234 5678",
  email:       "info@cameralk.lk",
  address:     "No. 55, D.R. Wijewardena Mw, Colombo 10",

  // Hero Slides — now supports image field
  heroSlides: [
    { badge:"🔥 Hot Deal",    title:"Sony Alpha\nA7 IV",      subtitle:"Full-Frame Mirrorless — 33MP stunning detail", price:"Rs. 489,000", bg:"linear-gradient(135deg,#0d0d0d,#1a0a00)", image:"", productId:"prod-001" },
    { badge:"🚁 New Arrival", title:"DJI Mini 4\nPro Drone",  subtitle:"4K/60fps · Obstacle Sensing · 34-min Flight",  price:"Rs. 198,500", bg:"linear-gradient(135deg,#0a0a1a,#0a1a2a)", image:"", productId:"prod-002" },
    { badge:"🎙️ Audio",      title:"Rode\nNT1-A Kit",        subtitle:"Studio-Quality Condenser Microphone",           price:"Rs. 64,900",  bg:"linear-gradient(135deg,#0a1a0a,#0d0a1a)", image:"", productId:"prod-003" }
  ],

  navLinks: ["Photography","Pro Video","Lighting","Audio","Drones","Gaming","Optics","Other"],

  // Branches — full details
  branches: [
    { name:"CameraLK Colombo",       address:"No. 55, D.R. Wijewardena Mw, Colombo 10", tel:"+94 11 234 5678", mapUrl:"#", image:"" },
    { name:"CameraLK Majestic City", address:"Majestic City, 10 Station Rd, Colombo 04", tel:"+94 11 234 5679", mapUrl:"#", image:"" },
    { name:"CameraLK Kandy",         address:"No. 12, Peradeniya Rd, Kandy",             tel:"+94 81 234 5678", mapUrl:"#", image:"" },
    { name:"CameraLK Jaffna",        address:"No. 8, Hospital Rd, Jaffna",               tel:"+94 21 234 5678", mapUrl:"#", image:"" },
    { name:"CameraLK Batticaloa",    address:"No. 22, Bar Rd, Batticaloa",               tel:"+94 65 234 5678", mapUrl:"#", image:"" }
  ],

  // Store Hours rows
  storeHours: [
    { day:"Monday – Friday", time:"9:00 AM – 7:00 PM" },
    { day:"Saturday",        time:"9:00 AM – 6:00 PM" },
    { day:"Sunday",          time:"10:00 AM – 4:00 PM" },
    { day:"Poya Days",       time:"Closed" }
  ],
  storeHoursNote: "* Colombo branch operates on select Poya days. Call ahead to confirm.",

  // Service Hours rows
  serviceHours: [
    { day:"Monday – Friday", time:"9:00 AM – 5:30 PM" },
    { day:"Saturday",        time:"9:00 AM – 1:00 PM" },
    { day:"Sunday & Poya",   time:"Closed" }
  ],

  // Quick Links
  quickLinks: [
    { label:"Photography", url:"category.html" },
    { label:"Pro Video",   url:"category.html" },
    { label:"Lighting",    url:"category.html" },
    { label:"Audio",       url:"category.html" },
    { label:"Drones",      url:"category.html" },
    { label:"Gaming",      url:"category.html" },
    { label:"Optics",      url:"category.html" },
    { label:"Other",       url:"category.html" },
    { label:"Our Story",   url:"#" },
    { label:"Events",      url:"#" },
    { label:"Articles",    url:"#" }
  ],

  // Policy Links
  policyLinks: [
    { label:"Delivery Policy",          url:"#" },
    { label:"Returns & Exchanges",      url:"#" },
    { label:"Pricing Policy",           url:"#" },
    { label:"User Agreement",           url:"#" },
    { label:"Privacy & Security",       url:"#" },
    { label:"Warranties",               url:"#" },
    { label:"Pre-order Policy",         url:"#" },
    { label:"Back Orders Policy",       url:"#" }
  ],

  // Footer bottom
  footerCopyright: "© 2025 CameraLK (Pvt) Ltd. All rights reserved. Sri Lanka's #1 Camera & Photography Store.",
  socialLinks: {
    facebook:  "#",
    twitter:   "#",
    youtube:   "#",
    instagram: "#"
  }
};

// ── Default Products ───────────────────────────────────────
const DEFAULT_PRODUCTS = {
  "prod-001": {
    id:"prod-001", name:"Sony Alpha A7 IV Full-Frame Mirrorless Camera Body",
    brand:"Sony", sku:"ILCE-7M4/B", category:"Photography",
    price:489000, oldPrice:545000, condition:"New",
    inStock:true, featured:true, hotDeal:true, newArrival:false,
    dealEndDays:13, dealProgress:35,
    rating:4.9, reviewCount:128,
    emi:"Rs. 27,167/month (18 months, 0% interest)",
    description:"The Sony Alpha A7 IV is the latest entry in the A7 series full-frame mirrorless ecosystem, offering a massive leap forward in imaging capability. Featuring a 33 megapixel back-illuminated Exmor R CMOS sensor.",
    specs:{"Sensor":"35mm Full-Frame BSI CMOS — 33MP","Processor":"BIONZ XR","ISO":"100–51,200","AF Points":"759 Phase-Detect","Video":"4K 60fps","Stabilisation":"5-Axis IBIS (5.5 stops)","Battery":"~580 shots","Weight":"659g","Warranty":"2 Years Sony SL"},
    highlights:["33 MP Full-Frame BSI CMOS","4K 60fps Video","10fps Continuous Shooting","759-point Phase Detect AF","5-Axis IBIS","Dual Card Slots"],
    images:["","","",""],
    reviews:[
      { name:"Ashan Perera",    rating:5, date:"May 2025",   text:"Absolutely phenomenal camera. Autofocus tracking is worth every rupee." },
      { name:"Nirosha Fernando",rating:5, date:"April 2025", text:"Wedding photographer here — battery life is solid and colours are perfect." }
    ]
  },
  "prod-002": {
    id:"prod-002", name:"DJI Mini 4 Pro Drone – Fly More Combo Plus",
    brand:"DJI", sku:"DJI-MINI4PRO-FMC", category:"Drones",
    price:198500, oldPrice:234000, condition:"New",
    inStock:true, featured:true, hotDeal:true, newArrival:true,
    dealEndDays:7, dealProgress:60,
    rating:4.8, reviewCount:74,
    emi:"Rs. 11,028/month (18 months, 0% interest)",
    description:"The DJI Mini 4 Pro is the most powerful mini drone DJI has ever made.",
    specs:{"Weight":"<249g","Sensor":"1/1.3-inch CMOS","Video":"4K/60fps HDR","Flight Time":"34 min","Range":"20km","Obstacle Sensing":"Omnidirectional","Warranty":"1 Year DJI SL"},
    highlights:["4K/60fps HDR Video","34-min Flight Time","Omnidirectional Obstacle Sensing","20km Transmission Range","Under 249g"],
    images:["","","",""],
    reviews:[{ name:"Kasun Silva",rating:5,date:"April 2025",text:"Incredible drone for the price." }]
  },
  "prod-003": {
    id:"prod-003", name:"Røde NT1-A Complete Vocal Recording Bundle",
    brand:"Rode", sku:"RODE-NT1A-BUNDLE", category:"Audio",
    price:64900, oldPrice:78000, condition:"New",
    inStock:true, featured:false, hotDeal:true, newArrival:false,
    dealEndDays:2, dealProgress:72,
    rating:4.9, reviewCount:200,
    emi:"Rs. 3,606/month",
    description:"The Røde NT1-A is one of the world's quietest studio microphones.",
    specs:{"Type":"Large-Diaphragm Condenser","Pattern":"Cardioid","Frequency":"20Hz–20kHz","Self-Noise":"5dBA","SPL":"137dB","Output":"XLR","Warranty":"10 Years Røde"},
    highlights:["5dBA Self-Noise","Large 1-inch Gold-Plated Capsule","SM6 Shock Mount Included","Pop Shield Included","10-Year Warranty"],
    images:["","","",""],
    reviews:[{ name:"Malith Fernando",rating:5,date:"March 2025",text:"Best mic I've ever owned." }]
  },
  "prod-004": {
    id:"prod-004", name:"Canon EOS R6 Mark II Mirrorless Camera Body",
    brand:"Canon", sku:"EOSR6MK2", category:"Photography",
    price:399000, oldPrice:null, condition:"New",
    inStock:true, featured:true, hotDeal:false, newArrival:true,
    dealEndDays:0, dealProgress:0,
    rating:4.9, reviewCount:56,
    emi:"Rs. 22,167/month",
    description:"The Canon EOS R6 Mark II is a versatile full-frame mirrorless camera.",
    specs:{"Sensor":"Full-Frame CMOS 24.2MP","AF":"Dual Pixel CMOS AF II","Burst":"40fps","Video":"4K 60fps","IBIS":"8 stops","Warranty":"2 Years Canon SL"},
    highlights:["40fps Electronic Burst","6K RAW Video Output","Dual Pixel AF II","8-Stop IBIS"],
    images:["","","",""],
    reviews:[]
  },
  "prod-005": {
    id:"prod-005", name:"Godox AD600 Pro Outdoor Strobe Flash 600Ws TTL",
    brand:"Godox", sku:"AD600PRO", category:"Lighting",
    price:129000, oldPrice:146500, condition:"New",
    inStock:true, featured:false, hotDeal:true, newArrival:false,
    dealEndDays:5, dealProgress:48,
    rating:4.7, reviewCount:45,
    emi:"Rs. 7,167/month",
    description:"The Godox AD600 Pro is a powerful 600Ws monolight strobe.",
    specs:{"Power":"600Ws","HSS":"Yes up to 1/8000s","TTL":"Yes","Wireless":"2.4GHz X System","Warranty":"1 Year Godox SL"},
    highlights:["600Ws Power Output","TTL Auto-Exposure","High-Speed Sync","BOWENS Mount"],
    images:["","","",""],
    reviews:[]
  },
  "prod-006": {
    id:"prod-006", name:"Fujifilm X100VI 40MP Compact Camera – Black",
    brand:"Fujifilm", sku:"X100VI-BLK", category:"Photography",
    price:229000, oldPrice:null, condition:"New",
    inStock:true, featured:true, hotDeal:false, newArrival:true,
    dealEndDays:0, dealProgress:0,
    rating:5.0, reviewCount:41,
    emi:"Rs. 12,722/month",
    description:"The Fujifilm X100VI is the sixth generation of Fujifilm's iconic X100 series.",
    specs:{"Sensor":"APS-C BSI CMOS 40.2MP","Lens":"23mm f/2","IBIS":"7 stops","Video":"6.2K 30fps","Warranty":"1 Year Fujifilm SL"},
    highlights:["40MP BSI CMOS","7-Stop IBIS","6.2K Video","20 Film Simulations","Classic Compact Design"],
    images:["","","",""],
    reviews:[]
  }
};

// ── Store Class ────────────────────────────────────────────
const Store = {
  settings: null,
  products: null,
  _fbReady: false,

  async init() {
    try {
      if (typeof firebase !== 'undefined' && initFirebase()) {
        this._fbReady = true;
        const [s, p] = await Promise.all([DB.get('settings'), DB.get('products')]);
        this.settings = s ? this._mergeSettings(s) : DEFAULT_SETTINGS;
        this.products = p || DEFAULT_PRODUCTS;
        if (!s) await DB.set('settings', DEFAULT_SETTINGS);
        if (!p) await DB.set('products', DEFAULT_PRODUCTS);
      } else { throw new Error('Firebase unavailable'); }
    } catch(e) {
      console.warn('Firebase not available, using localStorage:', e.message);
      const ls = localStorage.getItem('clk_settings');
      const lp = localStorage.getItem('clk_products');
      this.settings = ls ? this._mergeSettings(JSON.parse(ls)) : DEFAULT_SETTINGS;
      this.products = lp ? JSON.parse(lp) : DEFAULT_PRODUCTS;
    }
  },

  // Merge saved settings with defaults so new keys always exist
  _mergeSettings(saved) {
    const merged = { ...DEFAULT_SETTINGS, ...saved };
    // Merge nested objects/arrays only if missing
    if (!saved.storeHours)   merged.storeHours   = DEFAULT_SETTINGS.storeHours;
    if (!saved.serviceHours) merged.serviceHours = DEFAULT_SETTINGS.serviceHours;
    if (!saved.quickLinks)   merged.quickLinks   = DEFAULT_SETTINGS.quickLinks;
    if (!saved.policyLinks)  merged.policyLinks  = DEFAULT_SETTINGS.policyLinks;
    if (!saved.socialLinks)  merged.socialLinks  = DEFAULT_SETTINGS.socialLinks;
    if (!saved.brands)       merged.brands       = DEFAULT_SETTINGS.brands;
    return merged;
  },

  async saveSettings(data) {
    this.settings = { ...this.settings, ...data };
    if (this._fbReady) await DB.update('settings', data);
    localStorage.setItem('clk_settings', JSON.stringify(this.settings));
    this.applySettings();
  },

  async saveProduct(prod) {
    if (!prod.id) prod.id = 'prod-' + Date.now();
    this.products[prod.id] = prod;
    if (this._fbReady) await DB.set('products/' + prod.id, prod);
    localStorage.setItem('clk_products', JSON.stringify(this.products));
    return prod.id;
  },

  async deleteProduct(id) {
    delete this.products[id];
    if (this._fbReady) await DB.remove('products/' + id);
    localStorage.setItem('clk_products', JSON.stringify(this.products));
  },

  getProductsArray() { return Object.values(this.products || {}); },
  getProduct(id)     { return (this.products || {})[id] || null; },

  applySettings() {
    const s = this.settings;
    if (!s) return;
    if (s.siteName) document.title = document.title.replace(/CameraLK/g, s.siteName);
    document.querySelectorAll('.logo-text,.drawer-logo,.footer-bottom-logo').forEach(el => {
      if (s.logoImage) el.innerHTML = `<img src="${s.logoImage}" style="height:36px;object-fit:contain;vertical-align:middle" alt="${s.siteName}">`;
      else if (s.logoText) el.innerHTML = s.logoText;
    });
    document.querySelectorAll('.logo-sub').forEach(el => { if (s.siteTagline) el.textContent = s.siteTagline; });
    document.querySelectorAll('.header-top-left span').forEach(el => { if (s.phone) el.textContent = s.phone; });
    if (s.primaryColor) document.documentElement.style.setProperty('--red', s.primaryColor);
    if (s.navLinks && s.navLinks.length) {
      document.querySelectorAll('.nav-links').forEach(nav => {
        nav.innerHTML = s.navLinks.map(l => `<a href="category.html?cat=${encodeURIComponent(l)}">${l}</a>`).join('');
      });
    }
    // Re-render footer if mounted
    const fm = document.getElementById('footer-mount');
    if (fm && fm.innerHTML.trim() && !fm.innerHTML.includes('Loading')) renderFooter(s);
  }
};

// ── Dynamic Footer Renderer ────────────────────────────────
function renderFooter(s) {
  if (!s) return;
  const fm = document.getElementById('footer-mount');
  if (!fm) return;

  const branchesHtml = (s.branches || []).map(b => {
    const avatar = b.image
      ? `<div class="branch-avatar" style="background:none;border:none;width:46px;height:46px;border-radius:50%;overflow:hidden;flex-shrink:0"><img src="${b.image}" style="width:100%;height:100%;object-fit:cover"></div>`
      : `<div class="branch-avatar"><i class="fas fa-store"></i></div>`;
    return `<div class="branch-item">
      ${avatar}
      <div class="branch-info">
        <div class="branch-name">${b.name||''}</div>
        <div class="branch-address">${b.address||''}</div>
        <div class="branch-tel">${b.tel||''}</div>
        <a href="${b.mapUrl||'#'}" class="branch-explore">Explore →</a>
      </div>
    </div>`;
  }).join('');

  const storeHoursHtml = (s.storeHours || []).map(r =>
    `<div class="hours-row"><span class="hours-day">${r.day}</span><span class="hours-time">${r.time}</span></div>`).join('');

  const serviceHoursHtml = (s.serviceHours || []).map(r =>
    `<div class="hours-row"><span class="hours-day">${r.day}</span><span class="hours-time">${r.time}</span></div>`).join('');

  const quickLinksHtml = (s.quickLinks || []).map(l =>
    `<a href="${l.url||'#'}">${l.label||''}</a>`).join('');

  const policyLinksHtml = (s.policyLinks || []).map(l =>
    `<a href="${l.url||'#'}">${l.label||''}</a>`).join('');

  const sl = s.socialLinks || {};

  fm.innerHTML = `
  <footer id="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-heading">Our Branches</div>
          <div class="branch-list">${branchesHtml}</div>
        </div>
        <div>
          <div class="footer-heading">Store Hours</div>
          <div class="hours-section">
            <div class="hours-title">Store Hours</div>
            ${storeHoursHtml}
            <div class="hours-note">${s.storeHoursNote||''}</div>
          </div>
          <div class="hours-section">
            <div class="hours-title">Service Center Hours</div>
            ${serviceHoursHtml}
          </div>
        </div>
        <div class="footer-links-col">
          <div class="footer-heading">Quick Links</div>
          <div class="quick-links-grid">${quickLinksHtml}</div>
          <div class="policy-title">Policy & Legal</div>
          <div class="policy-links-grid">${policyLinksHtml}</div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-logo">${s.logoImage ? `<img src="${s.logoImage}" style="height:32px;object-fit:contain" alt="${s.siteName}">` : (s.logoText || s.siteName || 'CameraLK')}</div>
        <div class="footer-bottom-text">${s.footerCopyright||''}</div>
        <div class="footer-social">
          ${sl.facebook  ? `<a href="${sl.facebook}"  aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>` : ''}
          ${sl.twitter   ? `<a href="${sl.twitter}"   aria-label="Twitter"><i class="fab fa-twitter"></i></a>` : ''}
          ${sl.youtube   ? `<a href="${sl.youtube}"   aria-label="YouTube"><i class="fab fa-youtube"></i></a>` : ''}
          ${sl.instagram ? `<a href="${sl.instagram}" aria-label="Instagram"><i class="fab fa-instagram"></i></a>` : ''}
        </div>
      </div>
    </div>
  </footer>`;
}

// ── Product Card Renderer ──────────────────────────────────
function renderProductCard(prod) {
  const imgs = (prod.images||[]).filter(i=>i);
  const img = imgs[0] || `https://placehold.co/300x300/f5f5f5/333?text=${encodeURIComponent(prod.brand||'?')}`;
  const old = prod.oldPrice ? `<span class="card-price-old">Rs. ${prod.oldPrice.toLocaleString()}.00</span><span class="card-save">Save Rs. ${(prod.oldPrice-prod.price).toLocaleString()}</span>` : '';
  const badge = prod.hotDeal ? `<span class="card-badge badge badge-red">DEAL</span>` :
                prod.newArrival ? `<span style="position:absolute;top:10px;right:10px;background:#27AE60;color:#fff;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px">New</span>` : '';
  return `
    <article class="product-card" data-product
      data-id="${prod.id}" data-name="${prod.name}" data-price="${prod.price}" data-img="${img}"
      style="cursor:pointer" onclick="window.location.href='product.html?id=${prod.id}'">
      <div class="card-img">
        ${badge}
        <img src="${img}" alt="${prod.name}" loading="lazy" onerror="this.src='https://placehold.co/300x300/f5f5f5/999?text=No+Image'">
      </div>
      <div class="card-body">
        <div class="card-title">${prod.name}</div>
        <div class="card-price-current">Rs. ${prod.price.toLocaleString()}.00</div>
        <div class="card-price-row">${old}</div>
        <div class="stars">${'★'.repeat(Math.round(prod.rating||5))} <span class="star-count">(${prod.reviewCount||0})</span></div>
      </div>
      <div class="card-footer" style="display:flex;gap:6px;padding:0 14px 14px">
        <button class="card-add-btn add-to-cart" style="flex:1" onclick="event.stopPropagation();addToCartFromCard(this)">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
        <button onclick="event.stopPropagation();toggleWishlist(this,'${prod.id}','${prod.name.replace(/'/g,"\'")}')" 
          title="Add to Wishlist"
          style="width:38px;height:38px;border:1.5px solid #e0e0e0;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:15px;color:#ccc;background:#fff;transition:.15s;flex-shrink:0"
          onmouseover="this.style.borderColor='#e91e8c';this.style.color='#e91e8c'"
          onmouseout="if(!this.classList.contains('wishlisted')){this.style.borderColor='#e0e0e0';this.style.color='#ccc'}">
          <i class="fas fa-heart"></i>
        </button>
      </div>
    </article>`;
}

function addToCartFromCard(btn) {
  const card = btn.closest('[data-product]');
  if (!card) return;
  cart.add({ id:card.dataset.id, name:card.dataset.name, price:parseInt(card.dataset.price,10)||0, img:card.dataset.img||'' });
}

// ── Search Engine ──────────────────────────────────────────
const SearchEngine = {
  index: [],

  build() {
    this.index = Store.getProductsArray().map(p => ({
      id: p.id,
      name: p.name || '',
      brand: p.brand || '',
      category: p.category || '',
      price: p.price || 0,
      img: ((p.images||[]).filter(i=>i)[0]) || '',
      keywords: [p.name, p.brand, p.category, p.sku, p.description]
        .filter(Boolean).join(' ').toLowerCase()
    }));
  },

  search(q) {
    if (!q || q.length < 2) return [];
    const terms = q.toLowerCase().trim().split(/\s+/);
    return this.index.filter(p =>
      terms.every(t => p.keywords.includes(t) || p.keywords.startsWith(t) ||
        p.keywords.split(' ').some(w => w.startsWith(t)))
    ).slice(0, 8);
  }
};

// ── Ensure DEFAULT_SETTINGS has brands (patch) ────────────
if (!DEFAULT_SETTINGS.brands) {
  DEFAULT_SETTINGS.brands = [
    { name:"Sony",       image:"" },
    { name:"DJI",        image:"" },
    { name:"GoPro",      image:"" },
    { name:"Godox",      image:"" },
    { name:"Rode",       image:"" },
    { name:"SanDisk",    image:"" },
    { name:"Canon",      image:"" },
    { name:"Nikon",      image:"" },
    { name:"Fujifilm",   image:"" },
    { name:"Manfrotto",  image:"" },
    { name:"Tamron",     image:"" },
    { name:"Sigma",      image:"" },
    { name:"Zhiyun",     image:"" },
    { name:"Lexar",      image:"" }
  ];
}

// ── Wishlist Toggle (used on product cards sitewide) ───────
function toggleWishlist(btn, id, name) {
  let wl = JSON.parse(localStorage.getItem('clk_wishlist') || '[]');
  const exists = wl.find(p => p.id === id);

  if (exists) {
    wl = wl.filter(p => p.id !== id);
    btn.style.color = '#ccc';
    btn.style.borderColor = '#e0e0e0';
    btn.classList.remove('wishlisted');
    if (typeof showToast === 'function') showToast('Removed from wishlist');
  } else {
    const prod = Store.getProduct(id);
    const img  = prod ? ((prod.images||[]).filter(i=>i)[0]||'') : '';
    const price= prod ? prod.price : 0;
    wl.push({ id, name, img, price });
    btn.style.color = '#e91e8c';
    btn.style.borderColor = '#e91e8c';
    btn.classList.add('wishlisted');
    if (typeof showToast === 'function') showToast('❤️ Added to wishlist!');
  }

  localStorage.setItem('clk_wishlist', JSON.stringify(wl));
  // Update wishlist count badge if exists
  document.querySelectorAll('.wishlist-count').forEach(el => el.textContent = wl.length);
}

// Highlight already-wishlisted buttons on page load
function initWishlistButtons() {
  const wl = JSON.parse(localStorage.getItem('clk_wishlist') || '[]');
  const ids = wl.map(p => p.id);
  // Done via data attributes — we re-check after card renders
}
