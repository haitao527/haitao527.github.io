import{d as s,o as _,c as m,f as l,t as u,A as r}from"./symbols-a5750b6c.js";const d={class:"ignore-font-14"},f=l("p",{class:"ignore-font-14"},"京ICP备 16068799号",-1),v=s({__name:"index",props:{year:null,isMobile:{type:Boolean}},setup(e){return(n,t)=>(_(),m("div",{class:r(["copy-right-container",e.isMobile?"add-padding":"add-margin"])},[l("p",d," Copyright © "+u(e.year??new Date().getFullYear())+" caohaitao.cc . All Rights Reserved ",1),f],2))}});const p=e=>`/${e||""}`;const x=(e,n)=>{const t=e.__vccOpts||e;for(const[o,c]of n)t[o]=c;return t};let i=[{name:"云端 FM",location:"fm",multi:!1},{name:"字里行间",location:"article",multi:!1},{name:"技术博客",location:"tech",multi:!1},{name:"心之契约",location:"diary",multi:!1}],a=[{name:"Web前端",location:"fe",multi:!1},{name:"全栈技术",location:"fullStack",multi:!1},{name:"交互设计",location:"design",multi:!1},{name:"技术前沿",location:"newTech",multi:!1}];const g=[{name:"云端 FM",location:"fm",multi:!1},{name:"字里行间",location:"article",multi:!1},{name:"技术博客",location:"tech",multi:!0,children:a},{name:"心之契约",location:"diary",multi:!1}];document.body.clientWidth>768&&(i=[{name:"首页",location:"",multi:!1}].concat(i,[{name:"朝花夕拾",location:"photo",multi:!1},{name:"关于我",location:"cv",multi:!1}]),a=[{name:"首页",location:"",multi:!1}].concat(a,[{name:"关于我",location:"cv",multi:!1}]));const h=[{name:"renzhilvli",location:"cv",title:"关于我"},{name:"diantai",location:"fm",title:"云端 FM"},{name:"yuedu",location:"article",title:"字里行间"},{name:"daima",location:"tech",title:"技术博客"},{name:"riji",location:"diary",title:"心之契约"},{name:"camera1",location:"photo",title:"朝花夕拾"}],b=2020,$=[2020,2019,2018,2017,2016,2015,2014,2013];export{x as _,v as a,g as b,b as c,h as i,i as n,p as r,$ as t,a as w};
