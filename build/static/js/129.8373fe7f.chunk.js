"use strict";(self.webpackChunkdnd_project=self.webpackChunkdnd_project||[]).push([[129],{2537:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(4165),c=n(2982),s=n(5861),a=n(885),o=n(2791),i=n(80),l=n(7774),u=n(374),d=n(4097),_=n(9138),f=n(6510),h=n(6871),p=n(2790),x=n(5294),m=n(184);function k(){var e=(0,o.useContext)(l.O),t=(0,d.x)(),n=t.isLoading,k=t.error,b=t.sendRequest,j=t.clearError,Z=(0,o.useState)([]),C=(0,a.Z)(Z,2),v=C[0],y=C[1],g=(0,o.useState)([]),S=(0,a.Z)(g,2),E=S[0],w=S[1],N=(0,o.useState)(!1),B=(0,a.Z)(N,2),A=B[0],F=B[1],D=(0,o.useState)(!1),I=(0,a.Z)(D,2),O=I[0],P=I[1],H=window.location.href.split("battle_scr/"),K=(0,h.s0)();(0,o.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b("https://danddragon.herokuapp.com"+"/battle_scr/".concat(H[1]));case 3:t=e.sent,n=[],t.monsters.forEach((function(e){n.push.apply(n,(0,c.Z)(e)),y([].concat(n))})),w(t.players),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[b]);var L=function(){var t=(0,s.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==n){t.next=12;break}return t.prev=1,P(!1),t.next=5,b("https://danddragon.herokuapp.com"+"/battle_scr/".concat(H[1]),"DELETE",null,{Authorization:"Bearer "+e.token});case 5:F(!0),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:t.next=13;break;case 12:P(!1);case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return console.log(v),console.log(E),(0,m.jsxs)(m.Fragment,{children:[O&&(0,m.jsx)(x.Z,{title:"Are you shure that you whant to delete this Encounter?",onClick:L}),k&&(0,m.jsx)(p.Z,{header:"An Error Occurred",error:k,onClick:function(){j(null)}}),A&&(0,m.jsx)(f.Z,{onClick:function(){K("/")},title:"Encounter Deleted",text:"Your encounter has been deleted successfully"}),n&&(0,m.jsx)(_.Z,{asOverlay:!0}),(0,m.jsxs)("div",{className:i.Z.display__style,children:[v.map((function(e,t){return(0,m.jsx)(u.Z,{stats:e,width:"250px",height:"250px",battleSideBar:!0},t)})),E.map((function(e,t){return(0,m.jsx)(u.Z,{players:e,width:"250px",height:"250px",battleSideBar:!0},t)}))]}),(0,m.jsx)("div",{className:i.Z.delete_btn__holder,children:(0,m.jsxs)("button",{className:"".concat(i.Z.delete_btn__style," button"),onClick:function(){P(!0)},children:[" ","Delete Encounter"]})})]})}},5294:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(2791),c=n(4164),s=n(5730),a="Confirmation_btn__lddQ2",o="Confirmation_modal_big_box__style__a-CgK",i="Confirmation_confirm__style__ij0BH",l="Confirmation_reject__style__erAtf",u=n(184);function d(e){var t=function(t){e.onClick(t)};return(0,u.jsxs)(r.Fragment,{children:[c.createPortal((0,u.jsx)(s.Z,{onClick:e.onClick}),document.getElementById("backdrop-root")),(0,u.jsxs)("div",{className:o,children:[(0,u.jsx)("span",{children:e.title}),(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{className:"".concat(a," ").concat(i),onClick:function(){return t(!0)},children:"Yes"}),(0,u.jsx)("button",{className:"".concat(a," ").concat(l),onClick:function(){return t(!1)},children:"No"})]})]})]})}},6510:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(2791),c=n(4164),s=n(5730),a="SuccesfulSubmission_modal_big_box__style__CEnnF",o="SuccesfulSubmission_big_text__style__8ssXh",i="SuccesfulSubmission_text__style__SuHpA",l="SuccesfulSubmission_image__style__K3RZW",u=n.p+"static/media/green_check_mark.a03da16a3097c38b2a84.png",d=n(184);function _(e){return(0,d.jsxs)("div",{onClick:function(){return e.onClick(!1)},className:a,children:[(0,d.jsx)("img",{className:l,src:u,alt:"check mark"}),(0,d.jsx)("span",{className:o,children:e.title}),(0,d.jsx)("span",{className:i,children:e.text})]})}function f(e){return(0,d.jsxs)(r.Fragment,{children:[c.createPortal((0,d.jsx)(s.Z,{onClick:e.onClick}),document.getElementById("backdrop-root")),c.createPortal((0,d.jsx)(_,{onClick:e.onClick,monsterStats:e.monsterStats,title:e.title,text:e.text}),document.getElementById("overlay-root"))]})}}}]);
//# sourceMappingURL=129.8373fe7f.chunk.js.map