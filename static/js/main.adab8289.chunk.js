(this.webpackJsonpfirstproject=this.webpackJsonpfirstproject||[]).push([[0],{47:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),j=n(11),i=n.n(j),s=n(33),a=n(20),o=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("h1",{children:"SAGAR KEEP"})})})},l=n(23),u=n(26),b=n(63),O=n(31),d=n.n(O),x=function(e){var t=Object(r.useState)(!1),n=Object(a.a)(t,2),j=n[0],i=n[1],s=Object(r.useState)({title:"",content:""}),o=Object(a.a)(s,2),O=o[0],x=o[1],h=function(e){var t=e.target,n=t.name,c=t.value;x((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},n,c))}))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"main_note",onDoubleClick:function(){i(!1)},children:Object(c.jsxs)("form",{children:[j?Object(c.jsx)("input",{type:"text",placeholder:"Title",name:"title",autoComplete:"off",value:O.title,onChange:h}):null,Object(c.jsx)("br",{}),Object(c.jsx)("textarea",{placeholder:"Write a note....",rows:"",coloum:"1",name:"content",value:O.content,onChange:h,onClick:function(){i(!0)}}),j?Object(c.jsx)(b.a,{onClick:function(){e.passNote(O),x({title:"",content:""})},children:Object(c.jsx)(d.a,{className:"plus_sign"})}):null]})})})},h=n(32),f=n.n(h),m=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"note",children:[Object(c.jsxs)("h1",{children:[" ",e.title," "]}),Object(c.jsx)("br",{}),Object(c.jsxs)("p",{children:[e.content," "]}),Object(c.jsx)("button",{onClick:function(){alert("delete it now"),e.deleteItem(e.id)},className:"btn",children:Object(c.jsx)(f.a,{className:"deleteIcon"})})]})})},p=function(){var e=(new Date).getFullYear();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("footer",{children:Object(c.jsxs)("p",{children:["copyright @ ",e," "]})})})},g=(n(47),function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],j=t[1],i=function(e){j((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o,{}),Object(c.jsx)(x,{passNote:function(e){j((function(t){return[].concat(Object(s.a)(t),[e])}))}}),n.map((function(e,t){return Object(c.jsx)(m,{id:t,title:e.title,content:e.content,deleteItem:i},t)})),Object(c.jsx)(p,{})]})});i.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.adab8289.chunk.js.map