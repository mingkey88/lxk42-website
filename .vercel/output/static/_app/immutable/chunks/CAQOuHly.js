import {
  G as T,
  I as b,
  P as D,
  g,
  J as m,
  K as B,
  L as M,
  M as N,
  N as Y,
  e as U,
  O as h,
  u as x,
  Q as y,
  R as G,
  T as $,
  V as q,
  W as w,
  S as z,
  X as C,
} from './C_Rywq46.js';
let S = !1;
function J(r) {
  var n = S;
  try {
    return ((S = !1), [r(), S]);
  } finally {
    S = n;
  }
}
function Q(r, n, t, d) {
  var f = !y || (t & G) !== 0,
    v = (t & h) !== 0,
    R = (t & q) !== 0,
    a = d,
    c = !0,
    I = () => (c && ((c = !1), (a = R ? x(d) : d)), a),
    u;
  if (v) {
    var E = z in r || C in r;
    u = T(r, n)?.set ?? (E && n in r ? e => (r[n] = e) : void 0);
  }
  var _,
    o = !1;
  (v ? ([_, o] = J(() => r[n])) : (_ = r[n]),
    _ === void 0 && d !== void 0 && ((_ = I()), u && (f && b(), u(_))));
  var i;
  if (
    (f
      ? (i = () => {
          var e = r[n];
          return e === void 0 ? I() : ((c = !0), e);
        })
      : (i = () => {
          var e = r[n];
          return (e !== void 0 && (a = void 0), e === void 0 ? a : e);
        }),
    f && (t & D) === 0)
  )
    return i;
  if (u) {
    var A = r.$$legacy;
    return function (e, l) {
      return arguments.length > 0 ? ((!f || !l || A || o) && u(l ? i() : e), e) : i();
    };
  }
  var P = !1,
    s = ((t & $) !== 0 ? Y : U)(() => ((P = !1), i()));
  v && g(s);
  var L = M;
  return function (e, l) {
    if (arguments.length > 0) {
      const O = l ? g(s) : f && v ? m(e) : e;
      return (B(s, O), (P = !0), a !== void 0 && (a = O), e);
    }
    return (w && P) || (L.f & N) !== 0 ? s.v : g(s);
  };
}
export { Q as p };
