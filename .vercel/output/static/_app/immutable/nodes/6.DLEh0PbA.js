import '../chunks/DsnmJJEf.js';
import { i as ie } from '../chunks/G8b9mEX7.js';
import {
  L as oe,
  aS as ne,
  E as le,
  aT as de,
  aU as ve,
  i as ce,
  u as v,
  aV as ue,
  aW as fe,
  aX as xe,
  aY as Xt,
  aZ as pe,
  q as me,
  a_ as gt,
  ag as ge,
  p as _e,
  o as he,
  ay as be,
  az as ye,
  f as y,
  a as Ut,
  a4 as z,
  av as W,
  b,
  c as ke,
  s as l,
  d as a,
  g as t,
  K as rt,
  ad as Et,
  r as e,
  n as Pt,
  e as we,
  a5 as p,
  a2 as Yt,
} from '../chunks/C_Rywq46.js';
import { i as M } from '../chunks/ca1lpo0o.js';
import { e as st, u as Te, b as Mt } from '../chunks/CObA3bqZ.js';
import { s as $t } from '../chunks/DYglS9Qp.js';
import { E as Ce, s as Ee } from '../chunks/CMZl196w.js';
import { p as St } from '../chunks/E9IRJs2g.js';
import { T as Pe, a as Vt } from '../chunks/B-BkPp6T.js';
const $e = () => performance.now(),
  q = { tick: n => requestAnimationFrame(n), now: () => $e(), tasks: new Set() };
function Zt() {
  const n = q.now();
  (q.tasks.forEach(r => {
    r.c(n) || (q.tasks.delete(r), r.f());
  }),
    q.tasks.size !== 0 && q.tick(Zt));
}
function Se(n) {
  let r;
  return (
    q.tasks.size === 0 && q.tick(Zt),
    {
      promise: new Promise(u => {
        q.tasks.add((r = { c: n, f: u }));
      }),
      abort() {
        q.tasks.delete(r);
      },
    }
  );
}
function zt(n, r) {
  Xt(() => {
    n.dispatchEvent(new CustomEvent(r));
  });
}
function ze(n) {
  if (n === 'float') return 'cssFloat';
  if (n === 'offset') return 'cssOffset';
  if (n.startsWith('--')) return n;
  const r = n.split('-');
  return r.length === 1
    ? r[0]
    : r[0] +
        r
          .slice(1)
          .map(u => u[0].toUpperCase() + u.slice(1))
          .join('');
}
function Ht(n) {
  const r = {},
    u = n.split(';');
  for (const f of u) {
    const [i, _] = f.split(':');
    if (!i || _ === void 0) break;
    const w = ze(i.trim());
    r[w] = _.trim();
  }
  return r;
}
const Fe = n => n;
function it(n, r, u, f) {
  var i = (n & fe) !== 0,
    _ = (n & xe) !== 0,
    w = i && _,
    S = (n & ue) !== 0,
    O = w ? 'both' : i ? 'in' : 'out',
    P,
    T = r.inert,
    N = r.style.overflow,
    C,
    F;
  function I() {
    return Xt(() => (P ??= u()(r, f?.() ?? {}, { direction: O })));
  }
  var h = {
      is_global: S,
      in() {
        if (((r.inert = T), !i)) {
          (F?.abort(), F?.reset?.());
          return;
        }
        (_ || C?.abort(),
          zt(r, 'introstart'),
          (C = Bt(r, I(), F, 1, () => {
            (zt(r, 'introend'), C?.abort(), (C = P = void 0), (r.style.overflow = N));
          })));
      },
      out(K) {
        if (!_) {
          (K?.(), (P = void 0));
          return;
        }
        ((r.inert = !0),
          zt(r, 'outrostart'),
          (F = Bt(r, I(), C, 0, () => {
            (zt(r, 'outroend'), K?.());
          })));
      },
      stop: () => {
        (C?.abort(), F?.abort());
      },
    },
    A = oe;
  if (((A.transitions ??= []).push(h), i && ne)) {
    var L = S;
    if (!L) {
      for (var $ = A.parent; $ && ($.f & le) !== 0; ) for (; ($ = $.parent) && ($.f & de) === 0; );
      L = !$ || ($.f & ve) !== 0;
    }
    L &&
      ce(() => {
        v(() => h.in());
      });
  }
}
function Bt(n, r, u, f, i) {
  var _ = f === 1;
  if (pe(r)) {
    var w,
      S = !1;
    return (
      me(() => {
        if (!S) {
          var A = r({ direction: _ ? 'in' : 'out' });
          w = Bt(n, A, u, f, i);
        }
      }),
      {
        abort: () => {
          ((S = !0), w?.abort());
        },
        deactivate: () => w.deactivate(),
        reset: () => w.reset(),
        t: () => w.t(),
      }
    );
  }
  if ((u?.deactivate(), !r?.duration))
    return (i(), { abort: gt, deactivate: gt, reset: gt, t: () => f });
  const { delay: O = 0, css: P, tick: T, easing: N = Fe } = r;
  var C = [];
  if (_ && u === void 0 && (T && T(0, 1), P)) {
    var F = Ht(P(0, 1));
    C.push(F, F);
  }
  var I = () => 1 - f,
    h = n.animate(C, { duration: O, fill: 'forwards' });
  return (
    (h.onfinish = () => {
      h.cancel();
      var A = u?.t() ?? 1 - f;
      u?.abort();
      var L = f - A,
        $ = r.duration * Math.abs(L),
        K = [];
      if ($ > 0) {
        var _t = !1;
        if (P)
          for (var J = Math.ceil($ / 16.666666666666668), G = 0; G <= J; G += 1) {
            var ot = A + L * N(G / J),
              X = Ht(P(ot, 1 - ot));
            (K.push(X), (_t ||= X.overflow === 'hidden'));
          }
        (_t && (n.style.overflow = 'hidden'),
          (I = () => {
            var Z = h.currentTime;
            return A + L * N(Z / $);
          }),
          T &&
            Se(() => {
              if (h.playState !== 'running') return !1;
              var Z = I();
              return (T(Z, 1 - Z), !0);
            }));
      }
      ((h = n.animate(K, { duration: $, fill: 'forwards' })),
        (h.onfinish = () => {
          ((I = () => f), T?.(f, 1 - f), i());
        }));
    }),
    {
      abort: () => {
        h && (h.cancel(), (h.effect = null), (h.onfinish = gt));
      },
      deactivate: () => {
        i = gt;
      },
      reset: () => {
        f === 0 && T?.(1, 0);
      },
      t: () => I(),
    }
  );
}
function Ie(n, r) {
  var u = n.$$events?.[r.type],
    f = ge(u) ? u.slice() : u == null ? [] : [u];
  for (var i of f) i.call(this, r);
}
const Ae = n => n;
function Qt(n) {
  const r = n - 1;
  return r * r * r + 1;
}
function Jt(n) {
  const r = typeof n == 'string' && n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return r ? [parseFloat(r[1]), r[2] || 'px'] : [n, 'px'];
}
function Nt(n, { delay: r = 0, duration: u = 400, easing: f = Ae } = {}) {
  const i = +getComputedStyle(n).opacity;
  return { delay: r, duration: u, easing: f, css: _ => `opacity: ${_ * i}` };
}
function Oe(
  n,
  { delay: r = 0, duration: u = 400, easing: f = Qt, x: i = 0, y: _ = 0, opacity: w = 0 } = {}
) {
  const S = getComputedStyle(n),
    O = +S.opacity,
    P = S.transform === 'none' ? '' : S.transform,
    T = O * (1 - w),
    [N, C] = Jt(i),
    [F, I] = Jt(_);
  return {
    delay: r,
    duration: u,
    easing: f,
    css: (h, A) => `
			transform: ${P} translate(${(1 - h) * N}${C}, ${(1 - h) * F}${I});
			opacity: ${O - T * A}`,
  };
}
function Gt(
  n,
  { delay: r = 0, duration: u = 400, easing: f = Qt, start: i = 0, opacity: _ = 0 } = {}
) {
  const w = getComputedStyle(n),
    S = +w.opacity,
    O = w.transform === 'none' ? '' : w.transform,
    P = 1 - i,
    T = S * (1 - _);
  return {
    delay: r,
    duration: u,
    easing: f,
    css: (N, C) => `
			transform: ${O} scale(${1 - P * C});
			opacity: ${S - T * C}
		`,
  };
}
var De = y('<button> </button>'),
  Re = y(
    '<div class="text-center py-16"><div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-lxk-sage"></div> <p class="text-lxk-warm-gray mt-4">Loading amazing projects...</p></div>'
  ),
  Le = y(
    '<div class="absolute top-4 right-4 z-10"><span class="bg-gradient-to-r from-lxk-peach to-lxk-coral text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">⭐ Featured</span></div>'
  ),
  Me = y(
    '<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy"/>'
  ),
  Ne = y(
    '<div class="text-center text-white/90"><div class="text-4xl mb-2"> </div> <div class="text-sm font-medium opacity-80">Preview Coming Soon</div></div>'
  ),
  Be = y(
    '<div class="mb-4 text-sm"><span class="text-gray-500">Client:</span> <span class="text-lxk-warm-gray font-medium"> </span></div>'
  ),
  We = y('<span class="text-lxk-coral"> </span>'),
  qe = y(
    '<div class="mb-4"><div class="text-xs font-semibold text-lxk-sage mb-2">Key Results:</div> <div class="text-xs text-gray-600"> <!></div></div>'
  ),
  Ke = y(
    '<span class="px-2 py-1 rounded-full bg-lxk-mint/20 text-lxk-warm-gray text-xs font-medium"> </span>'
  ),
  Ue = y('<span class="px-2 py-1 rounded-full bg-gray-100 text-gray-500 text-xs"> </span>'),
  Ye = y(
    '<div class="group relative"><button class="relative min-h-[600px] h-full painterly-card group-hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden w-full text-left flex flex-col svelte-1uo84gz" type="button"><!> <div><!> <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><div class="text-white text-center"><div class="text-lg font-semibold mb-2">View Details</div> <div class="text-sm opacity-80">Click to explore</div></div></div></div> <div class="p-6 flex-1 flex flex-col"><div class="flex items-center gap-2 mb-3"><span class="text-xs font-medium text-lxk-coral bg-lxk-coral/10 px-2 py-1 rounded-full"> </span> <span class="text-xs text-gray-500"> </span></div> <h3 class="text-xl font-bold text-lxk-warm-gray mb-3 group-hover:text-lxk-sage transition-colors duration-300"> </h3> <p class="text-gray-600 mb-4 leading-relaxed flex-1"> </p> <!> <!> <div class="flex flex-wrap gap-2 mb-4"><!> <!></div> <div class="text-xs text-gray-500 mt-auto"> </div></div> <div class="absolute inset-0 border-2 border-transparent group-hover:border-lxk-sage/30 rounded-2xl transition-colors duration-300"></div></button></div>'
  ),
  Ve = y(
    '<div class="text-center py-16"><div class="text-6xl mb-4">🔍</div> <h3 class="text-xl font-semibold text-lxk-warm-gray mb-2">No projects found</h3> <p class="text-gray-600">Try adjusting your filters to see more projects.</p></div>'
  ),
  He = y('<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div> <!>', 1),
  Je = y(
    '<span class="px-3 py-1 bg-lxk-sage/10 text-lxk-sage rounded-full text-sm font-medium"> </span>'
  ),
  Ge = y(
    '<div class="flex items-start gap-3 p-4 bg-lxk-cream/50 rounded-lg"><div class="w-6 h-6 bg-lxk-sage rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div> <span class="text-gray-700"> </span></div>'
  ),
  Xe = y(
    '<div><h4 class="font-semibold text-lxk-warm-gray mb-4">Key Results & Impact</h4> <div class="grid md:grid-cols-2 gap-4"></div></div>'
  ),
  Ze = y(
    '<span class="px-3 py-1 bg-lxk-mint/20 text-lxk-warm-gray rounded-full text-sm font-medium"> </span>'
  ),
  Qe = y(
    `<div class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1"><div class="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto modal-content svelte-1uo84gz" role="document"><div><button class="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200" type="button" aria-label="Close project details"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button> <div class="mb-4"><span class="text-sm opacity-80"> </span></div> <h2 id="modal-title" class="text-3xl font-bold mb-4"> </h2> <p class="text-lg opacity-90 leading-relaxed"> </p></div> <div class="p-8 space-y-8"><div><h3 class="text-xl font-semibold text-lxk-warm-gray mb-4">Project Overview</h3> <p class="text-gray-600 leading-relaxed"> </p></div> <div class="grid md:grid-cols-2 gap-8"><div><h4 class="font-semibold text-lxk-warm-gray mb-3">Technologies Used</h4> <div class="flex flex-wrap gap-2"></div></div> <div><h4 class="font-semibold text-lxk-warm-gray mb-3">Project Details</h4> <div class="space-y-2 text-sm"><div><span class="text-gray-500">Industry:</span> <span class="text-lxk-warm-gray"> </span></div> <div><span class="text-gray-500">Duration:</span> <span class="text-lxk-warm-gray"> </span></div> <div><span class="text-gray-500">Year:</span> <span class="text-lxk-warm-gray"> </span></div></div></div></div> <!> <div><h4 class="font-semibold text-lxk-warm-gray mb-3">Project Tags</h4> <div class="flex flex-wrap gap-2"></div></div> <div class="text-center pt-4 border-t border-gray-100"><p class="text-gray-600 mb-4">Inspired by this project? Let's create something amazing together!</p> <button class="bg-gradient-to-r from-lxk-sage to-lxk-soft-teal text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">Start Your Project →</button></div></div></div></div>`
  ),
  je = y(
    '<section class="min-h-[80vh] flex items-center bg-gradient-to-br from-lxk-cream/30 via-white to-lxk-mint/20"><div class="container-custom"><div class="grid lg:grid-cols-2 gap-16 items-center"><div class="animate-on-scroll"><div class="bg-gradient-to-br from-lxk-sage/20 to-lxk-peach/20 rounded-3xl h-96 flex items-center justify-center"><div class="text-center"><div class="text-8xl mb-6">🎨</div> <h3 class="text-2xl font-semibold text-lxk-warm-gray">Our Creative Work</h3></div></div></div> <div class="animate-on-scroll"><h1 class="text-6xl lg:text-8xl font-bold text-lxk-warm-gray leading-[0.9] mb-8">Our <span class="text-lxk-peach">Portfolio</span></h1> <p class="text-2xl text-gray-700 mb-12 leading-relaxed font-light">Real work, real relationships, real results from our Singapore creative kakis.</p> <div class="flex items-center gap-4"><div class="text-4xl font-bold text-lxk-sage"> </div> <div class="text-lg text-gray-600">Projects completed with love</div></div></div></div></div></section> <section class="py-8 bg-white border-b border-gray-100"><div class="container-custom"><div class="flex flex-wrap gap-4 justify-center"><button>All Work</button> <!></div></div></section> <section class="section-padding"><div class="container-custom"><!></div></section> <!> <!> <!>',
    1
  );
function da(n, r) {
  _e(r, !1);
  const u = Et();
  let f = Et('all'),
    i = Et(null),
    _ = Et(!1),
    w = 'recent';
  function S(d, m) {
    let g = d === 'all' ? St : St.filter(k => k.tags.includes(d));
    switch (m) {
      case 'featured':
        g = g.sort((k, D) => (D.featured ? 1 : 0) - (k.featured ? 1 : 0));
        break;
      case 'alphabetical':
        g = g.sort((k, D) => k.title.localeCompare(D.title));
        break;
    }
    return g;
  }
  function O(d) {
    d !== t(f) &&
      (rt(_, !0),
      setTimeout(() => {
        (rt(f, d), rt(_, !1));
      }, 300));
  }
  function P(d) {
    (rt(i, d), (document.body.style.overflow = 'hidden'));
  }
  function T() {
    (rt(i, null), (document.body.style.overflow = 'auto'));
  }
  function N(d) {
    return d.includes('web app') || d.includes('saas')
      ? '⚡'
      : d.includes('ecommerce') || d.includes('marketplace')
        ? '🛍️'
        : d.includes('web design')
          ? '💻'
          : d.includes('motion graphics')
            ? '🎬'
            : d.includes('education')
              ? '📚'
              : d.includes('fintech')
                ? '💰'
                : d.includes('hospitality')
                  ? '🏨'
                  : d.includes('healthcare') || d.includes('wellness')
                    ? '🌱'
                    : '✨';
  }
  function C(d) {
    return (
      {
        Technology: 'from-blue-400 to-purple-500',
        Education: 'from-green-400 to-teal-500',
        Healthcare: 'from-pink-400 to-rose-500',
        'E-commerce': 'from-orange-400 to-red-500',
        Hospitality: 'from-yellow-400 to-orange-500',
        'Financial Services': 'from-indigo-400 to-blue-500',
        'Food & Beverage': 'from-red-400 to-pink-500',
      }[d] || 'from-lxk-sage to-lxk-soft-teal'
    );
  }
  (he(() => {
    Te(
      'Portfolio - Our Creative Work | Light & Kaki Studio',
      'Explore our portfolio of web design, development, and motion graphics projects. Real work, real friendships, real results in Singapore.'
    );
    const d = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
      m = new IntersectionObserver(function (k) {
        k.forEach(D => {
          D.isIntersecting && D.target.classList.add('animate-fadeInUp');
        });
      }, d);
    document.querySelectorAll('.animate-on-scroll').forEach(k => m.observe(k));
  }),
    be(
      () => t(f),
      () => {
        rt(u, S(t(f), w));
      }
    ),
    ye(),
    ie());
  var F = je(),
    I = Ut(F),
    h = a(I),
    A = a(h),
    L = l(a(A), 2),
    $ = l(a(L), 4),
    K = a($),
    _t = a(K);
  (e(K), Pt(2), e($), e(L), e(A), e(h), e(I));
  var J = l(I, 2),
    G = a(J),
    ot = a(G),
    X = a(ot),
    Z = l(X, 2);
  (st(
    Z,
    0,
    () => ['web design', 'graphic design', 'web app'],
    d => d,
    (d, m) => {
      var g = De(),
        k = a(g, !0);
      (e(g),
        z(() => {
          ($t(
            g,
            1,
            `px-6 py-3 rounded-full transition-all duration-300 font-medium text-lg capitalize
            ${t(f) === m ? 'bg-lxk-sage text-white shadow-lg' : 'border-2 border-lxk-sage/30 text-lxk-sage hover:bg-lxk-sage hover:text-white'}`
          ),
            p(k, m));
        }),
        W('click', g, () => O(m)),
        b(d, g));
    }
  ),
    e(ot),
    e(G),
    e(J));
  var Ft = l(J, 2),
    Wt = a(Ft),
    jt = a(Wt);
  {
    var te = d => {
        var m = Re();
        (it(3, m, () => Nt), b(d, m));
      },
      ee = d => {
        var m = He(),
          g = Ut(m);
        (st(
          g,
          7,
          () => t(u),
          R => R.id,
          (R, s, It) => {
            var B = Ye(),
              U = a(B),
              nt = a(U);
            {
              var At = o => {
                var c = Le();
                b(o, c);
              };
              M(nt, o => {
                (t(s), v(() => t(s).featured) && o(At));
              });
            }
            var Y = l(nt, 2),
              lt = a(Y);
            {
              var ht = o => {
                  var c = Me();
                  (z(() => {
                    (Mt(c, 'src', (t(s), v(() => t(s).image))),
                      Mt(c, 'alt', (t(s), v(() => t(s).title))));
                  }),
                    b(o, c));
                },
                Ot = o => {
                  var c = Ne(),
                    x = a(c),
                    E = a(x, !0);
                  (e(x),
                    Pt(2),
                    e(c),
                    z(xt => p(E, xt), [() => (t(s), v(() => N(t(s).tags)))]),
                    b(o, c));
                };
              M(lt, o => {
                (t(s), v(() => t(s).image) ? o(ht) : o(Ot, !1));
              });
            }
            (Pt(2), e(Y));
            var Q = l(Y, 2),
              V = a(Q),
              j = a(V),
              bt = a(j, !0);
            e(j);
            var dt = l(j, 2),
              vt = a(dt);
            (e(dt), e(V));
            var tt = l(V, 2),
              Dt = a(tt, !0);
            e(tt);
            var H = l(tt, 2),
              yt = a(H, !0);
            e(H);
            var kt = l(H, 2);
            {
              var wt = o => {
                var c = Be(),
                  x = l(a(c), 2),
                  E = a(x, !0);
                (e(x), e(c), z(() => p(E, (t(s), v(() => t(s).client)))), b(o, c));
              };
              M(kt, o => {
                (t(s), v(() => t(s).client) && o(wt));
              });
            }
            var ct = l(kt, 2);
            {
              var Rt = o => {
                var c = qe(),
                  x = l(a(c), 2),
                  E = a(x),
                  xt = l(E);
                {
                  var pt = at => {
                    var mt = We(),
                      se = a(mt);
                    (e(mt),
                      z(() => p(se, `+${(t(s), v(() => t(s).results.length - 1) ?? '')} more`)),
                      b(at, mt));
                  };
                  M(xt, at => {
                    (t(s), v(() => t(s).results.length > 1) && at(pt));
                  });
                }
                (e(x), e(c), z(() => p(E, `${(t(s), v(() => t(s).results[0]) ?? '')} `)), b(o, c));
              };
              M(ct, o => {
                (t(s), v(() => t(s).results && t(s).results.length > 0) && o(Rt));
              });
            }
            var et = l(ct, 2),
              Tt = a(et);
            st(
              Tt,
              1,
              () => (t(s), v(() => t(s).tags.slice(0, 3))),
              o => o,
              (o, c) => {
                var x = Ke(),
                  E = a(x, !0);
                (e(x), z(() => p(E, t(c))), b(o, x));
              }
            );
            var ut = l(Tt, 2);
            {
              var Ct = o => {
                var c = Ue(),
                  x = a(c);
                (e(c), z(() => p(x, `+${(t(s), v(() => t(s).tags.length - 3) ?? '')}`)), b(o, c));
              };
              M(ut, o => {
                (t(s), v(() => t(s).tags.length > 3) && o(Ct));
              });
            }
            e(et);
            var ft = l(et, 2),
              Lt = a(ft);
            (e(ft),
              e(Q),
              Pt(2),
              e(U),
              e(B),
              z(
                o => {
                  (Mt(U, 'aria-label', (t(s), v(() => `View details for ${t(s).title}`))),
                    $t(
                      Y,
                      1,
                      `relative h-48 bg-gradient-to-br ${o ?? ''} rounded-t-2xl flex items-center justify-center overflow-hidden`,
                      'svelte-1uo84gz'
                    ),
                    p(bt, (t(s), v(() => t(s).industry))),
                    p(vt, `• ${(t(s), v(() => t(s).year) ?? '')}`),
                    p(Dt, (t(s), v(() => t(s).title))),
                    p(yt, (t(s), v(() => t(s).summary))),
                    p(Lt, `Project Duration: ${(t(s), v(() => t(s).duration) ?? '')}`));
                },
                [() => (t(s), v(() => C(t(s).industry)))]
              ),
              W('click', U, () => P(t(s))),
              W('keydown', U, o => o.key === 'Enter' && P(t(s))),
              it(
                1,
                B,
                () => Oe,
                () => ({ y: 50, delay: t(It) * 100, duration: 600 })
              ),
              it(
                2,
                B,
                () => Gt,
                () => ({ duration: 300 })
              ),
              b(R, B));
          }
        ),
          e(g));
        var k = l(g, 2);
        {
          var D = R => {
            var s = Ve();
            (it(3, s, () => Nt), b(R, s));
          };
          M(k, R => {
            (t(u), v(() => t(u).length === 0) && R(D));
          });
        }
        b(d, m);
      };
    M(jt, d => {
      t(_) ? d(te) : d(ee, !1);
    });
  }
  (e(Wt), e(Ft));
  var qt = l(Ft, 2);
  {
    var ae = d => {
      var m = Qe(),
        g = a(m),
        k = a(g),
        D = a(k),
        R = l(D, 2),
        s = a(R),
        It = a(s);
      (e(s), e(R));
      var B = l(R, 2),
        U = a(B, !0);
      e(B);
      var nt = l(B, 2),
        At = a(nt, !0);
      (e(nt), e(k));
      var Y = l(k, 2),
        lt = a(Y),
        ht = l(a(lt), 2),
        Ot = a(ht, !0);
      (e(ht), e(lt));
      var Q = l(lt, 2),
        V = a(Q),
        j = l(a(V), 2);
      (st(
        j,
        5,
        () => (t(i), v(() => t(i).technologies)),
        o => o,
        (o, c) => {
          var x = Je(),
            E = a(x, !0);
          (e(x), z(() => p(E, t(c))), b(o, x));
        }
      ),
        e(j),
        e(V));
      var bt = l(V, 2),
        dt = l(a(bt), 2),
        vt = a(dt),
        tt = l(a(vt), 2),
        Dt = a(tt, !0);
      (e(tt), e(vt));
      var H = l(vt, 2),
        yt = l(a(H), 2),
        kt = a(yt, !0);
      (e(yt), e(H));
      var wt = l(H, 2),
        ct = l(a(wt), 2),
        Rt = a(ct, !0);
      (e(ct), e(wt), e(dt), e(bt), e(Q));
      var et = l(Q, 2);
      {
        var Tt = o => {
          var c = Xe(),
            x = l(a(c), 2);
          (st(
            x,
            5,
            () => (t(i), v(() => t(i).results)),
            E => E,
            (E, xt) => {
              var pt = Ge(),
                at = l(a(pt), 2),
                mt = a(at, !0);
              (e(at), e(pt), z(() => p(mt, t(xt))), b(E, pt));
            }
          ),
            e(x),
            e(c),
            b(o, c));
        };
        M(et, o => {
          (t(i), v(() => t(i).results) && o(Tt));
        });
      }
      var ut = l(et, 2),
        Ct = l(a(ut), 2);
      (st(
        Ct,
        5,
        () => (t(i), v(() => t(i).tags)),
        o => o,
        (o, c) => {
          var x = Ze(),
            E = a(x, !0);
          (e(x), z(() => p(E, t(c))), b(o, x));
        }
      ),
        e(Ct),
        e(ut));
      var ft = l(ut, 2),
        Lt = l(a(ft), 2);
      (e(ft),
        e(Y),
        e(g),
        e(m),
        z(
          o => {
            ($t(
              k,
              1,
              `relative p-8 bg-gradient-to-br ${o ?? ''} text-white rounded-t-2xl`,
              'svelte-1uo84gz'
            ),
              p(It, `${(t(i), v(() => t(i).client) ?? '')} • ${(t(i), v(() => t(i).year) ?? '')}`),
              p(U, (t(i), v(() => t(i).title))),
              p(At, (t(i), v(() => t(i).summary))),
              p(Ot, (t(i), v(() => t(i).description))),
              p(Dt, (t(i), v(() => t(i).industry))),
              p(kt, (t(i), v(() => t(i).duration))),
              p(Rt, (t(i), v(() => t(i).year))));
          },
          [() => (t(i), v(() => C(t(i).industry)))]
        ),
        W('click', D, T),
        W('click', Lt, () => {
          (T(), (window.location.hash = '#contact'));
        }),
        it(
          3,
          g,
          () => Gt,
          () => ({ duration: 300 })
        ),
        W(
          'click',
          g,
          Ee(function (o) {
            Ie.call(this, r, o);
          })
        ),
        it(
          3,
          m,
          () => Nt,
          () => ({ duration: 300 })
        ),
        W('click', m, T),
        W('keydown', m, o => o.key === 'Escape' && T()),
        b(d, m));
    };
    M(qt, d => {
      t(i) && d(ae);
    });
  }
  var Kt = l(qt, 2);
  {
    let d = we(() => (Yt(Vt), v(Vt)));
    Pe(Kt, {
      get testimonials() {
        return t(d);
      },
    });
  }
  var re = l(Kt, 2);
  (Ce(re, {
    service: 'portfolio',
    primaryTitle: 'Ready to Create Something Amazing?',
    primaryDescription:
      "Join our growing family of happy kakis and let's build something extraordinary together",
    primaryCTA: 'Start Your Journey →',
    secondaryTitle: 'Want to See More?',
    secondaryDescription: 'Download our complete portfolio showcasing detailed case studies',
    secondaryResource: 'Download Portfolio PDF',
    leadMagnetTitle: 'Complete Portfolio & Case Studies',
    leadMagnetBenefits: [
      'Detailed project breakdowns and methodologies',
      'Behind-the-scenes collaboration stories',
      'Technical specifications and results',
    ],
  }),
    z(() => {
      (p(_t, `${(Yt(St), v(() => St.length) ?? '')}+`),
        $t(
          X,
          1,
          `px-6 py-3 rounded-full transition-all duration-300 font-medium text-lg
          ${t(f) === 'all' ? 'bg-lxk-sage text-white shadow-lg' : 'border-2 border-lxk-sage/30 text-lxk-sage hover:bg-lxk-sage hover:text-white'}`
        ));
    }),
    W('click', X, () => O('all')),
    b(n, F),
    ke());
}
export { da as component };
