(this["webpackJsonpeighthours-using-react"]=this["webpackJsonpeighthours-using-react"]||[]).push([[0],{31:function(e,t,a){e.exports=a(45)},36:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c);a(36),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(12),o=a(30),s=a(3),m=a(6),u=a(7),d=a(8),h=a(9),p=a(13),b=function(e){return r.a.createElement("form",{className:"bday-input-form",onSubmit:e.onSubmit},r.a.createElement("label",{className:"bday-input-label"},"BIRTHDAY:",r.a.createElement("input",{className:"bday-input",placeholder:"mm/dd/yyyy",onChange:e.handleChange,value:e.bday})),r.a.createElement(p.a,{to:"results/".concat(e.bday)},r.a.createElement("button",{type:"submit",id:"results-button"})))},f=a(5),E=a.n(f),v=function(e){return r.a.createElement("div",{className:"today-time"},"Now ",r.a.createElement("hr",null)," ",E()().format("hh:mm:ss a"))},y=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({bday:e.target.value})},n.handleSubmit=function(e){e.preventDefault()},n.state={bday:""},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement(b,{bday:this.state.bday,onSubmit:this.handleSubmit,handleChange:this.handleChange}))}}]),a}(n.Component),g=function(e){return r.a.createElement("div",{className:"birth-time"},"Birth ",r.a.createElement("hr",null),e.birthtime)},O=function(e){return r.a.createElement("div",{className:"death-time"},"Death ",r.a.createElement("hr",null),e.diedtime)},j=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"present-container"},r.a.createElement(v,null))}}]),a}(n.Component),N=(a(43),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).calculateBirth=function(e){var t=E()(e,"MM/DD/YYYY").diff(E()(),"days");return console.log("days ago: "+t),E()().add(t,"seconds").format("h:mm:ss a")},e.calculateDeath=function(e){var t=28800+E()(e,"MM/DD/YYYY").diff(E()(),"days");return E()().add(t,"seconds").format("h:mm:ss a")},e.calculatePercentage=function(e){return-E()(e,"MM/DD/YYYY").diff(E()(),"days")/28880*100},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.match.params.month+"/"+this.props.match.params.day+"/"+this.props.match.params.year;return r.a.createElement("div",null,r.a.createElement("div",{className:"results-display"},r.a.createElement("div",{className:"flex-container times"},r.a.createElement("div",{className:"flex-container"},r.a.createElement(g,{birthtime:this.calculateBirth(e)})),r.a.createElement("div",{className:"flex-container"},r.a.createElement(j,{bday:e})),r.a.createElement("div",{className:"flex-container"},r.a.createElement(O,{diedtime:this.calculateDeath(e)}))),r.a.createElement("div",{className:"meter"},r.a.createElement("span",{className:"spanner",style:{width:"".concat(this.calculatePercentage(e),"%")}}))),r.a.createElement("div",{className:"footer"},r.a.createElement(p.a,{to:"/"},"Home")))}}]),a}(n.Component)),D=function(e){return r.a.createElement("div",{className:"error-route"},r.a.createElement("h2",null,"Oops! Can't find what you're looking for"),r.a.createElement("h3",null,r.a.createElement("a",{href:"/"},"Home")))},T=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:y}),r.a.createElement(i.a,{path:"/results/:month/:day/:year",component:N}),r.a.createElement(i.a,{component:D}))}}]),a}(n.Component),w=Object(i.f)(T),S=(a(44),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Each Second is a Day")),r.a.createElement(w,null))}}]),a}(n.Component)),Y=a(27),C=a(11),M=a(15),k={startingDate:10071990,endingDate:10072070};var I={startingTime:900,endingTime:1700};var _=Object(C.combineReducers)({dates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STARTING_TIME":return Object(M.a)({},e,{startingDate:t.payload});case"SET_ENDING_TIME":return Object(M.a)({},e,{endingDate:t.payload});default:return e}},times:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STARTING_TIME":return Object(M.a)({},e,{startingTime:t.payload});case"SET_ENDING_TIME":return Object(M.a)({},e,{endingTime:t.payload});default:return e}}}),x=a(28),A=a(29),B=Object(C.createStore)(_,Object(Y.composeWithDevTools)(Object(C.applyMiddleware)(x.a,Object(A.createLogger)({collapsed:!0})))),G=Object(s.a)();l.a.render(r.a.createElement(o.a,{store:B},r.a.createElement(i.b,{history:G},r.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.7b192e52.chunk.js.map