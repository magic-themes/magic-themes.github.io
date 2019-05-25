"use strict";function b(a,b){if(null==a)return{};var d,e,f=c(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(e=0;e<g.length;e++)d=g[e],!(0<=b.indexOf(d))&&Object.prototype.propertyIsEnumerable.call(a,d)&&(f[d]=a[d])}return f}function c(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function d(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){e(a,b,c[b])})}return a}function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function f(a,b){return k(a)||j(a,b)||g()}function g(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function j(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function k(a){if(Array.isArray(a))return a}function l(a){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},l(a)}var m=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,i=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=i(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(!!(b&&!0!==b)&&("function"==typeof b[0]?[b]:k(b)))},d)},m=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},n=function(c,a){for(var b in j(c,a)){if(c[b]!==a[b]&&!m(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||n(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=i(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name):document.createElement(a.name),f=a.props;for(var g in f)p(e,g,null,f[g],c,d);for(var h=0,j=a.children.length;h<j;h++)e.appendChild(q(a.children[h]=u(a.children[h]),c,d));return a.node=e},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(v[x]);)s(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(v[z]);)s(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(v[x]=u(v[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(s(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,v[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(b,c){return b.type===a?((!c||t(c.lazy,b.lazy))&&((c=b.lazy.view(b.lazy)).lazy=b.lazy),c):b},v=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},w=function(a,e){return v(a,c,d,e,null,b)},x=function(a){return a.nodeType===b?w(a.nodeValue,a):v(a.nodeName.toLowerCase(),c,e.call(a.childNodes,x),a,null,1)},y=function(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push("object"===l(d)?d:w(d));return b=b||c,"function"==typeof a?a(b,g):v(a,b,g,null,b.key)};return{h:y,app:function app(a,b){var c={},d=!1,e=a.view,h=a.node,i=h&&x(h),j=a.subscriptions,l=[],m=function(a){p(this.actions[a.type],a)},n=function(a){return c===a||d||g(q,d=!0),c=a},p=(b||function(a){return a})(function(a,b,d){return"function"==typeof a?p(a(c,b),d||b):f(a)?"function"==typeof a[0]?p(a[0],"function"==typeof(a=a[1])?a(b):a,b):(k(a.slice(1)).map(function(a){a&&a[0](p,a[1],b)},n(a[0])),c):n(a)}),q=function(){d=!1,j&&(l=o(l,k(j(c)),p)),e&&(h=s(h.parentNode,h,i,"string"==typeof(i=e(c))?w(i):i,m))};p(a.init)},LAZY_NODE:a}}(),o=m.h,h=m.app,i=m.LAZY_NODE,n=function(a){return function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===l(a)})};return d||(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),o(a,b,d)}},q=n("a"),a=n("div"),r=n("footer"),s=n("h1"),t=n("h2"),u=n("h3"),v=n("header"),w=n("img"),x=n("li"),y=n("nav"),z=n("p"),A=n("span"),B=n("ul"),p={url:"/",root:"/",title:"@magic-themes",description:"@magic-themes. javascript css-in-js objects ready for usage in the @magic app.",logotext:"@magic-themes",logo:"/logo.png",menu:[{to:"/#gl-magic-themes",text:"magic-themes"}]},C={mapClickToGo:function mapClickToGo(a){return a.preventDefault(),a},listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},D=function(){return r({class:"Footer"},[a({class:"Container"},["made with a few bits of ",I({to:"/https:/github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])},E=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.project,d=void 0!==c&&c,e=b.branch,g=void 0===e?"master":e,h=b.host,i=void 0===h?"github":h,j=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(g)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;if(a){var b=a.split("/"),c=f(b,2),e=c[0],h=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(h,"/branch/").concat(g),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(h,"/").concat(g,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return{to:"https://coveralls.io/".concat(i,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(i,"/").concat(a,"/").concat(g,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(i,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=f(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return j.length?B({class:"GitBadges"},j.map(function(a){var b=a.to,c=a.src;return x([I({to:b},H({src:c}))])})):void 0},F=function(b){var c=b.items,e=void 0===c?[]:c,f=b.org,g=b.host,h=void 0===g?"github":g,i=b.header,j=b.desc,k=void 0===j?b.description:j,l={};return b["class"]?!b["class"].includes("GitList")&&(l["class"]="GitList ".concat(b["class"])):l["class"]="GitList",l.id=b.id?b.id:f,l.id.startsWith("gl")||(l.id="gl-".concat(l.id)),a(l,[i&&t(i),k&&a({class:"description"},k),B({id:"".concat(l.id,"-ul")},[e.map(function(a){return F.Item(d({org:f,id:"".concat(l.id,"-li"),host:h},a))})])])};F.Item=function(a){var b=a.name,c=a.org,d=a.id,e=a.host,f=a.desc||a.description;return x({id:"".concat(d,"-").concat(b),class:"GitListItem"},[u([I({to:"https://".concat(e,".com/").concat(c,"/").concat(b)},"@".concat(c,"/").concat(b))]),f&&z(f),E("".concat(c,"/").concat(b)),I({to:"https://".concat(c,".").concat(e,".io/").concat(b)},"docs / demo")])};var G=function(a){var c=a.logo,e=a.menu,f=a.tagline,g=a.logotext,h=b(a,["logo","menu","tagline","logotext"]);return c||e||f?v({class:"Header"},[(c||g)&&I({to:"/",class:"LogoWrapper"},[c&&H({class:"Logo",src:c}),g&&A({class:"LogoText"},g)]),e&&J(d({},h,{items:e}))]):void 0},H=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),w(a)},I=function(a,c){var d=a.to,e=b(a,["to"]),f=e.href,g=e.text,h=e.nofollow,i=e.noreferrer,j=e.onclick,k=b(e,["href","text","nofollow","noreferrer","onclick"]);return d=d||f||"",k.href=d,d&&d.startsWith("/")&&!d.startsWith("//")?k.onclick=[N.go,C.mapClickToGo]:(k.target="_blank",k.rel="noopener",h&&(k.rel+=" nofollow"),i&&(k.rel+=" noreferrer")),q(k,[g,c])},J=function(a){var b=a.items,c=a.hash,e=a.url,f=void 0===e?"":e,g=a.root,h=a["class"],i=void 0===h?"Menu":h,j=a.collapse;if(b.length)return c&&(f+="#".concat(c)),y({class:i},B(b.map(function(a){return K(d({},a,{root:g,url:f,collapse:void 0===j||j}))})))},K=function(a){var c=a.url,e=a.text,f=a.items,g=void 0===f?[]:f,h=a.root,i=a.parentTo,j=void 0===i?void 0:i,k=a.collapse,l=b(a,["url","text","items","root","parentTo","collapse"]);if(l.to||e){var m={class:"MenuItem"};if(j){var n=l.to[0],o=l.to.startsWith(j);!o&&("#"===n||"/"===n||"-"===n)&&(j.endsWith("/")&&l.to.endsWith("/")&&(l.to=l.to.substr(1)),l.to=j+l.to)}var p=c&&c.includes(l.to);c.endsWith(l.to)&&(m["class"]+=" active");var q=[];return(g.length&&p||!k)&&(q=B(g.map(function(a){return K(d({parentTo:l.to,url:c,collapse:k},a))}))),x(m,[l.to?I(l,e):A(l,e),q])}},L=function(b){var c=b.page,d=b.state;return a({class:"Wrapper"},[G(d),a({class:"Page"},c?c(d):"404 - not found"),D(d)])},M=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return F(d({org:"magic-themes",header:[I({to:"/https:/magic-themes.github.io"},"@magic-themes")],desc:["below is a collection of the available @magic app themes."],items:[{name:"docs",description:"the @magic documentation theme. used in all @magic docs."}]},a))},N={pop:function pop(a,b){var c=window.location,e=c.pathname,f=c.hash;return f=f.substring(1),b.state&&(e=b.state.url,f=b.state.hash),f?window.location.hash=f:window.scrollTo(0,0),d({},a,{url:e,hash:f})},go:function go(a,b){var c=b.target.href.replace(window.location.origin,""),e=c.startsWith("/")||c.startsWith("#"),g=c.startsWith(a.root);e&&!g&&(c="".concat(a.root).concat(c).replace(/\/\//g,"/"));var h=c.split("#"),i=f(h,2),j=i[0],k=i[1],l=void 0===k?"":k;if(j===a.url&&l===a.hash)return a;if(window.history.pushState({url:j,hash:l},"",c),l){var m=document.getElementById(l);m&&window.scrollTo(0,m.scrollTop),window.location.hash=l}else window.scrollTo(0,0);return d({},a,{url:j,hash:l,prev:a.url})}},O={"/":function _(){return[s([I({to:"/https:/magic.github.io"},"@magic")]),z("magic is a module/component based generator for static pages and serverless deployments."),z("goal of the project is to keep the client boilerplate footprint minimal yet easily extendable"),E("magic/core"),M()]},"/404/":function _(){return a("404 - not found")}};h({init:function init(){return d({},p,{url:window.location.pathname})},subscriptions:function subscriptions(){return[[C.listenPopState,N.pop]]},view:function view(b){var c=O[b.url]?b.url:"/404/",d=O[c];if(b.pages){var e=b.pages[c];for(var f in e)b[f]=e[f]}return a({id:"Magic"},L({page:d,state:b}))},node:document.getElementById("Magic")});