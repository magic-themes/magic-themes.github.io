"use strict";function b(a,b){if(null==a)return{};var d,e,f=c(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(e=0;e<g.length;e++)d=g[e],!(0<=b.indexOf(d))&&Object.prototype.propertyIsEnumerable.call(a,d)&&(f[d]=a[d])}return f}function c(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function d(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function f(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?d(Object(b),!0).forEach(function(c){g(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):d(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function g(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function i(a,b){return l(a)||k(a,b)||j()}function j(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function k(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function l(a){if(Array.isArray(a))return a}function m(a){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},m(a)}var n=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},n=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||n(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)p(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(q(a.children[h]=v(a.children[h]),c,d));return a.node=f},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(u[x]);)s(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(u[z]);)s(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(u[x]=v(u[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(s(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,u[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===m(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||c.type!==a||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){n(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=o(j,k([i(b)]),n)),d&&!c&&g(p,c=!0)),b},n=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?n(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?n(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](n,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h=u(d(b)),l)};n(a.init)}}}(),o=n.h,e=n.app,h=function(a){return function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===m(a)})};return d||(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),o(a,b,d)}},q=h("a"),a=h("button"),r=h("div"),s=h("footer"),t=h("h1"),u=h("h2"),v=h("h3"),w=h("h4"),x=h("header"),y=h("img"),z=h("input"),A=h("label"),B=h("li"),C=h("link"),D=h("main"),E=h("meta"),F=h("nav"),G=h("p"),p=h("script"),H=h("span"),I=h("title"),J=h("ul"),K={description:"@magic-themes. javascript css-in-js objects ready for usage in the @magic app.",gdpr:{allowed:[],show:!0},logo:"/logo.png",logotext:"@magic-themes",menu:[{text:"magic-themes",to:"/#gl-magic-themes"}],pageClass:{},root:"/",theme:"dark",title:"@magic-themes",url:"/"},L={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}},mapClickToGo:function mapClickToGo(a){return a.preventDefault(),a}},M=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return s({class:"Footer"},[r({class:"Container"},[b,r({class:"Credits"},["made with a few bits of ",T({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])]),"function"==typeof N&&N(a)])},N=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Magic Privacy Information":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.noCookieButtonText,l=void 0===k?"Awesome.":k,m=c.allowAllCookiesButtonText,n=void 0===m?"Allow all":m,o=c.allowCookieButtonText,p=void 0===o?"Allow selected":o,q=c.denyCookieButtonText,s=void 0===q?"Deny all personal data":q;if(f){var t=!!e.length;return r({class:"Gdpr"},[z({type:"checkbox",name:"show-hide",id:"show-hide",checked:!f}),r({class:"Container"},[h&&v(h),j&&G(j),t&&[J(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return B({class:"Cookie"},[z({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[$.gdpr.toggleAllow,{name:b}]}),(d||e)&&A({for:b},[d&&w(d),e&&G(e)])])}))],t?[A({class:"button allow all",for:"show-hide",onclick:$.gdpr.allow},n),A({class:"button allow",for:"show-hide",onclick:$.gdpr.close},p),A({class:"button allow none",for:"show-hide",onclick:$.gdpr.deny},s)]:A({class:"button",for:"show-hide",onclick:$.gdpr.close},l)])])}},O=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.project,d=void 0!==c&&c,e=b.branch,f=void 0===e?"master":e,g=b.host,h=void 0===g?"github":g,j=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://img.shields.io/travis/com/".concat(a,"/").concat(f)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;if(a){var b=a.split("/"),c=i(b,2),e=c[0],g=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(g,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(g,"/").concat(f,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return{to:"https://coveralls.io/".concat(h,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(h,"/").concat(a,"/").concat(f,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(h,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=i(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return j.length?J({class:"GitBadges"},j.map(function(a){var b=a.to,c=a.src;return B([T({to:b},R({src:c}))])})):void 0},P=function(a){var b=a.items,c=void 0===b?[]:b,d=a.org,e=a.host,g=void 0===e?"github":e,h=a.header,i=a.desc,j=void 0===i?a.description:i,k={};return a["class"]?!a["class"].includes("GitList")&&(k["class"]="GitList ".concat(a["class"])):k["class"]="GitList",k.id=a.id?a.id:d,k.id.startsWith("gl")||(k.id="gl-".concat(k.id)),r(k,[h&&u(h),j&&r({class:"description"},j),J({id:"".concat(k.id,"-ul")},[c.map(function(a){return P.Item(f({org:d,id:"".concat(k.id,"-li"),host:g},a))})])])};P.Item=function(a){var b=a.name,c=a.org,d=a.id,e=a.host,f=a.desc||a.description;return B({id:"".concat(d,"-").concat(b),class:"GitListItem"},[v([T({to:"https://".concat(e,".com/").concat(c,"/").concat(b)},"@".concat(c,"/").concat(b))]),f&&G(f),O("".concat(c,"/").concat(b)),T({to:"https://".concat(c,".").concat(e,".io/").concat(b)},"docs / demo")])};var Q=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],d=a.logo,e=a.menu,f=a.logotext,g=b(a,["logo","menu","logotext"]);return d||e||f?x({class:"Header"},[(d||f)&&T({to:g.root,class:"Logo"},[d&&R(d),f&&H(f)]),e&&U({state:g,items:e}),c]):void 0},R=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),y(a)},S=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return a({class:"LightSwitch",onclick:$.changeTheme})},T=function(a,c){var d=a.to,e=b(a,["to"]),f=e.href,g=e.text,h=e.nofollow,i=e.noreferrer,j=b(e,["href","text","nofollow","noreferrer"]);d=d||f||"",j.href=d;var k=d.startsWith("/");return k?j.onclick=[$.go,L.mapClickToGo]:(j.target="_blank",j.rel="noopener",h&&(j.rel+=" nofollow"),i&&(j.rel+=" noreferrer")),q(j,[g,c])},U=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.items,c=a["class"],d=void 0===c?"Menu":c,e=a.collapse,g=a.state;if(b.length){var h=g.url||"";return g.hash&&!h.endsWith(g.hash)&&(h+="#".concat(g.hash)),F({className:d},J(b.map(function(a){return V(f({},a,{url:h,state:g,collapse:void 0===e||e}))})))}},V=function(a){var c=a.text,d=a.items,e=void 0===d?[]:d,g=a.url,h=a.state,i=a.parentTo,j=void 0===i?void 0:i,k=a.collapse,l=b(a,["text","items","url","state","parentTo","collapse"]),m=h.root;if(l.to||c){var n={class:{}},o=l.to;o.startsWith("/#")&&(o=o.substr(1));var p=l.to[0],q="/"===p||"-"===p||"#"===p;if(j&&q)if("-"===p||"#"===p)o=j+o;else{var u=o.split("/")[1];if(u){var v=j.endsWith("/".concat(u,"/"));!v&&q&&(o=j+o)}}("/"!==l.to&&g.endsWith(l.to)||l.to===g)&&(n["class"].active=!0);var r=o.startsWith(m);m&&q&&!r&&(o=m+o),l.to=o.replace(/\/\//g,"/");var s=[],t=g&&g.includes(l.to);return(e.length&&t||!k)&&(s=J(e.map(function(a){return V(f({parentTo:l.to,url:g,state:h,collapse:k},a))}))),B(n,[l.to?T(l,c):H(l,c),s])}},W=function(a){var b=a.page,c=a.state;b=b?b(c):"404 - not found";var d={id:"Magic",class:c.pageClass};return D(d,r({class:{Wrapper:!0}},X({state:c,page:b})))},X=function(a){var b=a.page,c=a.state;return[Q(c),r({class:"Page"},b),M(c)]},Y=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return P(f({org:"magic-themes",header:[T({to:"https://magic-themes.github.io"},"@magic-themes")],desc:["below is a collection of the available @magic app themes."],items:[{name:"docs",description:"the @magic documentation theme. used in all @magic docs."}]},a))},Z={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=Z.db.init(),g=Z.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d," ").concat(val))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=Z.db.init(),f=void 0;return e[d]&&(f=Z.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=Z.db.init();e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}()},$={changeTheme:function changeTheme(a){return f({},a,{pageClass:f({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},gdpr:{allow:function allow(a){return[f({},a,{gdpr:f({},a.gdpr,{show:!1})}),[Z.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[$.gdpr.show,{show:!1}]}]]},close:function close(a){return[f({},a,{gdpr:f({},a.gdpr,{show:!1})}),[Z.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[$.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[a,[Z.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[$.gdpr.show,{show:!1}]}]]},load:function load(a){return[a,[Z.db.get,{key:"magic-gdpr",action:$.gdpr.show}]]},show:function(a,b){var c=b.show;return b.value&&"undefined"!=typeof b.value.show&&(c=b.value.show),"undefined"==typeof c?a:f({},a,{gdpr:f({},a.gdpr,{show:c})})},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,g=e.allowed.includes(d);return g?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),f({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=i(d,2),g=e[0],h=e[1],j=void 0===h?"":h;return g===a.url&&j===a.hash?a:(window.history.pushState({url:g,hash:j},"",c),j?window.location.hash=j:window.scroll(0,0),f({},a,{url:g,hash:j,prev:a.url}))},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;return e=e.substring(1),b.state&&(d=b.state.url,e=b.state.hash),e?window.location.hash=e:window.scroll(0,0),f({},a,{url:d,hash:e})}},_={"/":function _(a){return[t([T({to:"https://magic.github.io"},"@magic")]),G("magic is a module/component based generator for static pages and serverless deployments."),G("goal of the project is to keep the client boilerplate footprint minimal yet easily extendable"),O("magic/core"),Y(),S(a)]},"/404/":function _(){return r("404 - not found")}};e({init:function init(){return $.gdpr.load(f({},K,{url:window.location.pathname}))},subscriptions:function subscriptions(){return[[L.listenPopState,$.pop]]},view:function view(a){var b=_[a.url]?a.url:"/404/",c=_[b];return a.pages&&a.pages[b]&&Object.keys(a.pages[b]).forEach(function(c){a[c]=a.pages[b][c]}),W({page:c,state:a})},node:document.getElementById("Magic")});