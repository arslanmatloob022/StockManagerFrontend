import{_ as s}from"./wEOn6LSq.js";import{_ as a}from"./CovAPdDx.js";import{_ as l}from"./Bx6q4Kdm.js";import{e,V as o,a as n,o as t,g as i,j as c,v as r,D as u,I as p,q as d,k as m,l as k,H as v,F as f,C as _,A as h,y,u as b,T as j,x as g,a2 as x}from"../../index-BnGzoMia.js";import{w as C}from"./D_4wJL3I.js";const w={class:"collapse-wrap"},V={key:0,class:"collapse-content"},I=x(e({__name:"VCollapseLinks",props:{links:{}},setup(e){const x=e,I=o(),L=n(!1);function q(){L.value=!L.value}return t((()=>{x.links.some((s=>C(s.to)===C(I.path)))&&(L.value=!0)})),(e,o)=>{const n=l,t=a,C=s;return i(),c("li",{class:g(["collapse-links has-children",[v(L)&&"active"]])},[r("div",w,[r("a",{role:"button",tabindex:"0",class:"parent-link",onClick:o[0]||(o[0]=u((()=>q()),["prevent"])),onKeydown:o[1]||(o[1]=p(u((()=>q()),["prevent"]),["enter"]))},[d(e.$slots,"default",{},void 0,!0),m(n,{class:"rtl-hidden",icon:"lucide:chevron-right"}),m(n,{class:"ltr-hidden",icon:"lucide:chevron-left"})],32)]),m(j,{name:"collapse-links-transition",mode:"out-in"},{default:k((()=>[v(L)?(i(),c("ul",V,[(i(!0),c(f,null,_(x.links,(s=>(i(),c("li",{key:s.to},[m(C,{class:"is-submenu",to:s.to},{default:k((()=>[s.icon?(i(),h(n,{key:0,icon:s.icon},null,8,["icon"])):y("",!0),r("span",null,b(s.label),1),s.tag?(i(),h(t,{key:1,label:s.tag,color:"primary",outlined:"",curved:""},null,8,["label"])):y("",!0)])),_:2},1032,["to"])])))),128))])):y("",!0)])),_:1})],2)}}}),[["__scopeId","data-v-c55c9f74"],["__file","VCollapseLinks.vue"]]);export{I as _};