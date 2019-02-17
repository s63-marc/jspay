!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Pay=t():e.Pay=t()}(window,function(){return function(e){var t=window.webpackHotUpdatePay;window.webpackHotUpdatePay=function(e,n){!function(e,t){if(!x[e]||!b[e])return;for(var n in b[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--v&&0===g&&E()}(e,n),t&&t(e,n)};var n,r=!0,o="d798660c83bb650cc3f4",i=1e4,c={},a=[],u=[];function s(e){var t=P[e];if(!t)return S;var r=function(r){return t.hot.active?(P[r]?-1===P[r].parents.indexOf(e)&&P[r].parents.push(e):(a=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),S(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(t){S[e]=t}}};for(var i in S)Object.prototype.hasOwnProperty.call(S,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===p&&d("prepare"),g++,S.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===p&&(w[e]||j(e),0===g&&0===v&&E())}},r.t=function(e,t){return 1&t&&(e=r(e)),S.t(e,-2&t)},r}function f(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:k,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:c[e]};return n=void 0,t}var l=[],p="idle";function d(e){p=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var h,y,m,v=0,g=0,w={},b={},x={};function _(e){return+e+""===e?+e:e}function O(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return r=e,d("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=S.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return d("idle"),null;b={},w={},x=e.c,m=e.h,d("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});y={};return j(0),"prepare"===p&&0===g&&0===v&&E(),t});var t}function j(e){x[e]?(b[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=S.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):w[e]=!0}function E(){d("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then(function(){return k(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(_(n));e.resolve(t)}}function k(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,i,u,s;function f(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((u=P[i])&&!u.hot._selfAccepted){if(u.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(u.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var a=0;a<u.parents.length;a++){var s=u.parents[a],f=P[s];if(f){if(f.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(f.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),l(n[s],[i])):(delete n[s],t.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},v=[],g={},w=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var b in y)if(Object.prototype.hasOwnProperty.call(y,b)){var O;s=_(b);var j=!1,E=!1,k=!1,I="";switch((O=y[b]?f(s):{type:"disposed",moduleId:b}).chain&&(I="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(j=new Error("Aborted because of self decline: "+O.moduleId+I));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+I));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(j=new Error("Aborted because "+s+" is not accepted"+I));break;case"accepted":t.onAccepted&&t.onAccepted(O),E=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),k=!0;break;default:throw new Error("Unexception type "+O.type)}if(j)return d("abort"),Promise.reject(j);if(E)for(s in g[s]=y[s],l(v,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,s)&&(h[s]||(h[s]=[]),l(h[s],O.outdatedDependencies[s]));k&&(l(v,[O.moduleId]),g[s]=w)}var D,L=[];for(r=0;r<v.length;r++)s=v[r],P[s]&&P[s].hot._selfAccepted&&L.push({module:s,errorHandler:P[s].hot._selfAccepted});d("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete installedChunks[e]}(e)});for(var T,H,A=v.slice();A.length>0;)if(s=A.pop(),u=P[s]){var M={},R=u.hot._disposeHandlers;for(i=0;i<R.length;i++)(n=R[i])(M);for(c[s]=M,u.hot.active=!1,delete P[s],delete h[s],i=0;i<u.children.length;i++){var N=P[u.children[i]];N&&((D=N.parents.indexOf(s))>=0&&N.parents.splice(D,1))}}for(s in h)if(Object.prototype.hasOwnProperty.call(h,s)&&(u=P[s]))for(H=h[s],i=0;i<H.length;i++)T=H[i],(D=u.children.indexOf(T))>=0&&u.children.splice(D,1);for(s in d("apply"),o=m,g)Object.prototype.hasOwnProperty.call(g,s)&&(e[s]=g[s]);var G=null;for(s in h)if(Object.prototype.hasOwnProperty.call(h,s)&&(u=P[s])){H=h[s];var F=[];for(r=0;r<H.length;r++)if(T=H[r],n=u.hot._acceptedDependencies[T]){if(-1!==F.indexOf(n))continue;F.push(n)}for(r=0;r<F.length;r++){n=F[r];try{n(H)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:H[r],error:e}),t.ignoreErrored||G||(G=e)}}}for(r=0;r<L.length;r++){var q=L[r];s=q.module,a=[s];try{S(s)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||G||(G=n),G||(G=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||G||(G=e)}}return G?(d("fail"),Promise.reject(G)):(d("idle"),new Promise(function(e){e(v)}))}var P={};function S(t){if(P[t])return P[t].exports;var n=P[t]={i:t,l:!1,exports:{},hot:f(t),parents:(u=a,a=[],u),children:[]};return e[t].call(n.exports,n,n.exports,s(t)),n.l=!0,n.exports}return S.m=e,S.c=P,S.d=function(e,t,n){S.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},S.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,t){if(1&t&&(e=S(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(S.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)S.d(n,r,function(t){return e[t]}.bind(null,r));return n},S.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(t,"a",t),t},S.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},S.p="",S.h=function(){return o},s(5)(S.s=5)}([function(e,t,n){e.exports=n(6)},function(e,t){function n(e,t,n,r,o,i,c){try{var a=e[i](c),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise(function(o,i){var c=e.apply(t,r);function a(e){n(c,o,i,a,u,"next",e)}function u(e){n(c,o,i,a,u,"throw",e)}a(void 0)})}}},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var r=n(2),o=n.n(r),i=n(0),c=n.n(i),a=n(1),u=n.n(a),s=n(3),f=n.n(s),l=n(4),p=n.n(l),d=null,h=function(){function e(t){var n=t.merchantId,r=t.clientId,o=t.secret,i=t.payload,c=t.settings;f()(this,e),console.log(n,r,o,i),this.merchantId=n,this.clientId=r,this.secret=o,this.payload=i,this.initialized=!1,this.accessToken=null,this.popup=d,this.config=Object.assign({authDomain:"https://connect.api.reddotpay.sg/v1",domain:"http://connect.reddotpay.sg",popup:{title:"Red Dot Pay",width:800,height:600},statusCheckFrequency:3e3},c),console.log("merchantId >>>",n),console.log("config >>>",this.config)}return p()(e,[{key:"init",value:function(){this.initialized&&this.destroy(),this.pay(),this.initialized=!0}},{key:"_verifyMerchant",value:function(){var e=u()(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("verifyMerchant >>>>>>>>>>>>>",t),e.next=3,fetch("".concat(this.config.authDomain,"/merchants/").concat(t),{method:"GET",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json; charset=utf-8"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"_getAccessToken",value:function(){var e=u()(c.a.mark(function e(t,n){var r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getAccessToken >>>>>>>>>>>>>",t,n),e.next=3,fetch("".concat(this.config.authDomain,"/authenticate"),{method:"POST",accept:"application/json",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({clientId:t,secret:n})});case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"_getPaymentStatus",value:function(){var e=u()(c.a.mark(function e(t,n){var r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getPaymentStatus >>>>>>>>>>>>>",t,n),e.next=3,fetch("".concat(this.config.authDomain,"/payments/token/").concat(t,"/status/").concat(n));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"_getPaymentToken",value:function(){var e=u()(c.a.mark(function e(t,n,r){var o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("_getPaymentToken >>>>>>>>>>>>>",t,n,r),e.next=3,fetch("".concat(this.config.authDomain,"/payments/token/").concat(n),{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Authorization:t},body:JSON.stringify(r)});case 3:return o=e.sent,e.next=6,o.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"openPopup",value:function(){var e="".concat(this.config.domain,"/m/").concat(this.merchantId,"/#/pay"),t=null!=window.screenLeft?window.screenLeft:screen.left,n=null!=window.screenTop?window.screenTop:screen.top,r=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,o=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,i=r/2-this.config.popup.width/2+t,c=o/2-this.config.popup.height/2+n+15;this.popup=window.open(e,this.config.popup.title,"scrollbars=yes, width="+this.config.popup.width+", height="+this.config.popup.height+", top="+c+", left="+i),window.focus&&this.popup.focus()}},{key:"pay",value:function(){var e=u()(c.a.mark(function e(){var t,n,r=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(">>>>>>>>>> pay"),this.openPopup(),e.next=4,this._verifyMerchant(this.merchantId).catch(function(e){throw r.popup.location.href="".concat(r.config.domain,"/m/").concat(r.merchantId,"/#/500"),new Error("Something went wrong while validating the merchant: ",e)});case 4:if(t=e.sent,"object"!==o()(t)){e.next=11;break}return e.next=8,this._getAccessToken(this.clientId,this.secret);case 8:n=e.sent,console.log(n),this._getPaymentToken(n.accessToken,this.merchantId,this.payload).then(function(e){if(void 0===e.token)throw r.popup.location.href="".concat(r.config.domain,"/m/").concat(r.merchantId,"/#/500"),new Error("Something went wrong: Token is not defined");r.popup.location.href="".concat(r.config.domain,"/m/").concat(r.merchantId,"#/pay/").concat(e.token);var t=setInterval(function(){r._getPaymentStatus(r.merchantId,r.payload.orderId).then(function(e){"capture"==e.status?(clearInterval(t),console.log("Status: ",e.status),document.location.href="/"):"pending"==e.status||"authorize"==e.status?console.log("Status: ",e.status):(clearInterval(interval),console.log("Status: ",e.status))})},r.config.statusCheckFrequency)}).catch(function(e){throw r.popup.location.href="".concat(r.config.domain,"/m/").concat(r.merchantId,"/#/500"),new Error("Something went wrong while getting the payment token: ",e)});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){this.initialized=!1}}]),e}()},function(e,t,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(7),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"==typeof e,f=t.regeneratorRuntime;if(f)s&&(e.exports=f);else{(f=t.regeneratorRuntime=s?e.exports:{}).wrap=b;var l="suspendedStart",p="suspendedYield",d="executing",h="completed",y={},m={};m[c]=function(){return this};var v=Object.getPrototypeOf,g=v&&v(v(L([])));g&&g!==r&&o.call(g,c)&&(m=g);var w=j.prototype=_.prototype=Object.create(m);O.prototype=w.constructor=j,j.constructor=O,j[u]=O.displayName="GeneratorFunction",f.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===O||"GeneratorFunction"===(t.displayName||t.name))},f.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(w),e},f.awrap=function(e){return{__await:e}},E(k.prototype),k.prototype[a]=function(){return this},f.AsyncIterator=k,f.async=function(e,t,n,r){var o=new k(b(e,t,n,r));return f.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(w),w[u]="Generator",w[c]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=L,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(I),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return a.type="throw",a.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var u=o.call(c,"catchLoc"),s=o.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=e,c.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;I(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),y}}}function b(e,t,n,r){var o=t&&t.prototype instanceof _?t:_,i=Object.create(o.prototype),c=new D(r||[]);return i._invoke=function(e,t,n){var r=l;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=P(c,n);if(a){if(a===y)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=x(e,t,n);if("normal"===u.type){if(r=n.done?h:p,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(e,n,c),i}function x(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function _(){}function O(){}function j(){}function E(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function k(e){var t;this._invoke=function(n,r){function i(){return new Promise(function(t,i){!function t(n,r,i,c){var a=x(e[n],e,r);if("throw"!==a.type){var u=a.arg,s=u.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,i,c)},function(e){t("throw",e,i,c)}):Promise.resolve(s).then(function(e){u.value=e,i(u)},function(e){return t("throw",e,i,c)})}c(a.arg)}(n,r,t,i)})}return t=t?t.then(i,i):i()}}function P(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,P(e,t),"throw"===t.method))return y;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=x(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,y;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,y):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function L(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return i.next=i}}return{next:T}}function T(){return{value:n,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())}]).default});