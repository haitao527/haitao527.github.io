import{H as S,r as s,s as g,i as k,y}from"./symbols-a5750b6c.js";const l=e=>window.decodeURIComponent(window.atob(e)),d="JUU1JUE3JTkzJUU1JTkwJThEJUU2JUEwJUJDJUU1JUJDJThGJUU5JTk0JTk5JUU4JUFGJUFGIQ==",E="JUU4JUFGJUI3JUU1JUFFJThDJUU2JTg4JTkwJUU2JThCJThEJUU3JTg1JUE3",C="JUU2JThGJTkwJUU0JUJBJUE0JUU2JTg4JTkwJUU1JThBJTlGJTJDJUU2JTg4JTkxJUU0JUJCJUFDJUU0JUJDJTlBJUU1JUIwJUJEJUU1JUJGJUFCJUU0JUI4JUJBJUU2JTgyJUE4JUU1JUFFJUExJUU2JUEwJUI4fg==",A=493;let a;const b=()=>{const e=k(y),n=S(new AudioContext),c=s(""),r=s(!1),U=s(!1),u=s(!1),J=s(!1),m=g(()=>document.body.clientWidth>768),f=()=>{a&&a.stop(),c.value="",r.value=!1,U.value=!1,u.value=!1,J.value=!1},v=()=>{if(!/^[\u4e00-\u9fa5]{2,4}$/.test(c.value))e==null||e(l(d));else if(!J.value)e==null||e(l(E));else{a&&a.stop();const t=l(C);e==null||e(t),setTimeout(()=>{window.location.reload()},2e3)}},p=()=>{if(c.value==="caohaitao_master")window.location.href="/diary";else if(!/^[\u4e00-\u9fa5]{2,4}$/.test(c.value)){const t=l(d);e==null||e(t)}},h=()=>{r.value=!0;const t={video:{width:240,height:180},audio:!1},o=document.querySelector("#video");navigator.mediaDevices.getUserMedia(t).then(function(T){a=T.getTracks()[0],o&&(o.srcObject=T,o.play())})},w=()=>{const t=n.createOscillator(),o=n.createGain();t.connect(o),o.connect(n.destination),t.type="sine",t.frequency.value=A,o.gain.setValueAtTime(0,n.currentTime),o.gain.linearRampToValueAtTime(1,n.currentTime+.01),t.start(n.currentTime),o.gain.exponentialRampToValueAtTime(.001,n.currentTime+1),t.stop(n.currentTime+1)};return{audioCtx:n,visitor:c,snap:r,action:U,operator:u,snapDone:J,computedWidth:m,handleCancel:f,handleSubmit:v,handleCheck:p,getMedia:h,takePhoto:()=>{J.value=!0,w(),U.value=!0;const t=document.querySelector("#video"),i=document.querySelector("#canvas").getContext("2d");t&&(i==null||i.drawImage(t,0,0,240,180))},cancelSnap:()=>{U.value=!1,J.value=!1},confirmSnap:()=>{a.stop(),u.value=!0}}};export{b as u};
