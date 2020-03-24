(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{275:function(t,n,e){"use strict";e.r(n);var a=e(19),r=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("h3",{attrs:{id:"主要用处"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主要用处"}},[t._v("#")]),t._v(" 主要用处")]),t._v(" "),e("ul",[e("li",[t._v("http服务器")]),t._v(" "),e("li",[t._v("虚拟主机")]),t._v(" "),e("li",[t._v("反向代理")]),t._v(" "),e("li",[t._v("负载均衡")])]),t._v(" "),e("h2",{attrs:{id:"虚拟主机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟主机"}},[t._v("#")]),t._v(" 虚拟主机")]),t._v(" "),e("p",[t._v("Nginx 可以用来做虚拟主机，即静态资源服务器。\n参考配置文件,每一个server就是一个虚拟主机，如果访问 80 端口下配置的一个 location 中寻找对应的页面，例如这里是 "),e("code",[t._v("/usr/share/nginx/wwwroot/html80")]),t._v(" 文件夹\n如果访问 8080 端口，则会到 8080 端口配置的另一个location中寻找。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("worker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n    \n    keepalive_timeout  65;\n    # 配置虚拟主机 192.168.75.145\n    server {\n\t# 监听的ip和端口，配置 192.168.75.145:80\n        listen       80;\n\t# 虚拟主机名称这里配置ip地址\n        server_name  192.168.75.145;\n\t# 所有的请求都以 / 开始，所有的请求都可以匹配此 location\n        location / {\n\t    # 使用 root 指令指定虚拟主机目录即网页存放目录\n\t    # 比如访问 http://ip/index.html 将找到 /usr/local/docker/nginx/wwwroot/html80/index.html\n\t    # 比如访问 http://ip/item/index.html 将找到 /usr/local/docker/nginx/wwwroot/html80/item/index.html\n\n            root   /usr/share/nginx/wwwroot/html80;\n\t    # 指定欢迎页面，按从左到右顺序查找\n            index  index.html index.htm;\n        }\n\n    }\n    # 配置虚拟主机 192.168.75.245\n    server {\n        listen       8080;\n        server_name  192.168.75.145;\n\n        location / {\n            root   /usr/share/nginx/wwwroot/html8080;\n            index  index.html index.htm;\n        }\n    }\n}\n")])])]),e("h3",{attrs:{id:"nginx的惊群问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx的惊群问题"}},[t._v("#")]),t._v(" Nginx的惊群问题")]),t._v(" "),e("p",[t._v("1.11.3版本之前的nginx发挥cpu多核架构性能所产生的负面问题，使用多个worker子进程监听相同的端口，导致多个子进程在accept连接时会有争抢，浪费系统资源，导致系统性能的下降。\nnginx后来的解决方法是同一时刻只有一个worker子进程监听一个端口。")]),t._v(" "),e("h2",{attrs:{id:"反向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#反向代理"}},[t._v("#")]),t._v(" 反向代理")]),t._v(" "),e("p",[t._v("代理服务器，客户机在发送请求时，不会直接发送给目的主机，而是先发送给代理服务器，代理服务接受客户机请求之后，再向主机发出，并接收目的主机返回的数据，存放在代理服务器的硬盘中，再发送给客户机。")]),t._v(" "),e("h3",{attrs:{id:"什么是正向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是正向代理"}},[t._v("#")]),t._v(" 什么是正向代理")]),t._v(" "),e("p",[t._v("正向代理，架设在客户机与目标主机之间，只用于代理内部网络对 Internet 的连接请求，客户机必须指定代理服务器,并将本来要直接发送到 Web 服务器上的 Http 请求发送到代理服务器中。\n代理客户端装在客户机本身，我们请求的直接是目标站点。")]),t._v(" "),e("h3",{attrs:{id:"什么是反向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是反向代理"}},[t._v("#")]),t._v(" 什么是反向代理")]),t._v(" "),e("p",[t._v("反向代理服务器架设在服务器端，通过缓冲经常被请求的页面来缓解服务器的工作量，将客户机请求转发给内部网络上的目标服务器；并将从服务器上得到的结果返回给 Internet 上请求连接的客户端，此时代理服务器与目标主机一起对外表现为一个服务器。\n反向代理装在服务器端，我们请求的是反向代理服务器，不需要关心最终的目标站点。")]),t._v(" "),e("h3",{attrs:{id:"如何使用反向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何使用反向代理"}},[t._v("#")]),t._v(" 如何使用反向代理")]),t._v(" "),e("p",[t._v("nginx可以将多个服务聚合在一起，我们只需要访问nignx的ip地址，即可获取各个服务的资源。\n参考配置")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("user  nginx;\nworker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n\n    keepalive_timeout  65;\n\t\n\t# 配置一个代理即 tomcat1 服务器\n\tupstream tomcatServer1 {\n\t\tserver 192.168.75.145:9090;\n\t}\n\n\t# 配置一个代理即 tomcat2 服务器\n\tupstream tomcatServer2 {\n\t\tserver 192.168.75.145:9091;\n\t}\n\n\t# 配置一个虚拟主机\n\tserver {\n\t\tlisten 80;\n\t\tserver_name admin.service.itoken.funtl.com;\n\t\tlocation / {\n\t\t\t\t# 域名 admin.service.itoken.funtl.com 的请求全部转发到 tomcat_server1 即 tomcat1 服务上\n\t\t\t\tproxy_pass http://tomcatServer1;\n\t\t\t\t# 欢迎页面，按照从左到右的顺序查找页面\n\t\t\t\tindex index.jsp index.html index.htm;\n\t\t}\n\t}\n\n\tserver {\n\t\tlisten 80;\n\t\tserver_name admin.web.itoken.funtl.com;\n\n\t\tlocation / {\n\t\t\t# 域名 admin.web.itoken.funtl.com 的请求全部转发到 tomcat_server2 即 tomcat2 服务上\n\t\t\tproxy_pass http://tomcatServer2;\n\t\t\tindex index.jsp index.html index.htm;\n\t\t}\n\t}\n}\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("与虚拟主机配置不同的地方在于proxy_pass和root，root是在本机，proxy_pass是转发。")])]),t._v(" "),e("h2",{attrs:{id:"负载均衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[t._v("#")]),t._v(" 负载均衡")]),t._v(" "),e("p",[t._v("使用nginx实现负载均衡，类似于eureka那种效果，参考配置：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("user  nginx;\nworker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n\n    keepalive_timeout  65;\n\t\n\tupstream myapp1 {\n\t\tserver 192.168.75.145:9090 weight=10;\n\t\tserver 192.168.75.145:9091 weight=10;\n\t}\n\n\tserver {\n\t\tlisten 80;\n\t\tserver_name nginx.funtl.com;\n\t\tlocation / {\n\t\t\tproxy_pass http://myapp1;\n\t\t\tindex index.jsp index.html index.htm;\n\t\t}\n\t}\n}\n")])])]),e("h3",{attrs:{id:"相关配置说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关配置说明"}},[t._v("#")]),t._v(" 相关配置说明")]),t._v(" "),e("p",[t._v("与反向代理不同的一点是，需要将负载均衡的设备配置到一个upstream中，并分配权重。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 定义负载均衡设备的 Ip及设备状态 \nupstream myServer {\n    server 127.0.0.1:9090 down;\n    server 127.0.0.1:8080 weight=2;\n    server 127.0.0.1:6060;\n    server 127.0.0.1:7070 backup;\n}\n")])])]),e("p",[t._v("在需要使用负载的 Server 节点下添加")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("proxy_pass http://myServer;\n")])])]),e("h4",{attrs:{id:"upstream-权重配置详解："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upstream-权重配置详解："}},[t._v("#")]),t._v(" upstream 权重配置详解：")]),t._v(" "),e("ul",[e("li",[t._v("upstream：每个设备的状态:")]),t._v(" "),e("li",[t._v("down：表示当前的 server 暂时不参与负载")]),t._v(" "),e("li",[t._v("weight：默认为 1 weight 越大，负载的权重就越大。")]),t._v(" "),e("li",[t._v("max_fails：允许请求失败的次数默认为 1 当超过最大次数时，返回 proxy_next_upstream 模块定义的错误")]),t._v(" "),e("li",[t._v("fail_timeout:max_fails 次失败后，暂停的时间。")]),t._v(" "),e("li",[t._v("backup：其它所有的非 backup 机器 down 或者忙的时候，请求 backup 机器。所以这台机器压力会最轻")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" try_files      $uri $uri/ =404;\n")])])]),e("p",[t._v("try_files 的第一个 "),e("code",[t._v("$uri")]),t._v(" 代表 Nginx 会去硬盘的对应路径寻找文件，如果找不到，则尝试在访问的 uri 后面追加 "),e("code",[t._v("/")]),t._v("，并继续在硬盘中寻找对应目录，处理同上，否则将这次请求内部重定向到最后一个参数，也就是返回404。")]),t._v(" "),e("h2",{attrs:{id:"使用nginx搭建一个伪cdn服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用nginx搭建一个伪cdn服务器"}},[t._v("#")]),t._v(" 使用nginx搭建一个伪CDN服务器")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://baike.baidu.com/item/CDN/420951?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("CDN"),e("OutboundLink")],1),t._v("\n其实就是把nginx当成一个http服务器，将所需要的静态资源放在里面。")]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")])])}),[],!1,null,null,null);n.default=r.exports}}]);