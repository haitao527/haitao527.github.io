!function(t){function e(e){for(var a,s,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);for(u&&u(e);p.length;)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={3:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push(["n7wV",0]),n()}({0:function(t,e){},IRhR:function(t,e){},IpIY:function(t,e){},M4Ma:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var a={player_body:"https://blog-vue.oss-cn-beijing.aliyuncs.com/index_cover/player-body.png",player_switch:"https://blog-vue.oss-cn-beijing.aliyuncs.com/index_cover/player-switch.png",pause:"https://blog-vue.oss-cn-beijing.aliyuncs.com/index_cover/pause.png",play:"https://blog-vue.oss-cn-beijing.aliyuncs.com/index_cover/play.png",cover:"https://blog-vue.oss-cn-beijing.aliyuncs.com/icon/head.png"},o={thumb:"https://blog-vue.oss-cn-beijing.aliyuncs.com/photo_img/thumbs/",big:"https://blog-vue.oss-cn-beijing.aliyuncs.com/photo_img/",count:24,per_line:6},i={path:"https://wx-p.oss-cn-beijing.aliyuncs.com/",skill_path:"https://wx-p.oss-cn-beijing.aliyuncs.com/skill/",head:"head.png",cv_edu:"cv_edu.png",buu:"buu.png",cuc:"cuc.png",work_chinatelecom:"work_chinatelecom.png",work_siemens:"work_siemens.png",58:"58.png",work_byte:"work_byte.png",workImg:["html","css","js","es6","ts","node","swimming","reading","basketball","cook","movie","sleep","git","vue","react","redux","antd","webpack"]},s={path:"https://blog-vue.oss-cn-beijing.aliyuncs.com/article_img/"}},aRKJ:function(t,e,n){"use strict";var a=n("yvkt"),o={install:function(t){}};var i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:140,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:105,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=t;if(o){var i=(o.match(/(\?.*$)/)||[""])[0];i&&(o=o.replace(i,""))}return o+"?w="+e+"&h="+n+"&crop="+a},s={install:function(t){t.filter("imageFormatUrl",i)}},r=n("4d7F"),c=n.n(r),l=n("EJiy"),u=n.n(l),d=n("P2sY"),p=n.n(d),g=n("iCc5"),v=n.n(g),m=n("V7oC"),f=n.n(m),h=n("vDqi"),_=n.n(h),y=n("8ujH"),C=n.n(y),b=n("Qyje"),w=n.n(b),j=new(function(){function t(){v()(this,t),this.axios=_.a}return f()(t,[{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=this._parseUrl(t),o=p()({},a.query,e),i=p()({withCredentials:!0,timeout:3e3,params:o},n);return this.axios.get(a.url,i).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"transformRequest",value:function(t){if("object"===(void 0===t?"undefined":u()(t))){var e="";for(var n in t)t[n]instanceof Array&&(t[n]="["+t[n]+"]"),e+=n+"="+t[n]+"&";return e.substring(0,e.length-1)}if("string"==typeof t)return t}},{key:"post",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=p()({withCredentials:!0,timeout:3e3,headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}},n);return this.axios.post(t,this.transformRequest(e),a).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"jsonp",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new c.a((function(o,i){var s=e._parseUrl(t),r=p()({},s.query,n),c=""+s.url+w.a.stringify(r,{addQueryPrefix:!0}),l=p()({prefix:"jp",param:"jsoncallback",timeout:3e3},a);C()(c,l,(function(t,e){t?i(t):o(e)}))}))}},{key:"_parseUrl",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=(t.match(/(\?.*$)/)||[""])[0],n=t.replace(e,""),a={};return e&&(a=w.a.parse(e,{ignoreQueryPrefix:!0})),{url:n,query:a}}}]),t}()),k={getWebFEList:"/data_source/webFE_list.json",getWebFEHtml:"/data_source/webFE_list_html.json",getWebFECss:"/data_source/webFE_list_css.json",getWebFEJavascript:"/data_source/webFE_list_javascript.json",getWebFEFrame:"/data_source/webFE_list_frame.json",getWebFEUed:"/data_source/webFE_list_ued.json",getArticleList:"/data_source/articleList.json",getArticleContent1:"/data_source/articleContent_1.json",getArticleContent2:"/data_source/articleContent_2.json",getArticleContent3:"/data_source/articleContent_3.json",getArticleContent4:"/data_source/articleContent_4.json",getArticleContent5:"/data_source/articleContent_5.json",getArticleContent6:"/data_source/articleContent_6.json",getDiary2020:"/data_source/diary2020.json",getDiary2019:"/data_source/diary2019.json",getDiary2018:"/data_source/diary2018.json",getDiary2017:"/data_source/diary2017.json",getDiary2016:"/data_source/diary2016.json",getDiary2015:"/data_source/diary2015.json",getDiary2014:"/data_source/diary2014.json",getDiary2013:"/data_source/diary2013.json"},x={install:function(t){Object.defineProperty(t.prototype,"$api",{value:k}),Object.defineProperty(t.prototype,"$http",{value:j})}};var I=function(t){return t[Math.floor(Math.random()*t.length)]};var E=function t(e,n,a){if(!a)e=e.sort(),n=n.sort();if(!e||!n)return!1;if(e.length!=n.length)return!1;for(var o=0,i=e.length;o<i;o++)if(e[o]instanceof Array&&n[o]instanceof Array){if(!t(e[o],n[o]))return!1}else if(e[o]!==n[o])return!1;return!0};var F=function(){return/iphone/gi.test(window.navigator.userAgent)&&812==window.screen.height&&375==window.screen.width};var P=function(t){for(var e=document.cookie.replace(/\s/g,"").split(";"),n=0;n<e.length;n++){var a=e[n].split("=");if(a[0]==t)return decodeURIComponent(a[1])}return""};var O=function(){return P("PPU").match(/UID=(\d*)&/)?RegExp.$1:""};var S=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?decodeURIComponent(n[2]):""};var U=function(t){var e=(t=null==t?window.location.href:t).substring(t.lastIndexOf("?")+1);return e?JSON.parse('{"'+decodeURIComponent(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}};var R,M=function(t){if(!t)return"";var e=[];for(var n in t){var a=t[n];if(a instanceof Array)for(var o=0;o<a.length;++o)e.push(encodeURIComponent(n+"["+o+"]")+"="+encodeURIComponent(a[o]));else e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]))}return e.join("&")},A={afterOpen:function(){R=document.scrollingElement?document.scrollingElement.scrollTop:document.body.scrollTop,document.body.classList.add("modal-open"),document.body.style.top=-R+"px"},beforeClose:function(){document.scrollingElement?(document.body.classList.remove("modal-open"),document.scrollingElement.scrollTop=R):(document.body.classList.remove("modal-open"),document.body.scrollTop=R)}};function T(t,e){var n,a,o;return function(){a=this,o=arguments,n||(n=setTimeout((function(){n=null,t.apply(a,o)}),e))}}var D=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null)[e]};var $=function(){var t=window.document.getElementsByTagName("body");t&&t.length>0&&(t[0].style.position="fixed")};var L=function(){var t=window.document.getElementsByTagName("body");t&&t.length>0&&(t[0].style.position="relative")},W={install:function(t){Object.defineProperty(t.prototype,"$utils",{value:{arrayRandom:I,getCookie:P,getCookieUserId:O,getUrlParam:S,imageFormatUrl:i,isPhoneX:F,stopScrollOn:$,stopScrollOff:L,urlParseSearch:U,urlStringfySearch:M,arrayEqual:E,fixModalScroll:A,throttle:T,getCss:D}})}},J=n("QbLZ"),q=n.n(J),N=n("oCYn"),V={data:function(){return{show:!1,timer:0}},props:{title:{type:String,default:""},content:{type:String,default:""},duration:{type:Number,default:2e3}},watch:{content:function(t,e){t&&this.durationFade()}},computed:{computedFontSize:function(){return document.body.clientWidth<768?"14px":"16px"}},methods:{durationFade:function(){var t=this;this.show=!0,window.clearTimeout(this.timer),this.duration>0&&(this.timer=window.setTimeout((function(){t.show=!1,"function"==typeof t.clear&&t.clear()}),this.duration))}}},Y=n("JFUb");var z=function(t){n("IpIY")},H=Object(Y.a)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"toast-wrap",style:{"font-size":t.computedFontSize}},[t.title?n("div",{staticClass:"toast-title"},[t._v(t._s(t.title))]):t._e(),n("div",{staticClass:"toast-content",domProps:{innerHTML:t._s(t.content)}})]):t._e()}),[],!1,z,null,null).exports,Q=void 0;function K(){return Q||(Q=new(N.a.extend(H))({el:document.createElement("div")}),document.body.appendChild(Q.$el)),Q}var B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=K();return"string"==typeof t&&(t={content:t}),t=q()({},t),p()(e,t),e},G={install:function(t){Object.defineProperty(t.prototype,"$toast",{value:B})}};e.a={install:function(t,e){t.use(a.a),t.use(s),t.use(o),t.use(W),t.use(x),t.use(G)}}},n7wV:function(t,e,n){"use strict";n.r(e);var a=n("oCYn"),o=n("aRKJ"),i=n("pF5v"),s=n.n(i),r=n("M4Ma"),c={data:function(){return{cvImg:r.b,options:{menu:".ignore-menu",anchors:["me","edu","work","skill","honor"]}}},methods:{}},l=n("JFUb");var u=function(t){n("IRhR")},d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container"},[t._m(0),n("full-page",{ref:"fullpage",attrs:{options:t.options,id:"fullpage"}},[n("div",{directives:[{name:"animate",rawName:"v-animate",value:{value:"bounceInLeft"},expression:"{value: 'bounceInLeft'}"}],staticClass:"section"},[n("div",{staticClass:"me-container flex-double-center"},[n("div",{staticClass:"ignore-me-section flex-column-around"},[n("img",{staticClass:"ignore-me-head",attrs:{src:""+t.cvImg.path+t.cvImg.head,alt:"头像"}}),n("div",{staticClass:"flex-column-around me-introduce-info"},[n("span",[n("span",{staticClass:"ignore-me-name"},[t._v("曹海涛")]),n("span",{staticClass:"ignore-me-company"},[t._v(" @ 字节跳动")])]),n("span",{staticClass:"ignore-me-position"},[t._v("一个奋斗型的享乐主义者 • 与产品经理友好相处的前端工程师")])]),n("div",{staticClass:"ignore-me-contact-container"},[n("span",{staticClass:"iconfont icon-youxiang ingnore-icon"}),n("a",{staticClass:"ignore-me-contact",attrs:{href:"mailto:cht527@126.com"}},[t._v("cht527@126.com")]),n("span",{staticClass:"iconfont icon-ziyuan ingnore-icon"}),n("a",{staticClass:"ignore-me-contact",attrs:{href:"http://www.linkedin.com/in/caohaitaolinkedin"}},[t._v("LinkedIn")]),n("span",{staticClass:"iconfont icon-github ingnore-icon"}),n("a",{staticClass:"ignore-me-contact",attrs:{href:"https://github.com/cht527"}},[t._v("GitHub")])])])])]),n("div",{staticClass:"section"},[n("div",{staticClass:"flex-double-center edu-container"},[n("div",{staticClass:"edu-section flex-column-around"},[n("h2",{staticClass:"ignore-h2-title"},[t._v("教育背景")]),n("img",{attrs:{src:""+t.cvImg.path+t.cvImg.cv_edu,alt:"礼服帽"}}),n("div",{staticClass:"edu-experience flex-between-center"},[n("div",{staticClass:"time-line-contaienr flex-column-around"},[n("span",{staticClass:"ignore-time"},[t._v("2016")]),n("span",{staticClass:"ignore-line"}),n("span",{staticClass:"ignore-time"},[t._v("2014")]),n("span",{staticClass:"ignore-line"}),n("span",{staticClass:"ignore-time"},[t._v("2010")])]),n("div",{staticClass:"ignore-edu-content"},[n("img",{attrs:{src:""+t.cvImg.path+t.cvImg.cuc,alt:"中国传媒大学"}}),n("span",{staticClass:"ignore-school"},[t._v("中国传媒大学 · 通信工程")]),n("img",{attrs:{src:""+t.cvImg.path+t.cvImg.buu,alt:"北京联合大学"}}),n("span",{staticClass:"ignore-school"},[t._v("北京联合大学 · 自动化")])])])])])]),n("div",{staticClass:"section"},[n("div",{staticClass:"flex-double-center work-container"},[n("div",{staticClass:"work-section"},[n("h2",{staticClass:"ignore-h2-title"},[t._v("工作背景")]),n("div",{staticClass:"work-grid-container"},[n("div",{staticClass:"work-title flex-column-around"},[n("img",{attrs:{src:""+t.cvImg.path+t.cvImg.work_byte,alt:"字节跳动"}}),n("span",{staticClass:"ignore-company"},[t._v("北京字节跳动科技有限公司")]),n("span",{staticClass:"ignore-position"},[t._v("2019.05-至今 前端开发工程师")])]),n("div",{staticClass:"ignore-work-content"},[t._v("\n                            Data-广告系统，营销科学团队，"),n("a",{attrs:{href:"https://yuntu.oceanengine.com/"}},[t._v("巨量引擎云图")])]),n("div",{staticClass:"work-title flex-column-around"},[n("img",{attrs:{src:""+t.cvImg.path+t.cvImg[58],alt:"58集团"}}),n("span",{staticClass:"ignore-company"},[t._v("58集团-房产事业群")]),n("span",{staticClass:"ignore-position"},[t._v("2018.07-2019.05　高级前端开发工程师")])]),n("div",{staticClass:"ignore-work-content"},[t._v("\n                            房产前端技术部-PWA技术负责人"),n("br"),n("br"),t._v("\n                            《基于Vue多页面工程的骨架屏生成方案》"),n("br"),n("br"),t._v("\n                            58租房•2019春节运营活动 "),n("br"),n("br")]),n("div",{staticClass:"work-title flex-column-around"},[n("img",{attrs:{src:""+t.cvImg.path+t.cvImg.work_chinatelecom,alt:"中国电信"}}),n("span",{staticClass:"ignore-company"},[t._v("中国电信-移动互联网事业部")]),n("span",{staticClass:"ignore-position"},[t._v("2016.07-2018.07 Web前端工程师")])]),n("div",{staticClass:"ignore-work-content"},[n("a",{attrs:{href:"http://www.waiqin.com.cn/"}},[t._v("中国电信外勤助手")]),t._v("-基于位置服务的外勤管理软件。"),n("br"),t._v("商贸团队前端组负责人，工作流审批等核心业务开发，基于网易云信Web SDK开发企业IM插件,\n                    前端工程性能优化\n                        ")])])])])]),n("div",{staticClass:"section"},[n("div",{staticClass:"skill-container flex-double-center"},[n("div",{staticClass:"skill-section"},[n("h2",{staticClass:"ignore-h2-title"},[t._v("专业技能·兴趣爱好")]),n("div",{staticClass:"skill-content"},t._l(t.cvImg.workImg,(function(e,a){return n("img",{key:e+"-"+a,staticClass:"skill-item",attrs:{src:""+t.cvImg.skill_path+e+".png",alt:""+e}})})),0)])])]),n("div",{staticClass:"section"},[n("div",{staticClass:"flex-double-center honor-container"},[n("div",{staticClass:"honor-section flex-column-around"},[n("h2",{staticClass:"ignore-h2-title"},[t._v("获奖&认证")]),n("div",{staticClass:"honor-content flex-column-around"},[n("span",{staticClass:"ignore-honor-item"},[t._v("PMP（项目管理专业人士资格认证）")]),n("span",{staticClass:"ignore-honor-item"},[t._v("字节跳动spot bonus")]),n("span",{staticClass:"ignore-honor-item"},[t._v("证券从业资格证")]),n("span",{staticClass:"ignore-honor-item"},[t._v('"西门子"杯工业自动化挑战赛 全国一等奖')]),n("span",{staticClass:"ignore-honor-item"},[t._v('"高教社"杯全国大学生数学建模竞赛 北京赛区二等奖')]),n("span",{staticClass:"ignore-honor-item"},[t._v("第二十八届全国大学生物理竞赛 三等奖")]),n("span",{staticClass:"ignore-honor-item"},[t._v("北京市优秀毕业生")]),n("span",{staticClass:"ignore-honor-item"},[t._v("校长特别奖学金")])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"ignore-menu"},[e("li",{staticClass:"ignore-li active",attrs:{"data-menuanchor":"me"}},[e("a",{staticClass:"ignore-a",attrs:{href:"#me"}})]),e("li",{staticClass:"ignore-li",attrs:{"data-menuanchor":"edu"}},[e("a",{staticClass:"ignore-a",attrs:{href:"#edu"}})]),e("li",{staticClass:"ignore-li",attrs:{"data-menuanchor":"work"}},[e("a",{staticClass:"ignore-a",attrs:{href:"#work"}})]),e("li",{staticClass:"ignore-li",attrs:{"data-menuanchor":"skill"}},[e("a",{staticClass:"ignore-a",attrs:{href:"#skill"}})]),e("li",{staticClass:"ignore-li",attrs:{"data-menuanchor":"honor"}},[e("a",{staticClass:"ignore-a",attrs:{href:"#honor"}})])])}],!1,u,null,null).exports;a.a.config.productionTip=!1,a.a.use(s.a),a.a.use(o.a),new a.a({el:"#app",render:function(t){return t(d)},mounted:function(){window._vue=this}})}});