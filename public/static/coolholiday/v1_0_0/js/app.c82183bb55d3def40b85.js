webpackJsonp([2],{"/Dt5":function(e,t){},"/XEc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=new(n("nuyN"));console.log(o),t.default=o},"6v5m":function(e,t,n){"use strict";var o,i=n("a3Yh"),a=n.n(i),r=n("3cXf"),s=n.n(r),u=n("hRKE"),c=n.n(u);function l(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);if(null!=n)return unescape(n[2]);e="app_type";var o=window.location.href,i=new RegExp("(^|/)"+e+"/([^/]*)(/|$)").exec(o);return null!=i?unescape(i[2].slice(0,1)):null}var d=(o={init:function(e){switch(this.id=e.id||"app_iframe",null==l("app_type")?"4":l("app_type")){case"0":this.app_name=e.app_name||"sdjj";break;case"1":this.app_name=e.app_name||"aiyou";break;case"2":this.app_name=e.app_name||"dress";break;case"3":this.app_name=e.app_name||"sdjj";break;case"4":default:this.app_name=e.app_name||"taojiji"}},t:function(){return(new Date).getTime()},jump:function(e,t){var n;if(t=t||{},console.log(t),!document.getElementById(this.id)){var o=document.createElement("iframe");o.id=this.id,o.style.display="none",document.getElementsByTagName("body")[0].appendChild(o)}n=this.app_name+"://"+e;var i=0;for(var a in t)n+=0==i?"?":"&","object"==c()(t[a])?n+=a+"="+s()(t[a]):n+=a+"="+encodeURIComponent(t[a]),i++;n+=0==i?"?t="+this.t():"&t="+this.t(),console.log(n),document.getElementById(this.id).setAttribute("src",n)},checkLogin:function(){this.jump("checkLogin")},login:function(e){this.jump("login",e)},logout:function(e){try{console.log("退出登入"),sessionStorage.setItem("tjj_fission_user",s()({})),localStorage.setItem("tjj_fission_user",s()({})),this.jump("logout"),e&&e.href&&window.location.replace(e.href)}catch(e){console.log(e)}},close:function(){this.jump("close")},getNet:function(){this.jump("networkType ")},paySuccess:function(e){this.jump("paySuccess",e)},payFaild:function(e){this.jump("payFalure",e)},buy:function(e){this.jump("buy",e)},goods:function(e){this.jump("goods",e)},web:function(e){this.jump("web",e)},goods_detail:function(e){this.jump("detail.sdjj.com/goods",e)},call:function(e){this.jump("call",e)},special:function(e){this.jump("special",e)},brand:function(e){this.jump("brand",e)},openWeb:function(e){this.web({url:e})},activity:function(e){this.jump("activity",e)},share:function(e){this.jump("share",e)},toSecondDetail:function(e){this.jump("toSecondDetail",e)},getOS:function(){this.jump("getOS")}},a()(o,"close",function(){this.jump("close")}),a()(o,"backHome",function(){this.jump("backHome")}),a()(o,"coupon",function(e){this.jump("coupon",e)}),a()(o,"hxChat",function(e){this.jump("hxChat",e)}),a()(o,"category",function(e){this.jump("classifySpecial",e)}),a()(o,"getNoReadNum",function(e){this.jump("getNoReadNum",e)}),a()(o,"shanyueHome",function(){this.jump("shanyueHome")}),a()(o,"shanyue",function(e){this.jump("shanyue",e)}),a()(o,"pageCode",function(e){this.jump("pageCode",e)}),a()(o,"experienceVip",function(){this.jump("experienceVip")}),a()(o,"pay",function(e){this.jump("pay",e)}),a()(o,"startShopHome",function(e){this.jump("startShopHome",e)}),a()(o,"startPushSet",function(e){this.jump("startPushSet",e)}),o);d.init({}),t.a=d},GPme:function(e,t){},"VW+w":function(e,t){var n,o,i,a,r;n=document,o=window,i=n.documentElement,a="orientationchange"in window?"orientationchange":"resize",r=function(){var e=i.clientWidth;if(e){var t=e/375*16;i.style.fontSize=t+"px";var n=parseFloat(window.getComputedStyle(document.documentElement).fontSize);n/t!=1&&Math.round(t)!=n&&(i.style.fontSize=t/(n/t)+"px")}},n.addEventListener&&(o.addEventListener(a,r,!1),n.addEventListener("DOMContentLoaded",r,!1))},"X/X+":function(e,t){},aDZN:function(e,t){},gxjD:function(e,t,n){e.exports=n.p+"img/loading_pic.d556efd.png"},lRwf:function(e,t){e.exports=Vue},mNlw:function(e,t,n){"use strict";n("ZLEe"),n("3cXf");var o=n("6v5m");n.d(t,"f",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"e",function(){return s}),n.d(t,"h",function(){return u}),n.d(t,"d",function(){return c}),n.d(t,"b",function(){return l}),n.d(t,"g",function(){return p}),n.d(t,"a",function(){return h});var i=function(e){var t,n,o,i,a=new RegExp("(^|&)"+e+"=([^&]*)","ig");if(("null"==(t=window.location.search.substr(1).match(a))||"undefined"==t)&&(t=null),t){var r=t[t.length-1].split("=")[1];return"null"==r||"undefined"==r?null:r}return("null"==(t=(n=e,o=window.location.pathname.split("/"),(i=o.lastIndexOf(n))<0?null:o[i+1]))||"undefined"==t)&&(t=null),t||null};var a=function(){return"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)},r=function(){var e=i("session_id"),t=i("os");return e||t?sessionStorage.getItem("tjj_fission_user")?JSON.parse(sessionStorage.getItem("tjj_fission_user")):{}:localStorage.getItem("tjj_fission_user")?JSON.parse(localStorage.getItem("tjj_fission_user")):{}},s=function(){var e=i("os")?i("os").toLowerCase():"";return"android"==e||"ios"==e?1:i("session_id")?2:0},u=function(e,t){if(1==s())return o.a.share({shareType:0,content:e.content,title:e.title,wxMiniPath:e.wxMiniPath,shareUrl:e.shareUrl,imgUrl:e.imgUrl}),void(t&&"function"==typeof t&&(window.shareResult=function(e){try{e.split(",")[0]&&t()}catch(t){console.log(t),console.log(e)}}));"function"==typeof e.isMiniFn&&e.isMiniFn()};var c=function(e){if(document.title=e||"淘集集",i("os")&&"ios"==i("os").toLocaleLowerCase()){var t=document.createElement("iframe");t.style.display="none",t.src="/setTitle.html?r="+Math.random(),document.body.appendChild(t),setTimeout(function(e){document.body.removeChild(t)},300)}},l=function(){if(localStorage.getItem("TJJ_fissile_uuid"))return localStorage.getItem("TJJ_fissile_uuid");var e=d(8)+"-"+d(4)+"-"+d(4)+"-"+d(12);return localStorage.setItem("TJJ_fissile_uuid",e),e},d=function(e){var t="";!e&&(e=1);for(var n=1;n<=e;n++){t+=Math.floor(16*Math.random()).toString(16)+""}return t},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=encodeURI(e.return_url||window.location.href);if(i("session_id")){var n="";n=i("activity_type")?"/pages/login/login?b_user_id="+i("b_user_id")+"&s_user_id="+i("earn_id")+"&activity_type="+i("activity_type"):"/pages/login/login?b_user_id="+i("b_user_id")+"&earn_id="+i("earn_id"),wx.miniProgram.navigateTo({url:n})}else if(i("os"))o.a.init({app_name:"taojiji"}),o.a.login({reload:1,return_url:t});else if(a()){var r=e.loginParams||"";window.location.href=location.origin+"/coolholiday.php/v1_0_0/Login/wxLogin/uuid/"+l()+r}},h=function(e){var t=document.getElementsByTagName("body")[0];if(e){var n=document.body.scrollTop||document.documentElement.scrollTop;t.className.indexOf("overflowHide")<0&&(t.style.top=-1*n+"px"),t.className=t.className+" overflowHide"}else{var o=-1*parseFloat(t.style.top)||0;t.className=t.className.replace(/overflowHide/g,""),t.className.indexOf("overflowHide")<0&&(t.style.top="0px"),window.scrollTo(0,o)}}},rwYg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("31w/");var o=n("unaK"),i=n("lRwf"),a=n.n(i),r=function(e,t,n){if(errorLogUpload){var o=(e.stack||"").match(/at\sVueComponent.created\s\(\S+\)/),i=o?e.message+" "+o:e.message;errorLogUpload({logLevel:4,errType:11,apiError:{message:i,uri:t?location.origin+"/coolholiday/view/v1_0_0"+t.$route.fullPath:location.href}})}},s={created:function(){document.getElementById("taoLoading").style.display="none"}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1)},staticRenderFns:[]};var c=n("C7Lr")(s,u,!1,function(e){n("X/X+")},null,null).exports,l=(n("VW+w"),n("3XdE")),d=n("3cXf"),p=n.n(d),h=(n("6v5m"),n("mNlw"));location.host.indexOf("fissile.tjjshop.cn")>=0&&n("/XEc");var f=function(e,t){var n,o=new RegExp("(^|&)"+t+"=([^&]*)","ig");if(("null"==(n=("?"+e.split("?")[1]).substr(1).match(o))||"undefined"==n)&&(n=null),n){var i=n[n.length-1].split("=")[1];return"null"==i||"undefined"==i?null:i}return("null"==(n=m(e,t))||"undefined"==n)&&(n=null),n||null},m=function(e,t){var n=e.split("?")[0].split("/"),o=n.lastIndexOf(t);return o<0?null:n[o+1]},g=f(location.href,"session_id"),v=f(location.href,"os"),_=f(location.href,"wxLoginBack"),j=function(e,t,n,o,i,a){var r=Object(h.c)();Object(h.d)(e.meta.title);var s=document.getElementById("taoLoading");"none"!=s.style.display&&(s.style.display="none"),sessionStorage.getItem("TJJ_fissile_shareUrl")&&1!=_||sessionStorage.setItem("TJJ_fissile_shareUrl",location.href),o||(!v&&!g||r.user_id)&&1!=_||("function"==typeof a&&a(),function(e,t,n){var o={},i=t.fullPath;switch(e){case"save":f(i,"user_id")&&(o.user_id=f(i,"user_id")),f(i,"token")&&(o.token=f(i,"token")),f(i,"uuid")&&(o.uuid=f(i,"uuid")),f(i,"os")&&(o.os=f(i,"os")),f(i,"session_id")&&(o.session_id=f(i,"session_id"))}g||v?sessionStorage.setItem("tjj_fission_user",p()(o)):localStorage.setItem("tjj_fission_user",p()(o)),console.log(o.user_id)}("save",e),r=Object(h.c)()),!e.meta.requireAuth||r.user_id?n():Object(h.g)({return_url:"https://"+location.host+"/"+i+e.path})};a.a.use(l.a);var w="zz618/view";w+="/v1_0_0";var y=new l.a({mode:"history",base:w,routes:[{path:"/index*(.*)+",name:"index",component:function(e){return n.e(0).then(function(){var t=[n("BgeZ")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"邀请好友"}},{path:"*(.*)+",name:"default",component:function(e){return n.e(0).then(function(){var t=[n("BgeZ")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"邀请好友"}}],scrollBehavior:function(e,t,n){return n?(console.log(n),n):{x:0,y:0}}}),b=!1;y.beforeEach(function(e,t,n){j(e,0,n,b,w,function(){b=!0})});var S=y,T=n("hRKE"),L=n.n(T),x={serverUrl:"http://"+window.location.host+"/index.php/Jufu/ApiData/index",img_url:window.location.host.indexOf("fission.taojiji.com")>=0?"https://static.shandjj.com":"http://staticgrowth.shan666.com",uid:"",user:"",device:""},O=n("rVsN"),E=n.n(O),U=n("4YfN"),C=n.n(U),k=n("ZLEe"),D=n.n(k),I=n("84iU"),M=n.n(I),N=n("CtzY"),J=n.n(N),$=0;M.a.interceptors.request.use(function(e){e.url.indexOf("/showLoading/1")>-1&&($++,a.a.prototype.$loading.show());var t={uuid:localStorage.getItem("TJJ_fissile_uuid")||"wap",os:"wap",_t:Date.parse(new Date)/1e3},n=Object(h.c)();return 1==Object(h.e)()&&D()(n).length>0&&(t.os=n.os),D()(n).length>0&&(t.uuid=n.uuid,t.user_id=n.user_id,t.token=n.token,t.session_id=n.session_id),"post"==e.method?(e.headers={"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded"},e.data.appLog?(e.headers={"Content-Type":"application/json; charset=UTF-8"},e.data=e.data.logData):e.data=J.a.stringify(C()({},e.data,t))):"get"==e.method&&(e.headers=C()({Accept:"application/json","Content-Type":"application/json; charset=UTF-8"},e.headers),e.params=C()({},e.params,t)),e.timeout=1e4,e},function(e){return E.a.reject(e)}),M.a.interceptors.response.use(function(e){if("string"==typeof e.data)try{e.data=JSON.parse(e.data)}catch(e){console.log(e)}if(--$<=0&&(a.a.prototype.$loading.hide(),$=0),!e.data||e.data.curl_errno){var t=e.config,n=t.method,o=t.url,i=t.params,r=e.data?e.data.curl_errno?"curl_errno":"error":"no data";errorLogUpload&&errorLogUpload({logLevel:3,errType:2,apiError:{params:p()(i),uri:location.href,apiUri:o,data:p()(e.data),message:r,method:n,code:200}})}return e},function(e){var t=e.config,n=t.method,o=t.url,i=t.params;return errorLogUpload&&errorLogUpload({logLevel:3,errType:2,apiError:{params:p()(i),uri:location.href,apiUri:o,data:"",message:e.toString(),method:n,code:e.request.status}}),--$||a.a.prototype.$loading.hide(),E.a.reject(e)});var B=M.a,H=n("aA9S"),P=n.n(H),R=(n("Jd1N"),n("r6k1"),{getData:function(e,t,n){var o={os:Object(h.f)("os")?Object(h.f)("os"):"wap",user_id:Object(h.f)("user_id")?Object(h.f)("user_id"):null,uuid:Object(h.f)("uuid")?Object(h.f)("uuid"):null,token:Object(h.f)("token")?Object(h.f)("token"):null};if(t){t=P()(t,o),D()(t).forEach(function(e){t[e]?t[e]=t[e]:t[e]=null});var i=[];D()(t).forEach(function(e){return i.push(e+"="+t[e])}),-1===e.search(/\?/)?e+="?"+i.join("&"):e+="&"+i.join("&")}fetch(e,{method:"GET",credentials:"include"}).then(function(e){return e.json()}).then(function(i){if(!i){Vue.prototype.$loading.hide();var a=e,r=t?P()(t,o):o,s=i?p()(i):"no data";errorLogUpload&&errorLogUpload({logLevel:3,errType:2,apiError:{params:p()(r),uri:location.href,apiUri:a,data:p()(i),message:s,method:"GET",code:200}})}n(i)}).catch(function(t){var n=e,i=i?P()(i,o):o;errorLogUpload&&errorLogUpload({logLevel:3,errType:2,apiError:{params:p()(i),uri:location.href,apiUri:n,data:"",message:t.toString(),method:"GET",code:t.request.status}})})},getDataJava:function(e,t,n){var o={os:Object(h.f)("os")?Object(h.f)("os"):null,user_id:Object(h.f)("user_id")?Object(h.f)("user_id"):null,uuid:Object(h.f)("uuid")?Object(h.f)("uuid"):null,token:Object(h.f)("token")?Object(h.f)("token"):null};if(t){t=P()(t,o),D()(t).forEach(function(e){t[e]?t[e]=t[e]:t[e]=null});var i=[];D()(t).forEach(function(e){return i.push(e+"="+t[e])}),-1===e.search(/\?/)?e+="?"+i.join("&"):e+="&"+i.join("&")}fetch(e,{method:"GET",credentials:"include"}).then(function(e){return e.json()}).then(function(i){if(console.log(i,8888),!i){Vue.prototype.$loading.hide();var a=e,r=t?P()(t,o):o,s=i?p()(i):"no data";errorLogUpload&&errorLogUpload({logLevel:3,errType:2,apiError:{params:p()(r),uri:location.href,apiUri:a,data:p()(i),message:s,method:"GET",code:200}})}n(i)}).catch(function(t){var n=e,i=i?P()(i,o):o;errorLogUpload&&errorLogUpload({logLevel:3,errType:2,apiError:{params:p()(i),uri:location.href,apiUri:n,data:"",message:t.toString(),method:"GET",code:t.request.status}})})},postData:function(e,t,n){fetch(e,{method:"POST",credentials:"include",headers:new Headers({"Content-Type":"application/json"}),body:p()(t)}).then(function(e){return e.json()}).then(function(o){if(!o){var i=e,a=t,r=o?p()(o):"no data";errorLogUpload&&errorLogUpload({logLevel:3,errType:2,apiError:{params:p()(a),uri:location.href,apiUri:i,data:p()(o),message:r,method:"POST",code:200}})}n(o.data)}).catch(function(t){var n=e,o=o?P()(o,baseData):baseData;errorLogUpload&&errorLogUpload({logLevel:3,errType:2,apiError:{params:p()(o),uri:location.href,apiUri:n,data:"",message:t.toString(),method:"POST",code:t.request.status}})})}}),A=R;function X(e,t,n){var o=this;this.obj=e,this.binding=t,this.touchType=n,this.vueTouches={x:0,y:0},this.vueMoves=!0,this.vueLeave=!0,this.longTouch=!0,this.vueCallBack="object"==L()(t.value)?t.value.fn:t.value,this.obj.addEventListener("touchstart",function(e){o.start(e)},!1),this.obj.addEventListener("touchend",function(e){o.end(e)},!1),this.obj.addEventListener("touchmove",function(e){o.move(e)},!1)}X.prototype={start:function(e){this.vueMoves=!0,this.vueLeave=!0,this.longTouch=!0,this.vueTouches={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY},this.time=setTimeout(function(){this.vueLeave&&this.vueMoves&&("longtap"==this.touchType&&this.vueCallBack(this.binding.value,e),this.longTouch=!1)}.bind(this),1e3)},end:function(e){var t=e.changedTouches[0].pageX-this.vueTouches.x,n=e.changedTouches[0].pageY-this.vueTouches.y;clearTimeout(this.time),Math.abs(t)>10||Math.abs(n)>100?("swipe"==this.touchType&&this.vueCallBack(this.binding.value,e),Math.abs(t)>Math.abs(n)?(t>10&&"swiperight"==this.touchType&&this.vueCallBack(this.binding.value,e),t<-10&&"swipeleft"==this.touchType&&this.vueCallBack(this.binding.value,e)):(n>10&&"swipedown"==this.touchType&&this.vueCallBack(this.binding.value,e),n<-10&&"swipeup"==this.touchType&&this.vueCallBack(this.binding.value,e))):this.longTouch&&this.vueMoves&&("tap"==this.touchType&&this.vueCallBack(this.binding.value,e),this.vueLeave=!1)},move:function(e){this.vueMoves=!1}};var q={install:function e(t,n){e.installed||(e.installed=!0,t.myGlobalMethod=function(){},t.directive("longtap",{bind:function(e,t){new X(e,t,"longtap")}}),t.mixin({created:function(){}}),t.prototype.$myMethod=function(e){},t.prototype.$global=x,t.prototype.$http=B,t.prototype.$fetch=A)}},F={user_id:Object(h.f)("user_id")?Object(h.f)("user_id"):-1,uuid:Object(h.f)("uuid")?Object(h.f)("uuid"):Object(h.f)("user_id"),version:Object(h.f)("version")};var V={batchUrl:(window.location.href.indexOf("http://growth.taojiji")>-1?"https://c.taojiji.com":window.location.href.indexOf("https://growth.taojiji")>-1?"https://c.taojiji.com":window.location.href.indexOf("https://fissile.taojiji.com")>-1?"https://c.taojiji.com":window.location.href.indexOf("http://fissile.taojiji.com")>-1?"https://c.taojiji.com":"https://testc.taojiji.com")+"/v1.0.0/h/warehouse/appevent/client/batch/receive",batchData:{app_market:"-1",client_version:F.version,client_latitude:null,client_longitude:null,cpu_id:null,device_board:null,device_display:null,device_hardware:null,device_iccid:null,device_id:null,device_imei:null,device_imsi:null,device_meid:null,device_model:null,device_name:null,device_resolution:null,device_serial:null,login_mode:null,network_type:null,os_version:null,wifi_mac:null,event_record:[],platform:"3",product_line:"1",uuid:F.uuid},batchAjax:function(e){this.batchData.event_record=this.getData();var t=this;fetch(t.batchUrl,{method:"POST",credentials:"include",headers:new Headers({"Content-Type":"application/json"}),body:p()(t.batchData)}).then(function(e){return e.json()}).then(function(n){if(1e4!=n.code){var o=t.batchUrl,i=t.batchData,a=n?p()(n):"no data";errorLogUpload&&errorLogUpload({logLevel:3,errType:2,apiError:{params:p()(i),uri:location.href,apiUri:o,data:p()(n),message:a,method:"POST",code:200}})}e(n)}).catch(function(e){var n=t.batchUrl,o=t.batchData;errorLogUpload&&errorLogUpload({logLevel:3,errType:2,apiError:{params:p()(o),uri:location.href,apiUri:n,data:"",message:e.toString(),method:"POST",code:e.request.status}})})},saveData:function(e){window.localStorage.setItem("tapSaveArr",p()(e))},getData:function(){return window.localStorage.getItem("tapSaveArr")?JSON.parse(window.localStorage.getItem("tapSaveArr")):[]},clearData:function(){window.localStorage.removeItem("tapSaveArr")},batchClick:function(e,t,n){var o=this,i=[],a=null==window.sessionStorage.getItem("prelocation")?-1:window.sessionStorage.getItem("prelocation"),r="";if(t.query.name&&null!=t.query.name){var s=[];for(var u in t.query)s.push(t.query[u]);for(var c=0;c<s.length;c++)c==s.length-1?r+=s[c]:r+=s[c]+"$_$"}var l={event_id:((new Date).getTime()+F.uuid).toString(),fun_name:r.toString(),fun_type:t.code.toString(),log_time:function(){var e=new Date,t=e.getMonth()+1,n=e.getDate();t>=1&&t<=9&&(t="0"+t),n>=0&&n<=9&&(n="0"+n);var o=e.getHours();o<=9&&(o="0"+o);var i=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),a=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return e.getFullYear()+"-"+t+"-"+n+" "+o+":"+i+":"+a}(),pos_id:a.toString(),user_id:F.user_id,param1:null,param2:null,param3:null,param4:null,param5:null,param6:null,param7:null,param8:null,param9:null,param10:null,gender:null,is_new_user:null,is_pay_user:null};if(t.extra&&null!=t.extra)for(var u in t.extra)l[u]=t.extra[u].toString();window.sessionStorage.setItem("prelocation",l.fun_type),i.push(l),o.saveData(i),o.batchAjax(function(e){var t=0;if(1e4!=e.code)var n=setInterval(function(){o.batchAjax(function(e){1e4!=e.code?3==++t&&clearInterval(n):clearInterval(n)})});else o.clearData()})}},G=(n("l1y0"),{name:"loading",components:{Loading:n("U6Ha").a},data:function(){return{isShow:!1}},created:function(){},methods:{show:function(){this.isShow=!0},hide:function(){var e=this;setTimeout(function(){e.isShow=!1},2e3)}}}),Y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",[t("div",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"isShow"}],staticClass:"loading-wrap"},[t("div",{staticClass:"loading"},[t("Loading",{staticClass:"loading-bar",attrs:{color:"white"}}),this._v(" "),t("span",{staticClass:"text"},[this._v("加载中...")])],1)])])},staticRenderFns:[]};var z=n("C7Lr")(G,Y,!1,function(e){n("/Dt5")},"data-v-42ce43d6",null).exports,Z={install:function(e){var t=new(e.extend(z));t.$mount(document.createElement("div")),document.body.appendChild(t.$el),e.prototype.$loading={show:function(){t.isShow=!0},hide:function(){t.isShow=!1}}}};n("xNag"),n("aDZN");a.a.use(o.a,{preLoad:2,error:n("gxjD")}),a.a.use(Z),a.a.config.productionTip=!1,a.a.prototype.$tapConfig=V,a.a.config.errorHandler=r,a.a.config.warnHandler=r,a.a.use(q),new a.a({el:"#app",router:S,components:{App:c},template:"<App/>"})},xNag:function(e,t){}},["rwYg"]);