import{_ as s}from"./Des8qgZF.js";import{_ as a}from"./DA7DbPFB.js";import{_ as e}from"./DYntIdmm.js";import{_ as l}from"./9drODTCA.js";import{_ as i}from"./BbyIlV3K.js";import{_ as t}from"./BdjI-zdd.js";import{_ as n}from"./BQiUk_jr.js";import{_ as o}from"./DPBYIlso.js";import{_ as u}from"./CrSly68g.js";import{_ as r}from"./Dd7g9pyW.js";import{_ as c}from"./mPfxn-m0.js";import{e as d,U as p,W as v,a as m,_ as f,z as g,g as h,j as b,v as _,k as w,l as y,x as j,H as x,D as k,s as C,I as z,F as A,C as P,$ as S,a2 as E}from"../../index-BBZ1hd8o.js";import{u as U}from"./BIYKeq7p.js";import{s as D}from"./MiAo3PcT.js";import"./i1kYR7QW.js";import"./UwApheaH.js";import"./iUM7Auia.js";import"./dSHPAv9a.js";import"./D5UZqAJ_.js";/* empty css        */const K={class:"signup-nav"},L={class:"signup-nav-inner"},O={class:"signup-wrapper"},B={class:"steps-container"},F={class:"inner"},N=_("span",{class:"step-label"},"Profile Pic",-1),R={class:"inner"},V=_("span",{class:"step-label"},"Account",-1),I={class:"inner"},T=_("span",{class:"step-label"},"Done",-1),W=["value"],Y={class:"hero is-fullheight"},q={class:"hero-body"},G={class:"container"},H={class:"column is-4 is-offset-1"},$=_("h1",{class:"title is-3 signup-title"}," Become a Vuero ",-1),J=_("h2",{class:"subtitle signup-subtitle"}," And simply join an unmatched design experience. ",-1),M={class:"signup-card"},Q={class:"columns is-multiline"},X={class:"column is-6"},Z={class:"column is-6"},ss={class:"column is-12"},as=S('<div class="column is-12"><div class="signup-type"><div class="box-wrap"><input type="radio" name="signup_type" checked><div class="signup-box"><i aria-hidden="true" class="lnil lnil-coffee-cup"></i><div class="meta"><span>Free</span><span>Nice to get started</span></div></div></div><div class="box-wrap"><input type="radio" name="signup_type"><div class="signup-box"><i aria-hidden="true" class="lnil lnil-crown-alt-1"></i><div class="meta"><span>Paid</span><span>Get a lot more features</span></div></div></div></div></div>',1),es=_("div",{class:"control is-agree"},[_("span",null,[C(" By continuing you agree to our "),_("a",{href:"#"},"Terms"),C(" and "),_("a",{href:"#"},"Privacy")])],-1),ls={class:"button-wrap has-help"},is={class:"signup-profile-wrapper"},ts=_("h1",{class:"title is-5 signup-title has-text-centered"}," Add a profile picture ",-1),ns=_("h2",{class:"subtitle signup-subtitle has-text-centered"}," This is your visual identity. ",-1),os={class:"picture-selector"},us={class:"image-container"},rs=["src"],cs=_("div",{class:"divider-container"},[_("div",{class:"divider"},[_("span",null,"Or select an avatar")])],-1),ds={class:"avatar-carousel avatar-selector"},ps=["onClick","onKeydown"],vs={class:"image-wrapper"},ms=["src"],fs={class:"button-wrap is-centered has-text-centered"},gs={class:"column is-4 is-offset-4 username-form"},hs=_("h1",{class:"title is-5 signup-title has-text-centered"}," Pick a username ",-1),bs=_("h2",{class:"subtitle signup-subtitle has-text-centered"}," Your username is how others will find you on Vuero so pick a good one. You can change it later. ",-1),_s={class:"columns is-multiline"},ws={class:"column is-12"},ys={class:"column is-12"},js={class:"column is-12"},xs={class:"column is-12"},ks={class:"button-wrap is-centered has-text-centered"},Cs={class:"signup-footer"},zs={class:"container"},As={class:"footer-inner"},Ps={class:"has-text-centered"},Ss={class:"upload-demo-wrap"},Es={class:"file"},Us={class:"file-label"},Ds=_("span",{class:"file-cta"},[_("span",{class:"file-icon"},[_("i",{"aria-hidden":"true",class:"fas fa-cloud-upload-alt"})]),_("span",null," Choose a file… ")],-1),Ks=_("wbr",null,null,-1),Ls=E(d({__name:"signup-1",setup(d){const{onceError:S}=U(),E=p(),Ls=v(),Os=m(0),Bs=m(!1),Fs=m(),Ns=m(),Rs=m(!1),Vs=["/images/avatars/svg/vuero-1.svg","/images/avatars/svg/vuero-2.svg","/images/avatars/svg/vuero-3.svg","/images/avatars/svg/vuero-4.svg"],Is=async()=>{Bs.value||(Os.value++,Bs.value=!0,D(2e3),Ls.dismissAll(),Ls.primary("Welcome, Erik Kovalsky"),E.push("/sidebar/dashboards"),Bs.value=!1)},Ts=m("/images/avatars/svg/vuero-1.svg");function Ws(s){Fs.value=s.target?.files?.[0],Ns.value=URL.createObjectURL(Fs.value)}return f({title:"Auth Signup 1 - Vuero"}),(d,p)=>{const v=c,m=g("RouterLink"),f=r,E=u,U=o,D=n,Ls=t,Ys=i,qs=l,Gs=e,Hs=a,$s=s;return h(),b("div",null,[_("div",K,[_("div",L,[w(m,{to:"/",class:"logo"},{default:y((()=>[w(v,{width:"36px",height:"36px"})])),_:1})])]),_("div",O,[_("div",{class:j(["signup-steps",[0===x(Os)&&"is-hidden"]])},[_("div",B,[_("div",{class:j(["step-icon is-active",[x(Os)>=1&&"is-active",x(Os)<1&&"is-inactive"]])},[_("div",F,[w(f,{icon:"lucide:user"})]),N],2),_("div",{class:j(["step-icon",[x(Os)>=2&&"is-active",x(Os)<2&&"is-inactive"]])},[_("div",R,[w(f,{icon:"lucide:shield"})]),V],2),_("div",{class:j(["step-icon",[x(Os)>=3&&"is-active",x(Os)<3&&"is-inactive"]])},[_("div",I,[w(f,{icon:"lucide:check"})]),T],2),_("progress",{class:"progress",value:x(Os)-1,max:2}," 25% ",8,W)])],2),_("img",{class:j([[x(Os)>0&&"is-hidden"],"card-bg"]),src:"/images/backgrounds/signup/vuero-signup.webp",alt:""},null,2),_("div",Y,[_("div",q,[_("div",G,[_("div",{class:j(["columns signup-columns",[0!==x(Os)&&"is-hidden"]])},[_("div",H,[$,J,_("div",M,[_("form",{method:"post",novalidate:"",class:"signup-form is-mobile-spaced",onSubmit:p[1]||(p[1]=k((()=>{}),["prevent"]))},[_("div",Q,[_("div",X,[w(Ls,null,{default:y((()=>[w(D,null,{default:y((()=>[w(E,{type:"text",autocomplete:"given-name"}),w(U,{raw:"",class:"auth-label"},{default:y((()=>[C(" First Name ")])),_:1})])),_:1})])),_:1})]),_("div",Z,[w(Ls,null,{default:y((()=>[w(D,null,{default:y((()=>[w(E,{type:"text",autocomplete:"family-name"}),w(U,{raw:"",class:"auth-label"},{default:y((()=>[C(" Last Name ")])),_:1})])),_:1})])),_:1})]),_("div",ss,[w(Ls,null,{default:y((()=>[w(D,null,{default:y((()=>[w(E,{type:"text",autocomplete:"email"}),w(U,{raw:"",class:"auth-label"},{default:y((()=>[C(" Email Address ")])),_:1})])),_:1})])),_:1})]),as]),es,_("div",ls,[w(Ys,{color:"primary",size:"big",bold:"",fullwidth:"",rounded:"",onClick:p[0]||(p[0]=s=>Os.value++)},{default:y((()=>[C(" Continue ")])),_:1}),_("span",null,[C(" Or "),w(m,{to:"/auth/login"},{default:y((()=>[C(" Sign In ")])),_:1}),C(" to your account. ")])])],32)])])],2),_("div",{class:j(["columns signup-columns",[1!==x(Os)&&"is-hidden"]])},[_("form",{method:"post",novalidate:"",class:"column is-8",onSubmit:p[6]||(p[6]=k((()=>{}),["prevent"]))},[_("div",is,[ts,ns,_("div",os,[_("div",us,[_("img",{src:x(Ts),alt:""},null,8,rs),_("div",{class:"upload-button",role:"button",tabindex:"0",onKeydown:p[2]||(p[2]=z(k((s=>Rs.value=!0),["prevent"]),["enter"])),onClick:p[3]||(p[3]=s=>Rs.value=!0)},[w(f,{icon:"lucide:plus"})],32)])])]),cs,_("div",ds,[(h(),b(A,null,P(Vs,((s,a)=>_("div",{key:a,class:j(["carousel-item",x(Ts)===s?"active":""]),role:"button",tabindex:"0",onClick:a=>Ts.value=s,onKeydown:z(k((a=>Ts.value=s),["prevent"]),["enter"])},[_("div",vs,[_("img",{src:s,alt:"",onErrorOnce:p[4]||(p[4]=s=>x(S)(s,150))},null,40,ms)])],42,ps))),64))]),_("div",fs,[w(Ys,{color:"primary",size:"big",rounded:"",lower:"",onClick:p[5]||(p[5]=s=>Os.value++)},{default:y((()=>[C(" Continue ")])),_:1})])],32)],2),_("div",{class:j(["columns signup-columns",[2!==x(Os)&&"is-hidden"]])},[_("div",gs,[hs,bs,_("form",{method:"post",novalidate:"",class:"signup-form",onSubmit:k(Is,["prevent"])},[_("div",_s,[_("div",ws,[w(Ls,null,{default:y((()=>[w(D,null,{default:y((()=>[w(E,{type:"text",autocomplete:"username"}),w(U,{raw:"",class:"auth-label"},{default:y((()=>[C(" Username ")])),_:1})])),_:1})])),_:1})]),_("div",ys,[w(Ls,null,{default:y((()=>[w(D,null,{default:y((()=>[w(E,{type:"password",autocomplete:"new-password"}),w(U,{raw:"",class:"auth-label"},{default:y((()=>[C(" Password ")])),_:1})])),_:1})])),_:1})]),_("div",js,[w(Ls,null,{default:y((()=>[w(D,null,{default:y((()=>[w(E,{type:"password",autocomplete:"new-password"}),w(U,{raw:"",class:"auth-label"},{default:y((()=>[C(" Confirm Password ")])),_:1})])),_:1})])),_:1})]),_("div",xs,[w(Ls,null,{default:y((()=>[w(D,{class:"has-switch"},{default:y((()=>[w(U,null,{default:y((()=>[C("Send me marketing and transaction emails")])),_:1}),w(qs,{color:"success",checked:""})])),_:1})])),_:1})])]),_("div",ks,[w(Ys,{size:"big",color:"primary",type:"submit",rounded:"",primary:"",lower:"",loading:x(Bs)},{default:y((()=>[C(" Done ")])),_:1},8,["loading"])])],32)])],2)])])])]),_("div",Cs,[_("div",zs,[_("div",As,[w(Gs)])])]),w($s,{is:"form",open:x(Rs),title:"Upload and crop your picture",actions:"center",size:"small",onClose:p[7]||(p[7]=s=>Rs.value=!1),onSubmit:p[8]||(p[8]=k((()=>{x(Ns)&&(Rs.value=!1,Ts.value=x(Ns))}),["prevent"]))},{content:y((()=>[_("div",Ps,[_("div",Ss,[w(Hs,{size:"big",picture:x(Ns)},null,8,["picture"])]),w(Ls,null,{default:y((()=>[w(D,null,{default:y((()=>[_("div",Es,[_("label",Us,[_("input",{class:"file-input",type:"file",name:"resume",accept:"image/*",onChange:Ws},null,32),Ds])])])),_:1})])),_:1})])])),cancel:y((()=>[Ks])),action:y((()=>[w(Ls,{horizontal:""},{default:y((()=>[w(D,null,{default:y((()=>[w(Ys,{type:"submit",class:"upload-result",size:"medium",outlined:"",disabled:!x(Fs)},{default:y((()=>[C(" Confirm ")])),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1},8,["open"])])}}}),[["__file","signup-1.vue"]]);export{Ls as default};