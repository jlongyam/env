var envGlobal = function() {
  function _typeof(o) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
      return typeof o;
    } : function(o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  return "object" === ("undefined" == typeof globalThis ? "undefined" : _typeof(globalThis)) ? globalThis : "object" === ("undefined" == typeof global ? "undefined" : _typeof(global)) ? global : "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)) ? self : "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) ? window : {};
}();
