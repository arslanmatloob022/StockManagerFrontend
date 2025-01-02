import{_ as a}from"./DWYP9wPM.js";import{_ as s}from"./BfnqunPQ.js";import{_ as e}from"./Bx6q4Kdm.js";import{_ as t}from"./B0W5jPJA.js";import{e as i,a as n,o,b as r,g as c,j as l,k as d,v as p,u,x as m,H as g,I as v,D as h,a2 as j,c as b,l as f,J as k,ag as w,K as y,F as T,C,aK as A,y as B}from"../../index-BnGzoMia.js";import{_ as E}from"./Di-XzD_V.js";import{_ as D}from"./-F1h96tR.js";import{_ as S}from"./B1nunnCQ.js";import{_ as M,a as N}from"./Zt6AvegN.js";const F={class:"grid-item"},J={class:"dark-inverted"},_={class:"icon-tabs-wrapper"},H={class:"icon-tabs"},W={class:"icon-tabs-inner"},I=p("div",{class:"icon-tabs-naver"},null,-1),x={class:"chart-block"},L={class:"stats"},P={class:"dark-inverted"},G=p("span",null,"Viewers",-1),K={class:"chart-block"},V={class:"circle-chart-wrapper is-info"},z={class:"stats"},U={class:"dark-inverted"},R=p("span",null,"Projects",-1),Y={class:"chart-block"},X={class:"circle-chart-wrapper is-warning"},q={class:"stats"},O={class:"dark-inverted"},Q=p("span",null,"Tasks",-1),Z={class:"buttons"},$={class:"button v-button is-dark-outlined"},aa={class:"icon"},sa=p("span",null,"Hire",-1),ea={class:"button v-button is-dark-outlined"},ta={class:"icon"},ia=p("span",null,"Talk",-1),na=j(i({__name:"TabbedGridItem",props:{activeTab:{default:"posts"},user:{default:()=>({})}},setup(i){const j=n(i.activeTab),b=()=>Math.round(10*Math.random()),f=n([]);let k;for(let a=0;a<20;a++)f.value.push(b());return o((()=>{k=setInterval((()=>{f.value.shift(),f.value.push(b())}),1e3)})),r((()=>{clearInterval(k)})),(i,n)=>{const o=t,r=e,b=s,k=a;return c(),l("div",F,[d(o,{picture:i.user.avatar,badge:i.user.badge,size:"big"},null,8,["picture","badge"]),p("h3",J,u(i.user.fullName),1),p("p",null,u(i.user.position),1),p("div",_,[p("div",H,[p("div",W,[p("a",{"data-target-section":"subsection-1",class:m(["tab-item",["posts"===g(j)&&"is-active"]]),role:"button",tabindex:"0",onKeydown:n[0]||(n[0]=v(h((a=>j.value="posts"),["prevent"]),["enter"])),onClick:n[1]||(n[1]=a=>j.value="posts")},[d(r,{icon:"lucide:activity"})],34),p("a",{"data-target-section":"subsection-2",class:m(["tab-item",["projects"===g(j)&&"is-active"]]),role:"button",tabindex:"0",onKeydown:n[2]||(n[2]=v(h((a=>j.value="projects"),["prevent"]),["enter"])),onClick:n[3]||(n[3]=a=>j.value="projects")},[d(r,{icon:"lucide:briefcase"})],34),p("a",{"data-target-section":"subsection-3",class:m(["tab-item",["tasks"===g(j)&&"is-active"]]),role:"button",tabindex:"0",onKeydown:n[4]||(n[4]=v(h((a=>j.value="tasks"),["prevent"]),["enter"])),onClick:n[5]||(n[5]=a=>j.value="tasks")},[d(r,{icon:"lucide:check-circle"})],34),I])]),p("div",{class:m(["icon-tabs-content subsection-1",["posts"===g(j)&&"is-active"]])},[p("div",x,[d(b,{type:"line",height:45,width:100,"stroke-width":1.6,stroke:"var(--primary)",values:g(f)},null,8,["values"]),p("div",L,[p("span",P,u(g(f)[g(f).length-1]),1),G])])],2),p("div",{class:m(["icon-tabs-content subsection-2",["projects"===g(j)&&"is-active"]])},[p("div",K,[p("div",V,[d(k,{value:i.user.projects.progress,size:54},null,8,["value"])]),p("div",z,[p("span",U,u(i.user.projects.count),1),R])])],2),p("div",{class:m(["icon-tabs-content subsection-3",["tasks"===g(j)&&"is-active"]])},[p("div",Y,[p("div",X,[d(k,{value:i.user.tasks.progress,size:54},null,8,["value"])]),p("div",q,[p("span",O,u(i.user.tasks.count),1),Q])])],2)]),p("div",Z,[p("button",$,[p("span",aa,[d(r,{icon:"lucide:check"})]),sa]),p("button",ea,[p("span",ta,[d(r,{icon:"lucide:message-circle"})]),ia])])])}}}),[["__file","TabbedGridItem.vue"]]),oa=[{id:13,avatar:"https://media.cssninja.io/content/avatars/13.jpg",badge:"/images/icons/stacks/illustrator.svg",username:"Tara S.",fullName:"Tara Svenson",initials:"TS",color:"danger",location:"New York, NY",position:"UI/UX Designer",bio:"This is a nice user description that we can use as demo content.",posts:{count:72,progress:85},projects:{count:12,progress:42},tasks:{count:17,progress:56},team:[{id:148,avatar:void 0,name:"Betty T.",initials:"BT",color:"h-yellow"},{id:18,avatar:"https://media.cssninja.io/content/avatars/18.jpg",name:"Esteban C.",initials:"EC",color:"h-purple"},{id:159,avatar:void 0,name:"John D.",initials:"JD",color:"info"},{id:7,avatar:"https://media.cssninja.io/content/avatars/7.jpg",name:"Alice C.",initials:"AC",color:"success"}]},{id:37,avatar:"https://media.cssninja.io/content/avatars/37.jpg",badge:"/images/icons/flags/france.svg",username:"Helmut F.",fullName:"Helmut Fritz",initials:"HF",color:"h-purple",location:"Paris, France",position:"Product Manager",bio:"This is a nice user description that we can use as demo content.",posts:{count:16,progress:45},projects:{count:8,progress:24},tasks:{count:9,progress:72},team:[{id:21,avatar:"https://media.cssninja.io/content/avatars/21.jpg",name:"Elizabet F.",initials:"EF",color:"warning"},{id:189,avatar:void 0,name:"Alan T.",initials:"AT",color:"success"},{id:39,avatar:"https://media.cssninja.io/content/avatars/39.jpg",name:"Alejandro B.",initials:"AB",color:"danger"}]},{id:25,avatar:"https://media.cssninja.io/content/avatars/25.jpg",badge:"/images/icons/stacks/js.svg",username:"Melany W.",fullName:"Melany Wallace",initials:"MW",color:"success",location:"San Diego, CA",position:"Web Developer",bio:"This is a nice user description that we can use as demo content.",posts:{count:22,progress:31},projects:{count:11,progress:54},tasks:{count:15,progress:48},team:[{id:21,avatar:"https://media.cssninja.io/content/avatars/21.jpg",name:"Elizabet F.",initials:"EF",color:"warning"},{id:198,avatar:void 0,name:"Sarah C.",initials:"SC",color:"h-purple"},{id:39,avatar:"https://media.cssninja.io/content/avatars/39.jpg",name:"Alejandro B.",initials:"AB",color:"danger"}]},{id:29,avatar:"https://media.cssninja.io/content/avatars/29.jpg",badge:"/images/icons/stacks/python.svg",username:"Hakeem C.",fullName:"Hakeem Calami",initials:"HC",color:"info",location:"Berlin, Germany",position:"Software Engineer",bio:"This is a nice user description that we can use as demo content.",posts:{count:4,progress:59},projects:{count:5,progress:38},tasks:{count:6,progress:21},team:[{id:28,avatar:"https://media.cssninja.io/content/avatars/28.jpg",name:"Edouard F.",initials:"EF",color:"info"},{id:33,avatar:"https://media.cssninja.io/content/avatars/33.jpg",name:"Harvey M.",initials:"HM",color:"warning"}]},{id:39,avatar:"https://media.cssninja.io/content/avatars/39.jpg",badge:"/images/icons/stacks/python.svg",username:"Alejandro B.",fullName:"Alejandro Badajoz",initials:"AB",color:"h-purple",location:"New York, NY",position:"Business Analyst",bio:"This is a nice user description that we can use as demo content.",posts:{count:7,progress:18},projects:{count:9,progress:57},tasks:{count:17,progress:38},team:[{id:189,avatar:void 0,name:"Alan T.",initials:"AT",color:"success"},{id:23,avatar:"https://media.cssninja.io/content/avatars/23.jpg",name:"Irina V.",initials:"IV",color:"danger"}]},{id:40,avatar:"https://media.cssninja.io/content/avatars/40.jpg",badge:"/images/icons/stacks/android.svg",username:"Jeanne M.",fullName:"Jeanne Marchand",initials:"JM",color:"info",location:"Paris, France",position:"Mobile Developer",bio:"This is a nice user description that we can use as demo content.",posts:{count:23,progress:54},projects:{count:17,progress:78},tasks:{count:21,progress:26},team:[{id:148,avatar:void 0,name:"Betty T.",initials:"BT",color:"h-yellow"},{id:18,avatar:"https://media.cssninja.io/content/avatars/18.jpg",name:"Esteban C.",initials:"EC",color:"h-purple"},{id:159,avatar:void 0,name:"John D.",initials:"JD",color:"info"}]},{id:19,avatar:"https://media.cssninja.io/content/avatars/19.jpg",badge:"/images/icons/flags/germany.svg",username:"Greta K.",fullName:"Greta Kroppfer",initials:"GK",color:"h-yellow",location:"Los Angeles, CA",position:"Sales Manager",bio:"This is a nice user description that we can use as demo content.",posts:{count:5,progress:19},projects:{count:4,progress:29},tasks:{count:8,progress:59},team:[{id:198,avatar:void 0,name:"Sarah C.",initials:"SC",color:"h-purple"},{id:27,avatar:"https://media.cssninja.io/content/avatars/27.jpg",name:"Carmen E.",initials:"CE",color:"info"}]},{id:9,avatar:"https://media.cssninja.io/content/avatars/9.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Anna B.",fullName:"Anna Baker",initials:"AB",color:"info",location:"San Francisco, CA",position:"UI/UX Designer",bio:"This is a nice user description that we can use as demo content.",posts:{count:12,progress:54},projects:{count:28,progress:59},tasks:{count:11,progress:79},team:[{id:189,avatar:void 0,name:"Alan T.",initials:"AT",color:"success"},{id:23,avatar:"https://media.cssninja.io/content/avatars/23.jpg",name:"Irina V.",initials:"IV",color:"danger"}]},{id:5,avatar:"https://media.cssninja.io/content/avatars/5.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Mary L.",fullName:"Mary Lebowski",initials:"ML",color:"h-yellow",location:"San Diego, CA",position:"Project Manager",bio:"This is a nice user description that we can use as demo content.",posts:{count:17,progress:18},projects:{count:49,progress:28},tasks:{count:67,progress:27},team:[{id:148,avatar:void 0,name:"Betty T.",initials:"BT",color:"h-yellow"},{id:18,avatar:"https://media.cssninja.io/content/avatars/18.jpg",name:"Esteban C.",initials:"EC",color:"h-purple"},{id:159,avatar:void 0,name:"John D.",initials:"JD",color:"info"},{id:7,avatar:"https://media.cssninja.io/content/avatars/7.jpg",name:"Alice C.",initials:"AC",color:"success"}]},{id:32,avatar:"https://media.cssninja.io/content/avatars/32.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Jonathan K.",fullName:"Jonathan Krugger",initials:"JK",color:"info",location:"Los Angeles, CA",position:"Product Manager",bio:"This is a nice user description that we can use as demo content.",posts:{count:44,progress:66},projects:{count:54,progress:48},tasks:{count:62,progress:21},team:[{id:21,avatar:"https://media.cssninja.io/content/avatars/21.jpg",name:"Elizabet F.",initials:"EF",color:"warning"},{id:198,avatar:void 0,name:"Sarah C.",initials:"SC",color:"h-purple"},{id:39,avatar:"https://media.cssninja.io/content/avatars/39.jpg",name:"Alejandro B.",initials:"AB",color:"danger"}]},{id:36,avatar:"https://media.cssninja.io/content/avatars/36.jpg",badge:"/images/icons/flags/france.svg",username:"Benoit L.",fullName:"Benoit Leblanc",initials:"BL",color:"h-purple",location:"Paris, France",position:"Software Engineer",bio:"This is a nice user description that we can use as demo content.",posts:{count:31,progress:89},projects:{count:19,progress:87},tasks:{count:21,progress:65},team:[{id:148,avatar:void 0,name:"Betty T.",initials:"BT",color:"h-yellow"},{id:31,avatar:"https://media.cssninja.io/content/avatars/31.jpg",name:"Yasseen A.",initials:"YA",color:"h-purple"}]},{id:38,avatar:"https://media.cssninja.io/content/avatars/38.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Christie D.",fullName:"Christie Dallas",initials:"CD",color:"info",location:"Los Angeles, CA",position:"Web Developer",bio:"This is a nice user description that we can use as demo content.",posts:{count:17,progress:48},projects:{count:98,progress:57},tasks:{count:35,progress:79},team:[{id:33,avatar:"https://media.cssninja.io/content/avatars/33.jpg",name:"Harvey M.",initials:"HM",color:"warning"},{id:26,avatar:"https://media.cssninja.io/content/avatars/26.jpg",name:"Courtney W.",initials:"CW",color:"info"}]},{id:26,avatar:"https://media.cssninja.io/content/avatars/26.jpg",badge:"/images/icons/flags/australia.svg",username:"Courtney W.",fullName:"Courtney Wilson",initials:"CW",color:"info",location:"Melbourne, AU",position:"Web Developer",bio:"This is a nice user description that we can use as demo content.",posts:{count:34,progress:18},projects:{count:2,progress:57},tasks:{count:12,progress:38},team:[{id:21,avatar:"https://media.cssninja.io/content/avatars/21.jpg",name:"Elizabet F.",initials:"EF",color:"warning"},{id:189,avatar:void 0,name:"Alan T.",initials:"AT",color:"success"},{id:39,avatar:"https://media.cssninja.io/content/avatars/39.jpg",name:"Alejandro B.",initials:"AB",color:"danger"}]},{id:16,avatar:"https://media.cssninja.io/content/avatars/16.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Jason G.",fullName:"Jason Guarank",initials:"JG",color:"danger",location:"Houston, TX",position:"Business Analyst",bio:"This is a nice user description that we can use as demo content.",posts:{count:0,progress:55},projects:{count:12,progress:59},tasks:{count:12,progress:79},team:[{id:14,avatar:"https://media.cssninja.io/content/avatars/14.jpg",name:"Ryan B.",initials:"RB",color:"warning"},{id:198,avatar:void 0,name:"Sarah C.",initials:"SC",color:"h-purple"}]},{id:23,avatar:"https://media.cssninja.io/content/avatars/23.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Irina V.",fullName:"Irina Vierbovsky",initials:"IV",color:"info",location:"San Jose, CA",position:"Project Manager",bio:"This is a nice user description that we can use as demo content.",posts:{count:6,progress:64},projects:{count:1,progress:88},tasks:{count:6,progress:100},team:[{id:189,avatar:void 0,name:"Alan T.",initials:"AT",color:"success"},{id:34,avatar:"https://media.cssninja.io/content/avatars/34.jpg",name:"Daniel R.",initials:"DR",color:"h-yellow"}]},{id:28,avatar:"https://media.cssninja.io/content/avatars/28.jpg",badge:"/images/icons/flags/france.svg",username:"Edouard F.",fullName:"Edouard Falant",initials:"EF",color:"success",location:"Paris, France",position:"Web Developer",bio:"This is a nice user description that we can use as demo content.",posts:{count:8,progress:44},projects:{count:16,progress:32},tasks:{count:19,progress:71},team:[{id:148,avatar:void 0,name:"Betty T.",initials:"BT",color:"h-yellow"},{id:18,avatar:"https://media.cssninja.io/content/avatars/18.jpg",name:"Esteban C.",initials:"EC",color:"h-purple"},{id:159,avatar:void 0,name:"John D.",initials:"JD",color:"info"}]},{id:7,avatar:"https://media.cssninja.io/content/avatars/7.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Alice C.",fullName:"Alice Carasca",initials:"AC",color:"info",location:"San Diego, CA",position:"Software Engineer",bio:"This is a nice user description that we can use as demo content.",posts:{count:8,progress:22},projects:{count:22,progress:56},tasks:{count:39,progress:34},team:[{id:25,avatar:"https://media.cssninja.io/content/avatars/25.jpg",name:"Melany W.",initials:"MW",color:"success"},{id:198,avatar:void 0,name:"Sarah C.",initials:"SC",color:"h-purple"},{id:12,avatar:"https://media.cssninja.io/content/avatars/12.jpg",name:"Joshua S.",initials:"JS",color:"warning"}]},{id:22,avatar:"https://media.cssninja.io/content/avatars/22.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Dwayne H.",fullName:"Dwayne Hicks",initials:"DH",color:"info",location:"Los Angeles, CA",position:"Product Manager",bio:"This is a nice user description that we can use as demo content.",posts:{count:13,progress:18},projects:{count:15,progress:57},tasks:{count:14,progress:38},team:[{id:148,avatar:void 0,name:"Betty T.",initials:"BT",color:"h-yellow"},{id:198,avatar:void 0,name:"Sarah C.",initials:"SC",color:"h-purple"}]}],ra={class:"user-grid-toolbar is-reversed tabs-wrapper is-slider"},ca={class:"tabs-inner"},la={class:"user-grid user-grid-v3"},da=p("img",{class:"light-image",src:M,alt:""},null,-1),pa=p("img",{class:"dark-image",src:N,alt:""},null,-1),ua={key:0},ma={key:1},ga=p("img",{class:"light-image is-larger",src:"/images/illustrations/placeholders/team.svg",alt:""},null,-1),va=p("img",{class:"dark-image is-larger",src:"/images/illustrations/placeholders/team-dark.svg",alt:""},null,-1),ha=j(i({__name:"UsersGridV3",props:{activeTab:{default:"all"}},setup(a){const s=a,e=n(""),t=n(s.activeTab),i=b((()=>e.value?oa.filter((a=>a.username.match(new RegExp(e.value,"i"))||a.location.match(new RegExp(e.value,"i"))||a.position.match(new RegExp(e.value,"i"))||a.badge.match(new RegExp(e.value,"i")))):oa));return(a,s)=>{const n=S,o=D,r=E,u=na;return c(),l("div",null,[p("div",ra,[d(n,{icon:"lucide:search"},{default:f((()=>[k(p("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>y(e)?e.value=a:null),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[w,g(e)]])])),_:1}),p("div",ca,[d(o,{selected:g(t),"onUpdate:selected":s[1]||(s[1]=a=>y(t)?t.value=a:null),slider:"",align:"centered",tabs:[{label:"All",value:"all"},{label:"Team",value:"team"}]},null,8,["selected"])])]),p("div",la,[d(r,{class:m([0!==g(i).length&&"is-hidden"]),title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:f((()=>[da,pa])),_:1},8,["class"]),"all"===g(t)?(c(),l("div",ua,[d(A,{name:"list",tag:"div",class:"columns is-multiline is-flex-tablet-p is-half-tablet-p"},{default:f((()=>[(c(!0),l(T,null,C(g(i),(a=>(c(),l("div",{key:a.id,class:"column is-3"},[d(u,{user:a},null,8,["user"])])))),128))])),_:1})])):"team"===g(t)?(c(),l("div",ma,[d(r,{title:"No team members.",subtitle:"Looks like you don't have any team members yet. When you'll start\n              adding some to your team, they will be showing up in here."},{image:f((()=>[ga,va])),_:1})])):B("",!0)])])}}}),[["__file","UsersGridV3.vue"]]);export{ha as _};