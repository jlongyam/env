import Bowser from 'bowser';
import envRuntime from './envRuntime.mjs';

let envBrowser = undefined;

if (envRuntime.browser) {
  const browser = Bowser.getParser(window.navigator.userAgent);
  envBrowser = {
    browser: browser.getBrowser(),
    engine: browser.getEngine(),
    os: browser.getOS(),
    platform: browser.getPlatform()
  }
}

export default envBrowser;