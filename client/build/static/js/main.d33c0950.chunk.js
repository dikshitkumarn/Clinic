(this["webpackJsonpez-walking"]=this["webpackJsonpez-walking"]||[]).push([[1],{110:function(e,n,t){e.exports=t.p+"static/media/success2.8d2d721d.gif"},120:function(e,n,t){e.exports=t.p+"static/media/EZWalkin-Logo.fa662033.jpg"},124:function(e,n,t){e.exports=t(236)},129:function(e,n,t){},130:function(e,n,t){},135:function(e,n,t){},136:function(e,n,t){},15:function(e,n,t){"use strict";var a=t(6),l=t(0),r=t.n(l),c=t(87);n.a=function(e){return r.a.createElement("button",{style:Object(a.a)({},e.style),disabled:e.disabled,className:e.loading?"loading-style "+(e.className?e.className:"bg-green lg"):e.className?e.className:"bg-green lg",type:e.type?e.type:"button",onClick:e.loading?function(){}:e.onClick},e.loading?r.a.createElement(l.Fragment,null,r.a.createElement(c.a,null)):e.children)}},153:function(e,n,t){},154:function(e,n,t){},166:function(e,n,t){},167:function(e,n,t){},168:function(e,n,t){},19:function(e,n,t){"use strict";t.d(n,"e",(function(){return a})),t.d(n,"b",(function(){return l})),t.d(n,"a",(function(){return r})),t.d(n,"c",(function(){return c})),t.d(n,"d",(function(){return o}));var a="START_LOGIN",l="LOGIN_SUCCESS",r="LOGIN_FAILURE",c="SET_TEMPORARY_TOKEN",o="SET_VERIFIED"},21:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(109),l=t.n(a),r=t(25),c=l.a.create({baseURL:"https://course-reservation.herokuapp.com/api/",headers:{Authorization:"Bearer ".concat(Object(r.b)("token"))}})},229:function(e,n,t){},231:function(e,n,t){},232:function(e,n,t){},233:function(e,n,t){},236:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(17),c=t.n(r),o=(t(129),t(40)),i=t.n(o),u=t(51),s=t(8),d=(t(130),t(7)),m=t(30),f=(t(135),t(24)),p=t(65),b=t(15),g=t(25),h=t(21),v=t(36),E=Object(m.b)(null,(function(e){return{setVerified:function(n){return e(Object(p.c)(n))},storeToken:function(n,t){return e(Object(p.b)(n,t))}}}))((function(e){var n=Object(a.useState)(!1),t=Object(s.a)(n,2),r=t[0],c=t[1],o=Object(a.useState)(null),i=Object(s.a)(o,2),u=i[0],d=i[1],m=Object(a.useState)(""),p=Object(s.a)(m,2),E=p[0],y=p[1],O=Object(a.useState)(""),k=Object(s.a)(O,2),j=k[0],N=k[1],w=Object(a.useState)(!1),C=Object(s.a)(w,2),x=C[0],T=C[1],S=Object(a.useState)(""),A=Object(s.a)(S,2),q=A[0],I=A[1];Object(a.useEffect)((function(){c(!0);var n=window.location.href.split("/"),t=n[n.length-1];h.a.post("/verifytoken",{token:t}).then((function(n){c(!1),console.log(n.data),200===n.status?(e.setVerified(!0),e.storeToken(t,n.data),Object(g.a)("token"),y("success"),N("Verified"),I("Continue"),T(!0),d(n.status)):d(n.status)})).catch((function(e){c(!1),Object(g.a)("token"),y("error"),N("Failed"),T(!0),I("OK"),setTimeout((function(){d(e.response.status)}),2e3),console.log(e)}))}),[]);return l.a.createElement("div",{className:"full-page-wrapper flex-center flex-column"},r?l.a.createElement(f.a,null):x?l.a.createElement(v.a,{type:E,message:j,hideAlert:function(){T(!1),200===u&&setTimeout((function(){e.history.replace("/auth/signup")}),2e3)},show:x,confirmButtonText:q}):200===u?l.a.createElement(a.Fragment,null,l.a.createElement(f.a,null),l.a.createElement("h4",null,"Redirecting...")):null===u?l.a.createElement(f.a,null):l.a.createElement("div",{className:"flex-column flex-center"},l.a.createElement("h4",null,"Something went wrong !"),l.a.createElement(b.a,{onClick:function(){return e.history.push("/auth/signin")}},"Login")))})),y=t(38),O=Object(m.b)(null,(function(e){return{logout:function(){return e(Object(y.a)())}}}))((function(e){return localStorage.removeItem("route"),Object(a.useEffect)((function(){Object(g.a)("token"),e.logout(),h.a.post("/logout"),setTimeout((function(){e.history.push("/auth/signin")}),2e3)}),[]),l.a.createElement("div",{className:"full-page-wrapper flex-center flex-column",style:{background:"white"}},l.a.createElement(f.a,null),l.a.createElement("h4",null,"Logging out..."))})),k=t(86),j=(t(167),function(e){return l.a.createElement("div",{className:"app-spinner full-page-wrapper"},l.a.createElement("img",{className:"app-spinner-logo",alt:"loading...",src:t(120)}),l.a.createElement("div",{className:"progress-bar-container"},l.a.createElement("div",{className:"progress-loader"})))}),N=(t(37),t(6)),w=(t(50),t(49),t(83),t(89),t(53),t(68),t(231),t(232),t(233),Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,650))})),Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,652))})),Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(8),t.e(7)]).then(t.bind(null,651))}))),C=Object(a.lazy)((function(){return t.e(9).then(t.bind(null,653))}));var x=Object(m.b)((function(e){return{auth:null!==e.login.token&&void 0!==e.login.token,verified:e.login.verified,loading:e.login.loading,userType:e.login.userType,token:e.login.token}}),(function(e){return{checkAuthStatus:function(){return e((function(){}))}}}))(Object(d.h)((function(e){var n=Object(a.useState)(void 0!==e.location.pathname&&null!==e.location.pathname?e.location.pathname:"/"),t=Object(s.a)(n,2),r=t[0],c=t[1],o=Object(a.useState)(!1),m=Object(s.a)(o,2),f=m[0],p=m[1];Object(a.useEffect)((function(){setTimeout((function(){p(!0)}),1e3)}),[]),Object(a.useEffect)((function(){(function(){var n=Object(u.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,"Bearer ".concat(e.token);case 2:h.a.defaults.headers.common.Authorization=n.sent;case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[e.token]),Object(a.useEffect)((function(){window.location.href.includes("/auth")||window.location.href.includes("/home")||window.location.href.includes("/verify")||(localStorage.setItem("route",e.location.pathname),c(void 0!==e.location.pathname&&null!==e.location.href?e.location.pathname:"/"))}),[window.location.href]);var b=l.a.createElement(d.b,{path:"/",render:function(e){return l.a.createElement(w,e)}});return f?e.loading?l.a.createElement("div",{className:"full-page-wrapper flex-center bg-milky"},l.a.createElement(j,null)):l.a.createElement("div",{className:"App"},l.a.createElement(a.Suspense,{fallback:l.a.createElement("div",{className:"full-page-wrapper flex-center bg-milky"},l.a.createElement(j,null))},l.a.createElement(d.d,null,l.a.createElement(d.b,{path:"/verifytoken/:token",component:E}),l.a.createElement(d.b,{path:"/logout",component:Object(k.a)(O)}),e.auth?l.a.createElement(a.Fragment,null,b,l.a.createElement(d.a,{to:r})):l.a.createElement(a.Fragment,null,l.a.createElement(d.b,{path:"/auth",component:C}),l.a.createElement(d.a,{to:"/auth"}))))):l.a.createElement(j,null)}))),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(235);var A=t(118),q=t(35),I=t(19),R={token:null,userType:null,verified:!1,temporaryToken:null,email:null,loading:!1,logo:null,data:{}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case I.b:return Object(N.a)(Object(N.a)({},e),{},{token:"bla",data:n.data});case I.d:return Object(N.a)(Object(N.a)({},e),{},{verified:n.status});case I.c:return Object(N.a)(Object(N.a)({},e),{},{temporaryToken:n.token,email:n.email});case I.a:return Object(N.a)(Object(N.a)({},e),{},{userType:null,token:null,loading:!1,temporaryToken:null,email:null});case I.e:return Object(N.a)(Object(N.a)({},e),{},{userType:null,token:null,loading:!0,temporaryToken:null,email:null});default:return e}},_=t(117),U=Object(q.c)({login:L}),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.d,P=Object(q.e)(U,F(Object(q.a)(_.a)));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m.a,{store:P},l.a.createElement(A.a,null,l.a.createElement(x,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");T?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(n,e)}))}}()},24:function(e,n,t){"use strict";var a=t(0),l=t.n(a);t(136);n.a=function(e){return l.a.createElement("div",{className:"sk-cube-grid"},l.a.createElement("div",{className:"sk-cube sk-cube1"}),l.a.createElement("div",{className:"sk-cube sk-cube2"}),l.a.createElement("div",{className:"sk-cube sk-cube3"}),l.a.createElement("div",{className:"sk-cube sk-cube4"}),l.a.createElement("div",{className:"sk-cube sk-cube5"}),l.a.createElement("div",{className:"sk-cube sk-cube6"}),l.a.createElement("div",{className:"sk-cube sk-cube7"}),l.a.createElement("div",{className:"sk-cube sk-cube8"}),l.a.createElement("div",{className:"sk-cube sk-cube9"}))}},25:function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return c}));var a=t(6);function l(e){var n=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return n?decodeURIComponent(n[1]):void 0}function r(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(t=Object(a.a)({path:"/"},t)).expires instanceof Date&&(t.expires=t.expires.toUTCString());var l=encodeURIComponent(e)+"="+encodeURIComponent(n);for(var r in t){l+="; "+r;var c=t[r];!0!==c&&(l+="="+c)}document.cookie=l}function c(e){r(e,"",{"max-age":-1})}},36:function(e,n,t){"use strict";var a=t(0),l=t.n(a),r=(t(154),t(110)),c=t.n(r),o=t(78),i=t.n(o);n.a=function(e){return e.show?l.a.createElement("div",{className:"alert-container",onClick:function(){return e.hideAlert()}},l.a.createElement("div",{className:"alert-mini-container "+("success"===e.type?"success-bg":"error"===e.type?"error-bg":"white-bg")},l.a.createElement("h4",{className:"alert-message"},e.message),l.a.createElement("div",{className:"alert",style:{backgroundImage:"url('"+("success"===e.type?c.a:(e.type,i.a))+"')"}}),l.a.createElement("button",{onClick:function(){return e.hideAlert()},className:"alert-button"},e.confirmButtonText?e.confirmButtonText:"OK"))):null}},38:function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"a",(function(){return r})),t.d(n,"c",(function(){return c})),t.d(n,"d",(function(){return o}));var a=t(19),l=(t(25),t(21),function(e,n){return{type:a.b,token:e,data:n}}),r=function(){return{type:a.a}},c=function(e,n){return{type:a.c,token:e,email:n}},o=function(e){return{type:a.d,status:e}}},49:function(e,n,t){"use strict";var a=t(6),l=t(0),r=t.n(l),c=t(240);t(229);n.a=function(e){var n=["my-card",e.className?e.className:""];return r.a.createElement("div",{className:n.join(" "),style:e.style},e.title?r.a.createElement(l.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("h4",{className:"card-title-responsive",style:Object(a.a)(Object(a.a)({},e.titleStyle),{},{textAlign:e.titleCenter?"center":"left"})},e.title))):null,e.children)}},50:function(e,n,t){"use strict";var a=t(0),l=t.n(a),r=t(244),c=t(245),o=t(246),i=t(247),u=t(115),s=t(248),d=t(112),m=t.n(d),f=t(8),p=t(113),b=t.n(p),g=(t(168),t(169),function(e){var n=Object(a.useState)(e.value),t=Object(f.a)(n,2),r=t[0],c=t[1];return l.a.createElement(a.Fragment,null,l.a.createElement("br",null),l.a.createElement(b.a,Object.assign({},e,{placeholderText:e.placeholder,className:"date",dateFormat:"dd-MM-yyyy",selected:r,onChange:function(n){c(n),e.onChange({target:{value:n,name:e.name}})}})))}),h=t(84),v=t(6),E=t(119),y=function(e){return l.a.createElement(E.a,{className:"react-select",classNamePrefix:"react-select",placeholder:e.placeholder,ref:e.ref,value:void 0!==e.value&&null!==e.value?0===e.value.length?null:{value:e.value,label:e.value}:null,onChange:function(n){return e.onChange(null!==n&&void 0!==n?n.label:null,e.name)},name:e.name,styles:{control:function(n){return Object(v.a)(Object(v.a)({background:"rgba(230, 230, 230, 0.823)"},n),e.style)}},options:null===e.options?[]:Object(h.a)(e.options.map((function(e){return{value:e,label:e}})))})};n.a=function(e){var n=m()();return function(){switch(e.type){case"text":return l.a.createElement(r.a,{style:{textAlign:"left"}},e.displayName?l.a.createElement(c.a,{for:n},e.displayName):null,e.addon?l.a.createElement(o.a,null,l.a.createElement(i.a,{addonType:e.addon.type},l.a.createElement(u.a,null,e.addon.text)),l.a.createElement(s.a,Object.assign({disabled:e.disabled,type:e.type,id:n,name:e.name,value:e.value,onChange:function(n){e.onChange(n)},placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e))):l.a.createElement(s.a,Object.assign({disabled:e.disabled,type:e.type,id:n,name:e.name,value:e.value,onChange:function(n){e.onChange(n)},placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e)));case"textarea":return l.a.createElement(r.a,{style:{textAlign:"left"}},e.displayName?l.a.createElement(c.a,{for:n},e.displayName):null,e.addon?l.a.createElement(o.a,null,l.a.createElement(i.a,{addonType:e.addon.type},l.a.createElement(u.a,null,e.addon.text)),l.a.createElement(s.a,Object.assign({disabled:e.disabled,type:e.type,id:n,value:e.value,onChange:function(n){e.onChange(n)},name:e.name,placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e))):l.a.createElement(s.a,Object.assign({disabled:e.disabled,type:e.type,id:n,value:e.value,onChange:function(n){e.onChange(n)},name:e.name,placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e)));case"select":return l.a.createElement(r.a,{style:{textAlign:"left"}},e.displayName?l.a.createElement(c.a,{for:n},e.displayName):null,e.addon?l.a.createElement(o.a,null,l.a.createElement(i.a,{addonType:e.addon.type},l.a.createElement(u.a,null,e.addon.text)),l.a.createElement(y,Object.assign({style:{background:"#fafafa"},name:e.name,value:e.value,onChange:function(n,t){e.onChange(n,t)},options:e.options},e))):l.a.createElement(y,Object.assign({style:{background:"#fafafa"},name:e.name,value:e.value,onChange:function(n,t){e.onChange(n,t)},options:e.options},e)));case"number":return l.a.createElement(r.a,{style:{textAlign:"left"}},e.displayName?l.a.createElement(c.a,{for:n},e.displayName):null,e.addon?l.a.createElement(o.a,null,l.a.createElement(i.a,{addonType:e.addon.type},l.a.createElement(u.a,null,e.addon.text)),l.a.createElement(s.a,Object.assign({disabled:e.disabled,type:e.type,id:n,value:e.value,onChange:function(n){e.onChange(n)},name:e.name,placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e))):l.a.createElement(s.a,Object.assign({disabled:e.disabled,type:e.type,id:n,value:e.value,onChange:function(n){e.onChange(n)},name:e.name,placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e)));case"date":return l.a.createElement(r.a,{style:{textAlign:"left"}},e.displayName?l.a.createElement(c.a,{for:n},e.displayName):null,e.addon?l.a.createElement(o.a,null,l.a.createElement(i.a,{addonType:e.addon.type},l.a.createElement(u.a,null,e.addon.text)),l.a.createElement(g,Object.assign({disabled:e.disabled,type:e.type,id:n,value:e.value,onChange:function(n){e.onChange(n)},name:e.name,placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e))):l.a.createElement(g,Object.assign({disabled:e.disabled,type:e.type,id:n,value:e.value,onChange:function(n){e.onChange(n)},name:e.name,placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e)));default:return l.a.createElement(r.a,{style:{textAlign:"left"}},e.displayName?l.a.createElement(c.a,{for:n},e.displayName):null,e.addon?l.a.createElement(o.a,null,l.a.createElement(i.a,{addonType:e.addon.type},l.a.createElement(u.a,null,e.addon.text)),l.a.createElement(s.a,Object.assign({disabled:e.disabled,type:e.type,id:n,name:e.name,value:e.value,onChange:function(n){e.onChange(n)},placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e))):l.a.createElement(s.a,Object.assign({disabled:e.disabled,type:e.type,id:n,name:e.name,value:e.value,onChange:function(n){e.onChange(n)},placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e)))}}()}},53:function(e,n,t){"use strict";function a(e){return null!==e&&void 0!==e&&""!==e.toString().replace(/\D/g,"")?parseInt(e.toString().replace(/\D/g,"")):""}t.d(n,"a",(function(){return a}))},65:function(e,n,t){"use strict";var a=t(38);t.d(n,"a",(function(){return a.b})),t.d(n,"c",(function(){return a.d})),t.d(n,"b",(function(){return a.c}))},68:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=function(e,n){if(e){var t=new FileReader;t.readAsDataURL(e),t.onload=function(e){n(e.target.result),console.log(e.target.result)}}else n(null)}},78:function(e,n,t){e.exports=t.p+"static/media/error.23edc42b.gif"},83:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t(116);function l(e){var n=new a.a;n.addImage(e,"JPEG",15,40,180,160),n.output("datauri"),n.save("qr-code.pdf")}},86:function(e,n,t){"use strict";var a=t(0),l=t.n(a),r=t(111),c=t.n(r);t(166);n.a=function(e){return function(n){return l.a.createElement("div",{className:"page"},l.a.createElement(c.a,{transitionAppear:!0,transitionAppearTimeout:600,transitionEnterTimeout:600,transitionLeaveTimeout:200,transitionName:"SlideIn"},l.a.createElement(e,n)))}}},87:function(e,n,t){"use strict";var a=t(0),l=t.n(a);t(153);n.a=function(e){return l.a.createElement("div",{className:"loader"})}},89:function(e,n,t){"use strict";t(40),t(6),t(51),new(t(230))}},[[124,2,4]]]);
//# sourceMappingURL=main.d33c0950.chunk.js.map