(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{308:function(n,t,s){"use strict";s.r(t);var l=s(5),r=Object(l.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[t("strong",[n._v("需求：获取内部变量")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function f1() {\n    var n = 999;\n    function f2() {\n        return n;\n    }\n    return f2;\n}\nvar result = f1();\nconsole.log(result()); // 999\n")])])]),t("ol",[t("li",[n._v("闭包：外部获取内部局部变量，修改局部变量")]),n._v(" "),t("li",[n._v("js特性：子函数可以拿到父函数局部变量")])]),n._v(" "),t("ul",[t("li",[n._v("闭包就是函数里面的函数，通过子函数可以在外部就可以拿到父函数的局部变量，拥有这个功能的子函数就叫做闭包；")]),n._v(" "),t("li",[n._v("优点：可以在外面拿到局部变量，修改局部变量；")]),n._v(" "),t("li",[n._v("缺点：滥用闭包导致内存溢出，不会被垃圾回收机制回收；")])]),n._v(" "),t("p",[t("strong",[n._v("阮一峰的对闭包的理解")])]),n._v(" "),t("p",[n._v('各种专业文献上的"闭包"（closure）定义非常抽象，很难看懂。我的理解是，闭包就是能够读取其他函数内部变量的函数。\n由于在Javascript语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"。\n所以，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。')])])}),[],!1,null,null,null);t.default=r.exports}}]);