/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={633:(t,e,n)=>{var r=n(738).default;function o(){"use strict";t.exports=o=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var e,n={},i=Object.prototype,a=i.hasOwnProperty,s=Object.defineProperty||function(t,e,n){t[e]=n.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",h=u.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),a=new D(r||[]);return s(i,"_invoke",{value:S(t,n,a)}),i}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=d;var v="suspendedStart",y="suspendedYield",m="executing",b="completed",g={};function w(){}function E(){}function x(){}var T={};f(T,c,(function(){return this}));var L=Object.getPrototypeOf,A=L&&L(L(P([])));A&&A!==i&&a.call(A,c)&&(T=A);var k=x.prototype=w.prototype=Object.create(T);function M(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(o,i,s,u){var c=p(t[o],t,i);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==r(h)&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,u)}),(function(t){n("throw",t,s,u)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,u)}))}u(c.arg)}var o;s(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function S(t,n,r){var o=v;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===b){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var u=O(s,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===v)throw o=b,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var c=p(t,n,r);if("normal"===c.type){if(o=r.done?b:y,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=b,r.method="throw",r.arg=c.arg)}}}function O(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=p(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function B(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(B,this),this.reset(!0)}function P(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(a.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(r(t)+" is not iterable")}return E.prototype=x,s(k,"constructor",{value:x,configurable:!0}),s(x,"constructor",{value:E,configurable:!0}),E.displayName=f(x,h,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,h,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},M(_.prototype),f(_.prototype,l,(function(){return this})),n.AsyncIterator=_,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new _(d(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},M(k),f(k,h,"Generator"),f(k,c,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=P,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},n}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},738:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},756:(t,e,n)=>{var r=n(633)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==n.g&&n.g||{},e="URLSearchParams"in t,r="Symbol"in t&&"iterator"in Symbol,o="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in t,a="ArrayBuffer"in t;if(a)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(t){return t&&s.indexOf(Object.prototype.toString.call(t))>-1};function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function l(t){return"string"!=typeof t&&(t=String(t)),t}function h(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r&&(e[Symbol.iterator]=function(){return e}),e}function f(t){this.map={},t instanceof f?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){if(2!=t.length)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+t.length);this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function d(t){if(!t._noBody)return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function p(t){return new Promise((function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function v(t){var e=new FileReader,n=p(e);return e.readAsArrayBuffer(t),n}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(t){var n;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:o&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:e&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a&&o&&(n=t)&&DataView.prototype.isPrototypeOf(n)?(this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(t)||u(t))?this._bodyArrayBuffer=y(t):this._bodyText=t=Object.prototype.toString.call(t):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var t=d(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer)return d(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer));if(o)return this.blob().then(v);throw new Error("could not read as ArrayBuffer")},this.text=function(){var t,e,n,r,o,i=d(this);if(i)return i;if(this._bodyBlob)return t=this._bodyBlob,n=p(e=new FileReader),o=(r=/charset=([A-Za-z0-9_-]+)/.exec(t.type))?r[1]:"utf-8",e.readAsText(t,o),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(t,e){t=c(t),e=l(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},f.prototype.delete=function(t){delete this.map[c(t)]},f.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},f.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},f.prototype.set=function(t,e){this.map[c(t)]=l(e)},f.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},f.prototype.keys=function(){var t=[];return this.forEach((function(e,n){t.push(n)})),h(t)},f.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),h(t)},f.prototype.entries=function(){var t=[];return this.forEach((function(e,n){t.push([n,e])})),h(t)},r&&(f.prototype[Symbol.iterator]=f.prototype.entries);var b=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function g(e,n){if(!(this instanceof g))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,o,i=(n=n||{}).body;if(e instanceof g){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,n.headers||(this.headers=new f(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,i||null==e._bodyInit||(i=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=n.credentials||this.credentials||"same-origin",!n.headers&&this.headers||(this.headers=new f(n.headers)),this.method=(o=(r=n.method||this.method||"GET").toUpperCase(),b.indexOf(o)>-1?o:r),this.mode=n.mode||this.mode||null,this.signal=n.signal||this.signal||function(){if("AbortController"in t)return(new AbortController).signal}(),this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(i),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==n.cache&&"no-cache"!==n.cache)){var a=/([?&])_=[^&]*/;a.test(this.url)?this.url=this.url.replace(a,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function w(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}})),e}function E(t,e){if(!(this instanceof E))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new f(e.headers),this.url=e.url||"",this._initBody(t)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},m.call(g.prototype),m.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},E.error=function(){var t=new E(null,{status:200,statusText:""});return t.ok=!1,t.status=0,t.type="error",t};var x=[301,302,303,307,308];E.redirect=function(t,e){if(-1===x.indexOf(e))throw new RangeError("Invalid status code");return new E(null,{status:e,headers:{location:t}})};var T=t.DOMException;try{new T}catch(t){(T=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack}).prototype=Object.create(Error.prototype),T.prototype.constructor=T}function L(e,n){return new Promise((function(r,i){var s=new g(e,n);if(s.signal&&s.signal.aborted)return i(new T("Aborted","AbortError"));var u=new XMLHttpRequest;function h(){u.abort()}if(u.onload=function(){var t,e,n={statusText:u.statusText,headers:(t=u.getAllResponseHeaders()||"",e=new f,t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();try{e.append(r,o)}catch(t){console.warn("Response "+t.message)}}})),e)};0===s.url.indexOf("file://")&&(u.status<200||u.status>599)?n.status=200:n.status=u.status,n.url="responseURL"in u?u.responseURL:n.headers.get("X-Request-URL");var o="response"in u?u.response:u.responseText;setTimeout((function(){r(new E(o,n))}),0)},u.onerror=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},u.ontimeout=function(){setTimeout((function(){i(new TypeError("Network request timed out"))}),0)},u.onabort=function(){setTimeout((function(){i(new T("Aborted","AbortError"))}),0)},u.open(s.method,function(e){try{return""===e&&t.location.href?t.location.href:e}catch(t){return e}}(s.url),!0),"include"===s.credentials?u.withCredentials=!0:"omit"===s.credentials&&(u.withCredentials=!1),"responseType"in u&&(o?u.responseType="blob":a&&(u.responseType="arraybuffer")),n&&"object"==typeof n.headers&&!(n.headers instanceof f||t.Headers&&n.headers instanceof t.Headers)){var d=[];Object.getOwnPropertyNames(n.headers).forEach((function(t){d.push(c(t)),u.setRequestHeader(t,l(n.headers[t]))})),s.headers.forEach((function(t,e){-1===d.indexOf(e)&&u.setRequestHeader(e,t)}))}else s.headers.forEach((function(t,e){u.setRequestHeader(e,t)}));s.signal&&(s.signal.addEventListener("abort",h),u.onreadystatechange=function(){4===u.readyState&&s.signal.removeEventListener("abort",h)}),u.send(void 0===s._bodyInit?null:s._bodyInit)}))}L.polyfill=!0,t.fetch||(t.fetch=L,t.Headers=f,t.Request=g,t.Response=E)})(),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t){var n=function(t){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:n+""}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var a=function(){return i((function e(n,r){t(this,e),this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(r),this.actived="actived"}),[{key:"activeTab",value:function(t){var e=this;this.tabContent.forEach((function(t){return t.classList.remove(e.actived)}));var n=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.actived,n)}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){if(this.tabMenu.length===this.tabContent.length){var t=Array.from(document.querySelectorAll(".animalsDescription section"));t.forEach((function(e,n){var r=t.length-n;e.dataset.anime=r%2==0?"show-right":"show-down"})),this.tabContent[0].classList.add(this.actived),this.addTabNavEvent()}return this}}])}(),s=function(){return i((function e(n){t(this,e),this.activeClass="actived",this.accordionList=document.querySelectorAll(n)}),[{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){return e.addEventListener("click",(function(){return t.togleAccordion(e)}))}))}},{key:"togleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"init",value:function(){return this.accordionList.length&&this.togleAccordion(this.accordionList[0]),this.addAccordionEvent(),this}}])}(),u=function(){return i((function e(n,r){t(this,e),this.internalLinks=document.querySelectorAll(n),this.options=void 0===r?{behavior:"smooth"}:r,this.scrollToSection=this.scrollToSection.bind(this)}),[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.internalLinks.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.internalLinks.length&&this.addLinkEvent(),this}}])}(),c=function(){return i((function e(n,r,o){t(this,e),this.openButton=document.querySelector(n),this.closeButton=document.querySelector(r),this.containerModal=document.querySelector(o),this.actived="actived",this.eventToggleModal=this.eventToggleModal.bind(this),this.modalClickOff=this.modalClickOff.bind(this)}),[{key:"modalToggle",value:function(){this.containerModal.classList.toggle(this.actived)}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.modalToggle()}},{key:"modalClickOff",value:function(t){t.target===this.containerModal&&this.modalToggle()}},{key:"addModalEvent",value:function(){this.openButton.addEventListener("click",this.eventToggleModal),this.closeButton.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.modalClickOff)}},{key:"init",value:function(){return this.openButton&&this.closeButton&&this.containerModal&&this.addModalEvent(),this}}])}(),l=function(){return i((function e(n){t(this,e),this.tooltip=document.querySelectorAll(n),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this)}),[{key:"onMouseOver",value:function(t){this.tooltipBoxCreate(t.currentTarget),this.tooltipBox.style.top=t.pageY+"px",this.tooltipBox.style.left=t.pageX+"px",t.currentTarget.addEventListener("mouseleave",this.onMouseLeave),t.currentTarget.addEventListener("mousemove",this.onMouseMove)}},{key:"addTooltipEvent",value:function(){var t=this;this.tooltip.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"tooltipBoxCreate",value:function(t){var e=document.createElement("div");e.classList.add("tooltip");var n=t.getAttribute("aria-label");e.innerText=n,document.body.appendChild(e),this.tooltipBox=e}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"onMouseMove",value:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),t.pageX+290>window.innerWidth?this.tooltipBox.style.left="".concat(t.pageX-210,"px"):this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},{key:"init",value:function(){return this.tooltip.length&&this.addTooltipEvent(),this}}])}(),h=function(){return i((function e(n){t(this,e),this.tooltipAnimals=document.querySelectorAll(n),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this)}),[{key:"onMouseOver",value:function(t){this.tooltipBoxCreate(t.currentTarget),this.tooltipBox.style.top=t.pageY+"px",this.tooltipBox.style.left=t.pageX+"px",t.currentTarget.addEventListener("mouseleave",this.onMouseLeave),t.currentTarget.addEventListener("mousemove",this.onMouseMove)}},{key:"addTooltipEvent",value:function(){var t=this;this.tooltipAnimals.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"tooltipBoxCreate",value:function(t){var e=document.createElement("div");e.classList.add("tootipAnimals");var n=t.getAttribute("aria-label");e.innerText=n,document.body.appendChild(e),this.tooltipBox=e}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"onMouseMove",value:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),this.tooltipBox.style.left="".concat(t.pageX+18,"px")}},{key:"init",value:function(){return this.tooltipAnimals.length&&this.addTooltipEvent(),this}}])}();function f(t,e,n){var r=document.documentElement,o="data-outside";function i(a){t.contains(a.target)||(n(),e.forEach((function(t){r.removeEventListener(t,i)})),t.removeAttribute(o))}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){return r.addEventListener(t,i)}))})),t.setAttribute(o,""))}var d=function(){return i((function e(n,r){t(this,e),this.dropdownMenus=document.querySelectorAll(n),void 0===this.events?this.events=["touchstart","click"]:this.events=r,this.activeDropDownMenu=this.activeDropDownMenu.bind(this),this.activeClass="actived"}),[{key:"activeDropDownMenu",value:function(t){var e=this;t.preventDefault();var n=t.currentTarget;n.classList.add(this.activeClass),f(n,this.events,(function(){n.classList.remove(e.activeClass)}))}},{key:"addDropDownMenuEvent",value:function(){var t=this;this.dropdownMenus.forEach((function(e){t.events.forEach((function(n){return e.addEventListener(n,t.activeDropDownMenu)}))}))}},{key:"init",value:function(){return this.dropdownMenus.length&&this.addDropDownMenuEvent(),this}}])}();function p(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,o)}function v(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){p(i,r,o,a,s,"next",t)}function s(t){p(i,r,o,a,s,"throw",t)}a(void 0)}))}}var y=n(756),m=n.n(y),b=function(){return i((function e(n,r,o){t(this,e),this.numbers=document.querySelectorAll(n),this.observerTarget=document.querySelector(r),this.observerClass=o,this.handleMutation=this.handleMutation.bind(this)}),[{key:"numbersAnimation",value:function(){var t=this;this.numbers.forEach((function(e){return t.constructor.increaseNumbers(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.numbersAnimation(),this.observer.disconnect())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){return this.numbers.length&&this.observerTarget&&this.addMutationObserver(),this}}],[{key:"increaseNumbers",value:function(t){var e=+t.innerText,n=Math.floor(e/100),r=0,o=setInterval((function(){r+=n,t.innerText=r,r>=e&&(t.innerText=e,clearInterval(o))}),15)}}])}();function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var w,E,x,T,L,A,k,M=function(){return i((function e(n){var r,o;t(this,e),this.sections=document.querySelectorAll(n),this.halfWindow=.5*window.innerHeight,this.checkDistance=(r=this.checkDistance.bind(this),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];o&&clearTimeout(o),o=setTimeout((function(){r.apply(void 0,e),o=null}),60)})}),[{key:"getDistance",value:function(){var t,e=this;this.distance=(t=this.sections,function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return g(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var n=t.offsetTop;return{sectionTag:t,offsetTop:Math.floor(n-e.halfWindow)}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(t){window.scrollY>t.offsetTop?t.sectionTag.classList.add("actived"):t.sectionTag.classList.contains("actived")&&t.sectionTag.classList.remove("actived")}))}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stopAnimScroll",value:function(){window.removeEventListener("scroll",this.checkDistance)}}])}();new u("[data-menu='smooth'] a[href^='#']").init(),new s("[data-anime='accordion'] dt").init(),new a("[data-tab='menu'] li","[data-tab='content'] section").init(),new c("[data-modal='open']","[data-modal='close']","[data-modal='container']").init(),new l("[data-tooltip]").init(),new h("[data-tooltip-animals] li img").init(),new M("[data-anime='scroll']").init(),function(){var t=document.querySelector(".grid-numbers");function e(e){var n=function(t){var e=document.createElement("div");return e.classList.add("animal-number"),e.innerHTML="<h3>".concat(t.especie,"</h3><span data-number>").concat(t.total,"</span>"),e}(e);t.appendChild(n)}function n(){return(n=v(m().mark((function t(){var n;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("../animaisAPI.json");case 3:return n=t.sent,t.next=6,n.json();case 6:t.sent.forEach((function(t){return e(t)})),new b("[data-number]",".numbers","actived").init(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}(),function(){function t(){return(t=v(m().mark((function t(){var e,n;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://blockchain.info/ticker");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,document.querySelector("[data-bitcoin]").innerText=(15/n.BRL.sell).toFixed(7),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("erro");case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}(),new d("[data-dropdown]").init(),function(){var t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]'),n=["touchstart","click"];if(t){var r=function(r){t.classList.add("actived"),e.classList.add("actived"),f(e,n,(function(){t.classList.remove("actived"),e.classList.remove("actived")}))};n.forEach((function(e){return t.addEventListener(e,r)}))}}(),E=(w=document.querySelector("[data-week]")).dataset.week.split(",").map(Number),x=w.dataset.time.split(",").map(Number),L=(T=new Date).getDay(),A=T.getHours(),k=E.includes(L),A>=x[0]&&x[1],k&&k?(w.classList.add("open"),w.previousElementSibling.classList.add("open")):w.previousElementSibling.classList.add("closed")})()})();