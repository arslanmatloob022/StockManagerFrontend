import{e as t,a as e,c as i,aL as n,g as l,j as a,H as o,a2 as s}from"../../index-BBZ1hd8o.js";function r(t,e){const i=document.createElementNS("http://www.w3.org/2000/svg",t);for(const n of Object.keys(e))i.setAttribute(n,e[n]);return i}const d=["height","width"],f=s(t({__name:"VPeity",props:{values:{default:()=>[]},type:{default:"line"},min:{default:void 0},max:{default:void 0},radius:{default:8},innerRadius:{default:5},height:{default:16},width:{default:16},padding:{default:.1},stroke:{default:void 0},strokeWidth:{default:1},fill:{default:void 0}},setup(t){const s=t,f=e(),h=i((()=>{const t=s.height||16;if("pie"===s.type||"donut"===s.type){const e=2*s.radius;return t||e}return t})),c=i((()=>{const t=s.width||16;if("pie"===s.type||"donut"===s.type){const e=2*s.radius;return t||e}return t}));return n((()=>{if(!f.value)return;const t=f.value;t.innerHTML="";const e={type:s.type,height:s.height,width:s.width,fill:t=>{const e=s.fill??[];return e[t%e.length]}};switch(s.type){case"bar":e.min=s.min,e.padding=s.padding,function(t,e,i){const n=e,l=Math.max(...void 0===i.max?n:n.concat(i.max)),a=Math.min(...void 0===i.min?n:n.concat(i.min)),o=t.getBoundingClientRect(),s=o.width,d=o.height,f=l-a,h=i.padding??2,c=t=>t*s/n.length,u=t=>d-(f?(t-a)/f*d:1);for(let p=0;p<n.length;p++){const e=c(p+h),o=c(p+1-h)-e,s=n[p],d=u(s);let g,m,y=d,w=d;f?s<0?y=u(Math.min(l,0)):w=u(Math.max(a,0)):g=1,g=w-y,0===g&&(g=1,l>0&&f&&y--),"string"==typeof i.fill?m=i.fill:Array.isArray(i.fill)?m=i.fill?.[p]??i.fill[0]:"function"==typeof i.fill&&(m=i.fill(p)),m&&t.appendChild(r("rect",{fill:m,x:e,y:y,width:o,height:g}))}}(t,s.values,e);break;case"line":e.min=s.min,e.stroke=s.stroke,e.strokeWidth=s.strokeWidth,function(t,e,i){const n=e;1===n.length&&n.push(n[0]);const l=Math.max(...void 0===i.max?n:n.concat(i.max)),a=Math.min(...void 0===i.min?n:n.concat(i.min)),o=t.getBoundingClientRect(),s=i.strokeWidth??1,d=o.width,f=o.height-s,h=l-a,c=t=>{let e=f;return h&&(e-=(t-a)/h*f),e+s/2},u=c(Math.max(a,0)),p=[0,u];for(let r=0;r<n.length;r++)p.push(r*(d/(n.length-1)),c(n[r]));let g;p.push(d,u),"string"==typeof i.fill?g=i.fill:Array.isArray(i.fill)?g=i.fill?.[0]:"function"==typeof i.fill&&(g=i.fill(0)),g&&t.appendChild(r("polygon",{fill:g,points:p.join(" ")})),s&&t.appendChild(r("polyline",{fill:"none",points:p.slice(2,p.length-2).join(" "),stroke:i.stroke,"stroke-width":s,"stroke-linecap":"square"}))}(t,s.values,e);break;case"pie":case"donut":e.radius=s.radius,e.innerRadius=s.innerRadius,function(t,e,i){let n=e.map((t=>t>0?t:0));if(2===n.length){const t=n[0],e=n[1];n=[t,Math.max(0,e-t)]}let l=0,a=n.length,o=0;for(;l<a;l++)o+=n[l];o||(a=2,o=1,n=[0,1]);const s=t.getBoundingClientRect(),d=s.width,f=s.height,h=d/2,c=f/2,u=Math.min(h,c);let p=i.innerRadius;"donut"!==i.type||p||(p=.5*u);const g=Math.PI,m=(t,e)=>{const i=t/o*g*2-g/2;return[e*Math.cos(i)+h,e*Math.sin(i)+c]};let y=0;for(l=0;l<a;l++){const e=n[l],a=e/o;let s,d;if(0!==a){if(1===a)if(p){const t=h-.01,e=c-u,i=c-p;s=r("path",{d:["M",h,e,"A",u,u,0,1,1,t,e,"L",t,i,"A",p,p,0,1,0,h,i].join(" ")})}else s=r("circle",{cx:h,cy:c,r:u});else{const t=y+e;let i=["M"].concat(m(y,u).map(String),"A",`${u}`,`${u}`,"0",a>.5?"1":"0","1",m(t,u).map(String),"L");p?i=i.concat(m(t,p).map(String),"A",`${p}`,`${p}`,"0",a>.5?"1":"0","0",m(y,p).map(String)):i.push(`${h}`,`${c}`),y+=e,s=r("path",{d:i.join(" ")})}"string"==typeof i.fill?d=i.fill:Array.isArray(i.fill)?d=i.fill?.[l]??i.fill?.[0]:"function"==typeof i.fill&&(d=i.fill(l)),d&&s.setAttribute("fill",d),t.appendChild(s)}}}(t,s.values,e)}})),(t,e)=>(l(),a("svg",{ref_key:"svgElement",ref:f,xmlns:"http://www.w3.org/2000/svg",class:"peity",height:o(h),width:o(c)},null,8,d))}}),[["__file","VPeity.vue"]]);export{f as _};