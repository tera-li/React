import React from "react";
import page from "./page.module.css";

export default class Page extends React.Component {
  addDown = () => {
    let link = document.createElement("a"); // 创建a标签
    link.style.display = "none";
    fetch("/api1/936895d2e36a248303a2127156f08378.jpeg")
      .then((res) => {
        return res.blob();
      })
      .then((res) => {
        link.href = URL.createObjectURL(res);
        console.log(URL.createObjectURL(res));
        link.setAttribute("download", ""); // 添加downLoad属性
        document.body.appendChild(link);
        link.click();
      });
  };
  componentDidMount() {
    // this.addDown();
  }
  render() {
    return (
      <div className={page.title}>
        这是Page组件
        <a href="#/demo1">锚点1</a>
        <a href="#/demo2">锚点2</a>
        <a href="#/demo3">锚点3</a>
      </div>
    );
  }
}
