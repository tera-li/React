import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// import store from './store/store'
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";

ReactDOM.render(
  // 检测App组件及子组件存在的问题的工具
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// redux监听整个App组件，
// store.subscribe(() => {
//   ReactDOM.render(
//     // 检测App组件及子组件存在的问题的工具
//     <React.StrictMode>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// })
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
