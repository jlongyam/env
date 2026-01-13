/**
 * Browser information interface
 */
export interface BrowserInfo {
  /**
   * Browser name and version
   */
  name?: string;
  version?: string;
}

/**
 * Engine information interface
 */
export interface EngineInfo {
  /**
   * Engine name and version
   */
  name?: string;
  version?: string;
}

/**
 * Operating system information interface
 */
export interface OSInfo {
  /**
   * OS name and version
   */
  name?: string;
  version?: string;
}

/**
 * Platform information interface
 */
export interface PlatformInfo {
  /**
   * Platform type (mobile, tablet, desktop, etc.)
   */
  type?: string;
  vendor?: string;
}

/**
 * Browser environment detection interface
 */
export interface EnvBrowser {
  /**
   * Browser details (name and version)
   */
  browser: BrowserInfo;

  /**
   * Rendering engine details (name and version)
   */
  engine: EngineInfo;

  /**
   * Operating system details (name and version)
   */
  os: OSInfo;

  /**
   * Platform details (type and vendor)
   */
  platform: PlatformInfo;
}

/**
 * Browser environment detection object
 *
 * @example
 * ```typescript
 * import envBrowser from '@jlongyam/env/browser';
 *
 * console.log(envBrowser.browser.name); // e.g., "Chrome"
 * console.log(envBrowser.os.name);      // e.g., "macOS"
 * console.log(envBrowser.platform.type); // e.g., "desktop"
 * ```
 */
declare const envBrowser: EnvBrowser;

export default envBrowser;
