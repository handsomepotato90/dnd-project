"use strict";(self.webpackChunkdnd_project=self.webpackChunkdnd_project||[]).push([[211],{1211:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(4165),s=t(2982),c=t(5861),a=t(885),o=t(2791),u=t(3504),i="EncounterBox_encounter_box__style__vqZo3",d="EncounterBox_encounter_name__style__egykh",_="EncounterBox_image__style__dOlNu",l=t(184);function p(e){var n;n=e.monsters.length<1?"https://cdn.pixabay.com/photo/2016/12/15/14/32/question-mark-background-1909040_1280.png":e.monsters[0].img;var t={backgroundImage:"url(".concat(n,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"};return(0,l.jsx)(u.rU,{to:"/battle_scr/".concat(e.id),className:i,children:(0,l.jsx)("div",{style:t,className:_,children:(0,l.jsx)("span",{className:d,children:e.name})})})}var m=t(4097),f=t(7774),h=t(5645),x=t(1794);function v(){var e=(0,m.x)().sendRequest,n=(0,o.useState)([]),t=(0,a.Z)(n,2),u=t[0],i=t[1],d=(0,o.useContext)(f.O);return(0,o.useEffect)((function(){var n=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e("https://danddragon.herokuapp.com/my_encounters","POST",JSON.stringify({user:d.userId}),{"Content-Type":"application/json"});case 3:t=n.sent,i((0,s.Z)(t)),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[e,d.userId]),(0,l.jsxs)(x.Z,{children:[u.length<1&&(0,l.jsx)(h.Z,{message:"You have no encounters created."}),u.map((function(e,n){return(0,l.jsx)(p,{name:e.enc_name,monsters:e.monsters,players:e.players,id:e._id},n)}))]})}},1794:function(e,n,t){t.d(n,{Z:function(){return c}});var r="ConteinerBox_container_box__style__C8d7G",s=t(184);function c(e){return(0,s.jsx)("div",{className:r,children:e.children})}},5645:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(184);function s(e){return(0,r.jsx)("div",{className:"empty_encounter_box__style",children:e.message})}}}]);
//# sourceMappingURL=211.568ad2cf.chunk.js.map