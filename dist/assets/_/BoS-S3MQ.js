import{_ as e}from"./BEoojC2K.js";import{_ as l}from"./LQmerVSA.js";import{_ as a}from"./ZiQZdQ7P.js";import{_ as o}from"./B1nunnCQ.js";import{_ as t}from"./BBfFe7QG.js";import{_ as r}from"./gfZgleAp.js";import{e as s,W as n,S as d,a as m,w as u,o as p,g as i,A as _,l as c,k as f,s as j,H as h,D as v,a2 as V}from"../../index-BnGzoMia.js";import"./Bx6q4Kdm.js";import"./wk-d1_ZX.js";import"./VIMGMjZ5.js";import"./D5UZqAJ_.js";import"./h5PKOuzv.js";import"./iUM7Auia.js";/* empty css        */const y=V(s({__name:"StoreModal",props:{modalOpen:{type:Boolean},project:{}},emits:["close","save"],setup(s,{emit:V}){n();const y=d(),S=s,b=V,w=m({id:"",name:"",owner_name:"",phone_number:"",address:""});u((()=>S.project),(e=>{w.value=e?{...e}:{name:"",owner_name:"",phone_number:"",address:"",id:""}}),{immediate:!0});const E=async()=>{try{const e=w.value.id?"patch":"post",l=w.value.id?`/store/${w.value.id}/`:"/store/";await y[e](l,w.value),b("save",{...w.value}),b("close")}catch(e){console.error("Error saving store:",e)}},g=()=>{b("close")};return p((()=>{console.log("prps",S.modalOpen)})),(s,n)=>{const d=r,m=t,u=o,p=a,V=l,y=e;return i(),_(y,{is:"form",onSubmit:v(E,["prevent"]),title:h(w).id?"Edit Store":"Add Store",open:S.modalOpen,size:"medium",actions:"right",onClose:g},{content:c((()=>[f(p,null,{default:c((()=>[f(d,null,{default:c((()=>[j("Store Name*")])),_:1}),f(u,null,{default:c((()=>[f(m,{required:"",modelValue:h(w).name,"onUpdate:modelValue":n[0]||(n[0]=e=>h(w).name=e),type:"text",placeholder:"Enter store name"},null,8,["modelValue"])])),_:1})])),_:1}),f(p,null,{default:c((()=>[f(d,null,{default:c((()=>[j("Owner Name*")])),_:1}),f(u,null,{default:c((()=>[f(m,{required:"",modelValue:h(w).owner_name,"onUpdate:modelValue":n[1]||(n[1]=e=>h(w).owner_name=e),type:"text",placeholder:"Enter owner name"},null,8,["modelValue"])])),_:1})])),_:1}),f(p,null,{default:c((()=>[f(d,null,{default:c((()=>[j("Phone Number")])),_:1}),f(u,null,{default:c((()=>[f(m,{modelValue:h(w).phone_number,"onUpdate:modelValue":n[2]||(n[2]=e=>h(w).phone_number=e),type:"tel",placeholder:"Enter phone number"},null,8,["modelValue"])])),_:1})])),_:1}),f(p,null,{default:c((()=>[f(d,null,{default:c((()=>[j("Store Address*")])),_:1}),f(u,null,{default:c((()=>[f(m,{required:"",modelValue:h(w).address,"onUpdate:modelValue":n[3]||(n[3]=e=>h(w).address=e),type:"text",placeholder:"Enter address"},null,8,["modelValue"])])),_:1})])),_:1})])),action:c((()=>[f(V,{color:"primary",raised:"",type:"submit"},{default:c((()=>[j("Save")])),_:1})])),_:1},8,["title","open"])}}}),[["__file","StoreModal.vue"]]);export{y as default};