const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  plugins: [
    // 自动生成入口的index.html,并引入打包的js
    new HtmlWebpackPlugin(),
    // 自动清除打包的目录
    new CleanWebpackPlugin(),
    new UglifyJsPlugin()
  ],
  devServer: {
    hot: true
  },
  output: {
    filename: "[hash:8].js",
    path: path.resolve(__dirname, "../dist")
  }
};
