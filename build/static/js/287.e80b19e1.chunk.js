"use strict";(self.webpackChunkdnd_project=self.webpackChunkdnd_project||[]).push([[287],{6853:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(4165),c=n(2982),o=n(5861),s=n(885),a=n(2791),i=n(4097),l=n(7774),u=n(9138),d=n(6871),_=n(3504),f="MyProfile_edit_link__style__3FwXQ",m="MyProfile_edit_button__style__XPsDl",h="MyProfile_delete_btn__style__fEYUw",x="MyProfile_btn_load_more__9-kZt",p="MyProfile_search_bar__style__iS-up",j="MyProfile_voting_status__style__prUjt",y=n(184);function b(e){return(0,y.jsx)(_.rU,{className:"".concat(f),to:"/myProfile/Edit/".concat(e.id),children:(0,y.jsx)("button",{className:"".concat(m," button"),children:"Edit"})})}var k=n(5294),v=n(6510),g=n(2790),C=n(5868),Z=n(1794);function S(){var e,t=(0,i.x)(),n=t.isLoading,_=t.error,f=t.sendRequest,S=t.clearError,P=(0,a.useContext)(l.O),N=(0,a.useState)(""),E=(0,s.Z)(N,2),w=E[0],A=E[1],B=(0,a.useState)([]),M=(0,s.Z)(B,2),T=M[0],F=M[1],D=(0,a.useState)(!1),I=(0,s.Z)(D,2),O=I[0],U=I[1],K=(0,a.useState)(!1),L=(0,s.Z)(K,2),R=L[0],X=L[1],Y=(0,a.useState)(""),H=(0,s.Z)(Y,2),Q=H[0],q=H[1],z=(0,a.useState)(20),J=(0,s.Z)(z,2),W=J[0],G=J[1],V=(0,d.s0)(),$=(new Date).getTime();(0,a.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("https://danddragon.herokuapp.com/myProfile","POST",JSON.stringify({user:P.userId,limit:W,name:w}),{"Content-Type":"application/json"});case 3:t=e.sent,F((0,c.Z)(t)),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[f,P.userId,W,w]);var ee=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==t){e.next=12;break}return e.prev=1,X(!1),e.next=5,f("https://danddragon.herokuapp.com"+"/myProfile/".concat(Q),"DELETE",null,{Authorization:"Bearer "+P.token});case 5:U(!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:e.next=13;break;case 12:X(!1);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return(0,y.jsxs)(y.Fragment,{children:[n&&(0,y.jsx)(u.Z,{as0verlay:!0}),_&&(0,y.jsx)(g.Z,{header:"An Error Occurred",error:_,onClick:function(){S(null)}}),R&&(0,y.jsx)(k.Z,{title:"Are you shure you whant to delete this Creature?",onClick:ee}),O&&(0,y.jsx)(v.Z,{onClick:function(){V("/")},title:"Creature Deleted",text:"Your creature has been deleted successfully"}),(0,y.jsx)("input",{className:p,onKeyUp:function(t){e&&clearTimeout(e),e=setTimeout((function(){A(t.target.value)}),1e3)},placeholder:"Search"}),(0,y.jsx)(Z.Z,{children:T.map((function(e,t){return(0,y.jsxs)(C.Z,{childrenTopAndBottom:!0,battleSideBar:!1,stats:e,modalStats:!0,width:"250px",height:"250px",children:[(0,y.jsx)("span",{className:"".concat(e.timeforvoting>$?"grey":e.votes.number>0||void 0===e.votes.number?"green":"red"," \n                  ").concat(j),children:e.timeforvoting>$?"Ongoing":e.votes.number>0||void 0===e.votes.number?"Accepted":"Rejected"}),(0,y.jsxs)("div",{children:[(0,y.jsx)(b,{id:e._id}),(0,y.jsxs)("button",{className:"".concat(h," ").concat(m," button"),onClick:function(){return t=e._id,X(!0),void q(t);var t},children:[" ","Delete"]})]})]},t)}))}),T.length>10&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("section",{children:[(0,y.jsx)("a",{href:"/myProfile/?page=1",children:"1"}),(0,y.jsx)("a",{href:"/myProfile/?page=2",children:"2"}),(0,y.jsx)("a",{href:"/myProfile/?page=3",children:"3"})]}),(0,y.jsx)("button",{className:"".concat(x," button"),onClick:function(){G(W+10)},children:"Load More"})]})]})}},5294:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(2791),c=n(4164),o=n(5730),s="Confirmation_btn__lddQ2",a="Confirmation_modal_big_box__style__a-CgK",i="Confirmation_confirm__style__ij0BH",l="Confirmation_reject__style__erAtf",u=n(184);function d(e){var t=function(t){e.onClick(t)};return(0,u.jsxs)(r.Fragment,{children:[c.createPortal((0,u.jsx)(o.Z,{onClick:e.onClick}),document.getElementById("backdrop-root")),(0,u.jsxs)("div",{className:a,children:[(0,u.jsx)("span",{children:e.title}),(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{className:"".concat(s," ").concat(i),onClick:function(){return t(!0)},children:"Yes"}),(0,u.jsx)("button",{className:"".concat(s," ").concat(l),onClick:function(){return t(!1)},children:"No"})]})]})]})}},6510:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(2791),c=n(4164),o=n(5730),s="SuccesfulSubmission_modal_big_box__style__CEnnF",a="SuccesfulSubmission_big_text__style__8ssXh",i="SuccesfulSubmission_text__style__SuHpA",l="SuccesfulSubmission_image__style__K3RZW",u=n.p+"static/media/green_check_mark.a03da16a3097c38b2a84.png",d=n(184);function _(e){return(0,d.jsxs)("div",{onClick:function(){return e.onClick(!1)},className:s,children:[(0,d.jsx)("img",{className:l,src:u,alt:"check mark"}),(0,d.jsx)("span",{className:a,children:e.title}),(0,d.jsx)("span",{className:i,children:e.text})]})}function f(e){return(0,d.jsxs)(r.Fragment,{children:[c.createPortal((0,d.jsx)(o.Z,{onClick:e.onClick}),document.getElementById("backdrop-root")),c.createPortal((0,d.jsx)(_,{onClick:e.onClick,monsterStats:e.monsterStats,title:e.title,text:e.text}),document.getElementById("overlay-root"))]})}}}]);
//# sourceMappingURL=287.e80b19e1.chunk.js.map