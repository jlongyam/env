# env

Basic environment detector.

## Usage

### CLI

- `npm i @jlongyam/env -S` as dependencies
- `npm i @jlongyam/env -D` as devDependencies

- ES Module

```js
import env from "@jlongyam/env";
import envGlobal from "@jlongyam/env/global";

env.global = envGlobal;

console.log(env);
```

- CommonJS

```js
const env = require("@jlongyam/env");
env.global = require("@jlongyam/env/global");

console.log(env);
```

- SystemJS

`npm i systemjs`

```js
import url from "url";
import systemjs from 'systemjs';

const { System, applyImportMap, setBaseUrl } = systemjs;
const basePath = url.pathToFileURL(process.cwd()).href;

setBaseUrl(System, basePath);
applyImportMap(System, {
  imports: {
    env: "./node_modules/@jlongyam/env/dist/system/env.js",
    envGlobal: "./node_modules/@jlongyam/env/dist/system/envGlobal.js"
  }
});

const exports = {
  env: await System.import(["env"]),
  envGlobal: await System.import(["envGlobal"])
};
const env = exports.env.default;

env.global = exports.envGlobal.default;

console.log(env);
```

### Browser

[jsdelivr.com/package/npm/@jlongyam/env](https://www.jsdelivr.com/package/npm/@jlongyam/env?tab=files)

- ES Module

```html
<script type="importmap">
  {
    "imports": {
      "env": "https://cdn.jsdelivr.net/npm/@jlongyam/env/src/env.js",
      "envGlobal": "https://cdn.jsdelivr.net/npm/@jlongyam/env/src/envGlobal.js"
    }
  }
</script>
<script type="module">
  import env from "env";
  import envGlobal from "envGlobal";

  env.global = envGlobal;
  console.log(env);
</script>
```

- SystemJS

```html
<script src="https://cdn.jsdelivr.net/npm/systemjs/dist/system.min.js"></script>
<script type="systemjs-importmap">
  {
    "imports": {
      "env": "https://cdn.jsdelivr.net/npm/@jlongyam/env/dist/system/env.js",
      "envGlobal": "https://cdn.jsdelivr.net/npm/@jlongyam/env/dist/system/envGlobal.js"
    }
  }
</script>
<script>
  (async function () {
    const exports = {
      env: await System.import(["env"]),
      envGlobal: await System.import(["envGlobal"])
    };
    const env = exports.env.default;
    
    env.global = exports.envGlobal.default;
    console.log(env);
  })();
</script>
```

### Worker

- worker.js

```js
import env from "https://cdn.jsdelivr.net/npm/@jlongyam/env/src/env.js";
import envGlobal from "https://cdn.jsdelivr.net/npm/@jlongyam/env/src/envGlobal.js";

self.postMessage({
  'env': env,
  'envGlobal': (envGlobal === self) ? 'self': false
});
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

- `env`: `window` | `worker` | `cli`
- `envGlobal`: `globalThis` | `global` | `self` | `window`

## Uninstall

- `npm uninstall @jlongyam/env -D` or `-S`

## Alternative

- [environment](https://github.com/sindresorhus/environment)
