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
    console.log(this.props);
    // console.log(qs.parse(this.props.location.search.slice(1)))
    return (
      <div className={page.title}>
        <h1>这是Page组件</h1>
        <button onClick={this.addDown}>点击下载图片</button>
        {/* A组件的标签体内容，会以props.children传入A组件 */}
        {/* <A>
          <B></B>
        </A> */}

        {/* A组件通过props传入回调返回B组件，
            在A组件调用props方法，
            传入A组件的state当做函数参数，
            参数作为B组件的props传入B组件当中调用 */}
        <A render={(name) => <B name={name} />} />
      </div>
    );
  }
}

class A extends React.Component {
  state = { name: "join" };
  render() {
    return (
      <div style={{ backgroundColor: "red" }}>
        A。。。。
        {/* {this.props.children} */}
        {this.props.render(this.state.name)}
      </div>
    );
  }
}

class B extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "50%",
          margin: "0 auto",
          backgroundColor: "ButtonHighlight",
        }}
      >
        B。。。。
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}
