import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import "./index.css";

// 用于确认路由跳转的函数
const getConfirmation = (message = 'Are you sure', callback) => {
  const allowTransition = window.confirm(message);
  callback(allowTransition); // 回调询问结果
}
ReactDOM.render(
  //检测App组件及子组件存在的问题的工具
  <React.StrictMode>
    {/* 使用provider包裹app，让App组件及所有后代组件都能接收到store */}
    <Provider store={store}>
      {/* 基准URL，可以设置服务器上的子目录
          forceRefresh，路由跳转会刷新整个页面，模拟传统服务器渲染应用程序
      */}
      <BrowserRouter basename='/page' getUserConfirmation={getConfirmation} forceRefresh={false}>
        <App />
      </BrowserRouter>
    </Provider>
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
