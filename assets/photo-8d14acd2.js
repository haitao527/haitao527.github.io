import{d as N,r as u,b as D,c as _,e as s,g as r,u as e,o as h,w as i,v as a,f as n,B as V,G as P,H as T,n as b,j as y,k as q,l as E,m as F,q as G,s as R,$ as U,p as Y}from"./symbols-2aef84fb.js";import{n as J,c as O,a as Q}from"./variable-a4637b51.js";import{C as I,_ as X}from"./index-d7ccc6e4.js";import{_ as Z}from"./index.vue_vue_type_script_setup_true_lang-a463ac3c.js";import{W as ee}from"./index-1e6ca5e2.js";import{L as oe}from"./index-cde9dc1e.js";import{p}from"./imgs-6e30657b.js";import{u as te}from"./use-media-7b12d379.js";import{s as ne,A as ie,H as se}from"./index-a57d630f.js";const ae={class:"photo-container"},le={class:"ignore-photo-content"},re=["onClick"],de=["src"],ce={class:"ignore-check"},ue=n("p",{class:"ignore-remind"},"请填写姓名，然后进行人脸拍照，提交审核通过后即可通过输入姓名访问",-1),pe={class:"ignore-visitor"},me={class:"ignore-face-area"},fe={class:"flex-double-center media-border"},ge={id:"video",autoplay:"",width:"200",height:"180"},ve={id:"canvas",width:"200",height:"180"},_e={class:"flex-between-center ignore-snap"},he={class:"flex-between-center ignore-btn-area"},be=N({__name:"index",setup(ye){const K=u(Array.from({length:p.count},(l,o)=>o)),k=u(!0),d=u("grid"),C=u(""),g=u(!1),{visitor:v,action:c,operator:L,snap:$,handleCancel:W,handleSubmit:j,handleCheck:x,getMedia:w,takePhoto:M,cancelSnap:S,confirmSnap:A,computedWidth:B}=te();D(()=>{k.value=!1});const z=l=>{const o=l%p.per_line,t=Math.floor(l/p.per_line);return d.value==="grid"?`background-position:${o*-125}px ${t*-125}px;transform:rotate(${Math.floor(Math.random()*41)-20}deg)`:`background-image:url('${C.value}');background-position:${o*-125}px ${t*-125}px;transform:rotate(0deg)`},H=l=>{d.value=d.value==="grid"?"big":"grid",C.value=`${p.big}${l}.jpg`};return(l,o)=>(h(),_("div",ae,[s(e(ee),null,{default:r(()=>[i(s(e(Z),{"nav-default-list":e(J),onCallCheckId:o[0]||(o[0]=t=>g.value=!0)},null,8,["nav-default-list"]),[[a,e(B)]]),n("div",le,[n("div",{class:V(["ignore-padding-box",d.value==="big"?"ignore-big-mode":""])},[(h(!0),_(P,null,T(K.value,(t,m)=>(h(),_("div",{key:`position-${m}`,class:"img-wrapper flex-double-center",style:b(z(m)),onClick:ke=>H(m+1)},[n("img",{src:`${e(p).thumb}${m+1}.jpg`,class:V(["ignore-thumb-img",d.value==="big"?"hide":""]),alt:"小图片"},null,10,de)],12,re))),128)),i(s(e(oe),null,null,512),[[a,k.value]])],2)])]),_:1}),s(e(X),{visible:g.value,"show-close":"",width:"500px",onClose:o[7]||(o[7]=t=>g.value=!1)},{title:r(()=>[y(" 身份验证 ")]),footer:r(()=>[n("div",he,[s(e(I),{type:"ghost",onClick:e(W)},{default:r(()=>[y("取消")]),_:1},8,["onClick"]),s(e(I),{type:"primary",onClick:e(j)},{default:r(()=>[y("提交")]),_:1},8,["onClick"])])]),default:r(()=>[n("div",ce,[ue,n("div",pe,[i(n("input",{id:"name","onUpdate:modelValue":o[1]||(o[1]=t=>E(v)?v.value=t:null),type:"text",placeholder:"点击输入姓名",onKeyup:o[2]||(o[2]=F(G((...t)=>e(x)&&e(x)(...t),["exact"]),["enter"]))},null,544),[[q,e(v),void 0,{lazy:!0}]])]),n("div",me,[i(n("i",{class:"iconfont icon-camera1 ignore-face-btn",title:"开启摄像头",onClick:o[3]||(o[3]=(...t)=>e(w)&&e(w)(...t))},null,512),[[a,!e($)]]),n("div",fe,[i(n("video",ge,null,512),[[a,!e(c)]]),i(n("canvas",ve,null,512),[[a,e(c)]])]),i(n("div",_e,[n("i",{class:"iconfont icon-fanhui ignore-snap-cancel",style:b({opacity:e(c)?1:""}),title:"重新拍摄",onClick:o[4]||(o[4]=(...t)=>e(S)&&e(S)(...t))},null,4),i(n("i",{class:"iconfont icon-ios-radio-button-on ignore-snap-action",title:"点击拍照",onClick:o[5]||(o[5]=(...t)=>e(M)&&e(M)(...t))},null,512),[[a,!e(c)]]),n("i",{class:"iconfont icon-duihao ignore-snap-confirm",style:b({opacity:e(c)?1:""}),title:"确认使用",onClick:o[6]||(o[6]=(...t)=>e(A)&&e(A)(...t))},null,4)],512),[[a,e($)&&!e(L)]])])])]),_:1},8,["visible"]),s(e(Q),{year:e(O),"is-mobile":!e(B)},null,8,["year","is-mobile"])]))}});const f=R(be);ne(f);f.provide(U,ie);f.provide(Y,se);f.mount("#app");