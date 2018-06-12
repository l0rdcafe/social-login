!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!b[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0==--m&&0===g&&x()}(e,t),n&&n(e,t)};var t,r=!0,o="2e4588468b8a30c0b953",i=1e4,a={},s=[],c=[];function d(e){var n=D[e];if(!n)return I;var r=function(r){return n.hot.active?(D[r]?-1===D[r].parents.indexOf(e)&&D[r].parents.push(e):(s=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),I(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return I[e]},set:function(n){I[e]=n}}};for(var i in I)Object.prototype.hasOwnProperty.call(I,i)&&"e"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===u&&f("prepare"),g++,I.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===u&&(y[e]||O(e),0===g&&0===m&&x())}},r}var l=[],u="idle";function f(e){u=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var p,h,v,m=0,g=0,y={},w={},b={};function _(e){return+e+""===e?+e:e}function E(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,f("check"),(n=i,n=n||1e4,new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,i=I.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+i+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}})).then(function(e){if(!e)return f("idle"),null;w={},y={},b=e.c,v=e.h,f("prepare");var n=new Promise(function(e,n){p={resolve:e,reject:n}});h={};return O(0),"prepare"===u&&0===g&&0===m&&x(),n});var n}function O(e){b[e]?(w[e]=!0,m++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=I.p+""+e+"."+o+".hot-update.js",n.appendChild(t)}(e)):y[e]=!0}function x(){f("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then(function(){return q(r)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(_(t));e.resolve(n)}}function q(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var t,r,i,c,d;function l(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,a=o.chain;if((c=D[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var s=0;s<c.parents.length;s++){var d=c.parents[s],l=D[d];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([d]),moduleId:i,parentId:d};-1===n.indexOf(d)&&(l.hot._acceptedDependencies[i]?(t[d]||(t[d]=[]),p(t[d],[i])):(delete t[d],n.push(d),r.push({chain:a.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var m={},g=[],y={},w=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var E in h)if(Object.prototype.hasOwnProperty.call(h,E)){var O;d=_(E);var x=!1,q=!1,N=!1,P="";switch((O=h[E]?l(d):{type:"disposed",moduleId:E}).chain&&(P="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(x=new Error("Aborted because of self decline: "+O.moduleId+P));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+P));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(x=new Error("Aborted because "+d+" is not accepted"+P));break;case"accepted":n.onAccepted&&n.onAccepted(O),q=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),N=!0;break;default:throw new Error("Unexception type "+O.type)}if(x)return f("abort"),Promise.reject(x);if(q)for(d in y[d]=h[d],p(g,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,d)&&(m[d]||(m[d]=[]),p(m[d],O.outdatedDependencies[d]));N&&(p(g,[O.moduleId]),y[d]=w)}var j,H=[];for(r=0;r<g.length;r++)d=g[r],D[d]&&D[d].hot._selfAccepted&&H.push({module:d,errorHandler:D[d].hot._selfAccepted});f("dispose"),Object.keys(b).forEach(function(e){!1===b[e]&&function(e){delete installedChunks[e]}(e)});for(var S,L,k=g.slice();k.length>0;)if(d=k.pop(),c=D[d]){var A={},B=c.hot._disposeHandlers;for(i=0;i<B.length;i++)(t=B[i])(A);for(a[d]=A,c.hot.active=!1,delete D[d],delete m[d],i=0;i<c.children.length;i++){var M=D[c.children[i]];M&&((j=M.parents.indexOf(d))>=0&&M.parents.splice(j,1))}}for(d in m)if(Object.prototype.hasOwnProperty.call(m,d)&&(c=D[d]))for(L=m[d],i=0;i<L.length;i++)S=L[i],(j=c.children.indexOf(S))>=0&&c.children.splice(j,1);for(d in f("apply"),o=v,y)Object.prototype.hasOwnProperty.call(y,d)&&(e[d]=y[d]);var C=null;for(d in m)if(Object.prototype.hasOwnProperty.call(m,d)&&(c=D[d])){L=m[d];var T=[];for(r=0;r<L.length;r++)if(S=L[r],t=c.hot._acceptedDependencies[S]){if(-1!==T.indexOf(t))continue;T.push(t)}for(r=0;r<T.length;r++){t=T[r];try{t(L)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:L[r],error:e}),n.ignoreErrored||C||(C=e)}}}for(r=0;r<H.length;r++){var U=H[r];d=U.module,s=[d];try{I(d)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:e}),n.ignoreErrored||C||(C=t),C||(C=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||C||(C=e)}}return C?(f("fail"),Promise.reject(C)):(f("idle"),new Promise(function(e){e(g)}))}var D={};function I(n){if(D[n])return D[n].exports;var r=D[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:E,apply:q,status:function(e){if(!e)return u;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:a[e]};return t=void 0,n}(n),parents:(c=s,s=[],c),children:[]};return e[n].call(r.exports,r,r.exports,d(n)),r.l=!0,r.exports}I.m=e,I.c=D,I.d=function(e,n,t){I.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},I.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},I.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return I.d(n,"a",n),n},I.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},I.p="",I.h=function(){return o},d(4)(I.s=4)}([function(e,n,t){"use strict";t.r(n);var r={qs:function(e,n){return(n||document).querySelector(e)},qsa:function(e,n){return(n||document).querySelectorAll(e)},$on:function(e,n,t,r){e.addEventListener(n,t,!!r)},newEl:function(e){return document.createElement(e)}};var o={},i={state:o,setState:function(e){var n=e.id,t=e.name,r=e.email,i=e.birthday;return(o={}).user={id:n,name:t,email:r,birthday:i},o},setPosts:function(e){return o.user.posts=[].concat(function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(e)),o.user}},a={drawLogoutBtn:function(){if(r.qs("#logout"))return r.qs("#logout");var e=r.newEl("button"),n=r.qs(".section");return e.className="button info",e.innerHTML="Logout",e.id="logout",n.parentNode.insertBefore(e,n),e},drawLogoutState:function(){var e;(e=r.qs("#logout")).parentNode.removeChild(e);var n=r.qs(".title"),t=r.qs(".posts");if(t){var o=r.qs(".footer");t.parentNode.removeChild(t),n.parentNode.removeChild(n),o.style.position="absolute"}},drawSignInBtn:function(){var e=r.newEl("button"),n=r.qs(".section");return e.className="button info",e.id="login",e.innerHTML="Login",n.appendChild(e),e},removeSignInBtn:function(){var e=r.qs("#login");e&&e.parentNode.removeChild(e)},drawNotif:function(e,n){var t='<div class="notif animated fadeInDown text-c '+n+'">'+e+"</div>",o=r.qs(".section");!function(){var e=r.qsa(".notif");if(e.length>0)for(var n=0;n<e.length;n+=1)e[n].parentNode.removeChild(e[n])}(),o.insertAdjacentHTML("afterbegin",t);var i=r.qs(".notif");setTimeout(function(){i.classList.remove("fadeInDown"),i.classList.add("fadeOutUp")},2500)},drawInfo:function(e){if(r.qs(".title"))return r.qs(".title");var n=e.name,t=e.email,o=e.birthday,i=r.newEl("h4"),a=r.qs(".section");i.innerHTML='Welcome, <span class="title__span text-c text-secondary">'+n+'.</span> Your email is <span class="title__span text-c text-secondary">'+t+'</span> and your birthday is <span class="title__span text-c text-secondary">'+o+".</span>",i.className="title text-info text-c",a.appendChild(i)},drawPosts:function(e){if(r.qs(".posts"))return r.qs(".posts");var n=r.newEl("ol"),t=r.qs(".footer");n.className="posts",e.forEach(function(e){var t=r.newEl("li"),o="";o=e.message?e.message:"No description available";var i=e.created_time.substring(0,10);t.className="posts__post",t.innerHTML='<p class="posts__post__title warning text-white">'+o+'</p><small class="posts__post__date secondary text-white">'+i+"</small>",n.appendChild(t)}),t.parentNode.insertBefore(n,t),t.style.position="static"},drawSpinner:function(){var e=r.newEl("i"),n=r.qs(".section");e.className="fas fa-spinner fa-spin x-centered fa-lg",n.appendChild(e)},removeSpinner:function(){var e=r.qs(".fa-spinner");e&&e.parentNode.removeChild(e)}};var s={getInfo:function(e){FB.api("/me?fields=email,birthday,name",e)},logout:function(){FB.logout()},checkLoginStatus:function(e){FB.getLoginStatus(e),FB.Event.subscribe("auth.statusChange",e)},init:function(){window.fbAsyncInit=function(){FB.init({appId:"176083539775487",autoLogAppEvents:!0,xfbml:!0,version:"v3.0"});var e=new CustomEvent("fbload");document.dispatchEvent(e)},function(e,n,t){var r=e.getElementsByTagName(n)[0];if(!e.getElementById(t)){var o=e.createElement(n);o.id=t,o.src="https://connect.facebook.net/en_US/sdk.js",r.parentNode.insertBefore(o,r)}}(document,"script","facebook-jssdk")},login:function(e){FB.login(e,{scope:"email,user_birthday,user_posts"})},getPosts:function(e){FB.api("/me/posts",e)}},c=function(){s.getPosts(function(e){if(e.error)a.drawNotif("Something went wrong. Please try again later.","error");else{var n=i.setPosts(e.data).posts;a.drawPosts(n)}})},d=function(){s.getInfo(function(e){if(e.error)a.drawNotif("Something went wrong. Please try again later.","error");else{var n=i.setState(e).user;a.drawInfo(n),c()}})},l=function(){var e=a.drawLogoutBtn();r.$on(e,"click",function(){s.logout(),a.drawLogoutState(),a.drawNotif("You are now logged out.","info")})},u=function(){s.login(function(e){e.authResponse?a.drawNotif("You are successfully logged in.","info"):a.drawNotif("User denied login. Please log in to view your profile.","error")})};r.$on(document,"DOMContentLoaded",s.init),r.$on(document,"fbload",function(){a.drawSpinner(),s.checkLoginStatus(function(e){if("connected"===e.status)l(),a.removeSignInBtn(),a.drawNotif("You are logged in.","info"),d();else{var n=a.drawSignInBtn();r.$on(n,"click",u)}a.removeSpinner()})})},,,function(e,n,t){},function(e,n,t){t(0),e.exports=t(3)}]);
//# sourceMappingURL=main.js.map