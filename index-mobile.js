!function(t){function e(e){for(var i,a,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);for(u&&u(e);f.length;)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={7:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push(["zOQy",0]),n()}({"+Y/9":function(t,e,n){t.exports=n.p+"medias/lemonsunshine.7b65b3e.mp3"},0:function(t,e){},"1Qp6":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"e",(function(){return u})),n.d(e,"h",(function(){return y})),n.d(e,"c",(function(){return U})),n.d(e,"i",(function(){return w})),n.d(e,"g",(function(){return x})),n.d(e,"f",(function(){return k})),n.d(e,"d",(function(){return S})),n.d(e,"b",(function(){return O}));var i={data:function(){return{}},props:{year:{type:[String,Number],required:!0},isMobile:{type:Boolean,required:!0}}},o=n("JFUb");var r=function(t){n("PGGg")},a=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:["copy-right-container",this.isMobile?"add-padding":"add-margin"]},[e("p",{staticClass:"ignore-font-14"},[this._v("Copyright © "+this._s((new Date).getFullYear())+" caohaitao.cc  . All Rights Reserved")]),e("p",{staticClass:"ignore-font-14"},[this._v("京ICP备 16068799号")])])}),[],!1,r,null,null).exports,s={left:0,top:0,currentX:0,currentY:0,flag:!1},c={name:"Modal",data:function(){return{rendered:!1}},props:{position:{type:String,default:"middle"},visible:{type:Boolean},width:{type:[Number,String]},showClose:{type:Boolean,default:!0}},computed:{style:function(){var t={};return this.width&&(t.width=this.width),t}},methods:{hide:function(){this.$emit("close")},barDown:function(t){s.flag=!0,t||(t=window.event,bar.onselectstart=function(){return!1});var e=t;s.currentX=e.clientX,s.currentY=e.clientY}},mounted:function(){var t=this;this.visible&&(this.rendered=!0);var e=document.querySelector("body"),n=document.getElementById("modal"),i=(document.getElementById("modalHeader"),e.clientWidth),o=(e.clientHeight,parseInt(this.$utils.getCss(n,"width"))),r=parseInt(this.$utils.getCss(n,"height")),a=i-o/2;s.left=parseInt(this.$utils.getCss(n,"left"))/100*parseInt(this.$utils.getCss(e,"width")),s.top=parseInt(this.$utils.getCss(n,"top"))/100*parseInt(this.$utils.getCss(e,"height")),document.onmouseup=function(){t.visible&&(s.flag=!1,"auto"!==t.$utils.getCss(n,"left")&&(s.left=t.$utils.getCss(n,"left")),"auto"!==t.$utils.getCss(n,"top")&&(s.top=t.$utils.getCss(n,"top")))},document.onmousemove=function(t){var e=t||window.event;if(s.flag){var i=e.clientX,c=e.clientY,l=i-s.currentX,u=c-s.currentY;return parseInt(s.left)+l<=o/2?n.style.left=o/2+"px":parseInt(s.left)+l>=a?n.style.left=a+"px":n.style.left=parseInt(s.left)+l+"px",parseInt(s.top)+u<=r/2?n.style.top=r/2+"px":n.style.top=parseInt(s.top)+u+"px",t.preventDefault&&t.preventDefault(),!1}}},updated:function(){this.visible&&(this.rendered=!0)}};var l=function(t){n("bFvR")},u=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{duration:{enter:500,leave:500},name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"modal-layer"},[n("div",{class:["ignore-modal-container","footer"==t.position?"modal-set-footer":""],style:t.style,attrs:{id:"modal"}},[n("div",{staticClass:"ignore-modal-header flex-between-center",attrs:{id:"modalHeader"},on:{mousedown:t.barDown}},[t._t("title"),t.showClose?n("span",{staticClass:"close-icon",on:{click:t.hide}},[t._v("×")]):t._e()],2),t.rendered?n("div",{staticClass:"ignore-modal-body"},[t._t("default")],2):t._e(),n("div",{staticClass:"ignore-modal-footer"},[t.$slots.footer?t._t("footer"):t._e()],2)])])])}),[],!1,l,null,null).exports,d=new AudioContext,f=[196,220,246.94,261.63,293.66,329.63,349.23,392,440,493.88,523.25,587.33,659.25,698.46,783.99,880,987.77,1046.5],p=["html","css","JavaScript","frame","ued","diary"],h=window.location.pathname,m=/^\/(?=(web|article))/,v={data:function(){return{audioCtx:d,arrFrequency:f,sticky:m.test(h)}},props:{navDefaultList:{type:Array,required:!0}},methods:{handleTriggerAudio:function(t){var e=this.arrFrequency[t],n=this.audioCtx.createOscillator(),i=this.audioCtx.createGain();n.connect(i),i.connect(this.audioCtx.destination),n.type="sine",n.frequency.value=e,i.gain.setValueAtTime(0,this.audioCtx.currentTime),i.gain.linearRampToValueAtTime(1,this.audioCtx.currentTime+.01),n.start(d.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+1),n.stop(this.audioCtx.currentTime+1)},computedClass:function(t){switch(t){case 0:return"iconfont icon-zhuye1";case this.navDefaultList.length-1:return"iconfont icon-guanyu";default:return}},renderLink:function(t){return!p.includes(t)},handleLocation:function(t){"cv"!=t?window.location.href="/"+t:window.open("/cv")},handleFilterData:function(t){if("diary"==t)return this.$emit("call-check-id"),!1;this.$emit("call-back",t)}}};var g=function(t){n("VQRb")},y=Object(o.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["ignore-nav-header-container",t.sticky?"nav-sticky":""]},[n("ul",{staticClass:"nav-header flex-around-center"},t._l(t.navDefaultList,(function(e,i){return n("li",{key:"nav-ele-"+i,staticClass:"ignore-nav-ele",on:{mouseenter:function(e){return t.handleTriggerAudio(i)}}},[t.renderLink(e.location)?n("span",{class:t.computedClass(i),on:{click:function(n){return t.handleLocation(e.location)}}},[t._v("\n                "+t._s(0!=i&&i!=t.navDefaultList.length-1?e.name:"")+"\n            ")]):n("span",{class:t.computedClass(i),on:{click:function(n){return t.handleFilterData(e.location)}}},[t._v(" \n               "+t._s(0!=i&&i!=t.navDefaultList.length-1?e.name:"")+"\n            ")])])})),0)])}),[],!1,g,null,null).exports;Object(o.a)(null,void 0,void 0,!1,null,null,null).exports;var b=function(t){n("WZ1I")},w=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"wrapper-100vh"},[this._t("default")],2)}),[],!1,b,null,null).exports,_={data:function(){return{visibleFE:!1}},props:{navList:{type:Array,required:!0},multi:{type:Boolean}},methods:{handleTab:function(t){t.multi?this.visibleFE=!this.visibleFE:"diary"==t.location?this.$toast("请用电脑登录验证~"):window.location.href="/"+t.location},handleChildTab:function(t){this.$emit("call-back",t.location)}}};var C=function(t){n("XHf2")},x=Object(o.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"footer-container flex-double-center"},t._l(t.navList,(function(e,i){return n("li",{key:i+"-footer-nav-item",class:["nav-footer-item","ignore-16px",0!=i?"divider":"",e.multi?"multi-mark":""],on:{click:function(n){return t.handleTab(e)}}},[n("span",[t._v(t._s(e.name))]),e.multi&&e.children?n("ul",{directives:[{name:"show",rawName:"v-show",value:t.visibleFE,expression:"visibleFE"}],staticClass:"flex-column-around children-nav"},t._l(e.children,(function(e,i){return n("li",{key:"child"+i,staticClass:"children-item",on:{click:function(n){return t.handleChildTab(e)}}},[t._v("\n                "+t._s(e.name)+"\n            ")])})),0):t._e()])})),0)}),[],!1,C,null,null).exports,j={data:function(){return{audioContext:null}},props:{play:Boolean,width:{type:[Number,String]},height:{type:[Number,String]},link:{type:String},color:{type:String}},updated:function(){this.play?(this.audioContext.resume(),audio.play()):audio.pause()},mounted:function(){var t=this;audio.onended=function(){t.$emit("switchoff")};var e=window.AudioContext||window.webkitAudioContext,n=this.audioContext=new e,i=n.createMediaElementSource(audio),o=n.createScriptProcessor(4096,1,1),r=canvasVoice.width,a=canvasVoice.height,s=canvasVoice.getContext("2d");s.strokeStyle=t.color||"#aaa",s.translate(.5,a/2+.5),i.connect(o),o.connect(n.destination),o.onaudioprocess=function(t){for(var e=t.inputBuffer.getChannelData(0),n=t.outputBuffer.getChannelData(0),i=0;i<e.length;i++)n[i]=e[i];s.clearRect(-.5,-a/2-.5,r,a),s.beginPath();for(i=0;i<r;i++)s.lineTo(i,a/2*n[n.length*i/r|0]);s.stroke()}}};var E=function(t){n("6VO2")},k=Object(o.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"musicWrapper"}},[e("canvas",{attrs:{id:"canvasVoice",width:this.width,height:this.height}}),this._t("default")],2)}),[],!1,E,null,null).exports;var F=function(t){n("cwNH")},S=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mask"},[e("div",{staticClass:"iconfont icon-jiazai ignore-loading"})])}],!1,F,null,null).exports,$={name:"Fbutton",props:{type:String}};var I=function(t){n("41S/")},O=Object(o.a)($,(function(){var t=this.$createElement;return(this._self._c||t)("button",{class:["ignore-btn",this.type?"ignore-btn-"+this.type:""],attrs:{type:"button"}},[this._t("default")],2)}),[],!1,I,"data-v-5a9c56d5",null).exports,T=void 0,P=window.innerHeight,R=void 0,D=0,A={data:function(){return{reminderW:0}},methods:{paintReminder:function(){D=document.body.scrollTop,this.reminderW=D/R*100}},mounted:function(){var t=this;T=document.documentElement.scrollHeight,R=T-P,window.addEventListener("scroll",(function(){window.requestAnimationFrame(t.paintReminder)}))}};var L=function(t){n("RHtp")},U=Object(o.a)(A,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"ignore-indicator",style:{width:this.reminderW+"%"}})}),[],!1,L,null,null).exports},"41S/":function(t,e){},"6VO2":function(t,e){},"AJ8+":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return c}));var i=[{name:"英语电台",location:"english",multi:!1},{name:"字里行间",location:"article",multi:!1},{name:"前端技术",location:"webFE",multi:!1},{name:"心之契约",location:"diary",multi:!1}],o=[{name:"HTML",location:"html",multi:!1},{name:"CSS",location:"css",multi:!1},{name:"JavaScript",location:"JavaScript",multi:!1},{name:"F2E",location:"frame",multi:!1},{name:"UED",location:"ued",multi:!1}],r=[{name:"英语电台",location:"english",multi:!1},{name:"字里行间",location:"article",multi:!1},{name:"Web前端",location:"webFE",multi:!0,children:o},{name:"心之契约",location:"diary",multi:!1}];document.body.clientWidth>768&&(i=[{name:"首页",location:"",multi:!1}].concat(i,[{name:"朝花夕拾",location:"photo",multi:!1},{name:"关于我",location:"cv",multi:!1}]),o=[{name:"首页",location:"",multi:!1}].concat(o,[{name:"关于我",location:"cv",multi:!1}]));var a=[{name:"renzhilvli",location:"cv",title:"关于我"},{name:"diantai",location:"english",title:"英语电台"},{name:"yuedu",location:"article",title:"字里行间"},{name:"daima",location:"webFE",title:"前端技术"},{name:"riji",location:"diary",title:"心之契约"},{name:"camera1",location:"photo",title:"朝花夕拾"}],s=2020,c=[2020,2019,2018,2017,2016,2015,2014,2013]},IpIY:function(t,e){},M4Ma:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));var i={player_body:"https://blog-vue.oss-cn-beijing.aliyuncs.com/index_cover/player-body.png",player_switch:"https://blog-vue.oss-cn-beijing.aliyuncs.com/index_cover/player-switch.png",pause:"https://blog-vue.oss-cn-beijing.aliyuncs.com/index_cover/pause.png",play:"https://blog-vue.oss-cn-beijing.aliyuncs.com/index_cover/play.png",cover:"https://blog-vue.oss-cn-beijing.aliyuncs.com/icon/head.png"},o={thumb:"https://blog-vue.oss-cn-beijing.aliyuncs.com/photo_img/thumbs/",big:"https://blog-vue.oss-cn-beijing.aliyuncs.com/photo_img/",count:24,per_line:6},r={path:"https://wx-p.oss-cn-beijing.aliyuncs.com/",skill_path:"https://wx-p.oss-cn-beijing.aliyuncs.com/skill/",head:"head.png",cv_edu:"cv_edu.png",buu:"buu.png",cuc:"cuc.png",work_chinatelecom:"work_chinatelecom.png",work_siemens:"work_siemens.png",58:"58.png",work_byte:"work_byte.png",workImg:["html","css","js","es6","ts","node","swimming","reading","basketball","cook","movie","sleep","git","vue","react","redux","antd","webpack"]},a={path:"https://blog-vue.oss-cn-beijing.aliyuncs.com/article_img/"}},PGGg:function(t,e){},QYQP:function(t,e){},RHtp:function(t,e){},VQRb:function(t,e){},WZ1I:function(t,e){},XHf2:function(t,e){},aRKJ:function(t,e,n){"use strict";var i=n("yvkt"),o={install:function(t){}};var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:140,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:105,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=t;if(o){var r=(o.match(/(\?.*$)/)||[""])[0];r&&(o=o.replace(r,""))}return o+"?w="+e+"&h="+n+"&crop="+i},a={install:function(t){t.filter("imageFormatUrl",r)}},s=n("4d7F"),c=n.n(s),l=n("EJiy"),u=n.n(l),d=n("P2sY"),f=n.n(d),p=n("iCc5"),h=n.n(p),m=n("V7oC"),v=n.n(m),g=n("vDqi"),y=n.n(g),b=n("8ujH"),w=n.n(b),_=n("Qyje"),C=n.n(_),x=new(function(){function t(){h()(this,t),this.axios=y.a}return v()(t,[{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=this._parseUrl(t),o=f()({},i.query,e),r=f()({withCredentials:!0,timeout:3e3,params:o},n);return this.axios.get(i.url,r).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"transformRequest",value:function(t){if("object"===(void 0===t?"undefined":u()(t))){var e="";for(var n in t)t[n]instanceof Array&&(t[n]="["+t[n]+"]"),e+=n+"="+t[n]+"&";return e.substring(0,e.length-1)}if("string"==typeof t)return t}},{key:"post",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=f()({withCredentials:!0,timeout:3e3,headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}},n);return this.axios.post(t,this.transformRequest(e),i).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"jsonp",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new c.a((function(o,r){var a=e._parseUrl(t),s=f()({},a.query,n),c=""+a.url+C.a.stringify(s,{addQueryPrefix:!0}),l=f()({prefix:"jp",param:"jsoncallback",timeout:3e3},i);w()(c,l,(function(t,e){t?r(t):o(e)}))}))}},{key:"_parseUrl",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=(t.match(/(\?.*$)/)||[""])[0],n=t.replace(e,""),i={};return e&&(i=C.a.parse(e,{ignoreQueryPrefix:!0})),{url:n,query:i}}}]),t}()),j={getWebFEList:"/data_source/webFE_list.json",getWebFEHtml:"/data_source/webFE_list_html.json",getWebFECss:"/data_source/webFE_list_css.json",getWebFEJavascript:"/data_source/webFE_list_javascript.json",getWebFEFrame:"/data_source/webFE_list_frame.json",getWebFEUed:"/data_source/webFE_list_ued.json",getArticleList:"/data_source/articleList.json",getArticleContent1:"/data_source/articleContent_1.json",getArticleContent2:"/data_source/articleContent_2.json",getArticleContent3:"/data_source/articleContent_3.json",getArticleContent4:"/data_source/articleContent_4.json",getArticleContent5:"/data_source/articleContent_5.json",getArticleContent6:"/data_source/articleContent_6.json",getDiary2020:"/data_source/diary2020.json",getDiary2019:"/data_source/diary2019.json",getDiary2018:"/data_source/diary2018.json",getDiary2017:"/data_source/diary2017.json",getDiary2016:"/data_source/diary2016.json",getDiary2015:"/data_source/diary2015.json",getDiary2014:"/data_source/diary2014.json",getDiary2013:"/data_source/diary2013.json"},E={install:function(t){Object.defineProperty(t.prototype,"$api",{value:j}),Object.defineProperty(t.prototype,"$http",{value:x})}};var k=function(t){return t[Math.floor(Math.random()*t.length)]};var F=function t(e,n,i){if(!i)e=e.sort(),n=n.sort();if(!e||!n)return!1;if(e.length!=n.length)return!1;for(var o=0,r=e.length;o<r;o++)if(e[o]instanceof Array&&n[o]instanceof Array){if(!t(e[o],n[o]))return!1}else if(e[o]!==n[o])return!1;return!0};var S=function(){return/iphone/gi.test(window.navigator.userAgent)&&812==window.screen.height&&375==window.screen.width};var $=function(t){for(var e=document.cookie.replace(/\s/g,"").split(";"),n=0;n<e.length;n++){var i=e[n].split("=");if(i[0]==t)return decodeURIComponent(i[1])}return""};var I=function(){return $("PPU").match(/UID=(\d*)&/)?RegExp.$1:""};var O=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?decodeURIComponent(n[2]):""};var T=function(t){var e=(t=null==t?window.location.href:t).substring(t.lastIndexOf("?")+1);return e?JSON.parse('{"'+decodeURIComponent(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}};var P,R=function(t){if(!t)return"";var e=[];for(var n in t){var i=t[n];if(i instanceof Array)for(var o=0;o<i.length;++o)e.push(encodeURIComponent(n+"["+o+"]")+"="+encodeURIComponent(i[o]));else e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]))}return e.join("&")},D={afterOpen:function(){P=document.scrollingElement?document.scrollingElement.scrollTop:document.body.scrollTop,document.body.classList.add("modal-open"),document.body.style.top=-P+"px"},beforeClose:function(){document.scrollingElement?(document.body.classList.remove("modal-open"),document.scrollingElement.scrollTop=P):(document.body.classList.remove("modal-open"),document.body.scrollTop=P)}};function A(t,e){var n,i,o;return function(){i=this,o=arguments,n||(n=setTimeout((function(){n=null,t.apply(i,o)}),e))}}var L=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null)[e]};var U=function(){var t=window.document.getElementsByTagName("body");t&&t.length>0&&(t[0].style.position="fixed")};var M=function(){var t=window.document.getElementsByTagName("body");t&&t.length>0&&(t[0].style.position="relative")},W={install:function(t){Object.defineProperty(t.prototype,"$utils",{value:{arrayRandom:k,getCookie:$,getCookieUserId:I,getUrlParam:O,imageFormatUrl:r,isPhoneX:S,stopScrollOn:U,stopScrollOff:M,urlParseSearch:T,urlStringfySearch:R,arrayEqual:F,fixModalScroll:D,throttle:A,getCss:L}})}},Y=n("QbLZ"),q=n.n(Y),H=n("oCYn"),J={data:function(){return{show:!1,timer:0}},props:{title:{type:String,default:""},content:{type:String,default:""},duration:{type:Number,default:2e3}},watch:{content:function(t,e){t&&this.durationFade()}},computed:{computedFontSize:function(){return document.body.clientWidth<768?"14px":"16px"}},methods:{durationFade:function(){var t=this;this.show=!0,window.clearTimeout(this.timer),this.duration>0&&(this.timer=window.setTimeout((function(){t.show=!1,"function"==typeof t.clear&&t.clear()}),this.duration))}}},V=n("JFUb");var Q=function(t){n("IpIY")},N=Object(V.a)(J,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"toast-wrap",style:{"font-size":t.computedFontSize}},[t.title?n("div",{staticClass:"toast-title"},[t._v(t._s(t.title))]):t._e(),n("div",{staticClass:"toast-content",domProps:{innerHTML:t._s(t.content)}})]):t._e()}),[],!1,Q,null,null).exports,B=void 0;function z(){return B||(B=new(H.a.extend(N))({el:document.createElement("div")}),document.body.appendChild(B.$el)),B}var X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=z();return"string"==typeof t&&(t={content:t}),t=q()({},t),f()(e,t),e},G={install:function(t){Object.defineProperty(t.prototype,"$toast",{value:X})}};e.a={install:function(t,e){t.use(i.a),t.use(a),t.use(o),t.use(W),t.use(E),t.use(G)}}},bFvR:function(t,e){},cwNH:function(t,e){},zOQy:function(t,e,n){"use strict";n.r(e);var i=n("oCYn"),o=n("aRKJ"),r=n("M4Ma"),a=n("1Qp6"),s=n("AJ8+"),c={data:function(){return{currentYear:s.a,indexImg:r.c,navDefaultList:s.c,action:!1}},methods:{handlePlay:function(){this.action=!this.action},switchoff:function(){this.action=!1}},created:function(){},mounted:function(){},components:{WrapperVh:a.i,CopyRightFooter:a.a,NavFooter:a.g,MusicView:a.f}},l=n("JFUb");var u=function(t){n("QYQP")},d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index-wrapper"},[i("wrapper-vh",[i("header",{staticClass:"ignore-font-24 flex-double-center"},[t._v("\n            less  is  more\n        ")]),i("div",{staticClass:"main"},[i("div",{staticClass:"music-switch"},[i("img",{staticClass:"switch-img",style:{transform:t.action?"rotate(35deg)":"",transition:t.action?"":"transform .7s ease-in-out .3s"},attrs:{src:t.indexImg.player_switch,alt:"switch"}})]),i("div",[i("div",{staticClass:"music-content"},[i("img",{class:["player-body",t.action?"rotate-music":""],attrs:{src:t.indexImg.player_body,alt:"磁盘"}}),i("img",{class:["player-cover",t.action?"rotate-music":""],attrs:{src:t.indexImg.cover,alt:"封面"}}),i("img",{class:["player-button",t.action?"":"pause"],attrs:{src:t.action?t.indexImg.play:t.indexImg.pause},on:{click:t.handlePlay}})])]),i("music-view",{staticClass:"canvas-container",attrs:{width:"500",height:"100",play:t.action},on:{switchoff:t.switchoff}},[i("audio",{attrs:{id:"audio",preload:"true",src:n("+Y/9")}})])],1),i("nav-footer",{attrs:{navList:t.navDefaultList}})],1),i("copy-right-footer",{attrs:{year:t.currentYear,isMobile:!0}})],1)}),[],!1,u,null,null).exports;i.a.config.productionTip=!1,i.a.use(o.a),new i.a({el:"#app",render:function(t){return t(d)},mounted:function(){window._vue=this}})}});