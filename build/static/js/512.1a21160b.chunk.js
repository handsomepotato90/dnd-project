"use strict";(self.webpackChunkdnd_project=self.webpackChunkdnd_project||[]).push([[512],{1086:function(e,n,t){t(2791);n.Z=t.p+"static/media/Add_user.4b53a255584887161255411ef4a2cc81.svg"},3054:function(e,n,t){t(2791);n.Z=t.p+"static/media/reject.686ceca4ac64a8dea688a851472ff946.svg"},1455:function(e,n,t){t.d(n,{Z:function(){return l}});var s=t(885),r=t(2791),o=t(8589),a=t(4310),i=t(9967),c=t(184);function l(e){var n=(0,r.useState)([]),t=(0,s.Z)(n,2),l=t[0],_=t[1];(0,r.useEffect)((function(){e.friends&&_(e.friends)}),[e.friends]);var u=function(n,t){e.remove&&e.onSelection(n,t),e.add&&e.onSelection(n,t)};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{className:i.Z.span_title__style,children:e.title}),(0,c.jsx)(o.Z,{children:l.map((function(n,t){return(0,c.jsx)(a.Z,{name:n.name,id:n._id,onReturnUserInformation:u,remove:e.remove,add:e.add,children:e.children},t)}))})]})}},4310:function(e,n,t){t.d(n,{Z:function(){return c}});var s=t(9967),r=t(2187),o=t(3054),a=t(1086),i=t(184);function c(e){var n=function(){e.onReturnUserInformation(e.name,e.id)};return(0,i.jsxs)("div",{className:s.Z.users_holding_div__style,children:[(0,i.jsx)("span",{className:s.Z.users_name__style,children:e.name}),e.sendReq&&e.children,e.remove&&(0,i.jsx)("div",{onClick:n,children:(0,i.jsx)(r.HZ,{Image:o.Z,height:"40",color:"red",width:"70"})}),e.invites&&e.children,e.add&&(0,i.jsx)("div",{onClick:n,children:(0,i.jsx)(r.HZ,{Image:a.Z,height:"40",color:"red",width:"70"})})]})}},8975:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var s=t(4165),r=t(2982),o=t(5861),a=t(885),i=t(2791),c=t(9308),l=t(1455),_=t(1794),u=t(953),d=t(4097),f=t(7774),h=t(2790),p=t(9138),v=t(5294),x=t(6871),m=t(7976),y=(t(7485),t(184)),b=[{value:24,label:"1 Day"},{value:48,label:"2 Days"},{value:72,label:"3 Days"},{value:96,label:"4 Days"},{value:120,label:"5 Days"},{value:144,label:"6 Days"},{value:168,label:"1 Week"},{value:336,label:"2 Week"},{value:504,label:"3 Week"},{value:672,label:"1 Month"}];function Z(){var e=(0,d.x)(),n=e.isLoading,t=e.error,Z=e.sendRequest,j=e.clearError,k=(0,i.useContext)(f.O),S=(0,i.useState)([]),C=(0,a.Z)(S,2),g=C[0],N=C[1],w=(0,i.useState)(!1),F=(0,a.Z)(w,2),I=F[0],D=F[1],O=(0,i.useState)(!1),E=(0,a.Z)(O,2),B=E[0],H=E[1],P=(0,i.useState)(),z=(0,a.Z)(P,2),A=z[0],M=z[1],R=(0,i.useState)([]),T=(0,a.Z)(R,2),W=T[0],q=T[1],G=(0,i.useState)([]),K=(0,a.Z)(G,2),J=K[0],U=K[1],X=(0,i.useState)([]),V=(0,a.Z)(X,2),L=V[0],Q=V[1],Y=(0,i.useState)(""),$=(0,a.Z)(Y,2),ee=$[0],ne=$[1],te=(0,i.useState)(!1),se=(0,a.Z)(te,2),re=se[0],oe=se[1],ae=(0,x.s0)();(0,i.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z("https://danddragon.herokuapp.com/myProfile/Sessions","POST",JSON.stringify({userId:k.userId}),{"Content-Type":"application/json"});case 3:n=e.sent,q((0,r.Z)(n)),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z]);var ie=function(e,n){J.find((function(e){return e._id===n}))||(U([].concat((0,r.Z)(J),[{name:e,_id:n}])),Q([].concat((0,r.Z)(L),[n])))},ce=(0,i.useCallback)((function(e){if(e<new Date)return!0}),[]),le=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==n){e.next=10;break}return e.prev=1,oe(!1),e.next=5,Z("https://danddragon.herokuapp.com/myProfile/Sessions/upload_session","POST",JSON.stringify({title:ee,isDm:I,isHost:B,status:"OPEN",hoursForVoting:A,dates:g,userId:k.userId,invitedFriends:L}),{"Content-Type":"application/json"});case 5:ae("/myProfile/Sessions/AllSessions"),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:oe(!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,y.jsxs)(_.Z,{children:[n&&(0,y.jsx)(p.Z,{as0verlay:!0}),t&&(0,y.jsx)(h.Z,{header:"An Error Occurred",error:t,onClick:function(){j(null)}}),re&&(0,y.jsx)(v.Z,{title:"Are you shure you whant to put this Session up for vote?",onClick:le}),(0,y.jsxs)("div",{className:m.Z.calendar_and_other___style,children:[(0,y.jsx)("input",{onChange:function(e){ne(e.target.value)},value:ee,placeholder:"Here goes the Session title"}),(0,y.jsxs)("div",{className:m.Z.check_box__style,children:[(0,y.jsx)("span",{children:"Role:"}),(0,y.jsxs)("label",{children:[(0,y.jsx)("input",{type:"checkbox",checked:I,onChange:function(){D((function(e){return!e}))}}),"DM"]}),(0,y.jsxs)("label",{children:[(0,y.jsx)("input",{type:"checkbox",checked:B,onChange:function(){H((function(e){return!e}))}}),"Host"]})]}),(0,y.jsx)(u.ZP,{options:b,name:"hours",onChange:function(e){M(e.value)},onSelection:ie}),(0,y.jsx)(c.f,{isDisabled:ce,useDarkMode:!0,size:480,fontSize:18,value:g,isMultiSelector:!0,onChange:N}),(0,y.jsx)("button",{className:"button ".concat(m.Z.upload_button__style),onClick:function(){oe(!0)},children:"Upload Session"})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)(l.Z,{className:"black__background overflow flex_nowrap",title:"My Friends",remove:!1,onSelection:ie,friends:W,add:!0}),(0,y.jsx)(l.Z,{className:"black__background overflow flex_nowrap",title:"Selected to participate in the next session",friends:J,remove:!0,onSelection:function(e,n){for(var t=[],s=0;s<J.length;s++)J[s]._id!==n&&t.push(J[s]),U([].concat(t))}})]})]})}},1794:function(e,n,t){t.d(n,{Z:function(){return i}});var s="ConteinerBox_container_box__style__C8d7G",r="ConteinerBox_fromStart__FCHBa",o="ConteinerBox_fromEnd__6CJVd",a=t(184);function i(e){return(0,a.jsx)("div",{className:"".concat(s," ").concat(e.fromStart&&r," ").concat(e.fromEnd&&o),children:e.children})}},5294:function(e,n,t){t.d(n,{Z:function(){return u}});var s=t(2791),r=t(4164),o=t(5730),a="Confirmation_btn__lddQ2",i="Confirmation_modal_big_box__style__a-CgK",c="Confirmation_confirm__style__ij0BH",l="Confirmation_reject__style__erAtf",_=t(184);function u(e){var n=function(n){e.onClick(n)};return(0,_.jsxs)(s.Fragment,{children:[r.createPortal((0,_.jsx)(o.Z,{onClick:e.onClick}),document.getElementById("backdrop-root")),(0,_.jsxs)("div",{className:i,children:[(0,_.jsx)("span",{children:e.title}),(0,_.jsxs)("div",{children:[(0,_.jsx)("button",{className:"".concat(a," ").concat(c),onClick:function(){return n(!0)},children:"Yes"}),(0,_.jsx)("button",{className:"".concat(a," ").concat(l),onClick:function(){return n(!1)},children:"No"})]})]})]})}},9967:function(e,n){n.Z={users_holding_div__style:"Friends_users_holding_div__style__t4y6X",users_name__style:"Friends_users_name__style__DOjXH",users_send_request__style:"Friends_users_send_request__style__WSp9B",message__style:"Friends_message__style__zG1G8",decision_box__style:"Friends_decision_box__style__Kheb2",space_between:"Friends_space_between__IIETO",span_title__style:"Friends_span_title__style__9Wblf",searchbox__style:"Friends_searchbox__style__67i0v",buttons__style:"Friends_buttons__style__IO0ZN",size:"Friends_size__m1DXI"}},7976:function(e,n){n.Z={all_sessions__style:"Sessions_all_sessions__style__hGKpA",box_name__style:"Sessions_box_name__style__jhmNO",calendar_and_other___style:"Sessions_calendar_and_other___style__KCzl+",check_box__style:"Sessions_check_box__style__19B3o",upload_button__style:"Sessions_upload_button__style__vrIcr"}}}]);
//# sourceMappingURL=512.1a21160b.chunk.js.map