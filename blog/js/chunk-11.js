(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{304:function(t,e,i){"use strict";i.r(e);var a=i(452),s=i(359);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);var r=i(0),l=Object(r.a)(s.default,a.a,a.b,!1,null,null,null);l.options.__file="src\\views\\articles\\frontend\\AngularJS\\angular-ui-router-3.vue",e.default=l.exports},358:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop}}}},359:function(t,e,i){"use strict";i.r(e);var a=i(358),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e.default=s.a},452:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("BoWen",[i("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[i("Steps",{attrs:{direction:"vertical"}},[i("Step",{attrs:{title:"嵌套路由",content:"嵌套路由",status:"wait"},nativeOn:{click:function(e){t.toTop("#angular-ui-router-3-1",30)}}}),i("Step",{attrs:{title:"多命名视图",content:"多命名视图",status:"wait"},nativeOn:{click:function(e){t.toTop("#angular-ui-router-3-2",30)}}},[i("Steps",{attrs:{direction:"vertical"}},[i("Step",{attrs:{title:"基本使用",content:"基本使用",status:"wait"},nativeOn:{click:function(e){e.stopPropagation(),t.toTop("#angular-ui-router-3-2-1",30)}}}),i("Step",{attrs:{title:"相对命名和绝对命名",content:"相对命名和绝对命名",status:"wait"},nativeOn:{click:function(e){e.stopPropagation(),t.toTop("#angular-ui-router-3-2-2",30)}}}),i("Step",{attrs:{title:"继承依赖",content:"继承依赖",status:"wait"},nativeOn:{click:function(e){e.stopPropagation(),t.toTop("#angular-ui-router-3-2-3",30)}}})],1)],1)],1)],1),i("div",{staticClass:"px-1"},[i("div",{staticClass:"py-3 text-center"},[i("h1",[i("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" UI-Router for AngularJS (四)")],1),i("p",{staticClass:"pt-1"},[t._v("UI-Router is the defacto standard for routing in AngularJS")])]),i("h3",{staticClass:"ml-1",attrs:{id:"angular-ui-router-3-1"}},[i("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 嵌套路由")],1),i("Divider"),i("p",[t._v("嵌套路由共有四种方法，由 'dot notation'，parent property（其值可以为字符串和对象），第三方模块(stateHelper)，这里不对 stateHelper 进行介绍，需要的同学可点击"),i("a",{attrs:{href:"https://github.com/marklagendijk/ui-router.stateHelper"}},[t._v(" stateHelper")]),t._v(" 查看。")]),i("h4",{staticClass:"mb-1 ml-1"},[i("Icon",{attrs:{type:"logo-buffer"}}),t._v(" dot notation")],1),i("p",[t._v("使用嵌套路由时，默认行为是子状态将其 url 附加到其每个父状态的 url，定义的方式很简单，就是状态名的格式设置格式为  "),i("pre",{staticClass:"custom-pre"},[t._v("<parentName>.<sonName>")])]),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[i("code",{staticClass:"js"},[t._v("$stateProvider \n    .state('products', {\n        url: '/products',\n        ...\n    })\n    .state('products.list', {\n        url: '/list',\n        ...\n    });")])]),i("p",[t._v("它们路径表现为："),i("ul",{staticClass:"ml-1"},[i("li",[t._v("'products' state matches \"/products\"")]),i("li",[t._v("'products.list' state matches \"/products/list\".")])])]),i("p",[t._v("当然我们也可以为其设置绝对路径，这样就不会受父路由的影响，而操作的方式就是在配置 url 是在前面添加 ^ 即可。")]),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[i("code",{staticClass:"js"},[t._v("$stateProvider \n    .state('products', {\n        url: '/products',\n        ...\n    })\n    .state('products.list', {\n        url: '^/list',\n        ...\n    });")])]),i("p",[t._v("它们路径表现为："),i("ul",{staticClass:"ml-1"},[i("li",[t._v("'products' state matches \"/products\"")]),i("li",[t._v("'products.list' state matches \"/list\".")])])]),i("h4",{staticClass:"mb-1 ml-1"},[i("Icon",{attrs:{type:"logo-buffer"}}),t._v(" parent property")],1),i("p",[t._v("通过设置 parent 属性来指定它的父状态。")]),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[i("code",{staticClass:"js"},[t._v("// parent 的值可以是父状态的名称 \n$stateProvider\n    .state('products', {\n        url: '/products',\n        ...\n    })\n    .state('list', {\n        url: '/list',\n        parent: 'products'\n        ...\n    });\n\n// parent 的值也可以是一个描述状态的对象\nvar products = { \n    name: 'products',\n    templateUrl: 'products.html'\n}\nvar productsList = { \n    name: 'list',\n    parent: products,\n    templateUrl: 'products.list.html'\n}\n \n$stateProvider\n  .state(products)\n  .state(productsList)")])]),i("p",{staticClass:"text-info"},[t._v("父子状态的定义顺序可以随意，因为创建它们时会自动为其排队，首先创建父级状态。")]),i("p",{staticClass:"text-warn"},[t._v("如果我们定义了子状态，那么其父级状态必须存在。")]),i("p",{staticClass:"text-warn"},[t._v("状态的名称不能重复，即使它们身处不同的父级状态下。")]),i("p",{staticClass:"text-info"},[t._v("当子状态被激活时，其父级状态也会被激活。")]),i("p",{staticClass:"text-info"},[t._v("当子状态被激活时，将会加载其 template 显示在父级的 ui-view 中，当没被指定父级状态时，显示在index.html 的 ui-view 中。")]),i("h3",{staticClass:"ml-1",attrs:{id:"angular-ui-router-3-2"}},[i("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 多命名视图")],1),i("Divider"),i("p",[t._v("你可以给的视图进行命名，这样在一个模板里你可以拥有多个视图。")]),i("h4",{staticClass:"ml-1",attrs:{id:"angular-ui-router-3-2-1"}},[i("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 基本使用")],1),i("Divider"),i("p",[t._v("要创建命名视图只需要在设置路由对象时添加 views 属性。需要注意的是如果你设置了 views 属性，那么路由的 template，templateUrl，templateProvider 将会被忽略，因此你可以创建一个抽象路由来包含模板，子路由都定义在 views 属性里。")]),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[i("code",{staticClass:"html"},[t._v('\x3c!-- index.html --\x3e\n<body>\n<div ui-view="viewName1"></div>\t\n<div ui-view="viewName2"></div>\n<div ui-view="viewName3"></div>\n</body>')])]),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[i("code",{staticClass:"js"},[t._v("$stateProvider \n    .state('report', {\n        views: {\n            'viewName1': {},\n            'viewName2': {},\n            'viewName3': {}\n        }\n    });")])]),i("p",[t._v("在每个视图中可以设置自己的模板(template，templateUrl，templateProvider)和控制器(controller)。")]),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[i("code",{staticClass:"js"},[t._v("$stateProvider \n    .state('report', {\n        views: {\n            'viewName1': {\n                templateUrl: 'view1.html',\n                controller: 'ViewOneCtrl'\n            },\n            'viewName2': {\n                templateUrl: 'view2.html',\n                controller: 'ViewTwoCtrl'\n            },\n            'viewName3': {\n                templateUrl: 'view3.html',\n                controller: 'ViewThreeCtrl'\n            }\n        }\n    });")])]),i("h4",{staticClass:"ml-1",attrs:{id:"angular-ui-router-3-2-2"}},[i("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 相对命名和绝对命名")],1),i("Divider"),i("p",[t._v("在定义 views 属性时，如果视图名称中包含 @，那么视图名称就是绝对命名的方式，否则就是相对命名的方式。")]),i("p",[t._v("相对命名的意思是相对于父模板中的 ui-view，而绝对命名则指定了相对于哪个状态的模板。")]),i("p",[t._v("在定义 views 属性后，其内部如果包含了 @，那么 @ 前面部分为空表示未命名的 ui-view，@ 后面为空则表示相对于根模板，通常是 index.html。")]),i("p",{staticClass:"text-warn"},[t._v("请注意，一旦使用了 @ 则表示绝对命名的方式。")]),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[i("code",{staticClass:"html"},[t._v('\x3c!-- index.html --\x3e \n<body ng-app>\n<div ui-view></div>\n<div ui-view="status"></div>\n</body>\n\x3c!-- products.html --\x3e\n<h1>My Products</h1>\n<div ui-view></div>\n<div ui-view="detail"></div>\n\x3c!-- products.detail.html --\x3e\n<h1>Products Details</h1>\n<div ui-view="info"></div>')])]),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[i("code",{staticClass:"js"},[t._v("$stateProvider \n    .state('products', {\n        // 加载到 index.html 中未命名视图(ui-view)中\n        templateUrl: 'products.html'\n    })\n    .state('products.detail', {\n        views: {\n            // 相对命名\n            // products.html 中 <div ui-view='detail'/>\n            \"detail\": {},\n            // 相对命名\n            // 对应 products.html 中的未命名 ui-view <div ui-view/>\n            \"\": {},\n            // 绝对命名\n            // 对应 products.detail.html 中 <div ui-view='info'/>\n            \"info@products.detail\": {},\n            // 绝对命名\n            // 对应 products.html 中 <div ui-view='detail'/>\n            \"detail@products\": {},\n            // 绝对命名\n            // 对应 products.html 中的未命名视图： <div ui-view/>\n            \"@products\": {},\n            // 绝对命名\n            // 对应根模板(index.html) 中名为 status 的视图： <div ui-view='status'/>\n            \"status@\": {},\n            // 绝对命名\n            // 对应 index.html 中未命名视图：<div ui-view/>\n            \"@\": {}\n        }\n    });")])]),i("h4",{staticClass:"ml-1",attrs:{id:"angular-ui-router-3-2-3"}},[i("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 继承依赖")],1),i("Divider"),i("p",[t._v("视图可以从它们所属的状态继承解析的依赖关系，但可能不继承它们的兄弟视图的那些。")]),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[i("code",{staticClass:"js"},[t._v("$stateProvider.state('multipleViews', { \n    resolve: {\n        data1: function () {\n            return {};\n        }\n    },\n    views: {\n        'view1@multipleViews': {\n            templateUrl: 'multiple-views-view1.html',\n            controller: function ($scope, data1, data2) {\n                /* has access to data1 and data2,\n                   but *not* data3 */\n            },\n            resolve: {\n                data2: function () {\n                    return {};\n                }\n            },\n        },\n        'view2@multipleViews': {\n            templateUrl: 'multiple-views-view2.html',\n            controller: function ($scope, data1, data3) {\n                /* has access to data1 and data3,\n                   but *not* data2 */\n            },\n            resolve: {\n                data3: function () {\n                    return { value: 'view2' };\n                },\n            },\n        },\n    }\n});")])]),i("p",{staticClass:"text-right"},[t._v("还没有看够？请点击"),i("a",{attrs:{href:"/#/articles/frontend/AngularJS/angular-ui-router-4"}},[t._v(" UI-Router for AngularJS (五) ")]),t._v("查看更多内容。")]),i("p",{staticClass:"text-right"},[t._v("参考资料："),i("a",{attrs:{href:"https://github.com/angular-ui/ui-router/wiki/URL-Routing"}},[t._v("https://github.com/angular-ui/ui-router/wiki/URL-Routing")])]),i("FooterDivider")],1)])},s=[];a._withStripped=!0,i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})}}]);