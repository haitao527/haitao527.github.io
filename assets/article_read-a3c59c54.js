import{o as W,c as I,n as y,d as P,r as u,a as U,b as G,e as s,u as e,w as i,v as a,f as t,t as A,g as d,i as S,h as w,j as Y,k as J,l as O,$ as K,m as R,p as Q,q as X}from"./symbols-a5750b6c.js";import{_ as Z,n as B,c as ee,a as te}from"./variable-24519989.js";import{F as L,_ as ne}from"./index-a05cfb3c.js";import{_ as oe}from"./index.vue_vue_type_script_setup_true_lang-4be7f323.js";import{_ as ie}from"./index.vue_vue_type_script_setup_true_lang-62a30e59.js";import{u as se}from"./use-media-c867db85.js";import{s as ae,A as le,H as re}from"./index-10f78ce3.js";let D,ce=window.innerHeight,E,N=0;const de={data(){return{reminderW:0}},methods:{paintReminder(){N=document.body.scrollTop,this.reminderW=N/E*100}},mounted(){D=document.documentElement.scrollHeight,E=D-ce,window.addEventListener("scroll",()=>{window.requestAnimationFrame(this.paintReminder)})}};function pe(V,_,f,p,l,v){return W(),I("div",{class:"ignore-indicator",style:y({width:`${l.reminderW}%`})},null,4)}const ue=Z(de,[["render",pe]]),me={class:"wrapper"},_e={class:"ignore-article-container"},fe={class:"ignore-header-container"},ve={class:"ignore-title"},he={class:"author"},ge=["innerHTML"],we={class:"ignore-check"},ye=t("p",{class:"ignore-remind"},"请填写姓名，然后进行人脸拍照，提交审核通过后即可通过输入姓名访问",-1),xe={class:"ignore-visitor"},be={class:"ignore-face-area"},$e={class:"flex-double-center media-border"},Ce={id:"video",width:"240px",height:"180px",autoplay:""},ke={id:"canvas",width:"240px",height:"180px"},He={class:"flex-between-center ignore-snap"},Me={class:"flex-between-center ignore-btn-area"},Te=P({__name:"index",setup(V){const _=S(K),f=S(R),p=u([]),l=u(!0),v=u(!1),x=u(""),{visitor:h,action:r,operator:F,snap:b,handleCancel:j,handleSubmit:q,handleCheck:$,getMedia:C,takePhoto:k,cancelSnap:H,confirmSnap:M,computedWidth:g}=se();U(()=>{const c=window.location.search.substring(1),o=window.decodeURIComponent(window.atob(c)).split("_");p.value=o,document.getElementsByTagName("title")[0].innerHTML=o[2],z(o[1])}),G(()=>{l.value=!1});const z=async c=>{const n=Math.ceil(parseInt(c)/10);f&&_&&(await f.get(_[`getArticleContent${n}`])).data.articleList.forEach((T,Ae)=>{T.id==c&&(x.value=T.content)})};return(c,n)=>(W(),I("div",me,[s(e(ue)),i(s(e(oe),{"nav-default-list":e(B)},null,8,["nav-default-list"]),[[a,e(g)]]),t("div",_e,[t("div",fe,[t("h2",ve,A(p.value[2]),1),t("p",he,"作者："+A(p.value[3]),1)]),t("div",{class:"ignore-article-content",innerHTML:x.value},null,8,ge)]),i(s(e(l),null,null,512),[[a,l.value]]),s(e(ne),{visible:v.value,"show-close":"",width:"500px",onClose:n[6]||(n[6]=o=>v.value=!1)},{title:d(()=>[w("身份验证")]),footer:d(()=>[t("div",Me,[s(e(L),{type:"ghost",onClick:e(j)},{default:d(()=>[w("取消")]),_:1},8,["onClick"]),s(e(L),{type:"primary",onClick:e(q)},{default:d(()=>[w("提交")]),_:1},8,["onClick"])])]),default:d(()=>[t("div",we,[ye,t("div",xe,[i(t("input",{id:"name","onUpdate:modelValue":n[0]||(n[0]=o=>J(h)?h.value=o:null),type:"text",placeholder:"点击输入姓名",onKeyup:n[1]||(n[1]=O(Q((...o)=>e($)&&e($)(...o),["exact"]),["enter"]))},null,544),[[Y,e(h),void 0,{lazy:!0}]])]),t("div",be,[i(t("i",{class:"iconfont icon-camera1 ignore-face-btn",title:"开启摄像头",onClick:n[2]||(n[2]=(...o)=>e(C)&&e(C)(...o))},null,512),[[a,!e(b)]]),t("div",$e,[i(t("video",Ce,null,512),[[a,!e(r)]]),i(t("canvas",ke,null,512),[[a,e(r)]])]),i(t("div",He,[t("i",{class:"iconfont icon-fanhui ignore-snap-cancel",style:y({opacity:e(r)?1:""}),title:"重新拍摄",onClick:n[3]||(n[3]=(...o)=>e(H)&&e(H)(...o))},null,4),i(t("i",{class:"iconfont icon-ios-radio-button-on ignore-snap-action",title:"点击拍照",onClick:n[4]||(n[4]=(...o)=>e(k)&&e(k)(...o))},null,512),[[a,!e(r)]]),t("i",{class:"iconfont icon-duihao ignore-snap-confirm",style:y({opacity:e(r)?1:""}),title:"确认使用",onClick:n[5]||(n[5]=(...o)=>e(M)&&e(M)(...o))},null,4)],512),[[a,e(b)&&!e(F)]])])])]),_:1},8,["visible"]),i(s(e(ie),{"nav-list":e(B)},null,8,["nav-list"]),[[a,!e(g)]]),s(e(te),{year:e(ee),"is-mobile":!e(g)},null,8,["year","is-mobile"])]))}});const m=X(Te);ae(m);m.provide(K,le);m.provide(R,re);m.mount("#app");
