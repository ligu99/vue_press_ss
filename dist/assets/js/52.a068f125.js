(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{348:function(t,n,e){"use strict";e.r(n);var s=e(5),o=Object(s.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[t("strong",[this._v("需求：字节单位换算的场景")])]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("function byteConvert(bytes) {\n    if (isNaN(bytes)) {\n        return '';\n    }\n    let symbols = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];\n    let exp = Math.floor(Math.log(bytes) / Math.log(2));\n    if (exp < 1) {\n        exp = 0;\n    }\n    let i = Math.floor(exp / 10);\n    bytes = bytes / Math.pow(2, 10 * i);\n\n    if (bytes.toString().length > bytes.toFixed(2).toString().length) {\n        bytes = bytes.toFixed(2);\n    }\n    return bytes + ' ' + symbols[i];\n};\n\n// 函数调用\nconsole.log(byteConvert(109784));//107.21 KB\n")])])]),t("p",[this._v("详解：https://juejin.cn/post/6844904018238504967")])])}),[],!1,null,null,null);n.default=o.exports}}]);