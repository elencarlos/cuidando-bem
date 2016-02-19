(function(e,t){"use strict";typeof define=="function"&&define.amd?define(t):typeof exports!="undefined"?module.exports=t():e.simpleStorage=t()})(this,function(){"use strict";function s(){window.localStorage.setItem("__simpleStorageInitTest","tmpval"),window.localStorage.removeItem("__simpleStorageInitTest"),a(),c(),o(),"addEventListener"in window&&window.addEventListener("pageshow",function(e){e.persisted&&u()},!1),r=!0}function o(){"addEventListener"in window?window.addEventListener("storage",u,!1):document.attachEvent("onstorage",u)}function u(){try{a()}catch(e){r=!1;return}c()}function a(){var e=localStorage.getItem("simpleStorage");try{t=JSON.parse(e)||{}}catch(r){t={}}n=l()}function f(){try{localStorage.setItem("simpleStorage",JSON.stringify(t)),n=l()}catch(e){return e}return!0}function l(){var e=localStorage.getItem("simpleStorage");return e?String(e).length:0}function c(){var e,n,r,s,o,u=Infinity,a=0;clearTimeout(i);if(!t||!t.__simpleStorage_meta||!t.__simpleStorage_meta.TTL)return;e=+(new Date),o=t.__simpleStorage_meta.TTL.keys||[],s=t.__simpleStorage_meta.TTL.expire||{};for(n=0,r=o.length;n<r;n++){if(!(s[o[n]]<=e)){s[o[n]]<u&&(u=s[o[n]]);break}a++,delete t[o[n]],delete s[o[n]]}u!==Infinity&&(i=setTimeout(c,Math.min(u-e,2147483647))),a&&(o.splice(0,a),p(),f())}function h(e,n){var r=+(new Date),s,o,u=!1;n=Number(n)||0;if(n!==0){if(!t.hasOwnProperty(e))return!1;t.__simpleStorage_meta||(t.__simpleStorage_meta={}),t.__simpleStorage_meta.TTL||(t.__simpleStorage_meta.TTL={expire:{},keys:[]}),t.__simpleStorage_meta.TTL.expire[e]=r+n;if(t.__simpleStorage_meta.TTL.expire.hasOwnProperty(e))for(s=0,o=t.__simpleStorage_meta.TTL.keys.length;s<o;s++)t.__simpleStorage_meta.TTL.keys[s]===e&&t.__simpleStorage_meta.TTL.keys.splice(s);for(s=0,o=t.__simpleStorage_meta.TTL.keys.length;s<o;s++)if(t.__simpleStorage_meta.TTL.expire[t.__simpleStorage_meta.TTL.keys[s]]>r+n){t.__simpleStorage_meta.TTL.keys.splice(s,0,e),u=!0;break}u||t.__simpleStorage_meta.TTL.keys.push(e)}else if(t&&t.__simpleStorage_meta&&t.__simpleStorage_meta.TTL){if(t.__simpleStorage_meta.TTL.expire.hasOwnProperty(e)){delete t.__simpleStorage_meta.TTL.expire[e];for(s=0,o=t.__simpleStorage_meta.TTL.keys.length;s<o;s++)if(t.__simpleStorage_meta.TTL.keys[s]===e){t.__simpleStorage_meta.TTL.keys.splice(s,1);break}}p()}return clearTimeout(i),t&&t.__simpleStorage_meta&&t.__simpleStorage_meta.TTL&&t.__simpleStorage_meta.TTL.keys.length&&(i=setTimeout(c,Math.min(Math.max(t.__simpleStorage_meta.TTL.expire[t.__simpleStorage_meta.TTL.keys[0]]-r,0),2147483647))),!0}function p(){var e=!1,n=!1,r;if(!t||!t.__simpleStorage_meta)return e;t.__simpleStorage_meta.TTL&&!t.__simpleStorage_meta.TTL.keys.length&&(delete t.__simpleStorage_meta.TTL,e=!0);for(r in t.__simpleStorage_meta)if(t.__simpleStorage_meta.hasOwnProperty(r)){n=!0;break}return n||(delete t.__simpleStorage_meta,e=!0),e}var e="0.1.4",t=!1,n=0,r=!1,i=null;try{s()}catch(d){}return{version:e,canUse:function(){return!!r},set:function(e,n,r){if(e==="__simpleStorage_meta")return!1;if(!t)return!1;if(typeof n=="undefined")return this.deleteKey(e);r=r||{};try{n=JSON.parse(JSON.stringify(n))}catch(i){return i}return t[e]=n,h(e,r.TTL||0),f()},get:function(e){if(!t)return!1;if(t.hasOwnProperty(e)&&e!=="__simpleStorage_meta"&&this.getTTL(e))return t[e]},deleteKey:function(e){return t?e in t?(delete t[e],h(e,0),f()):!1:!1},setTTL:function(e,n){return t?(h(e,n),f()):!1},getTTL:function(e){var n;return t?t.hasOwnProperty(e)?t.__simpleStorage_meta&&t.__simpleStorage_meta.TTL&&t.__simpleStorage_meta.TTL.expire&&t.__simpleStorage_meta.TTL.expire.hasOwnProperty(e)?(n=Math.max(t.__simpleStorage_meta.TTL.expire[e]- +(new Date)||0,0),n||!1):Infinity:!1:!1},flush:function(){if(!t)return!1;t={};try{return localStorage.removeItem("simpleStorage"),!0}catch(e){return e}},index:function(){if(!t)return!1;var e=[],n;for(n in t)t.hasOwnProperty(n)&&n!=="__simpleStorage_meta"&&e.push(n);return e},storageSize:function(){return n}}});