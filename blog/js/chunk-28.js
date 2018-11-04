(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{321:function(t,e,i){"use strict";i.r(e);var s=i(468),a=i(397);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);var n=i(0),l=Object(n.a)(a.default,s.a,s.b,!1,null,null,null);l.options.__file="src\\views\\articles\\frontend\\JS\\RequireJS-1.vue",e.default=l.exports},396:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop}}}},397:function(t,e,i){"use strict";i.r(e);var s=i(396),a=i.n(s);for(var r in s)"default"!==r&&function(t){i.d(e,t,function(){return s[t]})}(r);e.default=a.a},427:function(t,e,i){t.exports=i.p+"blog/images/img-require-define.png"},468:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("BoWen",[s("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[s("Steps",{attrs:{direction:"vertical"}},[s("Step",{attrs:{title:"基本 API",content:"基本 API",status:"wait"},nativeOn:{click:function(e){t.toTop("#RequireJS-1-1",30)}}}),s("Step",{attrs:{title:"主模块",content:"主模块的加载",status:"wait"},nativeOn:{click:function(e){t.toTop("#RequireJS-1-2",30)}}}),s("Step",{attrs:{title:"模块的加载",content:"加载其它模块",status:"wait"},nativeOn:{click:function(e){t.toTop("#RequireJS-1-3",30)}}}),s("Step",{attrs:{title:"基本配置",content:"设置 RequireJS 的基本配置",status:"wait"},nativeOn:{click:function(e){t.toTop("#RequireJS-1-4",30)}}})],1)],1),s("div",{staticClass:"px-1"},[s("div",{staticClass:"py-3 text-center"},[s("h1",[s("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" RequireJS (二)")],1),s("p",{staticClass:"pt-1"},[t._v("RequireJS 的基本使用方法")])]),s("h3",{staticClass:"ml-1",attrs:{id:"RequireJS-1-1"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 基本 API")],1),s("Divider"),s("p",{staticClass:"text-info"},[t._v("RequireJS 会定义三个变量：define，require，requirejs，其中 require === requirejs，由于 require 更加简短，语义化也更好，所以我们一般见到和用得最多的就是 require。")]),s("p",[t._v("define() 函数是用来定义一个模块，可以接受三个参数。第一个参数是模块名，一般模块名不需要被指定，由相关工具自动为其命名；第二个参数是一个数组，指明了此模块的依赖；第三个参数就是此模块的具体实现。它大概就像下图一样：")]),s("p",{staticClass:"text-warn"},[t._v("如果我们定义了模块名，则在指定依赖这个模块时，必须使用同名模块名。")]),s("img",{staticClass:"d-block ml-2 mb-1",staticStyle:{height:"200px"},attrs:{src:i(427),alt:"模块的定义"}}),s("p",[t._v("require() 函数接受两个参数。第一个参数是一个数组，表示所依赖的模块，第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。")]),s("p",[t._v("require 通过异步加载依赖的模块，从而解决了 JS 阻塞页面渲染，另外指定的回调函数会在其依赖的所有模块加载完之后再执行，从而又解决了依赖性的问题。")]),s("h3",{staticClass:"ml-1",attrs:{id:"RequireJS-1-2"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 主模块")],1),s("Divider"),s("p",{staticClass:"text-info"},[t._v('"主模块"，意思是整个网页的入口代码，所有代码都从这儿开始运行。')]),s("p",[t._v("我们可以在主模块里设置 require 的全局配置，并通过设置脚本的 script 标签的 data-main 属性来引入主模块，因为这个属性指定的 js 文件将在加载完 reuqire.js 后处理，在我们把 require.config 的配置加入到其中后，就可以使每一个页面都使用这个配置。")]),s("p",[t._v("另外，data-main 属性还有一个重要的功能，当在 script 标签指定 data-main 属性时，require 会默认的将 data-main 指定的 js 为根路径。")]),s("p",[t._v("当然我们也可以直接再使用另外一个 script 标签来引入主模块，不过此时默认的根路径则为页面所在的路径。")]),s("p",[t._v("就像下面这个例子一样：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"Markdown"},[t._v("# 目录结构\n└─ test.html\n└─text.txt\n└─js\n   └─main.js\n   └─ require.js\n   └─say.hello.js")])]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"html"},[t._v('<!DOCTYPE html> \n<html>\n<head>\n    <meta charset="utf-8" />\n    <title>RequireJS</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    \x3c!-- 通过 script 标签的 src 属性引入 RequireJS --\x3e\n    \x3c!-- 通过 script 标签的 data-main 属性引入主模块，此时根路径为 js 目录 --\x3e\n    \x3c!-- 加载完 reuqire.js 后执行 main.js --\x3e\n    <script src="js/require.js" data-main="js/main"><\/script>\n</head>\n<body>\n    <div>Hello world</div>\n</body>\n</html>')])]),s("h3",{staticClass:"ml-1",attrs:{id:"RequireJS-1-3"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 模块的加载")],1),s("Divider"),s("p",[t._v("在加载本地的模块时，我们可以在 require() 函数的第一个参数里指明模块的加载路径。比如上面在 main.js 文件里依赖 say.hello.js 文件，我们可以这样写：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"js"},[t._v("// main.js\nrequire(['say.hello'], function () {\n    console.log('success');\n});")])]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"js"},[t._v("// say.hello.js\ndefine(function () {\n    function sayHello () {\n        alert('Hello');\n    }\n \n    sayHello();\n});")])]),s("p",[t._v("安装如前展示的目录将几个文件对应放置后，用浏览器打开 test.html 文件，此时会在加载完 require.js 文件后执行 main.js(主模块)，由于主模块依赖 say.hello.js(其它模块) 文件，所以主模块中的回调函数会在其它它依赖模块加载完后执行，也就是只有当我们确认弹出框后，控制台才会打印 success。")]),s("h3",{staticClass:"ml-1",attrs:{id:"RequireJS-1-4"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 基本配置")],1),s("Divider"),s("p",[t._v("首先我们前面提到的，根据主模块引入方式的差异，RequireJS 的根路径也会存在不同，那么有没有什么方法让它不受引入方式的影响呢，这就需要使用到 RequireJS 的 require.config() 方法来进行配置。")]),s("p",[t._v("自然我们也可以在每个页面中加入配置，但那样会显得十分麻烦，所以可以把全局配置写在主模块里。")]),s("p",{staticClass:"text-info"},[s("strong",[t._v("配置模块路径")]),t._v("：简单点说就是给模块起一个更短更好记的名字，不需要在写依赖时写一串的路径。")]),s("p",[t._v("比如我们需要下载 CDN 上的 jQuery 时，我们可以照下面这样写：")]),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"js"},[t._v('// main.js \nrequire.config({\n    paths : {\n        // 本地文件可以配置\n        // 配置的路径可以是一个\n        "sayHello": "say.hello",\n        // 服务器上的也可以配置\n        // 配置的路径也可以是一个数组，如果前一个路径获取失败会尝试依次从后面的路径下载\n        // 直到下载成功或读取完整个数组\n        // 注意配置的路径中不能有 .js 后缀\n        "jquery" : ["https://cdn.bootcss.com/jquery/1.10.2/jquery.min"]\n    }\n});\nrequire(["jquery", "sayHello"], function ($) {\n    $(function() {\n        console.log(\'success\');\n    });\n});')])]),s("p",{staticClass:"text-warn"},[t._v("在使用 RequireJS 时，加载模块时不能写 .js 后缀。")]),s("p",[t._v("上面例子中的 callback 函数中发现有 $ 参数，这个就是依赖的 jquery 模块的输出变量，如果你依赖多个模块，可以依次写入多个参数来使用，由于sayHello 模块不存在输出变量，所以上面的回调函数只有一个参数。"),s("span",{staticClass:"text-warn"},[t._v("参数的放置顺序应该与前面依赖模块的书写顺序一致。")])]),s("p",{staticClass:"text-right"},[t._v("还没有看够？点击 "),s("a",{attrs:{href:"/#/articles/frontend/JS/RequireJS-2"}},[t._v("RequireJS (三) ")]),t._v("查看更多内容。")]),s("p",{staticClass:"text-right"},[t._v("参考资料："),s("a",{staticClass:"mr-1",attrs:{href:"http://www.runoob.com/w3cnote/requirejs-tutorial-1.html"}},[t._v("菜鸟教程")]),s("a",{staticClass:"mr-1",attrs:{href:"https://www.ibm.com/developerworks/cn/web/1209_shiwei_requirejs/index.html"}},[t._v("IBM")]),s("a",{staticClass:"mr-1",attrs:{href:"http://www.ruanyifeng.com/blog/2012/11/require_js.html"}},[t._v("阮一峰的网络日志")]),s("a",{attrs:{href:"https://www.imooc.com/learn/787"}},[t._v("慕课网")])])],1)])},a=[];s._withStripped=!0,i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a})}}]);