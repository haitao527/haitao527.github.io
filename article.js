!function(t){function e(e){for(var i,r,s=e[0],c=e[1],l=e[2],d=0,h=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);for(u&&u(e);h.length;)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={1:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push(["mxQQ",0]),n()}({0:function(t,e){},"1Qp6":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"e",(function(){return u})),n.d(e,"h",(function(){return y})),n.d(e,"c",(function(){return R})),n.d(e,"i",(function(){return b})),n.d(e,"g",(function(){return J})),n.d(e,"f",(function(){return k})),n.d(e,"d",(function(){return E})),n.d(e,"b",(function(){return F}));var i={data:function(){return{}},props:{year:{type:[String,Number],required:!0},isMobile:{type:Boolean,required:!0}}},o=n("JFUb");var a=function(t){n("PGGg")},r=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:["copy-right-container",this.isMobile?"add-padding":"add-margin"]},[e("p",{staticClass:"ignore-font-14"},[this._v("Copyright © "+this._s((new Date).getFullYear())+" caohaitao.cc  . All Rights Reserved")]),e("p",{staticClass:"ignore-font-14"},[this._v("京ICP备 16068799号")])])}),[],!1,a,null,null).exports,s={left:0,top:0,currentX:0,currentY:0,flag:!1},c={name:"Modal",data:function(){return{rendered:!1}},props:{position:{type:String,default:"middle"},visible:{type:Boolean},width:{type:[Number,String]},showClose:{type:Boolean,default:!0}},computed:{style:function(){var t={};return this.width&&(t.width=this.width),t}},methods:{hide:function(){this.$emit("close")},barDown:function(t){s.flag=!0,t||(t=window.event,bar.onselectstart=function(){return!1});var e=t;s.currentX=e.clientX,s.currentY=e.clientY}},mounted:function(){var t=this;this.visible&&(this.rendered=!0);var e=document.querySelector("body"),n=document.getElementById("modal"),i=(document.getElementById("modalHeader"),e.clientWidth),o=(e.clientHeight,parseInt(this.$utils.getCss(n,"width"))),a=parseInt(this.$utils.getCss(n,"height")),r=i-o/2;s.left=parseInt(this.$utils.getCss(n,"left"))/100*parseInt(this.$utils.getCss(e,"width")),s.top=parseInt(this.$utils.getCss(n,"top"))/100*parseInt(this.$utils.getCss(e,"height")),document.onmouseup=function(){t.visible&&(s.flag=!1,"auto"!==t.$utils.getCss(n,"left")&&(s.left=t.$utils.getCss(n,"left")),"auto"!==t.$utils.getCss(n,"top")&&(s.top=t.$utils.getCss(n,"top")))},document.onmousemove=function(t){var e=t||window.event;if(s.flag){var i=e.clientX,c=e.clientY,l=i-s.currentX,u=c-s.currentY;return parseInt(s.left)+l<=o/2?n.style.left=o/2+"px":parseInt(s.left)+l>=r?n.style.left=r+"px":n.style.left=parseInt(s.left)+l+"px",parseInt(s.top)+u<=a/2?n.style.top=a/2+"px":n.style.top=parseInt(s.top)+u+"px",t.preventDefault&&t.preventDefault(),!1}}},updated:function(){this.visible&&(this.rendered=!0)}};var l=function(t){n("bFvR")},u=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{duration:{enter:500,leave:500},name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"modal-layer"},[n("div",{class:["ignore-modal-container","footer"==t.position?"modal-set-footer":""],style:t.style,attrs:{id:"modal"}},[n("div",{staticClass:"ignore-modal-header flex-between-center",attrs:{id:"modalHeader"},on:{mousedown:t.barDown}},[t._t("title"),t.showClose?n("span",{staticClass:"close-icon",on:{click:t.hide}},[t._v("×")]):t._e()],2),t.rendered?n("div",{staticClass:"ignore-modal-body"},[t._t("default")],2):t._e(),n("div",{staticClass:"ignore-modal-footer"},[t.$slots.footer?t._t("footer"):t._e()],2)])])])}),[],!1,l,null,null).exports,d=new AudioContext,h=[196,220,246.94,261.63,293.66,329.63,349.23,392,440,493.88,523.25,587.33,659.25,698.46,783.99,880,987.77,1046.5],f=["html","css","JavaScript","frame","ued","diary"],p=window.location.pathname,m=/^\/(?=(web|article))/,v={data:function(){return{audioCtx:d,arrFrequency:h,sticky:m.test(p)}},props:{navDefaultList:{type:Array,required:!0}},methods:{handleTriggerAudio:function(t){var e=this.arrFrequency[t],n=this.audioCtx.createOscillator(),i=this.audioCtx.createGain();n.connect(i),i.connect(this.audioCtx.destination),n.type="sine",n.frequency.value=e,i.gain.setValueAtTime(0,this.audioCtx.currentTime),i.gain.linearRampToValueAtTime(1,this.audioCtx.currentTime+.01),n.start(d.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+1),n.stop(this.audioCtx.currentTime+1)},computedClass:function(t){switch(t){case 0:return"iconfont icon-zhuye1";case this.navDefaultList.length-1:return"iconfont icon-guanyu";default:return}},renderLink:function(t){return!f.includes(t)},handleLocation:function(t){"cv"!=t?window.location.href="/"+t:window.open("/cv")},handleFilterData:function(t){if("diary"==t)return this.$emit("call-check-id"),!1;this.$emit("call-back",t)}}};var g=function(t){n("VQRb")},y=Object(o.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["ignore-nav-header-container",t.sticky?"nav-sticky":""]},[n("ul",{staticClass:"nav-header flex-around-center"},t._l(t.navDefaultList,(function(e,i){return n("li",{key:"nav-ele-"+i,staticClass:"ignore-nav-ele",on:{mouseenter:function(e){return t.handleTriggerAudio(i)}}},[t.renderLink(e.location)?n("span",{class:t.computedClass(i),on:{click:function(n){return t.handleLocation(e.location)}}},[t._v("\n                "+t._s(0!=i&&i!=t.navDefaultList.length-1?e.name:"")+"\n            ")]):n("span",{class:t.computedClass(i),on:{click:function(n){return t.handleFilterData(e.location)}}},[t._v(" \n               "+t._s(0!=i&&i!=t.navDefaultList.length-1?e.name:"")+"\n            ")])])})),0)])}),[],!1,g,null,null).exports;Object(o.a)(null,void 0,void 0,!1,null,null,null).exports;var w=function(t){n("WZ1I")},b=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"wrapper-100vh"},[this._t("default")],2)}),[],!1,w,null,null).exports,_={data:function(){return{visibleFE:!1}},props:{navList:{type:Array,required:!0},multi:{type:Boolean}},methods:{handleTab:function(t){t.multi?this.visibleFE=!this.visibleFE:"diary"==t.location?this.$toast("请用电脑登录验证~"):window.location.href="/"+t.location},handleChildTab:function(t){this.$emit("call-back",t.location)}}};var C=function(t){n("XHf2")},J=Object(o.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"footer-container flex-double-center"},t._l(t.navList,(function(e,i){return n("li",{key:i+"-footer-nav-item",class:["nav-footer-item","ignore-16px",0!=i?"divider":"",e.multi?"multi-mark":""],on:{click:function(n){return t.handleTab(e)}}},[n("span",[t._v(t._s(e.name))]),e.multi&&e.children?n("ul",{directives:[{name:"show",rawName:"v-show",value:t.visibleFE,expression:"visibleFE"}],staticClass:"flex-column-around children-nav"},t._l(e.children,(function(e,i){return n("li",{key:"child"+i,staticClass:"children-item",on:{click:function(n){return t.handleChildTab(e)}}},[t._v("\n                "+t._s(e.name)+"\n            ")])})),0):t._e()])})),0)}),[],!1,C,null,null).exports,U={data:function(){return{audioContext:null}},props:{play:Boolean,width:{type:[Number,String]},height:{type:[Number,String]},link:{type:String},color:{type:String}},updated:function(){this.play?(this.audioContext.resume(),audio.play()):audio.pause()},mounted:function(){var t=this;audio.onended=function(){t.$emit("switchoff")};var e=window.AudioContext||window.webkitAudioContext,n=this.audioContext=new e,i=n.createMediaElementSource(audio),o=n.createScriptProcessor(4096,1,1),a=canvasVoice.width,r=canvasVoice.height,s=canvasVoice.getContext("2d");s.strokeStyle=t.color||"#aaa",s.translate(.5,r/2+.5),i.connect(o),o.connect(n.destination),o.onaudioprocess=function(t){for(var e=t.inputBuffer.getChannelData(0),n=t.outputBuffer.getChannelData(0),i=0;i<e.length;i++)n[i]=e[i];s.clearRect(-.5,-r/2-.5,a,r),s.beginPath();for(i=0;i<a;i++)s.lineTo(i,r/2*n[n.length*i/a|0]);s.stroke()}}};var x=function(t){n("6VO2")},k=Object(o.a)(U,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"musicWrapper"}},[e("canvas",{attrs:{id:"canvasVoice",width:this.width,height:this.height}}),this._t("default")],2)}),[],!1,x,null,null).exports;var T=function(t){n("cwNH")},E=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mask"},[e("div",{staticClass:"iconfont icon-jiazai ignore-loading"})])}],!1,T,null,null).exports,j={name:"Fbutton",props:{type:String}};var D=function(t){n("41S/")},F=Object(o.a)(j,(function(){var t=this.$createElement;return(this._self._c||t)("button",{class:["ignore-btn",this.type?"ignore-btn-"+this.type:""],attrs:{type:"button"}},[this._t("default")],2)}),[],!1,D,"data-v-5a9c56d5",null).exports,$=void 0,I=window.innerHeight,O=void 0,S=0,A={data:function(){return{reminderW:0}},methods:{paintReminder:function(){S=document.body.scrollTop,this.reminderW=S/O*100}},mounted:function(){var t=this;$=document.documentElement.scrollHeight,O=$-I,window.addEventListener("scroll",(function(){window.requestAnimationFrame(t.paintReminder)}))}};var L=function(t){n("RHtp")},R=Object(o.a)(A,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"ignore-indicator",style:{width:this.reminderW+"%"}})}),[],!1,L,null,null).exports},"41S/":function(t,e){},"6VO2":function(t,e){},"AJ8+":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return c}));var i=[{name:"英语电台",location:"english",multi:!1},{name:"字里行间",location:"article",multi:!1},{name:"前端技术",location:"webFE",multi:!1},{name:"心之契约",location:"diary",multi:!1}],o=[{name:"HTML",location:"html",multi:!1},{name:"CSS",location:"css",multi:!1},{name:"JavaScript",location:"JavaScript",multi:!1},{name:"F2E",location:"frame",multi:!1},{name:"UED",location:"ued",multi:!1}],a=[{name:"英语电台",location:"english",multi:!1},{name:"字里行间",location:"article",multi:!1},{name:"Web前端",location:"webFE",multi:!0,children:o},{name:"心之契约",location:"diary",multi:!1}];document.body.clientWidth>768&&(i=[{name:"首页",location:"",multi:!1}].concat(i,[{name:"朝花夕拾",location:"photo",multi:!1},{name:"关于我",location:"cv",multi:!1}]),o=[{name:"首页",location:"",multi:!1}].concat(o,[{name:"关于我",location:"cv",multi:!1}]));var r=[{name:"renzhilvli",location:"cv",title:"关于我"},{name:"diantai",location:"english",title:"英语电台"},{name:"yuedu",location:"article",title:"字里行间"},{name:"daima",location:"webFE",title:"前端技术"},{name:"riji",location:"diary",title:"心之契约"},{name:"camera1",location:"photo",title:"朝花夕拾"}],s=2020,c=[2020,2019,2018,2017,2016,2015,2014,2013]},IpIY:function(t,e){},M4Ma:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r}));var i={player_body:"https://blog-vue.oss-cn-beijing.aliyuncs.com/index_cover/player-body.png",player_switch:"https://blog-vue.oss-cn-beijing.aliyuncs.com/index_cover/player-switch.png",pause:"https://blog-vue.oss-cn-beijing.aliyuncs.com/index_cover/pause.png",play:"https://blog-vue.oss-cn-beijing.aliyuncs.com/index_cover/play.png",cover:"https://blog-vue.oss-cn-beijing.aliyuncs.com/icon/head.png"},o={thumb:"https://blog-vue.oss-cn-beijing.aliyuncs.com/photo_img/thumbs/",big:"https://blog-vue.oss-cn-beijing.aliyuncs.com/photo_img/",count:24,per_line:6},a={path:"https://wx-p.oss-cn-beijing.aliyuncs.com/",skill_path:"https://wx-p.oss-cn-beijing.aliyuncs.com/skill/",head:"head.png",cv_edu:"cv_edu.png",buu:"buu.png",cuc:"cuc.png",work_chinatelecom:"work_chinatelecom.png",work_siemens:"work_siemens.png",58:"58.png",work_byte:"work_byte.png",workImg:["html","css","js","es6","ts","node","swimming","reading","basketball","cook","movie","sleep","git","vue","react","redux","antd","webpack"]},r={path:"https://blog-vue.oss-cn-beijing.aliyuncs.com/article_img/"}},PGGg:function(t,e){},RHtp:function(t,e){},VQRb:function(t,e){},WZ1I:function(t,e){},XHf2:function(t,e){},aRKJ:function(t,e,n){"use strict";var i=n("yvkt"),o={install:function(t){}};var a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:140,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:105,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=t;if(o){var a=(o.match(/(\?.*$)/)||[""])[0];a&&(o=o.replace(a,""))}return o+"?w="+e+"&h="+n+"&crop="+i},r={install:function(t){t.filter("imageFormatUrl",a)}},s=n("4d7F"),c=n.n(s),l=n("EJiy"),u=n.n(l),d=n("P2sY"),h=n.n(d),f=n("iCc5"),p=n.n(f),m=n("V7oC"),v=n.n(m),g=n("vDqi"),y=n.n(g),w=n("8ujH"),b=n.n(w),_=n("Qyje"),C=n.n(_),J=new(function(){function t(){p()(this,t),this.axios=y.a}return v()(t,[{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=this._parseUrl(t),o=h()({},i.query,e),a=h()({withCredentials:!0,timeout:3e3,params:o},n);return this.axios.get(i.url,a).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"transformRequest",value:function(t){if("object"===(void 0===t?"undefined":u()(t))){var e="";for(var n in t)t[n]instanceof Array&&(t[n]="["+t[n]+"]"),e+=n+"="+t[n]+"&";return e.substring(0,e.length-1)}if("string"==typeof t)return t}},{key:"post",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=h()({withCredentials:!0,timeout:3e3,headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}},n);return this.axios.post(t,this.transformRequest(e),i).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"jsonp",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new c.a((function(o,a){var r=e._parseUrl(t),s=h()({},r.query,n),c=""+r.url+C.a.stringify(s,{addQueryPrefix:!0}),l=h()({prefix:"jp",param:"jsoncallback",timeout:3e3},i);b()(c,l,(function(t,e){t?a(t):o(e)}))}))}},{key:"_parseUrl",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=(t.match(/(\?.*$)/)||[""])[0],n=t.replace(e,""),i={};return e&&(i=C.a.parse(e,{ignoreQueryPrefix:!0})),{url:n,query:i}}}]),t}()),U={getWebFEList:"/data_source/webFE_list.json",getWebFEHtml:"/data_source/webFE_list_html.json",getWebFECss:"/data_source/webFE_list_css.json",getWebFEJavascript:"/data_source/webFE_list_javascript.json",getWebFEFrame:"/data_source/webFE_list_frame.json",getWebFEUed:"/data_source/webFE_list_ued.json",getArticleList:"/data_source/articleList.json",getArticleContent1:"/data_source/articleContent_1.json",getArticleContent2:"/data_source/articleContent_2.json",getArticleContent3:"/data_source/articleContent_3.json",getArticleContent4:"/data_source/articleContent_4.json",getArticleContent5:"/data_source/articleContent_5.json",getArticleContent6:"/data_source/articleContent_6.json",getDiary2020:"/data_source/diary2020.json",getDiary2019:"/data_source/diary2019.json",getDiary2018:"/data_source/diary2018.json",getDiary2017:"/data_source/diary2017.json",getDiary2016:"/data_source/diary2016.json",getDiary2015:"/data_source/diary2015.json",getDiary2014:"/data_source/diary2014.json",getDiary2013:"/data_source/diary2013.json"},x={install:function(t){Object.defineProperty(t.prototype,"$api",{value:U}),Object.defineProperty(t.prototype,"$http",{value:J})}};var k=function(t){return t[Math.floor(Math.random()*t.length)]};var T=function t(e,n,i){if(!i)e=e.sort(),n=n.sort();if(!e||!n)return!1;if(e.length!=n.length)return!1;for(var o=0,a=e.length;o<a;o++)if(e[o]instanceof Array&&n[o]instanceof Array){if(!t(e[o],n[o]))return!1}else if(e[o]!==n[o])return!1;return!0};var E=function(){return/iphone/gi.test(window.navigator.userAgent)&&812==window.screen.height&&375==window.screen.width};var j=function(t){for(var e=document.cookie.replace(/\s/g,"").split(";"),n=0;n<e.length;n++){var i=e[n].split("=");if(i[0]==t)return decodeURIComponent(i[1])}return""};var D=function(){return j("PPU").match(/UID=(\d*)&/)?RegExp.$1:""};var F=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?decodeURIComponent(n[2]):""};var $=function(t){var e=(t=null==t?window.location.href:t).substring(t.lastIndexOf("?")+1);return e?JSON.parse('{"'+decodeURIComponent(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}};var I,O=function(t){if(!t)return"";var e=[];for(var n in t){var i=t[n];if(i instanceof Array)for(var o=0;o<i.length;++o)e.push(encodeURIComponent(n+"["+o+"]")+"="+encodeURIComponent(i[o]));else e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]))}return e.join("&")},S={afterOpen:function(){I=document.scrollingElement?document.scrollingElement.scrollTop:document.body.scrollTop,document.body.classList.add("modal-open"),document.body.style.top=-I+"px"},beforeClose:function(){document.scrollingElement?(document.body.classList.remove("modal-open"),document.scrollingElement.scrollTop=I):(document.body.classList.remove("modal-open"),document.body.scrollTop=I)}};function A(t,e){var n,i,o;return function(){i=this,o=arguments,n||(n=setTimeout((function(){n=null,t.apply(i,o)}),e))}}var L=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null)[e]};var R=function(){var t=window.document.getElementsByTagName("body");t&&t.length>0&&(t[0].style.position="fixed")};var P=function(){var t=window.document.getElementsByTagName("body");t&&t.length>0&&(t[0].style.position="relative")},M={install:function(t){Object.defineProperty(t.prototype,"$utils",{value:{arrayRandom:k,getCookie:j,getCookieUserId:D,getUrlParam:F,imageFormatUrl:a,isPhoneX:E,stopScrollOn:R,stopScrollOff:P,urlParseSearch:$,urlStringfySearch:O,arrayEqual:T,fixModalScroll:S,throttle:A,getCss:L}})}},H=n("QbLZ"),N=n.n(H),W=n("oCYn"),q={data:function(){return{show:!1,timer:0}},props:{title:{type:String,default:""},content:{type:String,default:""},duration:{type:Number,default:2e3}},watch:{content:function(t,e){t&&this.durationFade()}},computed:{computedFontSize:function(){return document.body.clientWidth<768?"14px":"16px"}},methods:{durationFade:function(){var t=this;this.show=!0,window.clearTimeout(this.timer),this.duration>0&&(this.timer=window.setTimeout((function(){t.show=!1,"function"==typeof t.clear&&t.clear()}),this.duration))}}},B=n("JFUb");var G=function(t){n("IpIY")},V=Object(B.a)(q,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"toast-wrap",style:{"font-size":t.computedFontSize}},[t.title?n("div",{staticClass:"toast-title"},[t._v(t._s(t.title))]):t._e(),n("div",{staticClass:"toast-content",domProps:{innerHTML:t._s(t.content)}})]):t._e()}),[],!1,G,null,null).exports,Y=void 0;function Q(){return Y||(Y=new(W.a.extend(V))({el:document.createElement("div")}),document.body.appendChild(Y.$el)),Y}var z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Q();return"string"==typeof t&&(t={content:t}),t=N()({},t),h()(e,t),e},X={install:function(t){Object.defineProperty(t.prototype,"$toast",{value:z})}};e.a={install:function(t,e){t.use(i.a),t.use(r),t.use(o),t.use(M),t.use(x),t.use(X)}}},bFvR:function(t,e){},caE6:function(t,e){},cwNH:function(t,e){},mxQQ:function(t,e,n){"use strict";n.r(e);var i=n("oCYn"),o=n("aRKJ"),a=n("m1cH"),r=n.n(a),s=n("1Qp6"),c=n("qbOa"),l=n("M4Ma"),u=n("AJ8+"),d=1,h=!1,f=void 0,p={mixins:[c.a],data:function(){return{data:[],renderData:[],currentYear:u.a,navDefaultList:u.c,articleImg:l.a,loading:!0,visible:!1}},created:function(){this.fetchArticleData()},mounted:function(){window.onscroll=this.$utils.throttle(this.fetchMoreData,1e3),this.loading=!1,f=window.pageYOffset},methods:{fetchArticleData:function(){var t=this;this.$http.get(this.$api.getArticleList).then((function(e){t.data=e.articleList.reverse(),t.renderData=e.articleList.slice(7*(d-1),7*d)})).catch((function(e){t.$toast(e)}))},fetchMoreData:function(){var t=this,e=window.pageYOffset,n=e-f;if(f=e,n<=0)return!1;if(!h&&Math.max(document.body.scrollHeight,document.body.offsetHeight)-(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0)-(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)<50){d+=1;var i=this.data.slice(7*(d-1),7*d);if(0==i.length)return h=!0,void this.$toast("列表已经全部加载完成");this.loading=!0,setTimeout((function(){t.loading=!1,t.renderData=[].concat(r()(t.renderData),r()(i))}),500)}},beforeDestroy:function(){null},readLocation:function(t){var e="target="+Date.parse(new Date)+"_"+t.id+"_"+t.title+"_"+t.author;return"/article_read.html?"+window.btoa(window.encodeURIComponent(e))}},components:{CopyRightFooter:s.a,NavHeader:s.h,NavFooter:s.g,Loading:s.d,Modal:s.e,FButton:s.b}},m=n("JFUb");var v=function(t){n("caE6")},g=Object(m.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("nav-header",{directives:[{name:"show",rawName:"v-show",value:t.computedWidth,expression:"computedWidth"}],attrs:{navDefaultList:t.navDefaultList},on:{"call-check-id":function(e){t.visible=!0}}}),n("div",{staticClass:"article-container"},t._l(t.renderData,(function(e,i){return n("section",{key:"article-item-"+i,staticClass:"flex-column-around-start ignore-article-item"},[n("div",{staticClass:"ignore-title-author"},[n("h2",{staticClass:"ignore-title"},[t._v(t._s(e.title))]),n("p",{staticClass:"ignore-author"},[t._v("作者："+t._s(e.author))])]),n("div",{staticClass:"flex-between-start content-container"},[n("div",{staticClass:"flex-column-between-start ignore-des-link"},[n("div",{staticClass:"ignore-des",domProps:{innerHTML:t._s(e.description)}}),n("a",{staticClass:"ignore-read-more",attrs:{href:t.readLocation(e)}},[t._v("阅读全文 >>")])]),n("div",{staticClass:"ignore-article-img",attrs:{"aspect-ratio":""}},[n("img",{staticClass:"aspect-ratio-img",attrs:{src:""+t.articleImg.path+e.id+".png",alt:"配文图片"}})])])])})),0),n("loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),n("modal",{attrs:{visible:t.visible,showClose:"",width:"500px"},on:{close:function(e){t.visible=!1}}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("身份验证")]),n("div",{staticClass:"ignore-check"},[n("p",{staticClass:"ignore-remind"},[t._v("请填写姓名，然后进行人脸拍照，提交审核通过后即可通过输入姓名访问")]),n("div",{staticClass:"ignore-visitor"},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.visitor,expression:"visitor",modifiers:{lazy:!0}}],attrs:{id:"name",type:"text",placeholder:"点击输入姓名"},domProps:{value:t.visitor},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.handleCheck.apply(null,arguments)},change:function(e){t.visitor=e.target.value}}})]),n("div",{staticClass:"ignore-face-area"},[n("i",{directives:[{name:"show",rawName:"v-show",value:!t.snap,expression:"!snap"}],staticClass:"iconfont icon-camera1 ignore-face-btn",attrs:{title:"开启摄像头"},on:{click:t.getMedia}}),n("div",{staticClass:"flex-double-center media-border"},[n("video",{directives:[{name:"show",rawName:"v-show",value:!t.action,expression:"!action"}],attrs:{id:"video",width:"240px",height:"180px",autoplay:"autoplay"}}),n("canvas",{directives:[{name:"show",rawName:"v-show",value:t.action,expression:"action"}],attrs:{id:"canvas",width:"240px",height:"180px"}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.snap&&!t.operator,expression:"snap&&!operator"}],staticClass:"flex-between-center ignore-snap"},[n("i",{staticClass:"iconfont icon-fanhui ignore-snap-cancel",style:{opacity:t.action?1:""},attrs:{title:"重新拍摄"},on:{click:t.cancelSnap}}),n("i",{directives:[{name:"show",rawName:"v-show",value:!t.action,expression:"!action"}],staticClass:"iconfont icon-ios-radio-button-on ignore-snap-action",attrs:{title:"点击拍照"},on:{click:t.takePhoto}}),n("i",{staticClass:"iconfont icon-duihao ignore-snap-confirm",style:{opacity:t.action?1:""},attrs:{title:"确认使用"},on:{click:t.confirmSnap}})])])]),n("div",{staticClass:"flex-between-center ignore-btn-area",attrs:{slot:"footer"},slot:"footer"},[n("f-button",{attrs:{type:"ghost"},nativeOn:{click:function(e){return t.handleCancel.apply(null,arguments)}}},[t._v("取消")]),n("f-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.handleSubmit.apply(null,arguments)}}},[t._v("提交")])],1)]),n("nav-footer",{directives:[{name:"show",rawName:"v-show",value:!t.computedWidth,expression:"!computedWidth"}],attrs:{navList:t.navDefaultList}}),n("copy-right-footer",{attrs:{year:t.currentYear,isMobile:!t.computedWidth}})],1)}),[],!1,v,null,null).exports;i.a.config.productionTip=!1,i.a.use(o.a),new i.a({el:"#app",render:function(t){return t(g)},mounted:function(){window._vue=this}})},qbOa:function(t,e,n){"use strict";var i=new AudioContext,o=void 0;e.a={data:function(){return{audioCtx:i,frequency:493,visitor:"",snap:!1,action:!1,operator:!1,snapDone:!1}},computed:{computedWidth:function(){return document.body.clientWidth>768}},mounted:function(){},methods:{atob:function(t){return window.decodeURIComponent(window.atob(t))},btoa:function(t){},handleCancel:function(){o&&o.stop(),this.visitor="",this.snap=!1,this.action=!1,this.operator=!1,this.snapDone=!1,this.visible=!1},handleSubmit:function(){if(/^[\u4e00-\u9fa5]{2,4}$/.test(this.visitor))if(this.snapDone){o&&o.stop();var t=this.atob("JUU2JThGJTkwJUU0JUJBJUE0JUU2JTg4JTkwJUU1JThBJTlGJTJDJUU2JTg4JTkxJUU0JUJCJUFDJUU0JUJDJTlBJUU1JUIwJUJEJUU1JUJGJUFCJUU0JUI4JUJBJUU2JTgyJUE4JUU1JUFFJUExJUU2JUEwJUI4fg==");this.$toast(t),setTimeout((function(){window.location.reload()}),2e3)}else{var e=this.atob("JUU4JUFGJUI3JUU1JUFFJThDJUU2JTg4JTkwJUU2JThCJThEJUU3JTg1JUE3");this.$toast(e)}else{var n=this.atob("JUU1JUE3JTkzJUU1JTkwJThEJUU2JUEwJUJDJUU1JUJDJThGJUU5JTk0JTk5JUU4JUFGJUFGIQ==");this.$toast(n)}},handleCheck:function(){if("caohaitao_master"==this.visitor)window.location.href="/diary";else if(!/^[\u4e00-\u9fa5]{2,4}$/.test(this.visitor)){var t=this.atob("JUU1JUE3JTkzJUU1JTkwJThEJUU2JUEwJUJDJUU1JUJDJThGJUU5JTk0JTk5JUU4JUFGJUFGIQ==");this.$toast(t)}},getMedia:function(){this.snap=!0;var t=document.getElementById("video");navigator.mediaDevices.getUserMedia({video:{width:240,height:180},audio:!1}).then((function(e){o="function"==typeof e.stop?e:e.getTracks()[0],console.log(o),t.srcObject=e,t.play()}))},takePhoto:function(){this.snapDone=!0,this.voice(),this.action=!0;var t=document.getElementById("video");document.getElementById("canvas").getContext("2d").drawImage(t,0,0,240,180)},voice:function(){var t=this.audioCtx.createOscillator(),e=this.audioCtx.createGain();t.connect(e),e.connect(this.audioCtx.destination),t.type="sine",t.frequency.value=493,e.gain.setValueAtTime(0,this.audioCtx.currentTime),e.gain.linearRampToValueAtTime(1,this.audioCtx.currentTime+.01),t.start(i.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+1),t.stop(this.audioCtx.currentTime+1)},cancelSnap:function(){this.action=!1,this.snapDone=!1},confirmSnap:function(){o.stop(),this.operator=!0}}}}});