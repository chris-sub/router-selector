(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"0a11":function(t,e,n){},"38e1":function(t,e,n){},4463:function(t,e,n){"use strict";var a=n("0a11"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navbar"),n("router-list")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-fixed"},[n("nav",{attrs:{role:"navigation"}},[n("div",{staticClass:"nav-wrapper container"},[t._m(0),n("transition",{attrs:{name:"fade"}},[t.scrollY>15?n("ul",{staticClass:"right"},[n("li",{staticClass:"hide-on-med-and-down"},[n("span",{staticClass:"scroll-top",on:{click:t.scrollToTop}},[t._v("SCROLL TO TOP")])]),n("li",{staticClass:"hide-on-med-and-up"},[n("span",{staticClass:"scroll-top",on:{click:t.scrollToTop}},[t._v("TOP")])])]):t._e()])],1)])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"brand-logo",attrs:{id:"logo-container",href:"#"}},[n("img",{attrs:{src:"img/logo.png",alt:"Judiciary Routers Logo"}})])}],l={data:function(){return{scrollY:0}},created:function(){window.addEventListener("scroll",this.handleScroll)},methods:{scrollToTop:function(){window.scrollTo(0,0)},handleScroll:function(){this.scrollY=window.scrollY}}},c=l,u=(n("4463"),n("2877")),p=Object(u["a"])(c,r,s,!1,null,"d85fb61e",null),d=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section no-pad-bot",attrs:{id:"index-banner"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row row-flex"},[n("div",{staticClass:"col s4"},[n("div",{staticClass:"summary"},[t._v("Showing "+t._s(t.filteredItems.length)+" items")])]),n("div",{staticClass:"input-field col s7 offset-s1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text"},domProps:{value:t.search},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.search=""},input:function(e){e.target.composing||(t.search=e.target.value)}}}),n("button",{staticClass:"suffix",on:{click:function(e){t.search=""}}},[n("img",{attrs:{src:"img/clear.png",alt:"Reset Search",title:"Reset"}})]),n("label",[t._v("Search")])])]),n("ul",{staticClass:"collection router-list"},t._l(t.filteredItems,(function(e){return n("li",{key:e.name,staticClass:"collection-item avatar"},[n("a",{staticClass:"collection-item",attrs:{href:"https://"+e.ip+"/ng/page/p/user/guest/list/",target:"_blank"}},[n("img",{staticClass:"tile",attrs:{src:"img/forticlient.png",alt:""}}),n("div",[n("div",{staticClass:"router-title"},[t._v(t._s(e.name))]),n("p",{staticClass:"location"},[t._v(t._s(e.location))])]),n("div",{staticClass:"secondary-content green-text text-darken-2"},[t._v(" "+t._s(e.ip)+" ")])])])})),0)])])},m=[],v=(n("4de4"),n("caad"),n("b0c0"),n("2532"),n("841c"),{data:function(){return{search:null,list:[{name:"IT Building",location:"102 St. Vincent, Port of Spain",ip:"172.0.0.1"},{name:"Hall of Justice",location:"Knox Street, Port of Spain",ip:"172.16.71.1"},{name:"San Fernando Old Magistrate",location:"San Fernando",ip:"10.22.0.1"},{name:"San Fernando",location:"San Fernando",ip:"10.1.0.1"},{name:"Family Court",location:"San Fernando",ip:"10.3.0.1"},{name:"Port of Spain Magistrates Court",location:"St. George West, Port of Spain",ip:"10.4.0.1"},{name:"Arouca",location:"Arouca",ip:"10.35.0.1"},{name:"Port of Spain Prison",location:"Port of Spain",ip:"10.33.0.1"},{name:"Tobago",location:"Tobago",ip:"10.2.0.1"},{name:"Kings Court",location:"Frederick Street, Port of Spain",ip:"10.16.0.1"},{name:"Seecharan Building",location:"Duke Street, Port of Spain",ip:"10.18.0.1"},{name:"HR/Accounts Building",location:"Corner Pembroke Street and Duke Street, Port of Spain",ip:"10.17.0.1"},{name:"FCD Fyzabad",location:"Corner Pembroke Street and Duke Street, Port of Spain",ip:"192.168.151.1"},{name:"FCD Children Court Building",location:"Corner Pembroke Street and Duke Street, Port of Spain",ip:"192.168.152.1"},{name:"Tradezone",location:"Corner Pembroke Street and Duke Street, Port of Spain",ip:"10.15.0.1"},{name:"Tunapuna Regional Complex",location:"Tunapuna",ip:"10.20.0.1"},{name:"Arima Magistrates",location:"Arima",ip:"10.6.0.1"},{name:"Sangre Grande",location:"Sangre Grande",ip:"10.7.0.1"},{name:"Chaguanas",location:"Chaguanas",ip:"10.11.0.1"},{name:"Tobago - Prison",location:"Tobago",ip:"10.32.0.1"},{name:"Couva",location:"Couva",ip:"10.12.0.1"},{name:"Point Fortin",location:"Point Fortin",ip:"10.14.0.1"},{name:"Siparia",location:"Siparia",ip:"10.19.0.1"},{name:"Princes Town",location:"Princes Town",ip:"10.13.0.1"},{name:"Rio Claro",location:"Rio Claro",ip:"10.9.0.1"},{name:"Mayaro",location:"Mayaro",ip:"10.8.0.1"},{name:"Pembroke Court",location:"Pembroke Street, Port of Spain",ip:"10.23.0.1"},{name:"Thomas and Sons",location:"Corner Duke and Pembroke Street, Port of Spain",ip:"10.26.0.1"},{name:"Family Court Tobago",location:"Tobago",ip:"10.27.0.2"}]}},computed:{filteredItems:function(){var t=this;return this.search?this.list.filter((function(e){return e.name.toUpperCase().includes(t.search.toUpperCase())})):this.list}}}),g=v,h=(n("cffb"),Object(u["a"])(g,f,m,!1,null,"71df4c74",null)),S=h.exports,b={name:"app",components:{Navbar:d,RouterList:S}},C=b,P=(n("034f"),Object(u["a"])(C,o,i,!1,null,null,null)),y=P.exports;n("8266"),n("4d5c"),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(y)}}).$mount("#app")},"85ec":function(t,e,n){},cffb:function(t,e,n){"use strict";var a=n("38e1"),o=n.n(a);o.a}});
//# sourceMappingURL=app.a52d2080.js.map