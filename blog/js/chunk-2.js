(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{295:function(t,i,a){"use strict";a.r(i);var n=a(413),s=a(328);for(var e in s)"default"!==e&&function(t){a.d(i,t,function(){return s[t]})}(e);var o=a(0),l=Object(o.a)(s.default,n.a,n.b,!1,null,null,null);l.options.__file="src\\views\\articles\\frontend\\CSS\\margin-collapsing.vue",i.default=l.exports},327:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{toTop:this.$util.toTop}}}},328:function(t,i,a){"use strict";a.r(i);var n=a(327),s=a.n(n);for(var e in n)"default"!==e&&function(t){a.d(i,t,function(){return n[t]})}(e);i.default=s.a},413:function(t,i,a){"use strict";var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("BoWen",[a("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[a("Steps",{attrs:{direction:"vertical"}},[a("Step",{attrs:{title:"基本概念",content:"简要说明外边距合并的概念",status:"wait"},nativeOn:{click:function(i){t.toTop("#margin-collapsing-basis",30)}}}),t._v(" "),a("Step",{attrs:{title:"合并详情",content:"主要就外边距的正负值进行分析",status:"wait"},nativeOn:{click:function(i){t.toTop("#margin-collapsing-detail",30)}}},[a("Steps",{attrs:{direction:"vertical"}},[a("Step",{attrs:{title:"两两为正",content:"上边距和下边距的值皆为正值",status:"wait"},nativeOn:{click:function(i){i.stopPropagation(),t.toTop("#margin-collapsing-pp",30)}}}),t._v(" "),a("Step",{attrs:{title:"两两为负",content:"上边距和下边距的值皆为负值",status:"wait"},nativeOn:{click:function(i){i.stopPropagation(),t.toTop("#margin-collapsing-nn",30)}}}),t._v(" "),a("Step",{attrs:{title:"一正一负",content:"上边距和下边距的值为一正一负",status:"wait"},nativeOn:{click:function(i){i.stopPropagation(),t.toTop("#margin-collapsing-pn",30)}}})],1)],1),t._v(" "),a("Step",{attrs:{title:"解决方法",content:"分析几种解决外边距合并的方法",status:"wait"},nativeOn:{click:function(i){t.toTop("#margin-collapsing-solve",30)}}})],1)],1),t._v(" "),a("div",{staticClass:"px-1"},[a("div",{staticClass:"py-3 text-center"},[a("h1",[a("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" 外边距合并")],1),t._v(" "),a("p",{staticClass:"pt-1"},[t._v("块级元素的上外边距和下外边距有时会合并（或折叠）为一个外边距")])]),t._v(" "),a("h3",{staticClass:"ml-1",attrs:{id:"margin-collapsing-basis"}},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 基本概念")],1),t._v(" "),a("Divider"),t._v(" "),a("p",[t._v("块级元素的上外边距和下外边距有时会合并（或折叠）为一个外边距，其大小取其中的最大者，这种行为称为外边距折叠（margin collapsing），有时也翻译为外边距合并。")]),t._v(" "),a("p",[t._v("发生外边距折叠的三种基本情况如下所示。")]),t._v(" "),a("ul",{staticClass:"ml-2 mb-1",staticStyle:{"list-style-position":"inside"}},[a("li",[t._v("相邻元素之间。\n                    "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"html"},[t._v('\x3c!-- html --\x3e\n<div class="up"></div>\n<div class="down"></div>')])]),t._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"css"},[t._v("/* css */\n.outer {\n    margin: 0 auto;\n    margin-bottom: 10px;\n    width: 200px;\n    height: 200px;\n    background: rgb(66, 98, 104);\n}\n.inner {\n    margin: 0 auto;\n    margin-top: 5px;\n    width: 100px;\n    height: 100px;\n    background: rgb(65, 116, 126);\n}")])]),t._v(" "),a("div",{staticStyle:{margin:"0 auto","margin-bottom":"10px",width:"200px",height:"200px",background:"rgb(66, 98, 104)"}}),t._v(" "),a("div",{staticStyle:{margin:"0 auto","margin-top":"5px",width:"100px",height:"100px",background:"rgb(65, 116, 126)"}})]),t._v(" "),a("li",[t._v("父元素与其第一个或最后一个子元素之间。\n                    "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"html"},[t._v('\x3c!-- html --\x3e\n<div class="outer">\n    <div class="inner"></div>\n</div>')])]),t._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"css"},[t._v("/* css */\n.up {\n    width: 200px;\n    height: 200px;\n    background: rgb(66, 98, 104);\n}\n.down {\n    margin-top: 20px;\n    width: 100px;\n    height: 100px;\n    background: rgb(65, 116, 126);\n}")])]),t._v(" "),a("div",{staticClass:"border-white m-auto",staticStyle:{width:"300px",height:"300px"}},[a("div",{staticStyle:{width:"200px",height:"200px",background:"rgb(66, 98, 104)"}},[a("div",{staticStyle:{"margin-top":"20px",width:"100px",height:"100px",background:"rgb(65, 116, 126)"}})])])]),t._v(" "),a("li",[t._v("空的块级元素。\n                    "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"html"},[t._v('\x3c!-- html --\x3e\n<div class="demo"></div>')])]),t._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"css"},[t._v("/* css */\n.demo {\n    margin: 10px;\n    background: rgb(66, 98, 104);\n}")])]),t._v(" "),a("div",{staticStyle:{margin:"10px",background:"rgb(66, 98, 104)"}}),t._v(" "),a("p",[t._v("该元素上下边距合并，在文档中占据的高度为 10 像素。")])])]),t._v(" "),a("h3",{staticClass:"ml-1",attrs:{id:"margin-collapsing-detail"}},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 合并详情")],1),t._v(" "),a("p",{staticClass:"mt-1"},[t._v("当上边距和下边距的值的正负号不同时，最终的处理方式大同小异，以下对其中几种情况作一个详细的分析。")]),t._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"html"},[t._v('\x3c!-- html --\x3e\n<div class="up"></div>\n<div class="down"></div>')])]),t._v(" "),a("h4",{staticClass:"ml-1",attrs:{id:"margin-collapsing-pp"}},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 两两为正")],1),t._v(" "),a("p",{staticClass:"mt-1"},[t._v("如果所有参与折叠的外边距都为正，折叠后的外边距的值为两者中最大的值。")]),t._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"css"},[t._v(".up {\n    margin: 0 auto;\n    margin-bottom: 10px;\n    width: 200px;\n    height: 200px;\n    background: rgb(66, 98, 104);\n}\n.down {\n    margin: 0 auto;\n    margin-top: 5px;\n    width: 100px;\n    height: 100px;\n    background: rgb(65, 116, 126);\n}")])]),t._v(" "),a("div",{staticStyle:{margin:"0 auto","margin-bottom":"10px",width:"200px",height:"200px",background:"rgb(66, 98, 104)"}}),t._v(" "),a("div",{staticStyle:{margin:"0 auto","margin-top":"5px",width:"100px",height:"100px",background:"rgb(65, 116, 126)"}}),t._v(" "),a("h4",{staticClass:"ml-1",attrs:{id:"margin-collapsing-nn"}},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 两两为负")],1),t._v(" "),a("p",{staticClass:"mt-1"},[t._v("如果所有参与折叠的外边距都为负，折叠后的外边距的值为最小的负边距的值。这一规则适用于相邻元素和嵌套元素。")]),t._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"css"},[t._v(".up {\n    margin: 0 auto;\n    margin-bottom: -10px;\n    width: 200px;\n    height: 200px;\n    background: rgb(66, 98, 104);\n}\n.down {\n    margin: 0 auto;\n    margin-top: -5px;\n    width: 100px;\n    height: 100px;\n    background: rgb(65, 116, 126);\n}")])]),t._v(" "),a("div",{staticStyle:{margin:"0 auto","margin-bottom":"-10px",width:"200px",height:"200px",background:"rgb(66, 98, 104)"}}),t._v(" "),a("div",{staticStyle:{margin:"0 auto","margin-top":"-5px",width:"100px",height:"100px",background:"rgb(65, 116, 126)"}}),t._v(" "),a("h4",{staticClass:"ml-1",attrs:{id:"margin-collapsing-pn"}},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 一正一负")],1),t._v(" "),a("p",{staticClass:"mt-1"},[t._v("如果参与折叠的外边距中包含负值，折叠后的外边距的值为最大的正边距与最小的负边距（即绝对值最大的负边距）的和。")]),t._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"css"},[t._v(".up {\n    margin: 0 auto;\n    margin-bottom: 10px;\n    width: 200px;\n    height: 200px;\n    background: rgb(66, 98, 104);\n}\n.down {\n    margin: 0 auto;\n    margin-top: -5px;\n    width: 100px;\n    height: 100px;\n    background: rgb(65, 116, 126);\n}")])]),t._v(" "),a("div",{staticStyle:{margin:"0 auto","margin-bottom":"10px",width:"200px",height:"200px",background:"rgb(66, 98, 104)"}}),t._v(" "),a("div",{staticStyle:{margin:"0 auto","margin-top":"-5px",width:"100px",height:"100px",background:"rgb(65, 116, 126)"}}),t._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"css"},[t._v(".up {\n    margin: 0 auto;\n    margin-bottom: -10px;\n    width: 200px;\n    height: 200px;\n    background: rgb(66, 98, 104);\n}\n.down {\n    margin: 0 auto;\n    margin-top: 5px;\n    width: 100px;\n    height: 100px;\n    background: rgb(65, 116, 126);\n}")])]),t._v(" "),a("div",{staticStyle:{margin:"0 auto","margin-bottom":"-10px",width:"200px",height:"200px",background:"rgb(66, 98, 104)"}}),t._v(" "),a("div",{staticStyle:{margin:"0 auto","margin-top":"5px",width:"100px",height:"100px",background:"rgb(65, 116, 126)"}}),t._v(" "),a("h3",{staticClass:"ml-1",attrs:{id:"margin-collapsing-solve"}},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 解决方法")],1),t._v(" "),a("Divider"),t._v(" "),a("p",[t._v("由于外边距折叠（Margin collapsing）只会发生在属于同一 "),a("code",[t._v("BFC")]),t._v(" 的块级元素之间，所以解决外边距折叠的方法就是设置边框或内边距、触发块格式化上下文。")]),t._v(" "),a("p",[t._v("块格式化上下文（Block Formatting Context，BFC） 是 "),a("code",[t._v("Web")]),t._v(" 页面的可视化 "),a("code",[t._v("CSS")]),t._v(" 渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。")]),t._v(" "),a("p",[t._v("常见创建 "),a("code",[t._v("BFC")]),t._v(" 的方式如下所示。")]),t._v(" "),a("ul",{staticClass:"ml-2",staticStyle:{"list-style-position":"inside"}},[a("li",[t._v("浮动元素（元素的 "),a("code",[t._v("float")]),t._v(" 不是 "),a("code",[t._v("none")]),t._v("）。")]),t._v(" "),a("li",[a("code",[t._v("overflow")]),t._v(" 值不为 "),a("code",[t._v("visible")]),t._v(" 的块元素。")]),t._v(" "),a("li",[t._v("绝对定位元素（元素的 "),a("code",[t._v("position")]),t._v(" 为 "),a("code",[t._v("absolute")]),t._v(" 或 "),a("code",[t._v("fixed")]),t._v("）。")]),t._v(" "),a("li",[t._v("元素的 "),a("code",[t._v("display")]),t._v(" 为 "),a("code",[t._v("inline-block")]),t._v(" "),a("code",[t._v("table-cell")]),t._v(" "),a("code",[t._v("table-caption")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("display")]),t._v(" 为 "),a("code",[t._v("flex")]),t._v(" 或 "),a("code",[t._v("inline-flex")]),t._v(" 或 "),a("code",[t._v("grid")]),t._v(" 或 "),a("code",[t._v("inline-grid")]),t._v(" 元素的直接子元素。")])]),t._v(" "),a("p",{staticClass:"mt-1"},[t._v("具体措施：")]),t._v(" "),a("ul",{staticClass:"ml-2",staticStyle:{"list-style-position":"inside"}},[a("li",[t._v("相邻元素之间。\n                    "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"html"},[t._v('\x3c!-- html --\x3e\n<div class="container">\n    <div class="up"></div>\n</div>\n<div class="down"></div>')])]),t._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"css"},[t._v("/* css */\n.container {\n    overflow: hidden; /* 创建 BFC */\n}\n.up {\n    margin: 0 auto;\n    margin-bottom: 10px;\n    width: 200px;\n    height: 200px;\n    background: rgb(66, 98, 104);\n}\n.down {\n    margin: 0 auto;\n    margin-top: 5px;\n    width: 100px;\n    height: 100px;\n    background: rgb(65, 116, 126);\n}")])]),t._v(" "),a("div",{staticStyle:{margin:"0 auto","margin-bottom":"10px",width:"200px",height:"200px",background:"rgb(66, 98, 104)"}}),t._v(" "),a("div",{staticStyle:{overflow:"hidden"}},[a("div",{staticStyle:{margin:"0 auto","margin-top":"5px",width:"100px",height:"100px",background:"rgb(65, 116, 126)"}})])]),t._v(" "),a("li",[t._v("父元素与其第一个或最后一个子元素之间。\n                    "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"html"},[t._v('\x3c!-- html --\x3e\n<div class="outer">\n    <div class="inner"></div>\n</div>')])]),t._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"css"},[t._v("/* css */\n.outer {\n    overflow: hidden; /* 创建 BFC */\n    width: 200px;\n    height: 200px;\n    background: rgb(66, 98, 104);\n}\n.inner {\n    margin-top: 20px;\n    width: 100px;\n    height: 100px;\n    background: rgb(65, 116, 126);\n}")])]),t._v(" "),a("div",{staticClass:"border-white m-auto",staticStyle:{width:"300px",height:"300px"}},[a("div",{staticStyle:{overflow:"hidden",width:"200px",height:"200px",background:"rgb(66, 98, 104)"}},[a("div",{staticStyle:{"margin-top":"20px",width:"100px",height:"100px",background:"rgb(65, 116, 126)"}})])]),t._v(" "),a("p",[t._v("更多方案：")]),t._v(" "),a("ul",{staticClass:"ml-2 mb-1",staticStyle:{"list-style-position":"inside"}},[a("li",[t._v("外层元素由 "),a("code",[t._v("padding")]),t._v(" 代替。")]),t._v(" "),a("li",[t._v("外层元素设置 "),a("code",[t._v("overflow: hidden;")])]),t._v(" "),a("li",[t._v("外层元素设置边框。")]),t._v(" "),a("li",[t._v("内存元素设置 "),a("code",[t._v("display: inline-block;")])]),t._v(" "),a("li",[t._v("内层元素存在浮动。")]),t._v(" "),a("li",[t._v("内层元素设置绝对定位。")])])]),t._v(" "),a("li",[t._v("空的块级元素。\n                    "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"html"},[t._v('\x3c!-- html --\x3e\n<div class="demo"></div>')])]),t._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[a("code",{staticClass:"css"},[t._v("/* css */\n.demo {\n    margin: 10px;\n    background: rgb(66, 98, 104);\n    border: 1px solid white;\n}")])]),t._v(" "),a("div",{staticStyle:{margin:"10px",background:"rgb(66, 98, 104)",border:"1px solid white"}}),t._v(" "),a("p",[t._v("该元素上下边距合并，在文档中占据的高度为 12 像素。")])])]),t._v(" "),a("p",{staticClass:"text-right"},[t._v("参考资料："),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/"}},[t._v("MDN")])]),t._v(" "),a("FooterDivider")],1)])},s=[];n._withStripped=!0,a.d(i,"a",function(){return n}),a.d(i,"b",function(){return s})}}]);