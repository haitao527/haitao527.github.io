import{d as A,r as x,c as f,e as c,g as l,u as o,o as h,f as e,B as r,w as i,v as a,G as H,H as N,j as m,k as R,l as W,m as P,n as $,q as T,s as U,$ as j,p as D}from"./symbols-2aef84fb.js";import{i as E,a as F,r as B}from"./variable-a4637b51.js";import{C as S,_ as G}from"./index-d7ccc6e4.js";import{W as I}from"./index-1e6ca5e2.js";import{_ as J}from"./index.vue_vue_type_script_setup_true_lang-099baf9c.js";import{u as O}from"./use-media-7b12d379.js";import{s as Q,A as X,H as Y}from"./index-a57d630f.js";const Z="/assets/element-175c588b.mp3",ee={class:"index-wrapper"},oe=e("header",{class:"ignore-font-24 flex-double-center"},"less  is  more",-1),se=["src"],te={class:"main"},ne={class:"robot-container"},ie={class:"move-helper"},ae={class:"robot-head flex-double-center"},le={class:"robot-face"},ce={class:"eye left eye-default"},de={class:"eye right eye-default"},re={class:"eye left eye-smile"},ue={class:"eye right eye-smile"},_e={class:"robot-body-contaienr flex-double-center",onclick:""},pe={class:"robot-body"},ve={class:"robot-shadow"},fe=["title","onClick"],he={class:"ignore-check"},me=e("p",{class:"ignore-remind"}," 请填写姓名，然后进行人脸拍照，提交审核通过后即可通过输入姓名访问 ",-1),ye={class:"ignore-visitor"},be={class:"ignore-face-area"},ge={class:"flex-double-center media-border"},we={id:"video",width:"240",height:"180",autoplay:""},ke={id:"canvas",width:"240",height:"180"},Ce={class:"flex-between-center ignore-snap"},xe={class:"flex-between-center ignore-btn-area"},$e=A({__name:"index",setup(Be){const n=x(!1),p=x(!1),{visitor:v,action:d,operator:V,snap:y,handleCancel:K,handleSubmit:L,handleCheck:b,getMedia:g,takePhoto:w,cancelSnap:k,confirmSnap:C}=O(),M=()=>{n.value=!n.value},q=u=>{u=="diary"?p.value=!0:u=="cv"?window.open(B("cv")):window.location.href=B(u)};return(u,t)=>(h(),f("div",ee,[c(o(I),null,{default:l(()=>[oe,c(o(J),{class:"canvas-container",width:"1500",height:"60",color:"#66b1ff",play:n.value},{default:l(()=>[e("audio",{id:"audio",loop:"",preload:"true",src:o(Z)},null,8,se)]),_:1},8,["play"]),e("div",te,[e("div",ne,[e("div",ie,[e("div",{class:r([n.value?"":"robot-move"])},[e("div",ae,[e("div",le,[i(e("span",ce,null,512),[[a,!n.value]]),i(e("span",de,null,512),[[a,!n.value]]),i(e("span",re,null,512),[[a,n.value]]),i(e("span",ue,null,512),[[a,n.value]])])]),e("div",_e,[e("div",{class:r(["hand","robot-left-hand",n.value?"hand-on":""])},null,2),e("div",pe,[e("i",{class:r(["iconfont","icon-qidong","icon-qidong-self",n.value?"switch-on":""]),onClick:M},null,2)]),e("div",{class:r(["hand","robot-right-hand",n.value?"hand-on":""])},null,2)])],2)]),i(e("div",ve,null,512),[[a,!n.value]])]),(h(!0),f(H,null,N(o(E),(s,z)=>(h(),f("i",{key:`icon-${z}`,title:s.title,class:r(["iconfont",`icon-${s.name}`,n.value?`icon-${s.name}-self`:"","nav-item"]),onClick:Se=>q(s.location)},null,10,fe))),128))])]),_:1}),c(o(G),{visible:p.value,"show-close":"",width:"500px",onClose:t[6]||(t[6]=s=>p.value=!1)},{title:l(()=>[m("身份验证")]),footer:l(()=>[e("div",xe,[c(o(S),{type:"ghost",onClick:o(K)},{default:l(()=>[m("取消")]),_:1},8,["onClick"]),c(o(S),{type:"primary",onClick:o(L)},{default:l(()=>[m("提交")]),_:1},8,["onClick"])])]),default:l(()=>[e("div",he,[me,e("div",ye,[i(e("input",{id:"name","onUpdate:modelValue":t[0]||(t[0]=s=>W(v)?v.value=s:null),type:"text",placeholder:"点击输入姓名",onKeyup:t[1]||(t[1]=P(T((...s)=>o(b)&&o(b)(...s),["exact"]),["enter"]))},null,544),[[R,o(v),void 0,{lazy:!0}]])]),e("div",be,[i(e("i",{class:"iconfont icon-camera1 ignore-face-btn",title:"开启摄像头",onClick:t[2]||(t[2]=(...s)=>o(g)&&o(g)(...s))},null,512),[[a,!o(y)]]),e("div",ge,[i(e("video",we,null,512),[[a,!o(d)]]),i(e("canvas",ke,null,512),[[a,o(d)]])]),i(e("div",Ce,[e("i",{class:"iconfont icon-fanhui ignore-snap-cancel",style:$({opacity:o(d)?1:""}),title:"重新拍摄",onClick:t[3]||(t[3]=(...s)=>o(k)&&o(k)(...s))},null,4),i(e("i",{class:"iconfont icon-ios-radio-button-on ignore-snap-action",title:"点击拍照",onClick:t[4]||(t[4]=(...s)=>o(w)&&o(w)(...s))},null,512),[[a,!o(d)]]),e("i",{class:"iconfont icon-duihao ignore-snap-confirm",style:$({opacity:o(d)?1:""}),title:"确认使用",onClick:t[5]||(t[5]=(...s)=>o(C)&&o(C)(...s))},null,4)],512),[[a,o(y)&&!o(V)]])])])]),_:1},8,["visible"]),c(o(F),{"is-mobile":!1})]))}});const _=U($e);Q(_);_.provide(j,X);_.provide(D,Y);_.mount("#app");