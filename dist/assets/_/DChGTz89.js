import{_ as e}from"./BVxqxAdo.js";import{_ as l}from"./DR9cfRC6.js";import{_ as s}from"./BBfFe7QG.js";import{_ as a}from"./ZiQZdQ7P.js";import{_ as i}from"./B1nunnCQ.js";import{_ as n}from"./LQmerVSA.js";import{e as t,W as c,at as o,a as d,c as u,z as r,g as v,j as m,v as p,k as g,l as f,s as k,H as h,I as b,D as y,x as _,K as w,u as x,F as S,a2 as j}from"../../index-BnGzoMia.js";import{s as V}from"./MiAo3PcT.js";const C={class:"account-box is-form is-footerless"},A={class:"form-head-inner"},Y=p("div",{class:"left"},[p("h3",null,"Skills and Tools"),p("p",null,"Edit your skills and tools")],-1),L={class:"right"},K={class:"buttons"},E={class:"form-body"},I={class:"fieldset"},J={key:0,class:"fieldset-heading"},U=[p("h4",null,"Languages",-1),p("p",null,"How many languages do you speak?",-1)],N={key:1,class:"fieldset-heading"},F={class:"setting-list"},H={class:"field-wrap"},T={class:"columns is-multiline"},B={class:"column is-6"},G={class:"multiselect-single-label"},M=["src"],P={class:"select-label-text"},W=["src"],O={class:"select-label-text"},q={class:"column is-6"},z={class:"column is-12"},D={class:"column is-12"},R={class:"setting-item"},Q=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"English"),p("span",null,"Native Speaker, fluent")],-1),X={class:"end"},Z={class:"setting-item"},$=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"French"),p("span",null,"Fluent, written and spoken")],-1),ee={class:"end"},le={class:"setting-item"},se=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"German"),p("span",null,"Beginner level")],-1),ae={class:"end"},ie={class:"setting-item"},ne=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"Spanish"),p("span",null,"Beginner level")],-1),te={class:"end"},ce={class:"setting-item is-create"},oe=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"New Item"),p("span",null,"Add a new language item")],-1),de={class:"end"},ue={class:"fieldset"},re={key:0,class:"fieldset-heading"},ve=[p("h4",null,"Skills",-1),p("p",null,"Add your best skills",-1)],me={key:1,class:"fieldset-heading"},pe={class:"setting-list"},ge={class:"field-wrap"},fe={class:"columns is-multiline"},ke={class:"column is-6"},he={class:"multiselect-single-label"},be=["src"],ye={class:"select-label-text"},_e=["src"],we={class:"select-label-text"},xe={class:"column is-6"},Se={class:"column is-12"},je={class:"setting-item"},Ve=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"Javascript"),p("span",null,"7 years of experience")],-1),Ce={class:"end"},Ae={class:"setting-item"},Ye=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"Html5"),p("span",null,"10+ years of experience")],-1),Le={class:"end"},Ke={class:"setting-item"},Ee=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"CSS3"),p("span",null,"10+ years of experience")],-1),Ie={class:"end"},Je={class:"setting-item is-create"},Ue=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"New Item"),p("span",null,"Add a new skill item")],-1),Ne={class:"end"},Fe={class:"fieldset"},He={key:0,class:"fieldset-heading"},Te=[p("h4",null,"Tools",-1),p("p",null,"Add the tools you work with",-1)],Be={key:1,class:"fieldset-heading"},Ge={class:"setting-list"},Me={class:"field-wrap"},Pe={class:"columns is-multiline"},We={class:"column is-6"},Oe={class:"multiselect-single-label"},qe=["src"],ze={class:"select-label-text"},De=["src"],Re={class:"select-label-text"},Qe={class:"column is-6"},Xe={class:"column is-12"},Ze={class:"setting-item"},$e=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"Illustrator"),p("span",null,"Advanced level")],-1),el={class:"end"},ll={class:"setting-item"},sl=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"Jira Software"),p("span",null,"Intermediate level")],-1),al={class:"end"},il={class:"setting-item"},nl=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"MS Office"),p("span",null,"Expert level")],-1),tl={class:"end"},cl={class:"setting-item is-create"},ol=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"New Item"),p("span",null,"Add a new tool item")],-1),dl={class:"end"},ul=j(t({__name:"EditProfileSkills",setup(t){const j=c(),{y:ul}=o(),rl=d(!1),vl=d(!1),ml=d(!1),pl=d(!1),gl=d(""),fl=d(""),kl=d(""),hl=d(""),bl=d(""),yl=d(""),_l=u((()=>ul.value>30)),wl=async()=>{vl.value=!1,await jl(),gl.value="",fl.value=""},xl=async()=>{ml.value=!1,await jl(),kl.value="",hl.value=""},Sl=async()=>{pl.value=!1,await jl(),bl.value="",yl.value=""},jl=async()=>{rl.value=!0,await V(),j.primary("Your changes have been successfully saved!"),rl.value=!1};return(t,c)=>{const o=n,d=r("Multiselect"),u=i,j=a,V=s,ul=l,Vl=e;return v(),m("div",C,[p("div",{class:_(["form-head stuck-header",[h(_l)&&"is-stuck"]])},[p("div",A,[Y,p("div",L,[p("div",K,[g(o,{to:"/sidebar/layouts/profile-view",icon:"lnir lnir-arrow-left rem-100",light:"","dark-outlined":""},{default:f((()=>[k(" Go Back ")])),_:1}),g(o,{color:"primary",raised:"",loading:h(rl),tabindex:"0",onKeydown:b(y(jl,["prevent"]),["enter"]),onClick:jl},{default:f((()=>[k(" Save Changes ")])),_:1},8,["loading","onKeydown"])])])])],2),p("div",E,[p("div",I,[h(vl)?(v(),m("div",N,[p("a",{class:"action-link",tabindex:"0",role:"button",onKeydown:c[0]||(c[0]=b(y((e=>vl.value=!1),["prevent"]),["enter"])),onClick:c[1]||(c[1]=e=>vl.value=!1)}," Cancel ",32)])):(v(),m("div",J,U)),p("div",F,[h(vl)?(v(),m("form",{key:0,method:"post",novalidate:"",class:"setting-form",onSubmit:y(wl,["prevent"])},[p("div",H,[p("div",T,[p("div",B,[g(j,{class:"is-image-select"},{default:f((({id:e})=>[g(u,null,{default:f((()=>[g(d,{modelValue:h(gl),"onUpdate:modelValue":c[2]||(c[2]=e=>w(gl)?gl.value=e:null),attrs:{id:e},placeholder:"Select a language",label:"name",options:[{value:"english",name:"English",icon:"/images/icons/flags/united-states-of-america.svg"},{value:"french",name:"French",icon:"/images/icons/flags/france.svg"},{value:"german",name:"German",icon:"/images/icons/flags/germany.svg"},{value:"spanish",name:"Spanish",icon:"/images/icons/flags/spain.svg"}]},{singlelabel:f((({value:e})=>[p("div",G,[p("img",{class:"select-label-icon",src:e.icon,alt:""},null,8,M),p("span",P,x(e.name),1)])])),option:f((({option:e})=>[p("img",{class:"select-option-icon",src:e.icon,alt:""},null,8,W),p("span",O,x(e.name),1)])),_:2},1032,["modelValue","attrs"])])),_:2},1024)])),_:1})]),p("div",q,[g(j,null,{default:f((({id:e})=>[g(u,null,{default:f((()=>[g(d,{modelValue:h(fl),"onUpdate:modelValue":c[3]||(c[3]=e=>w(fl)?fl.value=e:null),attrs:{id:e},placeholder:"Select your level",options:[{value:"1",label:"Level 1"},{value:"2",label:"Level 2"},{value:"3",label:"Level 3"},{value:"4",label:"Level 4"}]},null,8,["modelValue","attrs"])])),_:2},1024)])),_:1})]),p("div",z,[g(j,null,{default:f((()=>[g(u,{icon:"lucide:message-circle"},{default:f((()=>[g(V,{type:"text",placeholder:"Write a quick comment...",autocomplete:"off"})])),_:1})])),_:1})]),p("div",D,[g(o,{type:"submit",color:"primary",icon:"fas fa-plus",raised:"",fullwidth:""},{default:f((()=>[k(" Add Language ")])),_:1})])])])],32)):(v(),m(S,{key:1},[p("div",R,[g(ul,{picture:"/images/icons/flags/united-states-of-america.svg"}),Q,p("div",X,[g(Vl)])]),p("div",Z,[g(ul,{picture:"/images/icons/flags/france.svg"}),$,p("div",ee,[g(Vl)])]),p("div",le,[g(ul,{picture:"/images/icons/flags/germany.svg"}),se,p("div",ae,[g(Vl)])]),p("div",ie,[g(ul,{picture:"/images/icons/flags/spain.svg"}),ne,p("div",te,[g(Vl)])]),p("div",ce,[g(ul,{icon:"lnil lnil-circle-plus"}),oe,p("div",de,[g(o,{raised:"","dark-outlined":"",icon:"fas fa-plus",class:"add-setting-item",tabindex:"0",onKeydown:c[4]||(c[4]=b(y((e=>vl.value=!0),["prevent"]),["enter"])),onClick:c[5]||(c[5]=e=>vl.value=!0)},{default:f((()=>[k(" Add ")])),_:1})])])],64))])]),p("div",ue,[h(ml)?(v(),m("div",me,[p("a",{class:"action-link",tabindex:"0",role:"button",onKeydown:c[6]||(c[6]=b(y((e=>ml.value=!1),["prevent"]),["enter"])),onClick:c[7]||(c[7]=e=>ml.value=!1)}," Cancel ",32)])):(v(),m("div",re,ve)),p("div",pe,[h(ml)?(v(),m("form",{key:0,method:"post",novalidate:"",class:"setting-form",onSubmit:y(xl,["prevent"])},[p("div",ge,[p("div",fe,[p("div",ke,[g(j,{class:"is-image-select"},{default:f((({id:e})=>[g(u,null,{default:f((()=>[g(d,{modelValue:h(kl),"onUpdate:modelValue":c[8]||(c[8]=e=>w(kl)?kl.value=e:null),attrs:{id:e},placeholder:"Select a Skill",label:"name",options:[{value:"html",name:"Html5",icon:"/images/icons/stacks/html5.svg"},{value:"css",name:"CSS3",icon:"/images/icons/stacks/css3.svg"},{value:"javascript",name:"Javascript",icon:"/images/icons/stacks/js.svg"},{value:"react",name:"React",icon:"/images/icons/stacks/reactjs.svg"},{value:"angular",name:"Angular",icon:"/images/icons/stacks/angular.svg"},{value:"vueJs",name:"VueJs",icon:"/images/icons/stacks/vuejs.svg"},{value:"nodejs",name:"NodeJS",icon:"/images/icons/stacks/nodejs.svg"},{value:"csharp",name:"C#",icon:"/images/icons/stacks/csharp.svg"}]},{singlelabel:f((({value:e})=>[p("div",he,[p("img",{class:"select-label-icon",src:e.icon,alt:""},null,8,be),p("span",ye,x(e.name),1)])])),option:f((({option:e})=>[p("img",{class:"select-option-icon",src:e.icon,alt:""},null,8,_e),p("span",we,x(e.name),1)])),_:2},1032,["modelValue","attrs"])])),_:2},1024)])),_:1})]),p("div",xe,[g(j,null,{default:f((({id:e})=>[g(u,null,{default:f((()=>[g(d,{modelValue:h(hl),"onUpdate:modelValue":c[9]||(c[9]=e=>w(hl)?hl.value=e:null),attrs:{id:e},placeholder:"Years of Exp.",options:[{value:"1",label:"1 Year of exp."},{value:"2",label:"2 Year of exp."},{value:"3",label:"3 Year of exp."},{value:"4",label:"4 Year of exp."},{value:"5",label:"5 Year of exp."},{value:"6",label:"6 Year of exp."},{value:"7",label:"7 Year of exp."},{value:"8",label:"8 Year of exp."},{value:"9",label:"9 Year of exp."},{value:"+10",label:"+10 Year of exp."}]},null,8,["modelValue","attrs"])])),_:2},1024)])),_:1})]),p("div",Se,[g(o,{type:"submit",color:"primary",icon:"fas fa-plus",raised:"",fullwidth:""},{default:f((()=>[k(" Add Skill ")])),_:1})])])])],32)):(v(),m(S,{key:1},[p("div",je,[g(ul,{picture:"/images/icons/stacks/js.svg"}),Ve,p("div",Ce,[g(Vl)])]),p("div",Ae,[g(ul,{picture:"/images/icons/stacks/html5.svg"}),Ye,p("div",Le,[g(Vl)])]),p("div",Ke,[g(ul,{picture:"/images/icons/stacks/css3.svg"}),Ee,p("div",Ie,[g(Vl)])]),p("div",Je,[g(ul,{icon:"lnil lnil-circle-plus"}),Ue,p("div",Ne,[g(o,{raised:"","dark-outlined":"",icon:"fas fa-plus",class:"add-setting-item",tabindex:"0",onKeydown:c[10]||(c[10]=b(y((e=>ml.value=!0),["prevent"]),["enter"])),onClick:c[11]||(c[11]=e=>ml.value=!0)},{default:f((()=>[k(" Add ")])),_:1})])])],64))])]),p("div",Fe,[h(pl)?(v(),m("div",Be,[p("a",{class:"action-link",tabindex:"0",role:"button",onKeydown:c[12]||(c[12]=b(y((e=>pl.value=!1),["prevent"]),["enter"])),onClick:c[13]||(c[13]=e=>pl.value=!1)}," Cancel ",32)])):(v(),m("div",He,Te)),p("div",Ge,[h(pl)?(v(),m("form",{key:0,method:"post",novalidateclass:"setting-form",onSubmit:y(Sl,["prevent"])},[p("div",Me,[p("div",Pe,[p("div",We,[g(j,{class:"is-image-select"},{default:f((({id:e})=>[g(u,null,{default:f((()=>[g(d,{modelValue:h(bl),"onUpdate:modelValue":c[14]||(c[14]=e=>w(bl)?bl.value=e:null),attrs:{id:e},placeholder:"Select a Tool",label:"name",options:[{value:"illustrator",name:"Illustrator",icon:"/images/icons/stacks/illustrator.svg"},{value:"photoshop",name:"Photoshop",icon:"/images/icons/stacks/photoshop.svg"},{value:"jira",name:"Jira Software",icon:"https://media.cssninja.io/content/photos/tools/jira.svg"},{value:"office",name:"MS Office",icon:"https://media.cssninja.io/content/photos/tools/office.svg"}]},{singlelabel:f((({value:e})=>[p("div",Oe,[p("img",{class:"select-label-icon",src:e.icon,alt:""},null,8,qe),p("span",ze,x(e.name),1)])])),option:f((({option:e})=>[p("img",{class:"select-option-icon",src:e.icon,alt:""},null,8,De),p("span",Re,x(e.name),1)])),_:2},1032,["modelValue","attrs"])])),_:2},1024)])),_:1})]),p("div",Qe,[g(j,null,{default:f((({id:e})=>[g(u,null,{default:f((()=>[g(d,{modelValue:h(yl),"onUpdate:modelValue":c[15]||(c[15]=e=>w(yl)?yl.value=e:null),attrs:{id:e},placeholder:"Select your level",options:[{value:"1",label:"Level 1"},{value:"2",label:"Level 2"},{value:"3",label:"Level 3"},{value:"4",label:"Level 4"},{value:"5",label:"Level 5"}]},null,8,["modelValue","attrs"])])),_:2},1024)])),_:1})]),p("div",Xe,[g(o,{type:"submit",color:"primary",icon:"fas fa-plus",raised:"",fullwidth:""},{default:f((()=>[k(" Add Tool ")])),_:1})])])])],32)):(v(),m(S,{key:1},[p("div",Ze,[g(ul,{picture:"/images/icons/stacks/illustrator.svg"}),$e,p("div",el,[g(Vl)])]),p("div",ll,[g(ul,{picture:"https://media.cssninja.io/content/photos/tools/jira.svg"}),sl,p("div",al,[g(Vl)])]),p("div",il,[g(ul,{picture:"https://media.cssninja.io/content/photos/tools/office.svg"}),nl,p("div",tl,[g(Vl)])]),p("div",cl,[g(ul,{icon:"lnil lnil-circle-plus"}),ol,p("div",dl,[g(o,{raised:"","dark-outlined":"",icon:"fas fa-plus",class:"add-setting-item",tabindex:"0",onKeydown:c[16]||(c[16]=b(y((e=>pl.value=!0),["prevent"]),["enter"])),onClick:c[17]||(c[17]=e=>pl.value=!0)},{default:f((()=>[k(" Add ")])),_:1})])])],64))])])])])}}}),[["__file","EditProfileSkills.vue"]]);export{ul as _};