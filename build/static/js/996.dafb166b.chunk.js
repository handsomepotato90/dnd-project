"use strict";(self.webpackChunkdnd_project=self.webpackChunkdnd_project||[]).push([[996],{2537:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var r=n(4165),c=n(2982),s=n(5861),a=n(885),o=n(2791),i=n(80),l=n(7774),u=n(485),d=n(4097),_=n(9138),f=n(6510),h=n(6871),p=n(2790),x=n(5294),m=n(1794),k=n(184);function b(){var t=(0,o.useContext)(l.O),e=(0,d.x)(),n=e.isLoading,b=e.error,j=e.sendRequest,C=e.clearError,Z=(0,o.useState)(!1),v=(0,a.Z)(Z,2),y=v[0],g=v[1],S=(0,o.useState)(!1),E=(0,a.Z)(S,2),w=E[0],N=E[1],B=(0,o.useState)([]),A=(0,a.Z)(B,2),F=A[0],D=A[1],I=window.location.href.split("battle_scr/"),O=(0,h.s0)();(0,o.useEffect)((function(){var t=function(){var t=(0,s.Z)((0,r.Z)().mark((function t(){var e,n,s,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j("https://danddragon.herokuapp.com"+"/battle_scr/".concat(I[1]));case 3:for(e=t.sent,n=[],e.monsters.forEach((function(t){n.push.apply(n,(0,c.Z)(t))})),s=[].concat(n,(0,c.Z)(e.players)),a=0;a<s.length;a++)s[a].initiative=0;D((0,c.Z)(s)),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(0);case 13:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();t()}),[j]);var P=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==n){e.next=12;break}return e.prev=1,N(!1),e.next=5,j("https://danddragon.herokuapp.com"+"/battle_scr/".concat(I[1]),"DELETE",null,{Authorization:"Bearer "+t.token,"Content-Type":"application/json"});case 5:g(!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:e.next=13;break;case 12:N(!1);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return(0,k.jsxs)(k.Fragment,{children:[w&&(0,k.jsx)(x.Z,{title:"Are you shure that you whant to delete this Encounter?",onClick:P}),b&&(0,k.jsx)(p.Z,{header:"An Error Occurred",error:b,onClick:function(){C(null)}}),y&&(0,k.jsx)(f.Z,{onClick:function(){O("/")},title:"Encounter Deleted",text:"Your encounter has been deleted successfully"}),n&&(0,k.jsx)(_.Z,{asOverlay:!0}),(0,k.jsx)(m.Z,{children:F.map((function(t,e){return(0,k.jsx)(u.Z,{stats:t,width:"250px",height:"250px",battleSideBar:!0},e)}))}),(0,k.jsx)("div",{className:i.Z.delete_btn__holder,children:(0,k.jsxs)("button",{className:"".concat(i.Z.delete_btn__style," button"),onClick:function(){N(!0)},children:[" ","Delete Encounter"]})})]})}},5294:function(t,e,n){n.d(e,{Z:function(){return d}});var r=n(2791),c=n(4164),s=n(5730),a="Confirmation_btn__lddQ2",o="Confirmation_modal_big_box__style__a-CgK",i="Confirmation_confirm__style__ij0BH",l="Confirmation_reject__style__erAtf",u=n(184);function d(t){var e=function(e){t.onClick(e)};return(0,u.jsxs)(r.Fragment,{children:[c.createPortal((0,u.jsx)(s.Z,{onClick:t.onClick}),document.getElementById("backdrop-root")),(0,u.jsxs)("div",{className:o,children:[(0,u.jsx)("span",{children:t.title}),(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{className:"".concat(a," ").concat(i),onClick:function(){return e(!0)},children:"Yes"}),(0,u.jsx)("button",{className:"".concat(a," ").concat(l),onClick:function(){return e(!1)},children:"No"})]})]})]})}},6510:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(2791),c=n(4164),s=n(5730),a="SuccesfulSubmission_modal_big_box__style__CEnnF",o="SuccesfulSubmission_big_text__style__8ssXh",i="SuccesfulSubmission_text__style__SuHpA",l="SuccesfulSubmission_image__style__K3RZW",u=n.p+"static/media/green_check_mark.a03da16a3097c38b2a84.png",d=n(184);function _(t){return(0,d.jsxs)("div",{onClick:function(){return t.onClick(!1)},className:a,children:[(0,d.jsx)("img",{className:l,src:u,alt:"check mark"}),(0,d.jsx)("span",{className:o,children:t.title}),(0,d.jsx)("span",{className:i,children:t.text})]})}function f(t){return(0,d.jsxs)(r.Fragment,{children:[c.createPortal((0,d.jsx)(s.Z,{onClick:t.onClick}),document.getElementById("backdrop-root")),c.createPortal((0,d.jsx)(_,{onClick:t.onClick,monsterStats:t.monsterStats,title:t.title,text:t.text}),document.getElementById("overlay-root"))]})}}}]);
//# sourceMappingURL=996.dafb166b.chunk.js.map