(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{316:function(a,n,t){"use strict";t.r(n);var s=t(5),e=Object(s.a)({},(function(){var a=this,n=a._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h5",{attrs:{id:"let"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#let"}},[a._v("#")]),a._v(" let")]),a._v(" "),n("p",[a._v("变量声明不会提前\n块级作用域\nlet 不允许相同作用域内多次声明同一变量")]),a._v(" "),n("h5",{attrs:{id:"const"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#const"}},[a._v("#")]),a._v(" const")]),a._v(" "),n("p",[a._v("声明常量，声明后不能再修改值\n变量声明不会提前\n块级作用域\nconst 不允许相同作用域内多次声明同一变量\n声明后无法修改值 3. let、const、var 的区别")]),a._v(" "),n("ul",[n("li",[a._v("使用 var 声明的变量，其作用域为该语句所在的函数内，且存在变量提升现象。")]),a._v(" "),n("li",[a._v("使用 let 声明的变量，其作用域为该语句所在的代码块内，不存在变量提升。")]),a._v(" "),n("li",[a._v("使用 const 声明的是常量，在后面出现的代码中不能再修改该常量的值。")])]),a._v(" "),n("h5",{attrs:{id:"解构与赋值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解构与赋值"}},[a._v("#")]),a._v(" 解构与赋值")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("//const { name, age } = res.data.data\n//const { data: {name, age } } = res.data\nconst { data: { data: { name, age} } } = res\n")])])]),n("ul",[n("li",[a._v("数组解构")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("let [a, b, c] = [1, 2, 3]\nconsole.log(a) // 1\nconsole.log(b) //2\nconsole.log(c) //3\n")])])]),n("ul",[n("li",[a._v("对象解构")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("let obj = {\n    name: 'test',\n    adr: 'testAddress'\n}\nlet {\n    name,\n    adr\n} = obj; //取的变量名要和属性名一致,否则解构失败\nconsole.log(name, adr );//test testAddress\n")])])]),n("ul",[n("li",[a._v("ES6 解构并重命名：属性名:新名字")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("let {\n    name: username,\n    adr\n} = obj;\nconsole.log(username, adr);//test testAddress\n")])])]),n("h5",{attrs:{id:"箭头函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数"}},[a._v("#")]),a._v(" 箭头函数")]),a._v(" "),n("p",[a._v("形参只有一个的时候，可以省略圆括号\n如果只有一个语句，并且 return 的时候，就可以省略花括号\n箭头函数都可以省略 function")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("//普通函数：只有一个形参\nfunction show1(a) {\n    return a + 1;\n}\n//箭头函数：只有一个形参\nlet show2 = a => a + 1;\nconsole.log(show1(1),show2(1));//2 2\n\n//普通函数：没有形参\nfunction show3() {\n    return 666;\n}\n//箭头函数：没有形参\nlet show4 = () => 666;\nconsole.log(show3(), show4());//666 666\n\n//普通函数：多个形参\nfunction show5(a, b) {\n    return a + b;\n}\n//箭头函数：多个形参\nlet show6 = (a, b) => a + b;\nconsole.log(show5(3,3),show6(333,333));//6 666\n\n//箭头函数里面没有this：指向外层的this\nbtn.onclick = () => {\n    console.log(this);//window\n}\n\nvar obj = {\n    age: 20,\n    say: () => {\n        console.log(this.age)\n    }\n}\nobj.say() //undefined,因为指向的是window\n")])])]),n("h5",{attrs:{id:"模板字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模板字符串"}},[a._v("#")]),a._v(" 模板字符串")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('var a = 5;\nvar b = 10;\nconsole.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}.`);\n// "Fifteen is 15 and\n// not 20."\n')])])]),n("h5",{attrs:{id:"扩展运算符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#扩展运算符"}},[a._v("#")]),a._v(" 扩展运算符（...）")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("let arr1 = [1, 2];\nlet arr2 = [3, 4];\nlet newarr = [...arr1, ...arr2];\nconsole.log(newarr) //[1, 2, 3, 4]\nfunction add(...vals){\n  let sum=0;\n  for(let i=0;i<vals.length;i++){\n    sum+=vals[i];\n  }\n  return sum;\n}\n\nlet arr = [1,2,3,4,5,6];\nlet sum = add(...arr);\nconsole.log(sum);  //21\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);