import{d as r,r as u,c as _,e as o,g as n,u as s,o as d,f as a,n as m,A as l,q as p}from"./symbols-a5750b6c.js";import{i as t}from"./imgs-6e30657b.js";import{n as f,c as h,a as v}from"./variable-24519989.js";import{W as y}from"./index-20cbfae8.js";import{_ as g}from"./index.vue_vue_type_script_setup_true_lang-62a30e59.js";import{M as w}from"./index-b7914a58.js";const x={class:"index-wrapper"},b=a("header",{class:"ignore-font-24 flex-double-center"},"less  is  more",-1),C={class:"main"},V={class:"music-switch"},k=["src"],B={class:"music-content"},z=["src"],A=["src"],M=["src"],N=a("audio",{id:"audio",preload:"true",src:"../../assets/lemonsunshine.mp3"},null,-1),S=r({__name:"index",setup(W){const e=u(!1),i=()=>{e.value=!e.value},c=()=>{e.value=!1};return($,q)=>(d(),_("div",x,[o(s(y),null,{default:n(()=>[b,a("div",C,[a("div",V,[a("img",{src:s(t).player_switch,class:"switch-img",style:m({transform:e.value?"rotate(35deg)":"",transition:e.value?"":"transform .7s ease-in-out .3s"}),alt:"switch"},null,12,k)]),a("div",null,[a("div",B,[a("img",{src:s(t).player_body,class:l(["player-body",e.value?"rotate-music":""]),alt:"磁盘"},null,10,z),a("img",{src:s(t).cover,class:l(["player-cover",e.value?"rotate-music":""]),alt:"封面"},null,10,A),a("img",{src:e.value?s(t).play:s(t).pause,class:l(["player-button",e.value?"":"pause"]),onClick:i},null,10,M)])]),o(s(w),{class:"canvas-container",width:"500",height:"100",play:e.value,onSwitchoff:c},{default:n(()=>[N]),_:1},8,["play"])]),o(s(g),{"nav-list":s(f)},null,8,["nav-list"])]),_:1}),o(s(v),{year:s(h),"is-mobile":!0},null,8,["year"])]))}});p(S).mount("#app");
