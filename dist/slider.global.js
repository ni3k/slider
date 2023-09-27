var VueformSlider=function(t){"use strict";function e(t){return-1!==[null,void 0,!1].indexOf(t)}var r,i,n,o,a=(r=function(t,e){t.exports=function(){var t=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function e(t){return t.split("").reverse().join("")}function r(t,e){return t.substring(0,e.length)===e}function i(t,e){return t.slice(-1*e.length)===e}function n(t,e,r){if((t[e]||t[r])&&t[e]===t[r])throw new Error(e)}function o(t){return"number"==typeof t&&isFinite(t)}function a(t,e){return t=t.toString().split("e"),(+((t=(t=Math.round(+(t[0]+"e"+(t[1]?+t[1]+e:e)))).toString().split("e"))[0]+"e"+(t[1]?+t[1]-e:-e))).toFixed(e)}function s(t,r,i,n,s,l,u,c,p,d,f,h){var m,v,g,b=h,y="",S="";return l&&(h=l(h)),!!o(h)&&(!1!==t&&0===parseFloat(h.toFixed(t))&&(h=0),h<0&&(m=!0,h=Math.abs(h)),!1!==t&&(h=a(h,t)),-1!==(h=h.toString()).indexOf(".")?(g=(v=h.split("."))[0],i&&(y=i+v[1])):g=h,r&&(g=e(g).match(/.{1,3}/g),g=e(g.join(e(r)))),m&&c&&(S+=c),n&&(S+=n),m&&p&&(S+=p),S+=g,S+=y,s&&(S+=s),d&&(S=d(S,b)),S)}function l(t,e,n,a,s,l,u,c,p,d,f,h){var m,v="";return f&&(h=f(h)),!(!h||"string"!=typeof h)&&(c&&r(h,c)&&(h=h.replace(c,""),m=!0),a&&r(h,a)&&(h=h.replace(a,"")),p&&r(h,p)&&(h=h.replace(p,""),m=!0),s&&i(h,s)&&(h=h.slice(0,-1*s.length)),e&&(h=h.split(e).join("")),n&&(h=h.replace(n,".")),m&&(v+="-"),""!==(v=(v+=h).replace(/[^0-9\.\-.]/g,""))&&(v=Number(v),u&&(v=u(v)),!!o(v)&&v))}function u(e){var r,i,o,a={};for(void 0===e.suffix&&(e.suffix=e.postfix),r=0;r<t.length;r+=1)if(void 0===(o=e[i=t[r]]))"negative"!==i||a.negativeBefore?"mark"===i&&"."!==a.thousand?a[i]=".":a[i]=!1:a[i]="-";else if("decimals"===i){if(!(o>=0&&o<8))throw new Error(i);a[i]=o}else if("encoder"===i||"decoder"===i||"edit"===i||"undo"===i){if("function"!=typeof o)throw new Error(i);a[i]=o}else{if("string"!=typeof o)throw new Error(i);a[i]=o}return n(a,"mark","thousand"),n(a,"prefix","negative"),n(a,"prefix","negativeBefore"),a}function c(e,r,i){var n,o=[];for(n=0;n<t.length;n+=1)o.push(e[t[n]]);return o.push(i),r.apply("",o)}function p(t){if(!(this instanceof p))return new p(t);"object"==typeof t&&(t=u(t),this.to=function(e){return c(t,s,e)},this.from=function(e){return c(t,l,e)})}return p}()},r(i={exports:{}},i.exports),i.exports);function s(t){return"object"==typeof t&&"function"==typeof t.to}function l(t){t.parentElement.removeChild(t)}function u(t){return null!=t}function c(t){t.preventDefault()}function p(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function d(t,e,r){r>0&&(v(t,e),setTimeout((function(){g(t,e)}),r))}function f(t){return Math.max(Math.min(t,100),0)}function h(t){return Array.isArray(t)?t:[t]}function m(t){var e=(t=String(t)).split(".");return e.length>1?e[1].length:0}function v(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function g(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function b(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function y(t,e){return 100/(e-t)}function S(t,e,r){return 100*e/(t[r+1]-t[r])}function x(t,e){for(var r=1;t>=e[r];)r+=1;return r}function w(t,e,r){if(r>=t.slice(-1)[0])return 100;var i=x(r,t),n=t[i-1],o=t[i],a=e[i-1],s=e[i];return a+function(t,e){return S(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}([n,o],r)/y(a,s)}function E(t,e,r,i){if(100===i)return i;var n=x(i,t),o=t[n-1],a=t[n];return r?i-o>(a-o)/2?a:o:e[n-1]?t[n-1]+function(t,e){return Math.round(t/e)*e}(i-t[n-1],e[n-1]):i}!function(t){t.Range="range",t.Steps="steps",t.Positions="positions",t.Count="count",t.Values="values"}(n||(n={})),function(t){t[t.None=-1]="None",t[t.NoValue=0]="NoValue",t[t.LargeValue=1]="LargeValue",t[t.SmallValue=2]="SmallValue"}(o||(o={}));var A=function(){function t(t,e,r){var i;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=e;var n=[];for(Object.keys(t).forEach((function(e){n.push([h(t[e]),e])})),n.sort((function(t,e){return t[0][0]-e[0][0]})),i=0;i<n.length;i++)this.handleEntryPoint(n[i][1],n[i][0]);for(this.xNumSteps=this.xSteps.slice(0),i=0;i<this.xNumSteps.length;i++)this.handleStepPoint(i,this.xNumSteps[i])}return t.prototype.getDistance=function(t){for(var e=[],r=0;r<this.xNumSteps.length-1;r++)e[r]=S(this.xVal,t,r);return e},t.prototype.getAbsoluteDistance=function(t,e,r){var i,n=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[n+1];)n++;else t===this.xPct[this.xPct.length-1]&&(n=this.xPct.length-2);r||t!==this.xPct[n+1]||n++,null===e&&(e=[]);var o=1,a=e[n],s=0,l=0,u=0,c=0;for(i=r?(t-this.xPct[n])/(this.xPct[n+1]-this.xPct[n]):(this.xPct[n+1]-t)/(this.xPct[n+1]-this.xPct[n]);a>0;)s=this.xPct[n+1+c]-this.xPct[n+c],e[n+c]*o+100-100*i>100?(l=s*i,o=(a-100*i)/e[n+c],i=1):(l=e[n+c]*s/100*o,o=0),r?(u-=l,this.xPct.length+c>=1&&c--):(u+=l,this.xPct.length-c>=1&&c++),a=e[n+c]*o;return t+u},t.prototype.toStepping=function(t){return t=w(this.xVal,this.xPct,t)},t.prototype.fromStepping=function(t){return function(t,e,r){if(r>=100)return t.slice(-1)[0];var i=x(r,e),n=t[i-1],o=t[i],a=e[i-1];return function(t,e){return e*(t[1]-t[0])/100+t[0]}([n,o],(r-a)*y(a,e[i]))}(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=E(this.xPct,this.xSteps,this.snap,t)},t.prototype.getDefaultStep=function(t,e,r){var i=x(t,this.xPct);return(100===t||e&&t===this.xPct[i-1])&&(i=Math.max(i-1,1)),(this.xVal[i]-this.xVal[i-1])/r},t.prototype.getNearbySteps=function(t){var e=x(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(m);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){var r;if(!p(r="min"===t?0:"max"===t?100:parseFloat(t))||!p(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(r),this.xVal.push(e[0]);var i=Number(e[1]);r?this.xSteps.push(!isNaN(i)&&i):isNaN(i)||(this.xSteps[0]=i),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){if(e)if(this.xVal[t]!==this.xVal[t+1]){this.xSteps[t]=S([this.xVal[t],this.xVal[t+1]],e,0)/y(this.xPct[t],this.xPct[t+1]);var r=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],i=Math.ceil(Number(r.toFixed(3))-1),n=this.xVal[t]+this.xNumSteps[t]*i;this.xHighestCompleteStep[t]=n}else this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t]},t}(),N={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},C={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},k={tooltips:".__tooltips",aria:".__aria"};function V(t,e){if(!p(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function P(t,e){if(!p(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function L(t,e){if(!p(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function U(t,e){if(!p(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function M(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new A(e,t.snap||!1,t.singleStep)}function O(t,e){if(e=h(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function D(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function j(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function F(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function z(t,e){var r,i=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)i.push(e);i.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");i=e}t.connect=i}function H(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function q(t,e){if(!p(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function R(t,e){if(!p(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function T(t,e){var r;if(!p(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!p(e[0])&&!p(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var i=e[0]+e[1],n=t.spectrum.xVal[0];if(i/(t.spectrum.xVal[t.spectrum.xVal.length-1]-n)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function B(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function _(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=e.indexOf("tap")>=0,i=e.indexOf("drag")>=0,n=e.indexOf("fixed")>=0,o=e.indexOf("snap")>=0,a=e.indexOf("hover")>=0,s=e.indexOf("unconstrained")>=0,l=e.indexOf("drag-all")>=0,u=e.indexOf("smooth-steps")>=0;if(n){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");q(t,t.start[1]-t.start[0])}if(s&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:i,dragAll:l,smoothSteps:u,fixed:n,snap:o,hover:a,unconstrained:s}}function $(t,e){if(!1!==e)if(!0===e||s(e)){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(e)}else{if((e=h(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach((function(t){if("boolean"!=typeof t&&!s(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})),t.tooltips=e}}function X(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function Y(t,e){if(!s(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function I(t,e){if(!function(t){return s(t)&&"function"==typeof t.from}(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=e}function W(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function G(t,e){t.documentElement=e}function J(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function K(t,e){if("object"!=typeof e)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof t.cssPrefix?(t.cssClasses={},Object.keys(e).forEach((function(r){t.cssClasses[r]=t.cssPrefix+e[r]}))):t.cssClasses=e}function Q(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:N,format:N},r={step:{r:!1,t:V},keyboardPageMultiplier:{r:!1,t:P},keyboardMultiplier:{r:!1,t:L},keyboardDefaultStep:{r:!1,t:U},start:{r:!0,t:O},connect:{r:!0,t:z},direction:{r:!0,t:B},snap:{r:!1,t:D},animate:{r:!1,t:j},animationDuration:{r:!1,t:F},range:{r:!0,t:M},orientation:{r:!1,t:H},margin:{r:!1,t:q},limit:{r:!1,t:R},padding:{r:!1,t:T},behaviour:{r:!0,t:_},ariaFormat:{r:!1,t:Y},format:{r:!1,t:I},tooltips:{r:!1,t:$},keyboardSupport:{r:!0,t:W},documentElement:{r:!1,t:G},cssPrefix:{r:!0,t:J},cssClasses:{r:!0,t:K},handleAttributes:{r:!1,t:X}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:C,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(r).forEach((function(n){if(u(t[n])||void 0!==i[n])r[n].t(e,u(t[n])?t[n]:i[n]);else if(r[n].r)throw new Error("noUiSlider: '"+n+"' is required.")})),e.pips=t.pips;var n=document.createElement("div"),o=void 0!==n.style.msTransform,a=void 0!==n.style.transform;e.transformRule=a?"transform":o?"msTransform":"webkitTransform";return e.style=[["left","top"],["right","bottom"]][e.dir][e.ort],e}function Z(t,e,r){var i,a,s,p,m,y,S,x=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},w=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),E=t,A=e.spectrum,N=[],C=[],V=[],P=0,L={},U=t.ownerDocument,M=e.documentElement||U.documentElement,O=U.body,D="rtl"===U.dir||1===e.ort?0:100;function j(t,e){var r=U.createElement("div");return e&&v(r,e),t.appendChild(r),r}function F(t,r){var i=j(t,e.cssClasses.origin),n=j(i,e.cssClasses.handle);if(j(n,e.cssClasses.touchArea),n.setAttribute("data-handle",String(r)),e.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",(function(t){return function(t,r){if(q()||R(r))return!1;var i=["Left","Right"],n=["Down","Up"],o=["PageDown","PageUp"],a=["Home","End"];e.dir&&!e.ort?i.reverse():e.ort&&!e.dir&&(n.reverse(),o.reverse());var s,l=t.key.replace("Arrow",""),u=l===o[0],c=l===o[1],p=l===n[0]||l===i[0]||u,d=l===n[1]||l===i[1]||c,f=l===a[0],h=l===a[1];if(!(p||d||f||h))return!0;if(t.preventDefault(),d||p){var m=p?0:1,v=gt(r)[m];if(null===v)return!1;!1===v&&(v=A.getDefaultStep(C[r],p,e.keyboardDefaultStep)),v*=c||u?e.keyboardPageMultiplier:e.keyboardMultiplier,v=Math.max(v,1e-7),v*=p?-1:1,s=N[r]+v}else s=h?e.spectrum.xVal[e.spectrum.xVal.length-1]:e.spectrum.xVal[0];return dt(r,A.toStepping(s),!0,!0),at("slide",r),at("update",r),at("change",r),at("set",r),!1}(t,r)}))),void 0!==e.handleAttributes){var o=e.handleAttributes[r];Object.keys(o).forEach((function(t){n.setAttribute(t,o[t])}))}return n.setAttribute("role","slider"),n.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),0===r?v(n,e.cssClasses.handleLower):r===e.handles-1&&v(n,e.cssClasses.handleUpper),i.handle=n,i}function z(t,r){return!!r&&j(t,e.cssClasses.connect)}function H(t,r){return!(!e.tooltips||!e.tooltips[r])&&j(t.firstChild,e.cssClasses.tooltip)}function q(){return E.hasAttribute("disabled")}function R(t){return a[t].hasAttribute("disabled")}function T(){m&&(ot("update"+k.tooltips),m.forEach((function(t){t&&l(t)})),m=null)}function B(){T(),m=a.map(H),nt("update"+k.tooltips,(function(t,r,i){if(m&&e.tooltips&&!1!==m[r]){var n=t[r];!0!==e.tooltips[r]&&(n=e.tooltips[r].to(i[r])),m[r].innerHTML=n}}))}function _(t,e){return t.map((function(t){return A.fromStepping(e?A.getStep(t):t)}))}function $(t){var e,r=function(t){if(t.mode===n.Range||t.mode===n.Steps)return A.xVal;if(t.mode===n.Count){if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var e=t.values-1,r=100/e,i=[];e--;)i[e]=e*r;return i.push(100),_(i,t.stepped)}return t.mode===n.Positions?_(t.values,t.stepped):t.mode===n.Values?t.stepped?t.values.map((function(t){return A.fromStepping(A.getStep(A.toStepping(t)))})):t.values:[]}(t),i={},a=A.xVal[0],s=A.xVal[A.xVal.length-1],l=!1,u=!1,c=0;return e=r.slice().sort((function(t,e){return t-e})),(r=e.filter((function(t){return!this[t]&&(this[t]=!0)}),{}))[0]!==a&&(r.unshift(a),l=!0),r[r.length-1]!==s&&(r.push(s),u=!0),r.forEach((function(e,a){var s,p,d,f,h,m,v,g,b,y,S=e,x=r[a+1],w=t.mode===n.Steps;for(w&&(s=A.xNumSteps[a]),s||(s=x-S),void 0===x&&(x=S),s=Math.max(s,1e-7),p=S;p<=x;p=Number((p+s).toFixed(7))){for(g=(h=(f=A.toStepping(p))-c)/(t.density||1),y=h/(b=Math.round(g)),d=1;d<=b;d+=1)i[(m=c+d*y).toFixed(5)]=[A.fromStepping(m),0];v=r.indexOf(p)>-1?o.LargeValue:w?o.SmallValue:o.NoValue,!a&&l&&p!==x&&(v=0),p===x&&u||(i[f.toFixed(5)]=[p,v]),c=f}})),i}function X(t,r,i){var n,a,s=U.createElement("div"),l=((n={})[o.None]="",n[o.NoValue]=e.cssClasses.valueNormal,n[o.LargeValue]=e.cssClasses.valueLarge,n[o.SmallValue]=e.cssClasses.valueSub,n),u=((a={})[o.None]="",a[o.NoValue]=e.cssClasses.markerNormal,a[o.LargeValue]=e.cssClasses.markerLarge,a[o.SmallValue]=e.cssClasses.markerSub,a),c=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],p=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];function d(t,r){var i=r===e.cssClasses.value,n=i?l:u;return r+" "+(i?c:p)[e.ort]+" "+n[t]}return v(s,e.cssClasses.pips),v(s,0===e.ort?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical),Object.keys(t).forEach((function(n){!function(t,n,a){if((a=r?r(n,a):a)!==o.None){var l=j(s,!1);l.className=d(a,e.cssClasses.marker),l.style[e.style]=t+"%",a>o.NoValue&&((l=j(s,!1)).className=d(a,e.cssClasses.value),l.setAttribute("data-value",String(n)),l.style[e.style]=t+"%",l.innerHTML=String(i.to(n)))}}(n,t[n][0],t[n][1])})),s}function Y(){p&&(l(p),p=null)}function I(t){Y();var e=$(t),r=t.filter,i=t.format||{to:function(t){return String(Math.round(t))}};return p=E.appendChild(X(e,r,i))}function W(){var t=i.getBoundingClientRect(),r="offset"+["Width","Height"][e.ort];return 0===e.ort?t.width||i[r]:t.height||i[r]}function G(t,r,i,n){var o=function(o){var a,s,l=function(t,e,r){var i=0===t.type.indexOf("touch"),n=0===t.type.indexOf("mouse"),o=0===t.type.indexOf("pointer"),a=0,s=0;0===t.type.indexOf("MSPointer")&&(o=!0);if("mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(i){var l=function(e){var i=e.target;return i===r||r.contains(i)||t.composed&&t.composedPath().shift()===r};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(u.length>1)return!1;a=u[0].pageX,s=u[0].pageY}else{var c=Array.prototype.find.call(t.changedTouches,l);if(!c)return!1;a=c.pageX,s=c.pageY}}e=e||b(U),(n||o)&&(a=t.clientX+e.x,s=t.clientY+e.y);return t.pageOffset=e,t.points=[a,s],t.cursor=n||o,t}(o,n.pageOffset,n.target||r);return!!l&&(!(q()&&!n.doNotReject)&&(a=E,s=e.cssClasses.tap,!((a.classList?a.classList.contains(s):new RegExp("\\b"+s+"\\b").test(a.className))&&!n.doNotReject)&&(!(t===x.start&&void 0!==l.buttons&&l.buttons>1)&&((!n.hover||!l.buttons)&&(w||l.preventDefault(),l.calcPoint=l.points[e.ort],void i(l,n))))))},a=[];return t.split(" ").forEach((function(t){r.addEventListener(t,o,!!w&&{passive:!0}),a.push([t,o])})),a}function J(t){var r,n,o,a,s,l,u=100*(t-(r=i,n=e.ort,o=r.getBoundingClientRect(),a=r.ownerDocument,s=a.documentElement,l=b(a),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(l.x=0),n?o.top+l.y-s.clientTop:o.left+l.x-s.clientLeft))/W();return u=f(u),e.dir?100-u:u}function K(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&tt(t,e)}function Z(t,r){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==r.buttonsProperty)return tt(t,r);var i=(e.dir?-1:1)*(t.calcPoint-r.startCalcPoint);ut(i>0,100*i/r.baseSize,r.locations,r.handleNumbers,r.connect)}function tt(t,r){r.handle&&(g(r.handle,e.cssClasses.active),P-=1),r.listeners.forEach((function(t){M.removeEventListener(t[0],t[1])})),0===P&&(g(E,e.cssClasses.drag),pt(),t.cursor&&(O.style.cursor="",O.removeEventListener("selectstart",c))),e.events.smoothSteps&&(r.handleNumbers.forEach((function(t){dt(t,C[t],!0,!0,!1,!1)})),r.handleNumbers.forEach((function(t){at("update",t)}))),r.handleNumbers.forEach((function(t){at("change",t),at("set",t),at("end",t)}))}function et(t,r){if(!r.handleNumbers.some(R)){var i;if(1===r.handleNumbers.length)i=a[r.handleNumbers[0]].children[0],P+=1,v(i,e.cssClasses.active);t.stopPropagation();var n=[],o=G(x.move,M,Z,{target:t.target,handle:i,connect:r.connect,listeners:n,startCalcPoint:t.calcPoint,baseSize:W(),pageOffset:t.pageOffset,handleNumbers:r.handleNumbers,buttonsProperty:t.buttons,locations:C.slice()}),s=G(x.end,M,tt,{target:t.target,handle:i,listeners:n,doNotReject:!0,handleNumbers:r.handleNumbers}),l=G("mouseout",M,K,{target:t.target,handle:i,listeners:n,doNotReject:!0,handleNumbers:r.handleNumbers});n.push.apply(n,o.concat(s,l)),t.cursor&&(O.style.cursor=getComputedStyle(t.target).cursor,a.length>1&&v(E,e.cssClasses.drag),O.addEventListener("selectstart",c,!1)),r.handleNumbers.forEach((function(t){at("start",t)}))}}function rt(t){t.stopPropagation();var r=J(t.calcPoint),i=function(t){var e=100,r=!1;return a.forEach((function(i,n){if(!R(n)){var o=C[n],a=Math.abs(o-t);(a<e||a<=e&&t>o||100===a&&100===e)&&(r=n,e=a)}})),r}(r);!1!==i&&(e.events.snap||d(E,e.cssClasses.tap,e.animationDuration),dt(i,r,!0,!0),pt(),at("slide",i,!0),at("update",i,!0),e.events.snap?et(t,{handleNumbers:[i]}):(at("change",i,!0),at("set",i,!0)))}function it(t){var e=J(t.calcPoint),r=A.getStep(e),i=A.fromStepping(r);Object.keys(L).forEach((function(t){"hover"===t.split(".")[0]&&L[t].forEach((function(t){t.call(bt,i)}))}))}function nt(t,e){L[t]=L[t]||[],L[t].push(e),"update"===t.split(".")[0]&&a.forEach((function(t,e){at("update",e)}))}function ot(t){var e=t&&t.split(".")[0],r=e?t.substring(e.length):t;Object.keys(L).forEach((function(t){var i=t.split(".")[0],n=t.substring(i.length);e&&e!==i||r&&r!==n||function(t){return t===k.aria||t===k.tooltips}(n)&&r!==n||delete L[t]}))}function at(t,r,i){Object.keys(L).forEach((function(n){var o=n.split(".")[0];t===o&&L[n].forEach((function(t){t.call(bt,N.map(e.format.to),r,N.slice(),i||!1,C.slice(),bt)}))}))}function st(t,r,i,n,o,s,l){var u;return a.length>1&&!e.events.unconstrained&&(n&&r>0&&(u=A.getAbsoluteDistance(t[r-1],e.margin,!1),i=Math.max(i,u)),o&&r<a.length-1&&(u=A.getAbsoluteDistance(t[r+1],e.margin,!0),i=Math.min(i,u))),a.length>1&&e.limit&&(n&&r>0&&(u=A.getAbsoluteDistance(t[r-1],e.limit,!1),i=Math.min(i,u)),o&&r<a.length-1&&(u=A.getAbsoluteDistance(t[r+1],e.limit,!0),i=Math.max(i,u))),e.padding&&(0===r&&(u=A.getAbsoluteDistance(0,e.padding[0],!1),i=Math.max(i,u)),r===a.length-1&&(u=A.getAbsoluteDistance(100,e.padding[1],!0),i=Math.min(i,u))),l||(i=A.getStep(i)),!((i=f(i))===t[r]&&!s)&&i}function lt(t,r){var i=e.ort;return(i?r:t)+", "+(i?t:r)}function ut(t,r,i,n,o){var a=i.slice(),s=n[0],l=e.events.smoothSteps,u=[!t,t],c=[t,!t];n=n.slice(),t&&n.reverse(),n.length>1?n.forEach((function(t,e){var i=st(a,t,a[t]+r,u[e],c[e],!1,l);!1===i?r=0:(r=i-a[t],a[t]=i)})):u=c=[!0];var p=!1;n.forEach((function(t,e){p=dt(t,i[t]+r,u[e],c[e],!1,l)||p})),p&&(n.forEach((function(t){at("update",t),at("slide",t)})),null!=o&&at("drag",s))}function ct(t,r){return e.dir?100-t-r:t}function pt(){V.forEach((function(t){var e=C[t]>50?-1:1,r=3+(a.length+e*t);a[t].style.zIndex=String(r)}))}function dt(t,r,i,n,o,s){return o||(r=st(C,t,r,i,n,!1,s)),!1!==r&&(function(t,r){C[t]=r,N[t]=A.fromStepping(r);var i="translate("+lt(ct(r,0)-D+"%","0")+")";a[t].style[e.transformRule]=i,ft(t),ft(t+1)}(t,r),!0)}function ft(t){if(s[t]){var r=0,i=100;0!==t&&(r=C[t-1]),t!==s.length-1&&(i=C[t]);var n=i-r,o="translate("+lt(ct(r,n)+"%","0")+")",a="scale("+lt(n/100,"1")+")";s[t].style[e.transformRule]=o+" "+a}}function ht(t,r){return null===t||!1===t||void 0===t?C[r]:("number"==typeof t&&(t=String(t)),!1!==(t=e.format.from(t))&&(t=A.toStepping(t)),!1===t||isNaN(t)?C[r]:t)}function mt(t,r,i){var n=h(t),o=void 0===C[0];r=void 0===r||r,e.animate&&!o&&d(E,e.cssClasses.tap,e.animationDuration),V.forEach((function(t){dt(t,ht(n[t],t),!0,!1,i)}));var a=1===V.length?0:1;if(o&&A.hasNoSize()&&(i=!0,C[0]=0,V.length>1)){var s=100/(V.length-1);V.forEach((function(t){C[t]=t*s}))}for(;a<V.length;++a)V.forEach((function(t){dt(t,C[t],!0,!0,i)}));pt(),V.forEach((function(t){at("update",t),null!==n[t]&&r&&at("set",t)}))}function vt(t){if(void 0===t&&(t=!1),t)return 1===N.length?N[0]:N.slice(0);var r=N.map(e.format.to);return 1===r.length?r[0]:r}function gt(t){var r=C[t],i=A.getNearbySteps(r),n=N[t],o=i.thisStep.step,a=null;if(e.snap)return[n-i.stepBefore.startValue||null,i.stepAfter.startValue-n||null];!1!==o&&n+o>i.stepAfter.startValue&&(o=i.stepAfter.startValue-n),a=n>i.thisStep.startValue?i.thisStep.step:!1!==i.stepBefore.step&&n-i.stepBefore.highestStep,100===r?o=null:0===r&&(a=null);var s=A.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(s))),null!==a&&!1!==a&&(a=Number(a.toFixed(s))),[a,o]}v(y=E,e.cssClasses.target),0===e.dir?v(y,e.cssClasses.ltr):v(y,e.cssClasses.rtl),0===e.ort?v(y,e.cssClasses.horizontal):v(y,e.cssClasses.vertical),v(y,"rtl"===getComputedStyle(y).direction?e.cssClasses.textDirectionRtl:e.cssClasses.textDirectionLtr),i=j(y,e.cssClasses.base),function(t,r){var i=j(r,e.cssClasses.connects);a=[],(s=[]).push(z(i,t[0]));for(var n=0;n<e.handles;n++)a.push(F(r,n)),V[n]=n,s.push(z(i,t[n+1]))}(e.connect,i),(S=e.events).fixed||a.forEach((function(t,e){G(x.start,t.children[0],et,{handleNumbers:[e]})})),S.tap&&G(x.start,i,rt,{}),S.hover&&G(x.move,i,it,{hover:!0}),S.drag&&s.forEach((function(t,r){if(!1!==t&&0!==r&&r!==s.length-1){var i=a[r-1],n=a[r],o=[t],l=[i,n],u=[r-1,r];v(t,e.cssClasses.draggable),S.fixed&&(o.push(i.children[0]),o.push(n.children[0])),S.dragAll&&(l=a,u=V),o.forEach((function(e){G(x.start,e,et,{handles:l,handleNumbers:u,connect:t})}))}})),mt(e.start),e.pips&&I(e.pips),e.tooltips&&B(),ot("update"+k.aria),nt("update"+k.aria,(function(t,r,i,n,o){V.forEach((function(t){var r=a[t],n=st(C,t,0,!0,!0,!0),s=st(C,t,100,!0,!0,!0),l=o[t],u=String(e.ariaFormat.to(i[t]));n=A.fromStepping(n).toFixed(1),s=A.fromStepping(s).toFixed(1),l=A.fromStepping(l).toFixed(1),r.children[0].setAttribute("aria-valuemin",n),r.children[0].setAttribute("aria-valuemax",s),r.children[0].setAttribute("aria-valuenow",l),r.children[0].setAttribute("aria-valuetext",u)}))}));var bt={destroy:function(){for(ot(k.aria),ot(k.tooltips),Object.keys(e.cssClasses).forEach((function(t){g(E,e.cssClasses[t])}));E.firstChild;)E.removeChild(E.firstChild);delete E.noUiSlider},steps:function(){return V.map(gt)},on:nt,off:ot,get:vt,set:mt,setHandle:function(t,e,r,i){if(!((t=Number(t))>=0&&t<V.length))throw new Error("noUiSlider: invalid handle number, got: "+t);dt(t,ht(e,t),!0,!0,i),at("update",t),r&&at("set",t)},reset:function(t){mt(e.start,t)},disable:function(t){null!=t?(a[t].setAttribute("disabled",""),a[t].handle.removeAttribute("tabindex")):(E.setAttribute("disabled",""),a.forEach((function(t){t.handle.removeAttribute("tabindex")})))},enable:function(t){null!=t?(a[t].removeAttribute("disabled"),a[t].handle.setAttribute("tabindex","0")):(E.removeAttribute("disabled"),a.forEach((function(t){t.removeAttribute("disabled"),t.handle.setAttribute("tabindex","0")})))},__moveHandles:function(t,e,r){ut(t,e,C,r)},options:r,updateOptions:function(t,i){var n=vt(),o=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];o.forEach((function(e){void 0!==t[e]&&(r[e]=t[e])}));var a=Q(r);o.forEach((function(r){void 0!==t[r]&&(e[r]=a[r])})),A=a.spectrum,e.margin=a.margin,e.limit=a.limit,e.padding=a.padding,e.pips?I(e.pips):Y(),e.tooltips?B():T(),C=[],mt(u(t.start)?t.start:n,i)},target:E,removePips:Y,removeTooltips:T,getPositions:function(){return C.slice()},getTooltips:function(){return m},getOrigins:function(){return a},pips:I};return bt}var tt={__spectrum:A,cssClasses:C,create:function(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var r=Z(t,Q(e),e);return t.noUiSlider=r,r}};function et(t,e){if(!Array.isArray(t)||!Array.isArray(e))return!1;const r=e.slice().sort();return t.length===e.length&&t.slice().sort().every((function(t,e){return t===r[e]}))}var rt={name:"Slider",emits:["input","update:modelValue","start","slide","drag","update","change","set","end"],props:{...{value:{validator:function(t){return t=>"number"==typeof t||t instanceof Array||null==t||!1===t},required:!1},modelValue:{validator:function(t){return t=>"number"==typeof t||t instanceof Array||null==t||!1===t},required:!1}},id:{type:[String,Number],required:!1},disabled:{type:Boolean,required:!1,default:!1},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},step:{type:Number,required:!1,default:1},orientation:{type:String,required:!1,default:"horizontal"},direction:{type:String,required:!1,default:"ltr"},tooltips:{type:Boolean,required:!1,default:!0},options:{type:Object,required:!1,default:()=>({})},merge:{type:Number,required:!1,default:-1},format:{type:[Object,Function,Boolean,Array],required:!1,default:null},classes:{type:Object,required:!1,default:()=>({})},showTooltip:{type:String,required:!1,default:"always"},tooltipPosition:{type:String,required:!1,default:null},lazy:{type:Boolean,required:!1,default:!0},ariaLabelledby:{type:String,required:!1,default:void 0},aria:{required:!1,type:Object,default:()=>({})}},setup(r,i){const n=function(r,i,n){const{value:o,modelValue:a,min:s}=t.toRefs(r);let l=a&&void 0!==a.value?a:o;const u=t.ref(l.value);if(e(l.value)&&(l=t.ref(s.value)),Array.isArray(l.value)&&0==l.value.length)throw new Error("Slider v-model must not be an empty array");return{value:l,initialValue:u}}(r),o=function(e,r,i){const{classes:n,showTooltip:o,tooltipPosition:a,orientation:s}=t.toRefs(e),l=t.computed((()=>({target:"slider-target",focused:"slider-focused",tooltipFocus:"slider-tooltip-focus",tooltipDrag:"slider-tooltip-drag",ltr:"slider-ltr",rtl:"slider-rtl",horizontal:"slider-horizontal",vertical:"slider-vertical",textDirectionRtl:"slider-txt-dir-rtl",textDirectionLtr:"slider-txt-dir-ltr",base:"slider-base",connects:"slider-connects",connect:"slider-connect",origin:"slider-origin",handle:"slider-handle",handleLower:"slider-handle-lower",handleUpper:"slider-handle-upper",touchArea:"slider-touch-area",tooltip:"slider-tooltip",tooltipTop:"slider-tooltip-top",tooltipBottom:"slider-tooltip-bottom",tooltipLeft:"slider-tooltip-left",tooltipRight:"slider-tooltip-right",tooltipHidden:"slider-tooltip-hidden",active:"slider-active",draggable:"slider-draggable",tap:"slider-state-tap",drag:"slider-state-drag",pips:"slider-pips",pipsHorizontal:"slider-pips-horizontal",pipsVertical:"slider-pips-vertical",marker:"slider-marker",markerHorizontal:"slider-marker-horizontal",markerVertical:"slider-marker-vertical",markerNormal:"slider-marker-normal",markerLarge:"slider-marker-large",markerSub:"slider-marker-sub",value:"slider-value",valueHorizontal:"slider-value-horizontal",valueVertical:"slider-value-vertical",valueNormal:"slider-value-normal",valueLarge:"slider-value-large",valueSub:"slider-value-sub",...n.value})));return{classList:t.computed((()=>{const t={...l.value};return Object.keys(t).forEach((e=>{t[e]=Array.isArray(t[e])?t[e].filter((t=>null!==t)).join(" "):t[e]})),"always"!==o.value&&(t.target+=` ${"drag"===o.value?t.tooltipDrag:t.tooltipFocus}`),"horizontal"===s.value&&(t.tooltip+="bottom"===a.value?` ${t.tooltipBottom}`:` ${t.tooltipTop}`),"vertical"===s.value&&(t.tooltip+="right"===a.value?` ${t.tooltipRight}`:` ${t.tooltipLeft}`),t}))}}(r),s=function(e,r,i){const{format:n,step:o}=t.toRefs(e),s=i.value,l=i.classList,u=t.computed((()=>n&&n.value?"function"==typeof n.value?{to:n.value}:Array.isArray(n.value)?n.value.map((t=>({to:t}))):a({...n.value}):a({decimals:o.value>=0?0:2}))),c=t.computed((()=>Array.isArray(u.value)&&Array.isArray(s.value)?s.value.map(((t,e)=>u.value[e]||u.value[0])):Array.isArray(s.value)?s.value.map((t=>u.value)):u.value));return{tooltipFormat:u,tooltipsFormat:c,tooltipsMerge:(t,e,r)=>{var i="rtl"===getComputedStyle(t).direction,n="rtl"===t.noUiSlider.options.direction,o="vertical"===t.noUiSlider.options.orientation,a=t.noUiSlider.getTooltips(),s=t.noUiSlider.getOrigins();a.forEach((function(t,e){t&&s[e].appendChild(t)})),t.noUiSlider.on("update",(function(t,s,c,p,d){var f=[[]],h=[[]],m=[[]],v=0;a[0]&&(f[0][0]=0,h[0][0]=d[0],Array.isArray(u.value)?m[0][0]=u.value[0].to(parseFloat(t[0])):m[0][0]=u.value.to(parseFloat(t[0])));for(var g=1;g<t.length;g++)(!a[g]||t[g]-t[g-1]>e)&&(f[++v]=[],m[v]=[],h[v]=[]),a[g]&&(f[v].push(g),Array.isArray(u.value)?m[v].push(u.value[g].to(parseFloat(t[g]))):m[v].push(u.value.to(parseFloat(t[g]))),h[v].push(d[g]));f.forEach((function(t,e){for(var s=t.length,u=0;u<s;u++){var c=t[u];if(u===s-1){var p=0;h[e].forEach((function(t){p+=1e3-t}));var d=o?"bottom":"right",f=n?0:s-1,v=1e3-h[e][f];p=(i&&!o?100:0)+p/s-v,a[c].innerHTML=m[e].join(r),a[c].style.display="block",a[c].style[d]=p+"%",a[c].classList.remove("slider-tooltip--merged"),m[e].length>1&&a[c].classList.add("slider-tooltip--merged"),l.value.tooltipHidden.split(" ").forEach((t=>{a[c].classList.contains(t)&&a[c].classList.remove(t)}))}else a[c].style.display="none",l.value.tooltipHidden.split(" ").forEach((t=>{a[c].classList.add(t)}))}}))}))}}}(r,0,{value:n.value,classList:o.classList}),l=function(r,i,n){const{orientation:o,direction:a,tooltips:s,step:l,min:u,max:c,merge:p,id:d,disabled:f,options:h,classes:m,format:v,lazy:g,ariaLabelledby:b,aria:y}=t.toRefs(r),S=n.value,x=n.initialValue,w=n.tooltipsFormat,E=n.tooltipsMerge;n.tooltipFormat;const A=n.classList,N=t.ref(null),C=t.ref(null),k=t.ref(!1),V=t.computed((()=>{let t={cssPrefix:"",cssClasses:A.value,orientation:o.value,direction:a.value,tooltips:!!s.value&&w.value,connect:"lower",start:e(S.value)?u.value:S.value,range:{min:u.value,max:c.value}};if(l.value>0&&(t.step=l.value),Array.isArray(S.value)&&(t.connect=!0),b&&b.value||y&&Object.keys(y.value).length){let e=Array.isArray(S.value)?S.value:[S.value];t.handleAttributes=e.map((t=>Object.assign({},y.value,b&&b.value?{"aria-labelledby":b.value}:{})))}return v.value,t})),P=t.computed((()=>{let t={id:d&&d.value?d.value:void 0};return f.value&&(t.disabled=!0),t})),L=t.computed((()=>Array.isArray(S.value))),U=()=>{let t=C.value.get();return Array.isArray(t)?t.map((t=>parseFloat(t))):parseFloat(t)},M=function(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];C.value.set(t,e)},O=t=>{i.emit("input",t),i.emit("update:modelValue",t),i.emit("update",t)},D=()=>{C.value=tt.create(N.value,Object.assign({},V.value,h.value)),s.value&&L.value&&p.value>=0&&E(N.value,p.value," - "),C.value.on("set",(()=>{const t=U();i.emit("change",t),i.emit("set",t),g.value&&O(t)})),C.value.on("update",(()=>{if(!k.value)return;const t=U();L.value&&et(S.value,t)||!L.value&&S.value==t?i.emit("update",t):g.value||O(t)})),C.value.on("start",(()=>{i.emit("start",U())})),C.value.on("end",(()=>{i.emit("end",U())})),C.value.on("slide",(()=>{i.emit("slide",U())})),C.value.on("drag",(()=>{i.emit("drag",U())})),N.value.querySelectorAll("[data-handle]").forEach((t=>{t.onblur=()=>{N.value&&A.value.focused.split(" ").forEach((t=>{N.value.classList.remove(t)}))},t.onfocus=()=>{A.value.focused.split(" ").forEach((t=>{N.value.classList.add(t)}))}})),k.value=!0},j=()=>{C.value.off(),C.value.destroy(),C.value=null},F=(t,e)=>{k.value=!1,j(),D()};return t.onMounted(D),t.onUnmounted(j),t.watch(L,F,{immediate:!1}),t.watch(u,F,{immediate:!1}),t.watch(c,F,{immediate:!1}),t.watch(l,F,{immediate:!1}),t.watch(o,F,{immediate:!1}),t.watch(a,F,{immediate:!1}),t.watch(s,F,{immediate:!1}),t.watch(p,F,{immediate:!1}),t.watch(v,F,{immediate:!1,deep:!0}),t.watch(h,F,{immediate:!1,deep:!0}),t.watch(m,F,{immediate:!1,deep:!0}),t.watch(S,((t,r)=>{r&&("object"==typeof r&&"object"==typeof t&&t&&Object.keys(r)>Object.keys(t)||"object"==typeof r&&"object"!=typeof t||e(t))&&F()}),{immediate:!1}),t.watch(S,(t=>{if(e(t))return void M(u.value,!1);let r=U();L.value&&!Array.isArray(r)&&(r=[r]),(L.value&&!et(t,r)||!L.value&&t!=r)&&M(t,!1)}),{deep:!0}),{slider:N,slider$:C,isRange:L,sliderProps:P,init:D,destroy:j,refresh:F,update:M,reset:()=>{O(x.value)}}}(r,i,{value:n.value,initialValue:n.initialValue,tooltipFormat:s.tooltipFormat,tooltipsFormat:s.tooltipsFormat,tooltipsMerge:s.tooltipsMerge,classList:o.classList});return{...o,...s,...l}}};return rt.render=function(e,r,i,n,o,a){return t.openBlock(),t.createElementBlock("div",t.mergeProps(e.sliderProps,{ref:"slider"}),null,16)},rt.__file="src/Slider.vue",rt}(Vue);
