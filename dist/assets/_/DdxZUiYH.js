import{_ as e}from"./Di-XzD_V.js";import{_ as s}from"./LQmerVSA.js";import{_ as a}from"./B1nunnCQ.js";import{W as l,S as t,a as r,o,c as i,e as n,g as c,j as d,v as m,k as u,l as p,J as f,ag as v,H as j,K as g,x as h,F as _,C as S,aK as k,u as y,s as w,a2 as C}from"../../index-BnGzoMia.js";import{_ as x}from"./C0R5wJ4N.js";import{_ as D}from"./Bz8Fgksh.js";import E from"./BoS-S3MQ.js";import"./VIMGMjZ5.js";import"./D5UZqAJ_.js";import"./Bx6q4Kdm.js";import"./gfZgleAp.js";import"./h5PKOuzv.js";import"./iUM7Auia.js";/* empty css        */import"./BEoojC2K.js";import"./wk-d1_ZX.js";import"./ZiQZdQ7P.js";import"./BBfFe7QG.js";const L={class:"card-grid-toolbar"},b={class:"buttons"},O=m("span",{class:"icon"},[m("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),M=m("span",null,"New Store",-1),z={class:"card-grid card-grid-v3"},A=m("img",{class:"light-image",src:x,alt:""},null,-1),F=m("img",{class:"dark-image",src:D,alt:""},null,-1),K={class:"card-grid-item"},N={class:"dark-inverted"},P={class:"mt-5"},R=m("span",null,"Edit",-1),V=m("span",null,"Delete",-1),q=C(n({__name:"StoresList",setup(n){const{filters:C,modalOpen:x,selectedProject:D,storeList:q,fetchStoreList:H,openAddModal:J,openEditModal:T,filteredData:U,DeleteStore:W}=function(){const e=l(),s=t(),a=r(""),n=r(!1),c=r(null),d=r([]),m=async()=>{try{const e=await s.get("/store/");d.value=e.data}catch(e){console.error("Error fetching stores:",e)}};o((()=>{m()}));const u=i((()=>a.value?d.value.filter((e=>e.name.match(new RegExp(a.value,"i"))||e.email.match(new RegExp(a.value,"i")))):d.value));return{filters:a,modalOpen:n,selectedProject:c,storeList:d,fetchStoreList:m,openAddModal:()=>{c.value=null,n.value=!0},openEditModal:e=>{c.value={...e},n.value=!0},filteredData:u,DeleteStore:async a=>{try{await s.delete(`/store/${a}/`),e.success("Store Deleted Successfully"),m()}catch(l){e.error("Store Delete Failed")}}}}();return(l,t)=>{const r=a,o=s,i=e;return c(),d("div",null,[m("div",L,[u(r,{icon:"lucide:search"},{default:p((()=>[f(m("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>g(C)?C.value=e:null),class:"input custom-text-filter",placeholder:"Search stores..."},null,512),[[v,j(C)]])])),_:1}),m("div",b,[u(o,{color:"primary",raised:"",onClick:j(J)},{default:p((()=>[O,M])),_:1},8,["onClick"])])]),m("div",z,[u(i,{class:h([0!==j(U).length&&"is-hidden"]),title:"No matching stores found.",subtitle:"Try different search terms or criteria.",larger:""},{image:p((()=>[A,F])),_:1},8,["class"]),u(k,{name:"list",tag:"div",class:"columns is-multiline is-flex-tablet-p is-half-tablet-p"},{default:p((()=>[(c(!0),d(_,null,S(j(U),(e=>(c(),d("div",{key:e.id,class:"column is-4"},[m("div",K,[m("h3",N,y(e?.name),1),m("p",null,"Owner: "+y(e?.owner_name),1),m("div",P,[u(o,{class:"",color:"info",rounded:"",size:"small"},{default:p((()=>[w(" View ")])),_:1}),u(o,{class:"ml-2",color:"primary",rounded:"",size:"small",onClick:s=>j(T)(e)},{default:p((()=>[R])),_:2},1032,["onClick"]),u(o,{class:"ml-2",color:"danger",rounded:"",size:"small",onClick:s=>j(W)(e.id)},{default:p((()=>[V])),_:2},1032,["onClick"])])])])))),128))])),_:1})]),u(E,{modalOpen:j(x),project:j(D),onClose:t[1]||(t[1]=()=>{x.value=!1}),onSave:j(H)},null,8,["modalOpen","project","onSave"])])}}}),[["__file","StoresList.vue"]]);export{q as default};