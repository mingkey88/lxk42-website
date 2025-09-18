var Ze = Array.isArray,
  cn = Array.prototype.indexOf,
  _n = Array.from,
  $e = Object.defineProperty,
  Ee = Object.getOwnPropertyDescriptor,
  vn = Object.getOwnPropertyDescriptors,
  dn = Object.prototype,
  hn = Array.prototype,
  Tt = Object.getPrototypeOf,
  ot = Object.isExtensible;
function kr(e) {
  return typeof e == 'function';
}
const Cr = () => {};
function Ir(e) {
  return e();
}
function xt(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function pn() {
  var e,
    t,
    n = new Promise((r, a) => {
      ((e = r), (t = a));
    });
  return { promise: n, resolve: e, reject: t };
}
function Pr(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e) if ((n.push(r), n.length === t)) break;
  return n;
}
const O = 2,
  ze = 4,
  Me = 8,
  de = 16,
  U = 32,
  se = 64,
  At = 128,
  k = 256,
  Ce = 512,
  E = 1024,
  P = 2048,
  Y = 4096,
  K = 8192,
  he = 16384,
  Je = 32768,
  St = 65536,
  ct = 1 << 17,
  Ot = 1 << 18,
  Ae = 1 << 19,
  Nt = 1 << 20,
  Be = 1 << 21,
  Qe = 1 << 22,
  J = 1 << 23,
  Q = Symbol('$state'),
  Dr = Symbol('legacy props'),
  Mr = Symbol(''),
  et = new (class extends Error {
    name = 'StaleReactionError';
    message = 'The reaction that called `getAbortSignal()` was re-run or destroyed';
  })(),
  tt = 3,
  Te = 8;
function yn() {
  throw new Error('https://svelte.dev/e/await_outside_boundary');
}
function pe(e) {
  throw new Error('https://svelte.dev/e/lifecycle_outside_component');
}
function wn() {
  throw new Error('https://svelte.dev/e/async_derived_orphan');
}
function gn(e) {
  throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function mn() {
  throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function En(e) {
  throw new Error('https://svelte.dev/e/effect_orphan');
}
function bn() {
  throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function Tn() {
  throw new Error('https://svelte.dev/e/get_abort_signal_outside_reaction');
}
function xn() {
  throw new Error('https://svelte.dev/e/hydration_failed');
}
function Rt(e) {
  throw new Error('https://svelte.dev/e/lifecycle_legacy_only');
}
function Fr(e) {
  throw new Error('https://svelte.dev/e/props_invalid_value');
}
function An() {
  throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function Sn() {
  throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function On() {
  throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
const jr = 1,
  qr = 2,
  Ur = 4,
  Yr = 8,
  Hr = 16,
  $r = 1,
  Br = 2,
  Vr = 4,
  Wr = 8,
  Gr = 16,
  Kr = 1,
  Xr = 2,
  Zr = 4,
  kt = 1,
  Nn = 2,
  nt = '[',
  Rn = '[!',
  Ct = ']',
  oe = {},
  b = Symbol(),
  zr = 'http://www.w3.org/1999/xhtml';
function Le(e) {
  console.warn('https://svelte.dev/e/hydration_mismatch');
}
function Jr() {
  console.warn('https://svelte.dev/e/select_multiple_invalid_value');
}
let g = !1;
function ue(e) {
  g = e;
}
let w;
function M(e) {
  if (e === null) throw (Le(), oe);
  return (w = e);
}
function rt() {
  return M(L(w));
}
function Qr(e) {
  if (g) {
    if (L(w) !== null) throw (Le(), oe);
    w = e;
  }
}
function ea(e = 1) {
  if (g) {
    for (var t = e, n = w; t--; ) n = L(n);
    w = n;
  }
}
function ta() {
  for (var e = 0, t = w; ; ) {
    if (t.nodeType === Te) {
      var n = t.data;
      if (n === Ct) {
        if (e === 0) return t;
        e -= 1;
      } else (n === nt || n === Rn) && (e += 1);
    }
    var r = L(t);
    (t.remove(), (t = r));
  }
}
function na(e) {
  if (!e || e.nodeType !== Te) throw (Le(), oe);
  return e.data;
}
function It(e) {
  return e === this.v;
}
function kn(e, t) {
  return e != e
    ? t == t
    : e !== t || (e !== null && typeof e == 'object') || typeof e == 'function';
}
function Pt(e) {
  return !kn(e, this.v);
}
let Se = !1;
function ra() {
  Se = !0;
}
let p = null;
function Ie(e) {
  p = e;
}
function Cn(e) {
  return Fe().get(e);
}
function In(e, t) {
  return (Fe().set(e, t), t);
}
function Pn(e) {
  return Fe().has(e);
}
function Dn() {
  return Fe();
}
function Mn(e, t = !1, n) {
  p = { p, c: null, e: null, s: e, x: null, l: Se && !t ? { s: null, u: null, $: [] } : null };
}
function Ln(e) {
  var t = p,
    n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) Kt(r);
  }
  return (e !== void 0 && (t.x = e), (p = t.p), e ?? {});
}
function Oe() {
  return !Se || (p !== null && p.l === null);
}
function Fe(e) {
  return (p === null && pe(), (p.c ??= new Map(Fn(p) || void 0)));
}
function Fn(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null) return n;
    t = t.p;
  }
  return null;
}
const jn = new WeakMap();
function qn(e) {
  var t = h;
  if (t === null) return ((d.f |= J), e);
  if ((t.f & Je) === 0) {
    if ((t.f & At) === 0) throw (!t.parent && e instanceof Error && Dt(e), e);
    t.b.error(e);
  } else at(e, t);
}
function at(e, t) {
  for (; t !== null; ) {
    if ((t.f & At) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw (e instanceof Error && Dt(e), e);
}
function Dt(e) {
  const t = jn.get(e);
  t && ($e(e, 'message', { value: t.message }), $e(e, 'stack', { value: t.stack }));
}
const Un = typeof requestIdleCallback > 'u' ? e => setTimeout(e, 1) : requestIdleCallback;
let V = [],
  _e = [];
function Mt() {
  var e = V;
  ((V = []), xt(e));
}
function Lt() {
  var e = _e;
  ((_e = []), xt(e));
}
function Yn() {
  return V.length > 0 || _e.length > 0;
}
function Ft(e) {
  if (V.length === 0 && !be) {
    var t = V;
    queueMicrotask(() => {
      t === V && Mt();
    });
  }
  V.push(e);
}
function aa(e) {
  (_e.length === 0 && Un(Lt), _e.push(e));
}
function Hn() {
  (V.length > 0 && Mt(), _e.length > 0 && Lt());
}
function $n() {
  const e = h.b;
  return (e === null && yn(), e);
}
function st(e) {
  var t = O | P,
    n = d !== null && (d.f & O) !== 0 ? d : null;
  return (
    h === null || (n !== null && (n.f & k) !== 0) ? (t |= k) : (h.f |= Ae),
    {
      ctx: p,
      deps: null,
      effects: null,
      equals: It,
      f: t,
      fn: e,
      reactions: null,
      rv: 0,
      v: b,
      wv: 0,
      parent: n ?? h,
      ac: null,
    }
  );
}
function Bn(e, t) {
  let n = h;
  n === null && wn();
  var r = n.b,
    a = void 0,
    s = lt(b),
    i = null,
    f = !d;
  return (
    nr(() => {
      try {
        var l = e();
        i && Promise.resolve(l).catch(() => {});
      } catch (_) {
        l = Promise.reject(_);
      }
      var u = () => l;
      ((a = i?.then(u, u) ?? Promise.resolve(l)), (i = a));
      var o = m,
        c = r.is_pending();
      f && (r.update_pending_count(1), c || o.increment());
      const v = (_, y = void 0) => {
        ((i = null),
          c || o.activate(),
          y ? y !== et && ((s.f |= J), Pe(s, y)) : ((s.f & J) !== 0 && (s.f ^= J), Pe(s, _)),
          f && (r.update_pending_count(-1), c || o.decrement()),
          Ut());
      };
      if ((a.then(v, _ => v(null, _ || 'unknown')), o))
        return () => {
          queueMicrotask(() => o.neuter());
        };
    }),
    new Promise(l => {
      function u(o) {
        function c() {
          o === a ? l(s) : u(a);
        }
        o.then(c, c);
      }
      u(a);
    })
  );
}
function sa(e) {
  const t = st(e);
  return (tn(t), t);
}
function Vn(e) {
  const t = st(e);
  return ((t.equals = Pt), t);
}
function jt(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) ae(t[n]);
  }
}
function Wn(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & O) === 0) return t;
    t = t.parent;
  }
  return null;
}
function it(e) {
  var t,
    n = h;
  Z(Wn(e));
  try {
    (jt(e), (t = sn(e)));
  } finally {
    Z(n);
  }
  return t;
}
function qt(e) {
  var t = it(e);
  if ((e.equals(t) || ((e.v = t), (e.wv = rn())), !ye)) {
    var n = (W || (e.f & k) !== 0) && e.deps !== null ? Y : E;
    x(e, n);
  }
}
function Gn(e, t, n) {
  const r = Oe() ? st : Vn;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var a = m,
    s = h,
    i = Kn(),
    f = $n();
  Promise.all(t.map(l => Bn(l)))
    .then(l => {
      (a?.activate(), i());
      try {
        n([...e.map(r), ...l]);
      } catch (u) {
        (s.f & he) === 0 && at(u, s);
      }
      (a?.deactivate(), Ut());
    })
    .catch(l => {
      f.error(l);
    });
}
function Kn() {
  var e = h,
    t = d,
    n = p,
    r = m;
  return function () {
    (Z(e), F(t), Ie(n), r?.activate());
  };
}
function Ut() {
  (Z(null), F(null), Ie(null));
}
const Ue = new Set();
let m = null,
  Ye = null,
  _t = new Set(),
  ne = [],
  je = null,
  Ve = !1,
  be = !1;
class re {
  current = new Map();
  #u = new Map();
  #a = new Set();
  #e = 0;
  #f = null;
  #o = !1;
  #n = [];
  #s = [];
  #r = [];
  #t = [];
  #i = [];
  #c = [];
  #_ = [];
  skipped_effects = new Set();
  process(t) {
    ((ne = []), (Ye = null));
    for (const a of t) this.#d(a);
    if (this.#n.length === 0 && this.#e === 0) {
      this.#v();
      var n = this.#r,
        r = this.#t;
      ((this.#r = []),
        (this.#t = []),
        (this.#i = []),
        (Ye = m),
        (m = null),
        vt(n),
        vt(r),
        m === null ? (m = this) : Ue.delete(this),
        this.#f?.resolve());
    } else (this.#l(this.#r), this.#l(this.#t), this.#l(this.#i));
    for (const a of this.#n) te(a);
    for (const a of this.#s) te(a);
    ((this.#n = []), (this.#s = []));
  }
  #d(t) {
    t.f ^= E;
    for (var n = t.first; n !== null; ) {
      var r = n.f,
        a = (r & (U | se)) !== 0,
        s = a && (r & E) !== 0,
        i = s || (r & K) !== 0 || this.skipped_effects.has(n);
      if (!i && n.fn !== null) {
        if (a) n.f ^= E;
        else if ((r & ze) !== 0) this.#t.push(n);
        else if ((r & E) === 0)
          if ((r & Qe) !== 0) {
            var f = n.b?.is_pending() ? this.#s : this.#n;
            f.push(n);
          } else Ne(n) && ((n.f & de) !== 0 && this.#i.push(n), te(n));
        var l = n.first;
        if (l !== null) {
          n = l;
          continue;
        }
      }
      var u = n.parent;
      for (n = n.next; n === null && u !== null; ) ((n = u.next), (u = u.parent));
    }
  }
  #l(t) {
    for (const n of t) (((n.f & P) !== 0 ? this.#c : this.#_).push(n), x(n, E));
    t.length = 0;
  }
  capture(t, n) {
    (this.#u.has(t) || this.#u.set(t, n), this.current.set(t, t.v));
  }
  activate() {
    m = this;
  }
  deactivate() {
    ((m = null), (Ye = null));
    for (const t of _t) if ((_t.delete(t), t(), m !== null)) break;
  }
  neuter() {
    this.#o = !0;
  }
  flush() {
    (ne.length > 0 ? We() : this.#v(),
      m === this && (this.#e === 0 && Ue.delete(this), this.deactivate()));
  }
  #v() {
    if (!this.#o) for (const t of this.#a) t();
    this.#a.clear();
  }
  increment() {
    this.#e += 1;
  }
  decrement() {
    if (((this.#e -= 1), this.#e === 0)) {
      for (const t of this.#c) (x(t, P), ve(t));
      for (const t of this.#_) (x(t, Y), ve(t));
      ((this.#r = []), (this.#t = []), this.flush());
    } else this.deactivate();
  }
  add_callback(t) {
    this.#a.add(t);
  }
  settled() {
    return (this.#f ??= pn()).promise;
  }
  static ensure() {
    if (m === null) {
      const t = (m = new re());
      (Ue.add(m),
        be ||
          re.enqueue(() => {
            m === t && t.flush();
          }));
    }
    return m;
  }
  static enqueue(t) {
    Ft(t);
  }
}
function Yt(e) {
  var t = be;
  be = !0;
  try {
    var n;
    for (e && (We(), (n = e())); ; ) {
      if ((Hn(), ne.length === 0 && !Yn() && (m?.flush(), ne.length === 0)))
        return ((je = null), n);
      We();
    }
  } finally {
    be = t;
  }
}
function We() {
  var e = ce;
  Ve = !0;
  try {
    var t = 0;
    for (yt(!0); ne.length > 0; ) {
      var n = re.ensure();
      if (t++ > 1e3) {
        var r, a;
        Xn();
      }
      (n.process(ne), G.clear());
    }
  } finally {
    ((Ve = !1), yt(e), (je = null));
  }
}
function Xn() {
  try {
    bn();
  } catch (e) {
    at(e, je);
  }
}
let z = null;
function vt(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (
        (r.f & (he | K)) === 0 &&
        Ne(r) &&
        ((z = []),
        te(r),
        r.deps === null &&
          r.first === null &&
          r.nodes_start === null &&
          (r.teardown === null && r.ac === null ? Jt(r) : (r.fn = null)),
        z?.length > 0)
      ) {
        G.clear();
        for (const a of z) te(a);
        z = [];
      }
    }
    z = null;
  }
}
function ve(e) {
  for (var t = (je = e); t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Ve && t === h && (n & de) !== 0) return;
    if ((n & (se | U)) !== 0) {
      if ((n & E) === 0) return;
      t.f ^= E;
    }
  }
  ne.push(t);
}
const G = new Map();
function lt(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: It, rv: 0, wv: 0 };
  return n;
}
function $(e, t) {
  const n = lt(e);
  return (tn(n), n);
}
function ia(e, t = !1, n = !0) {
  const r = lt(e);
  return (t || (r.equals = Pt), Se && n && p !== null && p.l !== null && (p.l.s ??= []).push(r), r);
}
function la(e, t) {
  return (
    B(
      e,
      we(() => fe(e))
    ),
    t
  );
}
function B(e, t, n = !1) {
  d !== null &&
    (!D || (d.f & ct) !== 0) &&
    Oe() &&
    (d.f & (O | de | Qe | ct)) !== 0 &&
    !q?.includes(e) &&
    On();
  let r = n ? ge(t) : t;
  return Pe(e, r);
}
function Pe(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    (ye ? G.set(e, t) : G.set(e, n), (e.v = t));
    var r = re.ensure();
    (r.capture(e, n),
      (e.f & O) !== 0 && ((e.f & P) !== 0 && it(e), x(e, (e.f & k) === 0 ? E : Y)),
      (e.wv = rn()),
      Ht(e, P),
      Oe() &&
        h !== null &&
        (h.f & E) !== 0 &&
        (h.f & (U | se)) === 0 &&
        (R === null ? or([e]) : R.push(e)));
  }
  return t;
}
function He(e) {
  B(e, e.v + 1);
}
function Ht(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Oe(), a = n.length, s = 0; s < a; s++) {
      var i = n[s],
        f = i.f;
      if (!(!r && i === h)) {
        var l = (f & P) === 0;
        (l && x(i, t),
          (f & O) !== 0 ? Ht(i, Y) : l && ((f & de) !== 0 && z !== null && z.push(i), ve(i)));
      }
    }
}
function ge(e) {
  if (typeof e != 'object' || e === null || Q in e) return e;
  const t = Tt(e);
  if (t !== dn && t !== hn) return e;
  var n = new Map(),
    r = Ze(e),
    a = $(0),
    s = ee,
    i = f => {
      if (ee === s) return f();
      var l = d,
        u = ee;
      (F(null), gt(s));
      var o = f();
      return (F(l), gt(u), o);
    };
  return (
    r && n.set('length', $(e.length)),
    new Proxy(e, {
      defineProperty(f, l, u) {
        (!('value' in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) &&
          An();
        var o = n.get(l);
        return (
          o === void 0
            ? (o = i(() => {
                var c = $(u.value);
                return (n.set(l, c), c);
              }))
            : B(o, u.value, !0),
          !0
        );
      },
      deleteProperty(f, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in f) {
            const o = i(() => $(b));
            (n.set(l, o), He(a));
          }
        } else (B(u, b), He(a));
        return !0;
      },
      get(f, l, u) {
        if (l === Q) return e;
        var o = n.get(l),
          c = l in f;
        if (
          (o === void 0 &&
            (!c || Ee(f, l)?.writable) &&
            ((o = i(() => {
              var _ = ge(c ? f[l] : b),
                y = $(_);
              return y;
            })),
            n.set(l, o)),
          o !== void 0)
        ) {
          var v = fe(o);
          return v === b ? void 0 : v;
        }
        return Reflect.get(f, l, u);
      },
      getOwnPropertyDescriptor(f, l) {
        var u = Reflect.getOwnPropertyDescriptor(f, l);
        if (u && 'value' in u) {
          var o = n.get(l);
          o && (u.value = fe(o));
        } else if (u === void 0) {
          var c = n.get(l),
            v = c?.v;
          if (c !== void 0 && v !== b)
            return { enumerable: !0, configurable: !0, value: v, writable: !0 };
        }
        return u;
      },
      has(f, l) {
        if (l === Q) return !0;
        var u = n.get(l),
          o = (u !== void 0 && u.v !== b) || Reflect.has(f, l);
        if (u !== void 0 || (h !== null && (!o || Ee(f, l)?.writable))) {
          u === void 0 &&
            ((u = i(() => {
              var v = o ? ge(f[l]) : b,
                _ = $(v);
              return _;
            })),
            n.set(l, u));
          var c = fe(u);
          if (c === b) return !1;
        }
        return o;
      },
      set(f, l, u, o) {
        var c = n.get(l),
          v = l in f;
        if (r && l === 'length')
          for (var _ = u; _ < c.v; _ += 1) {
            var y = n.get(_ + '');
            y !== void 0 ? B(y, b) : _ in f && ((y = i(() => $(b))), n.set(_ + '', y));
          }
        if (c === void 0)
          (!v || Ee(f, l)?.writable) && ((c = i(() => $(void 0))), B(c, ge(u)), n.set(l, c));
        else {
          v = c.v !== b;
          var I = i(() => ge(u));
          B(c, I);
        }
        var Re = Reflect.getOwnPropertyDescriptor(f, l);
        if ((Re?.set && Re.set.call(o, u), !v)) {
          if (r && typeof l == 'string') {
            var ke = n.get('length'),
              H = Number(l);
            Number.isInteger(H) && H >= ke.v && B(ke, H + 1);
          }
          He(a);
        }
        return !0;
      },
      ownKeys(f) {
        fe(a);
        var l = Reflect.ownKeys(f).filter(c => {
          var v = n.get(c);
          return v === void 0 || v.v !== b;
        });
        for (var [u, o] of n) o.v !== b && !(u in f) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Sn();
      },
    })
  );
}
function dt(e) {
  try {
    if (e !== null && typeof e == 'object' && Q in e) return e[Q];
  } catch {}
  return e;
}
function ua(e, t) {
  return Object.is(dt(e), dt(t));
}
var ht, Zn, $t, Bt, Vt;
function Ge() {
  if (ht === void 0) {
    ((ht = window), (Zn = document), ($t = /Firefox/.test(navigator.userAgent)));
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype;
    ((Bt = Ee(t, 'firstChild').get),
      (Vt = Ee(t, 'nextSibling').get),
      ot(e) &&
        ((e.__click = void 0),
        (e.__className = void 0),
        (e.__attributes = null),
        (e.__style = void 0),
        (e.__e = void 0)),
      ot(n) && (n.__t = void 0));
  }
}
function X(e = '') {
  return document.createTextNode(e);
}
function S(e) {
  return Bt.call(e);
}
function L(e) {
  return Vt.call(e);
}
function fa(e, t) {
  if (!g) return S(e);
  var n = S(w);
  if (n === null) n = w.appendChild(X());
  else if (t && n.nodeType !== tt) {
    var r = X();
    return (n?.before(r), M(r), r);
  }
  return (M(n), n);
}
function oa(e, t) {
  if (!g) {
    var n = S(e);
    return n instanceof Comment && n.data === '' ? L(n) : n;
  }
  return w;
}
function ca(e, t = 1, n = !1) {
  let r = g ? w : e;
  for (var a; t--; ) ((a = r), (r = L(r)));
  if (!g) return r;
  if (n && r?.nodeType !== tt) {
    var s = X();
    return (r === null ? a?.after(s) : r.before(s), M(s), s);
  }
  return (M(r), r);
}
function zn(e) {
  e.textContent = '';
}
function _a() {
  return !1;
}
let pt = !1;
function Jn() {
  pt ||
    ((pt = !0),
    document.addEventListener(
      'reset',
      e => {
        Promise.resolve().then(() => {
          if (!e.defaultPrevented) for (const t of e.target.elements) t.__on_r?.();
        });
      },
      { capture: !0 }
    ));
}
function qe(e) {
  var t = d,
    n = h;
  (F(null), Z(null));
  try {
    return e();
  } finally {
    (F(t), Z(n));
  }
}
function va(e, t, n, r = n) {
  e.addEventListener(t, () => qe(n));
  const a = e.__on_r;
  (a
    ? (e.__on_r = () => {
        (a(), r(!0));
      })
    : (e.__on_r = () => r(!0)),
    Jn());
}
function Wt(e) {
  (h === null && d === null && En(),
    d !== null && (d.f & k) !== 0 && h === null && mn(),
    ye && gn());
}
function Qn(e, t) {
  var n = t.last;
  n === null ? (t.last = t.first = e) : ((n.next = e), (e.prev = n), (t.last = e));
}
function j(e, t, n, r = !0) {
  var a = h;
  a !== null && (a.f & K) !== 0 && (e |= K);
  var s = {
    ctx: p,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | P,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: a,
    b: a && a.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null,
  };
  if (n)
    try {
      (te(s), (s.f |= Je));
    } catch (l) {
      throw (ae(s), l);
    }
  else t !== null && ve(s);
  if (r) {
    var i = s;
    if (
      (n &&
        i.deps === null &&
        i.teardown === null &&
        i.nodes_start === null &&
        i.first === i.last &&
        (i.f & Ae) === 0 &&
        (i = i.first),
      i !== null &&
        ((i.parent = a), a !== null && Qn(i, a), d !== null && (d.f & O) !== 0 && (e & se) === 0))
    ) {
      var f = d;
      (f.effects ??= []).push(i);
    }
  }
  return s;
}
function Gt(e) {
  const t = j(Me, null, !1);
  return (x(t, E), (t.teardown = e), t);
}
function er(e) {
  Wt();
  var t = h.f,
    n = !d && (t & U) !== 0 && (t & Je) === 0;
  if (n) {
    var r = p;
    (r.e ??= []).push(e);
  } else return Kt(e);
}
function Kt(e) {
  return j(ze | Nt, e, !1);
}
function da(e) {
  return (Wt(), j(Me | Nt, e, !0));
}
function tr(e) {
  re.ensure();
  const t = j(se | Ae, e, !0);
  return (n = {}) =>
    new Promise(r => {
      n.outro
        ? lr(t, () => {
            (ae(t), r(void 0));
          })
        : (ae(t), r(void 0));
    });
}
function ha(e) {
  return j(ze, e, !1);
}
function pa(e, t) {
  var n = p,
    r = { effect: null, ran: !1, deps: e };
  (n.l.$.push(r),
    (r.effect = Xt(() => {
      (e(), !r.ran && ((r.ran = !0), we(t)));
    })));
}
function ya() {
  var e = p;
  Xt(() => {
    for (var t of e.l.$) {
      t.deps();
      var n = t.effect;
      ((n.f & E) !== 0 && x(n, Y), Ne(n) && te(n), (t.ran = !1));
    }
  });
}
function nr(e) {
  return j(Qe | Ae, e, !0);
}
function Xt(e, t = 0) {
  return j(Me | t, e, !0);
}
function wa(e, t = [], n = []) {
  Gn(t, n, r => {
    j(Me, () => e(...r.map(fe)), !0);
  });
}
function rr(e, t = 0) {
  var n = j(de | t, e, !0);
  return n;
}
function ar(e, t = !0) {
  return j(U | Ae, e, !0, t);
}
function Zt(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = ye,
      r = d;
    (wt(!0), F(null));
    try {
      t.call(null);
    } finally {
      (wt(n), F(r));
    }
  }
}
function zt(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const a = n.ac;
    a !== null &&
      qe(() => {
        a.abort(et);
      });
    var r = n.next;
    ((n.f & se) !== 0 ? (n.parent = null) : ae(n, t), (n = r));
  }
}
function sr(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    ((t.f & U) === 0 && ae(t), (t = n));
  }
}
function ae(e, t = !0) {
  var n = !1;
  ((t || (e.f & Ot) !== 0) &&
    e.nodes_start !== null &&
    e.nodes_end !== null &&
    (ir(e.nodes_start, e.nodes_end), (n = !0)),
    zt(e, t && !n),
    De(e, 0),
    x(e, he));
  var r = e.transitions;
  if (r !== null) for (const s of r) s.stop();
  Zt(e);
  var a = e.parent;
  (a !== null && a.first !== null && Jt(e),
    (e.next =
      e.prev =
      e.teardown =
      e.ctx =
      e.deps =
      e.fn =
      e.nodes_start =
      e.nodes_end =
      e.ac =
        null));
}
function ir(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : L(e);
    (e.remove(), (e = n));
  }
}
function Jt(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next;
  (n !== null && (n.next = r),
    r !== null && (r.prev = n),
    t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n)));
}
function lr(e, t) {
  var n = [];
  (Qt(e, n, !0),
    ur(n, () => {
      (ae(e), t && t());
    }));
}
function ur(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var a of e) a.out(r);
  } else t();
}
function Qt(e, t, n) {
  if ((e.f & K) === 0) {
    if (((e.f ^= K), e.transitions !== null))
      for (const i of e.transitions) (i.is_global || n) && t.push(i);
    for (var r = e.first; r !== null; ) {
      var a = r.next,
        s = (r.f & St) !== 0 || (r.f & U) !== 0;
      (Qt(r, t, s ? n : !1), (r = a));
    }
  }
}
function ga(e) {
  en(e, !0);
}
function en(e, t) {
  if ((e.f & K) !== 0) {
    ((e.f ^= K), (e.f & E) === 0 && (x(e, P), ve(e)));
    for (var n = e.first; n !== null; ) {
      var r = n.next,
        a = (n.f & St) !== 0 || (n.f & U) !== 0;
      (en(n, a ? t : !1), (n = r));
    }
    if (e.transitions !== null) for (const s of e.transitions) (s.is_global || t) && s.in();
  }
}
let le = null;
function fr(e) {
  var t = le;
  try {
    if (((le = new Set()), we(e), t !== null)) for (var n of le) t.add(n);
    return le;
  } finally {
    le = t;
  }
}
function ma(e) {
  for (var t of fr(e)) Pe(t, t.v);
}
let ce = !1;
function yt(e) {
  ce = e;
}
let ye = !1;
function wt(e) {
  ye = e;
}
let d = null,
  D = !1;
function F(e) {
  d = e;
}
let h = null;
function Z(e) {
  h = e;
}
let q = null;
function tn(e) {
  d !== null && (q === null ? (q = [e]) : q.push(e));
}
let T = null,
  A = 0,
  R = null;
function or(e) {
  R = e;
}
let nn = 1,
  xe = 0,
  ee = xe;
function gt(e) {
  ee = e;
}
let W = !1;
function rn() {
  return ++nn;
}
function Ne(e) {
  var t = e.f;
  if ((t & P) !== 0) return !0;
  if ((t & Y) !== 0) {
    var n = e.deps,
      r = (t & k) !== 0;
    if (n !== null) {
      var a,
        s,
        i = (t & Ce) !== 0,
        f = r && h !== null && !W,
        l = n.length;
      if ((i || f) && (h === null || (h.f & he) === 0)) {
        var u = e,
          o = u.parent;
        for (a = 0; a < l; a++)
          ((s = n[a]), (i || !s?.reactions?.includes(u)) && (s.reactions ??= []).push(u));
        (i && (u.f ^= Ce), f && o !== null && (o.f & k) === 0 && (u.f ^= k));
      }
      for (a = 0; a < l; a++) if (((s = n[a]), Ne(s) && qt(s), s.wv > e.wv)) return !0;
    }
    (!r || (h !== null && !W)) && x(e, E);
  }
  return !1;
}
function an(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !q?.includes(e))
    for (var a = 0; a < r.length; a++) {
      var s = r[a];
      (s.f & O) !== 0 ? an(s, t, !1) : t === s && (n ? x(s, P) : (s.f & E) !== 0 && x(s, Y), ve(s));
    }
}
function sn(e) {
  var t = T,
    n = A,
    r = R,
    a = d,
    s = W,
    i = q,
    f = p,
    l = D,
    u = ee,
    o = e.f;
  ((T = null),
    (A = 0),
    (R = null),
    (W = (o & k) !== 0 && (D || !ce || d === null)),
    (d = (o & (U | se)) === 0 ? e : null),
    (q = null),
    Ie(e.ctx),
    (D = !1),
    (ee = ++xe),
    e.ac !== null &&
      (qe(() => {
        e.ac.abort(et);
      }),
      (e.ac = null)));
  try {
    e.f |= Be;
    var c = e.fn,
      v = c(),
      _ = e.deps;
    if (T !== null) {
      var y;
      if ((De(e, A), _ !== null && A > 0))
        for (_.length = A + T.length, y = 0; y < T.length; y++) _[A + y] = T[y];
      else e.deps = _ = T;
      if (!W || ((o & O) !== 0 && e.reactions !== null))
        for (y = A; y < _.length; y++) (_[y].reactions ??= []).push(e);
    } else _ !== null && A < _.length && (De(e, A), (_.length = A));
    if (Oe() && R !== null && !D && _ !== null && (e.f & (O | Y | P)) === 0)
      for (y = 0; y < R.length; y++) an(R[y], e);
    return (
      a !== null && a !== e && (xe++, R !== null && (r === null ? (r = R) : r.push(...R))),
      (e.f & J) !== 0 && (e.f ^= J),
      v
    );
  } catch (I) {
    return qn(I);
  } finally {
    ((e.f ^= Be), (T = t), (A = n), (R = r), (d = a), (W = s), (q = i), Ie(f), (D = l), (ee = u));
  }
}
function cr(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = cn.call(n, e);
    if (r !== -1) {
      var a = n.length - 1;
      a === 0 ? (n = t.reactions = null) : ((n[r] = n[a]), n.pop());
    }
  }
  n === null &&
    (t.f & O) !== 0 &&
    (T === null || !T.includes(t)) &&
    (x(t, Y), (t.f & (k | Ce)) === 0 && (t.f ^= Ce), jt(t), De(t, 0));
}
function De(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) cr(e, n[r]);
}
function te(e) {
  var t = e.f;
  if ((t & he) === 0) {
    x(e, E);
    var n = h,
      r = ce;
    ((h = e), (ce = !0));
    try {
      ((t & de) !== 0 ? sr(e) : zt(e), Zt(e));
      var a = sn(e);
      ((e.teardown = typeof a == 'function' ? a : null), (e.wv = nn));
      var s;
    } finally {
      ((ce = r), (h = n));
    }
  }
}
async function _r() {
  (await Promise.resolve(), Yt());
}
function vr() {
  return re.ensure().settled();
}
function fe(e) {
  var t = e.f,
    n = (t & O) !== 0;
  if ((le?.add(e), d !== null && !D)) {
    var r = h !== null && (h.f & he) !== 0;
    if (!r && !q?.includes(e)) {
      var a = d.deps;
      if ((d.f & Be) !== 0)
        e.rv < xe &&
          ((e.rv = xe),
          T === null && a !== null && a[A] === e
            ? A++
            : T === null
              ? (T = [e])
              : (!W || !T.includes(e)) && T.push(e));
      else {
        (d.deps ??= []).push(e);
        var s = e.reactions;
        s === null ? (e.reactions = [d]) : s.includes(d) || s.push(d);
      }
    }
  } else if (n && e.deps === null && e.effects === null) {
    var i = e,
      f = i.parent;
    f !== null && (f.f & k) === 0 && (i.f ^= k);
  }
  if (ye) {
    if (G.has(e)) return G.get(e);
    if (n) {
      i = e;
      var l = i.v;
      return ((((i.f & E) === 0 && i.reactions !== null) || ln(i)) && (l = it(i)), G.set(i, l), l);
    }
  } else n && ((i = e), Ne(i) && qt(i));
  if ((e.f & J) !== 0) throw e.v;
  return e.v;
}
function ln(e) {
  if (e.v === b) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps) if (G.has(t) || ((t.f & O) !== 0 && ln(t))) return !0;
  return !1;
}
function we(e) {
  var t = D;
  try {
    return ((D = !0), e());
  } finally {
    D = t;
  }
}
const dr = -7169;
function x(e, t) {
  e.f = (e.f & dr) | t;
}
function Ea(e) {
  if (!(typeof e != 'object' || !e || e instanceof EventTarget)) {
    if (Q in e) Ke(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == 'object' && n && Q in n && Ke(n);
      }
  }
}
function Ke(e, t = new Set()) {
  if (typeof e == 'object' && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
    (t.add(e), e instanceof Date && e.getTime());
    for (let r in e)
      try {
        Ke(e[r], t);
      } catch {}
    const n = Tt(e);
    if (
      n !== Object.prototype &&
      n !== Array.prototype &&
      n !== Map.prototype &&
      n !== Set.prototype &&
      n !== Date.prototype
    ) {
      const r = vn(n);
      for (let a in r) {
        const s = r[a].get;
        if (s)
          try {
            s.call(e);
          } catch {}
      }
    }
  }
}
const hr = ['touchstart', 'touchmove'];
function pr(e) {
  return hr.includes(e);
}
const yr = new Set(),
  mt = new Set();
function wr(e, t, n, r = {}) {
  function a(s) {
    if ((r.capture || me.call(t, s), !s.cancelBubble)) return qe(() => n?.call(this, s));
  }
  return (
    e.startsWith('pointer') || e.startsWith('touch') || e === 'wheel'
      ? Ft(() => {
          t.addEventListener(e, a, r);
        })
      : t.addEventListener(e, a, r),
    a
  );
}
function ba(e, t, n, r, a) {
  var s = { capture: r, passive: a },
    i = wr(e, t, n, s);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) &&
    Gt(() => {
      t.removeEventListener(e, i, s);
    });
}
let Et = null;
function me(e) {
  var t = this,
    n = t.ownerDocument,
    r = e.type,
    a = e.composedPath?.() || [],
    s = a[0] || e.target;
  Et = e;
  var i = 0,
    f = Et === e && e.__root;
  if (f) {
    var l = a.indexOf(f);
    if (l !== -1 && (t === document || t === window)) {
      e.__root = t;
      return;
    }
    var u = a.indexOf(t);
    if (u === -1) return;
    l <= u && (i = l);
  }
  if (((s = a[i] || e.target), s !== t)) {
    $e(e, 'currentTarget', {
      configurable: !0,
      get() {
        return s || n;
      },
    });
    var o = d,
      c = h;
    (F(null), Z(null));
    try {
      for (var v, _ = []; s !== null; ) {
        var y = s.assignedSlot || s.parentNode || s.host || null;
        try {
          var I = s['__' + r];
          if (I != null && (!s.disabled || e.target === s))
            if (Ze(I)) {
              var [Re, ...ke] = I;
              Re.apply(s, [e, ...ke]);
            } else I.call(s, e);
        } catch (H) {
          v ? _.push(H) : (v = H);
        }
        if (e.cancelBubble || y === t || y === null) break;
        s = y;
      }
      if (v) {
        for (let H of _)
          queueMicrotask(() => {
            throw H;
          });
        throw v;
      }
    } finally {
      ((e.__root = t), delete e.currentTarget, F(o), Z(c));
    }
  }
}
let N;
function gr() {
  N = void 0;
}
function Ta(e) {
  let t = null,
    n = g;
  var r;
  if (g) {
    for (
      t = w, N === void 0 && (N = S(document.head));
      N !== null && (N.nodeType !== Te || N.data !== nt);

    )
      N = L(N);
    N === null ? ue(!1) : (N = M(L(N)));
  }
  g || (r = document.head.appendChild(X()));
  try {
    rr(() => e(r), Ot);
  } finally {
    n && (ue(!0), (N = w), M(t));
  }
}
function ut(e) {
  var t = document.createElement('template');
  return ((t.innerHTML = e.replaceAll('<!>', '<!---->')), t.content);
}
function C(e, t) {
  var n = h;
  n.nodes_start === null && ((n.nodes_start = e), (n.nodes_end = t));
}
function xa(e, t) {
  var n = (t & kt) !== 0,
    r = (t & Nn) !== 0,
    a,
    s = !e.startsWith('<!>');
  return () => {
    if (g) return (C(w, null), w);
    a === void 0 && ((a = ut(s ? e : '<!>' + e)), n || (a = S(a)));
    var i = r || $t ? document.importNode(a, !0) : a.cloneNode(!0);
    if (n) {
      var f = S(i),
        l = i.lastChild;
      C(f, l);
    } else C(i, i);
    return i;
  };
}
function mr(e, t, n = 'svg') {
  var r = !e.startsWith('<!>'),
    a = (t & kt) !== 0,
    s = `<${n}>${r ? e : '<!>' + e}</${n}>`,
    i;
  return () => {
    if (g) return (C(w, null), w);
    if (!i) {
      var f = ut(s),
        l = S(f);
      if (a) for (i = document.createDocumentFragment(); S(l); ) i.appendChild(S(l));
      else i = S(l);
    }
    var u = i.cloneNode(!0);
    if (a) {
      var o = S(u),
        c = u.lastChild;
      C(o, c);
    } else C(u, u);
    return u;
  };
}
function Aa(e, t) {
  return mr(e, t, 'svg');
}
function Sa(e = '') {
  if (!g) {
    var t = X(e + '');
    return (C(t, t), t);
  }
  var n = w;
  return (n.nodeType !== tt && (n.before((n = X())), M(n)), C(n, n), n);
}
function Oa() {
  if (g) return (C(w, null), w);
  var e = document.createDocumentFragment(),
    t = document.createComment(''),
    n = X();
  return (e.append(t, n), C(t, n), e);
}
function Na(e, t) {
  if (g) {
    ((h.nodes_end = w), rt());
    return;
  }
  e !== null && e.before(t);
}
let bt = !0;
function Ra(e, t) {
  var n = t == null ? '' : typeof t == 'object' ? t + '' : t;
  n !== (e.__t ??= e.nodeValue) && ((e.__t = n), (e.nodeValue = n + ''));
}
function un(e, t) {
  return fn(e, t);
}
function Er(e, t) {
  (Ge(), (t.intro = t.intro ?? !1));
  const n = t.target,
    r = g,
    a = w;
  try {
    for (var s = S(n); s && (s.nodeType !== Te || s.data !== nt); ) s = L(s);
    if (!s) throw oe;
    (ue(!0), M(s), rt());
    const i = fn(e, { ...t, anchor: s });
    if (w === null || w.nodeType !== Te || w.data !== Ct) throw (Le(), oe);
    return (ue(!1), i);
  } catch (i) {
    if (
      i instanceof Error &&
      i.message
        .split(
          `
`
        )
        .some(f => f.startsWith('https://svelte.dev/e/'))
    )
      throw i;
    return (
      i !== oe && console.warn('Failed to hydrate: ', i),
      t.recover === !1 && xn(),
      Ge(),
      zn(n),
      ue(!1),
      un(e, t)
    );
  } finally {
    (ue(r), M(a), gr());
  }
}
const ie = new Map();
function fn(e, { target: t, anchor: n, props: r = {}, events: a, context: s, intro: i = !0 }) {
  Ge();
  var f = new Set(),
    l = c => {
      for (var v = 0; v < c.length; v++) {
        var _ = c[v];
        if (!f.has(_)) {
          f.add(_);
          var y = pr(_);
          t.addEventListener(_, me, { passive: y });
          var I = ie.get(_);
          I === void 0
            ? (document.addEventListener(_, me, { passive: y }), ie.set(_, 1))
            : ie.set(_, I + 1);
        }
      }
    };
  (l(_n(yr)), mt.add(l));
  var u = void 0,
    o = tr(() => {
      var c = n ?? t.appendChild(X());
      return (
        ar(() => {
          if (s) {
            Mn({});
            var v = p;
            v.c = s;
          }
          (a && (r.$$events = a),
            g && C(c, null),
            (bt = i),
            (u = e(c, r) || {}),
            (bt = !0),
            g && (h.nodes_end = w),
            s && Ln());
        }),
        () => {
          for (var v of f) {
            t.removeEventListener(v, me);
            var _ = ie.get(v);
            --_ === 0 ? (document.removeEventListener(v, me), ie.delete(v)) : ie.set(v, _);
          }
          (mt.delete(l), c !== n && c.parentNode?.removeChild(c));
        }
      );
    });
  return (Xe.set(u, o), u);
}
let Xe = new WeakMap();
function br(e, t) {
  const n = Xe.get(e);
  return n ? (Xe.delete(e), n(t)) : Promise.resolve();
}
function Tr(e) {
  return (t, ...n) => {
    var r = e(...n),
      a;
    if (g) ((a = w), rt());
    else {
      var s = r.render().trim(),
        i = ut(s);
      ((a = S(i)), t.before(a));
    }
    const f = r.setup?.(a);
    (C(a, a), typeof f == 'function' && Gt(f));
  };
}
function xr() {
  return (d === null && Tn(), (d.ac ??= new AbortController()).signal);
}
function on(e) {
  (p === null && pe(),
    Se && p.l !== null
      ? ft(p).m.push(e)
      : er(() => {
          const t = we(e);
          if (typeof t == 'function') return t;
        }));
}
function Ar(e) {
  (p === null && pe(), on(() => () => we(e)));
}
function Sr(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Or() {
  const e = p;
  return (
    e === null && pe(),
    (t, n, r) => {
      const a = e.s.$$events?.[t];
      if (a) {
        const s = Ze(a) ? a.slice() : [a],
          i = Sr(t, n, r);
        for (const f of s) f.call(e.x, i);
        return !i.defaultPrevented;
      }
      return !0;
    }
  );
}
function Nr(e) {
  (p === null && pe(), p.l === null && Rt(), ft(p).b.push(e));
}
function Rr(e) {
  (p === null && pe(), p.l === null && Rt(), ft(p).a.push(e));
}
function ft(e) {
  var t = e.l;
  return (t.u ??= { a: [], b: [], m: [] });
}
const ka = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      afterUpdate: Rr,
      beforeUpdate: Nr,
      createEventDispatcher: Or,
      createRawSnippet: Tr,
      flushSync: Yt,
      getAbortSignal: xr,
      getAllContexts: Dn,
      getContext: Cn,
      hasContext: Pn,
      hydrate: Er,
      mount: un,
      onDestroy: Ar,
      onMount: on,
      setContext: In,
      settled: vr,
      tick: _r,
      unmount: br,
      untrack: we,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
export {
  Zn as $,
  m as A,
  _a as B,
  ga as C,
  lr as D,
  St as E,
  w as F,
  Ee as G,
  Rn as H,
  Fr as I,
  ge as J,
  B as K,
  h as L,
  he as M,
  st as N,
  Wr as O,
  Vr as P,
  Se as Q,
  Br as R,
  Q as S,
  $r as T,
  b as U,
  Gr as V,
  ye as W,
  Dr as X,
  p as Y,
  da as Z,
  er as _,
  oa as a,
  kn as a$,
  xt as a0,
  Ir as a1,
  Ea as a2,
  ra as a3,
  wa as a4,
  Ra as a5,
  Ur as a6,
  S as a7,
  Te as a8,
  Ct as a9,
  sa as aA,
  Pr as aB,
  va as aC,
  Jr as aD,
  ua as aE,
  Gt as aF,
  _r as aG,
  Ye as aH,
  Or as aI,
  Oa as aJ,
  ma as aK,
  Sa as aL,
  Er as aM,
  un as aN,
  Yt as aO,
  $e as aP,
  br as aQ,
  $ as aR,
  bt as aS,
  de as aT,
  Je as aU,
  Zr as aV,
  Kr as aW,
  Xr as aX,
  qe as aY,
  kr as aZ,
  Cr as a_,
  jr as aa,
  qr as ab,
  Pe as ac,
  ia as ad,
  lt as ae,
  _n as af,
  Ze as ag,
  Hr as ah,
  K as ai,
  ae as aj,
  Yr as ak,
  L as al,
  Qt as am,
  zn as an,
  ur as ao,
  zr as ap,
  Tt as aq,
  vn as ar,
  Mr as as,
  aa as at,
  Jn as au,
  ba as av,
  Aa as aw,
  la as ax,
  pa as ay,
  ya as az,
  Na as b,
  ka as b0,
  Ln as c,
  fa as d,
  Vn as e,
  xa as f,
  fe as g,
  Ta as h,
  ha as i,
  Xt as j,
  rr as k,
  g as l,
  rt as m,
  ea as n,
  on as o,
  Mn as p,
  Ft as q,
  Qr as r,
  ca as s,
  na as t,
  we as u,
  ta as v,
  M as w,
  ue as x,
  X as y,
  ar as z,
};
