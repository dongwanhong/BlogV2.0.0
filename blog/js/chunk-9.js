(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{302:function(t,e,o){"use strict";o.r(e);var n=o(380),i=o(337);for(var s in i)"default"!==s&&function(t){o.d(e,t,function(){return i[t]})}(s);var l=o(0),v=Object(l.a)(i.default,n.a,n.b,!1,null,null,null);v.options.__file="src\\views\\articles\\frontend\\JS\\top-left-width-height.vue",e.default=v.exports},336:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop}}}},337:function(t,e,o){"use strict";o.r(e);var n=o(336),i=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e.default=i.a},380:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BoWen",[n("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[n("Steps",{attrs:{direction:"vertical"}},[n("Step",{attrs:{title:"JavaScript  offset相关",content:"详细分析 offsetTop、offsetLeft、offsetWidth、offsetHeight 的取值。",status:"wait"},nativeOn:{click:function(e){t.toTop("#note-01-offset",30)}}}),t._v(" "),n("Step",{attrs:{title:"JavaScript  scroll 相关",content:"详细分析 scrollTop、scrollLeft、scrollWidth、scrollHeight 的取值。"},nativeOn:{click:function(e){t.toTop("#note-01-scroll",30)}}}),t._v(" "),n("Step",{attrs:{title:"JavaScript  client 相关",content:"详细分析 clientTop、clientLeft、clientWidth、clientHeight 的取值。"},nativeOn:{click:function(e){t.toTop("#note-01-client",30)}}}),t._v(" "),n("Step",{attrs:{title:"常见的使用方式",content:"判断元素是否滚动到底。"},nativeOn:{click:function(e){t.toTop("#note-01-use",30)}}})],1)],1),t._v(" "),n("div",{staticClass:"px-1"},[n("div",{staticClass:"py-3 text-center"},[n("h1",[n("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" 详解 offsetTop、scrollTop 等DOM属性")],1),t._v(" "),n("p",{staticClass:"pt-1"},[t._v("详细分析 offsetTop、offsetLeft、offsetWidth、offsetHeight、scrollTop... 以及 clientTop...等 DOM 属性的值。")])]),t._v(" "),n("h3",{attrs:{id:"note-01-offset"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" JavaScript  offsetTop、offsetLeft、offsetWidth、offsetHeight")],1),t._v(" "),n("Divider"),t._v(" "),n("p",[n("code",[t._v("HTMLElement.offsetTop")]),t._v(" 返回当前元素相对于其 "),n("code",[t._v("offsetParent")]),t._v(" 元素的顶部的距离(一个数值，单位为像素)。")]),t._v(" "),n("p",[t._v("那么 "),n("code",[t._v("offsetParent")]),t._v(" 又是什么呢？")]),t._v(" "),n("p",[n("code",[t._v("HTMLElement.offsetParent")]),t._v(" 返回离当前元素最近的祖先级定位元素。如果没有定位的元素，则 "),n("code",[t._v("offsetParent")]),t._v(" 为最近的 "),n("code",[t._v("table")]),t._v(", "),n("code",[t._v("table cell")]),t._v(" 或根元素（标准模式下为 html；quirks 模式下为 body）。")]),t._v(" "),n("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"offsetTop",src:"//codepen.io/Anani1994/embed/QBVWNo/?height=265&theme-id=light&default-tab=js,result&embed-version=2",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[t._v("See the Pen "),n("a",{attrs:{href:"https://codepen.io/Anani1994/pen/QBVWNo/"}},[t._v("offsetTop")]),t._v(" by Anani ("),n("a",{attrs:{href:"https://codepen.io/Anani1994"}},[t._v("@Anani1994")]),t._v(") on "),n("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(" "),n("p",[t._v("对不起，您的浏览器不支持 iframe 标签。")])]),t._v(" "),n("h4",{staticClass:"pt-1"},[t._v("注意：")]),t._v(" "),n("p",{staticClass:"text-warn"},[t._v("在IE7浏览器中，"),n("code",[t._v("offsetParent")]),t._v(" 的返回值是距离它最近的父元素。")]),t._v(" "),n("p",{staticClass:"text-warn"},[t._v("如果定位的父级元素的 "),n("code",[t._v("display")]),t._v(" 属性值为 "),n("code",[t._v("none")]),t._v("，则 "),n("code",[t._v("HTMLElement.offsetParent")]),t._v(" 返回值为 "),n("code",[t._v("null")]),t._v("。")]),t._v(" "),n("p",[t._v("同理 "),n("code",[t._v("HTMLElement.offsetLeft")]),t._v(" 也是一个只读属性，返回元素左上角相对于 "),n("code",[t._v("HTMLElement.offsetParent")]),t._v(" 节点的左边界偏移的像素值。")]),t._v(" "),n("p",[n("code",[t._v("HTMLElement.offsetWidth")]),t._v(" 和 "),n("code",[t._v("HTMLElement.offsetHeight")]),t._v(" 分别返回元素的宽度和高度，包括元素的边框、内边距和元素的滚动条（如果存在且渲染的话）。")]),t._v(" "),n("img",{staticClass:"d-block p-1 m-auto",attrs:{src:o(397)}}),t._v(" "),n("h4",{staticClass:"pt-1"},[t._v("注意：")]),t._v(" "),n("p",{staticClass:"text-warn"},[n("code",[t._v("offsetTop")]),t._v(" 和 "),n("code",[t._v("offsetParent")]),t._v(" "),n("code",[t._v("offsetLeft")]),t._v(" "),n("code",[t._v("offsetWidth")]),t._v(" "),n("code",[t._v("offsetHeight")]),t._v(" 都是只读属性。")]),t._v(" "),n("h3",{attrs:{id:"note-01-scroll"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" JavaScript  scrollTop、scrollLeft、scrollWidth、scrollHeight")],1),t._v(" "),n("Divider"),t._v(" "),n("p",[n("code",[t._v("Element.scrollTop")]),t._v(" 属性可以用来获取或设置一个元素的内容垂直滚动的像素数（滚动条向下滚动的距离或者说是内容位于元素上边缘以外的尺寸）。")]),t._v(" "),n("h4",{staticClass:"pt-1"},[t._v("注意：")]),t._v(" "),n("p",{staticClass:"text-warn"},[t._v("滚动条下滑的距离与实际被遮挡内容的高度有差异。")]),t._v(" "),n("p",{staticClass:"text-warn"},[t._v("此属性只有内容超过元素的高度时才有效，产生滚动条的位置为 padding-box。")]),t._v(" "),n("p",[t._v("同理 "),n("code",[t._v("Element.scrollLeft")]),t._v(" 属性可以读取或设置元素滚动条到元素左边的距离。")]),t._v(" "),n("h4",{staticClass:"pt-1"},[t._v("注意：")]),t._v(" "),n("p",{staticClass:"text-warn"},[t._v("如果这个元素的内容排列方向（direction） 是 "),n("code",[t._v("rtl")]),t._v("，那么滚动条会位于最右侧（内容开始处），并且 "),n("code",[t._v("scrollLeft")]),t._v(" 值为 0。此时，当你从右到左拖动滚动条时，"),n("code",[t._v("scrollLeft")]),t._v(" 会从 0 变为负数（这个特性在 chrome 浏览器中不存在）。")]),t._v(" "),n("p",[n("code",[t._v("Element.scrollWidth")]),t._v(" 返回元素的内容区域宽度和元素的本身的宽度中较大的值。")]),t._v(" "),n("p",[n("code",[t._v("Element.scrollHeight")]),t._v(" 返回元素在不使用滚动条的情况下为了适应视口中所用内容所需的最小高度（padding-box）。")]),t._v(" "),n("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"scrollTop",src:"//codepen.io/Anani1994/embed/WKgwOd/?height=265&theme-id=light&default-tab=js,result&embed-version=2",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[t._v("See the Pen "),n("a",{attrs:{href:"https://codepen.io/Anani1994/pen/WKgwOd/"}},[t._v("scrollTop")]),t._v(" by Anani ("),n("a",{attrs:{href:"https://codepen.io/Anani1994"}},[t._v("@Anani1994")]),t._v(") on "),n("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(" "),n("p",[t._v("对不起，您的浏览器不支持 iframe 标签。")])]),t._v(" "),n("h4",{staticClass:"pt-1"},[t._v("注意：")]),t._v(" "),n("p",{staticClass:"text-warn"},[n("code",[t._v("Element.scrollWidth")]),t._v(" 和 "),n("code",[t._v("Element.scrollHeight")]),t._v(" 都是只读属性。")]),t._v(" "),n("h3",{attrs:{id:"note-01-client"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" JavaScript  clientTop、clientLeft、clientWidth、clientHeight")],1),t._v(" "),n("Divider"),t._v(" "),n("p",[n("code",[t._v("clientTop")]),t._v(" 表示元素顶部边框（border）的宽度，单位为像素。")]),t._v(" "),n("p",[n("code",[t._v("clientLeft")]),t._v(" 表示一个元素的左边框的宽度，单位为像素。如果元素的文本方向是从右向左（RTL, right-to-left），并且由于内容溢出导致左边出现了一个垂直滚动条，则该属性包括滚动条的宽度。")]),t._v(" "),n("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"clientTop",src:"//codepen.io/Anani1994/embed/PBdPXV/?height=265&theme-id=light&default-tab=css,result&embed-version=2",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[t._v("See the Pen "),n("a",{attrs:{href:"https://codepen.io/Anani1994/pen/PBdPXV/"}},[t._v("clientTop")]),t._v(" by Anani ("),n("a",{attrs:{href:"https://codepen.io/Anani1994"}},[t._v("@Anani1994")]),t._v(") on "),n("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(" "),n("p",[t._v("对不起，您的浏览器不支持 iframe 标签。")])]),t._v(" "),n("p",[n("code",[t._v("clientWidth")]),t._v(" 表示元素的内部（padding-box）宽度。）")]),t._v(" "),n("p",[n("code",[t._v("clientHeight")]),t._v(" 对于没有定义 "),n("code",[t._v("CSS")]),t._v(" 或者内联布局盒子的元素为 0，否则为 "),n("code",[t._v("padding-box")]),t._v(" 的高度减去水平滚动条高度。")]),t._v(" "),n("h4",{staticClass:"pt-1"},[t._v("注意：")]),t._v(" "),n("p",{staticClass:"text-warn"},[n("code",[t._v("clientTop")]),t._v(" "),n("code",[t._v("clientLeft")]),t._v(" "),n("code",[t._v("clientWidth")]),t._v(" "),n("code",[t._v("clientHeight")]),t._v(" 都是只读属性。")]),t._v(" "),n("p",{staticClass:"text-warn"},[n("code",[t._v("clientTop")]),t._v(" "),n("code",[t._v("clientLeft")]),t._v(" 不包括边距。")]),t._v(" "),n("h3",{attrs:{id:"note-01-use"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 常见的使用方式")],1),t._v(" "),n("Divider"),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("                "),n("code",{staticClass:"js"},[t._v("// 如果元素滚动到底，下面等式返回 true，没有则返回 false.\n// element.scrollHeight 整体内容的高度\n// element.scrollTop 内容位于元素上边缘以外的高度\n// element.clientHeight 元素可见区域高度\nelement.scrollHeight - element.scrollTop === element.clientHeight")]),t._v("\n            ")]),t._v(" "),n("p",{staticClass:"text-right"},[t._v("参考资料："),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/"}},[t._v("MDN")])]),t._v(" "),n("FooterDivider")],1)])},i=[];n._withStripped=!0,o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},397:function(t,e,o){t.exports=o.p+"blog/images/img-note-01.dimensions-offset.png"}}]);