
	/*!
	* @jlongyam/env - Basic environment detector
	* Version 4.0.0
	* https://github.com/jlongyam/env
	* MIT License - 2025
	*/

System.register([], (function (exports) {
  
  return {
    execute: (function () {

      // NOTE: this list must be up-to-date with browsers listed in
      // test/acceptance/useragentstrings.yml
      var BROWSER_ALIASES_MAP = {
        'Amazon Silk': 'amazon_silk',
        'Android Browser': 'android',
        Bada: 'bada',
        BlackBerry: 'blackberry',
        Chrome: 'chrome',
        Chromium: 'chromium',
        Electron: 'electron',
        Epiphany: 'epiphany',
        Firefox: 'firefox',
        Focus: 'focus',
        Generic: 'generic',
        'Google Search': 'google_search',
        Googlebot: 'googlebot',
        'Internet Explorer': 'ie',
        'K-Meleon': 'k_meleon',
        Maxthon: 'maxthon',
        'Microsoft Edge': 'edge',
        'MZ Browser': 'mz',
        'NAVER Whale Browser': 'naver',
        Opera: 'opera',
        'Opera Coast': 'opera_coast',
        'Pale Moon': 'pale_moon',
        PhantomJS: 'phantomjs',
        Puffin: 'puffin',
        QupZilla: 'qupzilla',
        QQ: 'qq',
        QQLite: 'qqlite',
        Safari: 'safari',
        Sailfish: 'sailfish',
        'Samsung Internet for Android': 'samsung_internet',
        SeaMonkey: 'seamonkey',
        Sleipnir: 'sleipnir',
        Swing: 'swing',
        Tizen: 'tizen',
        'UC Browser': 'uc',
        Vivaldi: 'vivaldi',
        'WebOS Browser': 'webos',
        WeChat: 'wechat',
        'Yandex Browser': 'yandex',
        Roku: 'roku'
      };
      var BROWSER_MAP = {
        amazon_silk: 'Amazon Silk',
        android: 'Android Browser',
        bada: 'Bada',
        blackberry: 'BlackBerry',
        chrome: 'Chrome',
        chromium: 'Chromium',
        electron: 'Electron',
        epiphany: 'Epiphany',
        firefox: 'Firefox',
        focus: 'Focus',
        generic: 'Generic',
        googlebot: 'Googlebot',
        google_search: 'Google Search',
        ie: 'Internet Explorer',
        k_meleon: 'K-Meleon',
        maxthon: 'Maxthon',
        edge: 'Microsoft Edge',
        mz: 'MZ Browser',
        naver: 'NAVER Whale Browser',
        opera: 'Opera',
        opera_coast: 'Opera Coast',
        pale_moon: 'Pale Moon',
        phantomjs: 'PhantomJS',
        puffin: 'Puffin',
        qupzilla: 'QupZilla',
        qq: 'QQ Browser',
        qqlite: 'QQ Browser Lite',
        safari: 'Safari',
        sailfish: 'Sailfish',
        samsung_internet: 'Samsung Internet for Android',
        seamonkey: 'SeaMonkey',
        sleipnir: 'Sleipnir',
        swing: 'Swing',
        tizen: 'Tizen',
        uc: 'UC Browser',
        vivaldi: 'Vivaldi',
        webos: 'WebOS Browser',
        wechat: 'WeChat',
        yandex: 'Yandex Browser'
      };
      var PLATFORMS_MAP = {
        tablet: 'tablet',
        mobile: 'mobile',
        desktop: 'desktop',
        tv: 'tv',
        bot: 'bot'
      };
      var OS_MAP = {
        WindowsPhone: 'Windows Phone',
        Windows: 'Windows',
        MacOS: 'macOS',
        iOS: 'iOS',
        Android: 'Android',
        WebOS: 'WebOS',
        BlackBerry: 'BlackBerry',
        Bada: 'Bada',
        Tizen: 'Tizen',
        Linux: 'Linux',
        ChromeOS: 'Chrome OS',
        PlayStation4: 'PlayStation 4',
        Roku: 'Roku'
      };
      var ENGINE_MAP = {
        EdgeHTML: 'EdgeHTML',
        Blink: 'Blink',
        Trident: 'Trident',
        Presto: 'Presto',
        Gecko: 'Gecko',
        WebKit: 'WebKit'
      };

      var Utils = function Utils() {};
      Utils.getFirstMatch = function getFirstMatch(regexp, ua) {
        var match = ua.match(regexp);
        return match && match.length > 0 && match[1] || '';
      };

      /**
       * Get second matched item for a string
       * @param regexp
       * @param {String} ua
       * @return {Array|{index: number, input: string}|*|boolean|string}
       */
      Utils.getSecondMatch = function getSecondMatch(regexp, ua) {
        var match = ua.match(regexp);
        return match && match.length > 1 && match[2] || '';
      };

      /**
       * Match a regexp and return a constant or undefined
       * @param {RegExp} regexp
       * @param {String} ua
       * @param {*} _const Any const that will be returned if regexp matches the string
       * @return {*}
       */
      Utils.matchAndReturnConst = function matchAndReturnConst(regexp, ua, _const) {
        if (regexp.test(ua)) {
          return _const;
        }
        return void 0;
      };
      Utils.getWindowsVersionName = function getWindowsVersionName(version) {
        switch (version) {
          case 'NT':
            return 'NT';
          case 'XP':
            return 'XP';
          case 'NT 5.0':
            return '2000';
          case 'NT 5.1':
            return 'XP';
          case 'NT 5.2':
            return '2003';
          case 'NT 6.0':
            return 'Vista';
          case 'NT 6.1':
            return '7';
          case 'NT 6.2':
            return '8';
          case 'NT 6.3':
            return '8.1';
          case 'NT 10.0':
            return '10';
          default:
            return undefined;
        }
      };

      /**
       * Get macOS version name
       *  10.5 - Leopard
       *  10.6 - Snow Leopard
       *  10.7 - Lion
       *  10.8 - Mountain Lion
       *  10.9 - Mavericks
       *  10.10 - Yosemite
       *  10.11 - El Capitan
       *  10.12 - Sierra
       *  10.13 - High Sierra
       *  10.14 - Mojave
       *  10.15 - Catalina
       *
       * @example
       * getMacOSVersionName("10.14") // 'Mojave'
       *
       * @param{string} version
       * @return {string} versionName
       */
      Utils.getMacOSVersionName = function getMacOSVersionName(version) {
        var v = version.split('.').splice(0, 2).map(function (s) {
          return parseInt(s, 10) || 0;
        });
        v.push(0);
        if (v[0] !== 10) {
          return undefined;
        }
        switch (v[1]) {
          case 5:
            return 'Leopard';
          case 6:
            return 'Snow Leopard';
          case 7:
            return 'Lion';
          case 8:
            return 'Mountain Lion';
          case 9:
            return 'Mavericks';
          case 10:
            return 'Yosemite';
          case 11:
            return 'El Capitan';
          case 12:
            return 'Sierra';
          case 13:
            return 'High Sierra';
          case 14:
            return 'Mojave';
          case 15:
            return 'Catalina';
          default:
            return undefined;
        }
      };

      /**
       * Get Android version name
       *  1.5 - Cupcake
       *  1.6 - Donut
       *  2.0 - Eclair
       *  2.1 - Eclair
       *  2.2 - Froyo
       *  2.x - Gingerbread
       *  3.x - Honeycomb
       *  4.0 - Ice Cream Sandwich
       *  4.1 - Jelly Bean
       *  4.4 - KitKat
       *  5.x - Lollipop
       *  6.x - Marshmallow
       *  7.x - Nougat
       *  8.x - Oreo
       *  9.x - Pie
       *
       * @example
       * getAndroidVersionName("7.0") // 'Nougat'
       *
       * @param{string} version
       * @return {string} versionName
       */
      Utils.getAndroidVersionName = function getAndroidVersionName(version) {
        var v = version.split('.').splice(0, 2).map(function (s) {
          return parseInt(s, 10) || 0;
        });
        v.push(0);
        if (v[0] === 1 && v[1] < 5) {
          return undefined;
        }
        if (v[0] === 1 && v[1] < 6) {
          return 'Cupcake';
        }
        if (v[0] === 1 && v[1] >= 6) {
          return 'Donut';
        }
        if (v[0] === 2 && v[1] < 2) {
          return 'Eclair';
        }
        if (v[0] === 2 && v[1] === 2) {
          return 'Froyo';
        }
        if (v[0] === 2 && v[1] > 2) {
          return 'Gingerbread';
        }
        if (v[0] === 3) {
          return 'Honeycomb';
        }
        if (v[0] === 4 && v[1] < 1) {
          return 'Ice Cream Sandwich';
        }
        if (v[0] === 4 && v[1] < 4) {
          return 'Jelly Bean';
        }
        if (v[0] === 4 && v[1] >= 4) {
          return 'KitKat';
        }
        if (v[0] === 5) {
          return 'Lollipop';
        }
        if (v[0] === 6) {
          return 'Marshmallow';
        }
        if (v[0] === 7) {
          return 'Nougat';
        }
        if (v[0] === 8) {
          return 'Oreo';
        }
        if (v[0] === 9) {
          return 'Pie';
        }
        return undefined;
      };

      /**
       * Get version precisions count
       *
       * @example
       * getVersionPrecision("1.10.3") // 3
       *
       * @param{string} version
       * @return {number}
       */
      Utils.getVersionPrecision = function getVersionPrecision(version) {
        return version.split('.').length;
      };

      /**
       * Calculate browser version weight
       *
       * @example
       * compareVersions('1.10.2.1','1.8.2.1.90')  // 1
       * compareVersions('1.010.2.1', '1.09.2.1.90');// 1
       * compareVersions('1.10.2.1','1.10.2.1');   // 0
       * compareVersions('1.10.2.1','1.0800.2');   // -1
       * compareVersions('1.10.2.1','1.10',true);// 0
       *
       * @param {String} versionA versions versions to compare
       * @param {String} versionB versions versions to compare
       * @param {boolean} [isLoose] enable loose comparison
       * @return {Number} comparison result: -1 when versionA is lower,
       * 1 when versionA is bigger, 0 when both equal
       */
      /* eslint consistent-return: 1 */
      Utils.compareVersions = function compareVersions(versionA, versionB, isLoose) {
        if (isLoose === void 0) isLoose = false;

        // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
        var versionAPrecision = Utils.getVersionPrecision(versionA);
        var versionBPrecision = Utils.getVersionPrecision(versionB);
        var precision = Math.max(versionAPrecision, versionBPrecision);
        var lastPrecision = 0;
        var chunks = Utils.map([versionA, versionB], function (version) {
          var delta = precision - Utils.getVersionPrecision(version);

          // 2) "9" -> "9.0" (for precision = 2)
          var _version = version + new Array(delta + 1).join('.0');

          // 3) "9.0" -> ["000000000"", "000000009"]
          return Utils.map(_version.split('.'), function (chunk) {
            return new Array(20 - chunk.length).join('0') + chunk;
          }).reverse();
        });

        // adjust precision for loose comparison
        if (isLoose) {
          lastPrecision = precision - Math.min(versionAPrecision, versionBPrecision);
        }

        // iterate in reverse order by reversed chunks array
        precision -= 1;
        while (precision >= lastPrecision) {
          // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
          if (chunks[0][precision] > chunks[1][precision]) {
            return 1;
          }
          if (chunks[0][precision] === chunks[1][precision]) {
            if (precision === lastPrecision) {
              // all version chunks are same
              return 0;
            }
            precision -= 1;
          } else if (chunks[0][precision] < chunks[1][precision]) {
            return -1;
          }
        }
        return undefined;
      };

      /**
       * Array::map polyfill
       *
       * @param{Array} arr
       * @param{Function} iterator
       * @return {Array}
       */
      Utils.map = function map(arr, iterator) {
        var result = [];
        var i;
        if (Array.prototype.map) {
          return Array.prototype.map.call(arr, iterator);
        }
        for (i = 0; i < arr.length; i += 1) {
          result.push(iterator(arr[i]));
        }
        return result;
      };

      /**
       * Array::find polyfill
       *
       * @param{Array} arr
       * @param{Function} predicate
       * @return {Array}
       */
      Utils.find = function find(arr, predicate) {
        var i;
        var l;
        if (Array.prototype.find) {
          return Array.prototype.find.call(arr, predicate);
        }
        for (i = 0, l = arr.length; i < l; i += 1) {
          var value = arr[i];
          if (predicate(value, i)) {
            return value;
          }
        }
        return undefined;
      };

      /**
       * Object::assign polyfill
       *
       * @param{Object} obj
       * @param{Object} ...objs
       * @return {Object}
       */
      Utils.assign = function assign(obj) {
        var assigners = [],
          len = arguments.length - 1;
        while (len-- > 0) assigners[len] = arguments[len + 1];
        var result = obj;
        var i;
        var l;
        if (Object.assign) {
          return Object.assign.apply(Object, [obj].concat(assigners));
        }
        var loop = function () {
          var assigner = assigners[i];
          if (typeof assigner === 'object' && assigner !== null) {
            var keys = Object.keys(assigner);
            keys.forEach(function (key) {
              result[key] = assigner[key];
            });
          }
        };
        for (i = 0, l = assigners.length; i < l; i += 1) loop();
        return obj;
      };

      /**
       * Get short version/alias for a browser name
       *
       * @example
       * getBrowserAlias('Microsoft Edge') // edge
       *
       * @param{string} browserName
       * @return {string}
       */
      Utils.getBrowserAlias = function getBrowserAlias(browserName) {
        return BROWSER_ALIASES_MAP[browserName];
      };

      /**
       * Get browser name for a short version/alias
       *
       * @example
       * getBrowserTypeByAlias('edge') // Microsoft Edge
       *
       * @param{string} browserAlias
       * @return {string}
       */
      Utils.getBrowserTypeByAlias = function getBrowserTypeByAlias(browserAlias) {
        return BROWSER_MAP[browserAlias] || '';
      };

      /**
       * Browsers' descriptors
       *
       * The idea of descriptors is simple. You should know about them two simple things:
       * 1. Every descriptor has a method or property called `test` and a `describe` method.
       * 2. Order of descriptors is important.
       *
       * More details:
       * 1. Method or property `test` serves as a way to detect whether the UA string
       * matches some certain browser or not. The `describe` method helps to make a result
       * object with params that show some browser-specific things: name, version, etc.
       * 2. Order of descriptors is important because a Parser goes through them one by one
       * in course. For example, if you insert Chrome's descriptor as the first one,
       * more then a half of browsers will be described as Chrome, because they will pass
       * the Chrome descriptor's test.
       *
       * Descriptor's `test` could be a property with an array of RegExps, where every RegExp
       * will be applied to a UA string to test it whether it matches or not.
       * If a descriptor has two or more regexps in the `test` array it tests them one by one
       * with a logical sum operation. Parser stops if it has found any RegExp that matches the UA.
       *
       * Or `test` could be a method. In that case it gets a Parser instance and should
       * return true/false to get the Parser know if this browser descriptor matches the UA or not.
       */

      var commonVersionIdentifier = /version\/(\d+(\.?_?\d+)+)/i;
      var browsersList = [/* Googlebot */
      {
        test: [/googlebot/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Googlebot'
          };
          var version = Utils.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, /* Opera < 13.0 */
      {
        test: [/opera/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Opera'
          };
          var version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, /* Opera > 13.0 */
      {
        test: [/opr\/|opios/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Opera'
          };
          var version = Utils.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/SamsungBrowser/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Samsung Internet for Android'
          };
          var version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/Whale/i],
        describe: function describe(ua) {
          var browser = {
            name: 'NAVER Whale Browser'
          };
          var version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/PaleMoon/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Pale Moon'
          };
          var version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/MZBrowser/i],
        describe: function describe(ua) {
          var browser = {
            name: 'MZ Browser'
          };
          var version = Utils.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/focus/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Focus'
          };
          var version = Utils.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/swing/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Swing'
          };
          var version = Utils.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/coast/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Opera Coast'
          };
          var version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/opt\/\d+(?:.?_?\d+)+/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Opera Touch'
          };
          var version = Utils.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/yabrowser/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Yandex Browser'
          };
          var version = Utils.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/ucbrowser/i],
        describe: function describe(ua) {
          var browser = {
            name: 'UC Browser'
          };
          var version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/Maxthon|mxios/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Maxthon'
          };
          var version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/epiphany/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Epiphany'
          };
          var version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/puffin/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Puffin'
          };
          var version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/sleipnir/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Sleipnir'
          };
          var version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/k-meleon/i],
        describe: function describe(ua) {
          var browser = {
            name: 'K-Meleon'
          };
          var version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/micromessenger/i],
        describe: function describe(ua) {
          var browser = {
            name: 'WeChat'
          };
          var version = Utils.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/qqbrowser/i],
        describe: function describe(ua) {
          var browser = {
            name: /qqbrowserlite/i.test(ua) ? 'QQ Browser Lite' : 'QQ Browser'
          };
          var version = Utils.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/msie|trident/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Internet Explorer'
          };
          var version = Utils.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/\sedg\//i],
        describe: function describe(ua) {
          var browser = {
            name: 'Microsoft Edge'
          };
          var version = Utils.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/edg([ea]|ios)/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Microsoft Edge'
          };
          var version = Utils.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/vivaldi/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Vivaldi'
          };
          var version = Utils.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/seamonkey/i],
        describe: function describe(ua) {
          var browser = {
            name: 'SeaMonkey'
          };
          var version = Utils.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/sailfish/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Sailfish'
          };
          var version = Utils.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/silk/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Amazon Silk'
          };
          var version = Utils.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/phantom/i],
        describe: function describe(ua) {
          var browser = {
            name: 'PhantomJS'
          };
          var version = Utils.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/slimerjs/i],
        describe: function describe(ua) {
          var browser = {
            name: 'SlimerJS'
          };
          var version = Utils.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
        describe: function describe(ua) {
          var browser = {
            name: 'BlackBerry'
          };
          var version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/(web|hpw)[o0]s/i],
        describe: function describe(ua) {
          var browser = {
            name: 'WebOS Browser'
          };
          var version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/bada/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Bada'
          };
          var version = Utils.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/tizen/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Tizen'
          };
          var version = Utils.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/qupzilla/i],
        describe: function describe(ua) {
          var browser = {
            name: 'QupZilla'
          };
          var version = Utils.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/firefox|iceweasel|fxios/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Firefox'
          };
          var version = Utils.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/electron/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Electron'
          };
          var version = Utils.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/MiuiBrowser/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Miui'
          };
          var version = Utils.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/chromium/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Chromium'
          };
          var version = Utils.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/chrome|crios|crmo/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Chrome'
          };
          var version = Utils.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, {
        test: [/GSA/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Google Search'
          };
          var version = Utils.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, /* Android Browser */
      {
        test: function test(parser) {
          var notLikeAndroid = !parser.test(/like android/i);
          var butAndroid = parser.test(/android/i);
          return notLikeAndroid && butAndroid;
        },
        describe: function describe(ua) {
          var browser = {
            name: 'Android Browser'
          };
          var version = Utils.getFirstMatch(commonVersionIdentifier, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, /* PlayStation 4 */
      {
        test: [/playstation 4/i],
        describe: function describe(ua) {
          var browser = {
            name: 'PlayStation 4'
          };
          var version = Utils.getFirstMatch(commonVersionIdentifier, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, /* Safari */
      {
        test: [/safari|applewebkit/i],
        describe: function describe(ua) {
          var browser = {
            name: 'Safari'
          };
          var version = Utils.getFirstMatch(commonVersionIdentifier, ua);
          if (version) {
            browser.version = version;
          }
          return browser;
        }
      }, /* Something else */
      {
        test: [/.*/i],
        describe: function describe(ua) {
          /* Here we try to make sure that there are explicit details about the device
           * in order to decide what regexp exactly we want to apply
           * (as there is a specific decision based on that conclusion)
           */
          var regexpWithoutDeviceSpec = /^(.*)\/(.*) /;
          var regexpWithDeviceSpec = /^(.*)\/(.*)[ \t]\((.*)/;
          var hasDeviceSpec = ua.search('\\(') !== -1;
          var regexp = hasDeviceSpec ? regexpWithDeviceSpec : regexpWithoutDeviceSpec;
          return {
            name: Utils.getFirstMatch(regexp, ua),
            version: Utils.getSecondMatch(regexp, ua)
          };
        }
      }];

      var osParsersList = [/* Roku */
      {
        test: [/Roku\/DVP/],
        describe: function describe(ua) {
          var version = Utils.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, ua);
          return {
            name: OS_MAP.Roku,
            version: version
          };
        }
      }, /* Windows Phone */
      {
        test: [/windows phone/i],
        describe: function describe(ua) {
          var version = Utils.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, ua);
          return {
            name: OS_MAP.WindowsPhone,
            version: version
          };
        }
      }, /* Windows */
      {
        test: [/windows /i],
        describe: function describe(ua) {
          var version = Utils.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, ua);
          var versionName = Utils.getWindowsVersionName(version);
          return {
            name: OS_MAP.Windows,
            version: version,
            versionName: versionName
          };
        }
      }, /* Firefox on iPad */
      {
        test: [/Macintosh(.*?) FxiOS(.*?)\//],
        describe: function describe(ua) {
          var result = {
            name: OS_MAP.iOS
          };
          var version = Utils.getSecondMatch(/(Version\/)(\d[\d.]+)/, ua);
          if (version) {
            result.version = version;
          }
          return result;
        }
      }, /* macOS */
      {
        test: [/macintosh/i],
        describe: function describe(ua) {
          var version = Utils.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, ua).replace(/[_\s]/g, '.');
          var versionName = Utils.getMacOSVersionName(version);
          var os = {
            name: OS_MAP.MacOS,
            version: version
          };
          if (versionName) {
            os.versionName = versionName;
          }
          return os;
        }
      }, /* iOS */
      {
        test: [/(ipod|iphone|ipad)/i],
        describe: function describe(ua) {
          var version = Utils.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, ua).replace(/[_\s]/g, '.');
          return {
            name: OS_MAP.iOS,
            version: version
          };
        }
      }, /* Android */
      {
        test: function test(parser) {
          var notLikeAndroid = !parser.test(/like android/i);
          var butAndroid = parser.test(/android/i);
          return notLikeAndroid && butAndroid;
        },
        describe: function describe(ua) {
          var version = Utils.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, ua);
          var versionName = Utils.getAndroidVersionName(version);
          var os = {
            name: OS_MAP.Android,
            version: version
          };
          if (versionName) {
            os.versionName = versionName;
          }
          return os;
        }
      }, /* WebOS */
      {
        test: [/(web|hpw)[o0]s/i],
        describe: function describe(ua) {
          var version = Utils.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, ua);
          var os = {
            name: OS_MAP.WebOS
          };
          if (version && version.length) {
            os.version = version;
          }
          return os;
        }
      }, /* BlackBerry */
      {
        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
        describe: function describe(ua) {
          var version = Utils.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, ua) || Utils.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, ua) || Utils.getFirstMatch(/\bbb(\d+)/i, ua);
          return {
            name: OS_MAP.BlackBerry,
            version: version
          };
        }
      }, /* Bada */
      {
        test: [/bada/i],
        describe: function describe(ua) {
          var version = Utils.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, ua);
          return {
            name: OS_MAP.Bada,
            version: version
          };
        }
      }, /* Tizen */
      {
        test: [/tizen/i],
        describe: function describe(ua) {
          var version = Utils.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, ua);
          return {
            name: OS_MAP.Tizen,
            version: version
          };
        }
      }, /* Linux */
      {
        test: [/linux/i],
        describe: function describe() {
          return {
            name: OS_MAP.Linux
          };
        }
      }, /* Chrome OS */
      {
        test: [/CrOS/],
        describe: function describe() {
          return {
            name: OS_MAP.ChromeOS
          };
        }
      }, /* Playstation 4 */
      {
        test: [/PlayStation 4/],
        describe: function describe(ua) {
          var version = Utils.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, ua);
          return {
            name: OS_MAP.PlayStation4,
            version: version
          };
        }
      }];

      /*
       * Tablets go first since usually they have more specific
       * signs to detect.
       */

      var platformParsersList = [/* Googlebot */
      {
        test: [/googlebot/i],
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.bot,
            vendor: 'Google'
          };
        }
      }, /* Huawei */
      {
        test: [/huawei/i],
        describe: function describe(ua) {
          var model = Utils.getFirstMatch(/(can-l01)/i, ua) && 'Nova';
          var platform = {
            type: PLATFORMS_MAP.mobile,
            vendor: 'Huawei'
          };
          if (model) {
            platform.model = model;
          }
          return platform;
        }
      }, /* Nexus Tablet */
      {
        test: [/nexus\s*(?:7|8|9|10).*/i],
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.tablet,
            vendor: 'Nexus'
          };
        }
      }, /* iPad */
      {
        test: [/ipad/i],
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.tablet,
            vendor: 'Apple',
            model: 'iPad'
          };
        }
      }, /* Firefox on iPad */
      {
        test: [/Macintosh(.*?) FxiOS(.*?)\//],
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.tablet,
            vendor: 'Apple',
            model: 'iPad'
          };
        }
      }, /* Amazon Kindle Fire */
      {
        test: [/kftt build/i],
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.tablet,
            vendor: 'Amazon',
            model: 'Kindle Fire HD 7'
          };
        }
      }, /* Another Amazon Tablet with Silk */
      {
        test: [/silk/i],
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.tablet,
            vendor: 'Amazon'
          };
        }
      }, /* Tablet */
      {
        test: [/tablet(?! pc)/i],
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.tablet
          };
        }
      }, /* iPod/iPhone */
      {
        test: function test(parser) {
          var iDevice = parser.test(/ipod|iphone/i);
          var likeIDevice = parser.test(/like (ipod|iphone)/i);
          return iDevice && !likeIDevice;
        },
        describe: function describe(ua) {
          var model = Utils.getFirstMatch(/(ipod|iphone)/i, ua);
          return {
            type: PLATFORMS_MAP.mobile,
            vendor: 'Apple',
            model: model
          };
        }
      }, /* Nexus Mobile */
      {
        test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.mobile,
            vendor: 'Nexus'
          };
        }
      }, /* Nokia */
      {
        test: [/Nokia/i],
        describe: function describe(ua) {
          var model = Utils.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i, ua);
          var platform = {
            type: PLATFORMS_MAP.mobile,
            vendor: 'Nokia'
          };
          if (model) {
            platform.model = model;
          }
          return platform;
        }
      }, /* Mobile */
      {
        test: [/[^-]mobi/i],
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.mobile
          };
        }
      }, /* BlackBerry */
      {
        test: function test(parser) {
          return parser.getBrowserName(true) === 'blackberry';
        },
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.mobile,
            vendor: 'BlackBerry'
          };
        }
      }, /* Bada */
      {
        test: function test(parser) {
          return parser.getBrowserName(true) === 'bada';
        },
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.mobile
          };
        }
      }, /* Windows Phone */
      {
        test: function test(parser) {
          return parser.getBrowserName() === 'windows phone';
        },
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.mobile,
            vendor: 'Microsoft'
          };
        }
      }, /* Android Tablet */
      {
        test: function test(parser) {
          var osMajorVersion = Number(String(parser.getOSVersion()).split('.')[0]);
          return parser.getOSName(true) === 'android' && osMajorVersion >= 3;
        },
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.tablet
          };
        }
      }, /* Android Mobile */
      {
        test: function test(parser) {
          return parser.getOSName(true) === 'android';
        },
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.mobile
          };
        }
      }, /* desktop */
      {
        test: function test(parser) {
          return parser.getOSName(true) === 'macos';
        },
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.desktop,
            vendor: 'Apple'
          };
        }
      }, /* Windows */
      {
        test: function test(parser) {
          return parser.getOSName(true) === 'windows';
        },
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.desktop
          };
        }
      }, /* Linux */
      {
        test: function test(parser) {
          return parser.getOSName(true) === 'linux';
        },
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.desktop
          };
        }
      }, /* PlayStation 4 */
      {
        test: function test(parser) {
          return parser.getOSName(true) === 'playstation 4';
        },
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.tv
          };
        }
      }, /* Roku */
      {
        test: function test(parser) {
          return parser.getOSName(true) === 'roku';
        },
        describe: function describe() {
          return {
            type: PLATFORMS_MAP.tv
          };
        }
      }];

      /*
       * More specific goes first
       */
      var enginesParsersList = [/* EdgeHTML */
      {
        test: function test(parser) {
          return parser.getBrowserName(true) === 'microsoft edge';
        },
        describe: function describe(ua) {
          var isBlinkBased = /\sedg\//i.test(ua);

          // return blink if it's blink-based one
          if (isBlinkBased) {
            return {
              name: ENGINE_MAP.Blink
            };
          }

          // otherwise match the version and return EdgeHTML
          var version = Utils.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, ua);
          return {
            name: ENGINE_MAP.EdgeHTML,
            version: version
          };
        }
      }, /* Trident */
      {
        test: [/trident/i],
        describe: function describe(ua) {
          var engine = {
            name: ENGINE_MAP.Trident
          };
          var version = Utils.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            engine.version = version;
          }
          return engine;
        }
      }, /* Presto */
      {
        test: function test(parser) {
          return parser.test(/presto/i);
        },
        describe: function describe(ua) {
          var engine = {
            name: ENGINE_MAP.Presto
          };
          var version = Utils.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            engine.version = version;
          }
          return engine;
        }
      }, /* Gecko */
      {
        test: function test(parser) {
          var isGecko = parser.test(/gecko/i);
          var likeGecko = parser.test(/like gecko/i);
          return isGecko && !likeGecko;
        },
        describe: function describe(ua) {
          var engine = {
            name: ENGINE_MAP.Gecko
          };
          var version = Utils.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            engine.version = version;
          }
          return engine;
        }
      }, /* Blink */
      {
        test: [/(apple)?webkit\/537\.36/i],
        describe: function describe() {
          return {
            name: ENGINE_MAP.Blink
          };
        }
      }, /* WebKit */
      {
        test: [/(apple)?webkit/i],
        describe: function describe(ua) {
          var engine = {
            name: ENGINE_MAP.WebKit
          };
          var version = Utils.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, ua);
          if (version) {
            engine.version = version;
          }
          return engine;
        }
      }];

      /**
       * The main class that arranges the whole parsing process.
       */
      var Parser = function Parser(UA, skipParsing) {
        if (skipParsing === void 0) skipParsing = false;
        if (UA === void 0 || UA === null || UA === '') {
          throw new Error("UserAgent parameter can't be empty");
        }
        this._ua = UA;

        /**
         * @typedef ParsedResult
         * @property {Object} browser
         * @property {String|undefined} [browser.name]
         * Browser name, like `"Chrome"` or `"Internet Explorer"`
         * @property {String|undefined} [browser.version] Browser version as a String `"12.01.45334.10"`
         * @property {Object} os
         * @property {String|undefined} [os.name] OS name, like `"Windows"` or `"macOS"`
         * @property {String|undefined} [os.version] OS version, like `"NT 5.1"` or `"10.11.1"`
         * @property {String|undefined} [os.versionName] OS name, like `"XP"` or `"High Sierra"`
         * @property {Object} platform
         * @property {String|undefined} [platform.type]
         * platform type, can be either `"desktop"`, `"tablet"` or `"mobile"`
         * @property {String|undefined} [platform.vendor] Vendor of the device,
         * like `"Apple"` or `"Samsung"`
         * @property {String|undefined} [platform.model] Device model,
         * like `"iPhone"` or `"Kindle Fire HD 7"`
         * @property {Object} engine
         * @property {String|undefined} [engine.name]
         * Can be any of this: `WebKit`, `Blink`, `Gecko`, `Trident`, `Presto`, `EdgeHTML`
         * @property {String|undefined} [engine.version] String version of the engine
         */
        this.parsedResult = {};
        if (skipParsing !== true) {
          this.parse();
        }
      };

      /**
       * Get UserAgent string of current Parser instance
       * @return {String} User-Agent String of the current <Parser> object
       *
       * @public
       */
      Parser.prototype.getUA = function getUA() {
        return this._ua;
      };

      /**
       * Test a UA string for a regexp
       * @param {RegExp} regex
       * @return {Boolean}
       */
      Parser.prototype.test = function test(regex) {
        return regex.test(this._ua);
      };

      /**
       * Get parsed browser object
       * @return {Object}
       */
      Parser.prototype.parseBrowser = function parseBrowser() {
        var this$1$1 = this;
        this.parsedResult.browser = {};
        var browserDescriptor = Utils.find(browsersList, function (_browser) {
          if (typeof _browser.test === 'function') {
            return _browser.test(this$1$1);
          }
          if (Array.isArray(_browser.test)) {
            return _browser.test.some(function (condition) {
              return this$1$1.test(condition);
            });
          }
          throw new Error("Browser's test function is not valid");
        });
        if (browserDescriptor) {
          this.parsedResult.browser = browserDescriptor.describe(this.getUA());
        }
        return this.parsedResult.browser;
      };

      /**
       * Get parsed browser object
       * @return {Object}
       *
       * @public
       */
      Parser.prototype.getBrowser = function getBrowser() {
        if (this.parsedResult.browser) {
          return this.parsedResult.browser;
        }
        return this.parseBrowser();
      };

      /**
       * Get browser's name
       * @return {String} Browser's name or an empty string
       *
       * @public
       */
      Parser.prototype.getBrowserName = function getBrowserName(toLowerCase) {
        if (toLowerCase) {
          return String(this.getBrowser().name).toLowerCase() || '';
        }
        return this.getBrowser().name || '';
      };

      /**
       * Get browser's version
       * @return {String} version of browser
       *
       * @public
       */
      Parser.prototype.getBrowserVersion = function getBrowserVersion() {
        return this.getBrowser().version;
      };

      /**
       * Get OS
       * @return {Object}
       *
       * @example
       * this.getOS();
       * {
       * name: 'macOS',
       * version: '10.11.12'
       * }
       */
      Parser.prototype.getOS = function getOS() {
        if (this.parsedResult.os) {
          return this.parsedResult.os;
        }
        return this.parseOS();
      };

      /**
       * Parse OS and save it to this.parsedResult.os
       * @return {*|{}}
       */
      Parser.prototype.parseOS = function parseOS() {
        var this$1$1 = this;
        this.parsedResult.os = {};
        var os = Utils.find(osParsersList, function (_os) {
          if (typeof _os.test === 'function') {
            return _os.test(this$1$1);
          }
          if (Array.isArray(_os.test)) {
            return _os.test.some(function (condition) {
              return this$1$1.test(condition);
            });
          }
          throw new Error("Browser's test function is not valid");
        });
        if (os) {
          this.parsedResult.os = os.describe(this.getUA());
        }
        return this.parsedResult.os;
      };

      /**
       * Get OS name
       * @param {Boolean} [toLowerCase] return lower-cased value
       * @return {String} name of the OS — macOS, Windows, Linux, etc.
       */
      Parser.prototype.getOSName = function getOSName(toLowerCase) {
        var ref = this.getOS();
        var name = ref.name;
        if (toLowerCase) {
          return String(name).toLowerCase() || '';
        }
        return name || '';
      };

      /**
       * Get OS version
       * @return {String} full version with dots ('10.11.12', '5.6', etc)
       */
      Parser.prototype.getOSVersion = function getOSVersion() {
        return this.getOS().version;
      };

      /**
       * Get parsed platform
       * @return {{}}
       */
      Parser.prototype.getPlatform = function getPlatform() {
        if (this.parsedResult.platform) {
          return this.parsedResult.platform;
        }
        return this.parsePlatform();
      };

      /**
       * Get platform name
       * @param {Boolean} [toLowerCase=false]
       * @return {*}
       */
      Parser.prototype.getPlatformType = function getPlatformType(toLowerCase) {
        if (toLowerCase === void 0) toLowerCase = false;
        var ref = this.getPlatform();
        var type = ref.type;
        if (toLowerCase) {
          return String(type).toLowerCase() || '';
        }
        return type || '';
      };

      /**
       * Get parsed platform
       * @return {{}}
       */
      Parser.prototype.parsePlatform = function parsePlatform() {
        var this$1$1 = this;
        this.parsedResult.platform = {};
        var platform = Utils.find(platformParsersList, function (_platform) {
          if (typeof _platform.test === 'function') {
            return _platform.test(this$1$1);
          }
          if (Array.isArray(_platform.test)) {
            return _platform.test.some(function (condition) {
              return this$1$1.test(condition);
            });
          }
          throw new Error("Browser's test function is not valid");
        });
        if (platform) {
          this.parsedResult.platform = platform.describe(this.getUA());
        }
        return this.parsedResult.platform;
      };

      /**
       * Get parsed engine
       * @return {{}}
       */
      Parser.prototype.getEngine = function getEngine() {
        if (this.parsedResult.engine) {
          return this.parsedResult.engine;
        }
        return this.parseEngine();
      };

      /**
       * Get engines's name
       * @return {String} Engines's name or an empty string
       *
       * @public
       */
      Parser.prototype.getEngineName = function getEngineName(toLowerCase) {
        if (toLowerCase) {
          return String(this.getEngine().name).toLowerCase() || '';
        }
        return this.getEngine().name || '';
      };

      /**
       * Get parsed platform
       * @return {{}}
       */
      Parser.prototype.parseEngine = function parseEngine() {
        var this$1$1 = this;
        this.parsedResult.engine = {};
        var engine = Utils.find(enginesParsersList, function (_engine) {
          if (typeof _engine.test === 'function') {
            return _engine.test(this$1$1);
          }
          if (Array.isArray(_engine.test)) {
            return _engine.test.some(function (condition) {
              return this$1$1.test(condition);
            });
          }
          throw new Error("Browser's test function is not valid");
        });
        if (engine) {
          this.parsedResult.engine = engine.describe(this.getUA());
        }
        return this.parsedResult.engine;
      };

      /**
       * Parse full information about the browser
       * @returns {Parser}
       */
      Parser.prototype.parse = function parse() {
        this.parseBrowser();
        this.parseOS();
        this.parsePlatform();
        this.parseEngine();
        return this;
      };

      /**
       * Get parsed result
       * @return {ParsedResult}
       */
      Parser.prototype.getResult = function getResult() {
        return Utils.assign({}, this.parsedResult);
      };

      /**
       * Check if parsed browser matches certain conditions
       *
       * @param {Object} checkTree It's one or two layered object,
       * which can include a platform or an OS on the first layer
       * and should have browsers specs on the bottom-laying layer
       *
       * @returns {Boolean|undefined} Whether the browser satisfies the set conditions or not.
       * Returns `undefined` when the browser is no described in the checkTree object.
       *
       * @example
       * const browser = Bowser.getParser(window.navigator.userAgent);
       * if (browser.satisfies({chrome: '>118.01.1322' }))
       * // or with os
       * if (browser.satisfies({windows: { chrome: '>118.01.1322' } }))
       * // or with platforms
       * if (browser.satisfies({desktop: { chrome: '>118.01.1322' } }))
       */
      Parser.prototype.satisfies = function satisfies(checkTree) {
        var this$1$1 = this;
        var platformsAndOSes = {};
        var platformsAndOSCounter = 0;
        var browsers = {};
        var browsersCounter = 0;
        var allDefinitions = Object.keys(checkTree);
        allDefinitions.forEach(function (key) {
          var currentDefinition = checkTree[key];
          if (typeof currentDefinition === 'string') {
            browsers[key] = currentDefinition;
            browsersCounter += 1;
          } else if (typeof currentDefinition === 'object') {
            platformsAndOSes[key] = currentDefinition;
            platformsAndOSCounter += 1;
          }
        });
        if (platformsAndOSCounter > 0) {
          var platformsAndOSNames = Object.keys(platformsAndOSes);
          var OSMatchingDefinition = Utils.find(platformsAndOSNames, function (name) {
            return this$1$1.isOS(name);
          });
          if (OSMatchingDefinition) {
            var osResult = this.satisfies(platformsAndOSes[OSMatchingDefinition]);
            if (osResult !== void 0) {
              return osResult;
            }
          }
          var platformMatchingDefinition = Utils.find(platformsAndOSNames, function (name) {
            return this$1$1.isPlatform(name);
          });
          if (platformMatchingDefinition) {
            var platformResult = this.satisfies(platformsAndOSes[platformMatchingDefinition]);
            if (platformResult !== void 0) {
              return platformResult;
            }
          }
        }
        if (browsersCounter > 0) {
          var browserNames = Object.keys(browsers);
          var matchingDefinition = Utils.find(browserNames, function (name) {
            return this$1$1.isBrowser(name, true);
          });
          if (matchingDefinition !== void 0) {
            return this.compareVersion(browsers[matchingDefinition]);
          }
        }
        return undefined;
      };

      /**
       * Check if the browser name equals the passed string
       * @param {string} browserName The string to compare with the browser name
       * @param [includingAlias=false] The flag showing whether alias will be included into comparison
       * @returns {boolean}
       */
      Parser.prototype.isBrowser = function isBrowser(browserName, includingAlias) {
        if (includingAlias === void 0) includingAlias = false;
        var defaultBrowserName = this.getBrowserName().toLowerCase();
        var browserNameLower = browserName.toLowerCase();
        var alias = Utils.getBrowserTypeByAlias(browserNameLower);
        if (includingAlias && alias) {
          browserNameLower = alias.toLowerCase();
        }
        return browserNameLower === defaultBrowserName;
      };
      Parser.prototype.compareVersion = function compareVersion(version) {
        var expectedResults = [0];
        var comparableVersion = version;
        var isLoose = false;
        var currentBrowserVersion = this.getBrowserVersion();
        if (typeof currentBrowserVersion !== 'string') {
          return void 0;
        }
        if (version[0] === '>' || version[0] === '<') {
          comparableVersion = version.substr(1);
          if (version[1] === '=') {
            isLoose = true;
            comparableVersion = version.substr(2);
          } else {
            expectedResults = [];
          }
          if (version[0] === '>') {
            expectedResults.push(1);
          } else {
            expectedResults.push(-1);
          }
        } else if (version[0] === '=') {
          comparableVersion = version.substr(1);
        } else if (version[0] === '~') {
          isLoose = true;
          comparableVersion = version.substr(1);
        }
        return expectedResults.indexOf(Utils.compareVersions(currentBrowserVersion, comparableVersion, isLoose)) > -1;
      };

      /**
       * Check if the OS name equals the passed string
       * @param {string} osName The string to compare with the OS name
       * @returns {boolean}
       */
      Parser.prototype.isOS = function isOS(osName) {
        return this.getOSName(true) === String(osName).toLowerCase();
      };

      /**
       * Check if the platform type equals the passed string
       * @param {string} platformType The string to compare with the platform type
       * @returns {boolean}
       */
      Parser.prototype.isPlatform = function isPlatform(platformType) {
        return this.getPlatformType(true) === String(platformType).toLowerCase();
      };

      /**
       * Check if the engine name equals the passed string
       * @param {string} engineName The string to compare with the engine name
       * @returns {boolean}
       */
      Parser.prototype.isEngine = function isEngine(engineName) {
        return this.getEngineName(true) === String(engineName).toLowerCase();
      };

      /**
       * Is anything? Check if the browser is called "anything",
       * the OS called "anything" or the platform called "anything"
       * @param {String} anything
       * @param [includingAlias=false] The flag showing whether alias will be included into comparison
       * @returns {Boolean}
       */
      Parser.prototype.is = function is(anything, includingAlias) {
        if (includingAlias === void 0) includingAlias = false;
        return this.isBrowser(anything, includingAlias) || this.isOS(anything) || this.isPlatform(anything);
      };

      /**
       * Check if any of the given values satisfies this.is(anything)
       * @param {String[]} anythings
       * @returns {Boolean}
       */
      Parser.prototype.some = function some(anythings) {
        var this$1$1 = this;
        if (anythings === void 0) anythings = [];
        return anythings.some(function (anything) {
          return this$1$1.is(anything);
        });
      };

      /*!
       * Bowser - a browser detector
       * https://github.com/lancedikson/bowser
       * MIT License | (c) Dustin Diaz 2012-2015
       * MIT License | (c) Denis Demchenko 2015-2019
       */

      /**
       * Bowser class.
       * Keep it simple as much as it can be.
       * It's supposed to work with collections of {@link Parser} instances
       * rather then solve one-instance problems.
       * All the one-instance stuff is located in Parser class.
       *
       * @class
       * @classdesc Bowser is a static object, that provides an API to the Parsers
       * @hideconstructor
       */
      var Bowser = function Bowser() {};
      var staticAccessors = {
        BROWSER_MAP: {
          configurable: true
        },
        ENGINE_MAP: {
          configurable: true
        },
        OS_MAP: {
          configurable: true
        },
        PLATFORMS_MAP: {
          configurable: true
        }
      };
      Bowser.getParser = function getParser(UA, skipParsing) {
        if (skipParsing === void 0) skipParsing = false;
        if (typeof UA !== 'string') {
          throw new Error('UserAgent should be a string');
        }
        return new Parser(UA, skipParsing);
      };

      /**
       * Creates a {@link Parser} instance and runs {@link Parser.getResult} immediately
       *
       * @param UA
       * @return {ParsedResult}
       *
       * @example
       * const result = Bowser.parse(window.navigator.userAgent);
       */
      Bowser.parse = function parse(UA) {
        return new Parser(UA).getResult();
      };
      staticAccessors.BROWSER_MAP.get = function () {
        return BROWSER_MAP;
      };
      staticAccessors.ENGINE_MAP.get = function () {
        return ENGINE_MAP;
      };
      staticAccessors.OS_MAP.get = function () {
        return OS_MAP;
      };
      staticAccessors.PLATFORMS_MAP.get = function () {
        return PLATFORMS_MAP;
      };
      Object.defineProperties(Bowser, staticAccessors);

      var browser$1 = typeof window !== 'undefined';
      var envRuntime = {
        browser: browser$1};

      var envBrowser = undefined;
      if (envRuntime.browser) {
        var browser = Bowser.getParser(window.navigator.userAgent);
        envBrowser = {
          browser: browser.getBrowser(),
          engine: browser.getEngine(),
          os: browser.getOS(),
          platform: browser.getPlatform()
        };
      }
      var envBrowser$1 = exports("default", envBrowser);

    })
  };
}));
