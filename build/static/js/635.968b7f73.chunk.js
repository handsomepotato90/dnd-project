"use strict";(self.webpackChunkdnd_project=self.webpackChunkdnd_project||[]).push([[635],{5385:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var n=s(4165),a=s(2982),r=s(5861),o=s(885),i=s(2791),c=s(4097),l=s(7774),u=s(1794),_=s(7506),d=s(2790),f=s(9138),m=s(5294),h=s(6871),y=s(184);function p(){var e=(0,c.x)(),t=e.isLoading,s=e.error,p=e.sendRequest,v=e.clearError,b=(0,i.useContext)(l.O),x=(0,i.useState)([]),Z=(0,o.Z)(x,2),S=Z[0],C=Z[1],g=(0,i.useState)([]),j=(0,o.Z)(g,2),k=j[0],D=j[1],w=(0,i.useState)(!1),E=(0,o.Z)(w,2),N=E[0],U=E[1],A=(0,i.useState)(!1),O=(0,o.Z)(A,2),T=O[0],L=O[1],P=(0,i.useState)([]),M=(0,o.Z)(P,2),B=M[0],I=M[1],H=(0,i.useState)(),z=(0,o.Z)(H,2),F=z[0],J=z[1],Q=(0,h.s0)(),R=window.location.href.split("MySessions/");(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,s,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("https://danddragon.herokuapp.com"+"/myProfile/Sessions/MySessions/".concat(R[1]),"GET",null,{Authorization:"Bearer "+b.token,"Content-Type":"application/json"});case 3:for(t=e.sent,C(t),s=[],r=0;r<t.votes.length;r++)s.push.apply(s,(0,a.Z)(t.votes[r].dates));D([].concat(s)),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var q=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==t){e.next=13;break}if(!(B.length>1||0===B.length)){e.next=4;break}return L(!0),e.abrupt("return");case 4:return e.prev=4,U(!1),e.next=8,p("https://danddragon.herokuapp.com"+"/myProfile/Sessions/MySessions/".concat(R[1]),"PATCH",JSON.stringify({dates:B,status:"SCHEDULED",username:b.username,hours:F,id:b.userId,calendarId:R[1]}),{Authorization:"Bearer "+b.token,"Content-Type":"application/json"});case 8:Q("/myProfile/Sessions/AllSessions"),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(4);case 13:U(!1);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}();return(0,y.jsxs)(u.Z,{children:[t&&(0,y.jsx)(f.Z,{as0verlay:!0}),s&&(0,y.jsx)(d.Z,{header:"An Error Occurred",error:s,onClick:function(){v(null)}}),N&&(0,y.jsx)(m.Z,{title:"Are you shure about the date you put in ? There is no turning back.",onClick:q}),T&&(0,y.jsx)(d.Z,{header:"Please select only ONE date!",onClick:function(){L(!1)}}),(0,y.jsx)(_.Z,{resData:S,selectedDatesFromDungonMaster:function(e){var t=e.reduce((function(e,t){return t in e?e[t]++:e[t]=1,e}),{}),s=Math.max.apply(Math,(0,a.Z)(Object.values(t)));return Object.keys(t).filter((function(e){return t[e]===s}))}(k),calendarButtonText:"Schedule Session",canCloseSession:!0,onClickSubmit:function(e,t){U(!0),I((0,a.Z)(e)),J(t)},url:R[1]})]})}},7795:function(e,t,s){s.d(t,{Z:function(){return o}});var n=s(885),a=s(2791),r=s(1415);function o(){var e=(0,r.Z)(),t=(0,a.useState)(480),s=(0,n.Z)(t,2),o=s[0],i=s[1];return(0,a.useEffect)((function(){e.width>1920&&i(540),e.width>1024&&e.width<1920&&i(480),e.width<1024&&e.width>420&&i(390),e.width<420&&i(330)}),[e.width]),o}},7506:function(e,t,s){s.d(t,{Z:function(){return j}});var n=s(4165),a=s(5861),r=s(885),o=s(2791),i=s(4097),c=s(7774),l=s(2982),u=s(5087),_=s(8589),d=s(2949),f=s(184);function m(e){var t=function(){var e=(0,o.useRef)();return(0,o.useEffect)((function(){return e.current.scrollIntoView()})),(0,f.jsx)("div",{ref:e})},s=(0,o.useState)([]),n=(0,r.Z)(s,2),a=n[0],i=n[1];return(0,o.useEffect)((function(){i([].concat((0,l.Z)(e.comments),(0,l.Z)(e.wscomments)))}),[e]),(0,f.jsxs)(_.Z,{className:e.className,children:[a&&a.map((function(t,s){return(0,f.jsxs)("div",{className:"".concat(d.Z.general_style," ").concat(e.thisUser===t.username?d.Z.sameuser__style:d.Z.diffuser__style),children:[e.thisUser!==t.username&&(0,f.jsx)("span",{dangerouslySetInnerHTML:{__html:t.username},className:"".concat(d.Z.username__style," ").concat(d.Z.general_comment__style," ")}),(0,f.jsx)("span",{dangerouslySetInnerHTML:{__html:t.comment},className:"".concat(d.Z.text__style,"  ").concat(d.Z.general_comment__style," ").concat(e.thisUser===t.username?d.Z.sameuser__bcccolor__style:d.Z.diffuser__bcccolor__style)})]},s)})),(0,f.jsx)(t,{})]})}function h(e){var t=(0,o.useState)(""),s=(0,r.Z)(t,2),_=s[0],h=s[1],y=(0,o.useState)(e.dbComments),p=(0,r.Z)(y,2),v=p[0],b=p[1],x=(0,o.useState)(v),Z=(0,r.Z)(x,2),S=Z[0],C=Z[1],g=(0,i.x)().sendRequest,j=(0,o.useContext)(c.O);(0,o.useEffect)((function(){b(e.dbComments)}),[e]);var k=window.location.href.split("/"),D="https://danddragon.herokuapp.com".replace("http","ws"),w=new u.w3cwebsocket("".concat(D,"/").concat(k[6]));(0,o.useEffect)((function(){w.onopen=function(){},w.onmessage=function(e){if("string"===typeof e.data){var t=JSON.parse(e.data);C([].concat((0,l.Z)(S),[t]))}},w.onerror=function(){}}),[w.onmessage,S]);var E=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==_.trim()){e.next=2;break}return e.abrupt("return");case 2:return w.send(JSON.stringify({comment:_,username:j.username})),e.prev=3,e.next=6,g("https://danddragon.herokuapp.com/myProfile/Sessions/AllSessions/comment","POST",JSON.stringify({title:_,username:j.username,id:j.userId,calendarId:k[6]}),{Authorization:"Bearer "+j.token,"Content-Type":"application/json"});case 6:h(""),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(3);case 11:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"".concat(d.Z.comment__big_box_holder," "),children:[(0,f.jsx)(m,{className:"black__background overflow flex_nowrap",thisUser:j.username,comments:v,wscomments:S}),(0,f.jsxs)("div",{className:"".concat(d.Z.comment__input__style," "),children:[(0,f.jsx)("input",{onChange:function(e){h(e.target.value)},placeholder:"Aa",value:_}),(0,f.jsxs)("button",{className:"button",onClick:E,children:[" ","Comment"]})]})]})}var y=s(9308),p=s(2702),v=s(2790),b=s(9138),x=s(5294),Z=s(6871),S=s(7081),C=s(7795),g=(s(7485),[{value:1,label:"1:00"},{value:2,label:"2:00"},{value:3,label:"3:00"},{value:4,label:"4:00"},{value:5,label:"5:00"},{value:6,label:"6:00"},{value:7,label:"7:00"},{value:8,label:"8:00"},{value:9,label:"9:00"},{value:10,label:"10:00"},{value:11,label:"11:00"},{value:12,label:"12:00"},{value:13,label:"13:00"},{value:14,label:"14:00"},{value:15,label:"15:00"},{value:16,label:"16:00"},{value:17,label:"17:00"},{value:18,label:"18:00"},{value:19,label:"19:00"},{value:20,label:"20:00"},{value:21,label:"21:00"},{value:22,label:"22:00"},{value:23,label:"23:00"},{value:24,label:"24:00"}]);function j(e){var t=(0,o.useState)([]),s=(0,r.Z)(t,2),l=s[0],u=s[1],_=(0,i.x)(),m=_.isLoading,j=_.error,k=_.sendRequest,D=_.clearError,w=(0,o.useState)(!1),E=(0,r.Z)(w,2),N=E[0],U=E[1],A=(0,o.useState)(!1),O=(0,r.Z)(A,2),T=O[0],L=O[1],P=(0,o.useState)(),M=(0,r.Z)(P,2),B=M[0],I=M[1],H=(0,C.Z)(),z=(0,o.useContext)(c.O),F=(0,Z.s0)();(0,o.useEffect)((function(){e.userAlreadySelectedDates&&e.userAlreadySelectedDates.length>0&&u(e.userAlreadySelectedDates)}),[e.userAlreadySelectedDates]);var J=function(e){for(var t=[],s=0;s<e.length;s++)t.push(new Date(e[s]).getTime());return t}("SCHEDULED"===e.resData.status?e.resData.scheduledFor:e.selectedDatesFromDungonMaster),Q=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(s){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==s){t.next=3;break}return U(!1),t.abrupt("return");case 3:return t.prev=3,U(!1),t.next=7,k("https://danddragon.herokuapp.com"+"/myProfile/Sessions/MySessions/".concat(e.url),"POST",JSON.stringify({calendarId:e.url,status:"CLOSED"}),{Authorization:"Bearer "+z.token,"Content-Type":"application/json"});case 7:F("/myProfile/Sessions/AllSessions"),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(3);case 12:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}(),R=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(s){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==s){t.next=3;break}return L(!1),t.abrupt("return");case 3:return t.prev=3,L(!1),t.next=7,k("https://danddragon.herokuapp.com"+"/myProfile/Sessions/MySessions/".concat(e.url),"DELETE",JSON.stringify({calendarId:e.url}),{Authorization:"Bearer "+z.token,"Content-Type":"application/json"});case 7:t.next=11;break;case 9:t.prev=9,t.t0=t.catch(3);case 11:F("/myProfile/Sessions/AllSessions");case 12:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e){return t.apply(this,arguments)}}();return(0,f.jsxs)(f.Fragment,{children:[m&&(0,f.jsx)(b.Z,{as0verlay:!0}),j&&(0,f.jsx)(v.Z,{header:"An Error Occurred",error:j,onClick:function(){D(null)}}),N&&(0,f.jsx)(x.Z,{title:"Are you shure that you want to CLOSE this session.",onClick:Q}),T&&(0,f.jsx)(x.Z,{title:"Are you shure that you want to DELETE this session.",onClick:R}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:d.Z.info_about_session__style,children:[e.resData.timeforvoting&&(0,f.jsx)("span",{className:d.Z.countdown__style,children:(0,f.jsx)(p.ZP,{date:e.resData.timeforvoting})}),(0,f.jsxs)("span",{className:d.Z.organiser__span__style,children:["Invited by : ",e.resData.dmStatus&&"DM",e.resData.dmStatus&&e.resData.hostStatus&&" and a ",e.resData.hostStatus&&"HOST",(0,f.jsx)("span",{className:d.Z.organiser__span__style,children:e.resData.creatorName})]})]}),(0,f.jsxs)("div",{className:"".concat(d.Z.info_about_session__style),children:[(0,f.jsx)(y.f,{isDisabled:function(e){return!J.includes(e.getTime())},useDarkMode:!0,size:H,fontSize:18,value:"SCHEDULED"===e.resData.status?[new Date(e.resData.scheduledFor)]:l,isMultiSelector:!0,onChange:u}),(0,f.jsxs)("div",{className:"".concat(d.Z.schedule_buttons__style),children:["SCHEDULED"===e.resData.status||"CLOSED"===e.resData.status?null:(0,f.jsxs)("button",{style:{width:"38%"},className:"button",onClick:function(){e.onClickSubmit(l,B)},children:[" ",e.calendarButtonText]}),e.canCloseSession&&"SCHEDULED"!==e.resData.status&&"CLOSED"!==e.resData.status&&(0,f.jsx)(S.ZP,{options:g,name:"hours",onChange:function(e){I(e.value)},menuPlacement:"auto"}),e.canCloseSession&&("CLOSED"===e.resData.status?(0,f.jsxs)("button",{style:{width:"38%"},className:"button",onClick:function(){L(!0)},children:[" ","Delete Session"]}):(0,f.jsxs)("button",{style:{width:"38%"},className:"button",onClick:function(){U(!0)},children:[" ","Close Session"]}))]})]})]}),(0,f.jsx)(h,{dbComments:e.resData.comments||[]})]})}},1794:function(e,t,s){s.d(t,{Z:function(){return i}});var n="ConteinerBox_container_box__style__C8d7G",a="ConteinerBox_fromStart__FCHBa",r="ConteinerBox_fromEnd__6CJVd",o=s(184);function i(e){return(0,o.jsx)("div",{className:"".concat(n," ").concat(e.fromStart&&a," ").concat(e.fromEnd&&r),children:e.children})}},5294:function(e,t,s){s.d(t,{Z:function(){return _}});var n=s(2791),a=s(4164),r=s(5730),o="Confirmation_btn__lddQ2",i="Confirmation_modal_big_box__style__a-CgK",c="Confirmation_confirm__style__ij0BH",l="Confirmation_reject__style__erAtf",u=s(184);function _(e){var t=function(t){e.onClick(t)};return(0,u.jsxs)(n.Fragment,{children:[a.createPortal((0,u.jsx)(r.Z,{onClick:e.onClick}),document.getElementById("backdrop-root")),a.createPortal((0,u.jsxs)("div",{className:i,children:[(0,u.jsx)("span",{children:e.title}),(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{className:"".concat(o," ").concat(c),onClick:function(){return t(!0)},children:"Yes"}),(0,u.jsx)("button",{className:"".concat(o," ").concat(l),onClick:function(){return t(!1)},children:"No"})]})]}),document.getElementById("overlay-root"))]})}},2949:function(e,t){t.Z={session_all__style:"sessionUi_session_all__style__Lz5Nd",user_session__style:"sessionUi_user_session__style__6n8Uy",invited_session__style:"sessionUi_invited_session__style__DzoA8",scheduled_session__style:"sessionUi_scheduled_session__style__MCB7e",text__inside__style:"sessionUi_text__inside__style__IPShv",info_about_session__style:"sessionUi_info_about_session__style__kQwwU",countdown__style:"sessionUi_countdown__style__F+cQZ",organiser__span__style:"sessionUi_organiser__span__style__-2bLP",comment__input__style:"sessionUi_comment__input__style__QLLb6",general_comment__style:"sessionUi_general_comment__style__PQvpl",username__style:"sessionUi_username__style__MyuZe",text__style:"sessionUi_text__style__ZSVuC",sameuser__style:"sessionUi_sameuser__style__zs0da",general_style:"sessionUi_general_style__G-JyT",sameuser__bcccolor__style:"sessionUi_sameuser__bcccolor__style__N11UC",diffuser__style:"sessionUi_diffuser__style__HEhWV",diffuser__bcccolor__style:"sessionUi_diffuser__bcccolor__style__hFRd7",schedule_buttons__style:"sessionUi_schedule_buttons__style__Dw-fb",comment__big_box_holder:"sessionUi_comment__big_box_holder__smqUT"}}}]);
//# sourceMappingURL=635.968b7f73.chunk.js.map