export { env as default };
declare namespace env {
    export { browser };
    export { worker };
    export let cli: boolean;
}
declare var browser: boolean;
declare var worker: boolean;
