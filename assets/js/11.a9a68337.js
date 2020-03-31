(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{224:function(_,v,a){"use strict";a.r(v);var t=a(19),s=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h2",{attrs:{id:"_2-1-用引用操纵对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-用引用操纵对象"}},[_._v("#")]),_._v(" 2.1 用引用操纵对象")]),_._v(" "),a("p",[_._v("Java 中用"),a("strong",[_._v("引用")]),_._v("操纵对象。")]),_._v(" "),a("h2",{attrs:{id:"_2-2-必须由你创建所有对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-必须由你创建所有对象"}},[_._v("#")]),_._v(" 2.2 必须由你创建所有对象")]),_._v(" "),a("h3",{attrs:{id:"_2-2-1-存储到什么地方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-存储到什么地方"}},[_._v("#")]),_._v(" 2.2.1 存储到什么地方")]),_._v(" "),a("p",[_._v("程序运行时，内存如何分配。有五个不同的地方可以存储数据。")]),_._v(" "),a("ol",[a("li",[a("strong",[_._v("寄存器")]),_._v("。最快的存储区，位于CPU内部，数量有限，Java中不能直接控制也感受不到它的存在。")]),_._v(" "),a("li",[a("strong",[_._v("堆栈")]),_._v("。位于RAM，即内存中。创建程序时，Java必须知道所有存储在堆栈内所有项的确切生命周期，以便上下移动堆栈指针。指针向下移动，分配新的内存，向上移动，释放对应内存。某些Java数据存储于堆栈中，特别是对象引用，但是Java对象不存储于其中。")]),_._v(" "),a("li",[a("strong",[_._v("堆")]),_._v("。通用的内存池，也位于内存。用于存放所有的Java对象。堆不同堆栈的好处是：编译器不需要知道堆中存储数据的生命周期。因此，在堆里分配存储有很大的灵活性。当需要一个对象时，只需 "),a("code",[_._v("new")]),_._v(" 写一行简单的代码，当执行时，会自动在堆里进行存储分配。缺点是：用堆进行存储可能会比用堆栈存储分配需要更长时间。")]),_._v(" "),a("li",[a("strong",[_._v("常量存储")]),_._v("。常量值通常直接存放在程序代码内部，它们永远不会被改变。可以选择将其存放在ROM中。")]),_._v(" "),a("li",[a("strong",[_._v("非RAM存储")]),_._v("。如果数据完全存活于程序之外，那么它不受程序的任何控制，在程序没有运行时也可以存在。两个基本的例子是"),a("strong",[_._v("流对象")]),_._v("和"),a("strong",[_._v("持久化对象")]),_._v("。"),a("strong",[_._v("流对象")]),_._v("中，对象转为成字节流，通常发送给另一台机器。"),a("strong",[_._v("持久化对象")]),_._v("中，对象被存放于磁盘上，因此程序终止也可以保持自己的状态。这种方式的技巧在于：可以把对象转化成可以存放在其它媒介上的食物，需要时可以恢复成常规的RAM对象。")])]),_._v(" "),a("h3",{attrs:{id:"_2-2-2-特例：基本类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-特例：基本类型"}},[_._v("#")]),_._v(" 2.2.2 特例：基本类型")]),_._v(" "),a("p",[_._v("用 "),a("code",[_._v("new")]),_._v(" 将对象存储在"),a("strong",[_._v("堆")]),_._v("里，但是用 "),a("code",[_._v("new")]),_._v(" 创建一个对象——特别是小的，简单的对象，不是很有效。因此，这里小的简单的类型不用 "),a("code",[_._v("new")]),_._v(" 来创建变量，而是用并非是引用的"),a("strong",[_._v("自动变量")]),_._v("。这个变量直接存储值，并置于"),a("strong",[_._v("堆栈")]),_._v("中，更加高效。")]),_._v(" "),a("p",[_._v("Java的基本数据类型：")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("boolean")]),_._v("。所占存储空间大小没有明确指定。")]),_._v(" "),a("li",[a("code",[_._v("char")]),_._v("。2个字节。")]),_._v(" "),a("li",[a("code",[_._v("byte")]),_._v("。1个字节。")]),_._v(" "),a("li",[a("code",[_._v("short")]),_._v("。2个字节。")]),_._v(" "),a("li",[a("code",[_._v("int")]),_._v("。4个字节。")]),_._v(" "),a("li",[a("code",[_._v("long")]),_._v("。8个字节。")]),_._v(" "),a("li",[a("code",[_._v("float")]),_._v("。4个字节。")]),_._v(" "),a("li",[a("code",[_._v("double")]),_._v("。8个字节。")]),_._v(" "),a("li",[a("code",[_._v("void")]),_._v("。")])]),_._v(" "),a("p",[_._v("每个基本都对应一个包装类型。")]),_._v(" "),a("p",[_._v("使用包装类 "),a("code",[_._v("new")]),_._v(" ,可以在"),a("strong",[_._v("堆")]),_._v("中创建一个"),a("strong",[_._v("非基本对象")]),_._v("。")]),_._v(" "),a("p",[_._v("高精度数字："),a("code",[_._v("BigInteger")]),_._v(","),a("code",[_._v("BigDecimal")]),_._v("。能用于"),a("code",[_._v("int")]),_._v("和"),a("code",[_._v("float")]),_._v("的操作，也同样能用于这两个类型。但是必须以方法调用来取代运算符。运算速度比较慢，这里以速度换取精度。\n"),a("code",[_._v("BigInteger")]),_._v(" 支持任意精度的整数。可以准确表示任何大小的整数值。\n"),a("code",[_._v("BigDecimal")]),_._v(" 支持任何精度的定点数。用它可以进行精确的货币计算。")]),_._v(" "),a("h2",{attrs:{id:"_2-3-永远不需要销毁对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-永远不需要销毁对象"}},[_._v("#")]),_._v(" 2.3 永远不需要销毁对象")]),_._v(" "),a("h3",{attrs:{id:"_2-3-1-作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-作用域"}},[_._v("#")]),_._v(" 2.3.1 作用域")]),_._v(" "),a("p",[_._v("大多数面向过程语言都有"),a("strong",[_._v("作用域")]),_._v("的概念。"),a("strong",[_._v("作用域")]),_._v("决定了在其内定义的变量名的可见性和生命周期。在C，C++，Java中，"),a("strong",[_._v("作用域")]),_._v("由"),a("strong",[_._v("花括号")]),_._v("的位置决定。")]),_._v(" "),a("p",[_._v("在"),a("strong",[_._v("作用域")]),_._v("里定义的变量只可用于"),a("strong",[_._v("作用域")]),_._v("结束之前。")]),_._v(" "),a("h3",{attrs:{id:"_2-3-2-对象的作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-对象的作用域"}},[_._v("#")]),_._v(" 2.3.2 对象的作用域")]),_._v(" "),a("p",[_._v("Java 对象不具备和基本类型一样的生命周期。当用 "),a("code",[_._v("new")]),_._v(" 创建一个 Java 对象时，它可以存活于"),a("strong",[_._v("作用域")]),_._v("之外。例如：")]),_._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("String")]),_._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("new")]),_._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[_._v('"abc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v("\n")])])]),a("p",[_._v("引用在"),a("strong",[_._v("作用域")]),_._v("终点就消失了，但是 "),a("strong",[_._v("s")]),_._v(" 指向的 "),a("code",[_._v("String")]),_._v(" 对象仍占据内存空间。我们无法在"),a("strong",[_._v("作用域")]),_._v("之后访问这个对象，因为对它唯一的引用已超出了"),a("strong",[_._v("作用域")]),_._v("的范围。")]),_._v(" "),a("p",[_._v("由 "),a("code",[_._v("new")]),_._v(" 创建的对象，只要需要就会一直保留下去。")]),_._v(" "),a("p",[_._v("这带来了一个有趣的问题。")]),_._v(" "),a("p",[_._v("如果 Java 让对象继续存在，那么靠什么才能防止这些对象填满内存空间呢，进而阻塞你的程序。")]),_._v(" "),a("p",[_._v("Java 中有一个"),a("strong",[_._v("垃圾回收器")]),_._v("，用来监视用 "),a("code",[_._v("new")]),_._v(" 创建的所有对象，并辨别那些不会再被使用的对象，随后释放这些对象的内存空间，以便供其他新的对象使用。")]),_._v(" "),a("p",[_._v("你不必担心内存回收的问题。你只需要创建对象，一旦不再需要，它们就会自行消失。这样就消除了这类编程问题（“内存泄漏”）。")]),_._v(" "),a("h2",{attrs:{id:"_2-4-创建新的数据类型：类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-创建新的数据类型：类"}},[_._v("#")]),_._v(" 2.4 创建新的数据类型：类")]),_._v(" "),a("p",[_._v("用 "),a("code",[_._v("class")]),_._v(" 关键字创建新的类型。")]),_._v(" "),a("h3",{attrs:{id:"_2-4-1-字段和方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-字段和方法"}},[_._v("#")]),_._v(" 2.4.1 字段和方法")]),_._v(" "),a("p",[_._v("Java 中你所做的工作就是定义类，产生那些类的对象，以及发送消息给这些对象。")]),_._v(" "),a("p",[_._v("一旦定义了类，就可以在类中设置两种类型的元素：字段，方法。字段可以是任何类型的对象，也可以是基本数据类型。如果字段是某个对象的引用，那么必须初始化该引用。")]),_._v(" "),a("p",[a("strong",[_._v("基本成员默认值")]),_._v("\n若某类的成员变量是基本数据类型，即使没有初始化，Java也会确保它获得一个默认值，防止产生程序错误。但是这些初始值可能不是你需要的，因此最好明确地赋初始值。")]),_._v(" "),a("p",[_._v("**注意：**局部变量不能自动初始化，否则在编译时会产生错误。")]),_._v(" "),a("h2",{attrs:{id:"_2-5-方法，参数和返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-方法，参数和返回值"}},[_._v("#")]),_._v(" 2.5 方法，参数和返回值")]),_._v(" "),a("p",[_._v("方法的基本组成部分包括：名称，参数，返回值和方法体。")]),_._v(" "),a("p",[_._v("方法名和参数列表唯一的标识出某个方法。")]),_._v(" "),a("p",[_._v("方法重写时：")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("子类返回类型可以是父类返回类型的子类。")])]),_._v(" "),a("li",[_._v("方法名必须相同。")]),_._v(" "),a("li",[_._v("参数列表必须相同。")]),_._v(" "),a("li",[_._v("访问权限不能比父类中被重写的方法的访问权限更低。")])]),_._v(" "),a("h2",{attrs:{id:"_2-6-构建一个java程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-构建一个java程序"}},[_._v("#")]),_._v(" 2.6 构建一个Java程序")]),_._v(" "),a("h3",{attrs:{id:"_2-6-1-名字可见性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-1-名字可见性"}},[_._v("#")]),_._v(" 2.6.1 名字可见性")]),_._v(" "),a("p",[_._v("Java中常见的做法是反转自己的域名，来命名包名以防止模块或类冲突，包名全部小写。")]),_._v(" "),a("h3",{attrs:{id:"_2-6-2-运用其它构架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-2-运用其它构架"}},[_._v("#")]),_._v(" 2.6.2 运用其它构架")]),_._v(" "),a("p",[_._v("使用 "),a("code",[_._v("import")]),_._v(" 导入其它"),a("strong",[_._v("类库")]),_._v("。")]),_._v(" "),a("h3",{attrs:{id:"_2-6-3-static-关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-3-static-关键字"}},[_._v("#")]),_._v(" 2.6.3 static 关键字")]),_._v(" "),a("p",[_._v("当使用 "),a("code",[_._v("static")]),_._v(" 声明一个事物，就表示这个域或对象不与包含它的那个类的任何对象实例关联在一起。这个事物被各个对象共享。面向对象语言中称它为"),a("strong",[_._v("类数据")]),_._v("或"),a("strong",[_._v("类方法")]),_._v("。")]),_._v(" "),a("p",[_._v("当 "),a("code",[_._v("static")]),_._v(" 作用于字段上时，会改变数据创建的方式，因为一个 "),a("code",[_._v("static")]),_._v(" 字段对每个类来说都只有一份存储空间，而非 "),a("code",[_._v("static")]),_._v(" 字段则是对每个对象都有一个存储空间。")]),_._v(" "),a("p",[_._v("但是，当 "),a("code",[_._v("static")]),_._v(" 作用于方法，差别却没那么大，它的一个重要用法就是在不创建任何对象的前提下就可以调用。")])])}),[],!1,null,null,null);v.default=s.exports}}]);