import React from "react";
// import qs from 'querystring'
import page from "./page.module.css";

export default class Page extends React.Component {
  addDown = () => {
    // 动态创建a标签，请求图片接口
    // 转成blob，blob转成url对象，进行download下载
    let link = document.createElement("a");
    link.style.display = "none";
    fetch("/api1/936895d2e36a248303a2127156f08378.jpeg")
      .then((res) => {
        return res.blob();
      })
      .then((res) => {
        link.href = URL.createObjectURL(res);
        link.setAttribute("download", "");
        document.body.appendChild(link);
        link.click();
      });
  };
  componentDidMount() {
    // this.addDown();
  }
  render() {
    console.log(this.props)
    // console.log(qs.parse(this.props.location.search.slice(1)))
    return (
      <div className={page.title}>
        <h1>这是Page组件</h1>
        <button onClick={this.addDown}>点击下载图片</button>
      </div>
    );
  }
}
