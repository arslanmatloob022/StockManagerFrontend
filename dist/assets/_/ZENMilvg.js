import{_ as l}from"./9drODTCA.js";import{_ as e}from"./BdjI-zdd.js";import{_ as a}from"./BQiUk_jr.js";import{_ as s}from"./CrSly68g.js";import{_ as o}from"./BbyIlV3K.js";import{e as i,W as u,at as n,a as t,c as d,g as r,j as c,v as m,k as f,l as p,s as v,H as h,I as _,D as y,x as w,K as b,y as g,a2 as V}from"../../index-BBZ1hd8o.js";import{s as k}from"./MiAo3PcT.js";const j={class:"account-box is-form is-footerless"},E={class:"form-head-inner"},P=m("div",{class:"left"},[m("h3",null,"Settings"),m("p",null,"Edit your account prefs and settings")],-1),x={class:"right"},C={class:"buttons"},S={class:"fieldset"},U=m("div",{class:"fieldset-heading"},[m("h4",null,"Change Password"),m("p",null,"For an improved account security")],-1),N={class:"columns is-multiline"},D={class:"column is-12"},K={class:"column is-12"},F={class:"column is-12"},A={class:"fieldset"},B=m("div",{class:"fieldset-heading"},[m("h4",null,"2 Factor Auth"),m("p",null,"Enable or disable 2 factor auth")],-1),G={class:"columns is-multiline"},H={class:"column is-12"},I={key:0,class:"column is-12"},M={class:"fieldset"},O=m("div",{class:"fieldset-heading"},[m("h4",null,"Notifications"),m("p",null,"Configure how you receive notifications")],-1),R={class:"columns is-multiline"},W={class:"column is-12"},Y={class:"fieldset"},q=m("div",{class:"fieldset-heading"},[m("h4",null,"Marketing"),m("p",null,"Configure how you receive promotions")],-1),z={class:"columns is-multiline"},J={class:"column is-12"},L=V(i({__name:"EditProfileSettings",setup(i){const V=u(),{y:L}=n(),Q=t(!1),T=t(!0),X=t(!1),Z=t(!1),$=t(!1),ll=t(!1),el=d((()=>L.value>30)),al=async()=>{Q.value=!0,await k(),V.primary("Your changes have been successfully saved!"),Q.value=!1};return(i,u)=>{const n=o,t=s,d=a,V=e,k=l;return r(),c("div",j,[m("div",{class:w(["form-head stuck-header",[h(el)&&"is-stuck"]])},[m("div",E,[P,m("div",x,[m("div",C,[f(n,{to:"/sidebar/layouts/profile-view",icon:"lnir lnir-arrow-left rem-100",light:"","dark-outlined":""},{default:p((()=>[v(" Go Back ")])),_:1}),f(n,{color:"primary",raised:"",loading:h(Q),tabindex:"0",onKeydown:_(y(al,["prevent"]),["enter"]),onClick:al},{default:p((()=>[v(" Save Changes ")])),_:1},8,["loading","onKeydown"])])])])],2),m("form",{method:"post",novalidate:"",class:"form-body",onSubmit:y(al,["prevent"])},[m("div",S,[U,m("div",N,[m("div",D,[f(V,null,{default:p((()=>[f(d,{icon:"lucide:unlock"},{default:p((()=>[f(t,{type:"password",placeholder:"Old Password",autocomplete:"current-password"})])),_:1})])),_:1})]),m("div",K,[f(V,null,{default:p((()=>[f(d,{icon:"lucide:lock"},{default:p((()=>[f(t,{type:"password",placeholder:"New Password",autocomplete:"new-password"})])),_:1})])),_:1})]),m("div",F,[f(V,null,{default:p((()=>[f(d,{icon:"lucide:lock"},{default:p((()=>[f(t,{type:"password",placeholder:"Repeat New Password",autocomplete:"new-password"})])),_:1})])),_:1})])])]),m("div",A,[B,m("div",G,[m("div",H,[f(V,null,{default:p((()=>[f(d,null,{default:p((()=>[f(k,{modelValue:h(T),"onUpdate:modelValue":u[0]||(u[0]=l=>b(T)?T.value=l:null),label:"Enable / disable 2 factor",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1})]),h(T)?(r(),c("div",I,[f(V,null,{default:p((()=>[f(d,{icon:"lucide:smartphone"},{default:p((()=>[f(t,{type:"text",placeholder:"Phone Number",autocomplete:"tel",inputmode:"tel"})])),_:1})])),_:1})])):g("",!0)])]),m("div",M,[O,m("div",R,[m("div",W,[f(V,null,{default:p((()=>[f(d,null,{default:p((()=>[f(k,{modelValue:h(X),"onUpdate:modelValue":u[1]||(u[1]=l=>b(X)?X.value=l:null),label:"Disable all notifications",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1}),f(V,null,{default:p((()=>[f(d,null,{default:p((()=>[f(k,{modelValue:h(Z),"onUpdate:modelValue":u[2]||(u[2]=l=>b(Z)?Z.value=l:null),label:"Disable low priority notifications",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1})])])]),m("div",Y,[q,m("div",z,[m("div",J,[f(V,null,{default:p((()=>[f(d,null,{default:p((()=>[f(k,{modelValue:h($),"onUpdate:modelValue":u[3]||(u[3]=l=>b($)?$.value=l:null),label:"Enable marketing emails",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1}),f(V,null,{default:p((()=>[f(d,null,{default:p((()=>[f(k,{modelValue:h(ll),"onUpdate:modelValue":u[4]||(u[4]=l=>b(ll)?ll.value=l:null),label:"Enable partners emails",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1})])])])],32)])}}}),[["__file","EditProfileSettings.vue"]]);export{L as _};