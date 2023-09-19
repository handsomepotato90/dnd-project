"use strict";(self.webpackChunkdnd_project=self.webpackChunkdnd_project||[]).push([[955],{2955:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});var t=r(2791),a=r(1794),s=r(4165),i=r(5861),o=r(885),c=r(8589),u=r(13),l=r(4947),d=r(5767),p=r(3244),h=r(4097),x=r(2790),m=r(9138),f=r(5294),_=r(184);function v(e){var n=(0,h.x)(),r=n.isLoading,a=n.error,v=n.sendRequest,j=n.clearError,C=(0,t.useState)(!1),b=(0,o.Z)(C,2),Z=b[0],y=b[1],w=(0,t.useState)(!1),g=(0,o.Z)(w,2),k=g[0],P=g[1],S=(0,l.c)({password:{value:"",isValid:!1},re_password:{value:"",isValid:!1}},!0),N=(0,o.Z)(S,2),E=N[0],I=N[1],O=function(){var n=(0,i.Z)((0,s.Z)().mark((function n(r){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!1!==r){n.next=3;break}return y(!1),n.abrupt("return");case 3:if(E.inputs.password.value===E.inputs.re_password.value){n.next=7;break}return P(!0),y(!1),n.abrupt("return");case 7:return n.prev=7,y(!1),n.next=11,v("https://danddragon.herokuapp.com/myProfile/change_password","POST",JSON.stringify({password:E.inputs.password.value,re_password:E.inputs.re_password.value,uId:e.ids.userId}),{"Content-Type":"application/json"});case 11:n.next=15;break;case 13:n.prev=13,n.t0=n.catch(7);case 15:e.ids.logout();case 16:case"end":return n.stop()}}),n,null,[[7,13]])})));return function(e){return n.apply(this,arguments)}}();return(0,_.jsxs)("div",{children:[r&&(0,_.jsx)(m.Z,{as0verlay:!0}),a&&(0,_.jsx)(x.Z,{header:"An Error Occurred",error:a,onClick:function(){j(null)}}),k&&(0,_.jsx)(x.Z,{header:"Passwords don't match.",onClick:function(){P(!1)}}),Z&&(0,_.jsx)(f.Z,{title:"Are you shure that you want to Change your Password.",onClick:O}),e.children,(0,_.jsx)(c.Z,{children:(0,_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(!0)},children:[(0,_.jsx)(u.Z,{element:"input",id:"password",type:"password",label:"New Password:",errorText:"*Password must be at least five(5) characters",validators:[(0,d.hg)(),(0,d.CP)(6)],onInput:I}),(0,_.jsx)(u.Z,{element:"input",id:"re_password",type:"password",label:"Re-Password:",errorText:"*Password must be at least five(5) characters",validators:[(0,d.hg)(),(0,d.CP)(6)],onInput:I}),(0,_.jsx)(p.Z,{type:"submit",disabled:!E.isValid,children:"Change Password"})]})})]})}var j=r(6871);function C(e){var n=(0,h.x)(),r=n.isLoading,a=n.error,v=n.sendRequest,C=n.clearError,b=(0,t.useState)(!1),Z=(0,o.Z)(b,2),y=Z[0],w=Z[1],g=(0,l.c)({u_name:{value:"",isValid:!1}},!0),k=(0,o.Z)(g,2),P=k[0],S=k[1],N=(0,j.s0)(),E=function(){var n=(0,i.Z)((0,s.Z)().mark((function n(r){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!1!==r){n.next=3;break}return w(!1),n.abrupt("return");case 3:return n.prev=3,w(!1),n.next=7,v("https://danddragon.herokuapp.com/myProfile/change_username","POST",JSON.stringify({name:P.inputs.u_name.value,uId:e.ids}),{"Content-Type":"application/json"});case 7:N("/myProfile"),n.next=12;break;case 10:n.prev=10,n.t0=n.catch(3);case 12:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(e){return n.apply(this,arguments)}}();return(0,_.jsxs)("div",{children:[r&&(0,_.jsx)(m.Z,{as0verlay:!0}),a&&(0,_.jsx)(x.Z,{header:"An Error Occurred",error:a,onClick:function(){C(null)}}),y&&(0,_.jsx)(f.Z,{title:"Are you shure that you want to Change your User name to ".concat(P.inputs.u_name.value,"."),onClick:E}),e.children,(0,_.jsx)(c.Z,{children:(0,_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),w(!0)},children:[(0,_.jsx)(u.Z,{element:"input",id:"u_name",type:"text",label:"Username:",errorText:"*Username must be at least five(5) characters",validators:[(0,d.hg)(),(0,d.CP)(3)],onInput:S}),(0,_.jsx)(p.Z,{type:"submit",disabled:!P.isValid,children:"Change Username"})]})})]})}function b(e){var n=(0,h.x)().sendRequest,r=(0,l.c)({email:{value:"",isValid:!1}},!0),t=(0,o.Z)(r,2),a=t[0],x=t[1],m=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(r){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,n("https://danddragon.herokuapp.com/change_mail","POST",JSON.stringify({email:a.inputs.email.value}),{"Content-Type":"application/json"});case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}();return(0,_.jsxs)("div",{children:[e.children,(0,_.jsx)(c.Z,{children:(0,_.jsxs)("form",{onSubmit:m,children:[(0,_.jsx)(u.Z,{element:"input",id:"email",type:"email",label:"E-Mail:",validators:[(0,d.Ox)(),(0,d.hg)()],onInput:x}),(0,_.jsx)(p.Z,{type:"submit",disabled:!a.isValid,children:"Change E-Mail"})]})})]})}var Z=r(7774);r(6419);function y(){var e=(0,t.useContext)(Z.O);return(0,_.jsxs)(a.Z,{children:[(0,_.jsx)(C,{uname:e.username,ids:e.userId,children:(0,_.jsx)("span",{className:"text_box__style",children:"Change Username"})}),(0,_.jsx)(v,{ids:e,children:(0,_.jsx)("span",{className:"text_box__style",children:"Change Password"})}),(0,_.jsx)(b,{ids:e.userId,children:(0,_.jsxs)("span",{className:"text_box__style",children:["Change E-Mail ",(0,_.jsx)("span",{className:"red_text",children:"(Coming soon)"})]})})]})}},1794:function(e,n,r){r.d(n,{Z:function(){return o}});var t="ConteinerBox_container_box__style__C8d7G",a="ConteinerBox_fromStart__FCHBa",s="ConteinerBox_fromEnd__6CJVd",i=r(184);function o(e){return(0,i.jsx)("div",{className:"".concat(t," ").concat(e.fromStart&&a," ").concat(e.fromEnd&&s),children:e.children})}},5294:function(e,n,r){r.d(n,{Z:function(){return d}});var t=r(2791),a=r(4164),s=r(5730),i="Confirmation_btn__lddQ2",o="Confirmation_modal_big_box__style__a-CgK",c="Confirmation_confirm__style__ij0BH",u="Confirmation_reject__style__erAtf",l=r(184);function d(e){var n=function(n){e.onClick(n)};return(0,l.jsxs)(t.Fragment,{children:[a.createPortal((0,l.jsx)(s.Z,{onClick:e.onClick}),document.getElementById("backdrop-root")),(0,l.jsxs)("div",{className:o,children:[(0,l.jsx)("span",{children:e.title}),(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{className:"".concat(i," ").concat(c),onClick:function(){return n(!0)},children:"Yes"}),(0,l.jsx)("button",{className:"".concat(i," ").concat(u),onClick:function(){return n(!1)},children:"No"})]})]})]})}}}]);
//# sourceMappingURL=955.fcd574fe.chunk.js.map