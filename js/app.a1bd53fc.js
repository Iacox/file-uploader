(function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],f=0,p=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(t);while(p.length)p.shift()();return u.push.apply(u,l||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2ea211e0":"4967f5c8"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=a(e);var l=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+u+")",l.name="ChunkLoadError",l.type=n,l.request=u,r[1](l)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var s=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2fb4":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("2fb4");var n=r("2b0e"),o=r("97a3"),u=r.n(o),a=(r("d3b7"),r("8c4f"));n["default"].use(a["a"]);var i=[{path:"/",name:"FileUploader",component:function(){return r.e("chunk-2ea211e0").then(r.bind(null,"02e0"))}}],c=new a["a"]({mode:"history",base:"/",routes:i}),l=c,f=r("2f62");n["default"].use(f["a"]);var s=new f["a"].Store({state:{},mutations:{},actions:{},modules:{}}),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("q-row",{attrs:{tag:"header"}},[r("q-col",{attrs:{offset:"4",cols:"4"}},[r("h1",[e._v("File uploader")])])],1),r("router-view")],1)},d=[],h=r("2877"),v={},b=Object(h["a"])(v,p,d,!1,null,null,null),m=b.exports;n["default"].config.productionTip=!1,n["default"].use(u.a),new n["default"]({router:l,store:s,render:function(e){return e(m)}}).$mount("#app")}});
//# sourceMappingURL=app.a1bd53fc.js.map