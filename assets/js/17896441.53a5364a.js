"use strict";(self.webpackChunktdm_docs=self.webpackChunktdm_docs||[]).push([[918],{4122:(e,t,n)=>{n.d(t,{J:()=>a});var r=n(7294),o=n(4996);const a=e=>{let{src:t,width:n=16,height:a=16,className:l}=e;return r.createElement("span",{className:l,style:{backgroundImage:`url(${(0,o.Z)(t)})`,minWidth:`${n}px`,minHeight:`${a}px`,display:"inline-block"}})}},8463:(e,t,n)=>{n.d(t,{JO:()=>r.J,Nt:()=>s});var r=n(4122),o=n(7294);n(4996);var a=n(6010);const l=function(e,t,n){const[r,a]=(0,o.useState)(void 0);(0,o.useEffect)((()=>{function o(){const o=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=n}));if(t){if(t.getBoundingClientRect().top>=n){return e[e.indexOf(t)-1]??t}return t}return e[(null==e?void 0:e.length)-1]}();if(o){let n=0,l=!1;const c=document.getElementsByClassName(e);for(;n<(null==c?void 0:c.length)&&!l;){const e=c[n],{href:i}=e,u=decodeURIComponent(i.substring(i.indexOf("#")+1));o.id===u&&(r&&r.classList.remove(t),e.classList.add(t),a(e),l=!0),n+=1}}}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}))},c="tableOfContents_a0eZ",i="table-of-contents__link";function u(e){let{toc:t,isChild:n}=e;return null!=t&&t.length?o.createElement("ul",{className:n?"":"table-of-contents"},null==t?void 0:t.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,className:i,dangerouslySetInnerHTML:{__html:e.value},title:e.value}),o.createElement(u,{isChild:!0,toc:e.children}))))):null}function s(e){let{toc:t}=e;return l(i,"table-of-contents__link--active",150),o.createElement("div",{className:(0,a.Z)(c,"thin-scrollbar")},o.createElement(u,{toc:t}))}},8276:(e,t,n)=>{t.p=void 0;const r=n(655).__importDefault(n(2263));t.p=e=>{var t;const{siteConfig:n={}}=r.default(),{title:o,titleDelimiter:a="|"}=n;return e&&null!=e&&null!=(t=e.trim())&&t.length?`${e.trim()} ${a} ${o}`:o}},5657:(e,t,n)=>{n.d(t,{G:()=>a});var r=n(7294);const o={sm:640,md:768,lg:1024,xl:1280,"2xl":1536,laptop:1440},a=e=>{const[t,n]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{function t(){window.innerWidth>=o[e]?n(!0):n(!1)}return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)}),[]),t}},4525:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(7294),o=n(5742),a=n(8276),l=n(2263),c=n(4996),i=n(6010),u=n(8463),s=n(5657);const f=function(e){const{siteConfig:t}=(0,l.default)(),{url:n}=t,{content:f}=e,{metadata:d,frontMatter:{image:p,keywords:m,hide_title:y,hide_table_of_contents:h}}=f,{description:v,title:b,permalink:_}=d,w=(0,s.G)("lg"),g=(0,s.G)("laptop"),E=(0,a.p)(b),O=(0,c.Z)(p,{absolute:!0}),j=""+("https://tdspora.ai"+(null==_?void 0:_.replace("/tdspora-dev.github.io/","")));return r.createElement(r.Fragment,null,r.createElement(o.Z,null,r.createElement("title",null,E),r.createElement("meta",{property:"og:title",content:E}),v&&r.createElement("meta",{name:"description",content:v}),v&&r.createElement("meta",{property:"og:description",content:v}),m&&(null==m?void 0:m.length)&&r.createElement("meta",{name:"keywords",content:m.join(",")}),p&&r.createElement("meta",{property:"og:image",content:O}),p&&r.createElement("meta",{name:"twitter:image",content:O}),p&&r.createElement("meta",{name:"twitter:image:alt",content:`Image for ${b}`}),_&&r.createElement("meta",{property:"og:url",content:j}),_&&r.createElement("link",{rel:"canonical",href:j}),_&&r.createElement("link",{rel:"alternate",href:j})),r.createElement("main",{className:"grid grid-cols-12 gap-x-5 mb-22"},r.createElement("article",{className:(0,i.Z)("col-span-12 lg:col-start-2 lg:col-span-8 mt-30 lg:mt-1",{"lg:col-span-12 pr-16":g}),style:{maxWidth:"100%"}},!y&&r.createElement("header",null,r.createElement("h1",{className:"mt-8 mb-4 text-44 font-ubuntu leading-48 text-monochrome-text"},b)),r.createElement("div",{className:"markdown"},r.createElement(f,null))),!h&&f.toc&&w&&!g&&r.createElement("aside",{className:"col-span-3"},r.createElement(u.Nt,{toc:f.toc}))),!h&&f.toc&&w&&g&&r.createElement("aside",null,r.createElement(u.Nt,{toc:f.toc})))}},655:(e,t,n)=>{n.r(t),n.d(t,{__assign:()=>a,__asyncDelegator:()=>g,__asyncGenerator:()=>w,__asyncValues:()=>E,__await:()=>_,__awaiter:()=>s,__classPrivateFieldGet:()=>S,__classPrivateFieldIn:()=>C,__classPrivateFieldSet:()=>k,__createBinding:()=>d,__decorate:()=>c,__exportStar:()=>p,__extends:()=>o,__generator:()=>f,__importDefault:()=>P,__importStar:()=>x,__makeTemplateObject:()=>O,__metadata:()=>u,__param:()=>i,__read:()=>y,__rest:()=>l,__spread:()=>h,__spreadArray:()=>b,__spreadArrays:()=>v,__values:()=>m});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function l(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function c(e,t,n,r){var o,a=arguments.length,l=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(l=(a<3?o(l):a>3?o(t,n,l):o(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l}function i(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function s(e,t,n,r){return new(n||(n=Promise))((function(o,a){function l(e){try{i(r.next(e))}catch(t){a(t)}}function c(e){try{i(r.throw(e))}catch(t){a(t)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,c)}i((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1],o=a;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(a);break}o[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function m(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)l.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return l}function h(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e}function v(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],l=0,c=a.length;l<c;l++,o++)r[o]=a[l];return r}function b(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function _(e){return this instanceof _?(this.v=e,this):new _(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},l("next"),l("throw"),l("return"),r[Symbol.asyncIterator]=function(){return this},r;function l(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||c(e,t)}))})}function c(e,t){try{(n=o[e](t)).value instanceof _?Promise.resolve(n.value.v).then(i,u):s(a[0][2],n)}catch(r){s(a[0][3],r)}var n}function i(e){c("next",e)}function u(e){c("throw",e)}function s(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}}function g(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:_(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function E(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=m(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function O(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var j=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return j(t,e),t}function P(e){return e&&e.__esModule?e:{default:e}}function S(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function k(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}function C(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}}}]);