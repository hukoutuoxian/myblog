(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{236:function(t,_,s){"use strict";s.r(_);var a=s(19),v=Object(a.a)({},(function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("以下载的安装包为两个压缩包为例。")]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("将两个压缩包解压至同一目录。")])]),t._v(" "),s("li",[s("p",[t._v("点击 "),s("code",[t._v("setup.exe")]),t._v(" 开始安装，安装过程中选择 "),s("code",[t._v("桌面版")]),t._v("。")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("输入的口令就是后面要用到的密码。")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[t._v("安装检查时，如果全部失败，点击忽略即可。")])]),t._v(" "),s("li",[s("p",[t._v("安装完毕，点击口令管理，解锁 "),s("code",[t._v("scott")]),t._v(" 用户，以备测试。")])]),t._v(" "),s("li",[s("p",[t._v("cmd下，输入"),s("code",[t._v("sqlplus")]),t._v("，若成功登录则成功。")])])]),t._v(" "),s("h2",{attrs:{id:"pl-sql的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pl-sql的配置"}},[t._v("#")]),t._v(" PL/SQL的配置")]),t._v(" "),s("p",[t._v("如果使用 PL/SQL ，则需要配置。若使用 Navicat，便省去这一麻烦。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("打开PL/SQL，不登录。")])]),t._v(" "),s("li",[s("p",[t._v("进入 "),s("code",[t._v("tools")]),t._v(" 下的 "),s("code",[t._v("preference(首选项)")]),t._v(","),s("code",[t._v("connect(连接)")]),t._v("将 oracle 安装目录和 oci.dll 配置。如：")])])]),t._v(" "),s("p",[s("code",[t._v("主目录：D:\\newapp\\Administrator\\product\\11.2.0")])]),t._v(" "),s("p",[s("code",[t._v("oci：D:\\app\\Administrator\\product\\instantclient-basic-win32-10.2.0.5\\instantclient_10_2\\oci.dll")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("由于 PL/SQL 只有32位的dll,最好去网上下个oracle instantclient 32位客户端。\n主要是需要 oci.dll 来连接数据库。")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("配置完毕，使用 "),s("code",[t._v("scott")]),t._v(" 用户和密码测试登录。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("如果报 make sure ...32bit oci.dll 说明oci.dll配置出错，去确认你配置的oci.dll是否为32位的。\n如果报tns错误，说明找不到tnsnames.ora,这时候先去检测你的环境变量有没有配置好。")])]),t._v(" "),s("h2",{attrs:{id:"配置环境变量-待修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量-待修改"}},[t._v("#")]),t._v(" 配置环境变量(待修改)")]),t._v(" "),s("ol",[s("li",[t._v("ORACLE_HOME：数据库的实例启动所需要的所有的程序和相关的文件（除了数据库外）。")])]),t._v(" "),s("p",[t._v("新建一个变量ORACLE_HOME:D:\\app\\Administrator\\product\\11.2.0\\dbhome_2，在path中添加：%ORACLE_HOME%\\BIN")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("NLS_LANG：配置客户端的字符集。注意一般配置成 utf-8 的编码")])]),t._v(" "),s("p",[s("code",[t._v("NLS_LANG:AMERICAN_AMERICA.UTF8")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("TNS_ADMIN: 监听数据库tns，PL/SQL登陆时才能才能显示其中的数据库连接的信息。")])]),t._v(" "),s("p",[s("code",[t._v("TNS_ADMIN:D:\\install\\instantclient_12_1\\NETWORK\\ADMIN")])]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/Begodpath/p/9307567.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("我的博客园"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=v.exports}}]);