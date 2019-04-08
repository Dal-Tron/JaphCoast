/**
 * Minified by jsDelivr using UglifyJS v3.0.24.
 * Original file: /npm/lodash.throttle@4.1.1/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function debounce(t, e, n) {
  function r(e) {
    var n = l,
      r = b
    return (l = b = void 0), (j = e), (v = t.apply(r, n))
  }
  function i(t) {
    return (j = t), (m = setTimeout(u, e)), g ? r(t) : v
  }
  function o(t) {
    var n = t - j,
      r = e - (t - y)
    return p ? nativeMin(r, s - n) : r
  }
  function a(t) {
    var n = t - y,
      r = t - j
    return void 0 === y || n >= e || n < 0 || (p && r >= s)
  }
  function u() {
    var t = now()
    if (a(t)) return f(t)
    m = setTimeout(u, o(t))
  }
  function f(t) {
    return (m = void 0), d && l ? r(t) : ((l = b = void 0), v)
  }
  function c() {
    var t = now(),
      n = a(t)
    if (((l = arguments), (b = this), (y = t), n)) {
      if (void 0 === m) return i(y)
      if (p) return (m = setTimeout(u, e)), r(y)
    }
    return void 0 === m && (m = setTimeout(u, e)), v
  }
  var l,
    b,
    s,
    v,
    m,
    y,
    j = 0,
    g = !1,
    p = !1,
    d = !0
  if ('function' != typeof t) throw new TypeError(FUNC_ERROR_TEXT)
  return (
    (e = toNumber(e) || 0),
    isObject(n) &&
      ((g = !!n.leading),
      (s = (p = 'maxWait' in n) ? nativeMax(toNumber(n.maxWait) || 0, e) : s),
      (d = 'trailing' in n ? !!n.trailing : d)),
    (c.cancel = function() {
      void 0 !== m && clearTimeout(m), (j = 0), (l = y = b = m = void 0)
    }),
    (c.flush = function() {
      return void 0 === m ? v : f(now())
    }),
    c
  )
}
function throttle(t, e, n) {
  var r = !0,
    i = !0
  if ('function' != typeof t) throw new TypeError(FUNC_ERROR_TEXT)
  return (
    isObject(n) &&
      ((r = 'leading' in n ? !!n.leading : r),
      (i = 'trailing' in n ? !!n.trailing : i)),
    debounce(t, e, { leading: r, maxWait: e, trailing: i })
  )
}
function isObject(t) {
  var e = typeof t
  return !!t && ('object' == e || 'function' == e)
}
function isObjectLike(t) {
  return !!t && 'object' == typeof t
}
function isSymbol(t) {
  return (
    'symbol' == typeof t ||
    (isObjectLike(t) && objectToString.call(t) == symbolTag)
  )
}
function toNumber(t) {
  if ('number' == typeof t) return t
  if (isSymbol(t)) return NAN
  if (isObject(t)) {
    var e = 'function' == typeof t.valueOf ? t.valueOf() : t
    t = isObject(e) ? e + '' : e
  }
  if ('string' != typeof t) return 0 === t ? t : +t
  t = t.replace(reTrim, '')
  var n = reIsBinary.test(t)
  return n || reIsOctal.test(t)
    ? freeParseInt(t.slice(2), n ? 2 : 8)
    : reIsBadHex.test(t)
    ? NAN
    : +t
}
var FUNC_ERROR_TEXT = 'Expected a function',
  NAN = NaN,
  symbolTag = '[object Symbol]',
  reTrim = /^\s+|\s+$/g,
  reIsBadHex = /^[-+]0x[0-9a-f]+$/i,
  reIsBinary = /^0b[01]+$/i,
  reIsOctal = /^0o[0-7]+$/i,
  freeParseInt = parseInt,
  freeGlobal =
    'object' == typeof global && global && global.Object === Object && global,
  freeSelf = 'object' == typeof self && self && self.Object === Object && self,
  root = freeGlobal || freeSelf || Function('return this')(),
  objectProto = Object.prototype,
  objectToString = objectProto.toString,
  nativeMax = Math.max,
  nativeMin = Math.min,
  now = function() {
    return root.Date.now()
  }
