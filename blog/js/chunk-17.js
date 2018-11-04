(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{310:function(t,e,n){"use strict";n.r(e);var i=n(458),l=n(373);for(var v in l)"default"!==v&&function(t){n.d(e,t,function(){return l[t]})}(v);n(487);var a=n(0),o=Object(a.a)(l.default,i.a,i.b,!1,null,"5a93cb12",null);o.options.__file="src\\views\\articles\\frontend\\JS\\JS-02.vue",e.default=o.exports},371:function(t,e,n){},372:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop,columns:[{title:"数据类型",key:"title"},{title:"转换为 true 的值",key:"toTrue"},{title:"转换为 false 的值",key:"toFalse"}],data:[{title:"Boolean",toTrue:"true",toFalse:"false"},{title:"String",toTrue:"任何非空字符串",toFalse:'""（空字符串）'},{title:"Number",toTrue:"任何非零数字值（包括无穷大）",toFalse:"0 和 NaN"},{title:"Object",toTrue:"任何对象",toFalse:"null"},{title:"Undefined",toTrue:"n/a n/a（或N/A），是not applicable的缩写，意思是“不适用”",toFalse:"undefined"}]}}}},373:function(t,e,n){"use strict";n.r(e);var i=n(372),l=n.n(i);for(var v in i)"default"!==v&&function(t){n.d(e,t,function(){return i[t]})}(v);e.default=l.a},458:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BoWen",[n("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[n("Steps",{attrs:{direction:"vertical"}},[n("Step",{attrs:{title:"typeof 操作符",content:"检测数据类型",status:"wait"},nativeOn:{click:function(e){t.toTop("#JS-02-1",30)}}}),t._v(" "),n("Step",{attrs:{title:"undefined null 类型",content:"undefined null 类型"},nativeOn:{click:function(e){t.toTop("#JS-02-2",30)}}}),t._v(" "),n("Step",{attrs:{title:"Boolean 类型",content:"Boolean 类型"},nativeOn:{click:function(e){t.toTop("#JS-02-3",30)}}}),t._v(" "),n("Step",{attrs:{title:"Number 类型",content:"Number 类型"},nativeOn:{click:function(e){t.toTop("#JS-02-4",30)}}}),t._v(" "),n("Step",{attrs:{title:"String 类型",content:"String 类型"},nativeOn:{click:function(e){t.toTop("#JS-02-5",30)}}}),t._v(" "),n("Step",{attrs:{title:"对象",content:"复杂数据类型"},nativeOn:{click:function(e){t.toTop("#JS-02-6",30)}}})],1)],1),t._v(" "),n("div",{staticClass:"px-1"},[n("div",{staticClass:"py-3 text-center"},[n("h1",[n("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" JS-数据类型")],1),t._v(" "),n("p",{staticClass:"pt-1"},[t._v("介绍 JavaScript 的基本数据类型")])]),t._v(" "),n("h3",{staticClass:"ml-1",attrs:{id:"JS-02-1"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" typeof 操作符")],1),t._v(" "),n("Divider"),t._v(" "),n("p",[t._v("ECMAScript 中有 5 种简单数据类型 （也称为基本数据类型） ： Undefined、 Null、 Boolean、 Number 和 String。 还有 1 种复杂数据类型——Object， Object 本质上是由一组无序的名值对组成。")]),t._v(" "),n("p",[t._v("typeof 检测给定变量的数据类型：\n                "),n("ul",{staticClass:"ml-1"},[n("li",[t._v('"undefined"——如果这个值未定义')]),t._v(" "),n("li",[t._v('"boolean"——如果这个值是布尔值')]),t._v(" "),n("li",[t._v('"string"——如果这个值是字符串')]),t._v(" "),n("li",[t._v('"number"——如果这个值是数值')]),t._v(" "),n("li",[t._v('"object"——如果这个值是对象或 null')]),t._v(" "),n("li",[t._v('"function"——如果这个值是函数')])])]),t._v(" "),n("h3",{staticClass:"ml-1",attrs:{id:"JS-02-2"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" undefined null 类型")],1),t._v(" "),n("Divider"),t._v(" "),n("p",[t._v("undefined 用于正式区分空对象指针与未经初始化的变量。")]),t._v(" "),n("p",[t._v("对于尚未声明过的变量，只能执行一项操作，即使用 typeof 操作符检测其数据类型，且会返回 undefined。")]),t._v(" "),n("P",[t._v("null 值表示一个空对象指针，由于 undefined 值是派生自 null 值的，所以存在如下所示得关系。")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[n("code",{staticClass:"js"},[t._v("// 等于\nconsole.log(undefined == null);  // true\n// 全等于\nconsole.log(undefined === null); // false")])]),t._v(" "),n("p",[t._v("另外我们没有必要显示的申明一个变量为 undefined，但是只要意在保存对象的变量还没有真正保存对象，就应该明确地让该变量保存为 null 值。")]),t._v(" "),n("h3",{staticClass:"ml-1",attrs:{id:"JS-02-3"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" Boolean 类型")],1),t._v(" "),n("Divider"),t._v(" "),n("p",[t._v("Boolean 类型只有两个字面值：true 和 false。")]),t._v(" "),n("p",[t._v("我们可以对任何数据类型的值调用 Boolean()函数，而且总会返回一个 Boolean 值。")]),t._v(" "),n("Table",{attrs:{border:"",columns:t.columns,data:t.data}}),t._v(" "),n("h3",{staticClass:"ml-1 mt-1",attrs:{id:"JS-02-4"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" Number 类型")],1),t._v(" "),n("Divider"),t._v(" "),n("p",[t._v("JavaScript 用 IEEE754 格式来表示整数和浮点数值（浮点数值在某些语言中也被称为双精度数值）。")]),t._v(" "),n("p",[t._v("所谓浮点数值，就是该数值中必须包含一个小数点，并且小数点后面必须至少有一位数字。虽然小数点前面可以没有整数，但我们不推荐这种写法（保存浮点数值需要的内存空间是保存整数值的两倍， 因此 ECMAScript 会不失时机地将浮点数值转换为整数值）。")]),t._v(" "),n("p",[t._v("浮点数值的最高精度是 17 位小数，但在进行算术计算时其精确度远远不如整数（0.1 加 0.2 的结果不是 0.3，而是 0.30000000000000004）。")]),t._v(" "),n("p",[t._v("八进制字面量在严格模式下是无效的，会导致支持的JavaScript引擎抛出错误。"),n("span",{staticClass:"text-info"},[t._v("在进行算术计算时，所有以八进制和十六进制表示的数值最终都将被转换成十进制数值。")])]),t._v(" "),n("p",[t._v("isFinite() 函数在参数位于最小（Number.MIN_VALUE）与最大数值（Number.MAX_VALUE）之间时会返 回 true。")]),t._v(" "),n("p",[t._v("任何涉及 NaN 的操作（例如 NaN/10）都会返回 NaN，NaN 与任何值都不相等，包括 NaN 本身。")]),t._v(" "),n("p",[t._v("确定这个参数是否“不是数值”：isNaN() 在接收到一个值之后，会尝试将这个值转换为数值。某些不是数值的值会直接转换为数值。")]),t._v(" "),n("p",[t._v("数值转换：\n                "),n("ul",{staticClass:"ml-1"},[n("li",[t._v("转型函数 Number()可以用于任何数据类型：\n                        "),n("ul",[n("li",[t._v("如果是 Boolean 值，true 和 false 将分别被转换为 1和 0。")]),t._v(" "),n("li",[t._v("如果是数字值，只是简单的传入和返回。  如果是 null 值，返回 0。")]),t._v(" "),n("li",[t._v("如果是 undefined，返回 NaN。")]),t._v(" "),n("li",[t._v("如果是字符串，遵循下列规则：\n                                "),n("ul",[n("li",[t._v('如果字符串中只包含数字（包括前面带正号或负号的情况） ，则将其转换为十进制数值，即"1" 会变成 1，"123"会变成 123，而"011"会变成11（注意：前导的零被忽略了）； ')]),t._v(" "),n("li",[t._v('如果字符串中包含有效的浮点格式，如"1.1"，则将其转换为对应的浮点数值（同样，也会忽 略前导零）； ')]),t._v(" "),n("li",[t._v('如果字符串中包含有效的十六进制格式，例如"0xf"，则将其转换为相同大小的十进制整 数值；')]),t._v(" "),n("li",[t._v("如果字符串是空的（不包含任何字符），则将其转换为 0；")]),t._v(" "),n("li",[t._v("如果字符串中包含除上述格式之外的字符，则将其转换为 NaN；")]),t._v(" "),n("li",[t._v("如果是对象，则调用对象的 valueOf()方法，然后依照前面的规则转换返回的值。如果转换 的结果是 NaN，则调用对象的 toString()方法，然后再次依照前面的规则转换返回的字符串值。")])])])])]),t._v(" "),n("li",[t._v("parseInt()和 parseFloat() 专门用于把字符串转换成数值:\n                        "),n("ul",[n("li",[t._v("parseInt()转换空字符串会返回 NaN（Number()对空字符返回 0）；")]),t._v(" "),n("li",[t._v("与 parseInt()函数类似，parseFloat()也是从第一个字符（位置 0）开始解析每个字符。不同的是字符串中的第一个小数点是有效的，第二个区别在于它始终都会忽略前导的零；")]),t._v(" "),n("li",[t._v("parseInt()在ECMAScript 5 JavaScript引擎前具有解析八进制值的能力，parseFloat()只解析十进制值。")])])])])]),t._v(" "),n("h3",{staticClass:"ml-1 mt-1",attrs:{id:"JS-02-5"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" String 类型")],1),t._v(" "),n("Divider"),t._v(" "),n("p",[t._v("String 类型用于表示由零或多个 16 位 Unicode 字符组成的字符序列，符串可以由双引号（\"）或单引号（'）表示。")]),t._v(" "),n("p",[t._v("长的转义序列表示 1 个字符。")]),t._v(" "),n("p",[t._v("如果字符串中包含双字节字符，那么 length 属性 可能不会精确地返回字符串中的字符数目。")]),t._v(" "),n("p",{staticClass:"text-info"},[t._v("ECMAScript 中的字符串是不可变的，要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量。")]),t._v(" "),n("p",[t._v("数值、布尔值、对象和字符串值，都有 toString() 方法。但 null 和 undefined 值没有这个方法。默认情况下，toString() 方法以十进制格式返回数值的字符串表示。而通过传递基数，toString() 可以输出以二进制、八进制、十六进制，乃至其他任意有效进制格式表示的字符串值。")]),t._v(" "),n("p",[t._v("String()，这个转型函数能够将任何类型的值转换为字符串：\n                "),n("ul",{staticClass:"ml-1"},[n("li",[t._v("如果值有 toString() 方法，则调用该方法（没有参数）并返回相应的结果；")]),t._v(" "),n("li",[t._v('如果值是null，则返回"null"； ')]),t._v(" "),n("li",[t._v('如果值是undefined，则返回"undefined"。')])])]),t._v(" "),n("p",{staticClass:"text-info"},[t._v('要把某个值转换为字符串，可以使用加号操作符（3.5 节讨论）把它与一个字符 串（""）加在一起。')]),t._v(" "),n("h3",{staticClass:"ml-1 mt-1",attrs:{id:"JS-02-6"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 对象")],1),t._v(" "),n("Divider"),t._v(" "),n("p",[t._v("ECMAScript中的对象其实就是一组数据和功能的集合。")]),t._v(" "),n("p",[t._v("Object 的每个实例都具有下列属性和方法：\n                "),n("ul",[n("li",[t._v("constructor：存着用于创建当前对象的函数。")]),t._v(" "),n("li",[t._v("hasOwnProperty(propertyName)：用于检查给定的属性在当前对象实例中（而不是在实例 的原型中）是否存在。")]),t._v(" "),n("li",[t._v("isPrototypeOf(object)：于检查传入的对象是否是传入对象的原型。")]),t._v(" "),n("li",[t._v("propertyIsEnumerable(propertyName)：于检查给定的属性是否能够使用 for-in 语句 （本章后面将会讨论）来枚举。与 hasOwnProperty()方法一样，作为参数的属性名必须以字符 串形式指定。")]),t._v(" "),n("li",[t._v("toLocaleString()：返回对象的字符串表示，该字符串与执行环境的地区对应。")]),t._v(" "),n("li",[t._v("toString()：回对象的字符串表示。")]),t._v(" "),n("li",[t._v("valueOf()：回对象的字符串、数值或布尔值表示。通常与 toString()方法的返回值 相同。")])])]),t._v(" "),n("p",{staticClass:"text-right"},[t._v("参考资料：JavaScript 高级程序设计（第三版）")]),t._v(" "),n("FooterDivider")],1)])},l=[];i._withStripped=!0,n.d(e,"a",function(){return i}),n.d(e,"b",function(){return l})},487:function(t,e,n){"use strict";var i=n(371);n.n(i).a}}]);