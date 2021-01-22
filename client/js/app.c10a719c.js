(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[t._v("AppName")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v(" Login ")])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("bc3a"),c=a.n(l),u=a("335d"),p={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user),this.$store.dispatch("getProfile")},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},f=p,h=a("2877"),d=Object(h["a"])(f,s,i,!1,null,null,null),v=d.exports,b={name:"App",async beforeCreate(){await Object(u["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:v}},m=b,g=Object(h["a"])(m,n,o,!1,null,null,null),_=g.exports,w=a("8c4f"),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),r("h1",[t._v("Welcome to Your Vue.js App")])])}],C={name:"home"},P=C,x=Object(h["a"])(P,y,$,!1,null,null,null),j=x.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about text-center"},[a("h1",[t._v("Welcome "+t._s(t.profile.name))]),a("img",{staticClass:"rounded",attrs:{src:t.profile.picture,alt:""}}),a("p",[t._v(t._s(t.profile.email))])])},k=[],E={name:"Profile",computed:{profile(){return this.$store.state.profile}}},H=E,T=(a("976b"),Object(h["a"])(H,O,k,!1,null,"32d06450",null)),A=T.exports;r["a"].use(w["a"]);const B=[{path:"/",name:"Home",component:j},{path:"/profile",name:"Profile",component:A,beforeEnter:u["b"]}],S=new w["a"]({routes:B});var M=S,z=a("2f62");r["a"].use(z["a"]);let J=location.host.includes("localhost")?"http://localhost:3000/":"/",N=c.a.create({baseURL:J+"api",timeout:3e3,withCredentials:!0});var U=new z["a"].Store({state:{profile:{}},mutations:{setProfile(t,e){t.profile=e}},actions:{setBearer({},t){N.defaults.headers.authorization=t},resetBearer(){N.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await N.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}}}});const W="troy-tenant.auth0.com",Y="https://troy-student.com",q="aJIq7rj4w39wYc7BHakp7HqYrF8zPd78";r["a"].use(u["a"],{domain:W,clientId:q,audience:Y,onRedirectCallback:t=>{M.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new r["a"]({router:M,store:U,render:function(t){return t(_)}}).$mount("#app")},"93a3":function(t,e,a){},"976b":function(t,e,a){"use strict";var r=a("93a3"),n=a.n(r);n.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});