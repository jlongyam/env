if (!Object.defineProperties) {
  Object.defineProperties = function(obj, props) {
    for (var prop in props) {
      if (Object.prototype.hasOwnProperty.call(props, prop)) {
        Object.defineProperty(obj, prop, props[prop]);
      }
    }
    return obj;
  };
}
