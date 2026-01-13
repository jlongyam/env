/**
 * Global object type that represents the global context in different environments
 */
export type GlobalObject = Record<string, any>;

/**
 * Global environment detection object
 *
 * This provides access to the global object in any environment:
 * - Browser: window
 * - Node.js: global
 * - Web Workers: self
 * - Service Workers: self
 * - Modern environments: globalThis
 *
 * @example
 * ```typescript
 * import envGlobal from '@jlongyam/env/global';
 *
 * // Access global object safely
 * envGlobal.console.log('Hello from global');
 *
 * // Check if a global exists
 * if ('fetch' in envGlobal) {
 *   console.log('Fetch API is available');
 * }
 * ```
 */
declare const envGlobal: GlobalObject;

export default envGlobal;
