# env

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

<details name="accordion"><summary>IIFE</summary>

```html
<script src="https://esm.sh/gh/jlongyam/env"></script>
<script>
  console.log(env)
</script>
```

</details>

<details name="accordion"><summary>Worker</summary>
<br>

`worker.js`

```js
import env from "https://esm.sh/gh/jlongyam/env";
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

