(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{333:function(a,e,t){"use strict";t.r(e);var s=t(5),n=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h5",{attrs:{id:"emit-传递一个参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emit-传递一个参数"}},[a._v("#")]),a._v(" $emit 传递一个参数")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("//子组件\nthis.$emit('changeValue',value);\n\n//父组件\n<posilCom @changeValue=\"handleValue(val)\"></posilCom>\nhandleValue(val) {\n  this.val = val;\n}\n")])])]),a._v(" "),e("h5",{attrs:{id:"emit-传递多个参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emit-传递多个参数"}},[a._v("#")]),a._v(" $emit 传递多个参数")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("//子组件\nthis.$emit('changeValue',value,true);\n\n//父组件\n<posilCom @changeValue=\"handleValue(arguments)\"></posilCom>\nhandleValue(arr) {\n  this.val = arr[0];\n  this.isActive = arr[1];\n}\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);