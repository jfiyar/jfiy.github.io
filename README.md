# web starter

## 2020 年 1 月 15 日

### 概览

- 初始化项目；
- 添加依赖 webpack、webpack-cli；

### 笔记

- webpack-cli 可以使 package.json 中使用 webpack 指令，cli 全称 command line interface，即命令行界面；
- webpack 的核心是入口开始，处理引用、依赖关系，将多个文件打包为一个或多个文件；
- webpack --watch 参数可以自动监听变更，自动重新打包
- 在 webpack 中有三种 hash 可以配置，分别是 hash、chunkhash、contenthash，我还没弄明白
- hash 所有文件哈希值相同，只要改变内容跟之前的不一致，所有哈希值都改变，没有做到缓存意义
- chunkhash 当有多个 chunk，形成多个 bundle 时，如果只有一个 chunk 和一个 bundle 内容变了，其他的 bundle 的 hash 都会发生变化，因为大家都是公用的一个 hash，这个时候 chunkhash 的作用就出来了。它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的 chunk，生成对应的哈希值。
- contenthash 在打包的时候我们会在 js 中导入 css 文件，因为他们是同一个入口文件，如果我只改了 js 得代码，但是他的 css 抽取生成 css 文件时候 hash 也会跟着变换。这个时候 contenthash 的作用就出来了。
- 入口增加 module.hot.accept()并配置 hot:true 启动热替换
