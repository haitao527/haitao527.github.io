import{d as q,r as C,c as f,e as c,g as l,u as o,o as h,f as e,A as r,w as i,v as a,F as z,G as N,h as m,j as R,k as W,l as H,n as $,p as P,q as T,$ as U,m as j}from"./symbols-a5750b6c.js";import{i as D,a as E,r as M}from"./variable-24519989.js";import{F as V,_ as G}from"./index-a05cfb3c.js";import{W as I}from"./index-20cbfae8.js";import{M as J}from"./index-b7914a58.js";import{u as O}from"./use-media-c867db85.js";import{s as Q,A as X,H as Y}from"./index-edb6d258.js";const Z="/assets/element-175c588b.mp3",ee={class:"index-wrapper"},oe=e("header",{class:"ignore-font-24 flex-double-center"},"less  is  more",-1),se=["src"],te={class:"main"},ne={class:"robot-container"},ie={class:"move-helper"},ae={class:"robot-head flex-double-center"},le={class:"robot-face"},ce={class:"eye left eye-default"},de={class:"eye right eye-default"},re={class:"eye left eye-smile"},ue={class:"eye right eye-smile"},pe={class:"robot-body-contaienr flex-double-center",onclick:""},ve={class:"robot-body"},_e={class:"robot-shadow"},fe=["title","onClick"],he={class:"ignore-check"},me=e("p",{class:"ignore-remind"}," 请填写姓名，然后进行人脸拍照，提交审核通过后即可通过输入姓名访问 ",-1),ye={class:"ignore-visitor"},be={class:"ignore-face-area"},ge={class:"flex-double-center media-border"},we={id:"video",width:"240px",height:"180px",autoplay:""},xe={id:"canvas",width:"240px",height:"180px"},ke={class:"flex-between-center ignore-snap"},Ce={class:"flex-between-center ignore-btn-area"},$e=q({__name:"index",setup(Me){const n=C(!1),v=C(!1),{visitor:_,action:d,operator:S,snap:y,handleCancel:A,handleSubmit:B,handleCheck:b,getMedia:g,takePhoto:w,cancelSnap:x,confirmSnap:k}=O(),F=()=>{n.value=!n.value},K=u=>{u=="diary"?v.value=!0:u=="cv"?window.open(M("cv")):window.location.href=M(u)};return(u,t)=>(h(),f("div",ee,[c(o(I),null,{default:l(()=>[oe,c(o(J),{class:"canvas-container",width:"1500",height:"60",color:"#66b1ff",play:n.value},{default:l(()=>[e("audio",{id:"audio",loop:"",preload:"true",src:o(Z)},null,8,se)]),_:1},8,["play"]),e("div",te,[e("div",ne,[e("div",ie,[e("div",{class:r([n.value?"":"robot-move"])},[e("div",ae,[e("div",le,[i(e("span",ce,null,512),[[a,!n.value]]),i(e("span",de,null,512),[[a,!n.value]]),i(e("span",re,null,512),[[a,n.value]]),i(e("span",ue,null,512),[[a,n.value]])])]),e("div",pe,[e("div",{class:r(["hand","robot-left-hand",n.value?"hand-on":""])},null,2),e("div",ve,[e("i",{class:r(["iconfont","icon-qidong","icon-qidong-self",n.value?"switch-on":""]),onClick:F},null,2)]),e("div",{class:r(["hand","robot-right-hand",n.value?"hand-on":""])},null,2)])],2)]),i(e("div",_e,null,512),[[a,!n.value]])]),(h(!0),f(z,null,N(o(D),(s,L)=>(h(),f("i",{key:`icon-${L}`,title:s.title,class:r(["iconfont",`icon-${s.name}`,n.value?`icon-${s.name}-self`:"","nav-item"]),onClick:Ve=>K(s.location)},null,10,fe))),128))])]),_:1}),c(o(G),{visible:v.value,"show-close":"",width:"500px",onClose:t[6]||(t[6]=s=>v.value=!1)},{title:l(()=>[m("身份验证")]),footer:l(()=>[e("div",Ce,[c(o(V),{type:"ghost",onClick:o(A)},{default:l(()=>[m("取消")]),_:1},8,["onClick"]),c(o(V),{type:"primary",onClick:o(B)},{default:l(()=>[m("提交")]),_:1},8,["onClick"])])]),default:l(()=>[e("div",he,[me,e("div",ye,[i(e("input",{id:"name","onUpdate:modelValue":t[0]||(t[0]=s=>W(_)?_.value=s:null),type:"text",placeholder:"点击输入姓名",onKeyup:t[1]||(t[1]=H(P((...s)=>o(b)&&o(b)(...s),["exact"]),["enter"]))},null,544),[[R,o(_),void 0,{lazy:!0}]])]),e("div",be,[i(e("i",{class:"iconfont icon-camera1 ignore-face-btn",title:"开启摄像头",onClick:t[2]||(t[2]=(...s)=>o(g)&&o(g)(...s))},null,512),[[a,!o(y)]]),e("div",ge,[i(e("video",we,null,512),[[a,!o(d)]]),i(e("canvas",xe,null,512),[[a,o(d)]])]),i(e("div",ke,[e("i",{class:"iconfont icon-fanhui ignore-snap-cancel",style:$({opacity:o(d)?1:""}),title:"重新拍摄",onClick:t[3]||(t[3]=(...s)=>o(x)&&o(x)(...s))},null,4),i(e("i",{class:"iconfont icon-ios-radio-button-on ignore-snap-action",title:"点击拍照",onClick:t[4]||(t[4]=(...s)=>o(w)&&o(w)(...s))},null,512),[[a,!o(d)]]),e("i",{class:"iconfont icon-duihao ignore-snap-confirm",style:$({opacity:o(d)?1:""}),title:"确认使用",onClick:t[5]||(t[5]=(...s)=>o(k)&&o(k)(...s))},null,4)],512),[[a,o(y)&&!o(S)]])])])]),_:1},8,["visible"]),c(o(E),{"is-mobile":!1})]))}});const p=T($e);Q(p);p.provide(U,X);p.provide(j,Y);p.mount("#app");