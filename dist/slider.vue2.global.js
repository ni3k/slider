var VueformSlider=function(t){"use strict";function e(t){return-1!==[null,void 0,!1].indexOf(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t){var e={exports:{}};return t(e,e.exports),e.exports}var i=n((function(t,e){t.exports=function(){var t=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function e(t){return t.split("").reverse().join("")}function n(t,e){return t.substring(0,e.length)===e}function i(t,e){return t.slice(-1*e.length)===e}function o(t,e,r){if((t[e]||t[r])&&t[e]===t[r])throw new Error(e)}function a(t){return"number"==typeof t&&isFinite(t)}function s(t,e){return t=t.toString().split("e"),(+((t=(t=Math.round(+(t[0]+"e"+(t[1]?+t[1]+e:e)))).toString().split("e"))[0]+"e"+(t[1]?+t[1]-e:-e))).toFixed(e)}function u(t,r,n,i,o,u,l,c,f,p,d,h){var m,v,g,b=h,y="",x="";return u&&(h=u(h)),!!a(h)&&(!1!==t&&0===parseFloat(h.toFixed(t))&&(h=0),h<0&&(m=!0,h=Math.abs(h)),!1!==t&&(h=s(h,t)),-1!==(h=h.toString()).indexOf(".")?(g=(v=h.split("."))[0],n&&(y=n+v[1])):g=h,r&&(g=e(g).match(/.{1,3}/g),g=e(g.join(e(r)))),m&&c&&(x+=c),i&&(x+=i),m&&f&&(x+=f),x+=g,x+=y,o&&(x+=o),p&&(x=p(x,b)),x)}function l(t,e,r,o,s,u,l,c,f,p,d,h){var m,v="";return d&&(h=d(h)),!(!h||"string"!=typeof h)&&(c&&n(h,c)&&(h=h.replace(c,""),m=!0),o&&n(h,o)&&(h=h.replace(o,"")),f&&n(h,f)&&(h=h.replace(f,""),m=!0),s&&i(h,s)&&(h=h.slice(0,-1*s.length)),e&&(h=h.split(e).join("")),r&&(h=h.replace(r,".")),m&&(v+="-"),""!==(v=(v+=h).replace(/[^0-9\.\-.]/g,""))&&(v=Number(v),l&&(v=l(v)),!!a(v)&&v))}function c(e){var r,n,i,a={};for(void 0===e.suffix&&(e.suffix=e.postfix),r=0;r<t.length;r+=1)if(void 0===(i=e[n=t[r]]))"negative"!==n||a.negativeBefore?"mark"===n&&"."!==a.thousand?a[n]=".":a[n]=!1:a[n]="-";else if("decimals"===n){if(!(i>=0&&i<8))throw new Error(n);a[n]=i}else if("encoder"===n||"decoder"===n||"edit"===n||"undo"===n){if("function"!=typeof i)throw new Error(n);a[n]=i}else{if("string"!=typeof i)throw new Error(n);a[n]=i}return o(a,"mark","thousand"),o(a,"prefix","negative"),o(a,"prefix","negativeBefore"),a}function f(e,r,n){var i,o=[];for(i=0;i<t.length;i+=1)o.push(e[t[i]]);return o.push(n),r.apply("",o)}function p(t){if(!(this instanceof p))return new p(t);"object"===r(t)&&(t=c(t),this.to=function(e){return f(t,u,e)},this.from=function(e){return f(t,l,e)})}return p}()}));var o=n((function(t,e){t.exports=function(){var t="14.6.3";function e(t){return"object"===r(t)&&"function"==typeof t.to&&"function"==typeof t.from}function n(t){t.parentElement.removeChild(t)}function i(t){return null!=t}function o(t){t.preventDefault()}function a(t){return t.filter((function(t){return!this[t]&&(this[t]=!0)}),{})}function s(t,e){return Math.round(t/e)*e}function u(t,e){var r=t.getBoundingClientRect(),n=t.ownerDocument,i=n.documentElement,o=g(n);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(o.x=0),e?r.top+o.y-i.clientTop:r.left+o.x-i.clientLeft}function l(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function c(t,e,r){r>0&&(h(t,e),setTimeout((function(){m(t,e)}),r))}function f(t){return Math.max(Math.min(t,100),0)}function p(t){return Array.isArray(t)?t:[t]}function d(t){var e=(t=String(t)).split(".");return e.length>1?e[1].length:0}function h(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function m(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function v(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function g(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function b(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function y(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}function x(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function S(t,e){return 100/(e-t)}function w(t,e,r){return 100*e/(t[r+1]-t[r])}function E(t,e){return w(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function C(t,e){return e*(t[1]-t[0])/100+t[0]}function N(t,e){for(var r=1;t>=e[r];)r+=1;return r}function P(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=N(r,t),i=t[n-1],o=t[n],a=e[n-1],s=e[n];return a+E([i,o],r)/S(a,s)}function A(t,e,r){if(r>=100)return t.slice(-1)[0];var n=N(r,e),i=t[n-1],o=t[n],a=e[n-1];return C([i,o],(r-a)*S(a,e[n]))}function V(t,e,r,n){if(100===n)return n;var i=N(n,t),o=t[i-1],a=t[i];return r?n-o>(a-o)/2?a:o:e[i-1]?t[i-1]+s(n-t[i-1],e[i-1]):n}function U(e,r,n){var i;if("number"==typeof r&&(r=[r]),!Array.isArray(r))throw new Error("noUiSlider ("+t+"): 'range' contains invalid value.");if(!l(i="min"===e?0:"max"===e?100:parseFloat(e))||!l(r[0]))throw new Error("noUiSlider ("+t+"): 'range' value isn't numeric.");n.xPct.push(i),n.xVal.push(r[0]),i?n.xSteps.push(!isNaN(r[1])&&r[1]):isNaN(r[1])||(n.xSteps[0]=r[1]),n.xHighestCompleteStep.push(0)}function k(t,e,r){if(e)if(r.xVal[t]!==r.xVal[t+1]){r.xSteps[t]=w([r.xVal[t],r.xVal[t+1]],e,0)/S(r.xPct[t],r.xPct[t+1]);var n=(r.xVal[t+1]-r.xVal[t])/r.xNumSteps[t],i=Math.ceil(Number(n.toFixed(3))-1),o=r.xVal[t]+r.xNumSteps[t]*i;r.xHighestCompleteStep[t]=o}else r.xSteps[t]=r.xHighestCompleteStep[t]=r.xVal[t]}function M(t,e,n){var i;this.xPct=[],this.xVal=[],this.xSteps=[n||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var o=[];for(i in t)t.hasOwnProperty(i)&&o.push([t[i],i]);for(o.length&&"object"===r(o[0][0])?o.sort((function(t,e){return t[0][0]-e[0][0]})):o.sort((function(t,e){return t[0]-e[0]})),i=0;i<o.length;i++)U(o[i][1],o[i][0],this);for(this.xNumSteps=this.xSteps.slice(0),i=0;i<this.xNumSteps.length;i++)k(i,this.xNumSteps[i],this)}M.prototype.getDistance=function(e){var r,n=[];for(r=0;r<this.xNumSteps.length-1;r++){var i=this.xNumSteps[r];if(i&&e/i%1!=0)throw new Error("noUiSlider ("+t+"): 'limit', 'margin' and 'padding' of "+this.xPct[r]+"% range must be divisible by step.");n[r]=w(this.xVal,e,r)}return n},M.prototype.getAbsoluteDistance=function(t,e,r){var n,i=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[i+1];)i++;else t===this.xPct[this.xPct.length-1]&&(i=this.xPct.length-2);r||t!==this.xPct[i+1]||i++;var o=1,a=e[i],s=0,u=0,l=0,c=0;for(n=r?(t-this.xPct[i])/(this.xPct[i+1]-this.xPct[i]):(this.xPct[i+1]-t)/(this.xPct[i+1]-this.xPct[i]);a>0;)s=this.xPct[i+1+c]-this.xPct[i+c],e[i+c]*o+100-100*n>100?(u=s*n,o=(a-100*n)/e[i+c],n=1):(u=e[i+c]*s/100*o,o=0),r?(l-=u,this.xPct.length+c>=1&&c--):(l+=u,this.xPct.length-c>=1&&c++),a=e[i+c]*o;return t+l},M.prototype.toStepping=function(t){return t=P(this.xVal,this.xPct,t)},M.prototype.fromStepping=function(t){return A(this.xVal,this.xPct,t)},M.prototype.getStep=function(t){return t=V(this.xPct,this.xSteps,this.snap,t)},M.prototype.getDefaultStep=function(t,e,r){var n=N(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},M.prototype.getNearbySteps=function(t){var e=N(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},M.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(d);return Math.max.apply(null,t)},M.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var D={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number},O={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},F={tooltips:".__tooltips",aria:".__aria"};function L(r){if(e(r))return!0;throw new Error("noUiSlider ("+t+"): 'format' requires 'to' and 'from' methods.")}function R(e,r){if(!l(r))throw new Error("noUiSlider ("+t+"): 'step' is not numeric.");e.singleStep=r}function _(e,r){if(!l(r))throw new Error("noUiSlider ("+t+"): 'keyboardPageMultiplier' is not numeric.");e.keyboardPageMultiplier=r}function j(e,r){if(!l(r))throw new Error("noUiSlider ("+t+"): 'keyboardDefaultStep' is not numeric.");e.keyboardDefaultStep=r}function z(e,n){if("object"!==r(n)||Array.isArray(n))throw new Error("noUiSlider ("+t+"): 'range' is not an object.");if(void 0===n.min||void 0===n.max)throw new Error("noUiSlider ("+t+"): Missing 'min' or 'max' in 'range'.");if(n.min===n.max)throw new Error("noUiSlider ("+t+"): 'range' 'min' and 'max' cannot be equal.");e.spectrum=new M(n,e.snap,e.singleStep)}function H(e,r){if(r=p(r),!Array.isArray(r)||!r.length)throw new Error("noUiSlider ("+t+"): 'start' option is incorrect.");e.handles=r.length,e.start=r}function T(e,r){if(e.snap=r,"boolean"!=typeof r)throw new Error("noUiSlider ("+t+"): 'snap' option must be a boolean.")}function q(e,r){if(e.animate=r,"boolean"!=typeof r)throw new Error("noUiSlider ("+t+"): 'animate' option must be a boolean.")}function B(e,r){if(e.animationDuration=r,"number"!=typeof r)throw new Error("noUiSlider ("+t+"): 'animationDuration' option must be a number.")}function $(e,r){var n,i=[!1];if("lower"===r?r=[!0,!1]:"upper"===r&&(r=[!1,!0]),!0===r||!1===r){for(n=1;n<e.handles;n++)i.push(r);i.push(!1)}else{if(!Array.isArray(r)||!r.length||r.length!==e.handles+1)throw new Error("noUiSlider ("+t+"): 'connect' option doesn't match handle count.");i=r}e.connect=i}function X(e,r){switch(r){case"horizontal":e.ort=0;break;case"vertical":e.ort=1;break;default:throw new Error("noUiSlider ("+t+"): 'orientation' option is invalid.")}}function I(e,r){if(!l(r))throw new Error("noUiSlider ("+t+"): 'margin' option must be numeric.");0!==r&&(e.margin=e.spectrum.getDistance(r))}function Y(e,r){if(!l(r))throw new Error("noUiSlider ("+t+"): 'limit' option must be numeric.");if(e.limit=e.spectrum.getDistance(r),!e.limit||e.handles<2)throw new Error("noUiSlider ("+t+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function W(e,r){var n;if(!l(r)&&!Array.isArray(r))throw new Error("noUiSlider ("+t+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(r)&&2!==r.length&&!l(r[0])&&!l(r[1]))throw new Error("noUiSlider ("+t+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==r){for(Array.isArray(r)||(r=[r,r]),e.padding=[e.spectrum.getDistance(r[0]),e.spectrum.getDistance(r[1])],n=0;n<e.spectrum.xNumSteps.length-1;n++)if(e.padding[0][n]<0||e.padding[1][n]<0)throw new Error("noUiSlider ("+t+"): 'padding' option must be a positive number(s).");var i=r[0]+r[1],o=e.spectrum.xVal[0];if(i/(e.spectrum.xVal[e.spectrum.xVal.length-1]-o)>1)throw new Error("noUiSlider ("+t+"): 'padding' option must not exceed 100% of the range.")}}function G(e,r){switch(r){case"ltr":e.dir=0;break;case"rtl":e.dir=1;break;default:throw new Error("noUiSlider ("+t+"): 'direction' option was not recognized.")}}function J(e,r){if("string"!=typeof r)throw new Error("noUiSlider ("+t+"): 'behaviour' must be a string containing options.");var n=r.indexOf("tap")>=0,i=r.indexOf("drag")>=0,o=r.indexOf("fixed")>=0,a=r.indexOf("snap")>=0,s=r.indexOf("hover")>=0,u=r.indexOf("unconstrained")>=0;if(o){if(2!==e.handles)throw new Error("noUiSlider ("+t+"): 'fixed' behaviour must be used with 2 handles");I(e,e.start[1]-e.start[0])}if(u&&(e.margin||e.limit))throw new Error("noUiSlider ("+t+"): 'unconstrained' behaviour cannot be used with margin or limit");e.events={tap:n||a,drag:i,fixed:o,snap:a,hover:s,unconstrained:u}}function K(e,n){if(!1!==n)if(!0===n){e.tooltips=[];for(var i=0;i<e.handles;i++)e.tooltips.push(!0)}else{if(e.tooltips=p(n),e.tooltips.length!==e.handles)throw new Error("noUiSlider ("+t+"): must pass a formatter for all handles.");e.tooltips.forEach((function(e){if("boolean"!=typeof e&&("object"!==r(e)||"function"!=typeof e.to))throw new Error("noUiSlider ("+t+"): 'tooltips' must be passed a formatter or 'false'.")}))}}function Q(t,e){t.ariaFormat=e,L(e)}function Z(t,e){t.format=e,L(e)}function tt(e,r){if(e.keyboardSupport=r,"boolean"!=typeof r)throw new Error("noUiSlider ("+t+"): 'keyboardSupport' option must be a boolean.")}function et(t,e){t.documentElement=e}function rt(e,r){if("string"!=typeof r&&!1!==r)throw new Error("noUiSlider ("+t+"): 'cssPrefix' must be a string or `false`.");e.cssPrefix=r}function nt(e,n){if("object"!==r(n))throw new Error("noUiSlider ("+t+"): 'cssClasses' must be an object.");if("string"==typeof e.cssPrefix)for(var i in e.cssClasses={},n)n.hasOwnProperty(i)&&(e.cssClasses[i]=e.cssPrefix+n[i]);else e.cssClasses=n}function it(e){var r={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:D,format:D},n={step:{r:!1,t:R},keyboardPageMultiplier:{r:!1,t:_},keyboardDefaultStep:{r:!1,t:j},start:{r:!0,t:H},connect:{r:!0,t:$},direction:{r:!0,t:G},snap:{r:!1,t:T},animate:{r:!1,t:q},animationDuration:{r:!1,t:B},range:{r:!0,t:z},orientation:{r:!1,t:X},margin:{r:!1,t:I},limit:{r:!1,t:Y},padding:{r:!1,t:W},behaviour:{r:!0,t:J},ariaFormat:{r:!1,t:Q},format:{r:!1,t:Z},tooltips:{r:!1,t:K},keyboardSupport:{r:!0,t:tt},documentElement:{r:!1,t:et},cssPrefix:{r:!0,t:rt},cssClasses:{r:!0,t:nt}},o={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:O,keyboardPageMultiplier:5,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach((function(a){if(!i(e[a])&&void 0===o[a]){if(n[a].r)throw new Error("noUiSlider ("+t+"): '"+a+"' is required.");return!0}n[a].t(r,i(e[a])?e[a]:o[a])})),r.pips=e.pips;var a=document.createElement("div"),s=void 0!==a.style.msTransform,u=void 0!==a.style.transform;r.transformRule=u?"transform":s?"msTransform":"webkitTransform";var l=[["left","top"],["right","bottom"]];return r.style=l[r.dir][r.ort],r}function ot(e,r,i){var s,l,d,S,w,E,C=b(),N=x()&&y(),P=e,A=r.spectrum,V=[],U=[],k=[],M=0,D={},O=e.ownerDocument,L=r.documentElement||O.documentElement,R=O.body,_=-1,j=0,z=1,H=2,T="rtl"===O.dir||1===r.ort?0:100;function q(t,e){var r=O.createElement("div");return e&&h(r,e),t.appendChild(r),r}function B(t,e){var n=q(t,r.cssClasses.origin),i=q(n,r.cssClasses.handle);return q(i,r.cssClasses.touchArea),i.setAttribute("data-handle",e),r.keyboardSupport&&(i.setAttribute("tabindex","0"),i.addEventListener("keydown",(function(t){return vt(t,e)}))),i.setAttribute("role","slider"),i.setAttribute("aria-orientation",r.ort?"vertical":"horizontal"),0===e?h(i,r.cssClasses.handleLower):e===r.handles-1&&h(i,r.cssClasses.handleUpper),n}function $(t,e){return!!e&&q(t,r.cssClasses.connect)}function X(t,e){var n=q(e,r.cssClasses.connects);l=[],(d=[]).push($(n,t[0]));for(var i=0;i<r.handles;i++)l.push(B(e,i)),k[i]=i,d.push($(n,t[i+1]))}function I(t){return h(t,r.cssClasses.target),0===r.dir?h(t,r.cssClasses.ltr):h(t,r.cssClasses.rtl),0===r.ort?h(t,r.cssClasses.horizontal):h(t,r.cssClasses.vertical),h(t,"rtl"===getComputedStyle(t).direction?r.cssClasses.textDirectionRtl:r.cssClasses.textDirectionLtr),q(t,r.cssClasses.base)}function Y(t,e){return!!r.tooltips[e]&&q(t.firstChild,r.cssClasses.tooltip)}function W(){return P.hasAttribute("disabled")}function G(t){return l[t].hasAttribute("disabled")}function J(){w&&(xt("update"+F.tooltips),w.forEach((function(t){t&&n(t)})),w=null)}function K(){J(),w=l.map(Y),bt("update"+F.tooltips,(function(t,e,n){if(w[e]){var i=t[e];!0!==r.tooltips[e]&&(i=r.tooltips[e].to(n[e])),w[e].innerHTML=i}}))}function Q(){xt("update"+F.aria),bt("update"+F.aria,(function(t,e,n,i,o){k.forEach((function(t){var e=l[t],i=wt(U,t,0,!0,!0,!0),a=wt(U,t,100,!0,!0,!0),s=o[t],u=r.ariaFormat.to(n[t]);i=A.fromStepping(i).toFixed(1),a=A.fromStepping(a).toFixed(1),s=A.fromStepping(s).toFixed(1),e.children[0].setAttribute("aria-valuemin",i),e.children[0].setAttribute("aria-valuemax",a),e.children[0].setAttribute("aria-valuenow",s),e.children[0].setAttribute("aria-valuetext",u)}))}))}function Z(e,r,n){if("range"===e||"steps"===e)return A.xVal;if("count"===e){if(r<2)throw new Error("noUiSlider ("+t+"): 'values' (>= 2) required for mode 'count'.");var i=r-1,o=100/i;for(r=[];i--;)r[i]=i*o;r.push(100),e="positions"}return"positions"===e?r.map((function(t){return A.fromStepping(n?A.getStep(t):t)})):"values"===e?n?r.map((function(t){return A.fromStepping(A.getStep(A.toStepping(t)))})):r:void 0}function tt(t,e,r){function n(t,e){return(t+e).toFixed(7)/1}var i={},o=A.xVal[0],s=A.xVal[A.xVal.length-1],u=!1,l=!1,c=0;return(r=a(r.slice().sort((function(t,e){return t-e}))))[0]!==o&&(r.unshift(o),u=!0),r[r.length-1]!==s&&(r.push(s),l=!0),r.forEach((function(o,a){var s,f,p,d,h,m,v,g,b,y,x=o,S=r[a+1],w="steps"===e;if(w&&(s=A.xNumSteps[a]),s||(s=S-x),!1!==x)for(void 0===S&&(S=x),s=Math.max(s,1e-7),f=x;f<=S;f=n(f,s)){for(g=(h=(d=A.toStepping(f))-c)/t,y=h/(b=Math.round(g)),p=1;p<=b;p+=1)i[(m=c+p*y).toFixed(5)]=[A.fromStepping(m),0];v=r.indexOf(f)>-1?z:w?H:j,!a&&u&&f!==S&&(v=0),f===S&&l||(i[d.toFixed(5)]=[f,v]),c=d}})),i}function et(t,e,n){var i=O.createElement("div"),o=[];o[j]=r.cssClasses.valueNormal,o[z]=r.cssClasses.valueLarge,o[H]=r.cssClasses.valueSub;var a=[];a[j]=r.cssClasses.markerNormal,a[z]=r.cssClasses.markerLarge,a[H]=r.cssClasses.markerSub;var s=[r.cssClasses.valueHorizontal,r.cssClasses.valueVertical],u=[r.cssClasses.markerHorizontal,r.cssClasses.markerVertical];function l(t,e){var n=e===r.cssClasses.value,i=n?o:a;return e+" "+(n?s:u)[r.ort]+" "+i[t]}function c(t,o,a){if((a=e?e(o,a):a)!==_){var s=q(i,!1);s.className=l(a,r.cssClasses.marker),s.style[r.style]=t+"%",a>j&&((s=q(i,!1)).className=l(a,r.cssClasses.value),s.setAttribute("data-value",o),s.style[r.style]=t+"%",s.innerHTML=n.to(o))}}return h(i,r.cssClasses.pips),h(i,0===r.ort?r.cssClasses.pipsHorizontal:r.cssClasses.pipsVertical),Object.keys(t).forEach((function(e){c(e,t[e][0],t[e][1])})),i}function rt(){S&&(n(S),S=null)}function nt(t){rt();var e=t.mode,r=t.density||1,n=t.filter||!1,i=tt(r,e,Z(e,t.values||!1,t.stepped||!1)),o=t.format||{to:Math.round};return S=P.appendChild(et(i,n,o))}function ot(){var t=s.getBoundingClientRect(),e="offset"+["Width","Height"][r.ort];return 0===r.ort?t.width||s[e]:t.height||s[e]}function at(t,e,n,i){var o=function(o){return!!(o=st(o,i.pageOffset,i.target||e))&&!(W()&&!i.doNotReject)&&!(v(P,r.cssClasses.tap)&&!i.doNotReject)&&!(t===C.start&&void 0!==o.buttons&&o.buttons>1)&&(!i.hover||!o.buttons)&&(N||o.preventDefault(),o.calcPoint=o.points[r.ort],void n(o,i))},a=[];return t.split(" ").forEach((function(t){e.addEventListener(t,o,!!N&&{passive:!0}),a.push([t,o])})),a}function st(t,e,r){var n,i,o=0===t.type.indexOf("touch"),a=0===t.type.indexOf("mouse"),s=0===t.type.indexOf("pointer");if(0===t.type.indexOf("MSPointer")&&(s=!0),"mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(o){var u=function(t){return t.target===r||r.contains(t.target)||t.target.shadowRoot&&t.target.shadowRoot.contains(r)};if("touchstart"===t.type){var l=Array.prototype.filter.call(t.touches,u);if(l.length>1)return!1;n=l[0].pageX,i=l[0].pageY}else{var c=Array.prototype.find.call(t.changedTouches,u);if(!c)return!1;n=c.pageX,i=c.pageY}}return e=e||g(O),(a||s)&&(n=t.clientX+e.x,i=t.clientY+e.y),t.pageOffset=e,t.points=[n,i],t.cursor=a||s,t}function ut(t){var e=100*(t-u(s,r.ort))/ot();return e=f(e),r.dir?100-e:e}function lt(t){var e=100,r=!1;return l.forEach((function(n,i){if(!G(i)){var o=U[i],a=Math.abs(o-t);(a<e||a<=e&&t>o||100===a&&100===e)&&(r=i,e=a)}})),r}function ct(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&pt(t,e)}function ft(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return pt(t,e);var n=(r.dir?-1:1)*(t.calcPoint-e.startCalcPoint);Ct(n>0,100*n/e.baseSize,e.locations,e.handleNumbers)}function pt(t,e){e.handle&&(m(e.handle,r.cssClasses.active),M-=1),e.listeners.forEach((function(t){L.removeEventListener(t[0],t[1])})),0===M&&(m(P,r.cssClasses.drag),At(),t.cursor&&(R.style.cursor="",R.removeEventListener("selectstart",o))),e.handleNumbers.forEach((function(t){St("change",t),St("set",t),St("end",t)}))}function dt(t,e){if(e.handleNumbers.some(G))return!1;var n;1===e.handleNumbers.length&&(n=l[e.handleNumbers[0]].children[0],M+=1,h(n,r.cssClasses.active)),t.stopPropagation();var i=[],a=at(C.move,L,ft,{target:t.target,handle:n,listeners:i,startCalcPoint:t.calcPoint,baseSize:ot(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:U.slice()}),s=at(C.end,L,pt,{target:t.target,handle:n,listeners:i,doNotReject:!0,handleNumbers:e.handleNumbers}),u=at("mouseout",L,ct,{target:t.target,handle:n,listeners:i,doNotReject:!0,handleNumbers:e.handleNumbers});i.push.apply(i,a.concat(s,u)),t.cursor&&(R.style.cursor=getComputedStyle(t.target).cursor,l.length>1&&h(P,r.cssClasses.drag),R.addEventListener("selectstart",o,!1)),e.handleNumbers.forEach((function(t){St("start",t)}))}function ht(t){t.stopPropagation();var e=ut(t.calcPoint),n=lt(e);if(!1===n)return!1;r.events.snap||c(P,r.cssClasses.tap,r.animationDuration),Vt(n,e,!0,!0),At(),St("slide",n,!0),St("update",n,!0),St("change",n,!0),St("set",n,!0),r.events.snap&&dt(t,{handleNumbers:[n]})}function mt(t){var e=ut(t.calcPoint),r=A.getStep(e),n=A.fromStepping(r);Object.keys(D).forEach((function(t){"hover"===t.split(".")[0]&&D[t].forEach((function(t){t.call(E,n)}))}))}function vt(t,e){if(W()||G(e))return!1;var n=["Left","Right"],i=["Down","Up"],o=["PageDown","PageUp"],a=["Home","End"];r.dir&&!r.ort?n.reverse():r.ort&&!r.dir&&(i.reverse(),o.reverse());var s,u=t.key.replace("Arrow",""),l=u===o[0],c=u===o[1],f=u===i[0]||u===n[0]||l,p=u===i[1]||u===n[1]||c,d=u===a[0],h=u===a[1];if(!(f||p||d||h))return!0;if(t.preventDefault(),p||f){var m=r.keyboardPageMultiplier,v=f?0:1,g=Rt(e)[v];if(null===g)return!1;!1===g&&(g=A.getDefaultStep(U[e],f,r.keyboardDefaultStep)),(c||l)&&(g*=m),g=Math.max(g,1e-7),g*=f?-1:1,s=V[e]+g}else s=h?r.spectrum.xVal[r.spectrum.xVal.length-1]:r.spectrum.xVal[0];return Vt(e,A.toStepping(s),!0,!0),St("slide",e),St("update",e),St("change",e),St("set",e),!1}function gt(t){t.fixed||l.forEach((function(t,e){at(C.start,t.children[0],dt,{handleNumbers:[e]})})),t.tap&&at(C.start,s,ht,{}),t.hover&&at(C.move,s,mt,{hover:!0}),t.drag&&d.forEach((function(e,n){if(!1!==e&&0!==n&&n!==d.length-1){var i=l[n-1],o=l[n],a=[e];h(e,r.cssClasses.draggable),t.fixed&&(a.push(i.children[0]),a.push(o.children[0])),a.forEach((function(t){at(C.start,t,dt,{handles:[i,o],handleNumbers:[n-1,n]})}))}}))}function bt(t,e){D[t]=D[t]||[],D[t].push(e),"update"===t.split(".")[0]&&l.forEach((function(t,e){St("update",e)}))}function yt(t){return t===F.aria||t===F.tooltips}function xt(t){var e=t&&t.split(".")[0],r=e?t.substring(e.length):t;Object.keys(D).forEach((function(t){var n=t.split(".")[0],i=t.substring(n.length);e&&e!==n||r&&r!==i||yt(i)&&r!==i||delete D[t]}))}function St(t,e,n){Object.keys(D).forEach((function(i){var o=i.split(".")[0];t===o&&D[i].forEach((function(t){t.call(E,V.map(r.format.to),e,V.slice(),n||!1,U.slice(),E)}))}))}function wt(t,e,n,i,o,a){var s;return l.length>1&&!r.events.unconstrained&&(i&&e>0&&(s=A.getAbsoluteDistance(t[e-1],r.margin,0),n=Math.max(n,s)),o&&e<l.length-1&&(s=A.getAbsoluteDistance(t[e+1],r.margin,1),n=Math.min(n,s))),l.length>1&&r.limit&&(i&&e>0&&(s=A.getAbsoluteDistance(t[e-1],r.limit,0),n=Math.min(n,s)),o&&e<l.length-1&&(s=A.getAbsoluteDistance(t[e+1],r.limit,1),n=Math.max(n,s))),r.padding&&(0===e&&(s=A.getAbsoluteDistance(0,r.padding[0],0),n=Math.max(n,s)),e===l.length-1&&(s=A.getAbsoluteDistance(100,r.padding[1],1),n=Math.min(n,s))),!((n=f(n=A.getStep(n)))===t[e]&&!a)&&n}function Et(t,e){var n=r.ort;return(n?e:t)+", "+(n?t:e)}function Ct(t,e,r,n){var i=r.slice(),o=[!t,t],a=[t,!t];n=n.slice(),t&&n.reverse(),n.length>1?n.forEach((function(t,r){var n=wt(i,t,i[t]+e,o[r],a[r],!1);!1===n?e=0:(e=n-i[t],i[t]=n)})):o=a=[!0];var s=!1;n.forEach((function(t,n){s=Vt(t,r[t]+e,o[n],a[n])||s})),s&&n.forEach((function(t){St("update",t),St("slide",t)}))}function Nt(t,e){return r.dir?100-t-e:t}function Pt(t,e){U[t]=e,V[t]=A.fromStepping(e);var n="translate("+Et(10*(Nt(e,0)-T)+"%","0")+")";l[t].style[r.transformRule]=n,Ut(t),Ut(t+1)}function At(){k.forEach((function(t){var e=U[t]>50?-1:1,r=3+(l.length+e*t);l[t].style.zIndex=r}))}function Vt(t,e,r,n,i){return i||(e=wt(U,t,e,r,n,!1)),!1!==e&&(Pt(t,e),!0)}function Ut(t){if(d[t]){var e=0,n=100;0!==t&&(e=U[t-1]),t!==d.length-1&&(n=U[t]);var i=n-e,o="translate("+Et(Nt(e,i)+"%","0")+")",a="scale("+Et(i/100,"1")+")";d[t].style[r.transformRule]=o+" "+a}}function kt(t,e){return null===t||!1===t||void 0===t?U[e]:("number"==typeof t&&(t=String(t)),t=r.format.from(t),!1===(t=A.toStepping(t))||isNaN(t)?U[e]:t)}function Mt(t,e,n){var i=p(t),o=void 0===U[0];e=void 0===e||!!e,r.animate&&!o&&c(P,r.cssClasses.tap,r.animationDuration),k.forEach((function(t){Vt(t,kt(i[t],t),!0,!1,n)}));for(var a=1===k.length?0:1;a<k.length;++a)k.forEach((function(t){Vt(t,U[t],!0,!0,n)}));At(),k.forEach((function(t){St("update",t),null!==i[t]&&e&&St("set",t)}))}function Dt(t){Mt(r.start,t)}function Ot(e,r,n,i){if(!((e=Number(e))>=0&&e<k.length))throw new Error("noUiSlider ("+t+"): invalid handle number, got: "+e);Vt(e,kt(r,e),!0,!0,i),St("update",e),n&&St("set",e)}function Ft(){var t=V.map(r.format.to);return 1===t.length?t[0]:t}function Lt(){for(var t in xt(F.aria),xt(F.tooltips),r.cssClasses)r.cssClasses.hasOwnProperty(t)&&m(P,r.cssClasses[t]);for(;P.firstChild;)P.removeChild(P.firstChild);delete P.noUiSlider}function Rt(t){var e=U[t],n=A.getNearbySteps(e),i=V[t],o=n.thisStep.step,a=null;if(r.snap)return[i-n.stepBefore.startValue||null,n.stepAfter.startValue-i||null];!1!==o&&i+o>n.stepAfter.startValue&&(o=n.stepAfter.startValue-i),a=i>n.thisStep.startValue?n.thisStep.step:!1!==n.stepBefore.step&&i-n.stepBefore.highestStep,100===e?o=null:0===e&&(a=null);var s=A.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(s))),null!==a&&!1!==a&&(a=Number(a.toFixed(s))),[a,o]}function _t(){return k.map(Rt)}function jt(t,e){var n=Ft(),o=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];o.forEach((function(e){void 0!==t[e]&&(i[e]=t[e])}));var a=it(i);o.forEach((function(e){void 0!==t[e]&&(r[e]=a[e])})),A=a.spectrum,r.margin=a.margin,r.limit=a.limit,r.padding=a.padding,r.pips?nt(r.pips):rt(),r.tooltips?K():J(),U=[],Mt(t.start||n,e)}function zt(){s=I(P),X(r.connect,s),gt(r.events),Mt(r.start),r.pips&&nt(r.pips),r.tooltips&&K(),Q()}return zt(),E={destroy:Lt,steps:_t,on:bt,off:xt,get:Ft,set:Mt,setHandle:Ot,reset:Dt,__moveHandles:function(t,e,r){Ct(t,e,U,r)},options:i,updateOptions:jt,target:P,removePips:rt,removeTooltips:J,getTooltips:function(){return w},getOrigins:function(){return l},pips:nt}}function at(e,r){if(!e||!e.nodeName)throw new Error("noUiSlider ("+t+"): create requires a single element, got: "+e);if(e.noUiSlider)throw new Error("noUiSlider ("+t+"): Slider was already initialized.");var n=ot(e,it(r),r);return e.noUiSlider=n,n}return{__spectrum:M,version:t,cssClasses:O,create:at}}()}));function a(t,e,r,n,i,o,a,s,u,l){"boolean"!=typeof a&&(u=s,s=a,a=!1);var c,f="function"==typeof r?r.options:r;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,i&&(f.functional=!0)),n&&(f._scopeId=n),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},f._ssrRegister=c):e&&(c=a?function(t){e.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),c)if(f.functional){var p=f.render;f.render=function(t,e){return c.call(e),p(t,e)}}else{var d=f.beforeCreate;f.beforeCreate=d?[].concat(d,c):[c]}return r}const s={name:"Slider",emits:["input","update:modelValue","update","change"],props:{...{value:{validator:function(t){return t=>"number"==typeof t||t instanceof Array||null==t||!1===t},required:!1},modelValue:{validator:function(t){return t=>"number"==typeof t||t instanceof Array||null==t||!1===t},required:!1}},id:{type:[String,Number],required:!1,default:"slider"},disabled:{type:Boolean,required:!1,default:!1},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},step:{type:Number,required:!1,default:1},orientation:{type:String,required:!1,default:"horizontal"},direction:{type:String,required:!1,default:"ltr"},tooltips:{type:Boolean,required:!1,default:!0},options:{type:Object,required:!1,default:()=>({})},merge:{type:Number,required:!1,default:-1},height:{type:String,required:!1,default:"300px"},format:{type:[Object,Function,Boolean],required:!1,default:null}},setup(r,n){const a=function(r,n,i){var o=t.toRefs(r),a=o.value,s=o.modelValue,u=void 0!==n.expose?s:a,l=t.ref(u.value);if(e(u.value))throw new Error("Slider v-model must be a Number or Array");if(Array.isArray(u.value)&&0==u.value.length)throw new Error("Slider v-model must not be an empty array");return{value:u,initialValue:l}}(r,n),s=function(e,r,n){var i=t.toRefs(e),o=i.orientation,a=i.height;return{style:t.computed((function(){return"vertical"==o.value?{height:a.value}:[]}))}}(r),u=function(e,r,n){var o=t.toRefs(e),a=o.format,s=o.step,u=n.value,l=t.computed((function(){return a&&a.value?"function"==typeof a.value?{to:a.value}:i(Object.assign({},a.value)):i({decimals:s.value>=0?0:2})}));return{tooltipsFormat:t.computed((function(){return Array.isArray(u.value)?u.value.map((function(t){return l.value})):l.value})),tooltipsMerge:function(t,e,r){var n="rtl"===getComputedStyle(t).direction,i="rtl"===t.noUiSlider.options.direction,o="vertical"===t.noUiSlider.options.orientation,a=t.noUiSlider.getTooltips(),s=t.noUiSlider.getOrigins();a.forEach((function(t,e){t&&s[e].appendChild(t)})),t.noUiSlider.on("update",(function(t,s,u,c,f){var p=[[]],d=[[]],h=[[]],m=0;a[0]&&(p[0][0]=0,d[0][0]=f[0],h[0][0]=l.value.to(parseFloat(t[0])));for(var v=1;v<f.length;v++)(!a[v]||f[v]-f[v-1]>e)&&(p[++m]=[],h[m]=[],d[m]=[]),a[v]&&(p[m].push(v),h[m].push(l.value.to(parseFloat(t[v]))),d[m].push(f[v]));p.forEach((function(t,e){for(var s=t.length,u=0;u<s;u++){var l=t[u];if(u===s-1){var c=0;d[e].forEach((function(t){c+=1e3-10*t}));var f=o?"bottom":"right",p=i?0:s-1,m=1e3-10*d[e][p];c=(n&&!o?100:0)+c/s-m,a[l].innerHTML=h[e].join(r),a[l].style.display="block",a[l].style[f]=c+"%"}else a[l].style.display="none"}}))}))}}}(r,0,{value:a.value}),l=function(r,n,i){var a=t.toRefs(r),s=a.options,u=a.orientation,l=a.direction,c=a.tooltips,f=a.step,p=a.min,d=a.max,h=a.merge,m=a.format,v=i.value,g=i.initialValue,b=i.tooltipsFormat,y=i.tooltipsMerge,x=t.ref(null),S=t.ref(null),w=t.ref(!1),E=t.computed((function(){var t={cssPrefix:"slider-",orientation:u.value,direction:l.value,tooltips:!!c.value&&b.value,connect:"lower",start:e(v.value)?p.value:v.value,range:{min:p.value,max:d.value}};return f.value>0&&(t.step=f.value),Array.isArray(v.value)&&(t.connect=!0),t})),C=t.computed((function(){return Array.isArray(v.value)})),N=function(){var t=S.value.get();return Array.isArray(t)?t.map((function(t){return parseFloat(t)})):parseFloat(t)},P=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];S.value.set(t,e)},A=function(t){n.emit("input",t),n.emit("update:modelValue",t),n.emit("update",t)},V=function(){S.value=o.create(x.value,Object.assign({},E.value,s.value)),c.value&&C.value&&h.value>=0&&y(x.value,h.value," - "),S.value.on("set",(function(t){n.emit("change",N())})),S.value.on("update",(function(t){w.value&&A(N())})),w.value=!0},U=function(){S.value.off(),S.value.destroy(),S.value=null},k=function(){w.value=!1,U(),V()};return t.onMounted(V),t.onUnmounted(U),t.watch(C,k,{immediate:!1}),t.watch(p,k,{immediate:!1}),t.watch(d,k,{immediate:!1}),t.watch(f,k,{immediate:!1}),t.watch(u,k,{immediate:!1}),t.watch(l,k,{immediate:!1}),t.watch(c,k,{immediate:!1}),t.watch(m,k,{immediate:!1,deep:!0}),t.watch(h,k,{immediate:!1}),t.watch(s,k,{immediate:!1,deep:!0}),t.watch(v,(function(t){var r,n,i;e(t)?P(p.value,!1):(C.value&&(r=t,n=N(),i=n.slice().sort(),r.length!==n.length||!r.slice().sort().every((function(t,e){return t===i[e]})))||!C.value&&t!=N())&&P(t,!1)}),{deep:!0}),{slider:x,slider$:S,isRange:C,init:V,destroy:U,refresh:k,update:P,reset:function(){A(g.value)}}}(r,n,{value:a.value,initialValue:a.initialValue,tooltipsFormat:u.tooltipsFormat,tooltipsMerge:u.tooltipsMerge});return{...s,...u,...l}}};var u=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"slider",style:t.style,attrs:{id:t.id,disabled:t.disabled}})};u._withStripped=!0;return a({render:u,staticRenderFns:[]},undefined,s,undefined,false,undefined,!1,void 0,void 0,void 0)}(VueCompositionAPI);
