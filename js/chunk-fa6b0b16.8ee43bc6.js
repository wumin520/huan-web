(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa6b0b16"],{3182:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page_"},[i("img",{staticClass:"bg_",attrs:{src:"https://cdn.youlianyc.com/image/static/41d3e38aa72a2aad19ef003c579a3fd7feffa39d.jpg"}}),i("div",{staticClass:"content_"},[i("div",{staticClass:"title_"},[e._v("欢迎加入")]),i("div",{staticClass:"class_num_"},[e._v("换换官方福利①班")]),i("div",{staticClass:"tips_"},[e._v("长按识别下方二维码进群")]),i("div",{staticClass:"img_wrap_"},[i("img",{attrs:{src:e.qrcodeUrl}})]),e._m(0)])])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hint_"},[i("p",[e._v("二维码仅支持页面内容识别")]),e._v("\n            不支持截图转发\n        ")])}],a=i("7c15"),c={data:function(){return{qrcodeUrl:""}},mounted:function(){console.log(this.$route.query.code);var e=this.$route.query.code,t={};localStorage.getItem("open_id")?(t.open_id=localStorage.getItem("open_id"),this.getWeixinQrcode(t)):e?(t.code=e,this.getWeixinQrcode(t)):this.jumpToAuthroize(t)},methods:{jumpToAuthroize:function(){var e=encodeURIComponent("".concat(location.origin,"/m/weixin_qrcode"));window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd348604f00b38a66&redirect_uri=".concat(e,"&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect")},getWeixinQrcode:function(e){var t=this;a["a"].getWeixinQrcode(e).then(function(e){return e.data}).then(function(e){if(console.log(e,"1"),"ok"===e.status){var i=e.payload,o=i.qr_code,n=(i.end_time,i.open_id);t.qrcodeUrl=o,localStorage.setItem("open_id",n)}else localStorage.setItem("open_id",""),alert(e.message)})}}},s=c,r=(i("a901"),i("2877")),d=Object(r["a"])(s,o,n,!1,null,"2a0d604e",null);d.options.__file="WeixinQrcode.vue";t["default"]=d.exports},"64cb":function(e,t,i){},a901:function(e,t,i){"use strict";var o=i("64cb"),n=i.n(o);n.a}}]);
//# sourceMappingURL=chunk-fa6b0b16.8ee43bc6.js.map