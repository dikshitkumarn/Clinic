(this["webpackJsonpez-walking"]=this["webpackJsonpez-walking"]||[]).push([[5],{285:function(e,t,n){"use strict";var a=n(8),o=n(0),c=n.n(o),l=(n(286),n(7)),i=n(301),r=n.n(i);t.a=Object(l.h)((function(e){var t=Object(o.useState)(!1),n=Object(a.a)(t,2),l=n[0],i=n[1],s=Object(o.useState)(e.location.pathname),u=Object(a.a)(s,2);u[0],u[1];Object(o.useEffect)((function(){window.onscroll=function(){null!==document.getElementById("navbar")&&void 0!==document.getElementById("navbar")&&(document.body.scrollTop>10||document.documentElement.scrollTop>10?(document.getElementById("navbar").style.padding="0px 20px",document.getElementById("navbar").style.width="100vw"):(document.getElementById("navbar").style.padding="10px 20px",document.getElementById("navbar").style.width="95vw"))},r()(document).ready((function(){r()(".nav .dropdown-menu").prev("a").on("click",(function(e){e.preventDefault(),r()(this).parent().find(".dropdown-menu").slideToggle()}))})),r()(document).ready((function(){function e(){var e=r()(".active-route a"),t=r()(e).width()+parseFloat(r()(e).css("padding-left"))+parseFloat(r()(e).css("padding-right")),n=function(){var e,t,n,a,o=0;return r()(".nav-links li").each((function(c,l){if(r()(l).hasClass("active-route"))return!1;e=r()(l).find("a"),t=e.width(),n=parseFloat(e.css("padding-left")),a=parseFloat(e.css("padding-right")),o+=t+n+a})),o}(),a=r()(".active-marker");r()(".active-route a").hasClass(".hide-marker")?(r()(a).css("display","none"),r()(a).css("left",n+40)):(r()(a).css("display","block"),r()(a).css("width",t),r()(a).css("left",n+40))}e(),r()(".nav-links a").click((function(t){t.preventDefault(),r()(".nav-links li").removeClass("active-route"),r()(this).parents("li").addClass("active-route"),e()}))}))}),[window.location.href]);var d=function(t,n){t.preventDefault(),e.history.push(n),m()},m=function(){i((function(e){return!e}))};return c.a.createElement(o.Fragment,null,c.a.createElement("nav",{className:"navbar blurred-nav",id:"navbar"},c.a.createElement("div",{className:"nav-container"},c.a.createElement("div",{className:"nav-header"},c.a.createElement("div",{className:"logo"},e.heading)),c.a.createElement("input",{type:"checkbox",checked:l,id:"menu-toggle",onClick:m}),e.showOnMobile?c.a.createElement("div",{className:"show-on-mobile"},e.showOnMobile):null,c.a.createElement("label",{htmlFor:"menu-toggle",className:"menu-show"},c.a.createElement("i",{className:"fa fa-bars"})),c.a.createElement("div",{className:"nav"},c.a.createElement("ul",{className:"nav-links"},e.routes.map((function(e,t){return e.dropdown?c.a.createElement("li",{className:"nav-item has-dropdown indicate-active drop"+(e.dropdown.options.some((function(e){return window.location.href.includes(e.to)}))?" active-route":""),key:t},c.a.createElement("a",{href:"#",className:"nav-link"},e.dropdown.heading),c.a.createElement("ul",{className:"dropdown-menu"},e.dropdown.options.map((function(e,t){return c.a.createElement("li",{className:"nav-item",key:t},c.a.createElement("a",{className:"nav-link font",href:"#",onClick:function(t){return d(t,e.to)}},e.name))})))):e.component?c.a.createElement("li",{className:"nav-item nav-component indicate-active"+(window.location.href.includes(e.to)?" active-route":""),key:t,onClick:function(t){return d(t,e.to)}},c.a.createElement("a",{style:{visibility:"hidden"},className:"hide-marker"}),e.component):c.a.createElement("li",{className:"nav-item indicate-active"+(window.location.href.includes(e.to)?" active-route":""),key:t},c.a.createElement("a",{href:"#",onClick:function(t){return d(t,e.to)},className:"nav-link font"},e.name))})),c.a.createElement("label",{htmlFor:"menu-toggle",className:"menu-hide"},c.a.createElement("i",{className:"fa fa-times"}))),c.a.createElement("i",{className:"active-marker drop"})))),c.a.createElement("div",{className:"dummy-div"}))}))},286:function(e,t,n){},291:function(e,t,n){"use strict";var a=n(62);t.__esModule=!0,t.default=void 0;var o=a(n(33)),c=a(n(88)),l=a(n(0)),i=a(n(3)),r=a(n(13)),s=n(302),u=i.default.oneOfType([i.default.number,i.default.string]),d=i.default.oneOfType([i.default.bool,i.default.number,i.default.string,i.default.shape({size:i.default.oneOfType([i.default.bool,i.default.number,i.default.string]),order:u,offset:u})]),m={tag:s.tagPropType,xs:d,sm:d,md:d,lg:d,xl:d,className:i.default.string,cssModule:i.default.object,widths:i.default.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},b=function(e){var t=e.className,n=e.cssModule,a=e.widths,i=e.tag,u=(0,c.default)(e,["className","cssModule","widths","tag"]),d=[];a.forEach((function(t,a){var o=e[t];if(delete u[t],o||""===o){var c=!a;if((0,s.isObject)(o)){var l,i=c?"-":"-"+t+"-",m=p(c,t,o.size);d.push((0,s.mapToCssModules)((0,r.default)(((l={})[m]=o.size||""===o.size,l["order"+i+o.order]=o.order||0===o.order,l["offset"+i+o.offset]=o.offset||0===o.offset,l)),n))}else{var f=p(c,t,o);d.push(f)}}})),d.length||d.push("col");var m=(0,s.mapToCssModules)((0,r.default)(t,d),n);return l.default.createElement(i,(0,o.default)({},u,{className:m}))};b.propTypes=m,b.defaultProps=f;var g=b;t.default=g},302:function(e,t,n){"use strict";var a=n(62);t.__esModule=!0,t.getScrollbarWidth=l,t.setScrollbarWidth=i,t.isBodyOverflowing=r,t.getOriginalBodyPadding=function(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)},t.conditionallyUpdateScrollbar=function(){var e=l(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;r()&&i(n+e)},t.setGlobalCssModule=function(e){o=e},t.mapToCssModules=function(e,t){void 0===e&&(e="");void 0===t&&(t=o);return t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e},t.omit=function(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n},t.pick=function(e,t){var n,a=Array.isArray(t)?t:[t],o=a.length,c={};for(;o>0;)n=a[o-=1],c[n]=e[n];return c},t.warnOnce=u,t.deprecated=function(e,t){return function(n,a,o){null!==n[a]&&"undefined"!==typeof n[a]&&u('"'+a+'" property of "'+o+'" has been deprecated.\n'+t);for(var c=arguments.length,l=new Array(c>3?c-3:0),i=3;i<c;i++)l[i-3]=arguments[i];return e.apply(void 0,[n,a,o].concat(l))}},t.DOMElement=m,t.isReactRefObj=g,t.toNumber=function(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===h(e))return NaN;if(y(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=y(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var a=/^0b[01]+$/i.test(e);return a||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),a?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e},t.isObject=y,t.isFunction=v,t.findDOMElements=E,t.isArrayOrNodeList=w,t.getTarget=function(e,t){var n=E(e);return t?w(n)?n:null===n?[]:[n]:w(n)?n[0]:n},t.addMultipleEventListeners=function(e,t,n,a){var o=e;w(o)||(o=[o]);var c=n;"string"===typeof c&&(c=c.split(/\s+/));if(!w(o)||"function"!==typeof t||!Array.isArray(c))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(c,(function(e){Array.prototype.forEach.call(o,(function(n){n.addEventListener(e,t,a)}))})),function(){Array.prototype.forEach.call(c,(function(e){Array.prototype.forEach.call(o,(function(n){n.removeEventListener(e,t,a)}))}))}},t.focusableElements=t.defaultToggleEvents=t.canUseDOM=t.PopperPlacements=t.keyCodes=t.TransitionStatuses=t.TransitionPropTypeKeys=t.TransitionTimeouts=t.tagPropType=t.targetPropType=void 0;var o,c=a(n(3));function l(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function i(e){document.body.style.paddingRight=e>0?e+"px":null}function r(){return document.body.clientWidth<window.innerWidth}var s={};function u(e){s[e]||("undefined"!==typeof console&&console.error(e),s[e]=!0)}var d="object"===typeof window&&window.Element||function(){};function m(e,t,n){if(!(e[t]instanceof d))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var f=c.default.oneOfType([c.default.string,c.default.func,m,c.default.shape({current:c.default.any})]);t.targetPropType=f;var p=c.default.oneOfType([c.default.func,c.default.string,c.default.shape({$$typeof:c.default.symbol,render:c.default.func}),c.default.arrayOf(c.default.oneOfType([c.default.func,c.default.string,c.default.shape({$$typeof:c.default.symbol,render:c.default.func})]))]);t.tagPropType=p;t.TransitionTimeouts={Fade:150,Collapse:350,Modal:300,Carousel:600};t.TransitionPropTypeKeys=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"];t.TransitionStatuses={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};t.keyCodes={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80};t.PopperPlacements=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];var b=!("undefined"===typeof window||!window.document||!window.document.createElement);function g(e){return!(!e||"object"!==typeof e)&&"current"in e}function h(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function y(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function v(e){if(!y(e))return!1;var t=h(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function E(e){if(g(e))return e.current;if(v(e))return e();if("string"===typeof e&&b){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function w(e){return null!==e&&(Array.isArray(e)||b&&"number"===typeof e.length)}t.canUseDOM=b;t.defaultToggleEvents=["touchstart","click"];t.focusableElements=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},375:function(e,t,n){},376:function(e,t,n){},377:function(e,t,n){},378:function(e,t,n){},379:function(e,t,n){},380:function(e,t,n){},381:function(e,t,n){},650:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(30),l=n(7),i=n(86),r=n(285),s=n(6),u=n(84),d=n(8),m=n(24),f=n(21),p=(n(375),n(291)),b=n.n(p),g=n(15),h=n(49),y=(n(376),function(e){return o.a.createElement(b.a,{lg:"6",md:"6",sm:"12",className:"each-request-container"},o.a.createElement(h.a,{className:"hover-grow each-request d-flex justify-content-between",onClick:e.onClick},e.clinicName,o.a.createElement("br",null),e.location,o.a.createElement(g.a,{type:"button",className:"bg-blue white",onClick:e.onClick},"View")))}),v=n(36),E=n(50),w=n(83),O=(n(377),function(e){var t=Object(a.useState)({type:"",message:"",show:!1}),n=Object(d.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(!1),r=Object(d.a)(i,2),s=r[0],u=r[1],p=Object(a.useState)(!1),b=Object(d.a)(p,2),y=b[0],O=b[1],j=Object(a.useState)(null),N=Object(d.a)(j,2),C=N[0],k=N[1],T=[{displayName:"Clinic Name",value:e.clinicName},{displayName:"Email",value:e.email},{displayName:"Contact Number",value:e.contactNumber},{displayName:"Address",type:"textarea",value:e.address},{displayName:"workingTime",value:e.workingTime}];return e.loading?o.a.createElement(m.a,null):o.a.createElement(h.a,null,o.a.createElement(v.a,Object.assign({},c,{hideAlert:function(){C?(l({type:"",message:"",show:!1}),k(null)):(l({type:"",message:"",show:!1}),e.close(!0))}})),o.a.createElement(g.a,{type:"button",onClick:function(){return e.close(!1)},className:"bg-red white"},o.a.createElement("i",{className:"fa fa-chevron-left"})," \xa0\xa0Back"),o.a.createElement("br",null),T.map((function(e,t){return o.a.createElement(E.a,Object.assign({},e,{readOnly:!0,key:t}))})),o.a.createElement(g.a,{className:"bg-light-blue-gradient",onClick:function(){return Object(w.a)(e.proof)}},"Download Certificate"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"flex-row"},o.a.createElement(g.a,{type:"button",onClick:function(){O(!0),f.a.post("/acceptclinic",{clinicId:e.clinicId}).then((function(e){console.log(e.data),O(!1),l({type:"success",message:"Accepted ",show:!0})})).catch((function(e){l({type:"error",message:"Something went wrong !",show:!0}),O(!1),k(!0)}))},loading:y},"Accept"),"\xa0\xa0\xa0",o.a.createElement(g.a,{type:"button",className:"bg-red white",onClick:function(){u(!0),f.a.post("/rejectclinic",{clinicId:e.clinicId}).then((function(e){console.log(e.data),u(!1),l({type:"success",message:"Rejected ",show:!0})})).catch((function(e){l({type:"error",message:"Something went wrong !",show:!0}),u(!1),k(!0)}))},loading:s},"Reject")))}),j=function(e){var t=Object(a.useState)([{clinicName:"Mani Clinic",location:"Coimbatore"},{clinicName:"Dinesh Clinic",location:"Coimbatore"},{clinicName:"Giri Clinic",location:"Coimbatore"},{clinicName:"Gokul Clinic",location:"Coimbatore"},{clinicName:"Hari Clinic",location:"Coimbatore"},{clinicName:"Akash Clinic",location:"Coimbatore"}]),n=Object(d.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(!1),r=Object(d.a)(i,2),p=r[0],b=r[1],g=Object(a.useState)(null),h=Object(d.a)(g,2),v=h[0],E=(h[1],Object(a.useState)(!1)),w=Object(d.a)(E,2),j=w[0],N=w[1],C=Object(a.useState)([]),k=Object(d.a)(C,2),T=k[0],S=k[1],x=Object(a.useState)(!1),A=Object(d.a)(x,2),I=A[0],M=A[1],D=Object(a.useState)(null),q=Object(d.a)(D,2),P=q[0],F=q[1];Object(a.useEffect)((function(){B()}),[]);var B=function(){b(!0),f.a.post("/clinicrequests").then((function(e){console.log(e.data),b(!1),l(Object(u.a)(e.data))})).catch((function(e){console.log(e),b(!1)}))},G=function(e){M(!0),f.a.post("/requestDetail",{requestId:e}).then((function(e){console.log(e.data),M(!1),S(Object(s.a)({},e.data))})).catch((function(e){console.log(e),M(!1),S({}),F("Something went wrong !")}))};return p?o.a.createElement(m.a,null):v?o.a.createElement("h4",null,"Something went wrong !"):0===c.length?o.a.createElement("h4",null,"No Clinics !"):j?o.a.createElement(O,Object.assign({close:function(e){console.log(e),e?(N(!1),B()):N(!1)}},T,{loading:I,error:P})):o.a.createElement("div",{className:"flex-row flex-wrap"},c.map((function(e,t){return o.a.createElement(y,Object.assign({},e,{key:t,onClick:function(){return t=e.requestId,N(!0),void G(t);var t}}))})))},N=(n(378),n(379),n(380),function(e){return o.a.createElement(b.a,{lg:"6",md:"6",sm:"12",className:"each-request-container"},o.a.createElement(h.a,{className:"hover-grow each-request d-flex justify-content-between",onClick:e.onClick},e.clinicName,o.a.createElement("br",null),e.location,o.a.createElement(g.a,{type:"button",className:"bg-blue white",onClick:e.onClick},"View")))}),C=(n(381),function(e){var t=Object(a.useState)({type:"",message:"",show:!1}),n=Object(d.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(!1),r=Object(d.a)(i,2),s=r[0],u=r[1],p=Object(a.useState)(null),b=Object(d.a)(p,2),y=b[0],O=b[1],j=[{displayName:"Clinic Name",value:e.clinicName},{displayName:"Email",value:e.email},{displayName:"Contact Number",value:e.contactNumber},{displayName:"Address",type:"textarea",value:e.address},{displayName:"workingTime",value:e.workingTime}];return e.loading?o.a.createElement(m.a,null):o.a.createElement(h.a,null,o.a.createElement(g.a,{type:"button",onClick:function(){return e.close(!1)},className:"bg-red white"},o.a.createElement("i",{className:"fa fa-chevron-left"})," \xa0\xa0Back"),o.a.createElement("br",null),o.a.createElement(v.a,Object.assign({},c,{hideAlert:function(){y?(l({type:"",message:"",show:!1}),O(null)):(l({type:"",message:"",show:!1}),e.close(!0))}})),j.map((function(e,t){return o.a.createElement(E.a,Object.assign({},e,{readOnly:!0,key:t}))})),o.a.createElement(g.a,{className:"bg-light-blue-gradient",onClick:function(){return Object(w.a)(e.proof)}},"Download Certificate"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(g.a,{type:"button",className:"bg-red white",loading:s,onClick:function(){u(!0),f.a.post("/deleteclinic",{clinicId:e.clinicId}).then((function(e){console.log(e.data),u(!1),l({type:"success",message:"Deleted ",show:!0})})).catch((function(e){l({type:"error",message:"Something went wrong !",show:!0}),u(!1),O(!0)}))}},"Delete Clinic"))}),k=function(e){var t=Object(a.useState)([{clinicName:"Mani Clinic",location:"Coimbatore"},{clinicName:"Dinesh Clinic",location:"Coimbatore"},{clinicName:"Giri Clinic",location:"Coimbatore"},{clinicName:"Gokul Clinic",location:"Coimbatore"},{clinicName:"Hari Clinic",location:"Coimbatore"},{clinicName:"Akash Clinic",location:"Coimbatore"}]),n=Object(d.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(!1),r=Object(d.a)(i,2),p=r[0],b=r[1],g=Object(a.useState)(null),h=Object(d.a)(g,2),y=h[0],v=(h[1],Object(a.useState)(!1)),E=Object(d.a)(v,2),w=E[0],O=E[1],j=Object(a.useState)([]),k=Object(d.a)(j,2),T=k[0],S=k[1],x=Object(a.useState)(!1),A=Object(d.a)(x,2),I=A[0],M=A[1],D=Object(a.useState)(null),q=Object(d.a)(D,2),P=q[0],F=q[1];Object(a.useEffect)((function(){B()}),[]);var B=function(){b(!0),f.a.post("/viewclinics").then((function(e){console.log(e.data),b(!1),l(Object(u.a)(e.data))})).catch((function(e){console.log(e),b(!1)}))},G=function(e){M(!0),f.a.post("/requestDetail",{clinicId:e}).then((function(e){console.log(e.data),M(!1),S(Object(s.a)({},e.data))})).catch((function(e){console.log(e),M(!1),S({}),F("Something went wrong !")}))};return p?o.a.createElement(m.a,null):y?o.a.createElement("h4",null,"Something went wrong !"):0===c.length?o.a.createElement("h4",null,"No Clinics !"):w?o.a.createElement(C,Object.assign({close:function(e){console.log(e),e?(O(!1),B()):O(!1)}},T,{loading:I,error:P})):o.a.createElement("div",{className:"flex-row flex-wrap"},c.map((function(e,t){return o.a.createElement(N,Object.assign({},e,{key:t,onClick:function(){return t=e.clinicId,O(!0),void G(t);var t}}))})))};t.default=Object(c.b)((function(e){return{auth:!0,logo:e.login.logo}}))((function(e){return o.a.createElement("div",null,o.a.createElement(r.a,{style:{background:"transparent"},routes:[{name:"Clinics",to:"/viewclinics"},{name:"Requests",to:"/clinicrequests"},{name:"LOGOUT",to:"/logout"}],heading:o.a.createElement("img",{src:n(120),alt:"logo"})}),o.a.createElement("br",null),o.a.createElement(l.d,null,o.a.createElement(l.b,{path:"/clinicrequests",component:Object(i.a)(j)}),o.a.createElement(l.b,{path:"/viewclinics",component:Object(i.a)(k)}),o.a.createElement(l.a,{to:e.auth?"/clinicrequests":"/auth"})))}))}}]);
//# sourceMappingURL=5.606eaeaf.chunk.js.map