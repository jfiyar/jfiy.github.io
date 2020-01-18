import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

if ((module as any).hot) {
  (module as any).hot.accept();
}

let root = document.querySelector("#root");

//热更新会重复执行，保证创建元素只执行一次
if (!root) {
  root = document.createElement("DIV");
  root.id = "root";
  document.body.append(root);
}

ReactDOM.render(<App name="thymes" />, root);
