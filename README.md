# env

[![npm (scoped)](https://shields.fly.dev/npm/v/@jlongyam/env?logo=npm)](https://www.npmjs.com/package/@jlongyam/env)
[![npm](https://shields.fly.dev/npm/dw/@jlongyam/env?logo=npm)](https://www.npmjs.com/package/@jlongyam/env)
[![jsDelivr](https://shields.fly.dev/jsdelivr/npm/hw/@jlongyam/env?color=orange&logo=jsdelivr&logoColor=white)](https://cdn.jsdelivr.net/npm/@jlongyam/env/)

Basic environment detector

[Demo](https://jlongyam.github.io/env)

## Usage

### Node

Installation: `npm i @jlongyam/env`

<details name="cli"><summary>ES6 Module</summary>

```js
import env from "@jlongyam/env";

console.log(env);
```

</details>

<details name="cli"><summary>CommonJS</summary>

```js
const env = require("@jlongyam/env");

console.log(env);
```

</details>

<details name="cli"><summary>SystemJS</summary>

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

</details>

<details name="cli"><summary>TypeScript</summary>

```ts
import env from "@jlongyam/env";
import type { EnvDetection } from "@jlongyam/env";

const myEnv: EnvDetection = env;

if (myEnv.browser) {
  console.log("Running in browser");
}
```

</details>

### Browser

<details name="browser"><summary>ES Module</summary>

```html
<script type="importmap">
  {
    "imports": {
      "env": "https://cdn.jsdelivr.net/npm/@jlongyam/env@latest/dist/env.js"
    }
  }
</script>
<script type="module">
  import env from "env";

  console.log(env);
</script>
```

</details>

<details name="browser"><summary>IIFE</summary>

```html
<script src="https://cdn.jsdelivr.net/npm/@jlongyam/env/dist/env.min.js"></script>
<script>
  console.log(env)
</script>
```

</details>

<details name="browser"><summary>SystemJS</summary>

```html
<script src="https://cdn.jsdelivr.net/npm/systemjs/dist/system.min.js"></script>
<script type="systemjs-importmap">
  {
    "imports": {
      "env": "https://cdn.jsdelivr.net/npm/@jlongyam/env@latest/dist/env.min.js"
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

</details>

<details name="browser"><summary>Worker</summary>

#### 1. worker.js

```js
import env from "https://cdn.jsdelivr.net/npm/@jlongyam/env@latest/src/env.es.min.js";

self.postMessage({
  result: env.worker
})
```

#### 2. HTML

```html
<script type="module">
  const worker = new Worker('./worker.js', { type: 'module' });

  worker.addEventListener('message', (event) => {
    console.log(event.data)
  });
</script>
```

</details>

## API

<details name="api"><summary>Base</summary>

| Namespace     | Type    |
| ------------- | ------- |
| `env.browser` | boolean |
| `env.worker`  | boolean |
| `env.cli`     | boolean |

</details>

<details name="api"><summary>Plugins</summary>

| Namespace     | Type    |
| ------------- | ------- |
| `envGlobal`   | Object  |
| `envBrowser`  | Object  |


Usage example using __plugin__ namespace:

<details name="plugin"><summary>JS</summary>

```js
import envGlobal from "@jlongyam/env/global";
import envBrowser from "@jlongyam/env/browser";
```

</details>

<details name="plugin"><summary>TypeScript</summary>

```ts
import envGlobal from "@jlongyam/env/global";
import envBrowser from "@jlongyam/env/browser";
import type { GlobalObject, EnvBrowser } from "@jlongyam/env";

const global: GlobalObject = envGlobal;
const browser: EnvBrowser = envBrowser;

console.log(browser.browser.name);
console.log(browser.os.name);

if ('fetch' in global) {
  console.log('Fetch API available');
}
```

</details>

<details name="plugin"><summary>Legacy</summary>

```js
const envGlobal = require('@jlongyam/env/dist/global/envGlobal');
```

</details>

</details>

## Summary

This package includes TypeScript declaration files for all modules:

- `@jlongyam/env` - Main environment detection
- `@jlongyam/env/global` - Global object access
- `@jlongyam/env/browser` - Browser-specific detection

Types:

```ts
interface EnvDetection {
  browser: boolean;
  worker: boolean;
  cli: boolean;
}

interface EnvBrowser {
  browser: { name?: string; version?: string };
  engine: { name?: string; version?: string };
  os: { name?: string; version?: string };
  platform: { type?: string; vendor?: string };
}

type GlobalObject = Record<string, any>;
```

## Note

To use `envBrowser` in ancient browser like __Internet Explorer__,

require polyfill:

- `Array.isArray`
- `Array.some`
- `Object.defineProperty`
- `Object.defineProperties`

Use scripts in __"test/browser/polyfill"__ if necessary.

Developer note:

- node `util.styleText` not cross-platform, require alternative
- browser `console` not really good displaying Object

## Contribution

Clone this repository

- clone this repo
- create test

__package.json__

```json
{
  "dependencies": "file:point/to/env"
}
```

- Improve code
- Pull request
  
## Alternative

- [environment](https://github.com/sindresorhus/environment)
- [path-key](https://github.com/sindresorhus/path-key)
- [temp-dir](https://github.com/sindresorhus/temp-dir)
- [dotenv](https://github.com/motdotla/dotenv)

## License

[MIT](LICENSE)
