# env

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

### Browser

<details name="browser"><summary>ES Module</summary>

```html
<script type="importmap">
  {
    "imports": {
      "env": "https://esm.sh/gh/jlongyam/env"
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
<script src="https://esm.sh/gh/jlongyam/env"></script>
<script>
  console.log(env)
</script>
```

Alternative CDN: <https://cdn.jsdelivr.net/gh/jlongyam/env/>

</details>

<details name="browser"><summary>Worker</summary>

#### 1. worker.js

```js
import env from "https://esm.sh/gh/jlongyam/env";

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

## Note

To use `envBrowser` in ancient browser like __Internet Explorer__,

require polyfill:

- `Array.isArray`
- `Array.some`
- `Object.defineProperty`
- `Object.defineProperties`

Use scripts in __"test/polyfill"__ if necessary.

## Alternative

- [environment](https://github.com/sindresorhus/environment)
- [path-key](https://github.com/sindresorhus/path-key)
- [temp-dir](https://github.com/sindresorhus/temp-dir)
- [dotenv](https://github.com/motdotla/dotenv)

## Related

- [Repo](https://github.com/jlongyam/repo)

## License

[MIT](LICENSE)
