import{_ as e}from"./Bx6q4Kdm.js";import{e as o,a as s,g as n,j as a,q as t,E as i,G as r,H as l,v as d,x as p,I as c,D as g,k as u,u as m,y as w,A as y,a2 as f}from"../../index-BnGzoMia.js";import{u as v}from"./CQZ7Xn6C.js";const k={key:0},b={class:"dropdown-menu",role:"menu"},_=f(o({__name:"VDropdown",props:{title:{default:void 0},color:{default:void 0},icon:{default:void 0},up:{type:Boolean},end:{type:Boolean},right:{type:Boolean},modern:{type:Boolean},spaced:{type:Boolean},options:{default:void 0},classes:{default:void 0}},setup(o,{expose:f}){const _=o,x=s(),B=v(x,_.options);return f({...B}),(o,s)=>{const f=e;return n(),a("div",{ref_key:"dropdownElement",ref:x,class:p([[_.right&&"is-right",_.up&&"is-up",_.end&&"is-end",_.icon&&"is-dots",_.modern&&"is-modern",_.spaced&&"is-spaced",l(B).isOpen&&"is-active",..."string"==typeof _.classes?.wrapper?[_.classes?.wrapper]:_.classes?.wrapper??""],"dropdown"])},[t(o.$slots,"button",i(r(l(B))),(()=>[_.icon?(n(),a("a",{key:0,tabindex:"0",class:"is-trigger dropdown-trigger","aria-label":"View more actions",onKeydown:s[0]||(s[0]=c(g(((...e)=>l(B).toggle&&l(B).toggle(...e)),["prevent"]),["enter"])),onClick:s[1]||(s[1]=(...e)=>l(B).toggle&&l(B).toggle(...e))},[u(f,{icon:_.icon},null,8,["icon"])],32)):(n(),a("a",{key:1,tabindex:"0",class:p(["is-trigger button dropdown-trigger",[_.color&&`is-${_.color}`]]),onKeydown:s[2]||(s[2]=c(g(((...e)=>l(B).toggle&&l(B).toggle(...e)),["prevent"]),["enter"])),onClick:s[3]||(s[3]=(...e)=>l(B).toggle&&l(B).toggle(...e))},[_.title?(n(),a("span",k,m(_.title),1)):w("",!0),d("span",{class:p([!_.modern&&"base-caret",_.modern&&"base-caret"])},[l(B).isOpen?(n(),y(f,{key:1,icon:"fa6-solid:angle-up"})):(n(),y(f,{key:0,icon:"fa6-solid:angle-down"}))],2)],34))])),d("div",b,[d("div",{class:p(["dropdown-content",_.classes?.content])},[t(o.$slots,"content",i(r(l(B))))],2)])],2)}}}),[["__file","VDropdown.vue"]]);export{_};