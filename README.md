# env

[![AppVeyor](https://shields.fly.dev/appveyor/build/jlongyam/env?logo=appveyor)](https://ci.appveyor.com/project/jlongyam/env)
[![npm bundle size](https://shields.fly.dev/bundlephobia/min/@jlongyam/env?logo=javascript)](https://bundlephobia.com/package/@jlongyam/env)
[![npm version](https://badge.fury.io/js/@jlongyam%2Fenv.svg?icon=si%3Anpm)](https://www.npmjs.com/package/@jlongyam/env)

Basic environment detector.

## Usage

### CLI

[![npm](https://shields.fly.dev/npm/dw/@jlongyam/env?logo=npm)](https://www.npmjs.com/package/@jlongyam/env)

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

[![jsDelivr](https://shields.fly.dev/jsdelivr/npm/hw/@jlongyam/env?color=orange&logo=jsdelivr&logoColor=white)](https://cdn.jsdelivr.net/npm/@jlongyam/env/)

- IIFE

```html
<script src="https://cdn.jsdelivr.net/npm/@jlongyam/env/dist/env.iife.js"></script>
<script>
  console.log(env)
</script>
```

- ES Module

```html
<script type="importmap">
  {
    "imports": {
      "env": "https://cdn.jsdelivr.net/npm/@jlongyam/env/dist/env.js"
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
      "env": "https://cdn.jsdelivr.net/npm/@jlongyam/env/dist/env.system.js"
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
import env from "https://cdn.jsdelivr.net/npm/@jlongyam/env/src/env.js";

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

| Namespace     | Type      |
| ------------- | --------- |
| `env.browser` | Boolean |
| `env.worker`  | Boolean |
| `env.cli`     | Boolean |
| `env.global`  | Object  |

## Uninstall

`npm un @jlongyam/env -D` or `-S`

## Alternative

- [environment](https://github.com/sindresorhus/environment)
- [@dekkai/env](https://github.com/dekkai-data/env)
