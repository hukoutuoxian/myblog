(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{221:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"java-代码规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-代码规范"}},[t._v("#")]),t._v(" Java 代码规范")]),t._v(" "),s("ol",[s("li",[t._v("Controller 中的方法，直接使用 "),s("code",[t._v("@PostMapping")]),t._v(" 或 "),s("code",[t._v("@GetMapping")]),t._v("例如：")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("div",{staticClass:"highlight-lines"},[s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiOperation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"保存"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" notes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"以article实体为参数"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/save"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResponseResult")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiParam")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bizArticle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"article实体"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BizArticle")]),t._v(" bizArticle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResponseResult")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"操作成功~"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bizArticleService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bizArticle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("对于单个参数如 "),s("code",[t._v("pageNumber")]),t._v(", "),s("code",[t._v("pageSize")]),t._v("等必填参数,一定要加上 "),s("code",[t._v("@RequestParam")]),t._v("，并指定"),s("code",[t._v("required=true")]),t._v("，如果使用 "),s("code",[t._v("RESTful")]),t._v(" 风格接口，则使用 "),s("code",[t._v("PathVariable")]),t._v(" 来占位，并指定 "),s("code",[t._v("required = true")]),t._v("。例如：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiOperation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"分页查询"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" notes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"以article实体为参数"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/page/{pageNumber}/{pageSize}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResponseResult")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiParam")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pageNumber"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"页码"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" required "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PathVariable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pageNumber"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" pageNumber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiParam")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pageSize"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"每页显示多少条"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" required "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PathVariable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pageSize"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" pageSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiParam")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bizArticle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"article实体"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BizArticle")]),t._v(" bizArticle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResponseResult")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"查询成功"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bizArticleService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pageSelective")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pageNumber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pageSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("bizArticle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[s("strong",[t._v("包命名")]),t._v("如果是公司的项目，以公司的域名反转。")])]),t._v(" "),s("p",[t._v("例如腾讯(tencent)，域名反转则为 com.tencent ，后面跟上项目名例如Tim，com.tencent.tim。")]),t._v(" "),s("p",[t._v("如果是自己的项目，则以自己的域名反转(没有则自定义)，例如我的域名为 yinjinbiao.top ， 反转则为 top.yinjinbiao ，如果的项目为 blog ，那么包命就是 top.yinjinbiao.blog。发布线上地址就是 "),s("a",{attrs:{href:"https://blog.yinjinbiao.top",target:"_blank",rel:"noopener noreferrer"}},[t._v("个人博客"),s("OutboundLink")],1),t._v(" 。")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("strong",[t._v("单体应用")]),t._v("的包划分。模块包命以业务划分为主，便于以后服务拆分。")])]),t._v(" "),s("p",[t._v("例如 "),s("code",[t._v("top.yinjinbiao.video.admin.controller")]),t._v(" , "),s("code",[t._v("top.yinjinbiao.video.admin.service")]),t._v(" , "),s("code",[t._v("top.yinjinbiao.video.admin.dao")]),t._v("。")]),t._v(" "),s("p",[t._v("其中 "),s("code",[t._v("service")]),t._v(" 只能调用自己包下的 "),s("code",[t._v("dao")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("controller")]),t._v(" 如果需要调用到其它模块下的 "),s("code",[t._v("service")]),t._v("，需要注明注释为跨包调用。")]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[t._v("包名统一使用小写，使用单数形式，但是类名如果有复数含义，类名可以使用复数形式。正例：应用工具类包名为 com.alibaba.ai.util、类名为 MessageUtils（此规则参考 spring 的框架结构）")])]),t._v(" "),s("li",[s("p",[t._v("在常量与变量的命名时，表示类型的名词放在词尾，以提升辨识度。如XXXXList,XXXXMap,XXXXCount。")])]),t._v(" "),s("li",[s("p",[t._v("各层命名规约：")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("A) Service/DAO 层方法命名规约\n\t1） 获取单个对象的方法用 get 做前缀。\n\t2） 获取多个对象的方法用 list 做前缀，复数形式结尾如：listObjects。 \n\t3） 获取统计值的方法用 count 做前缀。\n\t4） 插入的方法用 save/insert 做前缀。\n\t5） 删除的方法用 remove/delete 做前缀。\n\t6） 修改的方法用 update 做前缀。\nB) 领域模型命名规约\n\t1） 数据对象：xxxDO，xxx 即为数据表名。\n\t2） 数据传输对象：xxxDTO，xxx 为业务领域相关的名称。\n\t3） 展示对象：xxxVO，xxx 一般为网页名称。\n")])])]),s("ol",{attrs:{start:"7"}},[s("li",[t._v("不要使用一个常量类维护所有常量，要按常量功能进行归类，分开维护。")])]),t._v(" "),s("p",[t._v("说明：大而全的常量类，杂乱无章，使用查找功能才能定位到修改的常量，不利于理解和维护。")]),t._v(" "),s("p",[t._v("正例：缓存相关常量放在类 CacheConsts 下；系统配置相关常量放在类 ConfigConsts 下。")]),t._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[s("p",[t._v("不同逻辑、不同语义、不同业务的代码之间插入一个空行分隔开来以提升可读性。")])]),t._v(" "),s("li",[s("p",[t._v("代码精简度大于代码执行效率。如果代码可封装，但是效率变低，在可接收范围内，需要对代码进行封装以提升代码可读性。")])])]),t._v(" "),s("h2",{attrs:{id:"mysql-建表规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-建表规范"}},[t._v("#")]),t._v(" MySQL 建表规范")]),t._v(" "),s("ol",[s("li",[t._v("表达是与否概念的字段，必须使用 is_xxx 的方式命名，数据类型是 unsigned tinyint（1 表示是，0 表示否）。")])]),t._v(" "),s("p",[s("strong",[t._v("说明：")]),t._v(" 任何字段如果为非负数，必须是 unsigned。")]),t._v(" "),s("p",[s("strong",[t._v("注意：")]),t._v(" POJO 类中的任何布尔类型的变量，都不要加 is 前缀，所以，需要在"),s("code",[t._v("<resultMap>")]),t._v("设置从 is_xxx\n到 Xxx 的映射关系。数据库表示是与否的值，使用 tinyint 类型，坚持 is_xxx 的命名方式是为了明确其取\n值含义与取值范围。")]),t._v(" "),s("p",[t._v("正例：表达逻辑删除的字段名 is_deleted，1 表示删除，0 表示未删除。")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("MySQL 在 Windows 下不区分大小写，但在 Linux 下区分大小写，所以表名，字段名一律使用小写字母或数字，禁止用数字开头，禁止两个下划线之间出现数字。表名不使用复数名词。")])]),t._v(" "),s("li",[s("p",[t._v("小数使用 "),s("code",[t._v("decimal")]),t._v("，禁止使用 float 和 double。在存储的时候，float 和 double 都存在精度损失的问题，很可能在比较值的时候，得到不正确的\n结果。如果存储的数据范围超过 decimal 的范围，建议将数据拆成整数和小数并分开存储。")])]),t._v(" "),s("li",[s("p",[t._v("如果存储的字符串长度几乎相等，使用 char 定长字符串类型。varchar 是可变长字符串，不预先分配存储空间，长度不要超过 5000，如果存储长度大于此值，定义字段类型为 text，独立出来一张表，用主键来对应，避免影响其它字段索引效率。")])]),t._v(" "),s("li",[s("p",[t._v("表必备 4 个字段：id, create_time, update_time, is_delete。其中 id 必为主键，类型为 bigint unsigned、单表时自增、步长为 1。create_time, update_time\n的类型均为 datetime 类型。")])]),t._v(" "),s("li",[s("p",[t._v("字段允许适当冗余，以提高查询性能，但必须考虑数据一致。冗余字段应遵循：")])])]),t._v(" "),s("ul",[s("li",[t._v("不是频繁修改的字段。")]),t._v(" "),s("li",[t._v("不是 varchar 超长字段，更不能是 text 字段。")]),t._v(" "),s("li",[t._v("不是唯一索引的字段")])]),t._v(" "),s("p",[s("strong",[t._v("例如：")]),t._v(" 商品类目名称使用频率高，字段长度短，名称基本一不变，可在相关联的表中冗余存储类目名称，避免关联查询。")]),t._v(" "),s("ol",{attrs:{start:"7"}},[s("li",[t._v("单表行数超过 500 万行或者单表容量超过 2GB，才推荐进行分库分表。")])]),t._v(" "),s("p",[t._v("**说明：**如果预计三年后的数据量根本达不到这个级别，请不要在创建表时就分库分表。")]),t._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[t._v("如果字段存储数值不存在负数，则使用 "),s("code",[t._v("unsigned")]),t._v(" 无符号值避免误存。")])]),t._v(" "),s("h2",{attrs:{id:"mysql-sql-语句规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-sql-语句规范"}},[t._v("#")]),t._v(" MySQL SQL 语句规范")]),t._v(" "),s("h2",{attrs:{id:"mysql-orm-映射规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-orm-映射规范"}},[t._v("#")]),t._v(" MySQL ORM 映射规范")]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")])])}),[],!1,null,null,null);a.default=e.exports}}]);