import{e,ae as a,af as l,ax as s,c as t,g as u,j as i,J as n,ay as o,H as d,v as p,q as m,E as r,G as c,m as f,K as v,x as V,a2 as h}from"../../index-BnGzoMia.js";import{a as _}from"./h5PKOuzv.js";const g=["id","name","multiple"],B=h(e({inheritAttrs:!1,__name:"VSelect",props:a({raw:{type:Boolean},multiple:{type:Boolean}},{modelValue:{default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=l(e,"modelValue"),h=e,B=s(),{field:x,id:j}=_({create:!1,help:"VSelect"}),y=t({get:()=>x?.value?x.value.value:a.value,set(e){x?.value&&x.value.setValue(e),a.value=e}}),C=t((()=>h.raw?[]:["select",h.multiple&&"is-multiple"]));return(e,a)=>(u(),i("div",{class:V(d(C))},[n(p("select",f({id:d(j)},d(B),{"onUpdate:modelValue":a[0]||(a[0]=e=>v(y)?y.value=e:null),name:d(j),multiple:h.multiple,onChange:a[1]||(a[1]=(...e)=>d(x)?.handleChange&&d(x)?.handleChange(...e)),onBlur:a[2]||(a[2]=(...e)=>d(x)?.handleBlur&&d(x)?.handleBlur(...e))}),[m(e.$slots,"default",r(c({selected:d(y),id:d(j)})))],16,g),[[o,d(y)]])],2))}}),[["__file","VSelect.vue"]]),x=h(e({__name:"VOption",setup(e){const{field:a,id:l}=_({create:!1,help:"VOption"});return(e,s)=>(u(),i("option",null,[m(e.$slots,"default",r(c({field:d(a),id:d(l)})))]))}}),[["__file","VOption.vue"]]);export{x as _,B as a};