(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c),u=(n(11),n(2)),o=n.n(u),s=n(5),i=n(1),m=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("h1",null,"loading..."))},f=function(e){var t=e.id,n=e.image,c=e.info,l=e.price,u=e.name,o=e.removeTour,s=Object(a.useState)(!1),m=Object(i.a)(s,2),f=m[0],E=m[1];return r.a.createElement("article",{className:"single-tour"},r.a.createElement("img",{src:n,alt:u}),r.a.createElement("footer",null,r.a.createElement("div",{className:"tour-info"},r.a.createElement("h4",null,u),r.a.createElement("h4",{className:"tour-price"},"$",l)),r.a.createElement("p",null,f?c:"".concat(c.substring(0,200),"..."),r.a.createElement("button",{onClick:function(){return E(!f)}},f?"show less":"read more")),r.a.createElement("button",{className:"delete-btn",onClick:function(){return o(t)}},"not interested")))},E=function(e){var t=e.tours,n=e.removeTour;return r.a.createElement("section",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Our Tour"),r.a.createElement("div",{className:"underline"})),r.a.createElement("div",null,t.map((function(e){return r.a.createElement(f,Object.assign({key:e.id},e,{removeTour:n}))}))))};var d=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),u=Object(i.a)(l,2),f=u[0],d=u[1],v=function(){var e=Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,fetch("https://course-api.com/react-tours-project");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,c(!1),d(n),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),c(!1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){v()}),[]),n?r.a.createElement("main",null,r.a.createElement(m,null)):0===f.length?r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"no tours left"),r.a.createElement("button",{className:"btn",onClick:function(){return v()}},"refresh")):r.a.createElement("main",null,r.a.createElement(E,{tours:f,removeTour:function(e){var t=f.filter((function(t){return t.id!==e}));d(t)}}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root"))},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.ae0a04dc.chunk.js.map