(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{317:function(t,a,i){"use strict";i.r(a);var e=i(465),n=i(389);for(var s in n)"default"!==s&&function(t){i.d(a,t,function(){return n[t]})}(s);var o=i(0),r=Object(o.a)(n.default,e.a,e.b,!1,null,null,null);r.options.__file="src\\views\\articles\\frontend\\JS\\JS-09.vue",a.default=r.exports},388:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{toTop:this.$util.toTop}}}},389:function(t,a,i){"use strict";i.r(a);var e=i(388),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,function(){return e[t]})}(s);a.default=n.a},465:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("BoWen",[i("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[i("Steps",{attrs:{direction:"vertical"}},[i("Step",{attrs:{title:"基本概念",content:"基本概念",status:"wait"},nativeOn:{click:function(a){t.toTop("#JS-09-1",30)}}}),i("Step",{attrs:{title:"标记清除",content:"标记清除",status:"wait"},nativeOn:{click:function(a){t.toTop("#JS-09-2",30)}}}),i("Step",{attrs:{title:"引用计数",content:"引用计数",status:"wait"},nativeOn:{click:function(a){t.toTop("#JS-09-3",30)}}}),i("Step",{attrs:{title:"性能问题",content:"性能问题",status:"wait"},nativeOn:{click:function(a){t.toTop("#JS-09-4",30)}}}),i("Step",{attrs:{title:"管理内存",content:"管理内存",status:"wait"},nativeOn:{click:function(a){t.toTop("#JS-09-5",30)}}})],1)],1),i("div",{staticClass:"px-1"},[i("div",{staticClass:"py-3 text-center"},[i("h1",[i("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" JS-垃圾收集")],1),i("p",{staticClass:"pt-1"},[t._v("JavaScript 具有自动垃圾收集机制，执行环境会负责管理代码执行过程中使用的内存")])]),i("h3",{staticClass:"ml-1",attrs:{id:"JS-09-1"}},[i("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 基本概念")],1),i("Divider"),i("p",[t._v("在编写 JavaScript 程序时，开发人员不用再关心内存使用问题，所需内存的分配以及无用内存的回收完全实现了自动管理。")]),i("p",[t._v("垃圾收集机制的原理其实很简单：找出那些不再继续使用的变量， 然后释放其占用的内存。")]),i("p",{staticClass:"text-info"},[t._v("垃圾收集器会按照固定的时间间隔（或代码执行中预定的收集时间），周期性地执行这一操作。")]),i("p",[i("span",{staticClass:"text-info"},[t._v("函数中局部变量的生命周期: 局部变量只在函数执行的过程中存在。")]),i("span",[t._v("而在这个过程中，会为局部变量在栈（或堆）内存上分配相应的空间，以存储它们的值。")])]),i("p",[t._v("垃圾收集器必须跟踪哪个变量有用哪个变量没用，对于不再有用的变量打上标记，以备将来收回其占用的内存。")]),i("h3",{staticClass:"ml-1",attrs:{id:"JS-09-2"}},[i("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 标记清除")],1),i("Divider"),i("p",[t._v("JavaScript 中最常用的垃圾收集方式是标记清除（mark-and-sweep）。")]),i("p",[t._v("当变量进入环境（例如，在函 数中声明一个变量）时，就将这个变量标记为“进入环境”。")]),i("p",[t._v("当变量离开环境时，则将其 标记为“离开环境” 。")]),i("p",[t._v("垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记，然后，它会去掉环境中的变量以及被环境中的变量引用的变量的标记。而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。")]),i("p",[t._v("最后，垃圾收集器完成内存清除工作，销毁那些带标记的值并回收它们所占用的内存空间。")]),i("h3",{staticClass:"ml-1",attrs:{id:"JS-09-3"}},[i("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 引用计数")],1),i("Divider"),i("p",[t._v("另一种不太常见的垃圾收集策略叫做引用计数（reference counting）。")]),i("p",[t._v("引用计数的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是 1。")]),i("p",[t._v("如果同一个值又被赋给另一个变量，则该值的引用次数加 1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减 1。")]),i("p",[t._v("当这个值的引用次数变成 0 时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。")]),i("p",[t._v("引用计数策略会涉及到一个叫做循环引用的问题，"),i("span",{staticClass:"text-info"},[t._v("循环引用指的是对象 A 中包含一个指向对象 B 的指针，而对象 B 中也包含一个指向对象 A 的引用。")])]),i("p",[t._v("循环引用的两个对象的引用次数永远不会是 0。")]),i("p",[t._v("在 IE9 之前 BOM 和 DOM 对象并不是真正的 JavaScript 对象，是以 COM 对象的形式实现的，而 COM 对象的垃圾回收机制采用的是引用计数，所以只要在 IE 中涉及 COM 对象，就会 存在循环引用的问题。")]),i("p",[t._v("比如在一个 DOM 元素与一个原生 JavaScript 对象之间创建了循环引用，若将其中的 DOM 从页面中移除，它也永远不会被回收，要想解决这个问题最好是在不使用它们的时候手工断开原生 JavaScript 对象与 DOM 元素之间的连接，也就是将各自的指针指向 null，当垃圾收集器下次运行时，就会删除这些值并回收它们所占内存。")]),i("p",[t._v("IE9 把 BOM 和 DOM 对象都转换成了真正的 JavaScript 对象。")]),i("h3",{staticClass:"ml-1",attrs:{id:"JS-09-4"}},[i("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 性能问题")],1),i("Divider"),i("p",[t._v("垃圾收集器是周期性运行的，确定垃圾收集的时间间隔是一个非常重要的问题。")]),i("p",[t._v("如果为变量分配的内存数量很可观，那么回收工作量也是相当大的。")]),i("p",[t._v("在有的浏览器中可以触发垃圾收集过程，但不建议这样做。")]),i("p",[t._v("在 IE 中，调用 window.CollectGarbage() 方法会立即执行垃圾收集。")]),i("p",[t._v("在 Opera 7 及更高版本中，调用 window.opera.collect() 也会启动垃圾收集例程。")]),i("h3",{staticClass:"ml-1",attrs:{id:"JS-09-5"}},[i("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 管理内存")],1),i("Divider"),i("p",[t._v("内存限制问题不仅会影响给变量分配内存，同时还会影响调用栈以及在一个线程中能够同时执行的语句数量。 ")]),i("p",[t._v("执行中的代码只保存必要的数据。一旦数据不再有用，最好通过将其值设置为 null 来释放其引用——这个做法叫做解除引用（dereferencing）。")]),i("p",{staticClass:"text-right"},[t._v("参考资料：JavaScript 高级程序设计（第三版）")]),i("FooterDivider")],1)])},n=[];e._withStripped=!0,i.d(a,"a",function(){return e}),i.d(a,"b",function(){return n})}}]);