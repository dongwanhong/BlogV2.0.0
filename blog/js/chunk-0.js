(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{282:function(e,t,n){"use strict";n.r(t);var i=n(296),s=n(287);for(var a in s)"default"!==a&&function(e){n.d(t,e,function(){return s[e]})}(a);var l=n(0),r=Object(l.a)(s.default,i.a,i.b,!1,null,null,null);r.options.__file="src\\views\\articles\\others\\notes\\note-00.vue",t.default=r.exports},286:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"NoteOne"}},287:function(e,t,n){"use strict";n.r(t);var i=n(286),s=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t.default=s.a},296:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BoWen",[n("div",{staticClass:"px-1",staticStyle:{background:"rgb(35, 36, 31)"}},[n("div",{staticClass:"py-3 text-center"},[n("Button",{attrs:{type:"primary"}},[n("h1",[e._v("全局注册组件和函数")])])],1),e._v(" "),n("Tag",{staticClass:"ml-1 font-weight-bold",attrs:{type:"dot",color:"primary"}},[e._v("注册全局可用的函数")]),e._v(" "),n("Divider"),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("            "),n("code",{staticClass:"js"},[e._v("// main.js\nimport util from './util.js'\nVue.prototype.$util = util;")]),e._v("\n        ")]),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("            "),n("code",{staticClass:"js"},[e._v("// 在组件中使用\nmethod:{\nhelloWorld() {\n    // sayHello 为 util 上的方法\n    this.$util.sayHello();\n}\n}")]),e._v("\n        ")]),e._v(" "),n("Tag",{staticClass:"ml-1 font-weight-bold",attrs:{type:"dot",color:"primary"}},[e._v("注册全局组件")]),e._v(" "),n("Divider"),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("            "),n("code",{staticClass:"js"},[e._v("// main.js\n// 自定义全局组件\nimport defineSubassemblies from './components/defineSubassembly.js';\nVue.use(defineSubassemblies);")]),e._v("\n        ")]),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("            "),n("code",{staticClass:"js"},[e._v("// defineSubassembly.js\nimport FullPage from './fullpage/fullpage.vue';\nimport PageItem from './fullpage/components/page.vue';\n\nconst defineSubassemblies = {\ninstall:function (Vue) {\n    Vue.component('FullPage',FullPage);\n    Vue.component('PageItem',PageItem);\n}\n};\n\nexport default defineSubassemblies;\n")]),e._v("\n        ")]),e._v(" "),n("FooterDivider")],1)])},s=[];i._withStripped=!0,n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s})}}]);