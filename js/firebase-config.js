/* ============================================================
   CameraLK — Firebase Configuration
   👉 Replace these values with YOUR Firebase project config
   Go to: console.firebase.google.com → Project Settings → SDK
   ALSO enable:
     - Authentication → Email/Password provider
     - Authentication → Google provider
     - Realtime Database
   ============================================================ */

const firebaseConfig = {
    apiKey: "AIzaSyBnTuNI3OVVXiOK-z54IQGZutFUWhF-xqQ",
    authDomain: "knzipperchatapp.firebaseapp.com",
    databaseURL: "https://knzipperchatapp-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "knzipperchatapp",
    storageBucket: "knzipperchatapp.firebasestorage.app",
    messagingSenderId: "454745446733",
    appId: "1:454745446733:web:8bd412523176f333f77f04",
    measurementId: "G-SYK45M0WKG"
  };

/* ── Runtime state ─────────────────────────────────────────── */
let _firebaseApp  = null;
let _firebaseDB   = null;
let _firebaseAuth = null;
let _firebaseReady = false;

/* ── Init ──────────────────────────────────────────────────── */
function initFirebase() {
  if (typeof firebase === 'undefined') {
    console.warn('[Firebase] SDK not loaded.');
    return false;
  }
  if (_firebaseApp) return true;            // already initialised

  // Guard: don't init with placeholder keys
  if (!FIREBASE_CONFIG.apiKey || FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY') {
    console.warn('[Firebase] Config not set — running in demo mode.');
    return false;
  }

  try {
    // If already initialised by a previous script load, reuse
    _firebaseApp  = firebase.apps.length ? firebase.app() : firebase.initializeApp(FIREBASE_CONFIG);
    _firebaseDB   = firebase.database();
    _firebaseAuth = firebase.auth();
    _firebaseReady = true;
    console.info('[Firebase] Initialised ✓');
    return true;
  } catch (e) {
    console.error('[Firebase] Init error:', e);
    return false;
  }
}

/* ── Realtime DB helpers ───────────────────────────────────── */
const DB = {
  get(path)         { return _firebaseDB.ref(path).once('value').then(s => s.val()); },
  set(path, data)   { return _firebaseDB.ref(path).set(data); },
  update(path, data){ return _firebaseDB.ref(path).update(data); },
  push(path, data)  { const r = _firebaseDB.ref(path).push(); return r.set(data).then(() => r.key); },
  remove(path)      { return _firebaseDB.ref(path).remove(); },
  listen(path, cb)  { _firebaseDB.ref(path).on('value', s => cb(s.val())); },
  off(path)         { _firebaseDB.ref(path).off(); }
};

/* ── Auth helpers ──────────────────────────────────────────── */
const Auth = {

  /* Sign-up with email + password */
  async register(email, password, displayName) {
    const cred = await _firebaseAuth.createUserWithEmailAndPassword(email, password);
    if (displayName) {
      await cred.user.updateProfile({ displayName });
    }
    // Save extra profile to DB
    await DB.set(`users/${cred.user.uid}/profile`, {
      uid: cred.user.uid,
      displayName: displayName || '',
      email,
      createdAt: Date.now()
    });
    return cred.user;
  },

  /* Sign-in with email + password */
  async login(email, password) {
    const cred = await _firebaseAuth.signInWithEmailAndPassword(email, password);
    return cred.user;
  },

  /* Sign-in / Sign-up with Google popup */
  async loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    provider.addScope('profile');
    const cred = await _firebaseAuth.signInWithPopup(provider);
    // Upsert profile in DB
    await DB.update(`users/${cred.user.uid}/profile`, {
      uid: cred.user.uid,
      displayName: cred.user.displayName || '',
      email: cred.user.email || '',
      photoURL: cred.user.photoURL || '',
      lastLogin: Date.now()
    });
    return cred.user;
  },

  /* Send password-reset email */
  async resetPassword(email) {
    await _firebaseAuth.sendPasswordResetEmail(email);
  },

  /* Sign out */
  async logout() {
    await _firebaseAuth.signOut();
  },

  /* Current user (sync) */
  currentUser() {
    return _firebaseAuth ? _firebaseAuth.currentUser : null;
  },

  /* Listen for auth state changes */
  onAuthStateChanged(cb) {
    if (_firebaseAuth) _firebaseAuth.onAuthStateChanged(cb);
    else cb(null);
  },

  /* Save/load extra profile data (phone, addresses, etc.) */
  async saveProfile(uid, data) {
    await DB.update(`users/${uid}/profile`, data);
  },
  async getProfile(uid) {
    return DB.get(`users/${uid}/profile`);
  },

  /* Orders */
  async saveOrder(uid, order) {
    const key = await DB.push(`users/${uid}/orders`, order);
    return key;
  },
  async getOrders(uid) {
    const data = await DB.get(`users/${uid}/orders`);
    return data ? Object.values(data) : [];
  },

  /* Wishlist */
  async saveWishlist(uid, items) {
    await DB.set(`users/${uid}/wishlist`, items);
  },
  async getWishlist(uid) {
    const data = await DB.get(`users/${uid}/wishlist`);
    return data ? Object.values(data) : [];
  }
};

/* ── Demo-mode fallback (localStorage) ────────────────────── */
const LocalAuth = {
  _key: 'clk_local_user',
  _usersKey: 'clk_local_users',

  _getUsers() { return JSON.parse(localStorage.getItem(this._usersKey) || '{}'); },
  _saveUsers(u) { localStorage.setItem(this._usersKey, JSON.stringify(u)); },

  register(email, password, displayName) {
    const users = this._getUsers();
    if (users[email]) throw new Error('Email already registered');
    const user = { uid: 'local_' + Date.now(), email, password, displayName: displayName || '', photoURL: '', createdAt: Date.now(), phone: '', bio: '', addresses: [] };
    users[email] = user;
    this._saveUsers(users);
    localStorage.setItem(this._key, JSON.stringify(user));
    return user;
  },

  login(email, password) {
    const users = this._getUsers();
    const user  = users[email];
    if (!user)             throw new Error('No account found with this email');
    if (user.password !== password) throw new Error('Incorrect password');
    user.lastLogin = Date.now();
    users[email] = user;
    this._saveUsers(users);
    localStorage.setItem(this._key, JSON.stringify(user));
    return user;
  },

  currentUser() { const s = localStorage.getItem(this._key); return s ? JSON.parse(s) : null; },

  logout() { localStorage.removeItem(this._key); },

  async saveProfile(uid, data) {
    const users = this._getUsers();
    const email = Object.keys(users).find(e => users[e].uid === uid);
    if (email) { Object.assign(users[email], data); this._saveUsers(users); localStorage.setItem(this._key, JSON.stringify(users[email])); }
  },

  async getProfile(uid) {
    const users = this._getUsers();
    return Object.values(users).find(u => u.uid === uid) || null;
  },

  async getOrders(uid) { return JSON.parse(localStorage.getItem('clk_orders_' + uid) || '[]'); },

  async saveOrder(uid, order) {
    const orders = JSON.parse(localStorage.getItem('clk_orders_' + uid) || '[]');
    order.id = 'CLK-' + Date.now();
    order.date = new Date().toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' });
    orders.unshift(order);
    localStorage.setItem('clk_orders_' + uid, JSON.stringify(orders));
    return order.id;
  },

  async getWishlist(uid) { return JSON.parse(localStorage.getItem('clk_wishlist') || '[]'); },
  async saveWishlist(uid, items) { localStorage.setItem('clk_wishlist', JSON.stringify(items)); }
};

/* ── Unified AuthService (Firebase or Local fallback) ──────── */
const AuthService = {
  _mode: 'local', // 'firebase' | 'local'

  init() {
    this._mode = _firebaseReady ? 'firebase' : 'local';
    console.info(`[AuthService] mode = ${this._mode}`);
  },

  isFirebase() { return this._mode === 'firebase'; },

  async register(email, password, displayName) {
    return this.isFirebase() ? Auth.register(email, password, displayName)
                             : LocalAuth.register(email, password, displayName);
  },

  async login(email, password) {
    return this.isFirebase() ? Auth.login(email, password)
                             : LocalAuth.login(email, password);
  },

  async loginWithGoogle() {
    if (!this.isFirebase()) throw new Error('Google sign-in requires Firebase. Please configure Firebase first.');
    return Auth.loginWithGoogle();
  },

  async resetPassword(email) {
    if (!this.isFirebase()) throw new Error('Password reset requires Firebase.');
    return Auth.resetPassword(email);
  },

  async logout() {
    if (this.isFirebase()) await Auth.logout();
    else LocalAuth.logout();
  },

  currentUser() {
    return this.isFirebase() ? Auth.currentUser() : LocalAuth.currentUser();
  },

  onAuthStateChanged(cb) {
    if (this.isFirebase()) Auth.onAuthStateChanged(cb);
    else { const u = LocalAuth.currentUser(); setTimeout(() => cb(u), 0); }
  },

  async saveProfile(uid, data) {
    return this.isFirebase() ? Auth.saveProfile(uid, data) : LocalAuth.saveProfile(uid, data);
  },

  async getProfile(uid) {
    return this.isFirebase() ? Auth.getProfile(uid) : LocalAuth.getProfile(uid);
  },

  async saveOrder(uid, order) {
    return this.isFirebase() ? Auth.saveOrder(uid, order) : LocalAuth.saveOrder(uid, order);
  },

  async getOrders(uid) {
    return this.isFirebase() ? Auth.getOrders(uid) : LocalAuth.getOrders(uid);
  },

  async getWishlist(uid) {
    return this.isFirebase() ? Auth.getWishlist(uid) : LocalAuth.getWishlist(uid);
  },

  async saveWishlist(uid, items) {
    return this.isFirebase() ? Auth.saveWishlist(uid, items) : LocalAuth.saveWishlist(uid, items);
  }
};
