! function (t) {
    var e = {};

    function r(n) {
        if (e[n]) return e[n].exports;
        var u = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(u.exports, u, u.exports, r), u.l = !0, u.exports
    }
    r.m = t, r.c = e, r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var u in t) r.d(n, u, function (e) {
                return t[e]
            }.bind(null, u));
        return n
    }, r.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 954)
}({
    954: function (t, e) {
        var r = document.getElementById(document.currentScript.id.replace("ExternalScript", "")),
            n = document.currentScript.getAttribute("data-height"),
            u = document.currentScript.getAttribute("data-title"),
            i = document.currentScript.getAttribute("data-width"),
            o = document.currentScript.getAttribute("data-src"),
            c = document.createElement("iframe");
        c.setAttribute("width", i), c.setAttribute("height", n), c.setAttribute("title", u), c.setAttribute("src", o), r.appendChild(c)
    }
});