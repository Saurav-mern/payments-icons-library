!function(a,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.cashfreeImageLibrary=n():a.cashfreeImageLibrary=n()}(this,(()=>(()=>{"use strict";var a={d:(n,e)=>{for(var b in e)a.o(e,b)&&!a.o(n,b)&&Object.defineProperty(n,b,{enumerable:!0,get:e[b]})},o:(a,n)=>Object.prototype.hasOwnProperty.call(a,n),r:a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},n={};a.r(n),a.d(n,{getLogo:()=>s,getLogos:()=>c,getModesLogos:()=>l});const e={cardbanks:{aus:["au small finance bank","aus","au small finance bank limited","au small","au small finance","au"],axis:["axis bank","axis"],axisc:["axisc","axis corporate"],bdnc:["bandhan bank","bandhan","bdnc","bandhan corporate"],bdnr:["bdnr","bandhan retail"],bobc:["bobc","bank of baroda"],bobr:["bobr"],boi:["boi","bank of india"],bom:["bom","bank of maharashtra"],canara:["canara","canara bank"],cbi:["central bank of india","cbi"],csb:["csb bank","csb","catholic syrian bank limited","catholic syrian bank"],cub:["city union bank","cub"],dbs:["dbs","dbs bank","digibank"],deutsche:["deutsche","deutsche bank"],dhanlakshmi:["dhanlakshmi","dhanlakshmi bank"],equitas:["equitas small finance bank","equitas","equitas small finance","equitas bank"],federal:["federal bank","federal"],hdfc:["hdfc","hdfc bank"],icici:["icici","icici bank"],idfc:["idfc","idfc bank","idfc first bank"],indian:["indian","indian bank"],indusind:["indusind","indusind bank"],iob:["iob","iob bank","indian overseas bank","indian overseas bank"],iobc:["iobc","iob corporate","indian overseas corporate","indian overseas bank corporate"],jkb:["jkb","jammu & kashmir bank","jammu and kashmir bank","j&k bank"],karnataka:["karnataka","karnataka bank"],karur:["karur","karur bank","karur vysya bank","karur vysya"],kotak:["kotak","kotak bank"],lvbc:["lvbc","lvb corporate"],lvbr:["lvbr","lvb retail"],pnbc:["pnbc","punjab national bank corporate","pnb","punjab national bank"],pnbr:["pnbr","punjab national bank retail"],rbl:["rbl","ratnakar bank","rbl bank"],rblc:["rbl corporate","rblc"],saraswat:["saraswat","saraswat bank"],sbi:["sbi","state bank of india"],sbic:["sbic","sbi corporate","state bank of india corporate"],scb:["scb","standard chartered","standard chartered bank"],shivalik:["shivalik","shivalik bank"],sib:["sib","south indian bank"],sur:["sur","sur bank"],tamcop:["tamcop","tamcop bank"],tammerc:["tammerc","tammerc bank"],uco:["uco","uco bank","united commercial bank"],union:["union","union bank"],utk:["utk","utk bank","utkarsh small finance bank","utkarsh small finance"],yes:["yes","yes bank"]},cardschemes:{amex:["amex"],diners:["diners"],discover:["discover"],jcb:["jcb"],maestro:["maestro"],mastercard:["mastercard"],paypal:["paypal"],rupay:["rupay"],visa:["visa"]},paylater:{epaylater:["epaylater"],freecharge:["freecharge","freechargepaylater"],hdfc:["hdfc","hdfcpaylater"],kotak:["kotak","kotakpaylater"],lazypay:["lazypay"],olapostpaid:["olapostpaid"],simpl:["simpl"],zestmoneypaylater:["zestmoney","zestmoneypaylater"]},upi:{bhim:["bhim"],gpay:["gpay","googlepay"],paytm:["paytm"],phonepe:["phonepe"]},wallet:{airtel:["airtel","airtelmoney"],amazon:["amazon","amazonpay"],freecharge:["freecharge"],jio:["jio","jiomoney"],mobikwik:["mobikwik"],ola:["ola"],paytm:["paytm"],phonepe:["phonepe"]}},b={sm:"32",md:"64",lg:"128",svg:"svg"},r={sm:"png",md:"png",lg:"png",svg:"svg"},i="https://cashfreelogo.cashfree.com/assets_images/pg",o={aus:"nb",axis:"nb",axisc:"nb",bdnc:"nb",bdnr:"nb",bobc:"nb",bobr:"nb",boi:"nb",bom:"nb",canara:"nb",cbi:"nb",csb:"nb",cub:"nb",dbs:"nb",deutsche:"nb",dhanlakshmi:"nb",equitas:"nb",federal:"nb",hdfc:"nb",icici:"nb",idfc:"nb",indian:"nb",indusind:"nb",iob:"nb",iobc:"nb",jkb:"nb",karnataka:"nb",karur:"nb",kotak:"nb",lvbc:"nb",lvbr:"nb",pnbc:"nb",pnbr:"nb",rbl:"nb",rblc:"nb",saraswat:"nb",sbi:"nb",sbic:"nb",scb:"nb",shivalik:"nb",sib:"nb",sur:"nb",tamcop:"nb",tammerc:"nb",uco:"nb",union:"nb",utk:"nb",yes:"nb",amex:"card",diners:"card",discover:"card",jcb:"card",maestro:"card",mastercard:"card",paypal:"card",rupay:"card",visa:"card",epaylater:"paylater",freecharge:"paylater",hdfc:"paylater",kotak:"paylater",lazypay:"paylater",olapostpaid:"paylater",simpl:"paylater",zestmoneypaylater:"paylater",bhim:"upi",gpay:"upi",paytm:"upi",phonepe:"upi",airtel:"wallet",amazon:"wallet",freecharge:"wallet",jio:"wallet",mobikwik:"wallet",ola:"wallet",paytm:"wallet",phonepe:"wallet"};function t(a){let n;return n=["sm","md","lg","svg"].includes(a)?a:"sm",n}function s(a,n){let s=t(n),c={logo_name:"default",logo_version:"1",logo_url:"https://cashfreelogo.cashfree.com/assets_images/pg/nb/svg/default.svg"};return a?(a=a.toLowerCase(),Object.values(e).every((n=>{let e=!0;return Object.keys(n).every((t=>!n[t].includes(a)||(c={logo_name:t,logo_version:"1",logo_url:`${i}/${o[t]}/${b[s]}/${t}.${r[s]}`},e=!1,!1))),e})),c):c}function c(a,n){let e="";e=["sm","md","lg","svg"].includes(n)?n:"sm";let b=[];return a.forEach((a=>{b.push(s(a,e))})),b}function l(a,n){let s=t(n),c=[];return Object.keys(e[a])&&Object.keys(e[a]).forEach((a=>{c.push({logo_name:a,logo_version:"1",logo_url:`${i}/${o[a]}/${b[s]}/${a}.${r[s]}`})})),c}return n})()));