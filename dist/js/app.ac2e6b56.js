(function(e){function t(t){for(var r,u,i=t[0],c=t[1],l=t[2],s=0,p=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"834f5100"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0056":function(e,t,n){"use strict";var r=n("703f"),o=n.n(r);o.a},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"206c":function(e,t,n){"use strict";var r=n("32d9"),o=n.n(r);o.a},"32d9":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("h1",[e._v("David Petringa")]),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("| "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)])},i=[],c={name:"Header"},l=c,s=(n("0056"),n("2877")),f=Object(s["a"])(l,u,i,!1,null,"536cf16c",null),p=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("| "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)])},v=[],m={name:"Footer"},h=m,b=(n("206c"),Object(s["a"])(h,d,v,!1,null,"7c87117a",null)),_=b.exports,g={name:"app",components:{Header:p,Footer:_}},y=g,j=(n("034f"),Object(s["a"])(y,o,a,!1,null,null,null)),w=j.exports,O=(n("d3b7"),n("8c4f")),x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("MainContent")],1)},P=[],k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Something very cool and coded with Vue.js is coming soon !")])])}],C={name:"MainContent"},M=C,$=Object(s["a"])(M,k,E,!1,null,null,null),S=$.exports,H={name:"home",components:{MainContent:S}},T=H,A=Object(s["a"])(T,x,P,!1,null,null,null),F=A.exports;r["a"].use(O["a"]);var J=[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],L=new O["a"]({routes:J}),V=L;r["a"].config.productionTip=!1,new r["a"]({router:V,render:function(e){return e(w)}}).$mount("#app")},"703f":function(e,t,n){},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.ac2e6b56.js.map