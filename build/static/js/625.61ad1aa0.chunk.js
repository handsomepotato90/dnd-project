"use strict";(self.webpackChunkdnd_project=self.webpackChunkdnd_project||[]).push([[625],{4774:function(e,s,t){t.r(s),t.d(s,{default:function(){return p}});var n=t(4165),a=t(2982),r=t(5861),o=t(885),l=t(2791),c=t(4097),i=t(7774),u=t(1794),_=t(7506),d=t(2790),m=t(9138),f=t(6871),h=t(184);function p(){var e=(0,c.x)(),s=e.isLoading,t=e.error,p=e.sendRequest,y=e.clearError,v=(0,l.useContext)(i.O),b=(0,l.useState)([]),x=(0,o.Z)(b,2),S=x[0],Z=x[1],C=(0,l.useState)([]),g=(0,o.Z)(C,2),D=g[0],j=g[1],k=(0,l.useState)([]),w=(0,o.Z)(k,2),E=w[0],N=w[1],U=(0,f.s0)(),A=(new Date).getTime(),T=window.location.href.split("AllSessions/");(0,l.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var s,t,r,o,l,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("https://danddragon.herokuapp.com"+"/myProfile/Sessions/AllSessions/".concat(T[1]),"GET",null,{Authorization:"Bearer "+v.token});case 3:for(s=e.sent,Z(s),N((0,a.Z)(s.dates)),"scheduled"===s.status&&N((0,a.Z)(s.scheduledFor)),t=0;t<s.votes.length;t++)if(r=s.votes[t],s.votes[t].user===v.userId){for(o=[],l=0;l<r.dates.length;l++)c=r.dates[l],o.push(new Date(c));j([].concat(o))}e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var L=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(s){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(S.timeforvoting<A)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,p("https://danddragon.herokuapp.com"+"/myProfile/Sessions/AllSessions/".concat(T[1]),"PATCH",JSON.stringify({dates:s,username:v.username,id:v.userId,calendarId:T[1]}),{Authorization:"Bearer "+v.token,"Content-Type":"application/json"});case 5:U("/myProfile/Sessions/AllSessions/".concat(T[1])),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(s){return e.apply(this,arguments)}}();return(0,h.jsxs)(u.Z,{children:[s&&(0,h.jsx)(m.Z,{as0verlay:!0}),t&&(0,h.jsx)(d.Z,{header:"An Error Occurred",error:t,onClick:function(){y(null)}}),(0,h.jsx)(_.Z,{resData:S,selectedDatesFromDungonMaster:E,userAlreadySelectedDates:D,url:T[1],calendarButtonText:"Submit",onClickSubmit:L})]})}},7506:function(e,s,t){t.d(s,{Z:function(){return g}});var n=t(4165),a=t(5861),r=t(885),o=t(2791),l=t(4097),c=t(7774),i=t(2982),u=t(5087),_=t(8589),d=t(2949),m=t(184);function f(e){var s=function(){var e=(0,o.useRef)();return(0,o.useEffect)((function(){return e.current.scrollIntoView()})),(0,m.jsx)("div",{ref:e})},t=(0,o.useState)([]),n=(0,r.Z)(t,2),a=n[0],l=n[1];return(0,o.useEffect)((function(){l([].concat((0,i.Z)(e.comments),(0,i.Z)(e.wscomments)))}),[e]),(0,m.jsxs)(_.Z,{className:e.className,children:[a&&a.map((function(s,t){return(0,m.jsxs)("div",{className:"".concat(d.Z.general_style," ").concat(e.thisUser===s.username?d.Z.sameuser__style:d.Z.diffuser__style),children:[e.thisUser!==s.username&&(0,m.jsx)("span",{dangerouslySetInnerHTML:{__html:s.username},className:"".concat(d.Z.username__style," ").concat(d.Z.general_comment__style," ")}),(0,m.jsx)("span",{dangerouslySetInnerHTML:{__html:s.comment},className:"".concat(d.Z.text__style,"  ").concat(d.Z.general_comment__style," ").concat(e.thisUser===s.username?d.Z.sameuser__bcccolor__style:d.Z.diffuser__bcccolor__style)})]},t)})),(0,m.jsx)(s,{})]})}function h(e){var s=(0,o.useState)(""),t=(0,r.Z)(s,2),_=t[0],h=t[1],p=(0,o.useState)(e.dbComments),y=(0,r.Z)(p,2),v=y[0],b=y[1],x=(0,o.useState)(v),S=(0,r.Z)(x,2),Z=S[0],C=S[1],g=(0,l.x)().sendRequest,D=(0,o.useContext)(c.O);(0,o.useEffect)((function(){b(e.dbComments)}),[e]);var j=window.location.href.split("/"),k="https://danddragon.herokuapp.com".replace("http","ws"),w=new u.w3cwebsocket("".concat(k,"/").concat(j[6]));(0,o.useEffect)((function(){w.onopen=function(){},w.onmessage=function(e){if("string"===typeof e.data){var s=JSON.parse(e.data);C([].concat((0,i.Z)(Z),[s]))}},w.onerror=function(){}}),[w.onmessage,Z]);var E=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==_.trim()){e.next=2;break}return e.abrupt("return");case 2:return w.send(JSON.stringify({comment:_,username:D.username})),e.prev=3,e.next=6,g("https://danddragon.herokuapp.com/myProfile/Sessions/AllSessions/comment","POST",JSON.stringify({title:_,username:D.username,id:D.userId,calendarId:j[6]}),{Authorization:"Bearer "+D.token,"Content-Type":"application/json"});case 6:h(""),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(3);case 11:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{className:"".concat(d.Z.comment__big_box_holder," "),children:[(0,m.jsx)(f,{className:"black__background overflow flex_nowrap",thisUser:D.username,comments:v,wscomments:Z}),(0,m.jsxs)("div",{className:"".concat(d.Z.comment__input__style," "),children:[(0,m.jsx)("input",{onChange:function(e){h(e.target.value)},placeholder:"Aa",value:_}),(0,m.jsxs)("button",{className:"button",onClick:E,children:[" ","Comment"]})]})]})}var p=t(9308),y=t(2702),v=t(2790),b=t(9138),x=t(5294),S=t(6871),Z=t(953),C=(t(7485),[{value:1,label:"1:00"},{value:2,label:"2:00"},{value:3,label:"3:00"},{value:4,label:"4:00"},{value:5,label:"5:00"},{value:6,label:"6:00"},{value:7,label:"7:00"},{value:8,label:"8:00"},{value:9,label:"9:00"},{value:10,label:"10:00"},{value:11,label:"11:00"},{value:12,label:"12:00"},{value:13,label:"13:00"},{value:14,label:"14:00"},{value:15,label:"15:00"},{value:16,label:"16:00"},{value:17,label:"17:00"},{value:18,label:"18:00"},{value:19,label:"19:00"},{value:20,label:"20:00"},{value:21,label:"21:00"},{value:22,label:"22:00"},{value:23,label:"23:00"},{value:24,label:"24:00"}]);function g(e){var s=(0,o.useState)([]),t=(0,r.Z)(s,2),i=t[0],u=t[1],_=(0,l.x)(),f=_.isLoading,g=_.error,D=_.sendRequest,j=_.clearError,k=(0,o.useState)(!1),w=(0,r.Z)(k,2),E=w[0],N=w[1],U=(0,o.useState)(!1),A=(0,r.Z)(U,2),T=A[0],L=A[1],O=(0,o.useState)(),P=(0,r.Z)(O,2),B=P[0],I=P[1],H=(0,o.useContext)(c.O),M=(0,S.s0)();(0,o.useEffect)((function(){e.userAlreadySelectedDates&&e.userAlreadySelectedDates.length>0&&u(e.userAlreadySelectedDates)}),[e.userAlreadySelectedDates]);var z=function(e){for(var s=[],t=0;t<e.length;t++)s.push(new Date(e[t]).getTime());return s}("SCHEDULED"===e.resData.status?e.resData.scheduledFor:e.selectedDatesFromDungonMaster),F=function(){var s=(0,a.Z)((0,n.Z)().mark((function s(t){return(0,n.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!1!==t){s.next=3;break}return N(!1),s.abrupt("return");case 3:return s.prev=3,N(!1),s.next=7,D("https://danddragon.herokuapp.com"+"/myProfile/Sessions/MySessions/".concat(e.url),"POST",JSON.stringify({calendarId:e.url,status:"CLOSED"}),{Authorization:"Bearer "+H.token,"Content-Type":"application/json"});case 7:M("/myProfile/Sessions/AllSessions"),s.next=12;break;case 10:s.prev=10,s.t0=s.catch(3);case 12:case"end":return s.stop()}}),s,null,[[3,10]])})));return function(e){return s.apply(this,arguments)}}(),J=function(){var s=(0,a.Z)((0,n.Z)().mark((function s(t){return(0,n.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!1!==t){s.next=3;break}return L(!1),s.abrupt("return");case 3:return s.prev=3,L(!1),s.next=7,D("https://danddragon.herokuapp.com"+"/myProfile/Sessions/MySessions/".concat(e.url),"DELETE",JSON.stringify({calendarId:e.url}),{Authorization:"Bearer "+H.token,"Content-Type":"application/json"});case 7:s.next=11;break;case 9:s.prev=9,s.t0=s.catch(3);case 11:M("/myProfile/Sessions/AllSessions");case 12:case"end":return s.stop()}}),s,null,[[3,9]])})));return function(e){return s.apply(this,arguments)}}();return(0,m.jsxs)(m.Fragment,{children:[f&&(0,m.jsx)(b.Z,{as0verlay:!0}),g&&(0,m.jsx)(v.Z,{header:"An Error Occurred",error:g,onClick:function(){j(null)}}),E&&(0,m.jsx)(x.Z,{title:"Are you shure that you want to CLOSE this session.",onClick:F}),T&&(0,m.jsx)(x.Z,{title:"Are you shure that you want to DELETE this session.",onClick:J}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:d.Z.info_about_session__style,children:[e.resData.timeforvoting&&(0,m.jsx)("span",{className:d.Z.countdown__style,children:(0,m.jsx)(y.ZP,{date:e.resData.timeforvoting})}),(0,m.jsxs)("span",{className:d.Z.organiser__span__style,children:["Invited by : ",e.resData.dmStatus&&"DM",e.resData.dmStatus&&e.resData.hostStatus&&" and a ",e.resData.hostStatus&&"HOST",(0,m.jsx)("span",{className:d.Z.organiser__span__style,children:e.resData.creatorName})]})]}),(0,m.jsxs)("div",{className:"".concat(d.Z.info_about_session__style),children:[(0,m.jsx)(p.f,{isDisabled:function(e){return!z.includes(e.getTime())},useDarkMode:!0,size:390,fontSize:18,value:"SCHEDULED"===e.resData.status?[new Date(e.resData.scheduledFor)]:i,isMultiSelector:!0,onChange:u}),(0,m.jsxs)("div",{className:"".concat(d.Z.schedule_buttons__style),children:["SCHEDULED"===e.resData.status||"CLOSED"===e.resData.status?null:(0,m.jsxs)("button",{style:{width:"38%"},className:"button",onClick:function(){e.onClickSubmit(i,B)},children:[" ",e.calendarButtonText]}),e.canCloseSession&&"SCHEDULED"!==e.resData.status&&"CLOSED"!==e.resData.status&&(0,m.jsx)(Z.ZP,{options:C,name:"hours",onChange:function(e){I(e.value)},menuPlacement:"auto"}),e.canCloseSession&&("CLOSED"===e.resData.status?(0,m.jsxs)("button",{style:{width:"38%"},className:"button",onClick:function(){L(!0)},children:[" ","Delete Session"]}):(0,m.jsxs)("button",{style:{width:"38%"},className:"button",onClick:function(){N(!0)},children:[" ","Close Session"]}))]})]})]}),(0,m.jsx)(h,{dbComments:e.resData.comments||[]})]})}},1794:function(e,s,t){t.d(s,{Z:function(){return l}});var n="ConteinerBox_container_box__style__C8d7G",a="ConteinerBox_fromStart__FCHBa",r="ConteinerBox_fromEnd__6CJVd",o=t(184);function l(e){return(0,o.jsx)("div",{className:"".concat(n," ").concat(e.fromStart&&a," ").concat(e.fromEnd&&r),children:e.children})}},5294:function(e,s,t){t.d(s,{Z:function(){return _}});var n=t(2791),a=t(4164),r=t(5730),o="Confirmation_btn__lddQ2",l="Confirmation_modal_big_box__style__a-CgK",c="Confirmation_confirm__style__ij0BH",i="Confirmation_reject__style__erAtf",u=t(184);function _(e){var s=function(s){e.onClick(s)};return(0,u.jsxs)(n.Fragment,{children:[a.createPortal((0,u.jsx)(r.Z,{onClick:e.onClick}),document.getElementById("backdrop-root")),(0,u.jsxs)("div",{className:l,children:[(0,u.jsx)("span",{children:e.title}),(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{className:"".concat(o," ").concat(c),onClick:function(){return s(!0)},children:"Yes"}),(0,u.jsx)("button",{className:"".concat(o," ").concat(i),onClick:function(){return s(!1)},children:"No"})]})]})]})}},2949:function(e,s){s.Z={session_all__style:"sessionUi_session_all__style__Lz5Nd",user_session__style:"sessionUi_user_session__style__6n8Uy",invited_session__style:"sessionUi_invited_session__style__DzoA8",scheduled_session__style:"sessionUi_scheduled_session__style__MCB7e",text__inside__style:"sessionUi_text__inside__style__IPShv",info_about_session__style:"sessionUi_info_about_session__style__kQwwU",countdown__style:"sessionUi_countdown__style__F+cQZ",organiser__span__style:"sessionUi_organiser__span__style__-2bLP",comment__input__style:"sessionUi_comment__input__style__QLLb6",general_comment__style:"sessionUi_general_comment__style__PQvpl",username__style:"sessionUi_username__style__MyuZe",text__style:"sessionUi_text__style__ZSVuC",sameuser__style:"sessionUi_sameuser__style__zs0da",general_style:"sessionUi_general_style__G-JyT",sameuser__bcccolor__style:"sessionUi_sameuser__bcccolor__style__N11UC",diffuser__style:"sessionUi_diffuser__style__HEhWV",diffuser__bcccolor__style:"sessionUi_diffuser__bcccolor__style__hFRd7",schedule_buttons__style:"sessionUi_schedule_buttons__style__Dw-fb",comment__big_box_holder:"sessionUi_comment__big_box_holder__smqUT"}}}]);
//# sourceMappingURL=625.61ad1aa0.chunk.js.map