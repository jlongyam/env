import Bowser from 'bowser';

const browser = Bowser.getParser(window.navigator.userAgent)
const envBrowser = {
  browser: browser.getBrowser(),
  engine: browser.getEngine(),
  os: browser.getOS(),
  platform: browser.getPlatform()
}

export default envBrowser
