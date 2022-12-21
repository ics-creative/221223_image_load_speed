import {
  createApp as s,
  ref as l,
  onMounted as u,
} from "https://unpkg.com/vue@3.2.45/dist/vue.esm-browser.prod.js";
(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) n(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const c of t.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && n(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = i(e);
    fetch(e.href, t);
  }
})();
const d = s({
  setup() {
    const r = l(!0),
      o = () => {
        r.value = !r.value;
      };
    return (
      u(() => {
        document.querySelectorAll("a[href='#']").forEach((i) => {
          i.addEventListener("click", (n) => {
            n.preventDefault();
          });
        }),
          document
            .querySelector(".divAccordion .outline")
            .addEventListener("click", () => {
              document
                .querySelector(".divAccordion")
                .classList.toggle("isActive");
            });
      }),
      { isShowNgCode: r, switchCode: o }
    );
  },
});
d.mount("#app");
