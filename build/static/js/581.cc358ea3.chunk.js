"use strict";(self.webpackChunkdnd_project=self.webpackChunkdnd_project||[]).push([[581],{681:function(e,n,a){a.d(n,{Z:function(){return y}});var t=a(4165),i=a(5861),r=a(2982),l=a(4942),s=a(1413),o=a(885),p=a(2791),u=a(5767),c={textarea__style:"TextArea_textarea__style__E-L8R",capytal__style:"TextArea_capytal__style__Ke+ps"},m=a(7551),d=a(2443),_=a.n(d),h=a(184);function g(e){return(0,h.jsxs)("div",{className:c.textarea__style,children:[(0,h.jsx)("span",{className:c.capytal__style,children:e.name}),(0,h.jsx)(m.CKEditor,{className:"".concat(c.textarea_box__style,", black"),editor:_(),config:{toolbar:["heading","|","bold","italic","|","numberedList","bulletedList","|","indent","outdent","|"]},data:e.placeholder,onChange:function(n,a){var t=a.getData();e.onChange(t,e.input_name)}})]})}var S=a(13),I=a(4097),v=a(7774),T=a(2790),C=a(9138),E=a(6871),N=a(4947),b=a(3244),A="SubmitHomeBrew_submit_btn__style_enabled__Vx-gc",f="SubmitHomeBrew_submit_btn__style_disabled__v-isH",R=a(1794);function y(e){var n=(0,E.s0)(),a=(0,I.x)(),c=a.isLoading,m=a.error,d=a.sendRequest,_=a.clearError,y=(0,p.useState)({}),O=(0,o.Z)(y,2),x=O[0],D=O[1],P=(0,N.c)({},!1),L=(0,o.Z)(P,2),k=L[0],Z=L[1],j=(0,p.useContext)(v.O),H=function(e,n){D((function(a){return(0,s.Z)((0,s.Z)({},a),{},(0,l.Z)({},n,e))}))},w=function(e){var n=-5+parseInt(parseInt(e)/2);return n>0?"(+".concat(n,")"):"(".concat(n,")")},M=function(e){return(0,r.Z)(e.split(/[.,#!$%&*;:{}=\-_`~()]/g).filter((function(e){return e.trim()})))},B=function(){var a=(0,i.Z)((0,t.Z)().mark((function a(i){var r;return(0,t.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i.preventDefault(),r={name:k.inputs.name.value,meta:{size:k.inputs.meta_size.value,type:k.inputs.meta_type.value,alignment:k.inputs.meta_alignment.value},"Armor Class":{value:k.inputs.armor_class.value,type:k.inputs.armor_type.value},"Hit Points":{dice:"(".concat(k.inputs.hp_die_count.value,"d").concat(k.inputs.hp_die_value.value," + ").concat(k.inputs.bonus_hp.value,")"),hp:k.inputs.avrg_hp.value},Speed:k.inputs.Speed.value,STR:k.inputs.STR.value,STR_mod:w(k.inputs.STR.value),DEX:k.inputs.DEX.value,DEX_mod:w(k.inputs.DEX.value),CON:k.inputs.CON.value,CON_mod:w(k.inputs.CON.value),INT:k.inputs.INT.value,INT_mod:w(k.inputs.INT.value),WIS:k.inputs.WIS.value,WIS_mod:w(k.inputs.WIS.value),CHA:k.inputs.CHA.value,CHA_mod:w(k.inputs.CHA.value),"Saving Throws":k.inputs["Saving Throws"].value,Skills:k.inputs.skills.value,Senses:k.inputs.Senses.value,Languages:k.inputs.Languages.value,Challenge:{rating:k.inputs["Challenge R"].value,xp:"(".concat(k.inputs.Xp.value,"XP)")},Traits:x.Traits,Actions:x.Actions,"Legendary Actions":x["Legendary Actions"],img_url:k.inputs.img_url.value,"Bonus Actions":x["Bonus Actions"],Characteristics:x.Characteristics,"Condition Immunities":M(k.inputs["Condition Immunities"].value),"Damage Immunities":M(k.inputs["Damage Immunities"].value),"Damage Resistances":M(k.inputs["Damage Resistances"].value),"Damage Vulnerabilities":M(k.inputs["Damage Vulnerabilities"].value),Reactions:x.Reactions,proficiency_bonus:k.inputs.proficiency_bonus.value,creator:j.userId},a.prev=2,a.next=5,d("https://danddragon.herokuapp.com"+"".concat(e.url),e.type,JSON.stringify(r),{Authorization:"Bearer "+j.token,"Content-Type":"application/json"});case 5:n("POST"===e.type?"/voting":"/myProfile"),a.next=10;break;case 8:a.prev=8,a.t0=a.catch(2);case 10:case"end":return a.stop()}}),a,null,[[2,8]])})));return function(e){return a.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[c&&(0,h.jsx)(C.Z,{as0verlay:!0}),m&&(0,h.jsx)(T.Z,{error:m,onClick:function(){_(null)}}),(0,h.jsxs)("form",{id:"form",onSubmit:B,children:[(0,h.jsxs)(R.Z,{children:[e.required.map((function(n,a){return(0,h.jsx)(S.Z,{element:"input",id:n.input_name,type:"text",initialValue:n.value,initialValid:e.valid,label:n.name,errorText:"*This field is NOT optional!",validators:[(0,u.hg)()],onInput:Z,placeholder:n.placeholder,notRequired:!1,className:"input_field__style"},a)})),e.notReq.map((function(e,n){return(0,h.jsx)(S.Z,{element:"input",id:e.input_name,initialValue:e.value,type:"text",initialValid:!0,label:e.name,onInput:Z,placeholder:e.placeholder,validators:[],notRequired:!0},n)}))]}),(0,h.jsxs)(R.Z,{children:[" ",e.text.map((function(e,n){return(0,h.jsx)(g,{onChange:H,name:e.name,input_name:e.input_name,placeholder:e.placeholder},n)}))]}),(0,h.jsx)(b.Z,{className:k.isValid?"".concat(A," button"):"".concat(f),type:"submit",disabled:!k.isValid,children:"Submit"})]})]})}},8581:function(e,n,a){a.r(n),a.d(n,{default:function(){return r}});a(2791);var t=a(681),i=a(184);function r(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.Z,{valid:!1,required:[{name:"MONSTER NAME",input_name:"name",placeholder:"Enter monster name"},{name:"SIZE",input_name:"meta_size",placeholder:"Large, Medium"},{name:"MONSTER TYPE",input_name:"meta_type",placeholder:"aberration, construct"},{name:"ALIGNMENT",input_name:"meta_alignment",placeholder:"lawful evil, chaotic evil"},{name:"CHALLENGE RATING",input_name:"Challenge R",placeholder:" # "},{name:"GRANTS XP",input_name:"Xp",placeholder:" # "},{name:"ARMOR CLASS",input_name:"armor_class",placeholder:"#"},{name:"ARMOR CLASS TYPE",input_name:"armor_type",placeholder:"Natural armor,plate..."},{name:"PROFICIENCY BONUS",input_name:"proficiency_bonus",placeholder:"#"},{name:"SENSES",input_name:"Senses",placeholder:"Passive Perception 11, Darkvision 60 ft., ..."},{name:"AVERAGE HIT POINTS",input_name:"avrg_hp",placeholder:"#"},{name:"HIT POINT DIE COUNT",input_name:"hp_die_count",placeholder:"#"},{name:"HIT POINTS DIE VALUE",input_name:"hp_die_value",placeholder:"#"},{name:"BONUS HIT POINTS",input_name:"bonus_hp",placeholder:"#"},{name:"STR SCORE",input_name:"STR",placeholder:"#"},{name:"DEX SCORE",input_name:"DEX",placeholder:"#"},{name:"CON SCORE",input_name:"CON",placeholder:"#"},{name:"INT SCORE",input_name:"INT",placeholder:"#"},{name:"WIS SCORE",input_name:"WIS",placeholder:"#"},{name:"CHA SCORE",input_name:"CHA",placeholder:"#"}],notReq:[{name:"Image",input_name:"img_url",placeholder:"Provide URL for image"},{name:"SAVING THROW PROFICIENCIES",input_name:"Saving Throws",placeholder:"STR +6 , INT +4...."},{name:"SKILLS",input_name:"skills",placeholder:"Acrobatics +6, Deception +3, Stealth +9...."},{name:"DAMAGE RESISTANCES",input_name:"Damage Resistances",placeholder:"Bludgeoning,Piercing,Fire ..."},{name:"DAMAGE IMMUNITIES",input_name:"Damage Immunities",placeholder:"Bludgeoning,Piercing,Fire ..."},{name:"DAMAGE VULNERABILITIES",input_name:"Damage Vulnerabilities",placeholder:"Bludgeoning,Piercing,Fire ..."},{name:"CONDITION IMMUNITIES",input_name:"Condition Immunities",placeholder:"Charmed, Exhaustion, Frightened ..."},{name:"LANGUAGES",input_name:"Languages",placeholder:"Deep Speech, Telepathy 120 ft."},{name:"SPEED",input_name:"Speed",placeholder:"20 ft., fly 30 ft. "}],text:[{name:"SPECIAL TRAITS DESCRIPTION",input_name:"Traits",placeholder:"<p><strong>Special Trait Name.</strong>&nbsp;Enter the description for your special trait.<strong></p> <p>Spellcasting.</strong>The [monster name]&nbsp;is a #-level spellcaster. Its spellcasting ability is [ability score]&nbsp;(spell save DC #, +# to hit with spell attacks). The [monster name]&nbsp;has following [class name]&nbsp;spells prepared: <br>Cantrips (at will): [spell name], [spell name]&nbsp;<br>1st level (# slots):&nbsp;[spell name], [spell name]&nbsp;</p>"},{name:"ACTIONS DESCRIPTION",input_name:"Actions",placeholder:"<p><strong>Action Name.</strong>&nbsp;Enter the description for your action.</p><p><strong>Action Melee Attack.</strong> <em>Melee Weapon Attack:</em> +# to hit, reach #&nbsp;ft., #&nbsp;target. <em>Hit:</em>&nbsp;# (#d# + #) [damage type]&nbsp;damage.&nbsp;</p><p><strong>Action Ranged Attack.</strong> Ranged<em>Weapon Attack:</em> +# to hit, range #/# ft., #&nbsp;target. <em>Hit:</em>&nbsp;# (#d# + #) [damage type]&nbsp;damage.</p>"},{name:"REACTIONS DESCRIPTION",input_name:"Reactions",placeholder:"<p><strong>Reaction Name.</strong>&nbsp;Enter the description for your action.</p>"},{name:"MONSTER CHARACTERISTICS DESCRIPTION",input_name:"Characteristics",placeholder:"Enter a general description for your monster here."},{name:"BONUS ACTIONS DESCRIPTION",input_name:"Bonus Actions",placeholder:"Enter the description for how bonus actions work for your monster here."},{name:"LEGENDARY ACTIONS DESCRIPTION",input_name:"Legendary Actions",placeholder:"Enter the description for how legendary actions work for your monster here.<p><strong>Legendary Action Name (Costs # Actions).</strong>&nbsp;Enter the description for your legendary action.</p>"}],type:"POST",url:"/submit_homebrew"})})}},1794:function(e,n,a){a.d(n,{Z:function(){return r}});var t="ConteinerBox_container_box__style__C8d7G",i=a(184);function r(e){return(0,i.jsx)("div",{className:t,children:e.children})}}}]);
//# sourceMappingURL=581.cc358ea3.chunk.js.map