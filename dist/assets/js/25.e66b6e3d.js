(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{320:function(e,n,t){"use strict";t.r(n);var s=t(5),i=Object(s.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[n("strong",[e._v("需求：Element Ui 同时验证多个表单")])]),e._v(" "),n("ul",[n("li",[e._v("以下代码报错\nPromise 调用 this 有问题")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('let p1 = new Promise(function(resolve, reject) {\n    this.$refs["gerenformRefa"].validate(valid => {\n        if (valid) {\n            resolve();\n        }\n    });\n});\n\nlet p2 = new Promise(function(resolve, reject) {\n    this.$refs["formRefb"].validate(valid => {\n        if (valid) {\n            resolve();\n        }\n    });\n});\n\nPromise.all([p1]).then(function() {\n    console.log("666");\n});\n')])])]),n("ul",[n("li",[e._v("正确代码")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('let _this = this;\nlet p1 = new Promise(function(resolve, reject) {\n    _this.$refs["formRefa"].validate(valid => {\n        if (valid) {\n            resolve();\n        }\n    });\n});\n\nlet p2 = new Promise(function(resolve, reject) {\n    _this.$refs["formRefb"].validate(valid => {\n        if (valid) {\n            resolve();\n        }\n    });\n});\n\nPromise.all([p1]).then(function() {\n    console.log("666");\n});\n')])])]),n("ul",[n("li",[e._v("原因：\npromsie 里压根就读不到 this，可以理解：取不到全局变量，作用域的问题，promise 里的 this 和 vue 中的 this 指向不同，promise 外面定义 let _this = this ，然后在 promise 里使用 _this 就可以执行方法了")])])])}),[],!1,null,null,null);n.default=i.exports}}]);