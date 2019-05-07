(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function c(a,b){return j(a)||f(a,b)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function f(a,b){var c=[];var d=!0;var e=!1;var f=undefined;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]!=null&&h["return"]()}finally{if(e)throw f}}return c}function j(a){if(Array.isArray(a))return a}function k(a,b){if(a==null)return{};var c=l(a,b);var d,e;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(e=0;e<f.length;e++)d=f[e],!(b.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d])}return c}function l(a,b){if(a==null)return{};var c={};var d=Object.keys(a);var e,f;for(f=0;f<d.length;f++)e=d[f],!(b.indexOf(e)>=0)&&(c[e]=a[e]);return c}function m(a){for(var b=1;b<arguments.length;b++){var c=arguments[b]==null?{}:arguments[b];var d=Object.keys(c);typeof Object.getOwnPropertySymbols==="function"&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){n(a,b,c[b])})}return a}function n(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function o(a){return o=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function o(a){return typeof a}:function o(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},o(a)}var r=require("hyperapp"),t=r.app,v=r.h;var h=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var d=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var e=function is(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===o(a)})};return!d&&(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),v(a,b,d)}};var w={View:function View(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"menu";return function(b){typeof a==="string"&&(a={name:a});var c=a,d=c.name,e=d===void 0?"menu":d,f=c["class"],g=f===void 0?"Menu":f,h=c.items,i=h===void 0?[]:h,j=c.collapse;var l=b.url,n=b[e],o=n===void 0?[]:n;if(i=i.length?i:o,!!i.length)return b.hash&&(l+="#".concat(b.hash)),Fa({"class":g.includes("Menu")?g:"Menu ".concat(g)},u(i.map(function(a){return w.Item(m({},a,{url:l,collapse:j===void 0||j}))})))}},Item:function Item(a){var b=a.url,c=a.text,d=a.items,e=d===void 0?[]:d,f=a.parentTo,g=f===void 0?undefined:f,h=a.collapse,j=k(a,["url","text","items","parentTo","collapse"]);if(j.to||c){var l={"class":"MenuItem"};if(j.to===b&&(l["class"]+=" active"),g){var n=j.to.includes("://");var o=j.to.startsWith("/");var p=!g||j.to.startsWith(g);!p&&!o&&!n&&(!g.endsWith("/")&&!j.to.startsWith("-")&&(g="".concat(g,"/")),j.to=g+j.to)}var i=[];return e.length&&(b.startsWith(j.to)||!h)&&(i=u(e.map(function(a){return w.Item(m({parentTo:j.to,url:b,collapse:h},a))}))),ya(l,[j.to?x(j,c):Ya(j,c),i])}}};var x=function Link(a,b){var c=a.to,d=k(a,["to"]);return function(a,f){var g=d.href,h=d.text,i=d.nofollow,j=d.noreferrer,l=d.onclick,m=k(d,["href","text","nofollow","noreferrer","onclick"]);return c=c||g||"",m.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?m.onclick=function(a){l&&l({e:a,to:c}),f.go({e:a,to:c})}:(m.target="_blank",m.rel="noopener",i&&(m.rel+=" nofollow"),j&&(m.rel+=" noreferrer")),D(m,[h,b])}};var y={View:function View(){return ha({"class":"main"},[_({"class":"wrapper"},["made with a few bits of ",x({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])}};var z={View:function View(a){return function(b,c){return _({id:"magic"},_({"class":"wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&c.go&&window.addEventListener("popstate",c.go)}},[A,a?_({"class":"page"},a(b,c)):_({"class":"page"},"404 - not found"),y.View]))}}};var A=function PageHead(a){return(a.logo||a.menu||a.tagline)&&pa({"class":"main"},[(a.logo||a.logotext)&&x({to:"/","class":"logo-wrapper"},[a.logo&&B({"class":"logo",src:a.logo}),a.logotext&&Ya({"class":"logo-text"},a.logotext)]),w.View])};var B=function Img(a){return function(){if(typeof a==="string"&&(a={src:a}),!!a.src)return!a.alt&&(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),sa(a)}};var C=h("component");var D=h("a");var a=h("abbr");var E=h("address");var F=h("area");var G=h("article");var H=h("aside");var I=h("audio");var J=h("b");var b=h("bdi");var K=h("bdo");var L=h("blockquote");var M=h("br");var N=h("button");var O=h("canvas");var P=h("caption");var Q=h("cite");var R=h("code");var S=h("col");var T=h("colgroup");var U=h("data");var V=h("datalist");var W=h("dd");var X=h("del");var Y=h("details");var Z=h("dfn");var $=h("dialog");var _=h("div");var aa=h("dl");var ba=h("dt");var ca=h("em");var da=h("embed");var ea=h("fieldset");var fa=h("figcaption");var ga=h("figure");var ha=h("footer");var ia=h("form");var ja=h("h1");var ka=h("h2");var la=h("h3");var ma=h("h4");var na=h("h5");var oa=h("h6");var pa=h("header");var qa=h("hr");var ra=h("i");var i=h("iframe");var sa=h("img");var ta=h("input");var ua=h("ins");var va=h("kbd");var wa=h("label");var xa=h("legend");var ya=h("li");var za=h("main");var Aa=h("map");var Ba=h("mark");var Ca=h("menu");var Da=h("menuitem");var Ea=h("meter");var Fa=h("nav");var Ga=h("object");var Ha=h("ol");var Ia=h("optgroup");var Ja=h("option");var Ka=h("output");var La=h("p");var p=h("param");var Ma=h("picture");var Na=h("pre");var Oa=h("progress");var Pa=h("q");var q=h("rp");var Qa=h("rt");var Ra=h("rtc");var Sa=h("ruby");var Ta=h("s");var s=h("samp");var Ua=h("section");var Va=h("select");var Wa=h("small");var Xa=h("source");var Ya=h("span");var Za=h("strong");var $a=h("sub");var _a=h("summary");var ab=h("sup");var bb=h("table");var cb=h("tbody");var db=h("td");var eb=h("textarea");var fb=h("tfoot");var gb=h("th");var hb=h("thead");var ib=h("time");var jb=h("tr");var kb=h("track");var lb=h("u");var u=h("ul");var mb=h("video");var nb=h("wbr");var ob=h("svg");var pb=h("g");var g=h("circle");var qb=h("ellipse");var rb=h("rect");var sb=h("polygon");var tb=h("path");var ub=h("defs");var vb=h("linearGradient");var wb=h("stop");var xb=h("text");var yb=h("html");var zb=h("head");var Ab=h("title");var Bb=h("meta");var Cb=h("link");var Db=h("body");var Eb=h("script");var Fb=h("description");var Gb=function GitBadges(a){if(typeof a==="string")a={project:a};else if(!a.project)return;var b=a,d=b.project,e=d!==void 0&&d,f=b.branch,g=f===void 0?"master":f;var h=[["npm",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:e;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:e;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(g)}}],["appveyor",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:e;if(a){var b=a.split("/"),d=c(b,2),f=d[0],h=d[1];return f=f.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(f,"/").concat(h,"/branch/").concat(g),src:"https://img.shields.io/appveyor/ci/".concat(f,"/").concat(h,"/").concat(g,".svg")}}}],["coveralls",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:e;return a&&{to:"https://coveralls.io/github/".concat(a),src:"https://coveralls.io/repos/github/".concat(a,"/badge.svg")}}],["greenkeeper",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:e;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:e;return a&&{to:"https://snyk.io/test/github/".concat(a),src:"https://snyk.io/test/github/".concat(a,"/badge.svg")}}]].map(function(b){var d=c(b,2),e=d[0],f=d[1];return f(a[e])}).filter(function(b){return b.to&&b.src});return h.length?u({"class":"GitBadges"},h.map(function(a){var b=a.to,c=a.src;return ya([x({to:b},B({src:c}))])})):void 0};var Hb=function ThemeList(a){return Ib(m({org:"magic-themes",header:[x({to:"https://magic-themes.github.io"},"@magic-themes")],desc:["below is a collection of the available @magic app themes."],items:[{name:"docs",description:"the @magic documentation theme. used in all @magic docs."}]},a))};var Ib=function GitList(a){var b=a.items,c=b===void 0?[]:b,d=a.org,e=a.host,f=e===void 0?"github":e,g=a.header,h=a.desc,i=h===void 0?a.description:h;var j={};return a["class"]?!a["class"].includes("GitList")&&(j["class"]="GitList ".concat(a["class"])):j["class"]="GitList",j.id=a.id?a.id:"".concat(d,"-list"),_(j,[g&&ka(g),i&&_({"class":"description"},i),u({id:"".concat(d,"-list")},[c.map(function(a){return Ib.Item(m({org:d,host:f},a))})])])};Ib.Item=function(a){var b=a.name,c=a.org,d=a.host;var e=a.desc||a.description;return ya({id:"".concat(c,"-").concat(b),"class":"GitListItem"},[la([x({to:"https://".concat(d,".com/").concat(c,"/").concat(b)},"@".concat(c,"/").concat(b))]),e&&La(e),Gb("".concat(c,"/").concat(b)),x({to:"https://".concat(c,".").concat(d,".io/").concat(b)},"docs / demo")])};var Jb=function Gitbadges(a){var b=a.project,d=b!==void 0&&b,e=a.branch,f=e===void 0?"master":e;var g=Object.entries({npm:function npm(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}},travis:function travis(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(f)}},appveyor:function appveyor(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://ci.appveyor.com/project/".concat(a,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(a,"/").concat(f,".svg")}},coveralls:function coveralls(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://coveralls.io/github/".concat(a),src:"https://coveralls.io/repos/github/".concat(a,"/badge.svg")}},greenkeeper:function greenkeeper(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}},snyk:function snyk(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://snyk.io/test/github/".concat(a),src:"https://snyk.io/test/github/".concat(a,"/badge.svg")}}}).map(function(b){var d=c(b,2),e=d[0],f=d[1];return f(a[e])}).filter(function(b){return b.to&&b.src});return g.length?u({"class":"GitBadges"},g.map(function(a){var b=a.to,c=a.src;return ya([x({to:b},B({src:c}))])})):void 0};var Kb={"/":function(){return[ka(x({to:"https://magic.github.io"},"@magic")),La("magic is a module/component based generator for static pages and serverless deployments."),La("goal of the project is to keep the client boilerplate footprint minimal yet easily extendable"),Gb("magic/core"),ka({id:"magic-themes"},x({to:"https://github.com/magic-themes"},"@magic-themes")),La("javascript css-in-js objects ready for usage in the @magic app."),Hb]},"/404/":function(){return _("404 - not found")}};var Lb={"url":"/","root":"/","title":"@magic-themes","description":"@magic-themes. javascript css-in-js objects ready for usage in the @magic app.","logotext":"@magic-themes","logo":"/logo.png","menu":[{"to":"/#magic-themes","text":"magic-themes"}]};Lb.url=window.location.pathname,Lb.root="/";var Mb={"go":function go(a){return function(b){if(typeof window==="undefined"||!window.history)return!0;var d=a.to;var f=a.e?a.e:a;f.preventDefault();var e=b.url;var g=e.split("#"),h=c(g,2),i=h[0],j=h[1],k=j===void 0?"":j;if(d){e=d.replace(window.location.origin,"");var l=e.split("#"),m=c(l,2),n=m[0],o=m[1],p=o===void 0?"":o;i=n,k=p&&p!=="/"?p:"";var q=b.hash?"#".concat(b.hash):window.location.hash;var r=b.url+q;(e!==r||k!==q)&&(window.history&&window.history.pushState({uri:i},"",e),!k&&window.scrollTo(0,0))}else i=f.state?f.state.uri:"/";if(window.location&&k){var s=document.getElementById(k);if(s){var t=s.offsetTop;window.scrollTo(0,t),window.location.hash=k}}return{url:i,hash:k,prev:b.url}}}};var Nb=function view(a,b){var c=Kb[a.url]?a.url:"/404/";var d=Kb[c];if(a.pages){var e=a.pages[c];for(var f in e)a[f]=e[f]}if(b.pages){var g=b.pages[c];for(var h in g)b[h]=g[h]}return _({"class":"wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&b.go&&window.addEventListener("popstate",b.go)}},[A,d?_({"class":"page"},d(a,b)):_({"class":"page"},"404 - not found"),y.View])};var Ob=document;var d=Ob.getElementById("magic");!d&&(d=Ob.createElement("div"),d.id="magic",Ob.body.appendChild(d)),t(Lb,Mb,Nb,d);
},{"hyperapp":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var l=t.pop();if(l&&l.pop)for(o=l.length;o--;)t.push(l[o]);else null!=l&&!0!==l&&!1!==l&&r.push(l)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,l=[].map,u=r&&r.children[0]||null,i=u&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:l.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(u),f=[],m=!0,a=v(e),c=function e(r,o,l){for(var n in l)"function"==typeof l[n]?function(e,t){l[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(h(r,a),l)),n&&n!==(o=h(r,a))&&!n.then&&d(a=p(r,v(o,n),a)),n}}(n,l[n]):e(r.concat(n),o[n]=v(o[n]),l[n]=v(l[n]));return l}([],a,v(n));return d(),c;function g(e){return"function"==typeof e?g(e(a,c)):null!=e?e:""}function s(){o=!o;var e=g(t);for(r&&!o&&(u=function e(n,t,r,o,l){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=k(o,l);n.insertBefore(u,t),null!=r&&T(n,t,r),t=u}else if(null==r.nodeName)t.nodeValue=o;else{x(t,r.attributes,o.attributes,l=l||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=N(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,p=0;p<s.length;){var v=N(c[d]),h=N(s[p]=g(s[p]));if(f[v])d++;else if(null==h||h!==N(c[d+1]))if(null==h||m)null==v&&(e(t,a[d],c[d],s[p],l),p++),d++;else{var y=i[h]||[];v===h?(e(t,y[0],y[1],s[p],l),d++):y[0]?e(t,t.insertBefore(y[0],a[d]),y[1],s[p],l):e(t,a[d],null,s[p],l),f[h]=s[p],p++}else null==v&&T(t,a[d],c[d]),d++}for(;d<c.length;)null==N(c[d])&&T(t,a[d],c[d]),d++;for(var d in i)f[d]||T(t,i[d][0],i[d][1])}return t}(r,u,i,i=e)),m=!1;f.length;)f.pop()()}function d(){o||(o=!0,setTimeout(s))}function v(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function p(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?p(e.slice(1),n,t[e[0]]):n,v(t,r)):n}function h(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function N(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var l in"string"==typeof r&&(r=e.style.cssText=""),v(r,t)){var u=null==t||null==t[l]?"":t[l];"-"===l[0]?e.style.setProperty(l,u):e.style[l]=u}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&f.push(function(){r.oncreate(t)});for(var o=0;o<e.children.length;o++)t.appendChild(k(e.children[o]=g(e.children[o]),n));for(var l in r)b(t,l,r[l],null,n)}return t}function x(e,n,t,r){for(var o in v(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var l=m?t.oncreate:t.onupdate;l&&f.push(function(){l(e,n)})}function T(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});

},{}]},{},[1]);
