(function (a, b) {
    'use strict';
    var e = '?',
        f = 'function',
        g = 'undefined',
        h = 'object',
        n = 'model',
        o = 'name',
        r = 'type',
        s = 'vendor',
        t = 'version',
        u = 'architecture',
        v = 'console',
        w = 'mobile',
        x = 'tablet',
        y = 'smarttv',
        z = 'wearable',
        B = {
            extend: function (I, J) {
                var K = {};
                for (var L in I) K[L] = J[L] && 0 == J[L].length % 2 ? J[L].concat(I[L]) : I[L];
                return K
            },
            has: function (I, J) {
                return !('string' != typeof I) && -1 !== J.toLowerCase().indexOf(I.toLowerCase())
            },
            lowerize: function (I) {
                return I.toLowerCase()
            },
            major: function (I) {
                return typeof I == 'string' ? I.replace(/[^\d\.]/g, '').split('.')[0] : b
            },
            trim: function (I) {
                return I.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
            }
        },
        C = {
            rgx: function (I, J) {
                for (var L, M, N, O, P, Q, K = 0; K < J.length && !P;) {
                    var R = J[K],
                        S = J[K + 1];
                    for (L = M = 0; L < R.length && !P;)
                        if (P = R[L++].exec(I), !!P)
                            for (N = 0; N < S.length; N++) Q = P[++M], O = S[N], typeof O == h && 0 < O.length ? 2 == O.length ? typeof O[1] == f ? this[O[0]] = O[1].call(this, Q) : this[O[0]] = O[1] : 3 == O.length ? typeof O[1] != f || O[1].exec && O[1].test ? this[O[0]] = Q ? Q.replace(O[1], O[2]) : b : this[O[0]] = Q ? O[1].call(this, Q, O[2]) : b : 4 == O.length && (this[O[0]] = Q ? O[3].call(this, Q.replace(O[1], O[2])) : b) : this[O] = Q ? Q : b;
                    K += 2
                }
            },
            str: function (I, J) {
                for (var K in J)
                    if (typeof J[K] == h && 0 < J[K].length) {
                        for (var L = 0; L < J[K].length; L++)
                            if (B.has(J[K][L], I)) return K === e ? b : K;
                    } else if (B.has(J[K], I)) return K === e ? b : K;
                return I
            }
        },
        D = {
            browser: {
                oldsafari: {
                    version: {
                        '1.0': '/8',
                        '1.2': '/1',
                        '1.3': '/3',
                        '2.0': '/412',
                        '2.0.2': '/416',
                        '2.0.3': '/417',
                        '2.0.4': '/419',
                        '?': '/'
                    }
                }
            },
            device: {
                amazon: {
                    model: {
                        'Fire Phone': ['SD', 'KF']
                    }
                },
                sprint: {
                    model: {
                        'Evo Shift 4G': '7373KT'
                    },
                    vendor: {
                        HTC: 'APA',
                        Sprint: 'Sprint'
                    }
                }
            },
            os: {
                windows: {
                    version: {
                        7: 'NT 6.1',
                        8: 'NT 6.2',
                        10: ['NT 6.4', 'NT 10.0'],
                        2000: 'NT 5.0',
                        ME: '4.90',
                        'NT 3.11': 'NT3.51',
                        'NT 4.0': 'NT4.0',
                        XP: ['NT 5.1', 'NT 5.2'],
                        Vista: 'NT 6.0',
                        '8.1': 'NT 6.3',
                        RT: 'ARM'
                    }
                }
            }
        },
        E = {
            browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [o, t], [/(opios)[\/\s]+([\w\.]+)/i], [[o, 'Opera Mini'], t], [/\s(opr)\/([\w\.]+)/i], [[o, 'Opera'], t], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i], [o, t], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[o, 'IE'], t], [/(edge)\/((\d+)?[\w\.]+)/i], [o, t], [/(yabrowser)\/([\w\.]+)/i], [[o, 'Yandex'], t], [/(puffin)\/([\w\.]+)/i], [[o, 'Puffin'], t], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[o, 'UCBrowser'], t], [/(comodo_dragon)\/([\w\.]+)/i], [[o, /_/g, ' '], t], [/(micromessenger)\/([\w\.]+)/i], [[o, 'WeChat'], t], [/(QQ)\/([\d\.]+)/i], [o, t], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [o, t], [/(BIDUBrowser)[\/\s]?([\w\.]+)/i], [o, t], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [o, t], [/(MetaSr)[\/\s]?([\w\.]+)/i], [o], [/(LBBROWSER)/i], [o], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [t, [o, 'MIUI Browser']], [/;fbav\/([\w\.]+);/i], [t, [o, 'Facebook']], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [t, [o, 'Chrome Headless']], [/\swv\).+(chrome)\/([\w\.]+)/i], [[o, /(.+)/, '$1 WebView'], t], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[o, /(.+(?:g|us))(.+)/, '$1 $2'], t], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [t, [o, 'Android Browser']], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [o, t], [/(dolfin)\/([\w\.]+)/i], [[o, 'Dolphin'], t], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[o, 'Chrome'], t], [/(coast)\/([\w\.]+)/i], [[o, 'Opera Coast'], t], [/fxios\/([\w\.-]+)/i], [t, [o, 'Firefox']], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [t, [o, 'Mobile Safari']], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [t, o], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[o, 'GSA'], t], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [o, [t, C.str, D.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [o, t], [/(navigator|netscape)\/([\w\.-]+)/i], [[o, 'Netscape'], t], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [o, t]],
            cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[u, 'amd64']], [/(ia32(?=;))/i], [[u, B.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[u, 'ia32']], [/windows\s(ce|mobile);\sppc;/i], [[u, 'arm']], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[u, /ower/, '', B.lowerize]], [/(sun4\w)[;\)]/i], [[u, 'sparc']], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[u, B.lowerize]]],
            device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [n, s, [r, x]], [/applecoremedia\/[\w\.]+ \((ipad)/], [n, [s, 'Apple'], [r, x]], [/(apple\s{0,1}tv)/i], [[n, 'Apple TV'], [s, 'Apple']], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [s, n, [r, x]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [n, [s, 'Amazon'], [r, x]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[n, C.str, D.device.amazon.model], [s, 'Amazon'], [r, w]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [n, s, [r, w]], [/\((ip[honed|\s\w*]+);/i], [n, [s, 'Apple'], [r, w]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [s, n, [r, w]], [/\(bb10;\s(\w+)/i], [n, [s, 'BlackBerry'], [r, w]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [n, [s, 'Asus'], [r, x]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[s, 'Sony'], [n, 'Xperia Tablet'], [r, x]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [n, [s, 'Sony'], [r, w]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [s, n, [r, v]], [/android.+;\s(shield)\sbuild/i], [n, [s, 'Nvidia'], [r, v]], [/(playstation\s[34portablevi]+)/i], [n, [s, 'Sony'], [r, v]], [/(sprint\s(\w+))/i], [[s, C.str, D.device.sprint.vendor], [n, C.str, D.device.sprint.model], [r, w]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [s, n, [r, x]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [s, [n, /_/g, ' '], [r, w]], [/(nexus\s9)/i], [n, [s, 'HTC'], [r, x]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [n, [s, 'Huawei'], [r, w]], [/(microsoft);\s(lumia[\s\w]+)/i], [s, n, [r, w]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [n, [s, 'Microsoft'], [r, v]], [/(kin\.[onetw]{3})/i], [[n, /\./g, ' '], [s, 'Microsoft'], [r, w]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [n, [s, 'Motorola'], [r, w]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [n, [s, 'Motorola'], [r, x]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[s, B.trim], [n, B.trim], [r, y]], [/hbbtv.+maple;(\d+)/i], [[n, /^/, 'SmartTV'], [s, 'Samsung'], [r, y]], [/\(dtv[\);].+(aquos)/i], [n, [s, 'Sharp'], [r, y]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[s, 'Samsung'], n, [r, x]], [/smart-tv.+(samsung)/i], [s, [r, y], n], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[s, 'Samsung'], n, [r, w]], [/sie-(\w+)*/i], [n, [s, 'Siemens'], [r, w]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[s, 'Nokia'], n, [r, w]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [n, [s, 'Acer'], [r, x]], [/android.+([vl]k\-?\d{3})\s+build/i], [n, [s, 'LG'], [r, x]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[s, 'LG'], n, [r, x]], [/(lg) netcast\.tv/i], [s, n, [r, y]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i, /android.+lg(\-?[\d\w]+)\s+build/i], [n, [s, 'LG'], [r, w]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [n, [s, 'Lenovo'], [r, x]], [/linux;.+((jolla));/i], [s, n, [r, w]], [/((pebble))app\/[\d\.]+\s/i], [s, n, [r, z]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [s, n, [r, w]], [/crkey/i], [[n, 'Chromecast'], [s, 'Google']], [/android.+;\s(glass)\s\d/i], [n, [s, 'Google'], [r, z]], [/android.+;\s(pixel c)\s/i], [n, [s, 'Google'], [r, x]], [/android.+;\s(pixel xl|pixel)\s/i], [n, [s, 'Google'], [r, w]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w?)?[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i], [[n, /_/g, ' '], [s, 'Xiaomi'], [r, w]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+)?)\s+build/i], [[n, /_/g, ' '], [s, 'Xiaomi'], [r, x]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [n, [s, 'Meizu'], [r, x]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i], [n, [s, 'OnePlus'], [r, w]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [n, [s, 'RCA'], [r, x]], [/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i], [n, [s, 'Dell'], [r, x]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [n, [s, 'Verizon'], [r, x]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[s, 'Barnes & Noble'], n, [r, x]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [n, [s, 'NuVision'], [r, x]], [/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i], [[s, 'ZTE'], n, [r, x]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [n, [s, 'Swiss'], [r, w]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [n, [s, 'Swiss'], [r, x]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [n, [s, 'Zeki'], [r, x]], [/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i], [[s, 'Dragon Touch'], n, [r, x]], [/android.+[;\/]\s*(NS-?.+)\s+build/i], [n, [s, 'Insignia'], [r, x]], [/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i], [n, [s, 'NextBook'], [r, x]], [/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[s, 'Voice'], n, [r, w]], [/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i], [[s, 'LvTel'], n, [r, w]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [n, [s, 'Envizen'], [r, x]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i], [s, n, [r, x]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [n, [s, 'MachSpeed'], [r, x]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [s, n, [r, x]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [n, [s, 'Rotor'], [r, x]], [/android.+(KS(.+))\s+build/i], [n, [s, 'Amazon'], [r, x]], [/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i], [s, n, [r, x]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[r, B.lowerize], s, n], [/(android.+)[;\/].+build/i], [n, [s, 'Generic']]],
            engine: [[/windows.+\sedge\/([\w\.]+)/i], [t, [o, 'EdgeHTML']], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [o, t], [/rv\:([\w\.]+).*(gecko)/i], [t, o]],
            os: [[/microsoft\s(windows)\s(vista|xp)/i], [o, t], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [o, [t, C.str, D.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[o, 'Windows'], [t, C.str, D.os.windows.version]], [/\((bb)(10);/i], [[o, 'BlackBerry'], t], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [o, t], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[o, 'Symbian'], t], [/\((series40);/i], [o], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[o, 'Firefox OS'], t], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [o, t], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[o, 'Chromium OS'], t], [/(sunos)\s?([\w\.]+\d)*/i], [[o, 'Solaris'], t], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [o, t], [/(haiku)\s(\w+)/i], [o, t], [/cfnetwork\/.+darwin/i, /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[t, /_/g, '.'], [o, 'iOS']], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[o, 'Mac OS'], [t, /_/g, '.']], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [o, t]]
        },
        F = function (I, J) {
            if ('object' == typeof I && (J = I, I = b), !(this instanceof F)) return new F(I, J).getResult();
            var K = I || (a && a.navigator && a.navigator.userAgent ? a.navigator.userAgent : ''),
                L = J ? B.extend(E, J) : E;
            return this.getBrowser = function () {
                var M = {
                    name: b,
                    version: b
                };
                return C.rgx.call(M, K, L.browser), M.major = B.major(M.version), M
            }, this.getCPU = function () {
                var M = {
                    architecture: b
                };
                return C.rgx.call(M, K, L.cpu), M
            }, this.getDevice = function () {
                var M = {
                    vendor: b,
                    model: b,
                    type: b
                };
                return C.rgx.call(M, K, L.device), M
            }, this.getEngine = function () {
                var M = {
                    name: b,
                    version: b
                };
                return C.rgx.call(M, K, L.engine), M
            }, this.getOS = function () {
                var M = {
                    name: b,
                    version: b
                };
                return C.rgx.call(M, K, L.os), M
            }, this.getResult = function () {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            }, this.getUA = function () {
                return K
            }, this.setUA = function (M) {
                return K = M, this
            }, this
        };
    F.VERSION = '0.7.17', F.BROWSER = {
        NAME: o,
        MAJOR: 'major',
        VERSION: t
    }, F.CPU = {
        ARCHITECTURE: u
    }, F.DEVICE = {
        MODEL: n,
        VENDOR: s,
        TYPE: r,
        CONSOLE: v,
        MOBILE: w,
        SMARTTV: y,
        TABLET: x,
        WEARABLE: z,
        EMBEDDED: 'embedded'
    }, F.ENGINE = {
        NAME: o,
        VERSION: t
    }, F.OS = {
        NAME: o,
        VERSION: t
    }, typeof exports == g ? typeof define == f && define.amd ? define(function () {
        return F
    }) : a && (a.UAParser = F) : (typeof module != g && module.exports && (exports = module.exports = F), exports.UAParser = F);
    var G = a && (a.jQuery || a.Zepto);
    if (typeof G != g) {
        var H = new F;
        G.ua = H.getResult(), G.ua.get = function () {
            return H.getUA()
        }, G.ua.set = function (I) {
            H.setUA(I);
            var J = H.getResult();
            for (var K in J) G.ua[K] = J[K]
        }
    }
})('object' == typeof window ? window : this);