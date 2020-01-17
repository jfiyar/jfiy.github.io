const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

module.exports = () => {
  return {
    mode: "development",
    devServer: {
      hot: true,
      quiet: true,
      open: true
    },
    entry: "./src/index.tsx",
    output: {
      filename: "[hash:8].js",
      path: path.resolve(__dirname, "../dist")
    },
    plugins: [
      // 自动生成入口的index.html,并引入打包的js
      new HtmlWebpackPlugin(),
      // 自动清除打包的目录
      new CleanWebpackPlugin()
      // new UglifyJsPlugin()
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/
        }
      ]
    }
  };
};
