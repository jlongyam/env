var env = (function () {

  var browser = (typeof window !== 'undefined');
  var worker = (typeof importScripts !== 'undefined');
  var cli = (!browser && !worker);
  var env = {
    browser: browser,
    worker: worker,
    cli: cli
  };

  return env;

})();
