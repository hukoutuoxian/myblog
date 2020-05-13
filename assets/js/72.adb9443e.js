(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{283:function(e,s,t){"use strict";t.r(s);var r=t(19),v=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),t("p",[e._v("首先的工作任务是分析现有系统，找出所有的api接口记录下来。使用"),t("code",[e._v("uniapp")]),e._v("开发出APP，用来做展现。")]),e._v(" "),t("h2",{attrs:{id:"现有系统分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#现有系统分析"}},[e._v("#")]),e._v(" 现有系统分析")]),e._v(" "),t("p",[e._v("整体采用 C/S 架构。\n"),t("code",[e._v("IIS")]),e._v(":智能化集成软件。")]),e._v(" "),t("ul",[t("li",[e._v("sw-iis 客户端100.1.0.171。")]),e._v(" "),t("li",[e._v("sw-iis ngnix静态资源服务器。http://localhost:8086")]),e._v(" "),t("li",[e._v("icms 服务器。http://100.1.0.170:8080")]),e._v(" "),t("li",[e._v("idps 服务器。http://localhost:9000")]),e._v(" "),t("li",[e._v("stream-server 流媒体服务器。http://localhost:9028")]),e._v(" "),t("li",[e._v("停车场数据查询服务。http://localhost:9007")])]),e._v(" "),t("p",[e._v("以下可能为硬件提供商提供的系统：")]),e._v(" "),t("ul",[t("li",[e._v("动力环境。100.1.0.172")]),e._v(" "),t("li",[e._v("背景音乐。100.1.0.150")]),e._v(" "),t("li",[e._v("停车场系统。100.1.0.181:8087")]),e._v(" "),t("li",[e._v("信息发布系统。100.1.0.179:81")]),e._v(" "),t("li",[e._v("无线网络管理系统。192.168.200.253")]),e._v(" "),t("li",[e._v("天翼对讲系统。61.191.45.192")])]),e._v(" "),t("h3",{attrs:{id:"sw-iis-客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sw-iis-客户端"}},[e._v("#")]),e._v(" sw-iis 客户端")]),e._v(" "),t("p",[e._v("使用的竟然是 "),t("code",[e._v("Electronjs")]),e._v("，一个使用 "),t("code",[e._v("JavaScript")]),e._v(","),t("code",[e._v("HTML")]),e._v("和"),t("code",[e._v("CSS")]),e._v("构建跨平台的桌面应用程序。我还以为用的是 "),t("code",[e._v("C#")]),e._v("。于是我把 "),t("a",{attrs:{href:"https://www.electronjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("electronjs"),t("OutboundLink")],1),e._v(" 提供的 DEMO 下了下来，并运行了一下。结果如下：")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/others/work/electronjs.jpg")}}),e._v(" "),t("p",[e._v("和 sw-iis 客户端的效果是一模一样的。")]),e._v(" "),t("p",[e._v("ip 配置的在 js 文件夹中的 "),t("code",[e._v("init.js")]),e._v("中")]),e._v(" "),t("h3",{attrs:{id:"iis-浏览器端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iis-浏览器端"}},[e._v("#")]),e._v(" iis 浏览器端")]),e._v(" "),t("p",[e._v("是一组静态html文件，放在 "),t("code",[e._v("nginx")]),e._v("下的。服务端 ip 配置的在 js 文件夹中的 "),t("code",[e._v("init.js")]),e._v("中，和 sw-iis 相同的效果，只不过是浏览器端的。")]),e._v(" "),t("h3",{attrs:{id:"icms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#icms"}},[e._v("#")]),e._v(" icms")]),e._v(" "),t("p",[e._v("icms 是为 上述 sw-iis 客户端提供部分服务的。使用javaee开发，不过技术太老了。")]),e._v(" "),t("p",[e._v("我把这个 icms 的 war 包反编译了下。里面主要使用的是"),t("code",[e._v("spring")]),e._v(","),t("code",[e._v("mybatis")]),e._v(","),t("code",[e._v("webx")]),e._v("。这个"),t("code",[e._v("webx")]),e._v("讲道理我是没听说过的，以前至少还用过"),t("code",[e._v("struts2")]),e._v("，这个"),t("code",[e._v("webx")]),e._v("是啥东西？")]),e._v(" "),t("p",[e._v("然后我把所有反编译的文件重构成了一个 web 工程。。各种报错，实在懒得搞了。")]),e._v(" "),t("h3",{attrs:{id:"stream-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stream-server"}},[e._v("#")]),e._v(" stream-server")]),e._v(" "),t("p",[e._v("stream-server 为流媒体服务器，发布的端口为 9028。简单集成了 ffmpeg 用来推流到 stream-server ，使用 websocket 。")]),e._v(" "),t("p",[e._v("stream-server 是使用基于 node.js，使用ffmpeg 和 jsmpeg 做成的websocket服务器，使用go语言仅仅是用来跳转页面和查询摄像头配置，真正播放视频流主要是 ffmpeg 将 rtsp 视频流解析为 mpeg1video 推送给 stream-server 中的 websocket 接口。")]),e._v(" "),t("p",[e._v("页面上由 websocket 协议请求 stream-server ，由 canvas 标签绘制一帧帧绘制视频。")]),e._v(" "),t("h3",{attrs:{id:"isql-jar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isql-jar"}},[e._v("#")]),e._v(" isql.jar")]),e._v(" "),t("p",[e._v("停车场系统的服务。其实只是帮我们运行了几个sql语句，返回json数据给我们。没有任何权限。")]),e._v(" "),t("h3",{attrs:{id:"idps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#idps"}},[e._v("#")]),e._v(" idps")]),e._v(" "),t("p",[e._v("采用定时任务从opc不断查询数据，写入到icmsdb的point_base数据库中。icms页面中进行轮询设备状态，用不同图片展示不同设备的状态。")]),e._v(" "),t("p",[e._v("采石中只有动力环境和广播系统。")]),e._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.electronjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("electronjs"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/u014535295/article/details/99303890?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-2&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("html5播放rtsp方案"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=v.exports}}]);