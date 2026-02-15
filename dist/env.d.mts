export default env;
declare namespace env {
    export { browser };
    export { worker };
    export { cli };
}
declare const browser: boolean;
declare const worker: boolean;
declare const cli: boolean;
