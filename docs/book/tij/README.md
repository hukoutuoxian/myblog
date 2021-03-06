---
title: 第1章 对象导论
---

## 1.2 每个对象都有一个接口
类描述了具有相同特性和行为的对象集合，所以一个类就是一个类型。程序员通过类来适应问题，不再被迫只能使用现有的数据类型。

UML 统一建模语言，每个类都用一个方框表示，类名在方框的顶部，所有的任何数据成员都描述在方框的中间部分，方法在方框的底部。
::: tip
通常，只有类名和公共方法被适于UML设计图中。
:::

## 1.3 将对象看为服务提供者
开发时，最好就是将对象想象为 “服务提供者”，程序本身向用户提供服务，它是通过调用其它对象提供的服务来实现这一目的。你的目标就是去创建（最好在已有代码库中寻找）能够提供理想的服务的一系列对象。

**高内聚**是软件设计的基本质量要求之一：它指的是一个软件构件的各个方面组合得很好。

在良好的面向对象设计中，每个对象都可以很好的完成某一项任务，但是它并不试图去做更多的事。

将对象看为服务提供者是件伟大的简化工具，当其他人试图理解你的代码或重用某个对象时，它会使基于原有方法，调整对象以适应其设计变得简单很多。

## 1.4 访问权限关键字
Java用三个关键词在**类的内部**设定边界：`public`,`private`,`protected`.

- `public` 表示元素对任何人都是可用的。
- `private` 表示只有类型创建者和本类型内部方法能访问。
- `protected` 表示继承的类可以方法该元素。
- default 包访问权限，它是Java默认的访问权限，当没有以上三个关键词时，它将发挥作用。在这种权限下，类可以访问同一个包中其它类的 default 成员。但是包之外，这些 default 成员如同指定了 `private`。

## 1.5 代码复用（组合和继承）
一个类被创建和测试后就可被复用，但是这种复用性别不容易达到期望的效果，产生一个可复用性的对象设计需要经验和洞察力。一旦你有了这样的设计，它就可供复用。**代码复用**是面向对象程序设计语言所提供最了不起的优点之一。

- 组合。使用现有的类合成新的类。例如：汽车类和引擎类。
- 继承。继承在面向对象程序设计中非常重要，但是处处都使用继承会导致难以使用并过分复杂的设计。实际上，在创建新类时，应该首先考虑**组合**，它更简单灵活，设计会更清晰。

## 1.6 继承
当我们创建一个类时，即使有另一个新类与其具有相似的功能，你还是得重新创建一个新类。
如果我们能在现有类的基础上，复制它，然后通过添加和修改这个类的副本来创建新类就好多了。

**继承**便是这个问题的解决方法。不过也有个问题。

当父类发生变动时，子类也会反映这种变动。

父类包含其所有子类所共享的特性和行为，在父类的基础上可以通过添加额外的特性或行为来导出更具体的子类型。

UML 用例图中，用空心三角形来表示。

当继承现有类型时，这个新类型不仅包含现有类型的所有成员（包括`private`成员，尽管它不能被访问）,更重要的是所有可以发给父类对象的消息同时也可以发送给子类对象。

两种方法使子类和父类之间产生差异：
1. 在子类中添加新方法。这种方式可以描述为**is-like-a**。
2. 改变现有父类的方法，称之为**覆盖（overriding）**。这种方式没有提供新的接口，可以用**is-a**来表示


## 1.7 前期绑定和后期绑定

一个非面向对象编程的编译器产生的函数调用会引起所谓的**前期绑定**。这意味着编译器将产生对某一个具体函数名字的调用，运行时将这个调用解析到将要被执行的代码的绝对地址。

然而，在OOP中，程序直到运行时才能够确定代码的地址。

因此，面向对象程序设计语言采用**后期绑定**的概念。当向对象发送消息时，被调用的代码直到运行时才能确定。编译时只对参数和返回值执行类型检查。

把子类看作是它的父类的过程称为**向上转型**。

对于**多态**，我们只需要知道事情会发生，编译器和运行系统会处理相关的细节，我们更重要的是如何通过他来对我们的代码进行设计。


## 1.8 终极基类 Object

Java 中，存在一个终极基类 Object .

单根继承结构保证所有对象都具备某些功能。

单根继承结构使垃圾回收器的实现也容易许多。

 
## 1.9 容器

不同容器提供了不同类型的接口和外部行为。不同的容器对于某些操作具有不同的效率。例如，`ArrayList` 和 `LinkedList`，它们的具有相同的接口和外部行为的简单序列。但是它们对某些操作的效率却天壤之别。

`ArrayList` 中，随机访问元素是一个花费固定时间的操作。
`LinkedList` 中，随机访问元素需要再列表中移动，这种代价是高昂的，访问越靠近表尾的元素，花费时间越长。

而另一方面，如果想在序列中间插入一个元素，`LinkedList`的开销却比`ArrayList` 要小。

上述操作以及其它操作的效率，依序列底层数据结构的不同而存在很大的差异。

Java SE5之前，容器中存储的对象都只具有Java的通用类型：`Object`。这虽然使容器可以存储任何类型的对象，但是由于容器只能存储 `Object`类型，所以将对象引用置入容器时，它必须被**向上转型**为 `Object`。但是在取回时，就只会获得`Object`引用，从而丢失了其身份。而**向下转型**几乎是不安全的。

所以，JavaSE5引入了泛型的概念。从而不需要**向下转型**，消除了犯错误的可能性。

## 1.10 栈内存和堆内存

对于允许在堆栈上创建对象的语言，编译器可以确定对象存活的时间，并可以自动销毁它。然而，如果是在堆上创建对象，编译器就会对它的生命周期一无所知。

Java的垃圾回收器被设计用来处理内存释放问题。垃圾回收器知道对象合适不再被使用，并自动释放对象占用的内存。

Java把内存分成两种，一种叫做栈内存，一种叫做堆内存。

在函数中定义的一些基本类型的变量和对象的引用变量都是在函数的栈内存中分配。当在一段代码块中定义一个变量时，Java就在栈中为这个变量分配内存空间，当超过变量的作用域后，Java会自动释放掉为该变量分配的内存空间，该内存空间可以立刻被另作他用。

堆内存用于存放由`new`创建的对象和数组。在堆中分配的内存，由Java虚拟机自动垃圾回收器来管理。在堆中产生了一个数组或者对象后，还可以在栈中定义一个特殊的变量，这个变量的取值等于数组或者对象在堆内存中的首地址，在栈中的这个特殊的变量就变成了数组或者对象的引用变量，以后就可以在程序中使用栈内存中的引用变量来访问堆中的数组或者对象，引用变量相当于为数组或者对象起的一个别名，或者代号。

引用变量是普通变量，定义时在栈中分配内存，引用变量在程序运行到作用域外释放。而数组＆对象本身在堆中分配，即使程序运行到使用`new`产生数组和对象的语句所在地代码块之外，数组和对象本身占用的堆内存也不会被释放，数组和对象在没有引用变量指向它的时候，才变成垃圾，不能再被使用，但是仍然占着内存，在随后的一个不确定的时间被垃圾回收器释放掉。这个也是Java比较占内存的主要原因，实际上，**栈中的变量指向堆内存中的变量**，这就是 Java 中的指针!

栈的优势是，存取速度比堆要快，仅次于寄存器，栈数据可以共享。但缺点是，存在栈中的数据大小与生存期必须是确定的，缺乏灵活性。栈中主要存放一些基本类型的变量和对象句柄。 

此外，栈有一个很重要的特殊性，就是存在栈中的数据可以共享。
假设我们同时定义：
``` 
int a = 3; 
int b = 3; 
```
编译器先处理`int a = 3;`首先它会在栈中创建一个变量为a的引用，然后查找栈中是否有3这个值。

如果没找到，就将3存放进来，然后将a指向3。

接着处理int b = 3，因为在栈中已经有 3 这个值，便将b直接指向 3。

::: tip
要注意这种数据的共享与两个对象的引用同时指向一个对象的这种共享是不同的，因为这种情况一个的修改并不会影响到b，它是由编译器完成的，它有利于节省空间。而一个对象引用变量修改了这个对象的内部状态，会影响到另一个对象引用变量。
:::

## 1.11 异常

异常是一种对象，它从错误地点被“抛出”，并被专门设计用来的异常处理器“捕获”。

异常处理就像是与程序正常执行路径并行的，在错误时可以执行的一条路径。

例如：当我们需要读取一个文件时，但是无法确定文件存在位置，所以我们就可以使用异常，在异常捕获时，从另一个途径读取文件。

异常处理是一条完全分离的执行途径，它不会干扰正常的执行代码。


## 1.12 并发编程

计算机编程中，存在一个基本概念，就是同一时刻处理多个任务的思想。最早，是通过硬件中断来实现的。但是这种方式难度太大，费时费力。

在程序中，有些彼此独立运行的部分称之为线程。如果是单一处理器，线程只是一种分配执行时间的手段。但是如果是多处理器，那么每个任务都可以被指派给不同的处理器，并且它们是在真正的并行执行。

这种并发下出现了一个隐患：共享资源。如果同时需要访问统一资源，就会出问题。所以过程是，某个任务锁定某项资源，完成任务后，释放资源锁，使其它任务可以使用这项资源。