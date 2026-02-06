var env = function() {
  var browser = "undefined" != typeof window, worker = "undefined" != typeof importScripts;
  return {
    browser: browser,
    worker: worker,
    cli: !browser && !worker
  };
}();
