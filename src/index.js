import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

//接收热更新
if (module.hot) {
  module.hot.accept();
}

let root = document.querySelector("#root");

//热更新会重复执行，保证创建元素只执行一次
if (!root) {
  root = document.createElement("DIV");
  root.id = "root";
  document.body.append(root);
}

ReactDOM.render(<App />, root);
