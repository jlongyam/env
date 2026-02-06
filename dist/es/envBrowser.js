function _typeof(o) {
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
  } : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

var BROWSER_ALIASES_MAP = {
  "Amazon Silk": "amazon_silk",
  "Android Browser": "android",
  Bada: "bada",
  BlackBerry: "blackberry",
  Chrome: "chrome",
  Chromium: "chromium",
  Electron: "electron",
  Epiphany: "epiphany",
  Firefox: "firefox",
  Focus: "focus",
  Generic: "generic",
  "Google Search": "google_search",
  Googlebot: "googlebot",
  "Internet Explorer": "ie",
  "K-Meleon": "k_meleon",
  Maxthon: "maxthon",
  "Microsoft Edge": "edge",
  "MZ Browser": "mz",
  "NAVER Whale Browser": "naver",
  Opera: "opera",
  "Opera Coast": "opera_coast",
  "Pale Moon": "pale_moon",
  PhantomJS: "phantomjs",
  Puffin: "puffin",
  QupZilla: "qupzilla",
  QQ: "qq",
  QQLite: "qqlite",
  Safari: "safari",
  Sailfish: "sailfish",
  "Samsung Internet for Android": "samsung_internet",
  SeaMonkey: "seamonkey",
  Sleipnir: "sleipnir",
  Swing: "swing",
  Tizen: "tizen",
  "UC Browser": "uc",
  Vivaldi: "vivaldi",
  "WebOS Browser": "webos",
  WeChat: "wechat",
  "Yandex Browser": "yandex",
  Roku: "roku"
}, BROWSER_MAP = {
  amazon_silk: "Amazon Silk",
  android: "Android Browser",
  bada: "Bada",
  blackberry: "BlackBerry",
  chrome: "Chrome",
  chromium: "Chromium",
  electron: "Electron",
  epiphany: "Epiphany",
  firefox: "Firefox",
  focus: "Focus",
  generic: "Generic",
  googlebot: "Googlebot",
  google_search: "Google Search",
  ie: "Internet Explorer",
  k_meleon: "K-Meleon",
  maxthon: "Maxthon",
  edge: "Microsoft Edge",
  mz: "MZ Browser",
  naver: "NAVER Whale Browser",
  opera: "Opera",
  opera_coast: "Opera Coast",
  pale_moon: "Pale Moon",
  phantomjs: "PhantomJS",
  puffin: "Puffin",
  qupzilla: "QupZilla",
  qq: "QQ Browser",
  qqlite: "QQ Browser Lite",
  safari: "Safari",
  sailfish: "Sailfish",
  samsung_internet: "Samsung Internet for Android",
  seamonkey: "SeaMonkey",
  sleipnir: "Sleipnir",
  swing: "Swing",
  tizen: "Tizen",
  uc: "UC Browser",
  vivaldi: "Vivaldi",
  webos: "WebOS Browser",
  wechat: "WeChat",
  yandex: "Yandex Browser"
}, PLATFORMS_MAP = {
  tablet: "tablet",
  mobile: "mobile",
  desktop: "desktop",
  tv: "tv",
  bot: "bot"
}, OS_MAP = {
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MacOS: "macOS",
  iOS: "iOS",
  Android: "Android",
  WebOS: "WebOS",
  BlackBerry: "BlackBerry",
  Bada: "Bada",
  Tizen: "Tizen",
  Linux: "Linux",
  ChromeOS: "Chrome OS",
  PlayStation4: "PlayStation 4",
  Roku: "Roku"
}, ENGINE_MAP = {
  EdgeHTML: "EdgeHTML",
  Blink: "Blink",
  Trident: "Trident",
  Presto: "Presto",
  Gecko: "Gecko",
  WebKit: "WebKit"
};

class Utils {
  static getFirstMatch(regexp, ua) {
    var match = ua.match(regexp);
    return match && match.length > 0 && match[1] || "";
  }
  static getSecondMatch(regexp, ua) {
    var match = ua.match(regexp);
    return match && match.length > 1 && match[2] || "";
  }
  static matchAndReturnConst(regexp, ua, _const) {
    if (regexp.test(ua)) return _const;
  }
  static getWindowsVersionName(version) {
    switch (version) {
     case "NT":
      return "NT";

     case "XP":
     case "NT 5.1":
      return "XP";

     case "NT 5.0":
      return "2000";

     case "NT 5.2":
      return "2003";

     case "NT 6.0":
      return "Vista";

     case "NT 6.1":
      return "7";

     case "NT 6.2":
      return "8";

     case "NT 6.3":
      return "8.1";

     case "NT 10.0":
      return "10";

     default:
      return;
    }
  }
  static getMacOSVersionName(version) {
    var v = version.split(".").splice(0, 2).map(function(s) {
      return parseInt(s, 10) || 0;
    });
    if (v.push(0), 10 === v[0]) switch (v[1]) {
     case 5:
      return "Leopard";

     case 6:
      return "Snow Leopard";

     case 7:
      return "Lion";

     case 8:
      return "Mountain Lion";

     case 9:
      return "Mavericks";

     case 10:
      return "Yosemite";

     case 11:
      return "El Capitan";

     case 12:
      return "Sierra";

     case 13:
      return "High Sierra";

     case 14:
      return "Mojave";

     case 15:
      return "Catalina";

     default:
      return;
    }
  }
  static getAndroidVersionName(version) {
    var v = version.split(".").splice(0, 2).map(function(s) {
      return parseInt(s, 10) || 0;
    });
    if (v.push(0), !(1 === v[0] && v[1] < 5)) return 1 === v[0] && v[1] < 6 ? "Cupcake" : 1 === v[0] && v[1] >= 6 ? "Donut" : 2 === v[0] && v[1] < 2 ? "Eclair" : 2 === v[0] && 2 === v[1] ? "Froyo" : 2 === v[0] && v[1] > 2 ? "Gingerbread" : 3 === v[0] ? "Honeycomb" : 4 === v[0] && v[1] < 1 ? "Ice Cream Sandwich" : 4 === v[0] && v[1] < 4 ? "Jelly Bean" : 4 === v[0] && v[1] >= 4 ? "KitKat" : 5 === v[0] ? "Lollipop" : 6 === v[0] ? "Marshmallow" : 7 === v[0] ? "Nougat" : 8 === v[0] ? "Oreo" : 9 === v[0] ? "Pie" : void 0;
  }
  static getVersionPrecision(version) {
    return version.split(".").length;
  }
  static compareVersions(versionA, versionB) {
    var isLoose = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], versionAPrecision = Utils.getVersionPrecision(versionA), versionBPrecision = Utils.getVersionPrecision(versionB), precision = Math.max(versionAPrecision, versionBPrecision), lastPrecision = 0, chunks = Utils.map([ versionA, versionB ], function(version) {
      var delta = precision - Utils.getVersionPrecision(version), _version = version + new Array(delta + 1).join(".0");
      return Utils.map(_version.split("."), function(chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });
    for (isLoose && (lastPrecision = precision - Math.min(versionAPrecision, versionBPrecision)), 
    precision -= 1; precision >= lastPrecision; ) {
      if (chunks[0][precision] > chunks[1][precision]) return 1;
      if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === lastPrecision) return 0;
        precision -= 1;
      } else if (chunks[0][precision] < chunks[1][precision]) return -1;
    }
  }
  static map(arr, iterator) {
    var i, result = [];
    if (Array.prototype.map) return Array.prototype.map.call(arr, iterator);
    for (i = 0; i < arr.length; i += 1) result.push(iterator(arr[i]));
    return result;
  }
  static find(arr, predicate) {
    var i, l;
    if (Array.prototype.find) return Array.prototype.find.call(arr, predicate);
    for (i = 0, l = arr.length; i < l; i += 1) {
      var value = arr[i];
      if (predicate(value, i)) return value;
    }
  }
  static assign(obj) {
    for (var i, l, result = obj, _len = arguments.length, assigners = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) assigners[_key - 1] = arguments[_key];
    if (Object.assign) return Object.assign(obj, ...assigners);
    var _loop = function() {
      var assigner = assigners[i];
      "object" === _typeof(assigner) && null !== assigner && Object.keys(assigner).forEach(function(key) {
        result[key] = assigner[key];
      });
    };
    for (i = 0, l = assigners.length; i < l; i += 1) _loop();
    return obj;
  }
  static getBrowserAlias(browserName) {
    return BROWSER_ALIASES_MAP[browserName];
  }
  static getBrowserTypeByAlias(browserAlias) {
    return BROWSER_MAP[browserAlias] || "";
  }
}

var commonVersionIdentifier = /version\/(\d+(\.?_?\d+)+)/i, browsersList = [ {
  test: [ /googlebot/i ],
  describe(ua) {
    var browser = {
      name: "Googlebot"
    }, version = Utils.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /opera/i ],
  describe(ua) {
    var browser = {
      name: "Opera"
    }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /opr\/|opios/i ],
  describe(ua) {
    var browser = {
      name: "Opera"
    }, version = Utils.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /SamsungBrowser/i ],
  describe(ua) {
    var browser = {
      name: "Samsung Internet for Android"
    }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /Whale/i ],
  describe(ua) {
    var browser = {
      name: "NAVER Whale Browser"
    }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /PaleMoon/i ],
  describe(ua) {
    var browser = {
      name: "Pale Moon"
    }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /MZBrowser/i ],
  describe(ua) {
    var browser = {
      name: "MZ Browser"
    }, version = Utils.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /focus/i ],
  describe(ua) {
    var browser = {
      name: "Focus"
    }, version = Utils.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /swing/i ],
  describe(ua) {
    var browser = {
      name: "Swing"
    }, version = Utils.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /coast/i ],
  describe(ua) {
    var browser = {
      name: "Opera Coast"
    }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /opt\/\d+(?:.?_?\d+)+/i ],
  describe(ua) {
    var browser = {
      name: "Opera Touch"
    }, version = Utils.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /yabrowser/i ],
  describe(ua) {
    var browser = {
      name: "Yandex Browser"
    }, version = Utils.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /ucbrowser/i ],
  describe(ua) {
    var browser = {
      name: "UC Browser"
    }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /Maxthon|mxios/i ],
  describe(ua) {
    var browser = {
      name: "Maxthon"
    }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /epiphany/i ],
  describe(ua) {
    var browser = {
      name: "Epiphany"
    }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /puffin/i ],
  describe(ua) {
    var browser = {
      name: "Puffin"
    }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /sleipnir/i ],
  describe(ua) {
    var browser = {
      name: "Sleipnir"
    }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /k-meleon/i ],
  describe(ua) {
    var browser = {
      name: "K-Meleon"
    }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /micromessenger/i ],
  describe(ua) {
    var browser = {
      name: "WeChat"
    }, version = Utils.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /qqbrowser/i ],
  describe(ua) {
    var browser = {
      name: /qqbrowserlite/i.test(ua) ? "QQ Browser Lite" : "QQ Browser"
    }, version = Utils.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /msie|trident/i ],
  describe(ua) {
    var browser = {
      name: "Internet Explorer"
    }, version = Utils.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /\sedg\//i ],
  describe(ua) {
    var browser = {
      name: "Microsoft Edge"
    }, version = Utils.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /edg([ea]|ios)/i ],
  describe(ua) {
    var browser = {
      name: "Microsoft Edge"
    }, version = Utils.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /vivaldi/i ],
  describe(ua) {
    var browser = {
      name: "Vivaldi"
    }, version = Utils.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /seamonkey/i ],
  describe(ua) {
    var browser = {
      name: "SeaMonkey"
    }, version = Utils.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /sailfish/i ],
  describe(ua) {
    var browser = {
      name: "Sailfish"
    }, version = Utils.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /silk/i ],
  describe(ua) {
    var browser = {
      name: "Amazon Silk"
    }, version = Utils.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /phantom/i ],
  describe(ua) {
    var browser = {
      name: "PhantomJS"
    }, version = Utils.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /slimerjs/i ],
  describe(ua) {
    var browser = {
      name: "SlimerJS"
    }, version = Utils.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /blackberry|\bbb\d+/i, /rim\stablet/i ],
  describe(ua) {
    var browser = {
      name: "BlackBerry"
    }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /(web|hpw)[o0]s/i ],
  describe(ua) {
    var browser = {
      name: "WebOS Browser"
    }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /bada/i ],
  describe(ua) {
    var browser = {
      name: "Bada"
    }, version = Utils.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /tizen/i ],
  describe(ua) {
    var browser = {
      name: "Tizen"
    }, version = Utils.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /qupzilla/i ],
  describe(ua) {
    var browser = {
      name: "QupZilla"
    }, version = Utils.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /firefox|iceweasel|fxios/i ],
  describe(ua) {
    var browser = {
      name: "Firefox"
    }, version = Utils.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /electron/i ],
  describe(ua) {
    var browser = {
      name: "Electron"
    }, version = Utils.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /MiuiBrowser/i ],
  describe(ua) {
    var browser = {
      name: "Miui"
    }, version = Utils.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /chromium/i ],
  describe(ua) {
    var browser = {
      name: "Chromium"
    }, version = Utils.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /chrome|crios|crmo/i ],
  describe(ua) {
    var browser = {
      name: "Chrome"
    }, version = Utils.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /GSA/i ],
  describe(ua) {
    var browser = {
      name: "Google Search"
    }, version = Utils.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test(parser) {
    var notLikeAndroid = !parser.test(/like android/i), butAndroid = parser.test(/android/i);
    return notLikeAndroid && butAndroid;
  },
  describe(ua) {
    var browser = {
      name: "Android Browser"
    }, version = Utils.getFirstMatch(commonVersionIdentifier, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /playstation 4/i ],
  describe(ua) {
    var browser = {
      name: "PlayStation 4"
    }, version = Utils.getFirstMatch(commonVersionIdentifier, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /safari|applewebkit/i ],
  describe(ua) {
    var browser = {
      name: "Safari"
    }, version = Utils.getFirstMatch(commonVersionIdentifier, ua);
    return version && (browser.version = version), browser;
  }
}, {
  test: [ /.*/i ],
  describe(ua) {
    var regexp = -1 !== ua.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
    return {
      name: Utils.getFirstMatch(regexp, ua),
      version: Utils.getSecondMatch(regexp, ua)
    };
  }
} ], osParsersList = [ {
  test: [ /Roku\/DVP/ ],
  describe(ua) {
    var version = Utils.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, ua);
    return {
      name: OS_MAP.Roku,
      version: version
    };
  }
}, {
  test: [ /windows phone/i ],
  describe(ua) {
    var version = Utils.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, ua);
    return {
      name: OS_MAP.WindowsPhone,
      version: version
    };
  }
}, {
  test: [ /windows /i ],
  describe(ua) {
    var version = Utils.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, ua), versionName = Utils.getWindowsVersionName(version);
    return {
      name: OS_MAP.Windows,
      version: version,
      versionName: versionName
    };
  }
}, {
  test: [ /Macintosh(.*?) FxiOS(.*?)\// ],
  describe(ua) {
    var result = {
      name: OS_MAP.iOS
    }, version = Utils.getSecondMatch(/(Version\/)(\d[\d.]+)/, ua);
    return version && (result.version = version), result;
  }
}, {
  test: [ /macintosh/i ],
  describe(ua) {
    var version = Utils.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, ua).replace(/[_\s]/g, "."), versionName = Utils.getMacOSVersionName(version), os = {
      name: OS_MAP.MacOS,
      version: version
    };
    return versionName && (os.versionName = versionName), os;
  }
}, {
  test: [ /(ipod|iphone|ipad)/i ],
  describe(ua) {
    var version = Utils.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, ua).replace(/[_\s]/g, ".");
    return {
      name: OS_MAP.iOS,
      version: version
    };
  }
}, {
  test(parser) {
    var notLikeAndroid = !parser.test(/like android/i), butAndroid = parser.test(/android/i);
    return notLikeAndroid && butAndroid;
  },
  describe(ua) {
    var version = Utils.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, ua), versionName = Utils.getAndroidVersionName(version), os = {
      name: OS_MAP.Android,
      version: version
    };
    return versionName && (os.versionName = versionName), os;
  }
}, {
  test: [ /(web|hpw)[o0]s/i ],
  describe(ua) {
    var version = Utils.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, ua), os = {
      name: OS_MAP.WebOS
    };
    return version && version.length && (os.version = version), os;
  }
}, {
  test: [ /blackberry|\bbb\d+/i, /rim\stablet/i ],
  describe(ua) {
    var version = Utils.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, ua) || Utils.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, ua) || Utils.getFirstMatch(/\bbb(\d+)/i, ua);
    return {
      name: OS_MAP.BlackBerry,
      version: version
    };
  }
}, {
  test: [ /bada/i ],
  describe(ua) {
    var version = Utils.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, ua);
    return {
      name: OS_MAP.Bada,
      version: version
    };
  }
}, {
  test: [ /tizen/i ],
  describe(ua) {
    var version = Utils.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, ua);
    return {
      name: OS_MAP.Tizen,
      version: version
    };
  }
}, {
  test: [ /linux/i ],
  describe: () => ({
    name: OS_MAP.Linux
  })
}, {
  test: [ /CrOS/ ],
  describe: () => ({
    name: OS_MAP.ChromeOS
  })
}, {
  test: [ /PlayStation 4/ ],
  describe(ua) {
    var version = Utils.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, ua);
    return {
      name: OS_MAP.PlayStation4,
      version: version
    };
  }
} ], platformParsersList = [ {
  test: [ /googlebot/i ],
  describe: () => ({
    type: PLATFORMS_MAP.bot,
    vendor: "Google"
  })
}, {
  test: [ /huawei/i ],
  describe(ua) {
    var model = Utils.getFirstMatch(/(can-l01)/i, ua) && "Nova", platform = {
      type: PLATFORMS_MAP.mobile,
      vendor: "Huawei"
    };
    return model && (platform.model = model), platform;
  }
}, {
  test: [ /nexus\s*(?:7|8|9|10).*/i ],
  describe: () => ({
    type: PLATFORMS_MAP.tablet,
    vendor: "Nexus"
  })
}, {
  test: [ /ipad/i ],
  describe: () => ({
    type: PLATFORMS_MAP.tablet,
    vendor: "Apple",
    model: "iPad"
  })
}, {
  test: [ /Macintosh(.*?) FxiOS(.*?)\// ],
  describe: () => ({
    type: PLATFORMS_MAP.tablet,
    vendor: "Apple",
    model: "iPad"
  })
}, {
  test: [ /kftt build/i ],
  describe: () => ({
    type: PLATFORMS_MAP.tablet,
    vendor: "Amazon",
    model: "Kindle Fire HD 7"
  })
}, {
  test: [ /silk/i ],
  describe: () => ({
    type: PLATFORMS_MAP.tablet,
    vendor: "Amazon"
  })
}, {
  test: [ /tablet(?! pc)/i ],
  describe: () => ({
    type: PLATFORMS_MAP.tablet
  })
}, {
  test(parser) {
    var iDevice = parser.test(/ipod|iphone/i), likeIDevice = parser.test(/like (ipod|iphone)/i);
    return iDevice && !likeIDevice;
  },
  describe(ua) {
    var model = Utils.getFirstMatch(/(ipod|iphone)/i, ua);
    return {
      type: PLATFORMS_MAP.mobile,
      vendor: "Apple",
      model: model
    };
  }
}, {
  test: [ /nexus\s*[0-6].*/i, /galaxy nexus/i ],
  describe: () => ({
    type: PLATFORMS_MAP.mobile,
    vendor: "Nexus"
  })
}, {
  test: [ /Nokia/i ],
  describe(ua) {
    var model = Utils.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i, ua), platform = {
      type: PLATFORMS_MAP.mobile,
      vendor: "Nokia"
    };
    return model && (platform.model = model), platform;
  }
}, {
  test: [ /[^-]mobi/i ],
  describe: () => ({
    type: PLATFORMS_MAP.mobile
  })
}, {
  test: parser => "blackberry" === parser.getBrowserName(!0),
  describe: () => ({
    type: PLATFORMS_MAP.mobile,
    vendor: "BlackBerry"
  })
}, {
  test: parser => "bada" === parser.getBrowserName(!0),
  describe: () => ({
    type: PLATFORMS_MAP.mobile
  })
}, {
  test: parser => "windows phone" === parser.getBrowserName(),
  describe: () => ({
    type: PLATFORMS_MAP.mobile,
    vendor: "Microsoft"
  })
}, {
  test(parser) {
    var osMajorVersion = Number(String(parser.getOSVersion()).split(".")[0]);
    return "android" === parser.getOSName(!0) && osMajorVersion >= 3;
  },
  describe: () => ({
    type: PLATFORMS_MAP.tablet
  })
}, {
  test: parser => "android" === parser.getOSName(!0),
  describe: () => ({
    type: PLATFORMS_MAP.mobile
  })
}, {
  test: parser => "macos" === parser.getOSName(!0),
  describe: () => ({
    type: PLATFORMS_MAP.desktop,
    vendor: "Apple"
  })
}, {
  test: parser => "windows" === parser.getOSName(!0),
  describe: () => ({
    type: PLATFORMS_MAP.desktop
  })
}, {
  test: parser => "linux" === parser.getOSName(!0),
  describe: () => ({
    type: PLATFORMS_MAP.desktop
  })
}, {
  test: parser => "playstation 4" === parser.getOSName(!0),
  describe: () => ({
    type: PLATFORMS_MAP.tv
  })
}, {
  test: parser => "roku" === parser.getOSName(!0),
  describe: () => ({
    type: PLATFORMS_MAP.tv
  })
} ], enginesParsersList = [ {
  test: parser => "microsoft edge" === parser.getBrowserName(!0),
  describe(ua) {
    if (/\sedg\//i.test(ua)) return {
      name: ENGINE_MAP.Blink
    };
    var version = Utils.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, ua);
    return {
      name: ENGINE_MAP.EdgeHTML,
      version: version
    };
  }
}, {
  test: [ /trident/i ],
  describe(ua) {
    var engine = {
      name: ENGINE_MAP.Trident
    }, version = Utils.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, ua);
    return version && (engine.version = version), engine;
  }
}, {
  test: parser => parser.test(/presto/i),
  describe(ua) {
    var engine = {
      name: ENGINE_MAP.Presto
    }, version = Utils.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, ua);
    return version && (engine.version = version), engine;
  }
}, {
  test(parser) {
    var isGecko = parser.test(/gecko/i), likeGecko = parser.test(/like gecko/i);
    return isGecko && !likeGecko;
  },
  describe(ua) {
    var engine = {
      name: ENGINE_MAP.Gecko
    }, version = Utils.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, ua);
    return version && (engine.version = version), engine;
  }
}, {
  test: [ /(apple)?webkit\/537\.36/i ],
  describe: () => ({
    name: ENGINE_MAP.Blink
  })
}, {
  test: [ /(apple)?webkit/i ],
  describe(ua) {
    var engine = {
      name: ENGINE_MAP.WebKit
    }, version = Utils.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, ua);
    return version && (engine.version = version), engine;
  }
} ];

class Parser {
  constructor(UA) {
    var skipParsing = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == UA || "" === UA) throw new Error("UserAgent parameter can't be empty");
    this._ua = UA, this.parsedResult = {}, !0 !== skipParsing && this.parse();
  }
  getUA() {
    return this._ua;
  }
  test(regex) {
    return regex.test(this._ua);
  }
  parseBrowser() {
    var _this = this;
    this.parsedResult.browser = {};
    var browserDescriptor = Utils.find(browsersList, function(_browser) {
      if ("function" == typeof _browser.test) return _browser.test(_this);
      if (Array.isArray(_browser.test)) return _browser.test.some(function(condition) {
        return _this.test(condition);
      });
      throw new Error("Browser's test function is not valid");
    });
    return browserDescriptor && (this.parsedResult.browser = browserDescriptor.describe(this.getUA())), 
    this.parsedResult.browser;
  }
  getBrowser() {
    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
  }
  getBrowserName(toLowerCase) {
    return toLowerCase ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
  }
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  parseOS() {
    var _this2 = this;
    this.parsedResult.os = {};
    var os = Utils.find(osParsersList, function(_os) {
      if ("function" == typeof _os.test) return _os.test(_this2);
      if (Array.isArray(_os.test)) return _os.test.some(function(condition) {
        return _this2.test(condition);
      });
      throw new Error("Browser's test function is not valid");
    });
    return os && (this.parsedResult.os = os.describe(this.getUA())), this.parsedResult.os;
  }
  getOSName(toLowerCase) {
    var name = this.getOS().name;
    return toLowerCase ? String(name).toLowerCase() || "" : name || "";
  }
  getOSVersion() {
    return this.getOS().version;
  }
  getPlatform() {
    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
  }
  getPlatformType() {
    var toLowerCase = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], type = this.getPlatform().type;
    return toLowerCase ? String(type).toLowerCase() || "" : type || "";
  }
  parsePlatform() {
    var _this3 = this;
    this.parsedResult.platform = {};
    var platform = Utils.find(platformParsersList, function(_platform) {
      if ("function" == typeof _platform.test) return _platform.test(_this3);
      if (Array.isArray(_platform.test)) return _platform.test.some(function(condition) {
        return _this3.test(condition);
      });
      throw new Error("Browser's test function is not valid");
    });
    return platform && (this.parsedResult.platform = platform.describe(this.getUA())), 
    this.parsedResult.platform;
  }
  getEngine() {
    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
  }
  getEngineName(toLowerCase) {
    return toLowerCase ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
  }
  parseEngine() {
    var _this4 = this;
    this.parsedResult.engine = {};
    var engine = Utils.find(enginesParsersList, function(_engine) {
      if ("function" == typeof _engine.test) return _engine.test(_this4);
      if (Array.isArray(_engine.test)) return _engine.test.some(function(condition) {
        return _this4.test(condition);
      });
      throw new Error("Browser's test function is not valid");
    });
    return engine && (this.parsedResult.engine = engine.describe(this.getUA())), this.parsedResult.engine;
  }
  parse() {
    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), 
    this;
  }
  getResult() {
    return Utils.assign({}, this.parsedResult);
  }
  satisfies(checkTree) {
    var _this5 = this, platformsAndOSes = {}, platformsAndOSCounter = 0, browsers = {}, browsersCounter = 0;
    if (Object.keys(checkTree).forEach(function(key) {
      var currentDefinition = checkTree[key];
      "string" == typeof currentDefinition ? (browsers[key] = currentDefinition, browsersCounter += 1) : "object" === _typeof(currentDefinition) && (platformsAndOSes[key] = currentDefinition, 
      platformsAndOSCounter += 1);
    }), platformsAndOSCounter > 0) {
      var platformsAndOSNames = Object.keys(platformsAndOSes), OSMatchingDefinition = Utils.find(platformsAndOSNames, function(name) {
        return _this5.isOS(name);
      });
      if (OSMatchingDefinition) {
        var osResult = this.satisfies(platformsAndOSes[OSMatchingDefinition]);
        if (void 0 !== osResult) return osResult;
      }
      var platformMatchingDefinition = Utils.find(platformsAndOSNames, function(name) {
        return _this5.isPlatform(name);
      });
      if (platformMatchingDefinition) {
        var platformResult = this.satisfies(platformsAndOSes[platformMatchingDefinition]);
        if (void 0 !== platformResult) return platformResult;
      }
    }
    if (browsersCounter > 0) {
      var browserNames = Object.keys(browsers), matchingDefinition = Utils.find(browserNames, function(name) {
        return _this5.isBrowser(name, !0);
      });
      if (void 0 !== matchingDefinition) return this.compareVersion(browsers[matchingDefinition]);
    }
  }
  isBrowser(browserName) {
    var includingAlias = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], defaultBrowserName = this.getBrowserName().toLowerCase(), browserNameLower = browserName.toLowerCase(), alias = Utils.getBrowserTypeByAlias(browserNameLower);
    return includingAlias && alias && (browserNameLower = alias.toLowerCase()), browserNameLower === defaultBrowserName;
  }
  compareVersion(version) {
    var expectedResults = [ 0 ], comparableVersion = version, isLoose = !1, currentBrowserVersion = this.getBrowserVersion();
    if ("string" == typeof currentBrowserVersion) return ">" === version[0] || "<" === version[0] ? (comparableVersion = version.substr(1), 
    "=" === version[1] ? (isLoose = !0, comparableVersion = version.substr(2)) : expectedResults = [], 
    ">" === version[0] ? expectedResults.push(1) : expectedResults.push(-1)) : "=" === version[0] ? comparableVersion = version.substr(1) : "~" === version[0] && (isLoose = !0, 
    comparableVersion = version.substr(1)), expectedResults.indexOf(Utils.compareVersions(currentBrowserVersion, comparableVersion, isLoose)) > -1;
  }
  isOS(osName) {
    return this.getOSName(!0) === String(osName).toLowerCase();
  }
  isPlatform(platformType) {
    return this.getPlatformType(!0) === String(platformType).toLowerCase();
  }
  isEngine(engineName) {
    return this.getEngineName(!0) === String(engineName).toLowerCase();
  }
  is(anything) {
    var includingAlias = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return this.isBrowser(anything, includingAlias) || this.isOS(anything) || this.isPlatform(anything);
  }
  some() {
    var _this6 = this;
    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).some(function(anything) {
      return _this6.is(anything);
    });
  }
}

var browser = class {
  static getParser(UA) {
    var skipParsing = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if ("string" != typeof UA) throw new Error("UserAgent should be a string");
    return new Parser(UA, skipParsing);
  }
  static parse(UA) {
    return new Parser(UA).getResult();
  }
  static get BROWSER_MAP() {
    return BROWSER_MAP;
  }
  static get ENGINE_MAP() {
    return ENGINE_MAP;
  }
  static get OS_MAP() {
    return OS_MAP;
  }
  static get PLATFORMS_MAP() {
    return PLATFORMS_MAP;
  }
}.getParser(window.navigator.userAgent), envBrowser = {
  browser: browser.getBrowser(),
  engine: browser.getEngine(),
  os: browser.getOS(),
  platform: browser.getPlatform()
};

export { envBrowser as default };
