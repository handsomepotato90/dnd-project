"use strict";(self.webpackChunkdnd_project=self.webpackChunkdnd_project||[]).push([[627],{5645:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(184);function o(t){return(0,r.jsx)("div",{className:"empty_encounter_box__style",children:t.message})}},7920:function(t,e,n){n.r(e),n.d(e,{default:function(){return N}});var r=n(4165),o=n(2982),a=n(5861),i=n(885),s=n(2791),c=n(4097),u="Voting_voting_main_box__style__515+f",l="Voting_btn_add__style__Ozcf1",p="Voting_name_plate__style__r25xf",f="Voting_clock__style__hRGP8",m="Voting_name_plate__KlhoC",d=n(5645),h=n(5868),v=n(7774),y=n(184);function T(t){var e=(0,s.useContext)(v.O),n=(0,c.x)().sendRequest,o=t.votes.indexOf(e.userId)>-1?"grey":t.className,i=function(){var o=(0,a.Z)((0,r.Z)().mark((function o(){return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t.votes.indexOf(e.userId)>-1)){r.next=3;break}r.next=11;break;case 3:return t.onClick(t.text,e.userId),r.prev=4,r.next=7,n("https://danddragon.herokuapp.com/voting","POST",JSON.stringify({id:t.id,uid:e.userId,vote:t.text}),{"Content-Type":"application/json"});case 7:r.next=11;break;case 9:r.prev=9,r.t0=r.catch(4);case 11:case"end":return r.stop()}}),o,null,[[4,9]])})));return function(){return o.apply(this,arguments)}}();return(0,y.jsx)(s.Fragment,{children:(0,y.jsx)("button",{onClick:i,style:{float:"".concat(t.styleFloat),borderRadius:"".concat(t.styleRadius)},className:"".concat(l," ").concat(o),children:(0,y.jsxs)("div",{children:["  ",t.text,": ",t.number]})})})}function S(t){var e=(0,s.useState)(t.votes.yes),n=(0,i.Z)(e,2),r=n[0],a=n[1],c=(0,s.useState)(t.votes.no),u=(0,i.Z)(c,2),l=u[0],p=u[1],f=function(t,e){if("Yes"===t){var n=l.indexOf(e);n>-1&&(l.splice(n,1),p((0,o.Z)(l))),a([].concat((0,o.Z)(r),[e]))}else if("No"===t){var i=r.indexOf(e);i>-1&&(r.splice(i,1),a((0,o.Z)(r))),p([].concat((0,o.Z)(l),[e]))}};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(T,{onClick:f,styleFloat:"left",styleRadius:"0px 0px 30px 10px",name:t.name,votes:r,number:r.length,id:t.id,text:"Yes",className:"green"}),(0,y.jsx)(T,{onClick:f,styleFloat:"right",styleRadius:"0px 0px 10px 30px",name:t.name,votes:l,number:l.length,id:t.id,text:"No",className:"red"})]})}var g=n(2007);function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function D(t,e,n){return e&&x(t.prototype,e),n&&x(t,n),t}function _(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}function O(t,e){return O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},O(t,e)}function P(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=w(t);if(e){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function C(t){return function(t){if(Array.isArray(t))return j(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function E(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var r=n.match(/(.*?)([0-9]+)(.*)/),o=r?r[1]:"",a=r?r[3]:"",i=r?r[2]:n,s=i.length>=e?i:(C(Array(e)).map((function(){return"0"})).join("")+i).slice(-1*e);return"".concat(o).concat(s).concat(a)}var M={daysInHours:!1,zeroPadTime:2};function R(t,e){var n=t.days,r=t.hours,o=t.minutes,a=t.seconds,i=Object.assign(Object.assign({},M),e),s=i.daysInHours,c=i.zeroPadTime,u=i.zeroPadDays,l=void 0===u?c:u,p=Math.min(2,c),f=s?E(r+24*n,c):E(r,p);return{days:s?"":E(n,l),hours:f,minutes:E(o,p),seconds:E(a,p)}}var I=function(t){_(n,t);var e=k(n);function n(){var t;return b(this,n),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return D(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,s.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(s.Component);I.propTypes={count:g.number,children:g.element,onComplete:g.func};var Z=function(t){_(n,t);var e=k(n);function n(t){var r;if(b(this,n),(r=e.call(this,t)).mounted=!1,r.initialTimestamp=r.calcOffsetStartTimestamp(),r.offsetStartTimestamp=r.props.autoStart?0:r.initialTimestamp,r.offsetTime=0,r.legacyMode=!1,r.legacyCountdownRef=(0,s.createRef)(),r.tick=function(){var t=r.calcTimeDelta(),e=t.completed&&!r.props.overtime?void 0:r.props.onTick;r.setTimeDeltaState(t,void 0,e)},r.start=function(){if(!r.isStarted()){var t=r.offsetStartTimestamp;r.offsetStartTimestamp=0,r.offsetTime+=t?r.calcOffsetStartTimestamp()-t:0;var e=r.calcTimeDelta();r.setTimeDeltaState(e,"STARTED",r.props.onStart),r.props.controlled||e.completed&&!r.props.overtime||(r.clearTimer(),r.interval=window.setInterval(r.tick,r.props.intervalDelay))}},r.pause=function(){r.isPaused()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.setTimeDeltaState(r.state.timeDelta,"PAUSED",r.props.onPause))},r.stop=function(){r.isStopped()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.offsetTime=r.offsetStartTimestamp-r.initialTimestamp,r.setTimeDeltaState(r.calcTimeDelta(),"STOPPED",r.props.onStop))},r.isStarted=function(){return r.isStatus("STARTED")},r.isPaused=function(){return r.isStatus("PAUSED")},r.isStopped=function(){return r.isStatus("STOPPED")},r.isCompleted=function(){return r.isStatus("COMPLETED")},t.date){var o=r.calcTimeDelta();r.state={timeDelta:o,status:o.completed?"COMPLETED":"STOPPED"}}else r.legacyMode=!0;return r}return D(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,r=t.precision,o=t.controlled,a=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.now,o=void 0===r?Date.now:r,a=n.precision,i=void 0===a?0:a,s=n.controlled,c=n.offsetTime,u=void 0===c?0:c,l=n.overtime;e="string"===typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,s||(e+=u);var p=s?e:e-o(),f=Math.min(20,Math.max(0,i)),m=Math.round(1e3*parseFloat(((l?p:Math.max(0,p))/1e3).toFixed(f))),d=Math.abs(m)/1e3;return{total:m,days:Math.floor(d/86400),hours:Math.floor(d/3600%24),minutes:Math.floor(d/60%60),seconds:Math.floor(d%60),milliseconds:Number((d%1*1e3).toFixed()),completed:m<=0}}(e,{now:n,precision:r,controlled:o,offsetTime:this.offsetTime,overtime:a})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var r=this;if(this.mounted){var o=t.completed&&!this.state.timeDelta.completed,a=t.completed&&"STARTED"===e;o&&!this.props.overtime&&this.clearTimer();return this.setState((function(n){var o=e||n.status;return t.completed&&!r.props.overtime?o="COMPLETED":e||"COMPLETED"!==o||(o="STOPPED"),{timeDelta:t,status:o}}),(function(){n&&n(r.state.timeDelta),r.props.onComplete&&(o||a)&&r.props.onComplete(t,a)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,r=t.zeroPadDays,o=this.state.timeDelta;return Object.assign(Object.assign({},o),{api:this.getApi(),props:this.props,formatted:R(o,{daysInHours:e,zeroPadTime:n,zeroPadDays:r})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,r=t.onComplete;return(0,s.createElement)(I,{ref:this.legacyCountdownRef,count:e,onComplete:r},n)}var o=this.props,a=o.className,i=o.overtime,c=o.children,u=o.renderer,l=this.getRenderProps();if(u)return u(l);if(c&&this.state.timeDelta.completed&&!i)return(0,s.cloneElement)(c,{countdown:l});var p=l.formatted,f=p.days,m=p.hours,d=p.minutes,h=p.seconds;return(0,s.createElement)("span",{className:a},l.total<0?"-":"",f,f?":":"",m,":",d,":",h)}}]),n}(s.Component);Z.defaultProps=Object.assign(Object.assign({},M),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),Z.propTypes={date:(0,g.oneOfType)([(0,g.instanceOf)(Date),g.string,g.number]),daysInHours:g.bool,zeroPadTime:g.number,zeroPadDays:g.number,controlled:g.bool,intervalDelay:g.number,precision:g.number,autoStart:g.bool,overtime:g.bool,className:g.string,children:g.element,renderer:g.func,now:g.func,onMount:g.func,onStart:g.func,onPause:g.func,onStop:g.func,onTick:g.func,onComplete:g.func};var A=Z;function N(){var t=(0,s.useState)([]),e=(0,i.Z)(t,2),n=e[0],l=e[1],v=(0,c.x)().sendRequest;return(0,s.useEffect)((function(){var t=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v("https://danddragon.herokuapp.com/voting");case 3:e=t.sent,l((0,o.Z)(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[v]),console.log(n),(0,y.jsxs)("div",{className:u,children:[n.length<1&&(0,y.jsx)(d.Z,{message:"There are no new submitted cretures at this time."}),n.map((function(t,e){return(0,y.jsxs)(h.Z,{childrenTopAndBottom:!0,battleSideBar:!1,stats:t,modalStats:!0,width:"250px",height:"250px",children:[(0,y.jsxs)("div",{className:p,children:[(0,y.jsx)("span",{className:"".concat(m," overflowing"),children:t.name}),(0,y.jsx)(A,{className:"".concat(f," ").concat(t.timeforvoting<86400?"red_text":"green_text"),date:t.timeforvoting})]}),(0,y.jsx)(S,{votes:t.votes,name:t.name,id:t._id})]},e)}))]})}}}]);
//# sourceMappingURL=627.ad61de5a.chunk.js.map