"use strict";(self.webpackChunkdnd_project=self.webpackChunkdnd_project||[]).push([[781],{5645:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(184);function r(e){return(0,s.jsx)("div",{className:"empty_encounter_box__style",children:e.message})}},7262:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var s=n(4165),r=n(2982),a=n(5861),c=n(885),i=n(2791),o=n(4097),u="Voting_voting_main_box__style__515+f",d="Voting_btn_add__style__Ozcf1",l="Voting_name_plate__style__r25xf",x=n(5645),p=n(374),f=n(7774),m=n(184);function v(e){var t=(0,i.useContext)(f.O),n=(0,o.x)().sendRequest,r=e.votes.indexOf(t.userId)>-1?"grey":e.className,c=function(){var r=(0,a.Z)((0,s.Z)().mark((function r(){return(0,s.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!(e.votes.indexOf(t.userId)>-1)){s.next=3;break}s.next=11;break;case 3:return e.onClick(e.text,t.userId),s.prev=4,s.next=7,n("https://danddragon.herokuapp.com/voting","POST",JSON.stringify({id:e.id,uid:t.userId,vote:e.text}),{"Content-Type":"application/json"});case 7:s.next=11;break;case 9:s.prev=9,s.t0=s.catch(4);case 11:case"end":return s.stop()}}),r,null,[[4,9]])})));return function(){return r.apply(this,arguments)}}();return(0,m.jsx)(i.Fragment,{children:(0,m.jsx)("button",{onClick:c,style:{float:"".concat(e.styleFloat),borderRadius:"".concat(e.styleRadius)},className:"".concat(d," ").concat(r),children:(0,m.jsxs)("div",{children:["  ",e.text,": ",e.number]})})})}function h(e){var t=(0,i.useState)(e.votes.yes),n=(0,c.Z)(t,2),s=n[0],a=n[1],o=(0,i.useState)(e.votes.no),u=(0,c.Z)(o,2),d=u[0],l=u[1],x=function(e,t){if("Yes"===e){var n=d.indexOf(t);n>-1&&(d.splice(n,1),l((0,r.Z)(d))),a([].concat((0,r.Z)(s),[t]))}else if("No"===e){var c=s.indexOf(t);c>-1&&(s.splice(c,1),a((0,r.Z)(s))),l([].concat((0,r.Z)(d),[t]))}};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{onClick:x,styleFloat:"left",styleRadius:"0px 0px 30px 10px",name:e.name,votes:s,number:s.length,id:e.id,text:"Yes",className:"green"}),(0,m.jsx)(v,{onClick:x,styleFloat:"right",styleRadius:"0px 0px 10px 30px",name:e.name,votes:d,number:d.length,id:e.id,text:"No",className:"red"})]})}function _(){var e=(0,i.useState)([]),t=(0,c.Z)(e,2),n=t[0],d=t[1],f=(0,o.x)().sendRequest;return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("https://danddragon.herokuapp.com/voting");case 3:t=e.sent,d((0,r.Z)(t)),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[f]),(0,m.jsxs)("div",{className:u,children:[n.length<1&&(0,m.jsx)(x.Z,{message:"There are no new submitted cretures at this time."}),n.map((function(e,t){return(0,m.jsxs)(p.Z,{childrenTopAndBottom:!0,battleSideBar:!1,stats:e,modalStats:!0,width:"250px",height:"250px",children:[(0,m.jsx)("div",{className:l,children:(0,m.jsx)("span",{children:e.name})}),(0,m.jsx)(h,{votes:e.votes,name:e.name,id:e._id})]},t)}))]})}}}]);
//# sourceMappingURL=781.ed04f0d3.chunk.js.map