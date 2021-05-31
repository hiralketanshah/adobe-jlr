! function (e) {
    function t(n) {
        if (r[n]) return r[n].exports;
        var a = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, t), a.l = !0, a.exports
    }
    var r = {};
    t.m = e, t.c = r, t.d = function (e, r, n) {
        t.o(e, r) || Object.defineProperty(e, r, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, t.n = function (e) {
        var r = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(r, "a", r), r
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 567)
}({
    567: function (e, t, r) {
        "use strict";
        var n = document.querySelector(".dxnav-header"),
            a = n.getAttribute("data-retailer-name"),
            o = n.getAttribute("data-retailer-url"),
            i = n.getAttribute("data-locale"),
            u = n.getAttribute("data-retailer-expiry-period"),
            l = document.getElementById("NaaSWindow").contentWindow,
            c = {
                retailerName: a,
                retailerUrl: o,
                locale: i,
                expiryPeriod: u
            };
        l.postMessage(c, "*")
    }
});