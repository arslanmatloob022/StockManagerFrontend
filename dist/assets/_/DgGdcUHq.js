import{e as s,g as e,j as a,I as o,D as l,y as t,v as n,q as c,x as i,a2 as r}from"../../index-BnGzoMia.js";const d={class:"message-body"},m=r(s({__name:"VMessage",props:{color:{default:void 0},closable:{type:Boolean}},emits:["close"],setup(s,{emit:r}){const m=r,p=s;return(s,r)=>(e(),a("div",{class:i(["message",[p.color&&`is-${p.color}`]])},[p.closable?(e(),a("a",{key:0,"aria-label":"Dismiss",class:"delete",tabindex:"0",role:"button",onKeydown:r[0]||(r[0]=o(l((s=>m("close")),["prevent"]),["enter"])),onClick:r[1]||(r[1]=l((s=>m("close")),["prevent"]))},null,32)):t("",!0),n("div",d,[c(s.$slots,"default")])],2))}}),[["__file","VMessage.vue"]]);export{m as _};