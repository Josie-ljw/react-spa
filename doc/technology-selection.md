# 关于pc端单页面技术选型

# 单页应用

  单页应用(spa)是指在浏览器中运行的应用，它们在使用期间不会重新加载页面。像所有的应用一样，它旨在帮助用户完成任务，比如“编写文档”或者“管理Web服务器”。可以认为单页应用是一种从Web服务器加载的富客户端。

# 项目技术备选

1. react + webpack ...
2. vue + webpack...
3. angularjs + webpack...

# 项目技术决策 react + webpack...

[React解决了前端开发中的哪些痛点？](https://www.zhihu.com/question/39825457?sort=created)

**组件化**
  >React天生组件化这是React 的核心，除了能够在团队内部积累业务组件以外，也能找到众多开源组件的实现

**模块化**
  >基于webpack可以使用Es6或CommonJs的写法实现模块化代码，每个组件都可以进行独立的开发和测试，并且它们可以引入其它组件。

**开发效率**
  >React的代码基本就是组件的组合，分而治之的方式让代码的可阅读性很高，容易理解。而且相比于MVC几乎是去除了Controller的角色，只用关心一个render函数，不用关系视图局部的修改。
  react内部的有很好warning、error提示，可以方便定位、查询问题.

**运行效率**
  >React实现了Virtual DOM ，相比于 MVVM 框架具有更优的效率

**可维护性**
  >单向流动，对代码可以有很好的预测性，React基于flux或redux的架构设计，确定性的store很容易定位问题，react数据流,只有数据（state）变了，才会改变UI.相比于单个操作dom,数据流要清晰多了。

**速度快**
  >引入了一个叫做虚拟DOM的概念，安插在JavaScript逻辑和实际的DOM之间，提高了Web性能。在UI渲染过程中，React通过在虚拟DOM中的微操作来实对现实际DOM的局部更新。

**跨浏览器兼容**
  >虚拟DOM帮助我们解决了跨浏览器问题，它为我们提供了标准化的API，甚至在IE8中都是没问题的。

    相比其他框架，React路由的语法更加通俗易懂。
    React 认为状态是特别容易出现很多 bug 的原因, 因为人们并不善于管理大量状态,
    在 jQuery 当中, DOM 操作都是和 DOM 的状态有关的, 有时候其行为非常难预测.
    相比之下 React 中提倡属性不变, 很好地避免了 jQuery 当中遇到的问题.
    在 React 当中, DOM 的状态更新完全算法来完成, 开发者专注于数据部分,
    当数据不变时 只有一种对应的界面, 因而程序有着更好的可预测性,
    React的虚拟DOM不仅可以提升页面的性能，同时还可以防止XSS攻击
    React路由依赖于React Router。React Router 保持 UI 与 URL 同步。
    单页面JS应用程序的最大缺陷在于对搜索引擎的索引有很大限制。而React对此有了解决方案。
    React可以在服务器上预渲染应用再发送到客户端。它可以从预渲染的静态内容中恢复一样的记录到动态应用程序中。
    因为搜索引擎的爬虫程序依赖的是服务端响应而不是JavaScript的执行，预渲染你的应用有助于搜索引擎优化。

    还有一点，一直没有接触过，所以想尝试一下。


# UI组件库——[material-ui](http://www.material-ui.com/#/)

[MD设计标准](http://wiki.jikexueyuan.com/project/material-design/)

[Amaze-UI](https://github.com/amazeui/react-starter-kit)

  >兼容性差，卡，设计上跟bootstrap很像，没有太多震撼的效果

[Semantic UI](https://react.semantic-ui.com/introduction)[中文版](http://www.semantic-ui.cn/)

  > 
   1. 体积过大. 半兆的体积, 本地调试可能没问题, 可在实际网络环境可不是什么好事儿.
   2. 没形成统一规范. 看其开发文档和开发进度, 明显感受到作者是在一个一个插件去添加, 说白了是在做效果, 而不是做框架.
   3. 自适应能力不强. 适合定宽的电脑网页, 不适合自适应屏幕情况使用, 和现在的主流框架思想是相悖的.
   4. 堆叠 class 的时候也最好照着文档来，不然效果不会很理想;

[Ant Design](https://ant.design/index-cn)

  >组件不是很好看，偏后台类的，用在表格表单内比较好

[react-md](https://react-md.mlaursen.com/)

  >React-md 可以轻松地根据自己的需要进行定制，拥有良好的文档和快速上手的“入门”指南，以及许多常见的 Material 组件，可惜目前就一个人在维护。

[Material-UI](http://www.material-ui.com/#/)
<font color=#0099ff>优点</font>：

     1.github上活跃度最高

     2.只需要前端+交互就可以快速构建做出非常不错的产品

     3.设置样式简单，适合小团队，或者个人项目快速搭建前端界面。

     4.同时支持SVG/Font Icon

     5.设计风格基于Material，贴近MD设计标准

     6.控件丰富、涵盖所有典型场景

     7.效果震撼，用来当React的学习和实验辅助项目，真的是太适合了。

     8.Material-UI是一款完全基于ReactJs的控件

<font color=#0099ff>缺点：</font>

     太重，列表数据项稍微多的时候加载很卡。

     所有的样式的实现都是行内样式，所以优先级什么的还是会坑下使用者

<font color=#0099ff>双刃剑</font>：

    版本更新频率高，你可能庆幸下一个版本修改了你急需修改的bug，也可能因为下一个版本的实现方法改变了导致你要重新修改代码

[其他UI组件库的比较](http://www.iteye.com/news/32408)

# rem等比例适配所有屏幕

1. [参考](https://segmentfault.com/a/1190000007350680)

2. [实例](https://segmentfault.com/a/1190000004705207?_ea=1030036)


# 用react构建一个单页面应用

[generator-react-webpack](https://github.com/react-webpack-generators/generator-react-webpack)


**参考文献**
1. [React 入门教程](https://hulufei.gitbooks.io/react-tutorial/content/webpack.html)
2. [React-Keeper : 比React-Router更适合你的单页面路由器](https://zhuanlan.zhihu.com/p/25081540)
3. [ReactJS学习-使用webpack构建工程，使用materialUI构建前端，与hprose后端通讯](http://blog.csdn.net/keyunq/article/details/51613136)
4. [一步一步实现react spa](http://react-china.org/t/react-spa/11730)
5. [React如何优雅地写出单页面应用](https://zhuanlan.zhihu.com/p/26308250)
6. [使用 React 总结的 11 个经验教训](http://web.jobbole.com/91075/)
7. [React 构建单页应用方法与实例](http://cnodejs.org/topic/5900c8fb31e8c2bb1c3dcea1)