/*! Zepto 1.2.0 (generated with Zepto Builder) - zepto event ajax - zeptojs.com/license */
var Zepto=function(){function t(t){return null==t?String(t):J[U.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){var e=!!t&&"length"in t&&t.length,r=T.type(t);return"function"!=r&&!n(t)&&("array"==r||0===e||"number"==typeof e&&e>0&&e-1 in t)}function s(t){return A.call(t,function(t){return null!=t})}function u(t){return t.length>0?T.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in Z?Z[t]:Z[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||F[c(t)]?e:e+"px"}function h(t){var e,n;return $[t]||(e=L.createElement(t),L.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),$[t]=n),$[t]}function p(t){return"children"in t?D.call(t.children):T.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function m(t,e,n){for(j in e)n&&(o(e[j])||K(e[j]))?(o(e[j])&&!o(t[j])&&(t[j]={}),K(e[j])&&!K(t[j])&&(t[j]=[]),m(t[j],e[j],n)):e[j]!==E&&(t[j]=e[j])}function g(t,e){return null==e?T(t):T(t).filter(e)}function v(t,n,r,i){return e(n)?n.call(t,r,i):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function x(t,e){var n=t.className||"",r=n&&n.baseVal!==E;return e===E?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function w(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?T.parseJSON(t):t):t}catch(e){return t}}function b(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)b(t.childNodes[n],e)}var E,j,T,S,N,C,O=[],P=O.concat,A=O.filter,D=O.slice,L=window.document,$={},Z={},F={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},M=/^\s*<(\w+|!)[^>]*>/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,q=/^(?:body|html)$/i,z=/([A-Z])/g,H=["val","css","html","text","data","width","height","offset"],V=["after","prepend","before","append"],_=L.createElement("table"),B=L.createElement("tr"),I={tr:L.createElement("tbody"),tbody:_,thead:_,tfoot:_,td:B,th:B,"*":L.createElement("div")},X=/^[\w-]*$/,J={},U=J.toString,W={},Y=L.createElement("div"),G={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},K=Array.isArray||function(t){return t instanceof Array};return W.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=Y).appendChild(t),r=~W.qsa(i,e).indexOf(t),o&&Y.removeChild(t),r},N=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(t){return A.call(t,function(e,n){return t.indexOf(e)==n})},W.fragment=function(t,e,n){var r,i,a;return k.test(t)&&(r=T(L.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(R,"<$1></$2>")),e===E&&(e=M.test(t)&&RegExp.$1),e in I||(e="*"),a=I[e],a.innerHTML=""+t,r=T.each(D.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(i=T(r),T.each(n,function(t,e){H.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},W.Z=function(t,e){return new d(t,e)},W.isZ=function(t){return t instanceof W.Z},W.init=function(t,n){var r;if(!t)return W.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&M.test(t))r=W.fragment(t,RegExp.$1,n),t=null;else{if(n!==E)return T(n).find(t);r=W.qsa(L,t)}else{if(e(t))return T(L).ready(t);if(W.isZ(t))return t;if(K(t))r=s(t);else if(i(t))r=[t],t=null;else if(M.test(t))r=W.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==E)return T(n).find(t);r=W.qsa(L,t)}}return W.Z(r,t)},T=function(t,e){return W.init(t,e)},T.extend=function(t){var e,n=D.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){m(t,n,e)}),t},W.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,a=X.test(o);return t.getElementById&&a&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:D.call(a&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},T.contains=L.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},T.type=t,T.isFunction=e,T.isWindow=n,T.isArray=K,T.isPlainObject=o,T.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},T.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},T.inArray=function(t,e,n){return O.indexOf.call(e,t,n)},T.camelCase=N,T.trim=function(t){return null==t?"":String.prototype.trim.call(t)},T.uuid=0,T.support={},T.expr={},T.noop=function(){},T.map=function(t,e){var n,r,i,o=[];if(a(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&o.push(n);else for(i in t)n=e(t[i],i),null!=n&&o.push(n);return u(o)},T.each=function(t,e){var n,r;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},T.grep=function(t,e){return A.call(t,e)},window.JSON&&(T.parseJSON=JSON.parse),T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){J["[object "+e+"]"]=e.toLowerCase()}),T.fn={constructor:W.Z,length:0,forEach:O.forEach,reduce:O.reduce,push:O.push,sort:O.sort,splice:O.splice,indexOf:O.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=W.isZ(e)?e.toArray():e;return P.apply(W.isZ(this)?this.toArray():this,n)},map:function(t){return T(T.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return T(D.apply(this,arguments))},ready:function(t){if("complete"===L.readyState||"loading"!==L.readyState&&!L.documentElement.doScroll)setTimeout(function(){t(T)},0);else{var e=function(){L.removeEventListener("DOMContentLoaded",e,!1),window.removeEventListener("load",e,!1),t(T)};L.addEventListener("DOMContentLoaded",e,!1),window.addEventListener("load",e,!1)}return this},get:function(t){return t===E?D.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return O.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):T(A.call(this,function(e){return W.matches(e,t)}))},add:function(t,e){return T(C(this.concat(T(t,e))))},is:function(t){return this.length>0&&W.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==E)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):a(t)&&e(t.item)?D.call(t):T(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return T(n)},has:function(t){return this.filter(function(){return i(t)?T.contains(this,t):T(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:T(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:T(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?T(t).filter(function(){var t=this;return O.some.call(n,function(e){return T.contains(e,t)})}):1==this.length?T(W.qsa(this[0],t)):this.map(function(){return W.qsa(this,t)}):T()},closest:function(t,e){var n=[],i="object"==typeof t&&T(t);return this.each(function(o,a){for(;a&&!(i?i.indexOf(a)>=0:W.matches(a,t));)a=a!==e&&!r(a)&&a.parentNode;a&&n.indexOf(a)<0&&n.push(a)}),T(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=T.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return g(e,t)},parent:function(t){return g(C(this.pluck("parentNode")),t)},children:function(t){return g(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||D.call(this.childNodes)})},siblings:function(t){return g(this.map(function(t,e){return A.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return T.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=T(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){T(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){T(this[0]).before(t=T(t));for(var e;(e=t.children()).length;)t=e.first();T(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=T(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){T(this).replaceWith(T(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=T(this);(t===E?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return T(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return T(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;T(this).empty().append(v(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=v(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(i(t))for(j in t)y(this,j,t[j]);else y(this,t,v(this,e,n,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(n=this[0].getAttribute(t))?n:E},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){y(this,t)},this)})},prop:function(t,e){return t=G[t]||t,1 in arguments?this.each(function(n){this[t]=v(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=G[t]||t,this.each(function(){delete this[t]})},data:function(t,e){var n="data-"+t.replace(z,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?w(r):E},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=v(this,t,e,this.value)})):this[0]&&(this[0].multiple?T(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=T(this),r=v(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;if(L.documentElement!==this[0]&&!T.contains(L.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r=this[0];if("string"==typeof e){if(!r)return;return r.style[N(e)]||getComputedStyle(r,"").getPropertyValue(e)}if(K(e)){if(!r)return;var i={},o=getComputedStyle(r,"");return T.each(e,function(t,e){i[e]=r.style[N(e)]||o.getPropertyValue(e)}),i}}var a="";if("string"==t(e))n||0===n?a=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(j in e)e[j]||0===e[j]?a+=c(j)+":"+f(j,e[j])+";":this.each(function(){this.style.removeProperty(c(j))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(T(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?O.some.call(this,function(t){return this.test(x(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){S=[];var n=x(this),r=v(this,t,e,n);r.split(/\s+/g).forEach(function(t){T(this).hasClass(t)||S.push(t)},this),S.length&&x(this,n+(n?" ":"")+S.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===E)return x(this,"");S=x(this),v(this,t,e,S).split(/\s+/g).forEach(function(t){S=S.replace(l(t)," ")}),x(this,S.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=T(this),i=v(this,t,n,x(this));i.split(/\s+/g).forEach(function(t){(e===E?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===E?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===E?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=q.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(T(t).css("margin-top"))||0,n.left-=parseFloat(T(t).css("margin-left"))||0,r.top+=parseFloat(T(e[0]).css("border-top-width"))||0,r.left+=parseFloat(T(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||L.body;t&&!q.test(t.nodeName)&&"static"==T(t).css("position");)t=t.offsetParent;return t})}},T.fn.detach=T.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});T.fn[t]=function(i){var o,a=this[0];return i===E?n(a)?a["inner"+e]:r(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=T(this),a.css(t,v(this,i,e,a[t]()))})}}),V.forEach(function(e,n){var r=n%2;T.fn[e]=function(){var e,i,o=T.map(arguments,function(n){var r=[];return e=t(n),"array"==e?(n.forEach(function(t){return t.nodeType!==E?r.push(t):T.zepto.isZ(t)?r=r.concat(t.get()):void(r=r.concat(W.fragment(t)))}),r):"object"==e||null==n?n:W.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=T.contains(L.documentElement,i);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!i)return T(t).remove();i.insertBefore(t,e),s&&b(t,function(t){if(!(null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src)){var e=t.ownerDocument?t.ownerDocument.defaultView:window;e.eval.call(e,t.innerHTML)}})})})},T.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return T(t)[e](this),this}}),W.Z.prototype=d.prototype=T.fn,W.uniq=C,W.deserializeValue=w,T.zepto=W,T}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){return t.global?e(n||x,r,i):void 0}function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;return e.beforeSend.call(r,t,e)===!1||n(e,r,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,r,"ajaxSend",[t,e])}function a(t,e,r,i){var o=r.context,a="success";r.success.call(o,t,a,e),i&&i.resolveWith(o,[t,a,e]),n(r,o,"ajaxSuccess",[e,r,t]),u(a,e,r)}function s(t,e,r,i,o){var a=i.context;i.error.call(a,r,e,t),o&&o.rejectWith(a,[r,e,t]),n(i,a,"ajaxError",[r,i,t||e]),u(e,r,i)}function u(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function c(t,e,n){if(n.dataFilter==l)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function l(){}function f(t){return t&&(t=t.split(";",2)[0]),t&&(t==T?"html":t==j?"json":b.test(t)?"script":E.test(t)&&"xml")||"text"}function h(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function p(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()&&"jsonp"!=e.dataType||(e.url=h(e.url,e.data),e.data=void 0)}function d(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function m(e,n,r,i){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),i&&(n=r?i:i+"["+(s||"object"==o||"array"==o?n:"")+"]"),!i&&a?e.add(u.name,u.value):"array"==o||!r&&"object"==o?m(e,u,r,n):e.add(n,u)})}var g,v,y=+new Date,x=window.document,w=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,b=/^(?:text|application)\/javascript/i,E=/^(?:text|application)\/xml/i,j="application/json",T="text/html",S=/^\s*$/,N=x.createElement("a");N.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var r,i,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"Zepto"+y++,l=x.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,u){clearTimeout(i),t(l).off().remove(),"error"!=o.type&&r?a(r[0],p,e,n):s(null,u||"error",p,e,n),window[c]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),o(p,e)===!1?(h("abort"),p):(window[c]=function(){r=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),x.head.appendChild(l),e.timeout>0&&(i=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:l,success:l,error:l,complete:l,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:j,xml:"application/xml, text/xml",html:T,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:l},t.ajax=function(e){var n,i,u=t.extend({},e||{}),d=t.Deferred&&t.Deferred();for(g in t.ajaxSettings)void 0===u[g]&&(u[g]=t.ajaxSettings[g]);r(u),u.crossDomain||(n=x.createElement("a"),n.href=u.url,n.href=n.href,u.crossDomain=N.protocol+"//"+N.host!=n.protocol+"//"+n.host),u.url||(u.url=window.location.toString()),(i=u.url.indexOf("#"))>-1&&(u.url=u.url.slice(0,i)),p(u);var m=u.dataType,y=/\?.+=\?/.test(u.url);if(y&&(m="jsonp"),u.cache!==!1&&(e&&e.cache===!0||"script"!=m&&"jsonp"!=m)||(u.url=h(u.url,"_="+Date.now())),"jsonp"==m)return y||(u.url=h(u.url,u.jsonp?u.jsonp+"=?":u.jsonp===!1?"":"callback=?")),t.ajaxJSONP(u,d);var w,b=u.accepts[m],E={},j=function(t,e){E[t.toLowerCase()]=[t,e]},T=/^([\w-]+:)\/\//.test(u.url)?RegExp.$1:window.location.protocol,C=u.xhr(),O=C.setRequestHeader;if(d&&d.promise(C),u.crossDomain||j("X-Requested-With","XMLHttpRequest"),j("Accept",b||"*/*"),(b=u.mimeType||b)&&(b.indexOf(",")>-1&&(b=b.split(",",2)[0]),C.overrideMimeType&&C.overrideMimeType(b)),(u.contentType||u.contentType!==!1&&u.data&&"GET"!=u.type.toUpperCase())&&j("Content-Type",u.contentType||"application/x-www-form-urlencoded"),u.headers)for(v in u.headers)j(v,u.headers[v]);if(C.setRequestHeader=j,C.onreadystatechange=function(){if(4==C.readyState){C.onreadystatechange=l,clearTimeout(w);var e,n=!1;if(C.status>=200&&C.status<300||304==C.status||0==C.status&&"file:"==T){if(m=m||f(u.mimeType||C.getResponseHeader("content-type")),"arraybuffer"==C.responseType||"blob"==C.responseType)e=C.response;else{e=C.responseText;try{e=c(e,m,u),"script"==m?(1,eval)(e):"xml"==m?e=C.responseXML:"json"==m&&(e=S.test(e)?null:t.parseJSON(e))}catch(r){n=r}if(n)return s(n,"parsererror",C,u,d)}a(e,C,u,d)}else s(C.statusText||null,C.status?"error":"abort",C,u,d)}},o(C,u)===!1)return C.abort(),s(null,"abort",C,u,d),C;var P="async"in u?u.async:!0;if(C.open(u.type,u.url,P,u.username,u.password),u.xhrFields)for(v in u.xhrFields)C[v]=u.xhrFields[v];for(v in E)O.apply(C,E[v]);return u.timeout>0&&(w=setTimeout(function(){C.onreadystatechange=l,C.abort(),s(null,"timeout",C,u,d)},u.timeout)),C.send(u.data?u.data:null),C},t.get=function(){return t.ajax(d.apply(null,arguments))},t.post=function(){var e=d.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=d.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,a=e.split(/\s/),s=d(e,n,r),u=s.success;return a.length>1&&(s.url=a[0],i=a[1]),s.success=function(e){o.html(i?t("<div>").html(e.replace(w,"")).find(i):e),u&&u.apply(o,arguments)},t.ajax(s),this};var C=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(C(e)+"="+C(n))},m(r,e,n),r.join("&").replace(/%20/g,"+")}}(Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=r(n),n.ns)var s=i(n.ns);return(g[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||s.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!a||t.sel==a)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in x||!!e}function a(t){return w[t]||y&&x[t]||t}function s(n,i,s,u,l,h,p){var d=e(n),m=g[d]||(g[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var i=r(e);i.fn=s,i.sel=l,i.e in w&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?i.fn.apply(this,arguments):void 0}),i.del=h;var d=h||s;i.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},i.i=m.length,m.push(i),"addEventListener"in n&&n.addEventListener(a(i.e),i.proxy,o(i,p))})}function u(t,r,i,s,u){var c=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,s).forEach(function(e){delete g[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,u))})})}function c(e,n){if(n||!e.isDefaultPrevented){n||(n=e),t.each(T,function(t,r){var i=n[t];e[t]=function(){return this[r]=b,i&&i.apply(n,arguments)},e[r]=E});try{e.timeStamp||(e.timeStamp=Date.now())}catch(r){}(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=b)}return e}function l(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin"in window,x={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:s,remove:u},t.proxy=function(n,r){var i=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(r,i?i.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,T={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var a,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,r,e,o)}),h):(m(n)||d(i)||i===!1||(i=r,r=n,n=f),(i===f||r===!1)&&(i=r,r=f),i===!1&&(i=E),h.each(function(f,h){o&&(a=function(t){return u(h,t.type,i),i.apply(this,arguments)}),n&&(c=function(e){var r,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(r=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||i).apply(o,[r].concat(p.call(arguments,1)))):void 0}),s(h,e,i,r,n,c||a)}))},t.fn.off=function(e,n,r){var i=this;return e&&!m(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(m(n)||d(r)||r===!1||(r=n,n=f),r===!1&&(r=E),i.each(function(){u(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){e.type in x&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(a,s){i=l(m(e)?t.Event(e):e),i._args=r,i.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),c(n)}}(Zepto);