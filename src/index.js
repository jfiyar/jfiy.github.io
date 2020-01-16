import ReactDOM from "react-dom";
import React from "react";

if (module.hot) {
  module.hot.accept();
}

const root = document.createElement("DIV");
document.body.appendChild(root);

console.log(root);

ReactDOM.render(root, <div>123</div>);
