(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],s=0,d=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({"VuejsUploadToDigitalOcean.vue":"VuejsUploadToDigitalOcean.vue",about:"about"}[e]||e)+"."+{"VuejsUploadToDigitalOcean.vue":"389e0c2b",about:"bb43629e"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"VuejsUploadToDigitalOcean.vue":1,about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({"VuejsUploadToDigitalOcean.vue":"VuejsUploadToDigitalOcean.vue",about:"about"}[e]||e)+"."+{"VuejsUploadToDigitalOcean.vue":"787ad339",about:"2331b061"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var l=u[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"016c":function(e,t,n){},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"0a47":function(e,t,n){"use strict";var r=n("168f"),o=n.n(r);o.a},"168f":function(e,t,n){},"3e27":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("h1",[e._v("David Petringa")]),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("| "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v("| "),n("router-link",{attrs:{to:"/blog/Vuejs-Upload-To-Digital-Ocean-With-Github"}},[e._v("Blog")])],1)])},i=[],c={name:"Header"},l=c,s=(n("d830"),n("2877")),d=Object(s["a"])(l,u,i,!1,null,"dcce69ce",null),f=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("div",{attrs:{id:"nav"}},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("li",[n("a",{attrs:{href:""+e.url,target:"blank"}},[e._v("Say Hello")])]),e._m(0)])]),n("div",{staticClass:"column_2"},[n("Duke")],1)])},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._v("View the code on "),n("a",{attrs:{href:"https://github.com/dukesnuz/david-petringa-vuejs",target:"blank"}},[e._v("Github")])])}],h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"soap"},[n("p",[e._v(" I recently discovered Duke Cannon ")]),n("p",[n("a",{attrs:{href:"https://dukecannon.com/?rfsn=3315585.912b22",target:"blank"}},[e._v("Check it out!")])]),n("p",[e._v(" I like the Big Ass Beer Soap ")])])}],b=(n("cc66"),{}),g=Object(s["a"])(b,h,m,!1,null,"55de9e83",null),_=g.exports,y={name:"Footer",components:{Duke:_},data:function(){return{url:"http://www.dukesnuz.com/contact/dukesnuz/david/petringa/"}}},j=y,O=(n("b41d"),Object(s["a"])(j,p,v,!1,null,"0a0e4b54",null)),k=O.exports,w={name:"app",components:{Header:f,Footer:k}},D=w,T=(n("034f"),Object(s["a"])(D,o,a,!1,null,null,null)),E=T.exports,C=(n("d3b7"),n("8c4f")),V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("MainContent")],1)},x=[],U=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Something very cool and coded with Vue.js is coming soon !")]),n("p",[e._v(" While you are waiting check out the tutorial on how to "),n("a",{attrs:{href:"./#/blog/Vuejs-Upload-To-Digital-Ocean-With-Github"}},[e._v("Deploy a Vue.js App to Digital Ocean Using Github")])])])}],P={name:"MainContent"},A=P,$=Object(s["a"])(A,U,S,!1,null,null,null),H=$.exports,M={name:"home",components:{MainContent:H}},B=M,G=(n("0a47"),Object(s["a"])(B,V,x,!1,null,"4d8a39de",null)),L=G.exports;r["a"].use(C["a"]);var N=[{path:"/",name:"home",component:L},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/blog/Vuejs-Upload-To-Digital-Ocean-With-Github",name:"blog/VuejsUploadToDigitalOcean",component:function(){return n.e("VuejsUploadToDigitalOcean.vue").then(n.bind(null,"861e"))}}],F=new C["a"]({routes:N}),W=F;r["a"].config.productionTip=!1,new r["a"]({router:W,render:function(e){return e(E)}}).$mount("#app")},"5d49":function(e,t,n){},"85ec":function(e,t,n){},b41d:function(e,t,n){"use strict";var r=n("5d49"),o=n.n(r);o.a},cc66:function(e,t,n){"use strict";var r=n("3e27"),o=n.n(r);o.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d830:function(e,t,n){"use strict";var r=n("016c"),o=n.n(r);o.a}});
//# sourceMappingURL=app.8011c87c.js.map