parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"WwaX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=i;var e=["Shift","Meta","Alt","Control"],t=1e3,n=/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"Meta":"Control";function r(e){return e.trim().split(" ").map(function(e){var t=e.split("+"),r=t.pop();return[t=t.map(function(e){return"$mod"===e?n:e}),r]})}function o(t,n){return!(n[1].toUpperCase()!==t.key.toUpperCase()&&n[1]!==t.code||n[0].find(function(e){return!t.getModifierState(e)})||e.find(function(e){return!n[0].includes(e)&&t.getModifierState(e)}))}function i(e,n){var i=Object.keys(n).map(function(e){return[r(e),n[e]]}),u=new Map,a=null,c=function(e){e.getModifierState(e.key)||(i.forEach(function(t){var n=t[0],r=t[1],i=u.get(n),a=i||n,c=a[0];o(e,c)?a.length>1?u.set(n,a.slice(1)):(u.delete(n),r(e)):u.delete(n)}),clearTimeout(a),a=setTimeout(u.clear.bind(u),t))};return e.addEventListener("keydown",c),function(){e.removeEventListener("keydown",c)}}
},{}],"zo2T":[function(require,module,exports) {
"use strict";var e=t(require("../src/tinykeys"));function t(e){return e&&e.__esModule?e:{default:e}}(0,e.default)(window,{"Shift+D":function(){alert("The 'Shift' and 'd' keys were pressed at the same time")},"y e e t":function(){alert("The keys 'y', 'e', 'e', and 't' were pressed in order")},"$mod+KeyD":function(){alert("Either 'Control+d' or 'Meta+d' were pressed")}});
},{"../src/tinykeys":"WwaX"}]},{},["zo2T"], null)
//# sourceMappingURL=example.c6fba8ae.js.map