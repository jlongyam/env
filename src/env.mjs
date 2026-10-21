const isBrowser = typeof document !== "undefined";
const isWorker = typeof importScripts !== "undefined";
const isCLI = !isBrowser && !isWorker;

const env = {
  browser: isBrowser,
  worker: isWorker,
  cli: isCLI
};

export default env;