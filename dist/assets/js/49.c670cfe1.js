(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{344:function(e,a,t){"use strict";t.r(a);var l=t(5),n=Object(l.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("strong",[e._v("需求：前端选中Excel文件后，先展示出来后再上传")])]),e._v(" "),a("h4",{attrs:{id:"安装xlsx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装xlsx"}},[e._v("#")]),e._v(" 安装xlsx")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install -S xlsx\n")])])]),e._v(" "),a("h4",{attrs:{id:"选择文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择文件"}},[e._v("#")]),e._v(" 选择文件")]),e._v(" "),a("p",[e._v("这里选择文件用的el-upload")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<el-upload\n  ref="upload"\n  action=""\n  accept=".xls,.xlsx"\n  :file-list="fileList"\n  :show-file-list="false"\n  :auto-upload="false"\n  :multiple="false"\n  :on-change="onChange"\n  :http-request="uploadFile"\n>\n  <el-button slot="trigger" size="small" type="primary">\n    选取文件\n  </el-button>\n</el-upload>\n')])])]),a("h4",{attrs:{id:"展示文件里的数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#展示文件里的数据"}},[e._v("#")]),e._v(" 展示文件里的数据")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<el-table :data="tabelListData" style="width: 100%">\n  <el-table-column prop="userName" label="用户名"> </el-table-column>\n  <el-table-column prop="displayName" label="昵称"> </el-table-column>\n  <el-table-column prop="userRole" label="角色"> </el-table-column>\n  <el-table-column prop="phoneNum" label="手机号"> </el-table-column>\n  <el-table-column prop="passWord" label="密码"> </el-table-column>\n  </el-table-column>\n</el-table>\n')])])]),a("h4",{attrs:{id:"选择文件-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择文件-2"}},[e._v("#")]),e._v(" 选择文件")]),e._v(" "),a("p",[e._v("在选择文件夹的组件引入xlsx")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//引入xlsx\nimport XLSX from "xlsx";\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// 选择文件\nonChange(file, filelist) {\n  // console.log(file)\n  const fileReader = new FileReader();\n  fileReader.onload = (ev) => {\n    try {\n      const data = ev.target.result;\n      const workbook = XLSX.read(data, {\n        type: \'binary\'\n      });\n      for (let sheet in workbook.Sheets) {\n        //循环读取每个工作簿\n        const sheetArray = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);\n        //若当前sheet没有数据，则continue\n        if (sheetArray.length == 0) {\n          continue;\n        }\n        console.log("读取文件");\n        console.log(sheetArray);\n         sheetArray.map(item => {\n          this.tabelListData.push({\n            userName: item["用户名"],\n            displayName: item["昵称"],\n            userRole: item["角色"],\n            phoneNum: item["手机号"],\n            passWord: item["密码"]\n          })\n        })\n      }\n    } catch (e) {\n      this.$message.warning(\'文件类型不正确！\');\n    }\n  };\n  //注意这里，有些blog写的不一样，根据情况可修改\n  fileReader.readAsBinaryString(file.raw);\n},\n')])])]),a("p",[e._v("上传操作略。")])])}),[],!1,null,null,null);a.default=n.exports}}]);