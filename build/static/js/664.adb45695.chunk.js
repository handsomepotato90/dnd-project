"use strict";(self.webpackChunkdnd_project=self.webpackChunkdnd_project||[]).push([[664],{5645:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(184);function o(t){return(0,r.jsx)("div",{className:"empty_encounter_box__style",children:t.message})}},7262:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var r=n(4165),o=n(2982),a=n(5861),i=n(885),s=n(2791),c=n(4097),u=n(5645),l=n(485),p=n(7774),f="Voting_btn_add__style__Ozcf1",m="Voting_name_plate__style__r25xf",d="Voting_clock__style__hRGP8",h="Voting_name_plate__KlhoC",v=n(184);function y(t){var e=(0,s.useContext)(p.O),n=(0,c.x)().sendRequest,o=t.votes.indexOf(e.userId)>-1?"grey":t.className,i=function(){var o=(0,a.Z)((0,r.Z)().mark((function o(){return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t.votes.indexOf(e.userId)>-1)){r.next=3;break}r.next=11;break;case 3:return t.onClick(t.text,e.userId),r.prev=4,r.next=7,n("https://danddragon.herokuapp.com/voting","POST",JSON.stringify({id:t.id,uid:e.userId,vote:t.text}),{"Content-Type":"application/json"});case 7:r.next=11;break;case 9:r.prev=9,r.t0=r.catch(4);case 11:case"end":return r.stop()}}),o,null,[[4,9]])})));return function(){return o.apply(this,arguments)}}();return(0,v.jsx)(s.Fragment,{children:(0,v.jsx)("button",{onClick:i,style:{float:"".concat(t.styleFloat),borderRadius:"".concat(t.styleRadius)},className:"".concat(f," ").concat(o),children:(0,v.jsxs)("div",{children:["  ",t.text,": ",t.number]})})})}function T(t){var e=(0,s.useState)(t.votes.yes),n=(0,i.Z)(e,2),r=n[0],a=n[1],c=(0,s.useState)(t.votes.no),u=(0,i.Z)(c,2),l=u[0],p=u[1],f=function(t,e){if("Yes"===t){var n=l.indexOf(e);n>-1&&(l.splice(n,1),p((0,o.Z)(l))),a([].concat((0,o.Z)(r),[e]))}else if("No"===t){var i=r.indexOf(e);i>-1&&(r.splice(i,1),a((0,o.Z)(r))),p([].concat((0,o.Z)(l),[e]))}};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(y,{onClick:f,styleFloat:"left",styleRadius:"0px 0px 30px 10px",name:t.name,votes:r,number:r.length,id:t.id,text:"Yes",className:"green"}),(0,v.jsx)(y,{onClick:f,styleFloat:"right",styleRadius:"0px 0px 10px 30px",name:t.name,votes:l,number:l.length,id:t.id,text:"No",className:"red"})]})}var S=n(2702),g=n(1794);function b(){var t=(0,s.useState)([]),e=(0,i.Z)(t,2),n=e[0],p=e[1],f=(0,c.x)().sendRequest,y=(new Date).getTime();return(0,s.useEffect)((function(){var t=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f("https://danddragon.herokuapp.com/voting");case 3:e=t.sent,p((0,o.Z)(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[f]),(0,v.jsxs)(g.Z,{children:[n.length<1&&(0,v.jsx)(u.Z,{message:"There are no new submitted cretures at this time."}),n.map((function(t,e){return(0,v.jsxs)(l.Z,{childrenTopAndBottom:!0,battleSideBar:!1,stats:t,modalStats:!0,width:"250px",height:"250px",children:[(0,v.jsxs)("div",{className:m,children:[(0,v.jsx)("span",{className:"".concat(h," overflowing"),children:t.name}),(0,v.jsx)(S.ZP,{className:"".concat(d," ").concat((t.timeforvoting-y)/1e3<86400?"red_text":"green_text"),date:t.timeforvoting})]}),(0,v.jsx)(T,{votes:t.votes,name:t.name,id:t._id})]},e)}))]})}},2702:function(t,e,n){var r=n(2791),o=n(2007);function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}function p(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function m(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var r=n.match(/(.*?)([0-9]+)(.*)/),o=r?r[1]:"",a=r?r[3]:"",i=r?r[2]:n,s=i.length>=e?i:(m(Array(e)).map((function(){return"0"})).join("")+i).slice(-1*e);return"".concat(o).concat(s).concat(a)}var v={daysInHours:!1,zeroPadTime:2};function y(t,e){var n=t.days,r=t.hours,o=t.minutes,a=t.seconds,i=Object.assign(Object.assign({},v),e),s=i.daysInHours,c=i.zeroPadTime,u=i.zeroPadDays,l=void 0===u?c:u,p=Math.min(2,c),f=s?h(r+24*n,c):h(r,p);return{days:s?"":h(n,l),hours:f,minutes:h(o,p),seconds:h(a,p)}}var T=function(t){c(n,t);var e=f(n);function n(){var t;return a(this,n),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return s(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,r.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(r.Component);T.propTypes={count:o.number,children:o.element,onComplete:o.func};var S=function(t){c(n,t);var e=f(n);function n(t){var o;if(a(this,n),(o=e.call(this,t)).mounted=!1,o.initialTimestamp=o.calcOffsetStartTimestamp(),o.offsetStartTimestamp=o.props.autoStart?0:o.initialTimestamp,o.offsetTime=0,o.legacyMode=!1,o.legacyCountdownRef=(0,r.createRef)(),o.tick=function(){var t=o.calcTimeDelta(),e=t.completed&&!o.props.overtime?void 0:o.props.onTick;o.setTimeDeltaState(t,void 0,e)},o.start=function(){if(!o.isStarted()){var t=o.offsetStartTimestamp;o.offsetStartTimestamp=0,o.offsetTime+=t?o.calcOffsetStartTimestamp()-t:0;var e=o.calcTimeDelta();o.setTimeDeltaState(e,"STARTED",o.props.onStart),o.props.controlled||e.completed&&!o.props.overtime||(o.clearTimer(),o.interval=window.setInterval(o.tick,o.props.intervalDelay))}},o.pause=function(){o.isPaused()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.setTimeDeltaState(o.state.timeDelta,"PAUSED",o.props.onPause))},o.stop=function(){o.isStopped()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.offsetTime=o.offsetStartTimestamp-o.initialTimestamp,o.setTimeDeltaState(o.calcTimeDelta(),"STOPPED",o.props.onStop))},o.isStarted=function(){return o.isStatus("STARTED")},o.isPaused=function(){return o.isStatus("PAUSED")},o.isStopped=function(){return o.isStatus("STOPPED")},o.isCompleted=function(){return o.isStatus("COMPLETED")},t.date){var i=o.calcTimeDelta();o.state={timeDelta:i,status:i.completed?"COMPLETED":"STOPPED"}}else o.legacyMode=!0;return o}return s(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,r=t.precision,o=t.controlled,a=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.now,o=void 0===r?Date.now:r,a=n.precision,i=void 0===a?0:a,s=n.controlled,c=n.offsetTime,u=void 0===c?0:c,l=n.overtime;e="string"===typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,s||(e+=u);var p=s?e:e-o(),f=Math.min(20,Math.max(0,i)),m=Math.round(1e3*parseFloat(((l?p:Math.max(0,p))/1e3).toFixed(f))),d=Math.abs(m)/1e3;return{total:m,days:Math.floor(d/86400),hours:Math.floor(d/3600%24),minutes:Math.floor(d/60%60),seconds:Math.floor(d%60),milliseconds:Number((d%1*1e3).toFixed()),completed:m<=0}}(e,{now:n,precision:r,controlled:o,offsetTime:this.offsetTime,overtime:a})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var r=this;if(this.mounted){var o=t.completed&&!this.state.timeDelta.completed,a=t.completed&&"STARTED"===e;o&&!this.props.overtime&&this.clearTimer();return this.setState((function(n){var o=e||n.status;return t.completed&&!r.props.overtime?o="COMPLETED":e||"COMPLETED"!==o||(o="STOPPED"),{timeDelta:t,status:o}}),(function(){n&&n(r.state.timeDelta),r.props.onComplete&&(o||a)&&r.props.onComplete(t,a)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,r=t.zeroPadDays,o=this.state.timeDelta;return Object.assign(Object.assign({},o),{api:this.getApi(),props:this.props,formatted:y(o,{daysInHours:e,zeroPadTime:n,zeroPadDays:r})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,o=t.onComplete;return(0,r.createElement)(T,{ref:this.legacyCountdownRef,count:e,onComplete:o},n)}var a=this.props,i=a.className,s=a.overtime,c=a.children,u=a.renderer,l=this.getRenderProps();if(u)return u(l);if(c&&this.state.timeDelta.completed&&!s)return(0,r.cloneElement)(c,{countdown:l});var p=l.formatted,f=p.days,m=p.hours,d=p.minutes,h=p.seconds;return(0,r.createElement)("span",{className:i},l.total<0?"-":"",f,f?":":"",m,":",d,":",h)}}]),n}(r.Component);S.defaultProps=Object.assign(Object.assign({},v),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),S.propTypes={date:(0,o.oneOfType)([(0,o.instanceOf)(Date),o.string,o.number]),daysInHours:o.bool,zeroPadTime:o.number,zeroPadDays:o.number,controlled:o.bool,intervalDelay:o.number,precision:o.number,autoStart:o.bool,overtime:o.bool,className:o.string,children:o.element,renderer:o.func,now:o.func,onMount:o.func,onStart:o.func,onPause:o.func,onStop:o.func,onTick:o.func,onComplete:o.func},e.ZP=S}}]);
//# sourceMappingURL=664.adb45695.chunk.js.map