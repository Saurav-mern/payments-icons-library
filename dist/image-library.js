!(function (a, n) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = n())
        : "function" == typeof define && define.amd
        ? define([], n)
        : "object" == typeof exports
        ? (exports.paymentsIcons = n())
        : (a.paymentsIcons = n());
})(this, () =>
    (() => {
        "use strict";
        var a = {
                d: (n, e) => {
                    for (var r in e)
                        a.o(e, r) &&
                            !a.o(n, r) &&
                            Object.defineProperty(n, r, {
                                enumerable: !0,
                                get: e[r],
                            });
                },
                o: (a, n) => Object.prototype.hasOwnProperty.call(a, n),
                r: (a) => {
                    "undefined" != typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(a, Symbol.toStringTag, {
                            value: "Module",
                        }),
                        Object.defineProperty(a, "__esModule", { value: !0 });
                },
            },
            n = {};
        a.r(n),
            a.d(n, {
                getIcon: () => t,
                getIcons: () => o,
                getModesIcons: () => l,
            });
        const e = {
                cardbanks: {
                    aus: [
                        "au small finance bank",
                        "aus",
                        "au small finance bank limited",
                        "au small",
                        "au small finance",
                        "au",
                        "aublr",
                    ],
                    axis: ["axis bank", "axis", "utibr"],
                    axisc: ["axisc", "axis corporate", "utibc"],
                    bdnc: [
                        "bandhan bank",
                        "bandhan",
                        "bdnc",
                        "bandhan corporate",
                        "bdblc",
                    ],
                    bdnr: ["bdnr", "bandhan retail", "bdblr"],
                    bobc: ["bobc", "bank of baroda", "barbc"],
                    bobr: ["bobr", "barbr"],
                    boi: ["boi", "bank of india", "bkidr", "bkidc"],
                    bom: ["bom", "bank of maharashtra", "mahbr"],
                    canara: ["canara", "canara bank", "cnrbr"],
                    cbi: ["central bank of india", "cbi", "cbinr"],
                    csb: [
                        "csb bank",
                        "csb",
                        "catholic syrian bank limited",
                        "catholic syrian bank",
                        "csbkr",
                    ],
                    cub: ["city union bank", "cub", "ciubr", "ciubc"],
                    dbs: ["dbs", "dbs bank", "digibank", "dbssr"],
                    deutsche: ["deutsche", "deutsche bank", "deutr"],
                    dhanlakshmi: [
                        "dhanlakshmi",
                        "dhanlakshmi bank",
                        "dlxbr",
                        "dlxbc",
                    ],
                    equitas: [
                        "equitas small finance bank",
                        "equitas",
                        "equitas small finance",
                        "equitas bank",
                        "esfbr",
                    ],
                    federal: ["federal bank", "federal", "fdrlr"],
                    hdfc: ["hdfc", "hdfc bank", "hdfcr", "hdfcc"],
                    icici: ["icici", "icici bank", "icicr", "icicc"],
                    idfc: ["idfc", "idfc bank", "idfc first bank", "idfbr"],
                    indian: ["indian", "indian bank", "idibr"],
                    indusind: ["indusind", "indusind bank", "indbr"],
                    iob: [
                        "iob",
                        "iob bank",
                        "indian overseas bank",
                        "indian overseas bank",
                        "iobar",
                    ],
                    iobc: [
                        "iobc",
                        "iob corporate",
                        "indian overseas corporate",
                        "indian overseas bank corporate",
                        "iobac",
                    ],
                    jkb: [
                        "jkb",
                        "jammu & kashmir bank",
                        "jammu and kashmir bank",
                        "j&k bank",
                        "jakar",
                    ],
                    karnatka: [
                        "karnataka",
                        "karnataka bank",
                        "karnatka",
                        "karnatka bank",
                        "karbr",
                    ],
                    karur: [
                        "karur",
                        "karur bank",
                        "karur vysya bank",
                        "karur vysya",
                        "kvblr",
                    ],
                    kotak: ["kotak", "kotak bank", "kkbkr"],
                    lvbc: ["lvbc", "lvb corporate", "lavbc"],
                    lvbr: ["lvbr", "lvb retail", "lavbr"],
                    pnbc: [
                        "pnbc",
                        "punjab national bank corporate",
                        "pnb",
                        "punjab national bank",
                        "punbc",
                    ],
                    pnbr: ["pnbr", "punjab national bank retail", "punbr"],
                    rbl: ["rbl", "ratnakar bank", "rbl bank", "ratnr"],
                    rblc: ["rbl corporate", "rblc", "ratnc"],
                    saraswat: ["saraswat", "saraswat bank", "srcbr"],
                    sbi: ["sbi", "state bank of india", "sbinr"],
                    sbic: [
                        "sbic",
                        "sbi corporate",
                        "state bank of india corporate",
                        "sbinc",
                    ],
                    scb: [
                        "scb",
                        "standard chartered",
                        "standard chartered bank",
                        "scblr",
                    ],
                    shivalik: ["shivalik", "shivalik bank", "smcbr"],
                    sib: ["sib", "south indian bank", "siblr"],
                    sur: ["sur", "sur bank"],
                    tamcop: ["tamcop", "tamcop bank"],
                    tammerc: ["tammerc", "tammerc bank"],
                    uco: [
                        "uco",
                        "uco bank",
                        "united commercial bank",
                        "ucbar",
                        "ucbac",
                    ],
                    union: ["union", "union bank", "ubinr", "ubinc"],
                    utk: [
                        "utk",
                        "utk bank",
                        "utkarsh small finance bank",
                        "utkarsh small finance",
                        "utksr",
                    ],
                    yes: ["yes", "yes bank", "yesbc", "yesbr"],
                },
                cardschemes: {
                    amex: ["amex"],
                    diners: ["diners"],
                    discover: ["discover"],
                    jcb: ["jcb"],
                    maestro: ["maestro"],
                    mastercard: ["mastercard"],
                    rupay: ["rupay"],
                    visa: ["visa"],
                },
                paylater: {
                    epaylater: ["epaylater"],
                    freecharge: ["freecharge", "freechargepaylater"],
                    hdfc: ["hdfc", "hdfcpaylater"],
                    kotak: ["kotak", "kotakpaylater"],
                    lazypay: ["lazypay"],
                    olapostpaid: ["olapostpaid"],
                    simpl: ["simpl"],
                    zestmoneypaylater: ["zestmoney", "zestmoneypaylater"],
                },
                upi: {
                    bhim: ["bhim", "upi"],
                    gpay: ["gpay", "googlepay"],
                    paytm: ["paytm"],
                    phonepe: ["phonepe"],
                    whatsapp: ["whatsapp"],
                    credpay: ["cred", "credpay"],
                },
                wallet: {
                    airtel: ["airtel", "airtelmoney", "airpr"],
                    amazon: ["amazon", "amazonpay"],
                    freecharge: ["freecharge"],
                    jio: ["jio", "jiomoney", "jiopr"],
                    mobikwik: ["mobikwik"],
                    ola: ["ola"],
                    paytm: ["paytm"],
                    phonepe: ["phonepe"],
                    paypal: ["paypal"],
                },
                cardless: { flexipay: ["flexipay"] },
            },
            r = { sm: "32", md: "64", lg: "128", svg: "svg" },
            b = { sm: "png", md: "png", lg: "png", svg: "svg" },
            i = "https://cashfreelogo.cashfree.com/assets_images/pg",
            c = {
                aus: "nb",
                axis: "nb",
                axisc: "nb",
                bdnc: "nb",
                bdnr: "nb",
                bobc: "nb",
                bobr: "nb",
                boi: "nb",
                bom: "nb",
                canara: "nb",
                cbi: "nb",
                csb: "nb",
                cub: "nb",
                dbs: "nb",
                deutsche: "nb",
                dhanlakshmi: "nb",
                equitas: "nb",
                federal: "nb",
                hdfc: "nb",
                icici: "nb",
                idfc: "nb",
                indian: "nb",
                indusind: "nb",
                iob: "nb",
                iobc: "nb",
                jkb: "nb",
                karnatka: "nb",
                karur: "nb",
                kotak: "nb",
                lvbc: "nb",
                lvbr: "nb",
                pnbc: "nb",
                pnbr: "nb",
                rbl: "nb",
                rblc: "nb",
                saraswat: "nb",
                sbi: "nb",
                sbic: "nb",
                scb: "nb",
                shivalik: "nb",
                sib: "nb",
                sur: "nb",
                tamcop: "nb",
                tammerc: "nb",
                uco: "nb",
                union: "nb",
                utk: "nb",
                yes: "nb",
                amex: "card",
                diners: "card",
                discover: "card",
                jcb: "card",
                maestro: "card",
                mastercard: "card",
                paypal: "card",
                rupay: "card",
                visa: "card",
                epaylater: "paylater",
                freecharge: "paylater",
                hdfc: "paylater",
                kotak: "paylater",
                lazypay: "paylater",
                olapostpaid: "paylater",
                simpl: "paylater",
                zestmoneypaylater: "paylater",
                bhim: "upi",
                gpay: "upi",
                paytm: "upi",
                phonepe: "upi",
                credpay: "upi",
                whatsapp: "upi",
                airtel: "wallet",
                amazon: "wallet",
                freecharge: "wallet",
                jio: "wallet",
                mobikwik: "wallet",
                ola: "wallet",
                paytm: "wallet",
                phonepe: "wallet",
                flexipay: "cardless",
            };
        function s(a) {
            let n;
            return (n = ["sm", "md", "lg", "svg"].includes(a) ? a : "sm"), n;
        }
        function t(a, n) {
            let t = s(n),
                o = {
                    icon_name: "default",
                    icon_version: "1",
                    icon_url:
                        "https://cashfreelogo.cashfree.com/assets_images/pg/nb/svg/default.svg",
                };
            return a
                ? ((a = a.toLowerCase()),
                  Object.values(e).every((n) => {
                      let e = !0;
                      return (
                          Object.keys(n).every(
                              (s) =>
                                  !n[s].includes(a) ||
                                  ((o = {
                                      icon_name: s,
                                      icon_version: "1",
                                      icon_url: `${i}/${c[s]}/${r[t]}/${s}.${b[t]}`,
                                  }),
                                  (e = !1),
                                  !1)
                          ),
                          e
                      );
                  }),
                  o)
                : o;
        }
        function o(a, n) {
            let e = "";
            e = ["sm", "md", "lg", "svg"].includes(n) ? n : "sm";
            let r = [];
            return (
                a.forEach((a) => {
                    r.push(t(a, e));
                }),
                r
            );
        }
        function l(a, n) {
            let t = s(n),
                o = [];
            return (
                Object.keys(e[a]) &&
                    Object.keys(e[a]).forEach((a) => {
                        o.push({
                            icon_name: a,
                            icon_version: "1",
                            icon_url: `${i}/${c[a]}/${r[t]}/${a}.${b[t]}`,
                        });
                    }),
                o
            );
        }
        return n;
    })()
);
