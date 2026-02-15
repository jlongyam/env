# env

[![](https://data.jsdelivr.com/v1/package/gh/jlongyam/env/badge)](https://www.jsdelivr.com/package/gh/jlongyam/env)

Basic environment detector

## Usage

### CLI

<details name="accordion"><summary>ES6 Module</summary>

```js
import env from "@jlongyam/env";
console.log(env);
```

</details>

<details name="accordion"><summary>CommonJS</summary>

```js
const env = require("@jlongyam/env");
console.log(env);
```

</details>

### Browser

<details name="accordion"><summary>ES Module</summary>

```html
<script type="importmap">
  {
    "imports": {
      "env": "https://cdn.jsdelivr.net/gh/jlongyam/env/dist/env.min.mjs"
    }
  }
</script>
<script type="module">
  import env from "env";
  console.log(env);
</script>
```

</details>

<details name="accordion"><summary>IIFE</summary>

```html
<script src="https://cdn.jsdelivr.net/gh/jlongyam/env/dist/env.min.js"></script>
<script>
  console.log(env)
</script>
```

</details>

<details name="accordion"><summary>Worker</summary>
<br>

`worker.js`

```js
import env from "https://cdn.jsdelivr.net/gh/jlongyam/env/dist/env.min.mjs";
self.postMessage({
  result: env.worker
})
```

`index.html`

```html
<script>
  const worker = new Worker('./worker.js', { type: 'module' });
  worker.addEventListener('message', (event) => {
    console.log(event.data)
  });
</script>
```

</details>

## Plugins

<details name="accordion"><summary>envGlobal</summary>
<br>

Alternative to `globalThis`

```js
import envGlobal from "@jlongyam/env/global";
```

</details>

## Related

- [polyfill](https://github.com/jlongyam/polyfill)

