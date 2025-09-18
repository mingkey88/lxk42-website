import './DsnmJJEf.js';
import { i as ko } from './G8b9mEX7.js';
import { p as So, o as Co, f as To, b as Eo, c as Mo } from './C_Rywq46.js';
import { g as ze } from './DKtf60Sy.js';
function Po(i, e) {
  for (var n = 0; n < e.length; n++) {
    var t = e[n];
    ((t.enumerable = t.enumerable || !1),
      (t.configurable = !0),
      'value' in t && (t.writable = !0),
      Object.defineProperty(i, t.key, t));
  }
}
function Do(i, e, n) {
  return (e && Po(i.prototype, e), i);
}
/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var ve,
  $r,
  Ke,
  Rt,
  Ot,
  ir,
  Jn,
  Ht,
  br,
  Zn,
  wt,
  at,
  Qn,
  eo = function () {
    return ve || (typeof window < 'u' && (ve = window.gsap) && ve.registerPlugin && ve);
  },
  to = 1,
  or = [],
  P = [],
  pt = [],
  yr = Date.now,
  pn = function (e, n) {
    return n;
  },
  Ao = function () {
    var e = br.core,
      n = e.bridge || {},
      t = e._scrollers,
      r = e._proxies;
    (t.push.apply(t, P),
      r.push.apply(r, pt),
      (P = t),
      (pt = r),
      (pn = function (l, a) {
        return n[l](a);
      }));
  },
  It = function (e, n) {
    return ~pt.indexOf(e) && pt[pt.indexOf(e) + 1][n];
  },
  wr = function (e) {
    return !!~Zn.indexOf(e);
  },
  Oe = function (e, n, t, r, o) {
    return e.addEventListener(n, t, { passive: r !== !1, capture: !!o });
  },
  Re = function (e, n, t, r) {
    return e.removeEventListener(n, t, !!r);
  },
  Ir = 'scrollLeft',
  Lr = 'scrollTop',
  gn = function () {
    return (wt && wt.isPressed) || P.cache++;
  },
  Zr = function (e, n) {
    var t = function r(o) {
      if (o || o === 0) {
        to && (Ke.history.scrollRestoration = 'manual');
        var l = wt && wt.isPressed;
        ((o = r.v = Math.round(o) || (wt && wt.iOS ? 1 : 0)),
          e(o),
          (r.cacheID = P.cache),
          l && pn('ss', o));
      } else (n || P.cache !== r.cacheID || pn('ref')) && ((r.cacheID = P.cache), (r.v = e()));
      return r.v + r.offset;
    };
    return ((t.offset = 0), e && t);
  },
  Fe = {
    s: Ir,
    p: 'left',
    p2: 'Left',
    os: 'right',
    os2: 'Right',
    d: 'width',
    d2: 'Width',
    a: 'x',
    sc: Zr(function (i) {
      return arguments.length
        ? Ke.scrollTo(i, le.sc())
        : Ke.pageXOffset || Rt[Ir] || Ot[Ir] || ir[Ir] || 0;
    }),
  },
  le = {
    s: Lr,
    p: 'top',
    p2: 'Top',
    os: 'bottom',
    os2: 'Bottom',
    d: 'height',
    d2: 'Height',
    a: 'y',
    op: Fe,
    sc: Zr(function (i) {
      return arguments.length
        ? Ke.scrollTo(Fe.sc(), i)
        : Ke.pageYOffset || Rt[Lr] || Ot[Lr] || ir[Lr] || 0;
    }),
  },
  He = function (e, n) {
    return (
      ((n && n._ctx && n._ctx.selector) || ve.utils.toArray)(e)[0] ||
      (typeof e == 'string' && ve.config().nullTargetWarn !== !1
        ? console.warn('Element not found:', e)
        : null)
    );
  },
  Ro = function (e, n) {
    for (var t = n.length; t--; ) if (n[t] === e || n[t].contains(e)) return !0;
    return !1;
  },
  Lt = function (e, n) {
    var t = n.s,
      r = n.sc;
    wr(e) && (e = Rt.scrollingElement || Ot);
    var o = P.indexOf(e),
      l = r === le.sc ? 1 : 2;
    (!~o && (o = P.push(e) - 1), P[o + l] || Oe(e, 'scroll', gn));
    var a = P[o + l],
      d =
        a ||
        (P[o + l] =
          Zr(It(e, t), !0) ||
          (wr(e)
            ? r
            : Zr(function (x) {
                return arguments.length ? (e[t] = x) : e[t];
              })));
    return ((d.target = e), a || (d.smooth = ve.getProperty(e, 'scrollBehavior') === 'smooth'), d);
  },
  hn = function (e, n, t) {
    var r = e,
      o = e,
      l = yr(),
      a = l,
      d = n || 50,
      x = Math.max(500, d * 3),
      I = function (v, U) {
        var B = yr();
        U || B - l > d
          ? ((o = r), (r = v), (a = l), (l = B))
          : t
            ? (r += v)
            : (r = o + ((v - o) / (B - a)) * (l - a));
      },
      D = function () {
        ((o = r = t ? 0 : r), (a = l = 0));
      },
      h = function (v) {
        var U = a,
          B = o,
          ne = yr();
        return (
          (v || v === 0) && v !== r && I(v),
          l === a || ne - a > x ? 0 : ((r + (t ? B : -B)) / ((t ? ne : l) - U)) * 1e3
        );
      };
    return { update: I, reset: D, getVelocity: h };
  },
  pr = function (e, n) {
    return (n && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e);
  },
  Rn = function (e) {
    var n = Math.max.apply(Math, e),
      t = Math.min.apply(Math, e);
    return Math.abs(n) >= Math.abs(t) ? n : t;
  },
  ro = function () {
    ((br = ve.core.globals().ScrollTrigger), br && br.core && Ao());
  },
  no = function (e) {
    return (
      (ve = e || eo()),
      !$r &&
        ve &&
        typeof document < 'u' &&
        document.body &&
        ((Ke = window),
        (Rt = document),
        (Ot = Rt.documentElement),
        (ir = Rt.body),
        (Zn = [Ke, Rt, Ot, ir]),
        ve.utils.clamp,
        (Qn = ve.core.context || function () {}),
        (Ht = 'onpointerenter' in ir ? 'pointer' : 'mouse'),
        (Jn = J.isTouch =
          Ke.matchMedia && Ke.matchMedia('(hover: none), (pointer: coarse)').matches
            ? 1
            : 'ontouchstart' in Ke || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (at = J.eventTypes =
          (
            'ontouchstart' in Ot
              ? 'touchstart,touchmove,touchcancel,touchend'
              : 'onpointerdown' in Ot
                ? 'pointerdown,pointermove,pointercancel,pointerup'
                : 'mousedown,mousemove,mouseup,mouseup'
          ).split(',')),
        setTimeout(function () {
          return (to = 0);
        }, 500),
        ro(),
        ($r = 1)),
      $r
    );
  };
Fe.op = le;
P.cache = 0;
var J = (function () {
  function i(n) {
    this.init(n);
  }
  var e = i.prototype;
  return (
    (e.init = function (t) {
      ($r || no(ve) || console.warn('Please gsap.registerPlugin(Observer)'), br || ro());
      var r = t.tolerance,
        o = t.dragMinimum,
        l = t.type,
        a = t.target,
        d = t.lineHeight,
        x = t.debounce,
        I = t.preventDefault,
        D = t.onStop,
        h = t.onStopDelay,
        u = t.ignore,
        v = t.wheelSpeed,
        U = t.event,
        B = t.onDragStart,
        ne = t.onDragEnd,
        W = t.onDrag,
        ge = t.onPress,
        C = t.onRelease,
        je = t.onRight,
        X = t.onLeft,
        y = t.onUp,
        Ee = t.onDown,
        Be = t.onChangeX,
        g = t.onChangeY,
        ce = t.onChange,
        b = t.onToggleX,
        gt = t.onToggleY,
        oe = t.onHover,
        Me = t.onHoverEnd,
        Pe = t.onMove,
        F = t.ignoreCheck,
        Z = t.isNormalizer,
        Q = t.onGestureStart,
        s = t.onGestureEnd,
        ie = t.onWheel,
        Yt = t.onEnable,
        St = t.onDisable,
        Je = t.onClick,
        ht = t.scrollSpeed,
        _e = t.capture,
        ee = t.allowClicks,
        De = t.lockAxis,
        xe = t.onLockAxis;
      ((this.target = a = He(a) || Ot),
        (this.vars = t),
        u && (u = ve.utils.toArray(u)),
        (r = r || 1e-9),
        (o = o || 0),
        (v = v || 1),
        (ht = ht || 1),
        (l = l || 'wheel,touch,pointer'),
        (x = x !== !1),
        d || (d = parseFloat(Ke.getComputedStyle(ir).lineHeight) || 22));
      var Ct,
        Ae,
        Ne,
        O,
        V,
        Xe,
        We,
        c = this,
        Ge = 0,
        mt = 0,
        Tt = t.passive || (!I && t.passive !== !1),
        $ = Lt(a, Fe),
        vt = Lt(a, le),
        Et = $(),
        Ft = vt(),
        ue = ~l.indexOf('touch') && !~l.indexOf('pointer') && at[0] === 'pointerdown',
        Mt = wr(a),
        K = a.ownerDocument || Rt,
        rt = [0, 0, 0],
        Ze = [0, 0, 0],
        _t = 0,
        cr = function () {
          return (_t = yr());
        },
        te = function (_, L) {
          return (
            ((c.event = _) && u && Ro(_.target, u)) ||
            (L && ue && _.pointerType !== 'touch') ||
            (F && F(_, L))
          );
        },
        Ar = function () {
          (c._vx.reset(), c._vy.reset(), Ae.pause(), D && D(c));
        },
        xt = function () {
          var _ = (c.deltaX = Rn(rt)),
            L = (c.deltaY = Rn(Ze)),
            f = Math.abs(_) >= r,
            w = Math.abs(L) >= r;
          (ce && (f || w) && ce(c, _, L, rt, Ze),
            f &&
              (je && c.deltaX > 0 && je(c),
              X && c.deltaX < 0 && X(c),
              Be && Be(c),
              b && c.deltaX < 0 != Ge < 0 && b(c),
              (Ge = c.deltaX),
              (rt[0] = rt[1] = rt[2] = 0)),
            w &&
              (Ee && c.deltaY > 0 && Ee(c),
              y && c.deltaY < 0 && y(c),
              g && g(c),
              gt && c.deltaY < 0 != mt < 0 && gt(c),
              (mt = c.deltaY),
              (Ze[0] = Ze[1] = Ze[2] = 0)),
            (O || Ne) &&
              (Pe && Pe(c), Ne && (B && Ne === 1 && B(c), W && W(c), (Ne = 0)), (O = !1)),
            Xe && !(Xe = !1) && xe && xe(c),
            V && (ie(c), (V = !1)),
            (Ct = 0));
        },
        Jt = function (_, L, f) {
          ((rt[f] += _),
            (Ze[f] += L),
            c._vx.update(_),
            c._vy.update(L),
            x ? Ct || (Ct = requestAnimationFrame(xt)) : xt());
        },
        Zt = function (_, L) {
          (De && !We && ((c.axis = We = Math.abs(_) > Math.abs(L) ? 'x' : 'y'), (Xe = !0)),
            We !== 'y' && ((rt[2] += _), c._vx.update(_, !0)),
            We !== 'x' && ((Ze[2] += L), c._vy.update(L, !0)),
            x ? Ct || (Ct = requestAnimationFrame(xt)) : xt());
        },
        Pt = function (_) {
          if (!te(_, 1)) {
            _ = pr(_, I);
            var L = _.clientX,
              f = _.clientY,
              w = L - c.x,
              m = f - c.y,
              k = c.isDragging;
            ((c.x = L),
              (c.y = f),
              (k || ((w || m) && (Math.abs(c.startX - L) >= o || Math.abs(c.startY - f) >= o))) &&
                ((Ne = k ? 2 : 1), k || (c.isDragging = !0), Zt(w, m)));
          }
        },
        zt = (c.onPress = function (S) {
          te(S, 1) ||
            (S && S.button) ||
            ((c.axis = We = null),
            Ae.pause(),
            (c.isPressed = !0),
            (S = pr(S)),
            (Ge = mt = 0),
            (c.startX = c.x = S.clientX),
            (c.startY = c.y = S.clientY),
            c._vx.reset(),
            c._vy.reset(),
            Oe(Z ? a : K, at[1], Pt, Tt, !0),
            (c.deltaX = c.deltaY = 0),
            ge && ge(c));
        }),
        A = (c.onRelease = function (S) {
          if (!te(S, 1)) {
            Re(Z ? a : K, at[1], Pt, !0);
            var _ = !isNaN(c.y - c.startY),
              L = c.isDragging,
              f = L && (Math.abs(c.x - c.startX) > 3 || Math.abs(c.y - c.startY) > 3),
              w = pr(S);
            (!f &&
              _ &&
              (c._vx.reset(),
              c._vy.reset(),
              I &&
                ee &&
                ve.delayedCall(0.08, function () {
                  if (yr() - _t > 300 && !S.defaultPrevented) {
                    if (S.target.click) S.target.click();
                    else if (K.createEvent) {
                      var m = K.createEvent('MouseEvents');
                      (m.initMouseEvent(
                        'click',
                        !0,
                        !0,
                        Ke,
                        1,
                        w.screenX,
                        w.screenY,
                        w.clientX,
                        w.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        S.target.dispatchEvent(m));
                    }
                  }
                })),
              (c.isDragging = c.isGesturing = c.isPressed = !1),
              D && L && !Z && Ae.restart(!0),
              Ne && xt(),
              ne && L && ne(c),
              C && C(c, f));
          }
        }),
        Bt = function (_) {
          return _.touches && _.touches.length > 1 && (c.isGesturing = !0) && Q(_, c.isDragging);
        },
        nt = function () {
          return (c.isGesturing = !1) || s(c);
        },
        ot = function (_) {
          if (!te(_)) {
            var L = $(),
              f = vt();
            (Jt((L - Et) * ht, (f - Ft) * ht, 1), (Et = L), (Ft = f), D && Ae.restart(!0));
          }
        },
        it = function (_) {
          if (!te(_)) {
            ((_ = pr(_, I)), ie && (V = !0));
            var L = (_.deltaMode === 1 ? d : _.deltaMode === 2 ? Ke.innerHeight : 1) * v;
            (Jt(_.deltaX * L, _.deltaY * L, 0), D && !Z && Ae.restart(!0));
          }
        },
        Nt = function (_) {
          if (!te(_)) {
            var L = _.clientX,
              f = _.clientY,
              w = L - c.x,
              m = f - c.y;
            ((c.x = L), (c.y = f), (O = !0), D && Ae.restart(!0), (w || m) && Zt(w, m));
          }
        },
        Qt = function (_) {
          ((c.event = _), oe(c));
        },
        bt = function (_) {
          ((c.event = _), Me(c));
        },
        ur = function (_) {
          return te(_) || (pr(_, I) && Je(c));
        };
      ((Ae = c._dc = ve.delayedCall(h || 0.25, Ar).pause()),
        (c.deltaX = c.deltaY = 0),
        (c._vx = hn(0, 50, !0)),
        (c._vy = hn(0, 50, !0)),
        (c.scrollX = $),
        (c.scrollY = vt),
        (c.isDragging = c.isGesturing = c.isPressed = !1),
        Qn(this),
        (c.enable = function (S) {
          return (
            c.isEnabled ||
              (Oe(Mt ? K : a, 'scroll', gn),
              l.indexOf('scroll') >= 0 && Oe(Mt ? K : a, 'scroll', ot, Tt, _e),
              l.indexOf('wheel') >= 0 && Oe(a, 'wheel', it, Tt, _e),
              ((l.indexOf('touch') >= 0 && Jn) || l.indexOf('pointer') >= 0) &&
                (Oe(a, at[0], zt, Tt, _e),
                Oe(K, at[2], A),
                Oe(K, at[3], A),
                ee && Oe(a, 'click', cr, !0, !0),
                Je && Oe(a, 'click', ur),
                Q && Oe(K, 'gesturestart', Bt),
                s && Oe(K, 'gestureend', nt),
                oe && Oe(a, Ht + 'enter', Qt),
                Me && Oe(a, Ht + 'leave', bt),
                Pe && Oe(a, Ht + 'move', Nt)),
              (c.isEnabled = !0),
              (c.isDragging = c.isGesturing = c.isPressed = O = Ne = !1),
              c._vx.reset(),
              c._vy.reset(),
              (Et = $()),
              (Ft = vt()),
              S && S.type && zt(S),
              Yt && Yt(c)),
            c
          );
        }),
        (c.disable = function () {
          c.isEnabled &&
            (or.filter(function (S) {
              return S !== c && wr(S.target);
            }).length || Re(Mt ? K : a, 'scroll', gn),
            c.isPressed && (c._vx.reset(), c._vy.reset(), Re(Z ? a : K, at[1], Pt, !0)),
            Re(Mt ? K : a, 'scroll', ot, _e),
            Re(a, 'wheel', it, _e),
            Re(a, at[0], zt, _e),
            Re(K, at[2], A),
            Re(K, at[3], A),
            Re(a, 'click', cr, !0),
            Re(a, 'click', ur),
            Re(K, 'gesturestart', Bt),
            Re(K, 'gestureend', nt),
            Re(a, Ht + 'enter', Qt),
            Re(a, Ht + 'leave', bt),
            Re(a, Ht + 'move', Nt),
            (c.isEnabled = c.isPressed = c.isDragging = !1),
            St && St(c));
        }),
        (c.kill = c.revert =
          function () {
            c.disable();
            var S = or.indexOf(c);
            (S >= 0 && or.splice(S, 1), wt === c && (wt = 0));
          }),
        or.push(c),
        Z && wr(a) && (wt = c),
        c.enable(U));
    }),
    Do(i, [
      {
        key: 'velocityX',
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: 'velocityY',
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    i
  );
})();
J.version = '3.13.0';
J.create = function (i) {
  return new J(i);
};
J.register = no;
J.getAll = function () {
  return or.slice();
};
J.getById = function (i) {
  return or.filter(function (e) {
    return e.vars.id === i;
  })[0];
};
eo() && ve.registerPlugin(J);
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var p,
  rr,
  M,
  N,
  Ve,
  Y,
  kn,
  Qr,
  Pr,
  kr,
  hr,
  Yr,
  ke,
  nn,
  mn,
  Le,
  On,
  In,
  nr,
  oo,
  sn,
  io,
  Ie,
  vn,
  so,
  ao,
  At,
  _n,
  Sn,
  sr,
  Cn,
  en,
  xn,
  an,
  Fr = 1,
  Se = Date.now,
  ln = Se(),
  tt = 0,
  mr = 0,
  Ln = function (e, n, t) {
    var r = qe(e) && (e.substr(0, 6) === 'clamp(' || e.indexOf('max') > -1);
    return ((t['_' + n + 'Clamp'] = r), r ? e.substr(6, e.length - 7) : e);
  },
  Yn = function (e, n) {
    return n && (!qe(e) || e.substr(0, 6) !== 'clamp(') ? 'clamp(' + e + ')' : e;
  },
  Oo = function i() {
    return mr && requestAnimationFrame(i);
  },
  Fn = function () {
    return (nn = 1);
  },
  zn = function () {
    return (nn = 0);
  },
  ft = function (e) {
    return e;
  },
  vr = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  lo = function () {
    return typeof window < 'u';
  },
  co = function () {
    return p || (lo() && (p = window.gsap) && p.registerPlugin && p);
  },
  Vt = function (e) {
    return !!~kn.indexOf(e);
  },
  uo = function (e) {
    return (e === 'Height' ? Cn : M['inner' + e]) || Ve['client' + e] || Y['client' + e];
  },
  fo = function (e) {
    return (
      It(e, 'getBoundingClientRect') ||
      (Vt(e)
        ? function () {
            return ((Jr.width = M.innerWidth), (Jr.height = Cn), Jr);
          }
        : function () {
            return yt(e);
          })
    );
  },
  Io = function (e, n, t) {
    var r = t.d,
      o = t.d2,
      l = t.a;
    return (l = It(e, 'getBoundingClientRect'))
      ? function () {
          return l()[r];
        }
      : function () {
          return (n ? uo(o) : e['client' + o]) || 0;
        };
  },
  Lo = function (e, n) {
    return !n || ~pt.indexOf(e)
      ? fo(e)
      : function () {
          return Jr;
        };
  },
  dt = function (e, n) {
    var t = n.s,
      r = n.d2,
      o = n.d,
      l = n.a;
    return Math.max(
      0,
      (t = 'scroll' + r) && (l = It(e, t))
        ? l() - fo(e)()[o]
        : Vt(e)
          ? (Ve[t] || Y[t]) - uo(r)
          : e[t] - e['offset' + r]
    );
  },
  zr = function (e, n) {
    for (var t = 0; t < nr.length; t += 3)
      (!n || ~n.indexOf(nr[t + 1])) && e(nr[t], nr[t + 1], nr[t + 2]);
  },
  qe = function (e) {
    return typeof e == 'string';
  },
  Te = function (e) {
    return typeof e == 'function';
  },
  _r = function (e) {
    return typeof e == 'number';
  },
  Wt = function (e) {
    return typeof e == 'object';
  },
  gr = function (e, n, t) {
    return e && e.progress(n ? 0 : 1) && t && e.pause();
  },
  cn = function (e, n) {
    if (e.enabled) {
      var t = e._ctx
        ? e._ctx.add(function () {
            return n(e);
          })
        : n(e);
      t && t.totalTime && (e.callbackAnimation = t);
    }
  },
  er = Math.abs,
  po = 'left',
  go = 'top',
  Tn = 'right',
  En = 'bottom',
  Ut = 'width',
  $t = 'height',
  Sr = 'Right',
  Cr = 'Left',
  Tr = 'Top',
  Er = 'Bottom',
  re = 'padding',
  Qe = 'margin',
  lr = 'Width',
  Mn = 'Height',
  ae = 'px',
  et = function (e) {
    return M.getComputedStyle(e);
  },
  Yo = function (e) {
    var n = et(e).position;
    e.style.position = n === 'absolute' || n === 'fixed' ? n : 'relative';
  },
  Bn = function (e, n) {
    for (var t in n) t in e || (e[t] = n[t]);
    return e;
  },
  yt = function (e, n) {
    var t =
        n &&
        et(e)[mn] !== 'matrix(1, 0, 0, 1, 0, 0)' &&
        p
          .to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      r = e.getBoundingClientRect();
    return (t && t.progress(0).kill(), r);
  },
  tn = function (e, n) {
    var t = n.d2;
    return e['offset' + t] || e['client' + t] || 0;
  },
  ho = function (e) {
    var n = [],
      t = e.labels,
      r = e.duration(),
      o;
    for (o in t) n.push(t[o] / r);
    return n;
  },
  Fo = function (e) {
    return function (n) {
      return p.utils.snap(ho(e), n);
    };
  },
  Pn = function (e) {
    var n = p.utils.snap(e),
      t =
        Array.isArray(e) &&
        e.slice(0).sort(function (r, o) {
          return r - o;
        });
    return t
      ? function (r, o, l) {
          l === void 0 && (l = 0.001);
          var a;
          if (!o) return n(r);
          if (o > 0) {
            for (r -= l, a = 0; a < t.length; a++) if (t[a] >= r) return t[a];
            return t[a - 1];
          } else for (a = t.length, r += l; a--; ) if (t[a] <= r) return t[a];
          return t[0];
        }
      : function (r, o, l) {
          l === void 0 && (l = 0.001);
          var a = n(r);
          return !o || Math.abs(a - r) < l || a - r < 0 == o < 0 ? a : n(o < 0 ? r - e : r + e);
        };
  },
  zo = function (e) {
    return function (n, t) {
      return Pn(ho(e))(n, t.direction);
    };
  },
  Br = function (e, n, t, r) {
    return t.split(',').forEach(function (o) {
      return e(n, o, r);
    });
  },
  pe = function (e, n, t, r, o) {
    return e.addEventListener(n, t, { passive: !r, capture: !!o });
  },
  de = function (e, n, t, r) {
    return e.removeEventListener(n, t, !!r);
  },
  Nr = function (e, n, t) {
    ((t = t && t.wheelHandler), t && (e(n, 'wheel', t), e(n, 'touchmove', t)));
  },
  Nn = { startColor: 'green', endColor: 'red', indent: 0, fontSize: '16px', fontWeight: 'normal' },
  Xr = { toggleActions: 'play', anticipatePin: 0 },
  rn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  qr = function (e, n) {
    if (qe(e)) {
      var t = e.indexOf('='),
        r = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
      (~t && (e.indexOf('%') > t && (r *= n / 100), (e = e.substr(0, t - 1))),
        (e =
          r +
          (e in rn
            ? rn[e] * n
            : ~e.indexOf('%')
              ? (parseFloat(e) * n) / 100
              : parseFloat(e) || 0)));
    }
    return e;
  },
  Hr = function (e, n, t, r, o, l, a, d) {
    var x = o.startColor,
      I = o.endColor,
      D = o.fontSize,
      h = o.indent,
      u = o.fontWeight,
      v = N.createElement('div'),
      U = Vt(t) || It(t, 'pinType') === 'fixed',
      B = e.indexOf('scroller') !== -1,
      ne = U ? Y : t,
      W = e.indexOf('start') !== -1,
      ge = W ? x : I,
      C =
        'border-color:' +
        ge +
        ';font-size:' +
        D +
        ';color:' +
        ge +
        ';font-weight:' +
        u +
        ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
    return (
      (C += 'position:' + ((B || d) && U ? 'fixed;' : 'absolute;')),
      (B || d || !U) && (C += (r === le ? Tn : En) + ':' + (l + parseFloat(h)) + 'px;'),
      a && (C += 'box-sizing:border-box;text-align:left;width:' + a.offsetWidth + 'px;'),
      (v._isStart = W),
      v.setAttribute('class', 'gsap-marker-' + e + (n ? ' marker-' + n : '')),
      (v.style.cssText = C),
      (v.innerText = n || n === 0 ? e + '-' + n : e),
      ne.children[0] ? ne.insertBefore(v, ne.children[0]) : ne.appendChild(v),
      (v._offset = v['offset' + r.op.d2]),
      Vr(v, 0, r, W),
      v
    );
  },
  Vr = function (e, n, t, r) {
    var o = { display: 'block' },
      l = t[r ? 'os2' : 'p2'],
      a = t[r ? 'p2' : 'os2'];
    ((e._isFlipped = r),
      (o[t.a + 'Percent'] = r ? -100 : 0),
      (o[t.a] = r ? '1px' : 0),
      (o['border' + l + lr] = 1),
      (o['border' + a + lr] = 0),
      (o[t.p] = n + 'px'),
      p.set(e, o));
  },
  T = [],
  bn = {},
  Dr,
  Xn = function () {
    return Se() - tt > 34 && (Dr || (Dr = requestAnimationFrame(kt)));
  },
  tr = function () {
    (!Ie || !Ie.isPressed || Ie.startX > Y.clientWidth) &&
      (P.cache++,
      Ie ? Dr || (Dr = requestAnimationFrame(kt)) : kt(),
      tt || jt('scrollStart'),
      (tt = Se()));
  },
  un = function () {
    ((ao = M.innerWidth), (so = M.innerHeight));
  },
  xr = function (e) {
    (P.cache++,
      (e === !0 ||
        (!ke &&
          !io &&
          !N.fullscreenElement &&
          !N.webkitFullscreenElement &&
          (!vn || ao !== M.innerWidth || Math.abs(M.innerHeight - so) > M.innerHeight * 0.25))) &&
        Qr.restart(!0));
  },
  Kt = {},
  Bo = [],
  mo = function i() {
    return de(E, 'scrollEnd', i) || Gt(!0);
  },
  jt = function (e) {
    return (
      (Kt[e] &&
        Kt[e].map(function (n) {
          return n();
        })) ||
      Bo
    );
  },
  $e = [],
  vo = function (e) {
    for (var n = 0; n < $e.length; n += 5)
      (!e || ($e[n + 4] && $e[n + 4].query === e)) &&
        (($e[n].style.cssText = $e[n + 1]),
        $e[n].getBBox && $e[n].setAttribute('transform', $e[n + 2] || ''),
        ($e[n + 3].uncache = 1));
  },
  Dn = function (e, n) {
    var t;
    for (Le = 0; Le < T.length; Le++)
      ((t = T[Le]), t && (!n || t._ctx === n) && (e ? t.kill(1) : t.revert(!0, !0)));
    ((en = !0), n && vo(n), n || jt('revert'));
  },
  _o = function (e, n) {
    (P.cache++,
      (n || !Ye) &&
        P.forEach(function (t) {
          return Te(t) && t.cacheID++ && (t.rec = 0);
        }),
      qe(e) && (M.history.scrollRestoration = Sn = e));
  },
  Ye,
  qt = 0,
  Hn,
  No = function () {
    if (Hn !== qt) {
      var e = (Hn = qt);
      requestAnimationFrame(function () {
        return e === qt && Gt(!0);
      });
    }
  },
  xo = function () {
    (Y.appendChild(sr), (Cn = (!Ie && sr.offsetHeight) || M.innerHeight), Y.removeChild(sr));
  },
  Wn = function (e) {
    return Pr(
      '.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end'
    ).forEach(function (n) {
      return (n.style.display = e ? 'none' : 'block');
    });
  },
  Gt = function (e, n) {
    if (((Ve = N.documentElement), (Y = N.body), (kn = [M, N, Ve, Y]), tt && !e && !en)) {
      pe(E, 'scrollEnd', mo);
      return;
    }
    (xo(),
      (Ye = E.isRefreshing = !0),
      P.forEach(function (r) {
        return Te(r) && ++r.cacheID && (r.rec = r());
      }));
    var t = jt('refreshInit');
    (oo && E.sort(),
      n || Dn(),
      P.forEach(function (r) {
        Te(r) && (r.smooth && (r.target.style.scrollBehavior = 'auto'), r(0));
      }),
      T.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      (en = !1),
      T.forEach(function (r) {
        if (r._subPinOffset && r.pin) {
          var o = r.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
            l = r.pin[o];
          (r.revert(!0, 1), r.adjustPinSpacing(r.pin[o] - l), r.refresh());
        }
      }),
      (xn = 1),
      Wn(!0),
      T.forEach(function (r) {
        var o = dt(r.scroller, r._dir),
          l = r.vars.end === 'max' || (r._endClamp && r.end > o),
          a = r._startClamp && r.start >= o;
        (l || a) &&
          r.setPositions(a ? o - 1 : r.start, l ? Math.max(a ? o : r.start + 1, o) : r.end, !0);
      }),
      Wn(!1),
      (xn = 0),
      t.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      P.forEach(function (r) {
        Te(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = 'smooth');
            }),
          r.rec && r(r.rec));
      }),
      _o(Sn, 1),
      Qr.pause(),
      qt++,
      (Ye = 2),
      kt(2),
      T.forEach(function (r) {
        return Te(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (Ye = E.isRefreshing = !1),
      jt('refresh'));
  },
  yn = 0,
  Kr = 1,
  Mr,
  kt = function (e) {
    if (e === 2 || (!Ye && !en)) {
      ((E.isUpdating = !0), Mr && Mr.update(0));
      var n = T.length,
        t = Se(),
        r = t - ln >= 50,
        o = n && T[0].scroll();
      if (
        ((Kr = yn > o ? -1 : 1),
        Ye || (yn = o),
        r && (tt && !nn && t - tt > 200 && ((tt = 0), jt('scrollEnd')), (hr = ln), (ln = t)),
        Kr < 0)
      ) {
        for (Le = n; Le-- > 0; ) T[Le] && T[Le].update(0, r);
        Kr = 1;
      } else for (Le = 0; Le < n; Le++) T[Le] && T[Le].update(0, r);
      E.isUpdating = !1;
    }
    Dr = 0;
  },
  wn = [
    po,
    go,
    En,
    Tn,
    Qe + Er,
    Qe + Sr,
    Qe + Tr,
    Qe + Cr,
    'display',
    'flexShrink',
    'float',
    'zIndex',
    'gridColumnStart',
    'gridColumnEnd',
    'gridRowStart',
    'gridRowEnd',
    'gridArea',
    'justifySelf',
    'alignSelf',
    'placeSelf',
    'order',
  ],
  jr = wn.concat([
    Ut,
    $t,
    'boxSizing',
    'max' + lr,
    'max' + Mn,
    'position',
    Qe,
    re,
    re + Tr,
    re + Sr,
    re + Er,
    re + Cr,
  ]),
  Xo = function (e, n, t) {
    ar(t);
    var r = e._gsap;
    if (r.spacerIsNative) ar(r.spacerState);
    else if (e._gsap.swappedIn) {
      var o = n.parentNode;
      o && (o.insertBefore(e, n), o.removeChild(n));
    }
    e._gsap.swappedIn = !1;
  },
  fn = function (e, n, t, r) {
    if (!e._gsap.swappedIn) {
      for (var o = wn.length, l = n.style, a = e.style, d; o--; ) ((d = wn[o]), (l[d] = t[d]));
      ((l.position = t.position === 'absolute' ? 'absolute' : 'relative'),
        t.display === 'inline' && (l.display = 'inline-block'),
        (a[En] = a[Tn] = 'auto'),
        (l.flexBasis = t.flexBasis || 'auto'),
        (l.overflow = 'visible'),
        (l.boxSizing = 'border-box'),
        (l[Ut] = tn(e, Fe) + ae),
        (l[$t] = tn(e, le) + ae),
        (l[re] = a[Qe] = a[go] = a[po] = '0'),
        ar(r),
        (a[Ut] = a['max' + lr] = t[Ut]),
        (a[$t] = a['max' + Mn] = t[$t]),
        (a[re] = t[re]),
        e.parentNode !== n && (e.parentNode.insertBefore(n, e), n.appendChild(e)),
        (e._gsap.swappedIn = !0));
    }
  },
  Ho = /([A-Z])/g,
  ar = function (e) {
    if (e) {
      var n = e.t.style,
        t = e.length,
        r = 0,
        o,
        l;
      for ((e.t._gsap || p.core.getCache(e.t)).uncache = 1; r < t; r += 2)
        ((l = e[r + 1]),
          (o = e[r]),
          l ? (n[o] = l) : n[o] && n.removeProperty(o.replace(Ho, '-$1').toLowerCase()));
    }
  },
  Wr = function (e) {
    for (var n = jr.length, t = e.style, r = [], o = 0; o < n; o++) r.push(jr[o], t[jr[o]]);
    return ((r.t = e), r);
  },
  Wo = function (e, n, t) {
    for (var r = [], o = e.length, l = t ? 8 : 0, a; l < o; l += 2)
      ((a = e[l]), r.push(a, a in n ? n[a] : e[l + 1]));
    return ((r.t = e.t), r);
  },
  Jr = { left: 0, top: 0 },
  Gn = function (e, n, t, r, o, l, a, d, x, I, D, h, u, v) {
    (Te(e) && (e = e(d)),
      qe(e) &&
        e.substr(0, 3) === 'max' &&
        (e = h + (e.charAt(4) === '=' ? qr('0' + e.substr(3), t) : 0)));
    var U = u ? u.time() : 0,
      B,
      ne,
      W;
    if ((u && u.seek(0), isNaN(e) || (e = +e), _r(e)))
      (u && (e = p.utils.mapRange(u.scrollTrigger.start, u.scrollTrigger.end, 0, h, e)),
        a && Vr(a, t, r, !0));
    else {
      Te(n) && (n = n(d));
      var ge = (e || '0').split(' '),
        C,
        je,
        X,
        y;
      ((W = He(n, d) || Y),
        (C = yt(W) || {}),
        (!C || (!C.left && !C.top)) &&
          et(W).display === 'none' &&
          ((y = W.style.display),
          (W.style.display = 'block'),
          (C = yt(W)),
          y ? (W.style.display = y) : W.style.removeProperty('display')),
        (je = qr(ge[0], C[r.d])),
        (X = qr(ge[1] || '0', t)),
        (e = C[r.p] - x[r.p] - I + je + o - X),
        a && Vr(a, X, r, t - X < 20 || (a._isStart && X > 20)),
        (t -= t - X));
    }
    if ((v && ((d[v] = e || -0.001), e < 0 && (e = 0)), l)) {
      var Ee = e + t,
        Be = l._isStart;
      ((B = 'scroll' + r.d2),
        Vr(
          l,
          Ee,
          r,
          (Be && Ee > 20) || (!Be && (D ? Math.max(Y[B], Ve[B]) : l.parentNode[B]) <= Ee + 1)
        ),
        D && ((x = yt(a)), D && (l.style[r.op.p] = x[r.op.p] - r.op.m - l._offset + ae)));
    }
    return (
      u &&
        W &&
        ((B = yt(W)),
        u.seek(h),
        (ne = yt(W)),
        (u._caScrollDist = B[r.p] - ne[r.p]),
        (e = (e / u._caScrollDist) * h)),
      u && u.seek(U),
      u ? e : Math.round(e)
    );
  },
  Go = /(webkit|moz|length|cssText|inset)/i,
  Un = function (e, n, t, r) {
    if (e.parentNode !== n) {
      var o = e.style,
        l,
        a;
      if (n === Y) {
        ((e._stOrig = o.cssText), (a = et(e)));
        for (l in a)
          !+l && !Go.test(l) && a[l] && typeof o[l] == 'string' && l !== '0' && (o[l] = a[l]);
        ((o.top = t), (o.left = r));
      } else o.cssText = e._stOrig;
      ((p.core.getCache(e).uncache = 1), n.appendChild(e));
    }
  },
  bo = function (e, n, t) {
    var r = n,
      o = r;
    return function (l) {
      var a = Math.round(e());
      return (
        a !== r && a !== o && Math.abs(a - r) > 3 && Math.abs(a - o) > 3 && ((l = a), t && t()),
        (o = r),
        (r = Math.round(l)),
        r
      );
    };
  },
  Gr = function (e, n, t) {
    var r = {};
    ((r[n.p] = '+=' + t), p.set(e, r));
  },
  $n = function (e, n) {
    var t = Lt(e, n),
      r = '_scroll' + n.p2,
      o = function l(a, d, x, I, D) {
        var h = l.tween,
          u = d.onComplete,
          v = {};
        x = x || t();
        var U = bo(t, x, function () {
          (h.kill(), (l.tween = 0));
        });
        return (
          (D = (I && D) || 0),
          (I = I || a - x),
          h && h.kill(),
          (d[r] = a),
          (d.inherit = !1),
          (d.modifiers = v),
          (v[r] = function () {
            return U(x + I * h.ratio + D * h.ratio * h.ratio);
          }),
          (d.onUpdate = function () {
            (P.cache++, l.tween && kt());
          }),
          (d.onComplete = function () {
            ((l.tween = 0), u && u.call(h));
          }),
          (h = l.tween = p.to(e, d)),
          h
        );
      };
    return (
      (e[r] = t),
      (t.wheelHandler = function () {
        return o.tween && o.tween.kill() && (o.tween = 0);
      }),
      pe(e, 'wheel', t.wheelHandler),
      E.isTouch && pe(e, 'touchmove', t.wheelHandler),
      o
    );
  },
  E = (function () {
    function i(n, t) {
      (rr || i.register(p) || console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
        _n(this),
        this.init(n, t));
    }
    var e = i.prototype;
    return (
      (e.init = function (t, r) {
        if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), !mr)) {
          this.update = this.refresh = this.kill = ft;
          return;
        }
        t = Bn(qe(t) || _r(t) || t.nodeType ? { trigger: t } : t, Xr);
        var o = t,
          l = o.onUpdate,
          a = o.toggleClass,
          d = o.id,
          x = o.onToggle,
          I = o.onRefresh,
          D = o.scrub,
          h = o.trigger,
          u = o.pin,
          v = o.pinSpacing,
          U = o.invalidateOnRefresh,
          B = o.anticipatePin,
          ne = o.onScrubComplete,
          W = o.onSnapComplete,
          ge = o.once,
          C = o.snap,
          je = o.pinReparent,
          X = o.pinSpacer,
          y = o.containerAnimation,
          Ee = o.fastScrollEnd,
          Be = o.preventOverlaps,
          g = t.horizontal || (t.containerAnimation && t.horizontal !== !1) ? Fe : le,
          ce = !D && D !== 0,
          b = He(t.scroller || M),
          gt = p.core.getCache(b),
          oe = Vt(b),
          Me = ('pinType' in t ? t.pinType : It(b, 'pinType') || (oe && 'fixed')) === 'fixed',
          Pe = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
          F = ce && t.toggleActions.split(' '),
          Z = 'markers' in t ? t.markers : Xr.markers,
          Q = oe ? 0 : parseFloat(et(b)['border' + g.p2 + lr]) || 0,
          s = this,
          ie =
            t.onRefreshInit &&
            function () {
              return t.onRefreshInit(s);
            },
          Yt = Io(b, oe, g),
          St = Lo(b, oe),
          Je = 0,
          ht = 0,
          _e = 0,
          ee = Lt(b, g),
          De,
          xe,
          Ct,
          Ae,
          Ne,
          O,
          V,
          Xe,
          We,
          c,
          Ge,
          mt,
          Tt,
          $,
          vt,
          Et,
          Ft,
          ue,
          Mt,
          K,
          rt,
          Ze,
          _t,
          cr,
          te,
          Ar,
          xt,
          Jt,
          Zt,
          Pt,
          zt,
          A,
          Bt,
          nt,
          ot,
          it,
          Nt,
          Qt,
          bt;
        if (
          ((s._startClamp = s._endClamp = !1),
          (s._dir = g),
          (B *= 45),
          (s.scroller = b),
          (s.scroll = y ? y.time.bind(y) : ee),
          (Ae = ee()),
          (s.vars = t),
          (r = r || t.animation),
          'refreshPriority' in t && ((oo = 1), t.refreshPriority === -9999 && (Mr = s)),
          (gt.tweenScroll = gt.tweenScroll || { top: $n(b, le), left: $n(b, Fe) }),
          (s.tweenTo = De = gt.tweenScroll[g.p]),
          (s.scrubDuration = function (f) {
            ((Bt = _r(f) && f),
              Bt
                ? A
                  ? A.duration(f)
                  : (A = p.to(r, {
                      ease: 'expo',
                      totalProgress: '+=0',
                      inherit: !1,
                      duration: Bt,
                      paused: !0,
                      onComplete: function () {
                        return ne && ne(s);
                      },
                    }))
                : (A && A.progress(1).kill(), (A = 0)));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !s.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                t.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (s.animation = r.pause()),
            (r.scrollTrigger = s),
            s.scrubDuration(D),
            (Pt = 0),
            d || (d = r.vars.id)),
          C &&
            ((!Wt(C) || C.push) && (C = { snapTo: C }),
            'scrollBehavior' in Y.style && p.set(oe ? [Y, Ve] : b, { scrollBehavior: 'auto' }),
            P.forEach(function (f) {
              return Te(f) && f.target === (oe ? N.scrollingElement || Ve : b) && (f.smooth = !1);
            }),
            (Ct = Te(C.snapTo)
              ? C.snapTo
              : C.snapTo === 'labels'
                ? Fo(r)
                : C.snapTo === 'labelsDirectional'
                  ? zo(r)
                  : C.directional !== !1
                    ? function (f, w) {
                        return Pn(C.snapTo)(f, Se() - ht < 500 ? 0 : w.direction);
                      }
                    : p.utils.snap(C.snapTo)),
            (nt = C.duration || { min: 0.1, max: 2 }),
            (nt = Wt(nt) ? kr(nt.min, nt.max) : kr(nt, nt)),
            (ot = p
              .delayedCall(C.delay || Bt / 2 || 0.1, function () {
                var f = ee(),
                  w = Se() - ht < 500,
                  m = De.tween;
                if ((w || Math.abs(s.getVelocity()) < 10) && !m && !nn && Je !== f) {
                  var k = (f - O) / $,
                    fe = r && !ce ? r.totalProgress() : k,
                    R = w ? 0 : ((fe - zt) / (Se() - hr)) * 1e3 || 0,
                    j = p.utils.clamp(-k, 1 - k, (er(R / 2) * R) / 0.185),
                    be = k + (C.inertia === !1 ? 0 : j),
                    q,
                    H,
                    z = C,
                    st = z.onStart,
                    G = z.onInterrupt,
                    Ue = z.onComplete;
                  if (
                    ((q = Ct(be, s)),
                    _r(q) || (q = be),
                    (H = Math.max(0, Math.round(O + q * $))),
                    f <= V && f >= O && H !== f)
                  ) {
                    if (m && !m._initted && m.data <= er(H - f)) return;
                    (C.inertia === !1 && (j = q - k),
                      De(
                        H,
                        {
                          duration: nt(
                            er((Math.max(er(be - fe), er(q - fe)) * 0.185) / R / 0.05 || 0)
                          ),
                          ease: C.ease || 'power3',
                          data: er(H - f),
                          onInterrupt: function () {
                            return ot.restart(!0) && G && G(s);
                          },
                          onComplete: function () {
                            (s.update(),
                              (Je = ee()),
                              r &&
                                !ce &&
                                (A
                                  ? A.resetTo('totalProgress', q, r._tTime / r._tDur)
                                  : r.progress(q)),
                              (Pt = zt = r && !ce ? r.totalProgress() : s.progress),
                              W && W(s),
                              Ue && Ue(s));
                          },
                        },
                        f,
                        j * $,
                        H - f - j * $
                      ),
                      st && st(s, De.tween));
                  }
                } else s.isActive && Je !== f && ot.restart(!0);
              })
              .pause())),
          d && (bn[d] = s),
          (h = s.trigger = He(h || (u !== !0 && u))),
          (bt = h && h._gsap && h._gsap.stRevert),
          bt && (bt = bt(s)),
          (u = u === !0 ? h : He(u)),
          qe(a) && (a = { targets: h, className: a }),
          u &&
            (v === !1 ||
              v === Qe ||
              (v =
                !v && u.parentNode && u.parentNode.style && et(u.parentNode).display === 'flex'
                  ? !1
                  : re),
            (s.pin = u),
            (xe = p.core.getCache(u)),
            xe.spacer
              ? (vt = xe.pinState)
              : (X &&
                  ((X = He(X)),
                  X && !X.nodeType && (X = X.current || X.nativeElement),
                  (xe.spacerIsNative = !!X),
                  X && (xe.spacerState = Wr(X))),
                (xe.spacer = ue = X || N.createElement('div')),
                ue.classList.add('pin-spacer'),
                d && ue.classList.add('pin-spacer-' + d),
                (xe.pinState = vt = Wr(u))),
            t.force3D !== !1 && p.set(u, { force3D: !0 }),
            (s.spacer = ue = xe.spacer),
            (Zt = et(u)),
            (cr = Zt[v + g.os2]),
            (K = p.getProperty(u)),
            (rt = p.quickSetter(u, g.a, ae)),
            fn(u, ue, Zt),
            (Ft = Wr(u))),
          Z)
        ) {
          ((mt = Wt(Z) ? Bn(Z, Nn) : Nn),
            (c = Hr('scroller-start', d, b, g, mt, 0)),
            (Ge = Hr('scroller-end', d, b, g, mt, 0, c)),
            (Mt = c['offset' + g.op.d2]));
          var ur = He(It(b, 'content') || b);
          ((Xe = this.markerStart = Hr('start', d, ur, g, mt, Mt, 0, y)),
            (We = this.markerEnd = Hr('end', d, ur, g, mt, Mt, 0, y)),
            y && (Qt = p.quickSetter([Xe, We], g.a, ae)),
            !Me &&
              !(pt.length && It(b, 'fixedMarkers') === !0) &&
              (Yo(oe ? Y : b),
              p.set([c, Ge], { force3D: !0 }),
              (Ar = p.quickSetter(c, g.a, ae)),
              (Jt = p.quickSetter(Ge, g.a, ae))));
        }
        if (y) {
          var S = y.vars.onUpdate,
            _ = y.vars.onUpdateParams;
          y.eventCallback('onUpdate', function () {
            (s.update(0, 0, 1), S && S.apply(y, _ || []));
          });
        }
        if (
          ((s.previous = function () {
            return T[T.indexOf(s) - 1];
          }),
          (s.next = function () {
            return T[T.indexOf(s) + 1];
          }),
          (s.revert = function (f, w) {
            if (!w) return s.kill(!0);
            var m = f !== !1 || !s.enabled,
              k = ke;
            m !== s.isReverted &&
              (m &&
                ((it = Math.max(ee(), s.scroll.rec || 0)),
                (_e = s.progress),
                (Nt = r && r.progress())),
              Xe &&
                [Xe, We, c, Ge].forEach(function (fe) {
                  return (fe.style.display = m ? 'none' : 'block');
                }),
              m && ((ke = s), s.update(m)),
              u && (!je || !s.isActive) && (m ? Xo(u, ue, vt) : fn(u, ue, et(u), te)),
              m || s.update(m),
              (ke = k),
              (s.isReverted = m));
          }),
          (s.refresh = function (f, w, m, k) {
            if (!((ke || !s.enabled) && !w)) {
              if (u && f && tt) {
                pe(i, 'scrollEnd', mo);
                return;
              }
              (!Ye && ie && ie(s),
                (ke = s),
                De.tween && !m && (De.tween.kill(), (De.tween = 0)),
                A && A.pause(),
                U &&
                  r &&
                  (r.revert({ kill: !1 }).invalidate(),
                  r.getChildren &&
                    r.getChildren(!0, !0, !1).forEach(function (Dt) {
                      return Dt.vars.immediateRender && Dt.render(0, !0, !0);
                    })),
                s.isReverted || s.revert(!0, !0),
                (s._subPinOffset = !1));
              var fe = Yt(),
                R = St(),
                j = y ? y.duration() : dt(b, g),
                be = $ <= 0.01 || !$,
                q = 0,
                H = k || 0,
                z = Wt(m) ? m.end : t.end,
                st = t.endTrigger || h,
                G = Wt(m) ? m.start : t.start || (t.start === 0 || !h ? 0 : u ? '0 0' : '0 100%'),
                Ue = (s.pinnedContainer = t.pinnedContainer && He(t.pinnedContainer, s)),
                lt = (h && Math.max(0, T.indexOf(s))) || 0,
                he = lt,
                me,
                ye,
                Xt,
                Rr,
                we,
                se,
                ct,
                on,
                An,
                fr,
                ut,
                dr,
                Or;
              for (
                Z && Wt(m) && ((dr = p.getProperty(c, g.p)), (Or = p.getProperty(Ge, g.p)));
                he-- > 0;

              )
                ((se = T[he]),
                  se.end || se.refresh(0, 1) || (ke = s),
                  (ct = se.pin),
                  ct &&
                    (ct === h || ct === u || ct === Ue) &&
                    !se.isReverted &&
                    (fr || (fr = []), fr.unshift(se), se.revert(!0, !0)),
                  se !== T[he] && (lt--, he--));
              for (
                Te(G) && (G = G(s)),
                  G = Ln(G, 'start', s),
                  O =
                    Gn(
                      G,
                      h,
                      fe,
                      g,
                      ee(),
                      Xe,
                      c,
                      s,
                      R,
                      Q,
                      Me,
                      j,
                      y,
                      s._startClamp && '_startClamp'
                    ) || (u ? -0.001 : 0),
                  Te(z) && (z = z(s)),
                  qe(z) &&
                    !z.indexOf('+=') &&
                    (~z.indexOf(' ')
                      ? (z = (qe(G) ? G.split(' ')[0] : '') + z)
                      : ((q = qr(z.substr(2), fe)),
                        (z = qe(G)
                          ? G
                          : (y
                              ? p.utils.mapRange(
                                  0,
                                  y.duration(),
                                  y.scrollTrigger.start,
                                  y.scrollTrigger.end,
                                  O
                                )
                              : O) + q),
                        (st = h))),
                  z = Ln(z, 'end', s),
                  V =
                    Math.max(
                      O,
                      Gn(
                        z || (st ? '100% 0' : j),
                        st,
                        fe,
                        g,
                        ee() + q,
                        We,
                        Ge,
                        s,
                        R,
                        Q,
                        Me,
                        j,
                        y,
                        s._endClamp && '_endClamp'
                      )
                    ) || -0.001,
                  q = 0,
                  he = lt;
                he--;

              )
                ((se = T[he]),
                  (ct = se.pin),
                  ct &&
                    se.start - se._pinPush <= O &&
                    !y &&
                    se.end > 0 &&
                    ((me = se.end - (s._startClamp ? Math.max(0, se.start) : se.start)),
                    ((ct === h && se.start - se._pinPush < O) || ct === Ue) &&
                      isNaN(G) &&
                      (q += me * (1 - se.progress)),
                    ct === u && (H += me)));
              if (
                ((O += q),
                (V += q),
                s._startClamp && (s._startClamp += q),
                s._endClamp && !Ye && ((s._endClamp = V || -0.001), (V = Math.min(V, dt(b, g)))),
                ($ = V - O || ((O -= 0.01) && 0.001)),
                be && (_e = p.utils.clamp(0, 1, p.utils.normalize(O, V, it))),
                (s._pinPush = H),
                Xe &&
                  q &&
                  ((me = {}),
                  (me[g.a] = '+=' + q),
                  Ue && (me[g.p] = '-=' + ee()),
                  p.set([Xe, We], me)),
                u && !(xn && s.end >= dt(b, g)))
              )
                ((me = et(u)),
                  (Rr = g === le),
                  (Xt = ee()),
                  (Ze = parseFloat(K(g.a)) + H),
                  !j &&
                    V > 1 &&
                    ((ut = (oe ? N.scrollingElement || Ve : b).style),
                    (ut = { style: ut, value: ut['overflow' + g.a.toUpperCase()] }),
                    oe &&
                      et(Y)['overflow' + g.a.toUpperCase()] !== 'scroll' &&
                      (ut.style['overflow' + g.a.toUpperCase()] = 'scroll')),
                  fn(u, ue, me),
                  (Ft = Wr(u)),
                  (ye = yt(u, !0)),
                  (on = Me && Lt(b, Rr ? Fe : le)()),
                  v
                    ? ((te = [v + g.os2, $ + H + ae]),
                      (te.t = ue),
                      (he = v === re ? tn(u, g) + $ + H : 0),
                      he &&
                        (te.push(g.d, he + ae),
                        ue.style.flexBasis !== 'auto' && (ue.style.flexBasis = he + ae)),
                      ar(te),
                      Ue &&
                        T.forEach(function (Dt) {
                          Dt.pin === Ue && Dt.vars.pinSpacing !== !1 && (Dt._subPinOffset = !0);
                        }),
                      Me && ee(it))
                    : ((he = tn(u, g)),
                      he && ue.style.flexBasis !== 'auto' && (ue.style.flexBasis = he + ae)),
                  Me &&
                    ((we = {
                      top: ye.top + (Rr ? Xt - O : on) + ae,
                      left: ye.left + (Rr ? on : Xt - O) + ae,
                      boxSizing: 'border-box',
                      position: 'fixed',
                    }),
                    (we[Ut] = we['max' + lr] = Math.ceil(ye.width) + ae),
                    (we[$t] = we['max' + Mn] = Math.ceil(ye.height) + ae),
                    (we[Qe] = we[Qe + Tr] = we[Qe + Sr] = we[Qe + Er] = we[Qe + Cr] = '0'),
                    (we[re] = me[re]),
                    (we[re + Tr] = me[re + Tr]),
                    (we[re + Sr] = me[re + Sr]),
                    (we[re + Er] = me[re + Er]),
                    (we[re + Cr] = me[re + Cr]),
                    (Et = Wo(vt, we, je)),
                    Ye && ee(0)),
                  r
                    ? ((An = r._initted),
                      sn(1),
                      r.render(r.duration(), !0, !0),
                      (_t = K(g.a) - Ze + $ + H),
                      (xt = Math.abs($ - _t) > 1),
                      Me && xt && Et.splice(Et.length - 2, 2),
                      r.render(0, !0, !0),
                      An || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      sn(0))
                    : (_t = $),
                  ut &&
                    (ut.value
                      ? (ut.style['overflow' + g.a.toUpperCase()] = ut.value)
                      : ut.style.removeProperty('overflow-' + g.a)));
              else if (h && ee() && !y)
                for (ye = h.parentNode; ye && ye !== Y; )
                  (ye._pinOffset && ((O -= ye._pinOffset), (V -= ye._pinOffset)),
                    (ye = ye.parentNode));
              (fr &&
                fr.forEach(function (Dt) {
                  return Dt.revert(!1, !0);
                }),
                (s.start = O),
                (s.end = V),
                (Ae = Ne = Ye ? it : ee()),
                !y && !Ye && (Ae < it && ee(it), (s.scroll.rec = 0)),
                s.revert(!1, !0),
                (ht = Se()),
                ot && ((Je = -1), ot.restart(!0)),
                (ke = 0),
                r &&
                  ce &&
                  (r._initted || Nt) &&
                  r.progress() !== Nt &&
                  r.progress(Nt || 0, !0).render(r.time(), !0, !0),
                (be || _e !== s.progress || y || U || (r && !r._initted)) &&
                  (r &&
                    !ce &&
                    (r._initted || _e || r.vars.immediateRender !== !1) &&
                    r.totalProgress(y && O < -0.001 && !_e ? p.utils.normalize(O, V, 0) : _e, !0),
                  (s.progress = be || (Ae - O) / $ === _e ? 0 : _e)),
                u && v && (ue._pinOffset = Math.round(s.progress * _t)),
                A && A.invalidate(),
                isNaN(dr) ||
                  ((dr -= p.getProperty(c, g.p)),
                  (Or -= p.getProperty(Ge, g.p)),
                  Gr(c, g, dr),
                  Gr(Xe, g, dr - (k || 0)),
                  Gr(Ge, g, Or),
                  Gr(We, g, Or - (k || 0))),
                be && !Ye && s.update(),
                I && !Ye && !Tt && ((Tt = !0), I(s), (Tt = !1)));
            }
          }),
          (s.getVelocity = function () {
            return ((ee() - Ne) / (Se() - hr)) * 1e3 || 0;
          }),
          (s.endAnimation = function () {
            (gr(s.callbackAnimation),
              r &&
                (A
                  ? A.progress(1)
                  : r.paused()
                    ? ce || gr(r, s.direction < 0, 1)
                    : gr(r, r.reversed())));
          }),
          (s.labelToScroll = function (f) {
            return (
              (r && r.labels && (O || s.refresh() || O) + (r.labels[f] / r.duration()) * $) || 0
            );
          }),
          (s.getTrailing = function (f) {
            var w = T.indexOf(s),
              m = s.direction > 0 ? T.slice(0, w).reverse() : T.slice(w + 1);
            return (
              qe(f)
                ? m.filter(function (k) {
                    return k.vars.preventOverlaps === f;
                  })
                : m
            ).filter(function (k) {
              return s.direction > 0 ? k.end <= O : k.start >= V;
            });
          }),
          (s.update = function (f, w, m) {
            if (!(y && !m && !f)) {
              var k = Ye === !0 ? it : s.scroll(),
                fe = f ? 0 : (k - O) / $,
                R = fe < 0 ? 0 : fe > 1 ? 1 : fe || 0,
                j = s.progress,
                be,
                q,
                H,
                z,
                st,
                G,
                Ue,
                lt;
              if (
                (w &&
                  ((Ne = Ae),
                  (Ae = y ? ee() : k),
                  C && ((zt = Pt), (Pt = r && !ce ? r.totalProgress() : R))),
                B &&
                  u &&
                  !ke &&
                  !Fr &&
                  tt &&
                  (!R && O < k + ((k - Ne) / (Se() - hr)) * B
                    ? (R = 1e-4)
                    : R === 1 && V > k + ((k - Ne) / (Se() - hr)) * B && (R = 0.9999)),
                R !== j && s.enabled)
              ) {
                if (
                  ((be = s.isActive = !!R && R < 1),
                  (q = !!j && j < 1),
                  (G = be !== q),
                  (st = G || !!R != !!j),
                  (s.direction = R > j ? 1 : -1),
                  (s.progress = R),
                  st &&
                    !ke &&
                    ((H = R && !j ? 0 : R === 1 ? 1 : j === 1 ? 2 : 3),
                    ce &&
                      ((z = (!G && F[H + 1] !== 'none' && F[H + 1]) || F[H]),
                      (lt = r && (z === 'complete' || z === 'reset' || z in r)))),
                  Be &&
                    (G || lt) &&
                    (lt || D || !r) &&
                    (Te(Be)
                      ? Be(s)
                      : s.getTrailing(Be).forEach(function (Xt) {
                          return Xt.endAnimation();
                        })),
                  ce ||
                    (A && !ke && !Fr
                      ? (A._dp._time - A._start !== A._time && A.render(A._dp._time - A._start),
                        A.resetTo
                          ? A.resetTo('totalProgress', R, r._tTime / r._tDur)
                          : ((A.vars.totalProgress = R), A.invalidate().restart()))
                      : r && r.totalProgress(R, !!(ke && (ht || f)))),
                  u)
                ) {
                  if ((f && v && (ue.style[v + g.os2] = cr), !Me)) rt(vr(Ze + _t * R));
                  else if (st) {
                    if (((Ue = !f && R > j && V + 1 > k && k + 1 >= dt(b, g)), je))
                      if (!f && (be || Ue)) {
                        var he = yt(u, !0),
                          me = k - O;
                        Un(
                          u,
                          Y,
                          he.top + (g === le ? me : 0) + ae,
                          he.left + (g === le ? 0 : me) + ae
                        );
                      } else Un(u, ue);
                    (ar(be || Ue ? Et : Ft),
                      (xt && R < 1 && be) || rt(Ze + (R === 1 && !Ue ? _t : 0)));
                  }
                }
                (C && !De.tween && !ke && !Fr && ot.restart(!0),
                  a &&
                    (G || (ge && R && (R < 1 || !an))) &&
                    Pr(a.targets).forEach(function (Xt) {
                      return Xt.classList[be || ge ? 'add' : 'remove'](a.className);
                    }),
                  l && !ce && !f && l(s),
                  st && !ke
                    ? (ce &&
                        (lt &&
                          (z === 'complete'
                            ? r.pause().totalProgress(1)
                            : z === 'reset'
                              ? r.restart(!0).pause()
                              : z === 'restart'
                                ? r.restart(!0)
                                : r[z]()),
                        l && l(s)),
                      (G || !an) &&
                        (x && G && cn(s, x),
                        Pe[H] && cn(s, Pe[H]),
                        ge && (R === 1 ? s.kill(!1, 1) : (Pe[H] = 0)),
                        G || ((H = R === 1 ? 1 : 3), Pe[H] && cn(s, Pe[H]))),
                      Ee &&
                        !be &&
                        Math.abs(s.getVelocity()) > (_r(Ee) ? Ee : 2500) &&
                        (gr(s.callbackAnimation),
                        A ? A.progress(1) : gr(r, z === 'reverse' ? 1 : !R, 1)))
                    : ce && l && !ke && l(s));
              }
              if (Jt) {
                var ye = y ? (k / y.duration()) * (y._caScrollDist || 0) : k;
                (Ar(ye + (c._isFlipped ? 1 : 0)), Jt(ye));
              }
              Qt && Qt((-k / y.duration()) * (y._caScrollDist || 0));
            }
          }),
          (s.enable = function (f, w) {
            s.enabled ||
              ((s.enabled = !0),
              pe(b, 'resize', xr),
              oe || pe(b, 'scroll', tr),
              ie && pe(i, 'refreshInit', ie),
              f !== !1 && ((s.progress = _e = 0), (Ae = Ne = Je = ee())),
              w !== !1 && s.refresh());
          }),
          (s.getTween = function (f) {
            return f && De ? De.tween : A;
          }),
          (s.setPositions = function (f, w, m, k) {
            if (y) {
              var fe = y.scrollTrigger,
                R = y.duration(),
                j = fe.end - fe.start;
              ((f = fe.start + (j * f) / R), (w = fe.start + (j * w) / R));
            }
            (s.refresh(
              !1,
              !1,
              { start: Yn(f, m && !!s._startClamp), end: Yn(w, m && !!s._endClamp) },
              k
            ),
              s.update());
          }),
          (s.adjustPinSpacing = function (f) {
            if (te && f) {
              var w = te.indexOf(g.d) + 1;
              ((te[w] = parseFloat(te[w]) + f + ae), (te[1] = parseFloat(te[1]) + f + ae), ar(te));
            }
          }),
          (s.disable = function (f, w) {
            if (
              s.enabled &&
              (f !== !1 && s.revert(!0, !0),
              (s.enabled = s.isActive = !1),
              w || (A && A.pause()),
              (it = 0),
              xe && (xe.uncache = 1),
              ie && de(i, 'refreshInit', ie),
              ot && (ot.pause(), De.tween && De.tween.kill() && (De.tween = 0)),
              !oe)
            ) {
              for (var m = T.length; m--; ) if (T[m].scroller === b && T[m] !== s) return;
              (de(b, 'resize', xr), oe || de(b, 'scroll', tr));
            }
          }),
          (s.kill = function (f, w) {
            (s.disable(f, w), A && !w && A.kill(), d && delete bn[d]);
            var m = T.indexOf(s);
            (m >= 0 && T.splice(m, 1),
              m === Le && Kr > 0 && Le--,
              (m = 0),
              T.forEach(function (k) {
                return k.scroller === s.scroller && (m = 1);
              }),
              m || Ye || (s.scroll.rec = 0),
              r && ((r.scrollTrigger = null), f && r.revert({ kill: !1 }), w || r.kill()),
              Xe &&
                [Xe, We, c, Ge].forEach(function (k) {
                  return k.parentNode && k.parentNode.removeChild(k);
                }),
              Mr === s && (Mr = 0),
              u &&
                (xe && (xe.uncache = 1),
                (m = 0),
                T.forEach(function (k) {
                  return k.pin === u && m++;
                }),
                m || (xe.spacer = 0)),
              t.onKill && t.onKill(s));
          }),
          T.push(s),
          s.enable(!1, !1),
          bt && bt(s),
          r && r.add && !$)
        ) {
          var L = s.update;
          ((s.update = function () {
            ((s.update = L), P.cache++, O || V || s.refresh());
          }),
            p.delayedCall(0.01, s.update),
            ($ = 0.01),
            (O = V = 0));
        } else s.refresh();
        u && No();
      }),
      (i.register = function (t) {
        return (rr || ((p = t || co()), lo() && window.document && i.enable(), (rr = mr)), rr);
      }),
      (i.defaults = function (t) {
        if (t) for (var r in t) Xr[r] = t[r];
        return Xr;
      }),
      (i.disable = function (t, r) {
        ((mr = 0),
          T.forEach(function (l) {
            return l[r ? 'kill' : 'disable'](t);
          }),
          de(M, 'wheel', tr),
          de(N, 'scroll', tr),
          clearInterval(Yr),
          de(N, 'touchcancel', ft),
          de(Y, 'touchstart', ft),
          Br(de, N, 'pointerdown,touchstart,mousedown', Fn),
          Br(de, N, 'pointerup,touchend,mouseup', zn),
          Qr.kill(),
          zr(de));
        for (var o = 0; o < P.length; o += 3) (Nr(de, P[o], P[o + 1]), Nr(de, P[o], P[o + 2]));
      }),
      (i.enable = function () {
        if (
          ((M = window),
          (N = document),
          (Ve = N.documentElement),
          (Y = N.body),
          p &&
            ((Pr = p.utils.toArray),
            (kr = p.utils.clamp),
            (_n = p.core.context || ft),
            (sn = p.core.suppressOverwrites || ft),
            (Sn = M.history.scrollRestoration || 'auto'),
            (yn = M.pageYOffset || 0),
            p.core.globals('ScrollTrigger', i),
            Y))
        ) {
          ((mr = 1),
            (sr = document.createElement('div')),
            (sr.style.height = '100vh'),
            (sr.style.position = 'absolute'),
            xo(),
            Oo(),
            J.register(p),
            (i.isTouch = J.isTouch),
            (At = J.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (vn = J.isTouch === 1),
            pe(M, 'wheel', tr),
            (kn = [M, N, Ve, Y]),
            p.matchMedia
              ? ((i.matchMedia = function (x) {
                  var I = p.matchMedia(),
                    D;
                  for (D in x) I.add(D, x[D]);
                  return I;
                }),
                p.addEventListener('matchMediaInit', function () {
                  return Dn();
                }),
                p.addEventListener('matchMediaRevert', function () {
                  return vo();
                }),
                p.addEventListener('matchMedia', function () {
                  (Gt(0, 1), jt('matchMedia'));
                }),
                p.matchMedia().add('(orientation: portrait)', function () {
                  return (un(), un);
                }))
              : console.warn('Requires GSAP 3.11.0 or later'),
            un(),
            pe(N, 'scroll', tr));
          var t = Y.hasAttribute('style'),
            r = Y.style,
            o = r.borderTopStyle,
            l = p.core.Animation.prototype,
            a,
            d;
          for (
            l.revert ||
              Object.defineProperty(l, 'revert', {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = 'solid',
              a = yt(Y),
              le.m = Math.round(a.top + le.sc()) || 0,
              Fe.m = Math.round(a.left + Fe.sc()) || 0,
              o ? (r.borderTopStyle = o) : r.removeProperty('border-top-style'),
              t || (Y.setAttribute('style', ''), Y.removeAttribute('style')),
              Yr = setInterval(Xn, 250),
              p.delayedCall(0.5, function () {
                return (Fr = 0);
              }),
              pe(N, 'touchcancel', ft),
              pe(Y, 'touchstart', ft),
              Br(pe, N, 'pointerdown,touchstart,mousedown', Fn),
              Br(pe, N, 'pointerup,touchend,mouseup', zn),
              mn = p.utils.checkPrefix('transform'),
              jr.push(mn),
              rr = Se(),
              Qr = p.delayedCall(0.2, Gt).pause(),
              nr = [
                N,
                'visibilitychange',
                function () {
                  var x = M.innerWidth,
                    I = M.innerHeight;
                  N.hidden ? ((On = x), (In = I)) : (On !== x || In !== I) && xr();
                },
                N,
                'DOMContentLoaded',
                Gt,
                M,
                'load',
                Gt,
                M,
                'resize',
                xr,
              ],
              zr(pe),
              T.forEach(function (x) {
                return x.enable(0, 1);
              }),
              d = 0;
            d < P.length;
            d += 3
          )
            (Nr(de, P[d], P[d + 1]), Nr(de, P[d], P[d + 2]));
        }
      }),
      (i.config = function (t) {
        'limitCallbacks' in t && (an = !!t.limitCallbacks);
        var r = t.syncInterval;
        ((r && clearInterval(Yr)) || ((Yr = r) && setInterval(Xn, r)),
          'ignoreMobileResize' in t && (vn = i.isTouch === 1 && t.ignoreMobileResize),
          'autoRefreshEvents' in t &&
            (zr(de) || zr(pe, t.autoRefreshEvents || 'none'),
            (io = (t.autoRefreshEvents + '').indexOf('resize') === -1)));
      }),
      (i.scrollerProxy = function (t, r) {
        var o = He(t),
          l = P.indexOf(o),
          a = Vt(o);
        (~l && P.splice(l, a ? 6 : 2), r && (a ? pt.unshift(M, r, Y, r, Ve, r) : pt.unshift(o, r)));
      }),
      (i.clearMatchMedia = function (t) {
        T.forEach(function (r) {
          return r._ctx && r._ctx.query === t && r._ctx.kill(!0, !0);
        });
      }),
      (i.isInViewport = function (t, r, o) {
        var l = (qe(t) ? He(t) : t).getBoundingClientRect(),
          a = l[o ? Ut : $t] * r || 0;
        return o
          ? l.right - a > 0 && l.left + a < M.innerWidth
          : l.bottom - a > 0 && l.top + a < M.innerHeight;
      }),
      (i.positionInViewport = function (t, r, o) {
        qe(t) && (t = He(t));
        var l = t.getBoundingClientRect(),
          a = l[o ? Ut : $t],
          d =
            r == null
              ? a / 2
              : r in rn
                ? rn[r] * a
                : ~r.indexOf('%')
                  ? (parseFloat(r) * a) / 100
                  : parseFloat(r) || 0;
        return o ? (l.left + d) / M.innerWidth : (l.top + d) / M.innerHeight;
      }),
      (i.killAll = function (t) {
        if (
          (T.slice(0).forEach(function (o) {
            return o.vars.id !== 'ScrollSmoother' && o.kill();
          }),
          t !== !0)
        ) {
          var r = Kt.killAll || [];
          ((Kt = {}),
            r.forEach(function (o) {
              return o();
            }));
        }
      }),
      i
    );
  })();
E.version = '3.13.0';
E.saveStyles = function (i) {
  return i
    ? Pr(i).forEach(function (e) {
        if (e && e.style) {
          var n = $e.indexOf(e);
          (n >= 0 && $e.splice(n, 5),
            $e.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute('transform'),
              p.core.getCache(e),
              _n()
            ));
        }
      })
    : $e;
};
E.revert = function (i, e) {
  return Dn(!i, e);
};
E.create = function (i, e) {
  return new E(i, e);
};
E.refresh = function (i) {
  return i ? xr(!0) : (rr || E.register()) && Gt(!0);
};
E.update = function (i) {
  return ++P.cache && kt(i === !0 ? 2 : 0);
};
E.clearScrollMemory = _o;
E.maxScroll = function (i, e) {
  return dt(i, e ? Fe : le);
};
E.getScrollFunc = function (i, e) {
  return Lt(He(i), e ? Fe : le);
};
E.getById = function (i) {
  return bn[i];
};
E.getAll = function () {
  return T.filter(function (i) {
    return i.vars.id !== 'ScrollSmoother';
  });
};
E.isScrolling = function () {
  return !!tt;
};
E.snapDirectional = Pn;
E.addEventListener = function (i, e) {
  var n = Kt[i] || (Kt[i] = []);
  ~n.indexOf(e) || n.push(e);
};
E.removeEventListener = function (i, e) {
  var n = Kt[i],
    t = n && n.indexOf(e);
  t >= 0 && n.splice(t, 1);
};
E.batch = function (i, e) {
  var n = [],
    t = {},
    r = e.interval || 0.016,
    o = e.batchMax || 1e9,
    l = function (x, I) {
      var D = [],
        h = [],
        u = p
          .delayedCall(r, function () {
            (I(D, h), (D = []), (h = []));
          })
          .pause();
      return function (v) {
        (D.length || u.restart(!0), D.push(v.trigger), h.push(v), o <= D.length && u.progress(1));
      };
    },
    a;
  for (a in e)
    t[a] = a.substr(0, 2) === 'on' && Te(e[a]) && a !== 'onRefreshInit' ? l(a, e[a]) : e[a];
  return (
    Te(o) &&
      ((o = o()),
      pe(E, 'refresh', function () {
        return (o = e.batchMax());
      })),
    Pr(i).forEach(function (d) {
      var x = {};
      for (a in t) x[a] = t[a];
      ((x.trigger = d), n.push(E.create(x)));
    }),
    n
  );
};
var qn = function (e, n, t, r) {
    return (n > r ? e(r) : n < 0 && e(0), t > r ? (r - n) / (t - n) : t < 0 ? n / (n - t) : 1);
  },
  dn = function i(e, n) {
    (n === !0
      ? e.style.removeProperty('touch-action')
      : (e.style.touchAction =
          n === !0 ? 'auto' : n ? 'pan-' + n + (J.isTouch ? ' pinch-zoom' : '') : 'none'),
      e === Ve && i(Y, n));
  },
  Ur = { auto: 1, scroll: 1 },
  Uo = function (e) {
    var n = e.event,
      t = e.target,
      r = e.axis,
      o = (n.changedTouches ? n.changedTouches[0] : n).target,
      l = o._gsap || p.core.getCache(o),
      a = Se(),
      d;
    if (!l._isScrollT || a - l._isScrollT > 2e3) {
      for (
        ;
        o &&
        o !== Y &&
        ((o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth) ||
          !(Ur[(d = et(o)).overflowY] || Ur[d.overflowX]));

      )
        o = o.parentNode;
      ((l._isScroll = o && o !== t && !Vt(o) && (Ur[(d = et(o)).overflowY] || Ur[d.overflowX])),
        (l._isScrollT = a));
    }
    (l._isScroll || r === 'x') && (n.stopPropagation(), (n._gsapAllow = !0));
  },
  yo = function (e, n, t, r) {
    return J.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: n,
      onWheel: (r = r && Uo),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return t && pe(N, J.eventTypes[0], Kn, !1, !0);
      },
      onDisable: function () {
        return de(N, J.eventTypes[0], Kn, !0);
      },
    });
  },
  $o = /(input|label|select|textarea)/i,
  Vn,
  Kn = function (e) {
    var n = $o.test(e.target.tagName);
    (n || Vn) && ((e._gsapAllow = !0), (Vn = n));
  },
  qo = function (e) {
    (Wt(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = 'wheel,touch'),
      (e.debounce = !!e.debounce),
      (e.id = e.id || 'normalizer'));
    var n = e,
      t = n.normalizeScrollX,
      r = n.momentum,
      o = n.allowNestedScroll,
      l = n.onRelease,
      a,
      d,
      x = He(e.target) || Ve,
      I = p.core.globals().ScrollSmoother,
      D = I && I.get(),
      h =
        At &&
        ((e.content && He(e.content)) || (D && e.content !== !1 && !D.smooth() && D.content())),
      u = Lt(x, le),
      v = Lt(x, Fe),
      U = 1,
      B =
        (J.isTouch && M.visualViewport
          ? M.visualViewport.scale * M.visualViewport.width
          : M.outerWidth) / M.innerWidth,
      ne = 0,
      W = Te(r)
        ? function () {
            return r(a);
          }
        : function () {
            return r || 2.8;
          },
      ge,
      C,
      je = yo(x, e.type, !0, o),
      X = function () {
        return (C = !1);
      },
      y = ft,
      Ee = ft,
      Be = function () {
        ((d = dt(x, le)), (Ee = kr(At ? 1 : 0, d)), t && (y = kr(0, dt(x, Fe))), (ge = qt));
      },
      g = function () {
        ((h._gsap.y = vr(parseFloat(h._gsap.y) + u.offset) + 'px'),
          (h.style.transform =
            'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + parseFloat(h._gsap.y) + ', 0, 1)'),
          (u.offset = u.cacheID = 0));
      },
      ce = function () {
        if (C) {
          requestAnimationFrame(X);
          var Z = vr(a.deltaY / 2),
            Q = Ee(u.v - Z);
          if (h && Q !== u.v + u.offset) {
            u.offset = Q - u.v;
            var s = vr((parseFloat(h && h._gsap.y) || 0) - u.offset);
            ((h.style.transform =
              'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + s + ', 0, 1)'),
              (h._gsap.y = s + 'px'),
              (u.cacheID = P.cache),
              kt());
          }
          return !0;
        }
        (u.offset && g(), (C = !0));
      },
      b,
      gt,
      oe,
      Me,
      Pe = function () {
        (Be(),
          b.isActive() &&
            b.vars.scrollY > d &&
            (u() > d ? b.progress(1) && u(d) : b.resetTo('scrollY', d)));
      };
    return (
      h && p.set(h, { y: '+=0' }),
      (e.ignoreCheck = function (F) {
        return (
          (At && F.type === 'touchmove' && ce()) ||
          (U > 1.05 && F.type !== 'touchstart') ||
          a.isGesturing ||
          (F.touches && F.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        C = !1;
        var F = U;
        ((U = vr(((M.visualViewport && M.visualViewport.scale) || 1) / B)),
          b.pause(),
          F !== U && dn(x, U > 1.01 ? !0 : t ? !1 : 'x'),
          (gt = v()),
          (oe = u()),
          Be(),
          (ge = qt));
      }),
      (e.onRelease = e.onGestureStart =
        function (F, Z) {
          if ((u.offset && g(), !Z)) Me.restart(!0);
          else {
            P.cache++;
            var Q = W(),
              s,
              ie;
            (t &&
              ((s = v()),
              (ie = s + (Q * 0.05 * -F.velocityX) / 0.227),
              (Q *= qn(v, s, ie, dt(x, Fe))),
              (b.vars.scrollX = y(ie))),
              (s = u()),
              (ie = s + (Q * 0.05 * -F.velocityY) / 0.227),
              (Q *= qn(u, s, ie, dt(x, le))),
              (b.vars.scrollY = Ee(ie)),
              b.invalidate().duration(Q).play(0.01),
              ((At && b.vars.scrollY >= d) || s >= d - 1) &&
                p.to({}, { onUpdate: Pe, duration: Q }));
          }
          l && l(F);
        }),
      (e.onWheel = function () {
        (b._ts && b.pause(), Se() - ne > 1e3 && ((ge = 0), (ne = Se())));
      }),
      (e.onChange = function (F, Z, Q, s, ie) {
        if (
          (qt !== ge && Be(),
          Z && t && v(y(s[2] === Z ? gt + (F.startX - F.x) : v() + Z - s[1])),
          Q)
        ) {
          u.offset && g();
          var Yt = ie[2] === Q,
            St = Yt ? oe + F.startY - F.y : u() + Q - ie[1],
            Je = Ee(St);
          (Yt && St !== Je && (oe += Je - St), u(Je));
        }
        (Q || Z) && kt();
      }),
      (e.onEnable = function () {
        (dn(x, t ? !1 : 'x'),
          E.addEventListener('refresh', Pe),
          pe(M, 'resize', Pe),
          u.smooth && ((u.target.style.scrollBehavior = 'auto'), (u.smooth = v.smooth = !1)),
          je.enable());
      }),
      (e.onDisable = function () {
        (dn(x, !0), de(M, 'resize', Pe), E.removeEventListener('refresh', Pe), je.kill());
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (a = new J(e)),
      (a.iOS = At),
      At && !u() && u(1),
      At && p.ticker.add(ft),
      (Me = a._dc),
      (b = p.to(a, {
        ease: 'power4',
        paused: !0,
        inherit: !1,
        scrollX: t ? '+=0.1' : '+=0',
        scrollY: '+=0.1',
        modifiers: {
          scrollY: bo(u, u(), function () {
            return b.pause();
          }),
        },
        onUpdate: kt,
        onComplete: Me.vars.onComplete,
      })),
      a
    );
  };
E.sort = function (i) {
  if (Te(i)) return T.sort(i);
  var e = M.pageYOffset || 0;
  return (
    E.getAll().forEach(function (n) {
      return (n._sortY = n.trigger
        ? e + n.trigger.getBoundingClientRect().top
        : n.start + M.innerHeight);
    }),
    T.sort(
      i ||
        function (n, t) {
          return (
            (n.vars.refreshPriority || 0) * -1e6 +
            (n.vars.containerAnimation ? 1e6 : n._sortY) -
            ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6)
          );
        }
    )
  );
};
E.observe = function (i) {
  return new J(i);
};
E.normalizeScroll = function (i) {
  if (typeof i > 'u') return Ie;
  if (i === !0 && Ie) return Ie.enable();
  if (i === !1) {
    (Ie && Ie.kill(), (Ie = i));
    return;
  }
  var e = i instanceof J ? i : qo(i);
  return (Ie && Ie.target === e.target && Ie.kill(), Vt(e.target) && (Ie = e), e);
};
E.core = {
  _getVelocityProp: hn,
  _inputObserver: yo,
  _scrollers: P,
  _proxies: pt,
  bridge: {
    ss: function () {
      (tt || jt('scrollStart'), (tt = Se()));
    },
    ref: function () {
      return ke;
    },
  },
};
co() && p.registerPlugin(E);
ze.registerPlugin(E);
const Ce = {
    gentle: 'power1.out',
    warm: 'power2.out',
    friendly: 'back.out(1.2)',
    caring: 'elastic.out(1, 0.5)',
    trustworthy: 'expo.out',
  },
  wo = {
    fadeUp: { from: { opacity: 0, y: 40 }, to: { opacity: 1, y: 0 }, duration: 0.8, ease: Ce.warm },
    fadeIn: { from: { opacity: 0 }, to: { opacity: 1 }, duration: 0.6, ease: Ce.gentle },
    slideInLeft: {
      from: { opacity: 0, x: -40 },
      to: { opacity: 1, x: 0 },
      duration: 0.7,
      ease: Ce.warm,
    },
    slideInRight: {
      from: { opacity: 0, x: 40 },
      to: { opacity: 1, x: 0 },
      duration: 0.7,
      ease: Ce.warm,
    },
    scaleIn: {
      from: { opacity: 0, scale: 0.95 },
      to: { opacity: 1, scale: 1 },
      duration: 0.6,
      ease: Ce.friendly,
    },
    stagger: {
      from: { opacity: 0, y: 20 },
      to: { opacity: 1, y: 0 },
      duration: 0.5,
      ease: Ce.warm,
      stagger: 0.1,
    },
    kakiWelcome: {
      from: { opacity: 0, y: 30, scale: 0.9 },
      to: { opacity: 1, y: 0, scale: 1 },
      duration: 1,
      ease: Ce.friendly,
    },
    kakiFadeIn: {
      from: { opacity: 0, y: 20 },
      to: { opacity: 1, y: 0 },
      duration: 0.8,
      ease: Ce.caring,
    },
  };
function jn(i, e = 'fadeUp', n = {}) {
  const t = wo[e];
  if (!t) {
    console.warn(`Animation preset "${e}" not found`);
    return;
  }
  const r = {
    trigger: i,
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none none',
    once: !0,
    ...n,
  };
  ze.set(i, t.from);
  const o = ze.timeline();
  return (
    t.stagger
      ? o.to(i, { ...t.to, duration: t.duration, ease: t.ease, stagger: t.stagger })
      : o.to(i, { ...t.to, duration: t.duration, ease: t.ease }),
    E.create({ ...r, animation: o }),
    o
  );
}
function ni(i, e, n = {}) {
  const t = { duration: 2, ease: 'power2.out', trigger: i, start: 'top 80%', ...n },
    r = { value: 0 };
  ze.to(r, {
    value: e,
    duration: t.duration,
    ease: t.ease,
    onUpdate: () => {
      const o = document.querySelector(i);
      o && (o.textContent = Math.round(r.value).toString());
    },
    scrollTrigger: {
      trigger: t.trigger,
      start: t.start,
      toggleActions: 'play none none none',
      once: !0,
    },
  });
}
function oi(i, e, n = 'fadeUp', t = {}) {
  const r = wo[n];
  if (!r) {
    console.warn(`Animation preset "${n}" not found`);
    return;
  }
  const o = `${i} ${e}`;
  ze.set(o, r.from);
  const l = ze.timeline();
  return (
    l.to(o, { ...r.to, duration: r.duration, ease: r.ease, stagger: t.stagger || 0.1 }),
    E.create({
      trigger: i,
      start: 'top 80%',
      toggleActions: 'play none none none',
      once: !0,
      animation: l,
      ...t,
    }),
    l
  );
}
function Vo(i, e = {}) {
  document.querySelectorAll(i).forEach(t => {
    const r = t;
    (r.addEventListener('mouseenter', () => {
      ze.to(t, { scale: 1.05, y: -2, duration: 0.3, ease: Ce.friendly, ...e.hover });
    }),
      r.addEventListener('mouseleave', () => {
        ze.to(t, { scale: 1, y: 0, duration: 0.3, ease: Ce.warm, ...e.leave });
      }));
  });
}
function Ko(i) {
  document.querySelectorAll(i).forEach(n => {
    const t = n;
    (t.addEventListener('mousedown', () => {
      ze.to(n, { scale: 0.95, duration: 0.1, ease: Ce.trustworthy });
    }),
      t.addEventListener('mouseup', () => {
        ze.to(n, { scale: 1.05, duration: 0.2, ease: Ce.friendly });
      }),
      t.addEventListener('mouseleave', () => {
        ze.to(n, { scale: 1, duration: 0.2, ease: Ce.warm });
      }));
  });
}
function jo(i) {
  document.querySelectorAll(i).forEach(n => {
    const t = n;
    (ze.set(n, { transformOrigin: 'center center' }),
      t.addEventListener('mouseenter', () => {
        ze.timeline()
          .to(n, { y: -8, duration: 0.4, ease: Ce.caring })
          .to(n, { scale: 1.02, duration: 0.3, ease: Ce.friendly }, '-=0.2');
      }),
      t.addEventListener('mouseleave', () => {
        ze.to(n, { y: 0, scale: 1, duration: 0.4, ease: Ce.warm });
      }));
  });
}
function Jo(i) {
  document.querySelectorAll(i).forEach(n => {
    ze.to(n, { scale: 1.02, duration: 2, ease: 'sine.inOut', yoyo: !0, repeat: -1 });
  });
}
function ii() {
  (Vo('.service-card'),
    Ko('.hero-cta, .btn-primary'),
    jo('.bg-white.rounded-3xl, .rounded-2xl.shadow'),
    Jo('.hero-cta'));
}
var Zo = To(
  `<section id="about" class="section-padding bg-lxk-cream relative overflow-hidden"><div class="absolute inset-0 z-0"><div class="paint-splash-2" style="top: 20%; right: 5%; transform: scale(0.7); opacity: 0.4;"></div> <div class="paint-splash-3" style="bottom: 15%; left: 10%; transform: scale(0.6); opacity: 0.3;"></div> <div class="floating-leaf" style="top: 40%; right: 15%; animation-delay: -8s;"></div> <div class="floating-butterfly" style="bottom: 50%; right: 25%; animation-delay: -3s;"></div> <div class="circle-frame" style="width: 200px; height: 200px; top: 60%; left: 5%; opacity: 0.2; animation-delay: -10s;"></div></div> <div class="container-custom relative z-10"><div class="grid lg:grid-cols-2 gap-16 items-center mb-24"><div class="about-visual"><div class="bg-gradient-to-br from-lxk-sage/20 to-lxk-peach/20 rounded-3xl h-96 flex items-center justify-center overflow-hidden relative"><div class="relative w-80 h-64 transform rotate-2"><div class="absolute bottom-0 w-full h-48 bg-gradient-to-br from-amber-50 to-amber-100 rounded-t-2xl shadow-inner"></div> <div class="absolute bottom-12 left-8 w-24 h-16"><div class="w-full h-1 bg-gray-300 rounded-full mb-1"></div> <div class="w-full h-14 bg-gray-800 rounded-lg shadow-lg"><div class="w-full h-12 bg-gray-900 rounded-lg m-1"></div></div></div> <div class="absolute bottom-16 right-16 w-6 h-8"><div class="w-full h-6 bg-white rounded-b-full shadow-md border border-gray-200"><div class="w-full h-4 bg-gradient-to-b from-amber-700 to-amber-900 rounded-b-full"></div></div> <div class="absolute -top-2 left-2 w-2 opacity-30"><div class="w-0.5 h-3 bg-gray-400 rounded-full animate-pulse"></div> <div class="w-0.5 h-2 bg-gray-300 rounded-full animate-pulse ml-1" style="animation-delay: 0.3s;"></div></div></div> <div class="absolute bottom-20 left-20 w-16 h-12 bg-lxk-cream rounded shadow-sm border border-gray-200 transform -rotate-12"><div class="p-1 space-y-0.5"><div class="w-8 h-0.5 bg-lxk-sage rounded"></div> <div class="w-6 h-0.5 bg-gray-400 rounded"></div> <div class="w-10 h-0.5 bg-gray-300 rounded"></div> <div class="w-4 h-0.5 bg-gray-300 rounded"></div></div></div> <div class="absolute bottom-24 left-32 w-12 h-1 bg-yellow-300 rounded-full shadow-sm transform rotate-45"><div class="absolute right-0 w-2 h-1 bg-pink-200 rounded-r-full"></div> <div class="absolute left-0 w-1 h-1 bg-gray-600 rounded-l-full"></div></div> <div class="absolute bottom-12 right-4 w-8 h-12"><div class="absolute bottom-0 w-8 h-6 bg-orange-400 rounded-b-lg border-2 border-amber-600"></div> <div class="absolute bottom-4 left-1 w-6 h-8 bg-lxk-sage rounded-full opacity-80"><div class="absolute top-1 left-2 w-2 h-4 bg-lxk-mint rounded-full opacity-60"></div> <div class="absolute top-0 right-1 w-1 h-3 bg-emerald-400 rounded-full opacity-70"></div></div></div> <div class="absolute top-0 right-0 w-32 h-20 bg-gradient-to-bl from-yellow-200/40 to-transparent rounded-bl-3xl"></div></div> <div class="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg"><div class="flex items-center space-x-3"><div class="flex -space-x-2"><div class="w-6 h-6 bg-lxk-sage rounded-full border-2 border-white shadow-sm"></div> <div class="w-6 h-6 bg-lxk-peach rounded-full border-2 border-white shadow-sm"></div></div> <span class="text-sm font-medium text-lxk-warm-gray">Working Together</span></div></div></div></div> <div class="about-content"><h2 class="text-5xl lg:text-6xl font-bold text-lxk-warm-gray mb-8 leading-tight">Where Creativity Meets <span class="text-lxk-peach">Friendship</span></h2> <p class="text-xl text-gray-600 mb-8 leading-relaxed">In Singapore, "kaki" means friend. We're the creative kakis who make business dreams reality.</p> <a href="#/about-us" class="text-lxk-sage hover:text-lxk-soft-teal font-medium text-lg">Meet the team →</a></div></div> <div class="text-center mb-16 animate-on-scroll"><h3 class="text-4xl font-bold text-lxk-warm-gray mb-4">Our Kaki Way</h3> <p class="text-xl text-gray-600 max-w-3xl mx-auto">How friendship-first values translate into exceptional results — our proven approach to creative collaboration.</p></div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"><div class="painterly-card p-6 animate-on-scroll group hover:scale-105 transition-all duration-300"><div class="bg-gradient-to-br from-lxk-sage/20 to-lxk-mint/20 rounded-xl p-4 mb-4 text-center"><div class="text-3xl mb-2">☕</div> <div class="text-xs font-semibold text-lxk-sage uppercase tracking-wide">Step 1</div></div> <h4 class="text-lg font-bold text-lxk-sage mb-2">Real Conversations</h4> <p class="text-sm text-gray-600 mb-3">Coffee chats, not corporate meetings. We listen deeply to understand your vision, challenges, and dreams.</p> <div class="text-xs text-lxk-coral font-medium">→ Discovery & Strategy</div></div> <div class="painterly-card p-6 animate-on-scroll group hover:scale-105 transition-all duration-300"><div class="bg-gradient-to-br from-lxk-peach/20 to-lxk-coral/20 rounded-xl p-4 mb-4 text-center"><div class="w-8 h-8 bg-lxk-peach rounded-lg mx-auto mb-2 flex items-center justify-center"><div class="w-4 h-4 border-2 border-white rounded"></div></div> <div class="text-xs font-semibold text-lxk-peach uppercase tracking-wide">Step 2</div></div> <h4 class="text-lg font-bold text-lxk-peach mb-2">Genuine Collaboration</h4> <p class="text-sm text-gray-600 mb-3">Your ideas matter. We co-create through regular feedback, iterations, and shared decision-making.</p> <div class="text-xs text-lxk-coral font-medium">→ Design & Feedback</div></div> <div class="painterly-card p-6 animate-on-scroll group hover:scale-105 transition-all duration-300"><div class="bg-gradient-to-br from-lxk-coral/20 to-lxk-sage/20 rounded-xl p-4 mb-4 text-center"><div class="w-8 h-8 bg-lxk-coral rounded-lg mx-auto mb-2 flex items-center justify-center"><div class="w-5 h-3 bg-white rounded-sm"></div></div> <div class="text-xs font-semibold text-lxk-coral uppercase tracking-wide">Step 3</div></div> <h4 class="text-lg font-bold text-lxk-coral mb-2">Singapore Heart</h4> <p class="text-sm text-gray-600 mb-3">We get the local market, culture, and business landscape. Your success is our kaki success.</p> <div class="text-xs text-lxk-coral font-medium">→ Local Understanding</div></div> <div class="painterly-card p-6 animate-on-scroll group hover:scale-105 transition-all duration-300"><div class="bg-gradient-to-br from-lxk-mint/20 to-lxk-peach/20 rounded-xl p-4 mb-4 text-center"><div class="w-8 h-8 bg-lxk-mint rounded-lg mx-auto mb-2 flex items-center justify-center"><div class="w-4 h-4 bg-white rounded-full"></div></div> <div class="text-xs font-semibold text-lxk-mint uppercase tracking-wide">Step 4</div></div> <h4 class="text-lg font-bold text-lxk-sage mb-2">Beautiful Results</h4> <p class="text-sm text-gray-600 mb-3">Polished delivery with ongoing support. We celebrate your wins and stay connected as kakis.</p> <div class="text-xs text-lxk-coral font-medium">→ Delivery & Support</div></div></div> <div class="bg-white/60 backdrop-blur rounded-3xl p-8 mb-16 animate-on-scroll"><h4 class="text-2xl font-bold text-lxk-warm-gray mb-6 text-center">The Journey Together</h4> <div class="flex flex-col md:flex-row items-center justify-between gap-4"><div class="flex items-center gap-3"><div class="w-8 h-8 bg-lxk-sage rounded-full flex items-center justify-center text-white text-sm font-bold">1</div> <span class="text-sm font-medium text-gray-700">Kopi & Dreams</span></div> <div class="hidden md:block w-8 h-px bg-gradient-to-r from-lxk-sage to-lxk-peach"></div> <div class="flex items-center gap-3"><div class="w-8 h-8 bg-lxk-peach rounded-full flex items-center justify-center text-white text-sm font-bold">2</div> <span class="text-sm font-medium text-gray-700">Create Together</span></div> <div class="hidden md:block w-8 h-px bg-gradient-to-r from-lxk-peach to-lxk-coral"></div> <div class="flex items-center gap-3"><div class="w-8 h-8 bg-lxk-coral rounded-full flex items-center justify-center text-white text-sm font-bold">3</div> <span class="text-sm font-medium text-gray-700">Launch & Grow</span></div> <div class="hidden md:block w-8 h-px bg-gradient-to-r from-lxk-coral to-lxk-sage"></div> <div class="flex items-center gap-3"><div class="w-8 h-8 bg-lxk-sage rounded-full flex items-center justify-center text-white text-sm font-bold">∞</div> <span class="text-sm font-medium text-gray-700">Kakis Forever</span></div></div></div> <div class="text-center"><div class="bg-gradient-to-r from-lxk-sage to-lxk-peach rounded-3xl p-16 text-white"><h3 class="text-4xl font-bold mb-6">Ready to Be Kakis?</h3> <a href="#contact" class="inline-flex items-center bg-white text-lxk-sage px-10 py-5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg group">Start Our Journey Together <div class="ml-3 w-6 h-6 bg-lxk-sage/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform"><span class="text-sm">→</span></div></a></div></div></div></section>`
);
function si(i, e) {
  (So(e, !1),
    Co(() => {
      (jn('.about-visual', 'slideInLeft'), jn('.about-content', 'slideInRight'));
    }),
    ko());
  var n = Zo();
  (Eo(i, n), Mo());
}
export { si as A, jn as a, oi as b, ni as c, ii as i };
