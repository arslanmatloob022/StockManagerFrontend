import{_ as s}from"./DA7DbPFB.js";import{_ as i}from"./D_6YW2Kp.js";import{_ as t}from"./DAlm21qq.js";import{_ as e}from"./6YDf046U.js";import{_ as l}from"./Bu_sRzHy.js";import{_ as o}from"./Dd7g9pyW.js";import{_ as a}from"./BbyIlV3K.js";import{j as c,_ as n}from"./Cz35PXlV.js";import{aG as r,a9 as d,e as u,z as p,g as h,j as v,v as m,k as g,H as f,l as b,s as w,a2 as _}from"../../index-BBZ1hd8o.js";const j=[{id:5,picture:"https://media.cssninja.io/content/avatars/5.jpg",initials:"ML",color:"info"},{id:18,picture:"https://media.cssninja.io/content/avatars/18.jpg",initials:"EC",color:"warning"},{id:26,initials:"CW",color:"h-purple"},{id:100,picture:void 0,initials:"SC",color:"success"},{id:101,picture:void 0,initials:"SC",color:"success"},{id:101,picture:void 0,initials:"SC",color:"success"},{id:102,picture:void 0,initials:"SC",color:"success"},{id:103,picture:void 0,initials:"SC",color:"success"},{id:104,picture:void 0,initials:"SC",color:"success"},{id:105,picture:void 0,initials:"SC",color:"success"},{id:106,picture:void 0,initials:"SC",color:"success"},{id:107,picture:void 0,initials:"SC",color:"success"},{id:108,picture:void 0,initials:"SC",color:"success"},{id:109,picture:void 0,initials:"SC",color:"success"},{id:110,picture:void 0,initials:"SC",color:"success"},{id:111,picture:void 0,initials:"SC",color:"success"},{id:112,picture:void 0,initials:"SC",color:"success"},{id:113,picture:void 0,initials:"SC",color:"success"},{id:114,picture:void 0,initials:"SC",color:"success"},{id:115,picture:void 0,initials:"SC",color:"success"}],S={class:"personal-dashboard personal-dashboard-v3"},C={class:"columns"},y={class:"column is-8"},T={class:"columns is-multiline is-flex-tablet-p"},k={class:"column is-6"},x={class:"dashboard-card is-welcome"},Z=m("div",{class:"welcome-title"},[m("h3",{class:"dark-inverted"}," Hi Erik K. "),m("p",null," You have 6 interviews to conduct during this week. Your current progress is great. ")],-1),G={class:"welcome-progress"},O=m("div",{class:"meta"},[m("span",null,"Your Progress"),m("span",{class:"dark-inverted"},[w("Outstanding "),m("span",{role:"img","aria-label":"Party Popper"},"🎉")])],-1),M={class:"button-wrap"},P={class:"column is-6"},R={class:"stats-wrapper"},H={class:"columns is-multiline is-flex-tablet-p"},I={class:"column is-6"},K={class:"dashboard-card"},z={class:"column is-6"},J={class:"dashboard-card"},V={class:"column is-6"},Y={class:"dashboard-card"},A={class:"column is-6"},D={class:"dashboard-card"},E={class:"people"},L=m("div",{class:"left"},[m("span",{class:"dark-inverted"},"Total Interviews"),m("span",null,[m("a",{class:"is-dark-primary"},"23 interviews"),w(" this month")])],-1),W={class:"right"},B=m("div",{class:"column is-6 h-hidden-mobile h-hidden-tablet-p"},[m("img",{src:"/images/illustrations/dashboards/personal/interviews.svg",alt:""})],-1),F={class:"column is-6"},q={class:"dashboard-card"},N={class:"column is-4"},Q={class:"widget-toolbar"},U={class:"left"},X={class:"action-icon"},$=m("div",{class:"center"},[m("h3",null,"October 2020")],-1),ss={class:"right"},is={class:"action-icon"},ts=m("table",{class:"calendar"},[m("thead",null,[m("tr",null,[m("th",{scope:"col"}," Mon "),m("th",{scope:"col"}," Tue "),m("th",{scope:"col"}," Wed "),m("th",{scope:"col"}," Thu "),m("th",{scope:"col"}," Fri "),m("th",{scope:"col"}," Sat "),m("th",{scope:"col"}," Sun ")])]),m("tbody",null,[m("tr",null,[m("td",{class:"prev-month"}," 29 "),m("td",{class:"prev-month"}," 30 "),m("td",{class:"prev-month"}," 31 "),m("td",null,"1"),m("td",null,"2"),m("td",null,"3"),m("td",null,"4")]),m("tr",null,[m("td",null,"5"),m("td",null,"6"),m("td",null,"7"),m("td",null,"8"),m("td",null,"9"),m("td",null,"10"),m("td",null,"11")]),m("tr",null,[m("td",null,"12"),m("td",null,"13"),m("td",null,"14"),m("td",null,"15"),m("td",null,"16"),m("td",null,"17"),m("td",{class:"current-day"}," 18 ")]),m("tr",null,[m("td",null,"19"),m("td",null,"20"),m("td",null,"21"),m("td",null,"22"),m("td",null,"23"),m("td",null,"24"),m("td",null,"25")]),m("tr",null,[m("td",null,"26"),m("td",null,"27"),m("td",null,"28"),m("td",null,"29"),m("td",null,"30"),m("td",null,"31"),m("td",{class:"next-month"}," 1 ")])])],-1),es={href:"#",class:"dashboard-card is-interview"},ls={href:"#",class:"dashboard-card is-interview"},os={href:"#",class:"dashboard-card is-interview"},as=_(u({__name:"PersonalDashboardV3",setup(u){const{progressGaugeOptions:_,onprogressGaugeReady:as}=function(){const s=r();return{progressGaugeOptions:d({data:{columns:[["data",91.4]],type:c()},gauge:{label:{extents:()=>""}},color:{pattern:[s.purple,s.info,s.orange,s.lime],threshold:{values:[30,60,90,100]}},size:{height:90,width:90},padding:{bottom:0},legend:{show:!1,position:"inset"}}),onprogressGaugeReady:s=>{setTimeout((function(){s.load({columns:[["data",10]]})}),1e3),setTimeout((function(){s.load({columns:[["data",50]]})}),2e3),setTimeout((function(){s.load({columns:[["data",70]]})}),3e3),setTimeout((function(){s.load({columns:[["data",0]]})}),4e3),setTimeout((function(){s.load({columns:[["data",100]]})}),5e3)}}}(),{interviewsOptions:cs}=function(){const s=r();return{interviewsOptions:d({series:[{name:"Interviews",data:[31,40,28,51,42,109,100]}],chart:{height:200,type:"area",toolbar:{show:!1}},colors:[s.purple,s.info,s.orange],title:{text:"Interviews",align:"left"},legend:{position:"top"},dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},xaxis:{type:"datetime",categories:["2020-09-19T00:00:00.000Z","2020-09-20T01:30:00.000Z","2020-09-21T02:30:00.000Z","2020-09-22T03:30:00.000Z","2020-09-23T04:30:00.000Z","2020-09-24T05:30:00.000Z","2020-09-25T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}})}}(),ns=j;return(c,r)=>{const d=n,u=a,j=o,rs=l,ds=e,us=t,ps=p("ApexChart"),hs=i,vs=s;return h(),v("div",S,[m("div",C,[m("div",y,[m("div",T,[m("div",k,[m("div",x,[Z,m("div",G,[g(d,{options:f(_),onReady:f(as)},null,8,["options","onReady"]),O]),m("div",M,[g(u,{color:"primary",size:"big",fullwidth:"",raised:""},{default:b((()=>[w(" View Schedule ")])),_:1})])])]),m("div",P,[m("div",R,[m("div",H,[m("div",I,[m("div",K,[g(ds,{title:"62K",subtitle:"Minutes",center:""},{icon:b((()=>[g(rs,{color:"info",rounded:""},{default:b((()=>[g(j,{icon:"lucide:clock"})])),_:1})])),_:1})])]),m("div",z,[m("div",J,[g(ds,{title:"263",subtitle:"Interviews",center:""},{icon:b((()=>[g(rs,{color:"purple",rounded:""},{default:b((()=>[g(j,{icon:"lucide:radio"})])),_:1})])),_:1})])]),m("div",V,[m("div",Y,[g(ds,{title:"49",subtitle:"Approved",center:""},{icon:b((()=>[g(rs,{color:"green",rounded:""},{default:b((()=>[g(j,{icon:"lucide:user-check"})])),_:1})])),_:1})])]),m("div",A,[m("div",D,[g(ds,{title:"214",subtitle:"Rejected",center:""},{icon:b((()=>[g(rs,{color:"orange",rounded:""},{default:b((()=>[g(j,{icon:"lucide:frown"})])),_:1})])),_:1})])])]),m("div",E,[L,m("div",W,[g(us,{avatars:f(ns),limit:3},null,8,["avatars"])])])])]),B,m("div",F,[m("div",q,[g(ps,{id:"interviews-chart",height:f(cs).chart.height,type:f(cs).chart.type,series:f(cs).series,options:f(cs)},null,8,["height","type","series","options"])])])])]),m("div",N,[g(hs,{class:"picker-widget"},{header:b((()=>[m("div",Q,[m("div",U,[m("a",X,[g(j,{class:"ltr-hidden",icon:"lucide:chevron-right"}),g(j,{class:"rtl-hidden",icon:"lucide:chevron-left"})])]),$,m("div",ss,[m("a",is,[g(j,{class:"rtl-hidden",icon:"lucide:chevron-right"}),g(j,{class:"ltr-hidden",icon:"lucide:chevron-left"})])])])])),body:b((()=>[ts])),_:1}),m("a",es,[g(ds,{title:"Jonathan K.",subtitle:"08:00 - 09:00",center:""},{icon:b((()=>[g(vs,{picture:"https://media.cssninja.io/content/avatars/32.jpg"})])),action:b((()=>[g(j,{class:"rtl-hidden",icon:"lucide:chevron-right"}),g(j,{class:"ltr-hidden",icon:"lucide:chevron-left"})])),_:1})]),m("a",ls,[g(ds,{title:"Greta K.",subtitle:"10:30 - 11:00",center:""},{icon:b((()=>[g(vs,{picture:"https://media.cssninja.io/content/avatars/19.jpg"})])),action:b((()=>[g(j,{class:"rtl-hidden",icon:"lucide:chevron-right"}),g(j,{class:"ltr-hidden",icon:"lucide:chevron-left"})])),_:1})]),m("a",os,[g(ds,{title:"Joshua S.",subtitle:"02:30 - 03:00",center:""},{icon:b((()=>[g(vs,{picture:"https://media.cssninja.io/content/avatars/12.jpg"})])),action:b((()=>[g(j,{class:"rtl-hidden",icon:"lucide:chevron-right"}),g(j,{class:"ltr-hidden",icon:"lucide:chevron-left"})])),_:1})])])])])}}}),[["__file","PersonalDashboardV3.vue"]]);export{as as _};