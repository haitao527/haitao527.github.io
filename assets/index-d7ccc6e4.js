import{d as b,r as X,x as Y,b as D,C as S,o as d,D as E,g as H,w as V,v as W,f as c,B as _,n as z,u as M,E as u,c as y,y as h,T as N,F as T}from"./symbols-2aef84fb.js";import{_ as q}from"./variable-a4637b51.js";function s(a,r){var n;return(n=document.defaultView)==null?void 0:n.getComputedStyle(a,null).getPropertyValue(r)}const F={class:"modal-layer"},P={key:0,class:"ignore-modal-body"},U={class:"ignore-modal-footer"},J=b({__name:"index",props:{position:null,visible:{type:Boolean},width:null,showClose:{type:Boolean}},emits:["close"],setup(a,{emit:r}){const n=a,e={left:0,top:0,currentX:0,currentY:0,flag:!1},f=X(!1),C=Y(()=>{const t={};return n.width&&(t.width=n.width),t}),I=()=>r("close"),B=t=>{e.flag=!0,e.currentX=t.clientX,e.currentY=t.clientY};return D(()=>{const t=T();n.visible&&(f.value=!0);const l=document.querySelector("body"),o=document.getElementById("modal");document.getElementById("modalHeader");const x=(l==null?void 0:l.clientWidth)??0;l==null||l.clientHeight;const p=parseInt(s(o,"width")??"0"),g=parseInt(s(o,"height")??"0"),w=x-p/2;e.left=parseInt(s(o,"left")??"0")/100*parseInt(s(l,"width")??"0"),e.top=parseInt(s(o,"top")??"0")/100*parseInt(s(l,"height")??"0"),document.onmouseup=function(){t!=null&&t.props.visible&&(e.flag=!1,s(o,"left")!=="auto"&&(e.left=parseInt(s(o,"left")??"0")),s(o,"top")!=="auto"&&(e.top=parseInt(s(o,"top")??"0")))},document.onmousemove=function(i){if(e.flag){const $=i.clientX,k=i.clientY,m=$-e.currentX,v=k-e.currentY;return e.left+m<=p/2?o.style.left=`${p/2}px`:e.left+m>=w?o.style.left=w+"px":o.style.left=e.left+m+"px",e.top+v<=g/2?o.style.top=`${g/2}px`:o.style.top=e.top+v+"px",i.preventDefault&&i.preventDefault(),!1}}}),S(()=>{n.visible&&(f.value=!0)}),(t,l)=>(d(),E(N,{duration:{enter:500,leave:500},name:"fade"},{default:H(()=>[V(c("div",F,[c("div",{id:"modal",class:_(["ignore-modal-container",a.position=="footer"?"modal-set-footer":""]),style:z(M(C))},[c("div",{id:"modalHeader",class:"ignore-modal-header flex-between-center",onMousedown:B},[u(t.$slots,"title"),a.showClose?(d(),y("span",{key:0,class:"close-icon",onClick:I},"×")):h("",!0)],32),f.value?(d(),y("div",P,[u(t.$slots,"default")])):h("",!0),c("div",U,[t.$slots.footer?u(t.$slots,"footer",{key:0}):h("",!0)])],6)],512),[[W,a.visible]])]),_:3}))}}),j=b({__name:"index",props:{type:null},setup(a){const r=a;return(n,e)=>(d(),y("button",{type:"button",class:_(["ignore-btn",r.type?`ignore-btn-${r.type}`:""])},[u(n.$slots,"default",{},void 0,!0)],2))}}),K=q(j,[["__scopeId","data-v-d7e8e04b"]]);export{K as C,J as _};