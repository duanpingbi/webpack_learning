简单搭建webpack4.x+react(jsx+less)
1.webpack基本概念：
js的应用程序的静态打包器，
核心概念：
入口（entry）
输出（output）
loader
plugins

2.插件
html-webpack-plugin：按照模板生成html并且引入相关文件资源
mini-css-extract-plugin：将css抽离出来，并且引入在html文件中，
与style-loader不同在于style-loader会动态生成style标签，
并且会插入到页面的head标签里面。
3.配置 babel
1）安装插件
在项目根目录下指定下面命令，作用是使得 babel 正常执行：
npm install --save-dev @babel/core @babel/preset-env
为了将它连接到Webpack，还需要安装一个加载器：
npm install --save-dev babel-loader
还需要一个配置，来将 React 的 jsx 语法转化成 JavaScript:
npm install --save-dev @babel/preset-react
2.配置webpack.config.js
3在项目根目录下创建 .babelrc 文件,内如如下：
{
  "presets": ["env", "stage-0", "react"],
  "plugins": ["transform-runtime","transform-react-jsx"]
}