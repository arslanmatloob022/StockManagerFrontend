import{_ as s}from"./Bx6q4Kdm.js";import{ar as e,a,c as n,e as i,g as t,j as o,k as l,x as r,H as c,I as d,D as u,a2 as p,v as m,q as v,l as g,a3 as h,z as f,s as b,u as C,y as j,$ as _,F as y,A as k,i as w,C as O,p as x,W as M,o as E,_ as S,T as I}from"../../index-BnGzoMia.js";import{u as K}from"./BaWv-0_A.js";import{b as A,c as D}from"./EaqS2iyj.js";import{_ as F}from"./CNnFan8G.js";import{_ as T}from"./B8PBVLbu.js";import{u as U}from"./DQVoh5Hc.js";import{u as $}from"./CQZ7Xn6C.js";import{_ as z}from"./2wgv7AEF.js";import{u as W}from"./C6JgEJ00.js";import{_ as N}from"./Ci3MDqQH.js";import{_ as X}from"./DR9cfRC6.js";import{_ as V}from"./XSWQI-sx.js";import{_ as P,a as q}from"./CvfLlr9z.js";import B from"./BYnxrTVp.js";/* empty css        */import"./BFnVcjcj.js";import"./D_4wJL3I.js";import"./DLvphbV_.js";import"./C2LXQ4kW.js";import"./DRHnIU39.js";import"./LQmerVSA.js";import"./VIMGMjZ5.js";import"./D5UZqAJ_.js";import"./BEoojC2K.js";import"./wk-d1_ZX.js";import"./-F1h96tR.js";import"./wEOn6LSq.js";import"./CXBDNCEO.js";import"./5DmaDgbk.js";import"./BhfiZcyb.js";import"./h5PKOuzv.js";import"./iUM7Auia.js";import"./ZiQZdQ7P.js";import"./gfZgleAp.js";import"./B1nunnCQ.js";import"./Dl_w8SzC.js";import"./BL5mLRHa.js";import"./fZ76Tv31.js";import"./D7xvqHjf.js";import"./CovAPdDx.js";import"./B4gRsRMA.js";import"./CvMipoV3.js";import"./CPi016vh.js";import"./CpprL1c_.js";import"./B0W5jPJA.js";import"./D8qv2EKy.js";import"./C7ylWNiD.js";import"./BP8yadT7.js";import"./DWGnwJwi.js";import"./BODK0I_h.js";import"./Cc47aLAP.js";import"./C3ZbMb0U.js";import"./D0IZs_4K.js";import"./BObvAvvO.js";import"./qfjNFpfH.js";const H={id:0,name:"",lastMessage:"",unreadMessages:!1,avatar:"/images/avatars/placeholder.jpg"},L=e("chat",(()=>{const s=K(),e=a([]),i=a([]),t=a(0),o=a(!1),l=a(!1),r=a(!1),c=n((()=>{const s=e.value?.find((s=>s.id===t.value));return s||H}));return{conversations:e,messages:i,selectedConversation:c,selectedConversationId:t,addConversationOpen:o,mobileConversationDetailsOpen:l,loading:r,loadConversations:async function(a=0,n=10){if(!r.value){r.value=!0;try{const i=await async function(s,e=0,a=20){let n=0;const{_data:i=[],headers:t}=await s.raw("/api/conversations",{query:{_start:e,_limit:a}});t.has("X-Total-Count")&&(n=parseInt(t.get("X-Total-Count")??"0"));return{conversations:i,count:n}}(s,a,n);e.value=i.conversations??[]}finally{r.value=!1}}},setAddConversationOpen:function(s){o.value=s},setMobileConversationDetailsOpen:function(s){l.value=s},selectConversastion:async function(e){if(!r.value){r.value=!0;try{const a=await async function(s,e,a=0,n=20){let i=0;const{_data:t=[],headers:o}=await s.raw(`/api/conversations/${e}/messages?_start=${a}&_limit=${n}`);o.has("X-Total-Count")&&(i=parseInt(o.get("X-Total-Count")??"0"));return{messages:t,count:i}}(s,e);t.value=e,i.value=a.messages}finally{r.value=!1}}},unselectConversation:function(){t.value=0,i.value=[]}}}));const J=p(i({__name:"ChatSideFab",setup(e){const a=L();return(e,n)=>{const i=s;return t(),o("a",{class:r([[c(a).mobileConversationDetailsOpen&&"is-mobile-active"],"chat-side-fab"]),"aria-label":"Close convesation details",tabindex:"0",role:"button",onKeydown:n[0]||(n[0]=d(u((s=>c(a).setMobileConversationDetailsOpen(!c(a).mobileConversationDetailsOpen)),["prevent"]),["enter"])),onClick:n[1]||(n[1]=s=>c(a).setMobileConversationDetailsOpen(!c(a).mobileConversationDetailsOpen))},[l(i,{icon:"lucide:chevron-left"})],34)}}}),[["__scopeId","data-v-77ae9696"],["__file","ChatSideFab.vue"]]),R={class:"is-chat-placeholder animated preFadeInUp fadeInUp is-hidden"},Q={class:"caption"},Y=m("div",{class:"text"},[m("h3",null,"Nothing to show"),m("p",null,"Select an existing conversation or start a new one"),m("a",{id:"new-chat",class:"button v-button is-solid is-outlined is-big is-rounded"}," Start a new conversation ")],-1),Z=p(i({__name:"ChatPlaceholder",setup(s){const{onceError:e}=U();return(s,a)=>(t(),o("div",R,[m("div",Q,[m("img",{src:T,alt:"",onErrorOnce:a[0]||(a[0]=s=>c(e)(s,150))},null,32),Y])]))}}),[["__file","ChatPlaceholder.vue"]]),G={class:"message-field-wrapper"},ss={class:"control"},es={class:"add-content"},as={class:"dropdown-menu",role:"menu"},ns={class:"dropdown-content"},is={class:"dropdown-item"},ts=m("div",{class:"meta"},[m("span",null,"Video"),m("span",null,"Embed a video")],-1),os={href:"#",class:"dropdown-item kill-drop v-modal-trigger"},ls=m("div",{class:"meta"},[m("span",null,"Images"),m("span",null,"Upload pictures")],-1),rs={href:"#",class:"dropdown-item kill-drop v-modal-trigger"},cs=m("div",{class:"meta"},[m("span",null,"Link"),m("span",null,"Post a link")],-1),ds=m("hr",{class:"dropdown-divider"},null,-1),us={href:"#",class:"dropdown-item kill-drop v-modal-trigger"},ps=m("div",{class:"meta"},[m("span",null,"File"),m("span",null,"Upload a file")],-1),ms={class:"add-emoji"},vs={class:"button"},gs=m("input",{id:"chat-input",class:"input is-rounded",type:"text",placeholder:"Write a message ...","aria-label":"Write a message"},null,-1),hs=m("div",{class:"send-message"},[m("div",{class:"button v-button is-primary is-raised is-rounded"}," Send ")],-1),fs=m("div",{class:"typing-indicator"},[m("img",{src:"/images/icons/misc/typing.gif",alt:""})],-1),bs=p(i({__name:"ChatMessageFieldWrapper",setup(e){const n=a(),i=$(n);return(e,a)=>{const r=s;return t(),o("div",G,[m("div",ss,[m("div",es,[m("div",{ref_key:"dropdownElement",ref:n,class:"dropdown dropdown-trigger is-up"},[m("div",null,[m("div",{class:"button","aria-haspopup":"true",onClick:a[0]||(a[0]=(...s)=>c(i).toggle&&c(i).toggle(...s))},[l(r,{icon:"lucide:plus"})])]),m("div",as,[m("div",ns,[m("a",is,[l(r,{icon:"lucide:video"}),ts]),m("a",os,[l(r,{icon:"lucide:image"}),ls]),m("a",rs,[l(r,{icon:"lucide:link"}),cs]),ds,m("a",us,[l(r,{icon:"lucide:file"}),ps])])])],512)]),m("div",ms,[m("div",vs,[l(r,{icon:"lucide:smile"})])]),gs,hs]),fs])}}}),[["__file","ChatMessageFieldWrapper.vue"]]),Cs={class:"chat-body-wrap"};const js=p({},[["render",function(s,e){return t(),o("div",Cs,[v(s.$slots,"default")])}],["__file","ChatBodyWrap.vue"]]),_s={id:"chat-body",class:"chat-body"};const ys=p({},[["render",function(s,e){return t(),o("ol",_s,[v(s.$slots,"default")])}],["__file","ChatBody.vue"]]),ks={class:"chat-header"};const ws=p({},[["render",function(s,e){return t(),o("div",ks,[v(s.$slots,"default")])}],["__file","ChatHeader.vue"]]),Os={class:"is-chat animated preFadeInUp fadeInUp"};const xs=p({},[["render",function(s,e){const a=ws,n=ys,i=js,r=bs;return t(),o("div",Os,[l(a,null,{default:g((()=>[v(s.$slots,"header")])),_:3}),l(i,null,{default:g((()=>[l(n,null,{default:g((()=>[v(s.$slots,"body")])),_:3}),v(s.$slots,"side")])),_:3}),l(r)])}],["__file","ChatCard.vue"]]),Ms={class:"toolbar ml-auto"},Es={class:"toolbar-link"},Ss=["src"],Is={class:"toolbar-notifications is-hidden-mobile"},Ks=m("span",{class:"new-indicator pulsate"},null,-1),As={class:"dropdown-menu",role:"menu"},Ds={class:"dropdown-content"},Fs={class:"heading"},Ts=m("div",{class:"heading-left"},[m("h6",{class:"heading-title"}," Notifications ")],-1),Us={class:"heading-right"},$s={class:"notification-list"},zs={class:"notification-item"},Ws={class:"img-left"},Ns=m("div",{class:"user-content"},[m("p",{class:"user-info"},[m("span",{class:"name"},"Alice C."),b(" left a comment. ")]),m("p",{class:"time"},"1 hour ago")],-1),Xs={class:"notification-item"},Vs={class:"img-left"},Ps=m("div",{class:"user-content"},[m("p",{class:"user-info"},[m("span",{class:"name"},"Joshua S."),b(" uploaded a file. ")]),m("p",{class:"time"},"2 hours ago")],-1),qs={class:"notification-item"},Bs={class:"img-left"},Hs=m("div",{class:"user-content"},[m("p",{class:"user-info"},[m("span",{class:"name"},"Tara S."),b(" sent you a message. ")]),m("p",{class:"time"},"2 hours ago")],-1),Ls={class:"notification-item"},Js={class:"img-left"},Rs=m("div",{class:"user-content"},[m("p",{class:"user-info"},[m("span",{class:"name"},"Melany W."),b(" left a comment. ")]),m("p",{class:"time"},"3 hours ago")],-1),Qs=p(i({__name:"MessagingToolbar",emits:["close"],setup(e,{emit:i}){const r=i,p=W(),{onceError:v}=U(),{locale:C}=h(),j=a(),_=$(j),y=n((()=>{switch(C.value){case"fr":return"/images/icons/flags/france.svg";case"es":return"/images/icons/flags/spain.svg";case"es-MX":return"/images/icons/flags/mexico.svg";case"de":return"/images/icons/flags/germany.svg";case"zh-CN":return"/images/icons/flags/china.svg";case"ar":return"/images/icons/flags/saudi-arabia.svg";default:return"/images/icons/flags/united-states-of-america.svg"}}));return(e,a)=>{const n=z,i=s,h=f("RouterLink");return t(),o("div",Ms,[m("div",Es,[l(n,{class:"ml-auto"})]),m("a",{class:"toolbar-link right-panel-trigger",tabindex:"0",role:"button",onKeydown:a[0]||(a[0]=d(u((s=>c(p).setActive("languages")),["prevent"]),["enter"])),onClick:a[1]||(a[1]=s=>c(p).setActive("languages"))},[m("img",{src:c(y),alt:""},null,8,Ss)],32),m("div",Is,[m("div",{ref_key:"dropdownElement",ref:j,class:"dropdown is-spaced is-dots is-right dropdown-trigger"},[m("div",{class:"is-trigger","aria-haspopup":"true",onClick:a[2]||(a[2]=(...s)=>c(_).toggle&&c(_).toggle(...s))},[l(i,{icon:"lucide:bell"}),Ks]),m("div",As,[m("div",Ds,[m("div",Fs,[Ts,m("div",Us,[l(h,{class:"notification-link",to:"/sidebar/layouts/profile-notifications"},{default:g((()=>[b(" See all ")])),_:1})])]),m("ul",$s,[m("li",null,[m("a",zs,[m("div",Ws,[m("img",{class:"user-photo",alt:"",src:"https://media.cssninja.io/content/avatars/7.jpg",onErrorOnce:a[3]||(a[3]=s=>c(v)(s,150))},null,32)]),Ns])]),m("li",null,[m("a",Xs,[m("div",Vs,[m("img",{class:"user-photo",alt:"",src:"https://media.cssninja.io/content/avatars/12.jpg",onErrorOnce:a[4]||(a[4]=s=>c(v)(s,150))},null,32)]),Ps])]),m("li",null,[m("a",qs,[m("div",Bs,[m("img",{class:"user-photo",alt:"",src:"https://media.cssninja.io/content/avatars/13.jpg",onErrorOnce:a[5]||(a[5]=s=>c(v)(s,150))},null,32)]),Hs])]),m("li",null,[m("a",Ls,[m("div",Js,[m("img",{class:"user-photo",alt:"",src:"https://media.cssninja.io/content/avatars/25.jpg",onErrorOnce:a[6]||(a[6]=s=>c(v)(s,150))},null,32)]),Rs])])])])])],512)]),m("a",{id:"hide-chat-side",class:"toolbar-link",tabindex:"0",role:"button",onKeydown:a[7]||(a[7]=d(u((s=>r("close")),["prevent"]),["enter"])),onClick:a[8]||(a[8]=s=>r("close"))},[l(i,{class:"rtl-hidden",icon:"lucide:chevron-left"}),l(i,{class:"ltr-hidden",icon:"lucide:chevron-right"})],32)])}}}),[["__file","MessagingToolbar.vue"]]),Ys={class:"chat-side-header"},Zs={class:"chat-side-content is-single"},Gs={class:"user-pic"},se=["src"],ee={key:0,class:"user-name"},ae={key:1,class:"user-job-title"},ne=_('<div class="side-actions"><a class="button v-button is-rounded"><span class="icon is-small"><i aria-hidden="true" class="fas fa-phone"></i></span><span>Audio Call</span></a><a class="button v-button is-rounded"><span class="icon is-small"><i aria-hidden="true" class="fas fa-video"></i></span><span>Video Call</span></a></div>',1),ie={class:"detail-photos"},te={class:"detail-photo-title"},oe={class:"detail-photo-grid"},le=m("a",{class:"view-more"},"View More",-1),re=p(i({__name:"ChatSide",setup(e){const a=L(),{onceError:n}=U();return(e,i)=>{const d=Qs,u=s;return t(),o("div",{class:r([[c(a).mobileConversationDetailsOpen&&"is-mobile-active"],"chat-side"])},[m("div",Ys,[l(d,{onClose:i[0]||(i[0]=s=>c(a).setMobileConversationDetailsOpen(!1))})]),m("div",Zs,[m("div",Gs,[m("img",{id:"user-details-image",src:c(a).selectedConversation.avatar,alt:"",onError:i[1]||(i[1]=s=>c(n)(s,150))},null,40,se),m("img",{id:"user-details-badge",class:"is-badge",src:N,alt:"",onErrorOnce:i[2]||(i[2]=s=>c(n)(s,150))},null,32)]),c(a).selectedConversation.name?(t(),o("h4",ee,C(c(a).selectedConversation.name),1)):j("",!0),c(a).selectedConversation.lastMessage?(t(),o("p",ae,C(c(a).selectedConversation.lastMessage),1)):j("",!0),ne,m("div",ie,[m("div",te,[l(u,{icon:"lucide:image"}),b(" Shared photos ")]),m("div",oe,[m("img",{src:"https://media.cssninja.io/content/photos/demo-apps/1.jpg",alt:"",onErrorOnce:i[3]||(i[3]=s=>c(n)(s,1600,900))},null,32),m("img",{src:"https://media.cssninja.io/content/photos/demo-apps/2.jpg",alt:"",onErrorOnce:i[4]||(i[4]=s=>c(n)(s,1600,900))},null,32),m("img",{src:"https://media.cssninja.io/content/photos/demo-apps/3.jpg",alt:"",onErrorOnce:i[5]||(i[5]=s=>c(n)(s,1600,900))},null,32),m("img",{src:"https://media.cssninja.io/content/photos/demo-apps/4.jpg",alt:"",onErrorOnce:i[6]||(i[6]=s=>c(n)(s,1600,900))},null,32),m("img",{src:"https://media.cssninja.io/content/photos/demo-apps/5.jpg",alt:"",onErrorOnce:i[7]||(i[7]=s=>c(n)(s,1600,900))},null,32),m("img",{src:"https://media.cssninja.io/content/photos/demo-apps/6.jpg",alt:"",onErrorOnce:i[8]||(i[8]=s=>c(n)(s,1600,900))},null,32),m("img",{src:"https://media.cssninja.io/content/photos/demo-apps/7.jpg",alt:"",onErrorOnce:i[9]||(i[9]=s=>c(n)(s,1600,900))},null,32),m("img",{src:"https://media.cssninja.io/content/photos/demo-apps/8.jpg",alt:"",onErrorOnce:i[10]||(i[10]=s=>c(n)(s,1600,900))},null,32),m("img",{src:"https://media.cssninja.io/content/photos/demo-apps/9.jpg",alt:"",onErrorOnce:i[11]||(i[11]=s=>c(n)(s,1600,900))},null,32),m("img",{src:"https://media.cssninja.io/content/photos/demo-apps/10.jpg",alt:"",onErrorOnce:i[12]||(i[12]=s=>c(n)(s,1600,900))},null,32),m("img",{src:"https://media.cssninja.io/content/photos/demo-apps/11.jpg",alt:"",onErrorOnce:i[13]||(i[13]=s=>c(n)(s,1600,900))},null,32),m("img",{src:"https://media.cssninja.io/content/photos/demo-apps/12.jpg",alt:"",onErrorOnce:i[14]||(i[14]=s=>c(n)(s,1600,900))},null,32)]),le])])],2)}}}),[["__file","ChatSide.vue"]]),ce={key:0,class:"divider-container"},de={class:"divider"},ue={class:"avatar"},pe=["src"],me={class:"msg"},ve={class:"msg-inner"},ge={class:"avatar is-online"},he=["src"],fe={class:"msg is-image"},be={class:"image-container"},Ce=m("div",{class:"image-overlay"},null,-1),je={class:"image-actions"},_e={class:"actions-inner"},ye={class:"action download"},ke=["href"],we={class:"avatar"},Oe=["src"],xe={class:"msg is-link-image"},Me={class:"image"},Ee=["src"],Se={class:"link-badge"},Ie=["src"],Ke={class:"link-body"},Ae={class:"link-title"},De={class:"avatar is-online"},Fe=["src"],Te={class:"msg is-link"},Ue={class:"link-meta"},$e={href:"#"},ze=p(i({__name:"ChatMsg",props:{message:{}},setup(e){const a=e;return(e,n)=>{const i=V,c=s,d=X;return t(),o("li",{class:r(["system"===a.message.type&&"divider-container","system"!==a.message.type&&a.message.sender])},["system"===a.message.type?(t(),o("li",ce,[m("div",de,[m("span",null,C(a.message.content.text),1)])])):"msg"===a.message.type?(t(),o(y,{key:1},[m("div",ue,[a.message.avatar?(t(),o("img",{key:0,src:a.message.avatar,draggable:"false",alt:""},null,8,pe)):j("",!0)]),m("div",me,[m("div",ve,[m("p",null,C(a.message.content.text),1)]),m("time",null,C(a.message.content.time),1)])],64)):"image"===a.message.type?(t(),o(y,{key:2},[m("div",ge,[a.message.avatar?(t(),o("img",{key:0,src:a.message.avatar,draggable:"false",alt:""},null,8,he)):j("",!0)]),m("div",fe,[m("div",be,[a.message.content.image_url?(t(),k(i,{key:0,items:[{src:a.message.content.image_url,thumbnail:a.message.content.image_url,w:600,h:400,alt:"optional alt attribute for thumbnail image"}],"thumbnail-radius":"full"},null,8,["items"])):j("",!0),Ce,m("div",je,[m("div",_e,[m("div",ye,[l(c,{icon:"lucide:download"})]),m("a",{href:a.message.content.image_url,class:"action messaging-popup","aria-label":"Maximize"},[l(c,{icon:"lucide:maximize"})],8,ke)])])])])],64)):"imagelink"===a.message.type?(t(),o(y,{key:3},[m("div",we,[a.message.avatar?(t(),o("img",{key:0,src:a.message.avatar,draggable:"false",alt:""},null,8,Oe)):j("",!0)]),m("div",xe,[m("figure",Me,[m("img",{src:a.message.content.link_image,alt:""},null,8,Ee),m("div",Se,[m("img",{src:a.message.content.link_badge,alt:""},null,8,Ie)])]),m("div",Ke,[m("span",Ae,C(a.message.content.text),1),m("small",null,C(a.message.content.subtext),1)])])],64)):"link"===a.message.type?(t(),o(y,{key:4},[m("div",De,[a.message.avatar?(t(),o("img",{key:0,src:a.message.avatar,draggable:"false",alt:""},null,8,Fe)):j("",!0)]),m("div",Te,[l(d,{icon:"lucide:link"}),m("p",Ue,[m("span",null,C(a.message.content.text),1),m("a",$e,C(a.message.content.subtext),1)])])],64)):j("",!0)],2)}}}),[["__file","ChatMsg.vue"]]),We={class:"inner"},Ne={class:"collapsed-menu"},Xe={class:"menu-toggle has-chevron"},Ve=[m("span",{class:"rotate"},[m("i",{"aria-hidden":"true",class:"icon-line-top"}),m("i",{"aria-hidden":"true",class:"icon-line-center"}),m("i",{"aria-hidden":"true",class:"icon-line-bottom"})],-1)],Pe={class:"collapsed-add"},qe={class:"collapsed-conversations"},Be=["onKeydown","onClick"],He={class:"user-container"},Le=["src"],Je=p(i({__name:"CollapsedMessaging",props:{conversations:{default:()=>[]},selectedConversationId:{default:0}},emits:["addConversation","selectConversation"],setup(e,{emit:n}){const i=n,p=e,{onceError:v}=U(),{messageSubsidebarOpen:g}=w("chat-page",{messageSubsidebarOpen:a(!1)});return(e,a)=>{const n=s;return t(),o("div",{class:r([[!c(g)&&"is-active"],"collapsed-messaging"])},[m("div",We,[m("div",Ne,[m("div",{class:"vuero-hamburger nav-trigger push-resize messages-push",tabindex:"0",role:"button",onKeydown:a[0]||(a[0]=d(u((s=>g.value=!c(g)),["prevent"]),["enter"])),onClick:a[1]||(a[1]=s=>g.value=!c(g))},[m("span",Xe,[m("span",{class:r([[c(g)&&"active"],"icon-box-toggle"])},Ve,2)])],32)]),m("div",Pe,[m("a",{class:"button collapse-add-button is-primary",tabindex:"0",role:"button",onKeydown:a[2]||(a[2]=d(u((s=>i("addConversation")),["prevent"]),["enter"])),onClick:a[3]||(a[3]=()=>i("addConversation"))},[l(n,{icon:"lucide:plus"})],32)]),m("ul",qe,[(t(!0),o(y,null,O(p.conversations,(s=>(t(),o("li",{key:s.id,class:r([p.selectedConversationId===s.id&&"is-active"]),tabindex:"0",role:"button",onKeydown:d(u((()=>i("selectConversation",s.id)),["prevent"]),["enter"]),onClick:()=>i("selectConversation",s.id)},[m("div",He,[m("img",{class:"is-user",src:s.avatar,alt:"",onErrorOnce:a[4]||(a[4]=s=>c(v)(s,150))},null,40,Le)])],42,Be)))),128))])])],2)}}}),[["__file","CollapsedMessaging.vue"]]),Re={class:"mobile-subsidebar is-messaging"},Qe={class:"inner"},Ye=m("div",{class:"sidebar-title"},[m("h3",null,"Messages")],-1),Ze={id:"mobile-conversations-list",class:"animated preFadeInUp fadeInUp"},Ge=["onKeydown","onClick"],sa={class:"recent-user"},ea={class:"user-container"},aa=["src"],na={class:"recipient-meta"},ia=p(i({__name:"MessagesMobileSubsidebar",props:{conversations:{default:()=>[]},selectedConversationId:{default:0}},emits:["selectConversation"],setup(s,{emit:e}){const a=e,n=s,{onceError:i}=U();return(s,e)=>(t(),o("div",Re,[m("div",Qe,[Ye,m("ul",Ze,[(t(!0),o(y,null,O(n.conversations,(s=>(t(),o("li",{key:s.id,role:"button",class:r([n.selectedConversationId===s.id&&"is-active"]),tabindex:"0",onKeydown:d(u((()=>a("selectConversation",s.id)),["prevent"]),["enter"]),onClick:()=>a("selectConversation",s.id)},[m("div",sa,[m("div",ea,[m("img",{class:"is-user",src:s.avatar,alt:"",onErrorOnce:e[0]||(e[0]=s=>c(i)(s,150))},null,40,aa)]),m("div",na,[m("span",null,C(s.name),1),m("span",null,C(s.lastMessage),1)])])],42,Ge)))),128))])])]))}}),[["__file","MessagesMobileSubsidebar.vue"]]),ta={class:"sidebar-panel is-messages"},oa={class:"messages-header"},la=m("h3",{class:"no-mb"}," Chat ",-1),ra={class:"menu-toggle has-chevron"},ca=[m("span",{class:"rotate"},[m("i",{"aria-hidden":"true",class:"icon-line-top"}),m("i",{"aria-hidden":"true",class:"icon-line-center"}),m("i",{"aria-hidden":"true",class:"icon-line-bottom"})],-1)],da={class:"inner"},ua={class:"is-new-conversation"},pa=m("span",null,"New Conversation",-1),ma={id:"conversations-list",class:"animated preFadeInUp fadeInUp"},va=["onKeydown","onClick"],ga={class:"recent-user"},ha={class:"user-container"},fa=["src"],ba={class:"recipient-meta"},Ca=p(i({__name:"MessagesSubsidebar",props:{conversations:{default:()=>[]},selectedConversationId:{default:0}},emits:["addConversation","selectConversation"],setup(e,{emit:n}){const i=n,p=e,{onceError:v}=U(),{messageSubsidebarOpen:g}=w("chat-page",{messageSubsidebarOpen:a(!1)});return(e,a)=>{const n=s;return t(),o("div",ta,[m("div",oa,[la,m("div",{class:"vuero-hamburger nav-trigger push-resize messages-push",tabindex:"0",role:"button",onKeydown:a[0]||(a[0]=d(u((s=>g.value=!c(g)),["prevent"]),["enter"])),onClick:a[1]||(a[1]=s=>g.value=!c(g))},[m("span",ra,[m("span",{class:r([[c(g)&&"active"],"icon-box-toggle"])},ca,2)])],32)]),m("div",da,[m("div",ua,[m("button",{id:"start-conversation",class:"button v-button is-primary is-raised is-rounded is-fullwidth",onClick:a[2]||(a[2]=()=>i("addConversation"))},[l(n,{icon:"lucide:plus"}),pa])]),m("ul",ma,[(t(!0),o(y,null,O(p.conversations,(s=>(t(),o("li",{key:s.id,class:r([p.selectedConversationId===s.id&&"is-active"]),tabindex:"0",role:"button",onKeydown:d(u((()=>i("selectConversation",s.id)),["prevent"]),["enter"]),onClick:()=>i("selectConversation",s.id)},[m("div",ga,[m("div",ha,[m("img",{class:"is-user",src:s.avatar,alt:"",onErrorOnce:a[3]||(a[3]=s=>c(v)(s,150))},null,40,fa)]),m("div",ba,[m("span",null,C(s.name),1),m("span",null,C(s.lastMessage),1)])])],42,va)))),128))])])])}}}),[["__file","MessagesSubsidebar.vue"]]),ja=m("span",null,null,-1),_a={class:"page-title has-text-centered is-hidden"},ya={class:"menu-toggle has-chevron"},ka=[m("span",{class:"rotate"},[m("i",{"aria-hidden":"true",class:"icon-line-top"}),m("i",{"aria-hidden":"true",class:"icon-line-center"}),m("i",{"aria-hidden":"true",class:"icon-line-bottom"})],-1)],wa=m("h1",{class:"title is-5"}," Messages ",-1),Oa={class:"control"},xa=m("div",{class:"easy-autocomplete"},[m("input",{id:"users-autocpl",type:"text",class:"input","aria-label":"To",placeholder:"Start typing a name"})],-1),Ma=m("div",{class:"icon"},[m("span",null,"To:")],-1),Ea={key:0,class:"no-messages"},Sa=[m("img",{class:"light-image",src:P,alt:""},null,-1),m("img",{class:"dark-image",src:q,alt:""},null,-1),m("div",{class:"text"},[m("h3",null,"No messages yet"),m("p",null,"Start the conversation by typing a message")],-1)],Ia=[m("div",{class:"loader is-loading"},null,-1)],Ka=p(i({__name:"messaging-v1",setup(e){const n=L(),i=a(!1);x("chat-page",{messageSubsidebarOpen:i});const p=M();function v(){n.unselectConversation(),n.setAddConversationOpen(!n.addConversationOpen)}function h(s){n.setAddConversationOpen(!1),n.selectConversastion(s)}return E((async()=>{try{await n.loadConversations();const s=n.conversations.find((s=>!s.unreadMessages));s?n.selectConversastion(s.id):n.selectConversastion(n.conversations[0].id)}catch(s){p.error(s.message),console.error(s)}})),S({title:"Messaging chat - Sidebar - Vuero"}),(e,a)=>{const p=Ca,f=ia,b=Je,C=s,_=ze,w=re,x=xs,M=Z,E=F,S=A,K=D,T=J;return t(),k(B,{class:r([c(i)&&"is-pushed-messages"]),size:"full"},{"page-heading":g((()=>[ja])),default:g((({isMobileSidebarOpen:s})=>[l(I,{name:"slide-x"},{default:g((()=>[c(i)?(t(),k(p,{key:0,conversations:c(n).conversations,"selected-conversation-id":c(n).selectedConversationId,onAddConversation:v,onSelectConversation:h},null,8,["conversations","selected-conversation-id"])):j("",!0)])),_:1}),l(I,{name:"slide-x"},{default:g((()=>[s?(t(),k(f,{key:0,conversations:c(n).conversations,"selected-conversation-id":c(n).selectedConversationId,onSelectConversation:h},null,8,["conversations","selected-conversation-id"])):j("",!0)])),_:2},1024),l(b,{conversations:c(n).conversations,"selected-conversation-id":c(n).selectedConversationId,onAddConversation:v,onSelectConversation:a[0]||(a[0]=s=>{c(n).setAddConversationOpen(!1),c(n).selectConversastion(s)})},null,8,["conversations","selected-conversation-id"]),l(K,{id:"vuero-messaging"},{default:g((()=>[l(S,null,{default:g((()=>[l(E,{class:"chat-content"},{default:g((()=>[m("div",_a,[m("div",{class:"vuero-hamburger nav-trigger push-resize",tabindex:"0",role:"button",onKeydown:a[1]||(a[1]=d(u((s=>i.value=!c(i)),["prevent"]),["enter"])),onClick:a[2]||(a[2]=s=>i.value=!c(i))},[m("span",ya,[m("span",{class:r([[c(i)&&"active"],"icon-box-toggle"])},ka,2)])],32),wa]),l(x,null,{header:g((()=>[m("div",{class:r([[!c(n).addConversationOpen&&"is-hidden"],"is-autocomplete"])},[m("div",Oa,[xa,Ma,m("div",{class:"hide",tabindex:"0",role:"button",onKeydown:a[3]||(a[3]=d(u((s=>c(n).setAddConversationOpen(!1)),["prevent"]),["enter"])),onClick:a[4]||(a[4]=s=>c(n).setAddConversationOpen(!1))},[l(C,{icon:"lucide:x"})],32)])],2)])),body:g((()=>[0===c(n).messages.length?(t(),o("li",Ea,Sa)):j("",!0),(t(!0),o(y,null,O(c(n).messages,(s=>(t(),k(_,{key:s.id,message:s},null,8,["message"])))),128)),m("li",{class:r(["chat-loader",[c(n).loading&&"is-active"]])},Ia,2)])),side:g((()=>[l(w)])),_:1}),l(M)])),_:1})])),_:1})])),_:1}),l(T)])),_:1},8,["class"])}}}),[["__file","messaging-v1.vue"]]);export{Ka as default};