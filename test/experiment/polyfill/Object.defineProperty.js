if (!Object.defineProperty) {
  Object.defineProperty = function(obj, prop, descriptor) {
    if ('value' in descriptor) {
      obj[prop] = descriptor.value;
    }
    return obj;
  };
}
