if (!Array.prototype.some) {
  Array.prototype.some = function(callbackFn, thisArg) {
    if (typeof callbackFn !== 'function') {
      throw new TypeError(callbackFn + ' is not a function');
    }
    var O = Object(this);
    var len = O.length >>> 0; 
    for (var k = 0; k < len; k++) {
      if (k in O) { 
        var elementK = O[k];
        if (callbackFn.call(thisArg, elementK, k, O)) {
          return true;
        }
      }
    }
    return false;
  };
}
