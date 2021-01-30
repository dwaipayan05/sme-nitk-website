/*Modernizr - header*/
/* Modernizr 2.6.3 (Custom Build) | MIT & BSD
 * Build: https://modernizr.com/download/#-csstransitions-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
 */
;
window.Modernizr = function(a, b, c) {
    function x(a) {
      j.cssText = a
    }

    function y(a, b) {
      return x(prefixes.join(a + ";") + (b || ""))
    }

    function z(a, b) {
      return typeof a === b
    }

    function A(a, b) {
      return !!~("" + a).indexOf(b)
    }

    function B(a, b) {
      for (var d in a) {
        var e = a[d];
        if (!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
      }
      return !1
    }

    function C(a, b, d) {
      for (var e in a) {
        var f = b[a[e]];
        if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
      }
      return !1
    }

    function D(a, b, c) {
      var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + " " + n.join(d + " ") + d).split(" ");
      return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
    }
    var d = "2.6.3",
      e = {},
      f = !0,
      g = b.documentElement,
      h = "modernizr",
      i = b.createElement(h),
      j = i.style,
      k, l = {}.toString,
      m = "Webkit Moz O ms",
      n = m.split(" "),
      o = m.toLowerCase().split(" "),
      p = {},
      q = {},
      r = {},
      s = [],
      t = s.slice,
      u, v = {}.hasOwnProperty,
      w;
    !z(v, "undefined") && !z(v.call, "undefined") ? w = function(a, b) {
      return v.call(a, b)
    } : w = function(a, b) {
      return b in a && z(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
      var c = this;
      if (typeof c != "function") throw new TypeError;
      var d = t.call(arguments, 1),
        e = function() {
          if (this instanceof e) {
            var a = function() {};
            a.prototype = c.prototype;
            var f = new a,
              g = c.apply(f, d.concat(t.call(arguments)));
            return Object(g) === g ? g : f
          }
          return c.apply(b, d.concat(t.call(arguments)))
        };
      return e
    }), p.csstransitions = function() {
      return D("transition")
    };
    for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
    return e.addTest = function(a, b) {
        if (typeof a == "object")
          for (var d in a) w(a, d) && e.addTest(d, a[d]);
        else {
          a = a.toLowerCase();
          if (e[a] !== c) return e;
          b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
      }, x(""), i = k = null,
      function(a, b) {
        function k(a, b) {
          var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;
          return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function l() {
          var a = r.elements;
          return typeof a == "string" ? a.split(" ") : a
        }

        function m(a) {
          var b = i[a[g]];
          return b || (b = {}, h++, a[g] = h, i[h] = b), b
        }

        function n(a, c, f) {
          c || (c = b);
          if (j) return c.createElement(a);
          f || (f = m(c));
          var g;
          return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        }

        function o(a, c) {
          a || (a = b);
          if (j) return a.createDocumentFragment();
          c = c || m(a);
          var d = c.frag.cloneNode(),
            e = 0,
            f = l(),
            g = f.length;
          for (; e < g; e++) d.createElement(f[e]);
          return d
        }

        function p(a, b) {
          b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
            return r.shivMethods ? n(c, a, b) : b.createElem(c)
          }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
          }) + ");return n}")(r, b.frag)
        }

        function q(a) {
          a || (a = b);
          var c = m(a);
          return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
        }
        var c = a.html5 || {},
          d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          f, g = "_html5shiv",
          h = 0,
          i = {},
          j;
        (function() {
          try {
            var a = b.createElement("a");
            a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
              b.createElement("a");
              var a = b.createDocumentFragment();
              return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
            }()
          } catch (c) {
            f = !0, j = !0
          }
        })();
        var r = {
          elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
          shivCSS: c.shivCSS !== !1,
          supportsUnknownElements: j,
          shivMethods: c.shivMethods !== !1,
          type: "default",
          shivDocument: q,
          createElement: n,
          createDocumentFragment: o
        };
        a.html5 = r, q(b)
      }(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function(a) {
        return B([a])
      }, e.testAllProps = D, e.prefixed = function(a, b, c) {
        return b ? D(a, b, c) : D(a, "pfx")
      }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
  }(this, this.document),
  function(a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a)
    }

    function e(a) {
      return "string" == typeof a
    }

    function f() {}

    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
      var a = p.shift();
      q = 1, a ? a.t ? m(function() {
        ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
      }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
          "img" != a && m(function() {
            t.removeChild(l)
          }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = {
          t: d,
          s: c,
          e: f,
          a: i,
          x: j
        };
      1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
        k.call(this, r)
      }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
      return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
      var a = B;
      return a.loader = {
        load: j,
        i: 0
      }, a
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a)
      },
      x = [],
      y = {},
      z = {
        timeout: function(a, b) {
          return b.length && (a.timeout = b[0]), a
        }
      },
      A, B;
    B = function(a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = {
            url: c,
            origUrl: c,
            prefixes: a
          },
          e, f, g;
        for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c
      }

      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
          k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
        })))
      }

      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a)) c || (j = function() {
              var a = [].slice.call(arguments);
              k.apply(this, a), l()
            }), g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in m = function() {
                  var b = 0,
                    c;
                  for (c in a) a.hasOwnProperty(c) && b++;
                  return b
                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                var a = [].slice.call(arguments);
                k.apply(this, a), l()
              } : j[n] = function(a) {
                return function() {
                  var b = [].slice.call(arguments);
                  a && a.apply(this, b), l()
                }
              }(k[n])), g(a[n], j, b, n, h))
          } else !c && l()
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m, n;
        c(h ? a.yep : a.nope, !!i), i && c(i)
      }
      var i, j, l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);
      else if (w(a))
        for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
      else Object(a) === a && h(a, l)
    }, B.addPrefix = function(a, b) {
      z[a] = b
    }, B.addFilter = function(a) {
      x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
      b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
      var k = b.createElement("script"),
        l, o, e = e || B.errorTimeout;
      k.src = a;
      for (o in d) k.setAttribute(o, d[o]);
      c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
        !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
      }, m(function() {
        l || (l = 1, c(1))
      }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
      var e = b.createElement("link"),
        j, c = i ? h : c || f;
      e.href = a, e.rel = "stylesheet", e.type = "text/css";
      for (j in d) e.setAttribute(j, d[j]);
      g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
  }(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
  };

/*draggabilly.pkgd.min.js - Called after UL*/
/*!
 * Draggabilly PACKAGED v1.0.7
 * Make that shiz draggable
 * https://draggabilly.desandro.com
 */

(function(t) {
  "use strict";

  function e(t) {
    return RegExp("(^|\\s+)" + t + "(\\s+|$)")
  }

  function n(t, e) {
    var n = i(t, e) ? r : o;
    n(t, e)
  }
  var i, o, r;
  "classList" in document.documentElement ? (i = function(t, e) {
    return t.classList.contains(e)
  }, o = function(t, e) {
    t.classList.add(e)
  }, r = function(t, e) {
    t.classList.remove(e)
  }) : (i = function(t, n) {
    return e(n).test(t.className)
  }, o = function(t, e) {
    i(t, e) || (t.className = t.className + " " + e)
  }, r = function(t, n) {
    t.className = t.className.replace(e(n), " ")
  });
  var s = {
    hasClass: i,
    addClass: o,
    removeClass: r,
    toggleClass: n,
    has: i,
    add: o,
    remove: r,
    toggle: n
  };
  "function" == typeof define && define.amd ? define(s) : t.classie = s
})(window),
function(t) {
  "use strict";
  var e = document.documentElement,
    n = function() {};
  e.addEventListener ? n = function(t, e, n) {
    t.addEventListener(e, n, !1)
  } : e.attachEvent && (n = function(e, n, i) {
    e[n + i] = i.handleEvent ? function() {
      var e = t.event;
      e.target = e.target || e.srcElement, i.handleEvent.call(i, e)
    } : function() {
      var n = t.event;
      n.target = n.target || n.srcElement, i.call(e, n)
    }, e.attachEvent("on" + n, e[n + i])
  });
  var i = function() {};
  e.removeEventListener ? i = function(t, e, n) {
    t.removeEventListener(e, n, !1)
  } : e.detachEvent && (i = function(t, e, n) {
    t.detachEvent("on" + e, t[e + n]);
    try {
      delete t[e + n]
    } catch (i) {
      t[e + n] = void 0
    }
  });
  var o = {
    bind: n,
    unbind: i
  };
  "function" == typeof define && define.amd ? define(o) : t.eventie = o
}(this),
function() {
  "use strict";

  function t() {}

  function e(t, e) {
    for (var n = t.length; n--;)
      if (t[n].listener === e) return n;
    return -1
  }

  function n(t) {
    return function() {
      return this[t].apply(this, arguments)
    }
  }
  var i = t.prototype;
  i.getListeners = function(t) {
    var e, n, i = this._getEvents();
    if ("object" == typeof t) {
      e = {};
      for (n in i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n])
    } else e = i[t] || (i[t] = []);
    return e
  }, i.flattenListeners = function(t) {
    var e, n = [];
    for (e = 0; t.length > e; e += 1) n.push(t[e].listener);
    return n
  }, i.getListenersAsObject = function(t) {
    var e, n = this.getListeners(t);
    return n instanceof Array && (e = {}, e[t] = n), e || n
  }, i.addListener = function(t, n) {
    var i, o = this.getListenersAsObject(t),
      r = "object" == typeof n;
    for (i in o) o.hasOwnProperty(i) && -1 === e(o[i], n) && o[i].push(r ? n : {
      listener: n,
      once: !1
    });
    return this
  }, i.on = n("addListener"), i.addOnceListener = function(t, e) {
    return this.addListener(t, {
      listener: e,
      once: !0
    })
  }, i.once = n("addOnceListener"), i.defineEvent = function(t) {
    return this.getListeners(t), this
  }, i.defineEvents = function(t) {
    for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
    return this
  }, i.removeListener = function(t, n) {
    var i, o, r = this.getListenersAsObject(t);
    for (o in r) r.hasOwnProperty(o) && (i = e(r[o], n), -1 !== i && r[o].splice(i, 1));
    return this
  }, i.off = n("removeListener"), i.addListeners = function(t, e) {
    return this.manipulateListeners(!1, t, e)
  }, i.removeListeners = function(t, e) {
    return this.manipulateListeners(!0, t, e)
  }, i.manipulateListeners = function(t, e, n) {
    var i, o, r = t ? this.removeListener : this.addListener,
      s = t ? this.removeListeners : this.addListeners;
    if ("object" != typeof e || e instanceof RegExp)
      for (i = n.length; i--;) r.call(this, e, n[i]);
    else
      for (i in e) e.hasOwnProperty(i) && (o = e[i]) && ("function" == typeof o ? r.call(this, i, o) : s.call(this, i, o));
    return this
  }, i.removeEvent = function(t) {
    var e, n = typeof t,
      i = this._getEvents();
    if ("string" === n) delete i[t];
    else if ("object" === n)
      for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e];
    else delete this._events;
    return this
  }, i.emitEvent = function(t, e) {
    var n, i, o, r, s = this.getListenersAsObject(t);
    for (o in s)
      if (s.hasOwnProperty(o))
        for (i = s[o].length; i--;) n = s[o][i], r = n.listener.apply(this, e || []), (r === this._getOnceReturnValue() || n.once === !0) && this.removeListener(t, n.listener);
    return this
  }, i.trigger = n("emitEvent"), i.emit = function(t) {
    var e = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(t, e)
  }, i.setOnceReturnValue = function(t) {
    return this._onceReturnValue = t, this
  }, i._getOnceReturnValue = function() {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
  }, i._getEvents = function() {
    return this._events || (this._events = {})
  }, "function" == typeof define && define.amd ? define(function() {
    return t
  }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this),
  function(t) {
    "use strict";

    function e(t) {
      if (t) {
        if ("string" == typeof i[t]) return t;
        t = t.charAt(0).toUpperCase() + t.slice(1);
        for (var e, o = 0, r = n.length; r > o; o++)
          if (e = n[o] + t, "string" == typeof i[e]) return e
      }
    }
    var n = "Webkit Moz ms Ms O".split(" "),
      i = document.documentElement.style;
    "function" == typeof define && define.amd ? define(function() {
      return e
    }) : t.getStyleProperty = e
  }(window),
  function(t) {
    "use strict";

    function e(t) {
      var e = parseFloat(t),
        n = -1 === t.indexOf("%") && !isNaN(e);
      return n && e
    }

    function n() {
      for (var t = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        }, e = 0, n = s.length; n > e; e++) {
        var i = s[e];
        t[i] = 0
      }
      return t
    }

    function i(t) {
      function i(t) {
        if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
          var i = r(t);
          if ("none" === i.display) return n();
          var h = {};
          h.width = t.offsetWidth, h.height = t.offsetHeight;
          for (var d = h.isBorderBox = !(!a || !i[a] || "border-box" !== i[a]), u = 0, c = s.length; c > u; u++) {
            var f = s[u],
              p = i[f],
              l = parseFloat(p);
            h[f] = isNaN(l) ? 0 : l
          }
          var g = h.paddingLeft + h.paddingRight,
            v = h.paddingTop + h.paddingBottom,
            m = h.marginLeft + h.marginRight,
            y = h.marginTop + h.marginBottom,
            E = h.borderLeftWidth + h.borderRightWidth,
            b = h.borderTopWidth + h.borderBottomWidth,
            x = d && o,
            L = e(i.width);
          L !== !1 && (h.width = L + (x ? 0 : g + E));
          var P = e(i.height);
          return P !== !1 && (h.height = P + (x ? 0 : v + b)), h.innerWidth = h.width - (g + E), h.innerHeight = h.height - (v + b), h.outerWidth = h.width + m, h.outerHeight = h.height + y, h
        }
      }
      var o, a = t("boxSizing");
      return function() {
        if (a) {
          var t = document.createElement("div");
          t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[a] = "border-box";
          var n = document.body || document.documentElement;
          n.appendChild(t);
          var i = r(t);
          o = 200 === e(i.width), n.removeChild(t)
        }
      }(), i
    }
    var o = document.defaultView,
      r = o && o.getComputedStyle ? function(t) {
        return o.getComputedStyle(t, null)
      } : function(t) {
        return t.currentStyle
      },
      s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define(["get-style-property/get-style-property"], i) : t.getSize = i(t.getStyleProperty)
  }(window),
  function(t) {
    "use strict";

    function e(t, e) {
      for (var n in e) t[n] = e[n];
      return t
    }

    function n() {}

    function i(i, o, s, d, u) {
      function f(t, n) {
        this.element = t, this.options = e({}, this.options), e(this.options, n), this._create()
      }

      function p() {
        return !1
      }

      function l(t, e) {
        t.x = void 0 !== e.pageX ? e.pageX : e.clientX, t.y = void 0 !== e.pageY ? e.pageY : e.clientY
      }
      var g = d("transform"),
        v = !!d("perspective");
      e(f.prototype, o.prototype), f.prototype.options = {}, f.prototype._create = function() {
        this.position = {}, this._getPosition(), this.startPoint = {
          x: 0,
          y: 0
        }, this.dragPoint = {
          x: 0,
          y: 0
        }, this.startPosition = e({}, this.position);
        var t = a(this.element);
        "relative" !== t.position && "absolute" !== t.position && (this.element.style.position = "relative"), this.enable(), this.setHandles()
      }, f.prototype.setHandles = function() {
        this.handles = this.options.handle ? this.element.querySelectorAll(this.options.handle) : [this.element];
        for (var t = 0, e = this.handles.length; e > t; t++) {
          var n = this.handles[t];
          s.bind(n, "mousedown", this), s.bind(n, "touchstart", this), y(n)
        }
      };
      var m = "attachEvent" in r.documentElement,
        y = m ? function(t) {
          "IMG" === t.nodeName && (t.ondragstart = p);
          for (var e = t.querySelectorAll("img"), n = 0, i = e.length; i > n; n++) {
            var o = e[n];
            o.ondragstart = p
          }
        } : n;
      f.prototype._getPosition = function() {
        var t = a(this.element),
          e = parseInt(t.left, 10),
          n = parseInt(t.top, 10);
        this.position.x = isNaN(e) ? 0 : e, this.position.y = isNaN(n) ? 0 : n, this._addTransformPosition(t)
      }, f.prototype._addTransformPosition = function(t) {
        if (g) {
          var e = t[g];
          if (0 === e.indexOf("matrix")) {
            var n = e.split(","),
              i = 0 === e.indexOf("matrix3d") ? 12 : 4,
              o = parseInt(n[i], 10),
              r = parseInt(n[i + 1], 10);
            this.position.x += o, this.position.y += r
          }
        }
      }, f.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
      }, f.prototype.getTouch = function(t) {
        for (var e = 0, n = t.length; n > e; e++) {
          var i = t[e];
          if (i.identifier === this.pointerIdentifier) return i
        }
      }, f.prototype.onmousedown = function(t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this.dragStart(t, t)
      }, f.prototype.ontouchstart = function(t) {
        this.isDragging || this.dragStart(t, t.changedTouches[0])
      }, f.prototype.dragStart = function(e, n) {
        if (this.isEnabled) {
          e.preventDefault ? e.preventDefault() : e.returnValue = !1;
          var o = "touchstart" === e.type;
          this.pointerIdentifier = n.identifier, this._getPosition(), this.measureContainment(), l(this.startPoint, n), this.startPosition.x = this.position.x, this.startPosition.y = this.position.y, this.setLeftTop(), this.dragPoint.x = 0, this.dragPoint.y = 0, this._bindEvents({
            events: o ? ["touchmove", "touchend", "touchcancel"] : ["mousemove", "mouseup"],
            node: e.preventDefault ? t : r
          }), i.add(this.element, "is-dragging"), this.isDragging = !0, this.emitEvent("dragStart", [this, e, n]), this.animate()
        }
      }, f.prototype._bindEvents = function(t) {
        for (var e = 0, n = t.events.length; n > e; e++) {
          var i = t.events[e];
          s.bind(t.node, i, this)
        }
        this._boundEvents = t
      }, f.prototype._unbindEvents = function() {
        var t = this._boundEvents;
        if (t && t.events) {
          for (var e = 0, n = t.events.length; n > e; e++) {
            var i = t.events[e];
            s.unbind(t.node, i, this)
          }
          delete this._boundEvents
        }
      }, f.prototype.measureContainment = function() {
        var t = this.options.containment;
        if (t) {
          this.size = u(this.element);
          var e = this.element.getBoundingClientRect(),
            n = h(t) ? t : "string" == typeof t ? r.querySelector(t) : this.element.parentNode;
          this.containerSize = u(n);
          var i = n.getBoundingClientRect();
          this.relativeStartPosition = {
            x: e.left - i.left,
            y: e.top - i.top
          }
        }
      }, f.prototype.onmousemove = function(t) {
        this.dragMove(t, t)
      }, f.prototype.ontouchmove = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this.dragMove(t, e)
      }, f.prototype.dragMove = function(t, e) {
        if (l(this.dragPoint, e), this.dragPoint.x -= this.startPoint.x, this.dragPoint.y -= this.startPoint.y, this.options.containment) {
          var n = this.relativeStartPosition.x,
            i = this.relativeStartPosition.y;
          this.dragPoint.x = Math.max(this.dragPoint.x, -n), this.dragPoint.y = Math.max(this.dragPoint.y, -i), this.dragPoint.x = Math.min(this.dragPoint.x, this.containerSize.width - n - this.size.width), this.dragPoint.y = Math.min(this.dragPoint.y, this.containerSize.height - i - this.size.height)
        }
        this.position.x = this.startPosition.x + this.dragPoint.x, this.position.y = this.startPosition.y + this.dragPoint.y, this.emitEvent("dragMove", [this, t, e])
      }, f.prototype.onmouseup = function(t) {
        this.dragEnd(t, t)
      }, f.prototype.ontouchend = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this.dragEnd(t, e)
      }, f.prototype.dragEnd = function(t, e) {
        this.isDragging = !1, delete this.pointerIdentifier, g && (this.element.style[g] = "", this.setLeftTop()), this._unbindEvents(), i.remove(this.element, "is-dragging"), this.emitEvent("dragEnd", [this, t, e])
      }, f.prototype.ontouchcancel = function(t) {
        var e = this.getTouch(t.changedTouches);
        this.dragEnd(t, e)
      }, f.prototype.animate = function() {
        if (this.isDragging) {
          this.positionDrag();
          var t = this;
          c(function() {
            t.animate()
          })
        }
      };
      var E = v ? function(t, e) {
        return "translate3d( " + t + "px, " + e + "px, 0)"
      } : function(t, e) {
        return "translate( " + t + "px, " + e + "px)"
      };
      return f.prototype.setLeftTop = function() {
        this.element.style.left = this.position.x + "px", this.element.style.top = this.position.y + "px"
      }, f.prototype.positionDrag = g ? function() {
        this.element.style[g] = E(this.dragPoint.x, this.dragPoint.y)
      } : f.prototype.setLeftTop, f.prototype.enable = function() {
        this.isEnabled = !0
      }, f.prototype.disable = function() {
        this.isEnabled = !1, this.isDragging && this.dragEnd()
      }, f
    }
    for (var o, r = t.document, s = r.defaultView, a = s && s.getComputedStyle ? function(t) {
        return s.getComputedStyle(t, null)
      } : function(t) {
        return t.currentStyle
      }, h = "object" == typeof HTMLElement ? function(t) {
        return t instanceof HTMLElement
      } : function(t) {
        return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
      }, d = 0, u = "webkit moz ms o".split(" "), c = t.requestAnimationFrame, f = t.cancelAnimationFrame, p = 0; u.length > p && (!c || !f); p++) o = u[p], c = c || t[o + "RequestAnimationFrame"], f = f || t[o + "CancelAnimationFrame"] || t[o + "CancelRequestAnimationFrame"];
    c && f || (c = function(e) {
      var n = (new Date).getTime(),
        i = Math.max(0, 16 - (n - d)),
        o = t.setTimeout(function() {
          e(n + i)
        }, i);
      return d = n + i, o
    }, f = function(e) {
      t.clearTimeout(e)
    }), "function" == typeof define && define.amd ? define(["classie/classie", "eventEmitter/EventEmitter", "eventie/eventie", "get-style-property/get-style-property", "get-size/get-size"], i) : t.Draggabilly = i(t.classie, t.EventEmitter, t.eventie, t.getStyleProperty, t.getSize)
  }(window);

/*elastiStack.js - Called after UL*/
/**
 * elastiStack.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * https://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;
(function(window) {

  'use strict';

  function extend(a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  // support
  var is3d = !!getStyleProperty('perspective'),
    supportTransitions = Modernizr.csstransitions,
    // transition end event name
    transEndEventNames = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd',
      'transition': 'transitionend'
    },
    transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];

  function ElastiStack(el, options) {
    this.container = el;
    this.options = extend({}, this.options);
    extend(this.options, options);
    this._init();
  }

  function setTransformStyle(el, tval) {
    el.style.WebkitTransform = tval;
    el.style.msTransform = tval;
    el.style.transform = tval;
  }

  ElastiStack.prototype.options = {
    // distDragBack: if the user stops dragging the image in a area that does not exceed [distDragBack]px for either x or y then the image goes back to the stack
    distDragBack: 200,
    // distDragMax: if the user drags the image in a area that exceeds [distDragMax]px for either x or y then the image moves away from the stack
    distDragMax: 450,
    // callback
    onUpdateStack: function(current) {
      return false;
    }
  };

  ElastiStack.prototype._init = function() {
    // items
    this.items = [].slice.call(this.container.children);
    // total items
    this.itemsCount = this.items.length;
    // current item's index (the one on the top of the stack)
    this.current = 0;
    // set initial styles
    this._setStackStyle();
    // return if no items or only one
    if (this.itemsCount <= 1) return;
    // add dragging capability
    this._initDragg();
    // init drag events
    this._initEvents();
  };

  ElastiStack.prototype._initEvents = function() {
    var self = this;
    this.draggie.on('dragStart', function(i, e, p) {
      self._onDragStart(i, e, p);
    });
    this.draggie.on('dragMove', function(i, e, p) {
      self._onDragMove(i, e, p);
    });
    this.draggie.on('dragEnd', function(i, e, p) {
      self._onDragEnd(i, e, p);
    });
  };

  ElastiStack.prototype._setStackStyle = function() {
    var item1 = this._firstItem(),
      item2 = this._secondItem(),
      item3 = this._thirdItem();

    if (item1) {
      item1.style.opacity = 1;
      item1.style.zIndex = 4;
      setTransformStyle(item1, is3d ? 'translate3d(0,0,0)' : 'translate(0,0)');
    }

    if (item2) {
      item2.style.opacity = 1;
      item2.style.zIndex = 3;
      setTransformStyle(item2, is3d ? 'translate3d(0,0,-60px)' : 'translate(0,0)');
    }

    if (item3) {
      item3.style.opacity = 1;
      item3.style.zIndex = 2;
      setTransformStyle(item3, is3d ? 'translate3d(0,0,-120px)' : 'translate(0,0)');
    }
  };

  ElastiStack.prototype._moveAway = function(instance) {
    // disable drag
    this._disableDragg();

    // add class "animate"
    classie.add(instance.element, 'animate');

    // calculate how much to translate in the x and y axis
    var tVal = this._getTranslateVal(instance);

    // apply it
    setTransformStyle(instance.element, is3d ? 'translate3d(' + tVal.x + 'px,' + tVal.y + 'px, 0px)' : 'translate(' + tVal.x + 'px,' + tVal.y + 'px)');

    // item also fades out
    instance.element.style.opacity = 0;

    // other items move back to stack
    var item2 = this._secondItem(),
      item3 = this._thirdItem();

    if (item2) {
      classie.add(item2, 'move-back');
      classie.add(item2, 'animate');
      setTransformStyle(item2, is3d ? 'translate3d(0,0,-60px)' : 'translate(0,0)');
    }
    if (item3) {
      classie.add(item3, 'move-back');
      classie.add(item3, 'animate');
      setTransformStyle(item3, is3d ? 'translate3d(0,0,-120px)' : 'translate(0,0)');
    }

    // after transition ends..
    var self = this,
      onEndTransFn = function() {
        instance.element.removeEventListener(transEndEventName, onEndTransFn);

        // reset first item
        setTransformStyle(instance.element, is3d ? 'translate3d(0,0,-180px)' : 'translate(0,0,0)');
        instance.element.style.left = instance.element.style.top = '0px';
        instance.element.style.zIndex = -1;
        classie.remove(instance.element, 'animate');

        // reorder stack
        self.current = self.current < self.itemsCount - 1 ? self.current + 1 : 0;
        // new front items
        var item1 = self._firstItem(),
          item2 = self._secondItem(),
          item3 = self._thirdItem();

        // reset transition timing function
        classie.remove(item1, 'move-back');
        if (item2) classie.remove(item2, 'move-back');
        if (item3) classie.remove(item3, 'move-back');

        setTimeout(function() {
          // the upcoming one will animate..
          classie.add(self._lastItem(), 'animate');
          // reset style
          self._setStackStyle();
        }, 25);

        // add dragging capability
        self._initDragg();

        // init drag events on new current item
        self._initEvents();

        // callback
        self.options.onUpdateStack(self.current);
      };

    if (supportTransitions) {
      instance.element.addEventListener(transEndEventName, onEndTransFn);
    } else {
      onEndTransFn.call();
    }
  };

  ElastiStack.prototype._moveBack = function(instance) {
    var item2 = this._secondItem(),
      item3 = this._thirdItem();

    classie.add(instance.element, 'move-back');
    classie.add(instance.element, 'animate');
    setTransformStyle(instance.element, is3d ? 'translate3d(0,0,0)' : 'translate(0,0)');
    instance.element.style.left = '0px';
    instance.element.style.top = '0px';

    if (item2) {
      classie.add(item2, 'move-back');
      classie.add(item2, 'animate');
      setTransformStyle(item2, is3d ? 'translate3d(0,0,-60px)' : 'translate(0,0)');
    }
    if (item3) {
      classie.add(item3, 'move-back');
      classie.add(item3, 'animate');
      setTransformStyle(item3, is3d ? 'translate3d(0,0,-120px)' : 'translate(0,0)');
    }
  };

  ElastiStack.prototype._onDragStart = function(instance, event, pointer) {
    // remove transition classes if any
    var item2 = this._secondItem(),
      item3 = this._thirdItem();

    classie.remove(instance.element, 'move-back');
    classie.remove(instance.element, 'animate');

    if (item2) {
      classie.remove(item2, 'move-back');
      classie.remove(item2, 'animate');
    }
    if (item3) {
      classie.remove(item3, 'move-back');
      classie.remove(item3, 'animate');
    }
  };

  ElastiStack.prototype._onDragMove = function(instance, event, pointer) {
    if (this._outOfBounds(instance)) {
      this._moveAway(instance);
    } else {
      // the second and third items also move
      var item2 = this._secondItem(),
        item3 = this._thirdItem();
      if (item2) {
        setTransformStyle(item2, is3d ? 'translate3d(' + (instance.position.x * .6) + 'px,' + (instance.position.y * .6) + 'px, -60px)' : 'translate(' + (instance.position.x * .6) + 'px,' + (instance.position.y * .6) + 'px)');
      }
      if (item3) {
        setTransformStyle(item3, is3d ? 'translate3d(' + (instance.position.x * .3) + 'px,' + (instance.position.y * .3) + 'px, -120px)' : 'translate(' + (instance.position.x * .3) + 'px,' + (instance.position.y * .3) + 'px)');
      }
    }
  };

  ElastiStack.prototype._onDragEnd = function(instance, event, pointer) {
    if (this._outOfBounds(instance)) return;
    if (this._outOfSight(instance)) {
      this._moveAway(instance);
    } else {
      this._moveBack(instance);
    }
  };

  ElastiStack.prototype._initDragg = function() {
    this.draggie = new Draggabilly(this.items[this.current]);
  };

  ElastiStack.prototype._disableDragg = function() {
    this.draggie.disable();
  };

  // returns true if x or y is bigger than distDragMax
  ElastiStack.prototype._outOfBounds = function(el) {
    return Math.abs(el.position.x) > this.options.distDragMax || Math.abs(el.position.y) > this.options.distDragMax;
  };

  // returns true if x or y is bigger than distDragBack
  ElastiStack.prototype._outOfSight = function(el) {
    return Math.abs(el.position.x) > this.options.distDragBack || Math.abs(el.position.y) > this.options.distDragBack;
  };

  ElastiStack.prototype._getTranslateVal = function(el) {
    var h = Math.sqrt(Math.pow(el.position.x, 2) + Math.pow(el.position.y, 2)),
      a = Math.asin(Math.abs(el.position.y) / h) / (Math.PI / 180),
      hL = h + this.options.distDragBack,
      dx = Math.cos(a * (Math.PI / 180)) * hL,
      dy = Math.sin(a * (Math.PI / 180)) * hL,
      tx = dx - Math.abs(el.position.x),
      ty = dy - Math.abs(el.position.y);

    return {
      x: el.position.x > 0 ? tx : tx * -1,
      y: el.position.y > 0 ? ty : ty * -1
    }
  };

  // returns the first item in the stack
  ElastiStack.prototype._firstItem = function() {
    return this.items[this.current];
  };

  // returns the second item in the stack
  ElastiStack.prototype._secondItem = function() {
    if (this.itemsCount >= 2) {
      return this.current + 1 < this.itemsCount ? this.items[this.current + 1] : this.items[Math.abs(this.itemsCount - (this.current + 1))];
    }
  };

  // returns the third item in the stack
  ElastiStack.prototype._thirdItem = function() {
    if (this.itemsCount >= 3) {
      return this.current + 2 < this.itemsCount ? this.items[this.current + 2] : this.items[Math.abs(this.itemsCount - (this.current + 2))];
    }
  };

  // returns the last item (of the first three) in the stack
  ElastiStack.prototype._lastItem = function() {
    if (this.itemsCount >= 3) {
      return this._thirdItem();
    } else {
      return this._secondItem();
    }
  };

  // add to global namespace
  window.ElastiStack = ElastiStack;

})(window);

/*Called after UL*/
new ElastiStack(document.getElementById('elasticstack'));