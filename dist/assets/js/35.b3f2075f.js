(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{331:function(e,n,s){"use strict";s.r(n);var a=s(5),t=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("在页面渲染时，短暂出现"+e._s(e.message)+"，不是直接显示 Hello Vue!")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<div id=\"app\">\n    {{ message }}\n</div>\n\n<script>\n    var app = new Vue({\n        el: '#app',\n        data() {\n            return {\n                message: 'Hello Vue!',\n        }\n    }\n<\/script>\n")])])]),n("p",[n("strong",[e._v("解决方法：使用 v-cloak，标签中直接使用 v-cloak，样式中添加")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<style type="text/css">\n  [v-cloak] {\n    display: none;\n  }\n</style>\n\n<div id="app" v-cloak>\n    {{ message }}\n</div>\n')])])])])}),[],!1,null,null,null);n.default=t.exports}}]);