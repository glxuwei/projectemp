!function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var e={};return n.m=t,n.c=e,n.p="http://common1.qyerstatic.com/pictrip",n(0)}({22:function(t,n){/*!
	 * vue-resource v0.9.3
	 * https://github.com/vuejs/vue-resource
	 * Released under the MIT License.
	 */
"use strict";function e(t){this.state=nt,this.value=void 0,this.deferred=[];var n=this;try{t(function(t){n.resolve(t)},function(t){n.reject(t)})}catch(e){n.reject(e)}}function o(t,n){t instanceof ot?this.promise=t:this.promise=new ot(t.bind(n)),this.context=n}function r(t){ut=t.util,it=t.config.debug||!t.config.silent}function i(t){"undefined"!=typeof console&&it&&console.warn("[VueResource warn]: "+t)}function u(t){"undefined"!=typeof console&&console.error(t)}function s(t,n){return ut.nextTick(t,n)}function a(t){return t.replace(/^\s*|\s*$/g,"")}function c(t){return"string"==typeof t}function f(t){return t===!0||t===!1}function p(t){return"function"==typeof t}function l(t){return null!==t&&"object"==typeof t}function d(t){return l(t)&&Object.getPrototypeOf(t)==Object.prototype}function h(t){return"undefined"!=typeof FormData&&t instanceof FormData}function m(t,n,e){var r=o.resolve(t);return arguments.length<2?r:r.then(n,e)}function v(t,n,e){return e=e||{},p(e)&&(e=e.call(n)),g(t.bind({$vm:n,$options:e}),t,{$options:e})}function y(t,n){var e,o;if("number"==typeof t.length)for(e=0;e<t.length;e++)n.call(t[e],t[e],e);else if(l(t))for(o in t)t.hasOwnProperty(o)&&n.call(t[o],t[o],o);return t}function g(t){var n=st.slice.call(arguments,1);return n.forEach(function(n){x(t,n,!0)}),t}function w(t){var n=st.slice.call(arguments,1);return n.forEach(function(n){for(var e in n)void 0===t[e]&&(t[e]=n[e])}),t}function b(t){var n=st.slice.call(arguments,1);return n.forEach(function(n){x(t,n)}),t}function x(t,n,e){for(var o in n)e&&(d(n[o])||at(n[o]))?(d(n[o])&&!d(t[o])&&(t[o]={}),at(n[o])&&!at(t[o])&&(t[o]=[]),x(t[o],n[o],e)):void 0!==n[o]&&(t[o]=n[o])}function j(t,n){var e=n(t);return c(t.root)&&!e.match(/^(https?:)?\//)&&(e=t.root+"/"+e),e}function E(t,n){var e=Object.keys($.options.params),o={},r=n(t);return y(t.params,function(t,n){e.indexOf(n)===-1&&(o[n]=t)}),o=$.params(o),o&&(r+=(r.indexOf("?")==-1?"?":"&")+o),r}function T(t,n,e){var o=k(t),r=o.expand(n);return e&&e.push.apply(e,o.vars),r}function k(t){var n=["+","#",".","/",";","?","&"],e=[];return{vars:e,expand:function(o){return t.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(t,r,i){if(r){var u=null,s=[];if(n.indexOf(r.charAt(0))!==-1&&(u=r.charAt(0),r=r.substr(1)),r.split(/,/g).forEach(function(t){var n=/([^:\*]*)(?::(\d+)|(\*))?/.exec(t);s.push.apply(s,O(o,u,n[1],n[2]||n[3])),e.push(n[1])}),u&&"+"!==u){var a=",";return"?"===u?a="&":"#"!==u&&(a=u),(0!==s.length?u:"")+s.join(a)}return s.join(",")}return C(i)})}}}function O(t,n,e,o){var r=t[e],i=[];if(L(r)&&""!==r)if("string"==typeof r||"number"==typeof r||"boolean"==typeof r)r=r.toString(),o&&"*"!==o&&(r=r.substring(0,parseInt(o,10))),i.push(U(n,r,P(n)?e:null));else if("*"===o)Array.isArray(r)?r.filter(L).forEach(function(t){i.push(U(n,t,P(n)?e:null))}):Object.keys(r).forEach(function(t){L(r[t])&&i.push(U(n,r[t],t))});else{var u=[];Array.isArray(r)?r.filter(L).forEach(function(t){u.push(U(n,t))}):Object.keys(r).forEach(function(t){L(r[t])&&(u.push(encodeURIComponent(t)),u.push(U(n,r[t].toString())))}),P(n)?i.push(encodeURIComponent(e)+"="+u.join(",")):0!==u.length&&i.push(u.join(","))}else";"===n?i.push(encodeURIComponent(e)):""!==r||"&"!==n&&"?"!==n?""===r&&i.push(""):i.push(encodeURIComponent(e)+"=");return i}function L(t){return void 0!==t&&null!==t}function P(t){return";"===t||"&"===t||"?"===t}function U(t,n,e){return n="+"===t||"#"===t?C(n):encodeURIComponent(n),e?encodeURIComponent(e)+"="+n:n}function C(t){return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t){return/%[0-9A-Fa-f]/.test(t)||(t=encodeURI(t)),t}).join("")}function _(t){var n=[],e=T(t.url,t.params,n);return n.forEach(function(n){delete t.params[n]}),e}function $(t,n){var e,o=this||{},r=t;return c(t)&&(r={url:t,params:n}),r=g({},$.options,o.$options,r),$.transforms.forEach(function(t){e=R(t,e,o.$vm)}),e(r)}function R(t,n,e){return function(o){return t.call(e,o,n)}}function q(t,n,e){var o,r=at(n),i=d(n);y(n,function(n,u){o=l(n)||at(n),e&&(u=e+"["+(i||o?u:"")+"]"),!e&&r?t.add(n.name,n.value):o?q(t,n,u):t.add(u,n)})}function S(t){return new o(function(n){var e=new XDomainRequest,o=function(o){var r=t.respondWith(e.responseText,{status:e.status,statusText:e.statusText});n(r)};t.abort=function(){return e.abort()},e.open(t.method,t.getUrl(),!0),e.timeout=0,e.onload=o,e.onerror=o,e.ontimeout=function(){},e.onprogress=function(){},e.send(t.getBody())})}function M(t,n){!f(t.crossOrigin)&&A(t)&&(t.crossOrigin=!0),t.crossOrigin&&(dt||(t.client=S),delete t.emulateHTTP),n()}function A(t){var n=$.parse($(t));return n.protocol!==lt.protocol||n.host!==lt.host}function I(t,n){t.emulateJSON&&d(t.body)&&(t.body=$.params(t.body),t.headers["Content-Type"]="application/x-www-form-urlencoded"),h(t.body)&&delete t.headers["Content-Type"],d(t.body)&&(t.body=JSON.stringify(t.body)),n(function(t){var n=t.headers["Content-Type"];if(c(n)&&0===n.indexOf("application/json"))try{t.data=t.json()}catch(e){t.data=null}else t.data=t.text()})}function H(t){return new o(function(n){var e,o,r=t.jsonp||"callback",i="_jsonp"+Math.random().toString(36).substr(2),u=null;e=function(e){var r=0;"load"===e.type&&null!==u?r=200:"error"===e.type&&(r=404),n(t.respondWith(u,{status:r})),delete window[i],document.body.removeChild(o)},t.params[r]=i,window[i]=function(t){u=JSON.stringify(t)},o=document.createElement("script"),o.src=t.getUrl(),o.type="text/javascript",o.async=!0,o.onload=e,o.onerror=e,document.body.appendChild(o)})}function D(t,n){"JSONP"==t.method&&(t.client=H),n(function(n){"JSONP"==t.method&&(n.data=n.json())})}function N(t,n){p(t.before)&&t.before.call(this,t),n()}function J(t,n){t.emulateHTTP&&/^(PUT|PATCH|DELETE)$/i.test(t.method)&&(t.headers["X-HTTP-Method-Override"]=t.method,t.method="POST"),n()}function F(t,n){t.method=t.method.toUpperCase(),t.headers=ct({},z.headers.common,t.crossOrigin?{}:z.headers.custom,z.headers[t.method.toLowerCase()],t.headers),n()}function W(t,n){var e;t.timeout&&(e=setTimeout(function(){t.abort()},t.timeout)),n(function(t){clearTimeout(e)})}function X(t){return new o(function(n){var e=new XMLHttpRequest,o=function(o){var r=t.respondWith("response"in e?e.response:e.responseText,{status:1223===e.status?204:e.status,statusText:1223===e.status?"No Content":a(e.statusText),headers:B(e.getAllResponseHeaders())});n(r)};t.abort=function(){return e.abort()},e.open(t.method,t.getUrl(),!0),e.timeout=0,e.onload=o,e.onerror=o,t.progress&&("GET"===t.method?e.addEventListener("progress",t.progress):/^(POST|PUT)$/i.test(t.method)&&e.upload.addEventListener("progress",t.progress)),t.credentials===!0&&(e.withCredentials=!0),y(t.headers||{},function(t,n){e.setRequestHeader(n,t)}),e.send(t.getBody())})}function B(t){var n,e,o,r={};return y(a(t).split("\n"),function(t){o=t.indexOf(":"),e=a(t.slice(0,o)),n=a(t.slice(o+1)),r[e]?at(r[e])?r[e].push(n):r[e]=[r[e],n]:r[e]=n}),r}function G(t){function n(n){return new o(function(o){function s(){e=r.pop(),p(e)?e.call(t,n,a):(i("Invalid interceptor of type "+typeof e+", must be a function"),a())}function a(n){if(p(n))u.unshift(n);else if(l(n))return u.forEach(function(e){n=m(n,function(n){return e.call(t,n)||n})}),void m(n,o);s()}s()},t)}var e,r=[V],u=[];return l(t)||(t=null),n.use=function(t){r.push(t)},n}function V(t,n){var e=t.client||X;n(e(t))}function z(t){var n=this||{},e=G(n.$vm);return w(t||{},n.$options,z.options),z.interceptors.forEach(function(t){e.use(t)}),e(new vt(t)).then(function(t){return t.ok?t:o.reject(t)},function(t){return t instanceof Error&&u(t),o.reject(t)})}function K(t,n,e,o){var r=this||{},i={};return e=ct({},K.actions,e),y(e,function(e,u){e=g({url:t,params:n||{}},o,e),i[u]=function(){return(r.$http||z)(Q(e,arguments))}}),i}function Q(t,n){var e,o=ct({},t),r={};switch(n.length){case 2:r=n[0],e=n[1];break;case 1:/^(POST|PUT|PATCH)$/i.test(o.method)?e=n[0]:r=n[0];break;case 0:break;default:throw"Expected up to 4 arguments [params, body], got "+n.length+" arguments"}return o.body=e,o.params=ct({},o.params,r),o}function Y(t){Y.installed||(r(t),t.url=$,t.http=z,t.resource=K,t.Promise=o,Object.defineProperties(t.prototype,{$url:{get:function(){return v(t.url,this,this.$options.url)}},$http:{get:function(){return v(t.http,this,this.$options.http)}},$resource:{get:function(){return t.resource.bind(this)}},$promise:{get:function(){var n=this;return function(e){return new t.Promise(e,n)}}}}))}var Z=0,tt=1,nt=2;e.reject=function(t){return new e(function(n,e){e(t)})},e.resolve=function(t){return new e(function(n,e){n(t)})},e.all=function(t){return new e(function(n,o){function r(e){return function(o){u[e]=o,i+=1,i===t.length&&n(u)}}var i=0,u=[];0===t.length&&n(u);for(var s=0;s<t.length;s+=1)e.resolve(t[s]).then(r(s),o)})},e.race=function(t){return new e(function(n,o){for(var r=0;r<t.length;r+=1)e.resolve(t[r]).then(n,o)})};var et=e.prototype;et.resolve=function(t){var n=this;if(n.state===nt){if(t===n)throw new TypeError("Promise settled with itself.");var e=!1;try{var o=t&&t.then;if(null!==t&&"object"==typeof t&&"function"==typeof o)return void o.call(t,function(t){e||n.resolve(t),e=!0},function(t){e||n.reject(t),e=!0})}catch(r){return void(e||n.reject(r))}n.state=Z,n.value=t,n.notify()}},et.reject=function(t){var n=this;if(n.state===nt){if(t===n)throw new TypeError("Promise settled with itself.");n.state=tt,n.value=t,n.notify()}},et.notify=function(){var t=this;s(function(){if(t.state!==nt)for(;t.deferred.length;){var n=t.deferred.shift(),e=n[0],o=n[1],r=n[2],i=n[3];try{t.state===Z?r("function"==typeof e?e.call(void 0,t.value):t.value):t.state===tt&&("function"==typeof o?r(o.call(void 0,t.value)):i(t.value))}catch(u){i(u)}}})},et.then=function(t,n){var o=this;return new e(function(e,r){o.deferred.push([t,n,e,r]),o.notify()})},et["catch"]=function(t){return this.then(void 0,t)};var ot=window.Promise||e;o.all=function(t,n){return new o(ot.all(t),n)},o.resolve=function(t,n){return new o(ot.resolve(t),n)},o.reject=function(t,n){return new o(ot.reject(t),n)},o.race=function(t,n){return new o(ot.race(t),n)};var rt=o.prototype;rt.bind=function(t){return this.context=t,this},rt.then=function(t,n){return t&&t.bind&&this.context&&(t=t.bind(this.context)),n&&n.bind&&this.context&&(n=n.bind(this.context)),new o(this.promise.then(t,n),this.context)},rt["catch"]=function(t){return t&&t.bind&&this.context&&(t=t.bind(this.context)),new o(this.promise["catch"](t),this.context)},rt["finally"]=function(t){return this.then(function(n){return t.call(this),n},function(n){return t.call(this),ot.reject(n)})};var it=!1,ut={},st=[],at=Array.isArray,ct=Object.assign||b,ft=document.documentMode,pt=document.createElement("a");$.options={url:"",root:null,params:{}},$.transforms=[_,E,j],$.params=function(t){var n=[],e=encodeURIComponent;return n.add=function(t,n){p(n)&&(n=n()),null===n&&(n=""),this.push(e(t)+"="+e(n))},q(n,t),n.join("&").replace(/%20/g,"+")},$.parse=function(t){return ft&&(pt.href=t,t=pt.href),pt.href=t,{href:pt.href,protocol:pt.protocol?pt.protocol.replace(/:$/,""):"",port:pt.port,host:pt.host,hostname:pt.hostname,pathname:"/"===pt.pathname.charAt(0)?pt.pathname:"/"+pt.pathname,search:pt.search?pt.search.replace(/^\?/,""):"",hash:pt.hash?pt.hash.replace(/^#/,""):""}};var lt=$.parse(location.href),dt="withCredentials"in new XMLHttpRequest,ht=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")},mt=function(){function t(n,e){var o=e.url,r=e.headers,i=e.status,u=e.statusText;ht(this,t),this.url=o,this.body=n,this.headers=r||{},this.status=i||0,this.statusText=u||"",this.ok=i>=200&&i<300}return t.prototype.text=function(){return this.body},t.prototype.blob=function(){return new Blob([this.body])},t.prototype.json=function(){return JSON.parse(this.body)},t}(),vt=function(){function t(n){ht(this,t),this.method="GET",this.body=null,this.params={},this.headers={},ct(this,n)}return t.prototype.getUrl=function(){return $(this)},t.prototype.getBody=function(){return this.body},t.prototype.respondWith=function(t,n){return new mt(t,ct(n||{},{url:this.getUrl()}))},t}(),yt={"X-Requested-With":"XMLHttpRequest"},gt={Accept:"application/json, text/plain, */*"},wt={"Content-Type":"application/json;charset=utf-8"};z.options={},z.headers={put:wt,post:wt,patch:wt,"delete":wt,custom:yt,common:gt},z.interceptors=[N,W,J,I,D,F,M],["get","delete","head","jsonp"].forEach(function(t){z[t]=function(n,e){return this(ct(e||{},{url:n,method:t}))}}),["post","put","patch"].forEach(function(t){z[t]=function(n,e,o){return this(ct(o||{},{url:n,method:t,body:e}))}}),K.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"},remove:{method:"DELETE"},"delete":{method:"DELETE"}},"undefined"!=typeof window&&window.Vue&&window.Vue.use(Y),t.exports=Y},20:function(t,n){t.exports=" <div class=loading-wrap> <span class=load-dot></span> <span class=load-dot></span> <span class=load-dot></span> </div> "},12:function(t,n,e){var o,r;e(18),r=e(20),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},18:function(t,n){},1:function(t,n){t.exports=Vue},0:function(t,n,e){(function(t){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var o=e(190),r=n(o);document.addEventListener("DOMContentLoaded",function(){e(15),new t({el:"#js_container",components:{TripPage:r["default"]}})},!1)}).call(n,e(1))},94:function(t,n,e){(function(t){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var r=e(4),i=e(12),u=o(i),s=(0,r.locationUrl)();n["default"]=t.extend({ready:function(){var t=this;r.ajax.get("//pictrip.qyer.com/bbs/photo/likedUser",{pid:s.params.pid}).then(function(n){t.likelist=n.likelist,t.loading=!1})},data:function(){return{loading:!0,likelist:[]}},filters:{photoLinkFilter:function(t){return(0,r.photoLink)(t)}},components:{Loading:u["default"]}})}).call(n,e(1))},149:function(t,n){},166:function(t,n){t.exports=' <header> <a href=javascript:history.back(); class="pull pull-left"> <i class="iconfont iconfont-back"></i> </a> <a href=javascript:; class="pull pull-right"> </a> <span>赞过的人</span> </header> <loading v-if=loading></loading> <section v-else class=wrapper> <div class=like-peoples> <ul> <li v-for="people in likelist"> <a :href="people.uid | photoLinkFilter"> <img :src=people.avatar> <p>{{people.username}}</p> </a> </li> </ul> </div> </section> '},190:function(t,n,e){var o,r;e(149),o=e(94),r=e(166),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},4:function(t,n,e){(function(t){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0}),n.getStatus=n.ajax=n.pixelToREM=n.locationUrl=n.parseURL=n.likepeoplesLink=n.detailLink=n.placeLink=n.photoLink=n.userLink=n.loginLink=n.indexLink=void 0;var r=e(22),i=(o(r),n.indexLink=function(t){return"//pictrip.qyer.com/bbs/index"+("undefined"!=typeof t?"?tagid="+t:"")},n.loginLink=function(){var t=arguments.length<=0||void 0===arguments[0]?window.location.href:arguments[0];return"//m.qyer.com/login/login.php?refer="+t},n.userLink=function(t){return"//m.qyer.com/u/"+t},n.photoLink=function(t){return"//pictrip.qyer.com/bbs/index/piclist?uid="+t}),u=(n.placeLink=function(t){return"//pictrip.qyer.com/bbs/index/placepiclist?tagid="+t},n.detailLink=function(t){return"//pictrip.qyer.com/bbs/index/detail?pid="+t},n.likepeoplesLink=function(t){return"//pictrip.qyer.com/bbs/index/likepeoples?pid="+t},n.parseURL=function(t){var n=document.createElement("a");return n.href=t,{source:t,protocol:n.protocol.replace(":",""),host:n.hostname,port:n.port,query:n.search,params:function(){for(var t={},e=n.search.replace(/^\?/,"").split("&"),o=e.length,r=0,i=void 0;r<o;r++)e[r]&&(i=e[r].split("="),t[i[0]]=i[1]);return t}(),file:(n.pathname.match(/\/([^\/?#]+)$/i)||[,""])[1],hash:n.hash.replace("#",""),path:n.pathname.replace(/^([^\/])/,"/$1"),relative:(n.href.match(/tps?:\/\/[^\/]+(.+)/)||[,""])[1],segments:n.pathname.replace(/^\//,"").split("/")}}),s=(n.locationUrl=function(){return u(window.location.href)},n.pixelToREM=function(t){return 2*t/100},n.ajax={get:function(n){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return e.timer=Date.now(),new Promise(function(o,r){t.http.get(n,{params:e}).then(function(t){var n=t.json();if(0!==n.error_code)throw r(n),new Error(n.data.msg+", error_code: "+n.error_code);o(n.data)},function(t){throw new Error(t.status)})})},post:function(n){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return new Promise(function(o,r){t.http.post(n,e,{emulateJSON:!0}).then(function(t){var n=t.json();if(0!==n.error_code)throw r(n),new Error(n.data.msg+", error_code: "+n.error_code);o(n.data)},function(t){throw new Error(t.status)})})}});n.getStatus=function(){var t=function(){return s.get("//pictrip.qyer.com/bbs/user/current").then(function(t){0!=t.uid&&(t.photoLink=i(t.uid)),window.UserInfo=t})};return new Promise(function(n,e){window.UserInfo?n(window.UserInfo):t().then(function(){n(window.UserInfo)})})}}).call(n,e(1))},15:function(t,n){"use strict";var e=function(t,n,e){t.style.fontSize=e.call(null,n,750)+"px"},o=function(t,n){return parseInt(t/(n/2)*50)};e(document.querySelector("html"),document.body.offsetWidth,o)}});
//# sourceMappingURL=likepeoples.0f608332.js.map