(() => {
  "use strict";
  const e = () => {
      const {
        userAgent: e
      } = navigator;
      return e
    },
    t = () => {
      const t = e(),
        n = {
          isChrome: t.indexOf("Chrome") > -1,
          isMsEdge: t.indexOf("Edge") > -1,
          isExplorer: t.indexOf("MSIE") > -1 || t.indexOf("Trident") > -1,
          isFirefox: t.indexOf("Firefox") > -1,
          isSafari: t.indexOf("Safari") > -1,
          isOpera: t.toLowerCase().indexOf("op") > -1
        };
      return n.isChrome && n.isSafari && (n.isSafari = !1), n.isChrome && n.isOpera && (n.isChrome = !1), n
    },
    n = e => {
      const t = {
        msie: "Internet Explorer",
        edg: "Edge"
      };
      return e && t[e.toLowerCase()] ? t[e.toLowerCase()] : e
    };
  const r = (e, t, n, r = !1) => {
      const o = (e => {
          if (!e) return "";
          const t = new Date;
          return t.setTime(t.getTime() + 24 * e * 60 * 60 * 1e3), `; expires=${t.toGMTString()}`
        })(n),
        i = r ? ((e = document.location.hostname) => `; domain=.${e.replace("www.","")}`)() : "";
      document.cookie = `${e}=${t}${o}${i}; path=/`
    },
    {
      SPACE: o,
      RETURN: i
    } = {
      BACKSPACE: 8,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ESC: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      RETURN: 13,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    },
    s = "cmp-legacyBrowserNotification",
    c = `JLR_${s}`;
  ! function () {
    const a = document.querySelector(".cmp-legacyBrowserNotification");
    if (!a) return;

    function u() {
       a.setAttribute("class", `${s}`), r(c, 1, a.getAttribute("data-days"))
    }
    const f = a.querySelector(".cmp-legacyBrowserNotification__close");
    f.addEventListener("click", u), f.addEventListener("keypress", (e => {
        e.preventDefault();
        const {
          keyCode: t
        } = e;
        t !== o && t !== i || u()
      })),
      function () {
        if (function () {
            const {
              isMsEdge: e,
              isExplorer: n
            } = t();
            return e || n
          }()) return !0;
        const r = {
            Edge: 80,
            Chrome: 80,
            Firefox: 80,
            Safari: 13
          },
          {
            browser: o,
            version: i
          } = (e => {
            const t = ["Edg", "Edge", "MSIE", "Trident", "Chrome", "Firefox", "Safari", "Opera", "Netscape"];
            for (let r = 0; r < t.length; r += 1) {
              const o = t[r];
              if (!e || -1 === e.indexOf(o)) continue;
              const i = new RegExp(`(${o}.(\\d+.\\d+))`, "i"),
                s = new RegExp("(Version.(\\d+.\\d+))", "i"),
                c = e.match(i),
                a = e.match(s);
              if (null === c && null === a) continue;
              const [, , u] = c, [, , f] = null !== a ? a : [], d = f || u;
              return {
                browser: n(o),
                version: parseInt(d, 10)
              }
            }
            return {
              browser: "Unknown",
              version: 0
            }
          })(e());
        return "Unknown" === o || function () {
          const {
            isOpera: e
          } = t();
          return e
        }() || !r[o] ? !("function" == typeof BigInt) : i < r[o]
      }() && null === (e => {
        const t = document.cookie.split(";");
        if (t.length < 1) return null;
        for (let n = 0; n < t.length; n += 1) {
          const r = t[n].split("=");
          if (r[0].replace(/\s/g, "") === e) return r[1]
        }
        return null
      })(c) && a.setAttribute("class", `${s} ${s}--show`)
  }()
})();