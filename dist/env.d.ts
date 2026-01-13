/**
 * Environment detection interface
 */
export interface EnvDetection {
  /**
   * Indicates if code is running in a browser environment
   * True when window object is available
   */
  browser: boolean;

  /**
   * Indicates if code is running in a Web Worker environment
   * True when importScripts function is available
   */
  worker: boolean;

  /**
   * Indicates if code is running in a CLI/Node.js environment
   * True when neither browser nor worker environment is detected
   */
  cli: boolean;
}

/**
 * Environment detection object
 *
 * @example
 * ```typescript
 * import env from '@jlongyam/env';
 *
 * if (env.browser) {
 *   console.log('Running in browser');
 * }
 *
 * if (env.cli) {
 *   console.log('Running in Node.js');
 * }
 * ```
 */
declare const env: EnvDetection;

export default env;
