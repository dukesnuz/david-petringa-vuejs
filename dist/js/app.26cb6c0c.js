(function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],s=0,f=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return l.p+"js/"+({"VuejsUploadToDigitalOcean.vue":"VuejsUploadToDigitalOcean.vue",about:"about"}[e]||e)+"."+{"VuejsUploadToDigitalOcean.vue":"6ae44da7",about:"834f5100"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"VuejsUploadToDigitalOcean.vue":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({"VuejsUploadToDigitalOcean.vue":"VuejsUploadToDigitalOcean.vue",about:"about"}[e]||e)+"."+{"VuejsUploadToDigitalOcean.vue":"124e0ef6",about:"31d6cfe0"}[e]+".css",a=l.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],s=c.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e);var f=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"016c":function(e,t,n){},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"281e":function(e,t,n){"use strict";var r=n("6a1b"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("h1",[e._v("David Petringa")]),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("| "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v("| "),n("router-link",{attrs:{to:"/blog/Vuejs-Upload-To-Digital-Ocean-With-Github"}},[e._v("Blog")])],1)])},i=[],l={name:"Header"},c=l,s=(n("d830"),n("2877")),f=Object(s["a"])(c,u,i,!1,null,"dcce69ce",null),d=f.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("div",{attrs:{id:"nav"}},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("li",[n("a",{attrs:{href:""+e.url,target:"blank"}},[e._v("Contact")])]),e._m(0)])])])},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._v("View the code on "),n("a",{attrs:{href:"https://github.com/dukesnuz/david-petringa-vuejs",target:"blank"}},[e._v("Github")])])}],h={name:"Footer",data:function(){return{url:"http://www.dukesnuz.com/contact/dukesnuz/david/petringa/"}}},m=h,g=(n("281e"),Object(s["a"])(m,p,v,!1,null,"70709848",null)),b=g.exports,_={name:"app",components:{Header:d,Footer:b}},j=_,y=(n("034f"),Object(s["a"])(j,o,a,!1,null,null,null)),O=y.exports,w=(n("d3b7"),n("8c4f")),T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("MainContent")],1)},k=[],E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Something very cool and coded with Vue.js is coming soon !")])])}],D={name:"MainContent"},V=D,x=Object(s["a"])(V,E,C,!1,null,null,null),U=x.exports,P={name:"home",components:{MainContent:U}},S=P,A=Object(s["a"])(S,T,k,!1,null,null,null),$=A.exports;r["a"].use(w["a"]);var M=[{path:"/",name:"home",component:$},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/blog/Vuejs-Upload-To-Digital-Ocean-With-Github",name:"blog/VuejsUploadToDigitalOcean",component:function(){return n.e("VuejsUploadToDigitalOcean.vue").then(n.bind(null,"861e"))}}],H=new w["a"]({routes:M}),L=H;r["a"].config.productionTip=!1,new r["a"]({router:L,render:function(e){return e(O)}}).$mount("#app")},"6a1b":function(e,t,n){},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d830:function(e,t,n){"use strict";var r=n("016c"),o=n.n(r);o.a}});
//# sourceMappingURL=app.26cb6c0c.js.map