(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{318:function(t,a,e){"use strict";e.r(a);var s=e(475),i=e(396);for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);var r=e(0),c=Object(r.a)(i.default,s.a,s.b,!1,null,null,null);c.options.__file="src\\views\\articles\\frontend\\JS\\JS-10.vue",a.default=c.exports},395:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{toTop:this.$util.toTop}}}},396:function(t,a,e){"use strict";e.r(a);var s=e(395),i=e.n(s);for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);a.default=i.a},475:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BoWen",[e("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[e("Steps",{attrs:{direction:"vertical"}},[e("Step",{attrs:{title:"创建对象",content:"引用类型的创建方式",status:"wait"},nativeOn:{click:function(a){t.toTop("#JS-10-1",30)}}}),e("Step",{attrs:{title:"访问属性",content:"访问属性",status:"wait"},nativeOn:{click:function(a){t.toTop("#JS-10-2",30)}}})],1)],1),e("div",{staticClass:"px-1"},[e("div",{staticClass:"py-3 text-center"},[e("h1",[e("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" JS-Object 类型")],1),e("p",{staticClass:"pt-1"},[t._v("ECMAScript 中的引用类型")])]),e("h3",{staticClass:"ml-1",attrs:{id:"JS-10-1"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 创建对象")],1),e("Divider"),e("p",[t._v("创建Object实例的方式有两种。第一种是使用 new 操作符后跟 Object 构造函数。")]),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[e("code",{staticClass:"js"},[t._v("var author = new Object(); \nauthor.name = 'Anani';\nauthor.age = 24;")])]),e("p",[t._v("另一种方式是使用对象字面量表示法。")]),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[e("code",{staticClass:"js"},[t._v("var author = { \n    name: 'Anani',\n    age: 24\n}")])]),e("p",{staticClass:"text-info"},[t._v("ECMAScript中的表达式上下文指的是能够返回一个值（表达式）。")]),e("p",[t._v("赋值操作符表示后面是一个值，所以赋值操作符后的左花括号表示一个表达式的开始。")]),e("p",[t._v("在使用对象字面量语法时，属性名也可以使用字符串，就像下面这样：")]),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[e("code",{staticClass:"js"},[t._v("var author = { \n    'name': 'Anani',\n    'age': 24\n}")])]),e("p",{staticClass:"text-success"},[t._v("数值属性名会自动转换为字符串。")]),e("p",[t._v("另外，使用对象字面量语法时，如果留空其花括号，则可以定义只包含默认属性和方法的对象。")]),e("p",[e("pre",{staticClass:"custom-pre"},[t._v("var obj = {}")]),t._v(" 等价于 "),e("pre",{staticClass:"custom-pre"},[t._v("var obj = new Object()")])]),e("p",[t._v("对象的使用：命名参数虽然容易处理，但在有多个可选参数的情况下就会显示不够灵活。最好的做法是对那些必需值使用命名参数，而使用对象字面量来封装多个可选参数。")]),e("h3",{staticClass:"ml-1",attrs:{id:"JS-10-2"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 访问属性")],1),e("Divider"),e("p",[t._v("通常访问对象属性时使用的都是点表示法。")]),e("p",[t._v("另外在 JavaScript 也可以使用方括号表示法来访问对象的属性。在使用方括号语法时，应该将要访问的属性以字符串的形式放在方括号中。")]),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[e("code",{staticClass:"js"},[t._v('author.name // Anani\nauthor["name"] // Anani')])]),e("p",{staticClass:"text-success"},[t._v("方括号语法的主要优点是可以通过变量来访问属性。")]),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[e("code",{staticClass:"js"},[t._v('var propertyName = "name";\nauthor[propertyName] // Anani')])]),e("p",[t._v("如果属性名中包含会导致语法错误的字符，或者属性名使用的是关键字或保留字，也可以使用方括号表示法。")]),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[e("code",{staticClass:"js"},[t._v("// 比如属性名中包含空格\nvar author = new Object();\nauthor[\"author name\"] = 'Anani'")])]),e("p",{staticClass:"text-warn"},[t._v("通常，除非必须使用变量来访问属性，否则我们建议使用点表示法。")]),e("p",{staticClass:"text-right"},[t._v("参考资料：JavaScript 高级程序设计（第三版）")]),e("FooterDivider")],1)])},i=[];s._withStripped=!0,e.d(a,"a",function(){return s}),e.d(a,"b",function(){return i})}}]);