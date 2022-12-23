(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) l(n);
  new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList")
        for (const h of r.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && l(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(n) {
    const r = {};
    return (
      n.integrity && (r.integrity = n.integrity),
      n.referrerpolicy && (r.referrerPolicy = n.referrerpolicy),
      n.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : n.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function l(n) {
    if (n.ep) return;
    n.ep = !0;
    const r = s(n);
    fetch(n.href, r);
  }
})();
var _ = (e, t, s) => {
    if (!t.has(e)) throw TypeError("Cannot " + s);
  },
  i = (e, t, s) => (
    _(e, t, "read from private field"), s ? s.call(e) : t.get(e)
  ),
  o = (e, t, s) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, s);
  },
  a = (e, t, s, l) => (
    _(e, t, "write to private field"), l ? l.call(e, s) : t.set(e, s), s
  ),
  p = (e, t, s) => (_(e, t, "access private method"), s),
  d,
  k,
  b,
  L,
  M,
  f,
  m,
  x,
  I,
  W,
  E,
  w,
  y,
  P,
  T,
  S,
  q,
  O,
  B;
class C {
  constructor({
    trigger: t,
    onEnter: s,
    onLeaveBack: l,
    onLeave: n,
    onEnterBack: r,
    startViewPortPoint: h,
    startTriggerPoint: c,
    endViewPortPoint: u,
    endTriggerPoint: v,
  }) {
    if (
      (o(this, P),
      o(this, S),
      o(this, O),
      o(this, d, null),
      o(this, k, void 0),
      o(this, b, void 0),
      o(this, L, void 0),
      o(this, M, void 0),
      o(this, f, null),
      o(this, m, null),
      o(this, x, 0),
      o(this, I, 0),
      o(this, W, void 0),
      o(this, E, void 0),
      o(this, w, !1),
      o(this, y, !1),
      !t)
    ) {
      console.warn("Trigger element is Null");
      return;
    }
    a(this, d, t),
      a(this, k, s),
      a(this, b, l),
      a(this, L, n),
      a(this, M, r),
      h !== void 0 && a(this, x, h),
      c !== void 0 && a(this, I, c),
      a(this, W, u),
      a(this, E, v),
      p(this, O, B).call(this),
      window.addEventListener("resize", () => {
        this.disconnectObserve(),
          a(this, f, null),
          a(this, m, null),
          p(this, O, B).call(this);
      });
  }
  disconnectObserve() {
    var t, s;
    (t = i(this, f)) == null || t.disconnect(),
      (s = i(this, m)) == null || s.disconnect();
  }
}
(d = new WeakMap()),
  (k = new WeakMap()),
  (b = new WeakMap()),
  (L = new WeakMap()),
  (M = new WeakMap()),
  (f = new WeakMap()),
  (m = new WeakMap()),
  (x = new WeakMap()),
  (I = new WeakMap()),
  (W = new WeakMap()),
  (E = new WeakMap()),
  (w = new WeakMap()),
  (y = new WeakMap()),
  (P = new WeakSet()),
  (T = function (e) {
    const t = window.innerHeight;
    return e === void 0
      ? t
      : typeof e == "number"
      ? t - e
      : e.unit === "px"
      ? t - e.value
      : (t * (100 - e.value)) / 100;
  }),
  (S = new WeakSet()),
  (q = function (e) {
    if (!i(this, d)) return;
    const t = i(this, d).clientHeight;
    return e === void 0
      ? 0
      : typeof e == "number"
      ? e
      : e.unit === "px"
      ? e.value
      : (t * e.value) / 100;
  }),
  (O = new WeakSet()),
  (B = function () {
    if (!i(this, d)) return;
    const e = [0, 1],
      t = (c) => {
        var u, v;
        const g =
          ((v = (u = c[0].rootBounds) == null ? void 0 : u.y) != null ? v : 0) -
          c[0].boundingClientRect.y;
        c[0].isIntersecting &&
          g < 0 &&
          (i(this, w) || a(this, w, !0), i(this, k) && i(this, k).call(this)),
          !c[0].isIntersecting &&
            g < 0 &&
            i(this, w) &&
            i(this, b) &&
            i(this, b).call(this);
      },
      s = (c) => {
        var u, v;
        const g =
          ((v = (u = c[0].rootBounds) == null ? void 0 : u.y) != null ? v : 0) -
          c[0].boundingClientRect.y;
        c[0].isIntersecting &&
          g < 0 &&
          (i(this, y) || a(this, y, !0), i(this, L) && i(this, L).call(this)),
          !c[0].isIntersecting &&
            g < 0 &&
            i(this, y) &&
            i(this, M) &&
            i(this, M).call(this);
      },
      l = p(this, P, T).call(this, i(this, x)),
      n = p(this, S, q).call(this, i(this, I));
    if (
      n === void 0 ||
      (a(
        this,
        f,
        new IntersectionObserver(t, {
          rootMargin: `${n + l}px 0px ${-(n + l)}px`,
          threshold: e,
        })
      ),
      i(this, f).observe(i(this, d)),
      i(this, W) === void 0 && i(this, E) === void 0)
    )
      return;
    const r = p(this, P, T).call(this, i(this, W)),
      h = p(this, S, q).call(this, i(this, E));
    h !== void 0 &&
      (a(
        this,
        m,
        new IntersectionObserver(s, {
          rootMargin: `${r + h}px 0px ${-(r + h)}px`,
          threshold: e,
        })
      ),
      i(this, m).observe(i(this, d)));
  });
document.addEventListener("DOMContentLoaded", () => {
  let e = !1;
  const t = document.querySelector(".hamburger-button"),
    s = document.querySelector(".header");
  t.addEventListener("click", () => {
    (e = !e),
      e
        ? (s.classList.add("is-active"), t.classList.add("is-active"))
        : (s.classList.remove("is-active"), t.classList.remove("is-active"));
  });
  const l = document.querySelector(".missions__portrait");
  new C({
    trigger: l,
    onEnter: () => {
      document
        .querySelector(".missions__portrait-photo")
        .classList.contains(".is-show") ||
        document
          .querySelector(".missions__portrait-photo")
          .classList.add("is-show");
    },
    startViewPortPoint: { value: 70, unit: "%" },
    startTriggerPoint: { value: 20, unit: "%" },
  });
});
