(this["webpackJsonpkredit-bee"]=this["webpackJsonpkredit-bee"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),r=n(8),s=n.n(r),i=(n(15),n(16),n(17),n(6)),a=n(29),j=n(5),l=n.n(j),d=n(1),u=o.a.memo((function(e){var t=e.albumId,n=Object(c.useState)(!1),o=Object(i.a)(n,2),r=o[0],s=o[1],j=Object(c.useState)([]),u=Object(i.a)(j,2),b=u[0],h=u[1];return Object(c.useEffect)((function(){s(!0),fetch("https://jsonplaceholder.typicode.com/photos?albumId="+t,{method:"GET"}).then((function(e){return e.json()})).then((function(e){h(e),s(!1)})).catch((function(e){return console.log(e)}))}),[t]),Object(d.jsxs)("div",{className:"horizontal-scroll-div",children:[r&&Object(d.jsx)("p",{children:"Loading Photos"}),b.length>0&&b.map((function(e,t){return Object(d.jsx)(l.a,{offsetHorizontal:50,throttle:500,debounce:!0,children:Object(d.jsx)(a.a,{className:"card-container",children:Object(d.jsxs)(a.a.Body,{children:[Object(d.jsx)(l.a,{offsetHorizontal:50,throttle:500,debounce:!0,children:Object(d.jsx)(a.a.Img,{alt:e.title,variant:"top",src:e.thumbnailUrl})}),Object(d.jsxs)(a.a.Text,{className:"wrap-text",children:[e.title,Object(d.jsx)("br",{}),"id: ",e.id]})]})})},t)}))]})}));var b=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)([]),s=Object(i.a)(r,2),j=s[0],b=s[1];return Object(c.useEffect)((function(){o(!0),fetch("https://jsonplaceholder.typicode.com/albums",{method:"GET"}).then((function(e){return e.json()})).then((function(e){b(e),o(!1)})).catch((function(e){return console.log(e)}))}),[]),Object(d.jsxs)("div",{children:[n&&Object(d.jsx)("p",{children:"Loading Albums"}),j.length>0&&j.map((function(e,t){return Object(d.jsx)(l.a,{offsetVertical:300,throttle:500,debounce:!0,children:Object(d.jsxs)(a.a,{children:[Object(d.jsxs)(a.a.Header,{children:[Object(d.jsx)(a.a.Title,{children:e.title}),Object(d.jsxs)(a.a.Text,{children:["id: ",e.id,", userid: ",e.userId]})]}),Object(d.jsx)(l.a,{throttle:500,debounce:!0,offsetHorizontal:50,children:Object(d.jsx)(u,{albumId:e.id})})]})},t)}))]})};var h=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(b,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),f()}},[[28,1,2]]]);
//# sourceMappingURL=main.1ab979e5.chunk.js.map