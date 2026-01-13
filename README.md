# env
[![npm (scoped)](https://shields.fly.dev/npm/v/@jlongyam/env?logo=npm)](https://www.npmjs.com/package/@jlongyam/env)
[![npm bundle size](https://shields.fly.dev/bundlephobia/min/@jlongyam/env?logo=javascript)](https://bundlephobia.com/package/@jlongyam/env)
[![npm](https://shields.fly.dev/npm/dw/@jlongyam/env?logo=npm)](https://www.npmjs.com/package/@jlongyam/env)
[![jsDelivr](https://shields.fly.dev/jsdelivr/npm/hw/@jlongyam/env?color=orange&logo=jsdelivr&logoColor=white)](https://cdn.jsdelivr.net/npm/@jlongyam/env/)

Basic environment detector.

## Usage

### CLI

`npm i @jlongyam/env -S` or `-D`

- ES Module

```js
import env from "@jlongyam/env";

console.log(env);
```

- CommonJS

```js
const env = require("@jlongyam/env");

console.log(env);
```

- TypeScript

```ts
import env from "@jlongyam/env";
import type { EnvDetection } from "@jlongyam/env";

const myEnv: EnvDetection = env;

if (myEnv.browser) {
  console.log("Running in browser");
}
```

- SystemJS

`npm i systemjs`

```js
import url from "url";
import systemjs from "systemjs";

const { System, applyImportMap, setBaseUrl } = systemjs;
const basePath = url.pathToFileURL(process.cwd()).href;

setBaseUrl(System, basePath);
applyImportMap(System, {
  imports: {
    env: "./node_modules/@jlongyam/env/dist/system/env.js"
  }
});

const exports = {
  env: await System.import(["env"])
};
const env = exports.env.default;

console.log(env);
```

### Browser

- IIFE

```html
<script src="https://cdn.jsdelivr.net/npm/@jlongyam/env/dist/env.min.js"></script>
<script>
  console.log(env)
</script>
```

- ES Module

```html
<script type="importmap">
  {
    "imports": {
      "env": "https://cdn.jsdelivr.net/npm/@jlongyam/env/dist/env.es.min.js"
    }
  }
</script>
<script type="module">
  import env from "env";

  console.log(env);
</script>
```

- SystemJS

```html
<script src="https://cdn.jsdelivr.net/npm/systemjs/dist/system.min.js"></script>
<script type="systemjs-importmap">
  {
    "imports": {
      "env": "https://cdn.jsdelivr.net/npm/@jlongyam/env/dist/env.min.js"
    }
  }
</script>
<script>
  (async function () {
    let env = await System.import(["env"]);
    env = env.default;

    console.log(env);
  })();
</script>
```

### Worker

- worker.js

```js
import env from "https://cdn.jsdelivr.net/npm/@jlongyam/env/src/env.es.min.js";

self.postMessage({
  result: env.worker
})
```

- front

```html
<script type="module">
  const worker = new Worker('./worker.js', { type: 'module' });

  worker.addEventListener('message', (event) => {
    console.log(event.data)
  });
</script>
```

## API

### Base

| Namespace     | Type    |
| ------------- | ------- |
| `env.browser` | Boolean |
| `env.worker`  | Boolean |
| `env.cli`     | Boolean |

### Expansion

Usage example using __Expansion__ namespace:

```js
import envGlobal from "@jlongyam/env/global";
import envBrowser from "@jlongyam/env/browser";
```

- TypeScript

```ts
import envGlobal from "@jlongyam/env/global";
import envBrowser from "@jlongyam/env/browser";
import type { GlobalObject, EnvBrowser } from "@jlongyam/env";

const global: GlobalObject = envGlobal;
const browser: EnvBrowser = envBrowser;

// Access browser details
console.log(browser.browser.name);    // e.g., "Chrome"
console.log(browser.os.name);         // e.g., "macOS"

// Access global object
if ('fetch' in global) {
  console.log('Fetch API available');
}
```

Alternative method for __legacy__ node:

```js
const envGlobal = require('@jlongyam/env/dist/global/envGlobal');
```

| Namespace     | Type    |
| ------------- | ------- |
| `envGlobal`   | Object  |
| `envBrowser`  | Object  |

### TypeScript Support

This package includes TypeScript declaration files for all modules:

- `@jlongyam/env` - Main environment detection
- `@jlongyam/env/global` - Global object access
- `@jlongyam/env/browser` - Browser-specific detection

#### Available Types

```ts
// Main module
interface EnvDetection {
  browser: boolean;
  worker: boolean;
  cli: boolean;
}

// Browser module
interface EnvBrowser {
  browser: { name?: string; version?: string };
  engine: { name?: string; version?: string };
  os: { name?: string; version?: string };
  platform: { type?: string; vendor?: string };
}

// Global module
type GlobalObject = Record<string, any>;
```

### Note

To use `envBrowser` in ancient browser like __Internet Explorer__,
it's require polyfill:

- `Array.isArray`
- `Array.some`
- `Object.defineProperty`
- `Object.defineProperties`

See "__test/browser/env.iife.test.html__"

## Uninstall

`npm un @jlongyam/env -D` or `-S`

## Alternative

- [environment](https://github.com/sindresorhus/environment)
- [env](https://github.com/dekkai-data/env)
- [bowser](https://github.com/lancedikson/bowser)
