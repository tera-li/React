import React, { Component } from "react";
import MyContext from "./context";
import emitter from "./events";

export default class Child extends Component {
  /**
   * 使Child实例上的context值 = 使用createContext的Provider传入的value值
   * 1、contextType为实例的context，值为Provider的value值
   * 2、使用Consumer，表达式传入value值为Provider的value值
   * */
  static contextType = MyContext;

  constructor(props) {
    super(props);
    emitter.addListener("info", (info) => {
      console.log("监听", info);
    });
  }
  componentWillUnmount() {
    // 组件销毁前移除事件监听
    emitter.removeListener("info", (info) => {
      console.log("移除", info);
    });
  }

  render() {
    console.log(MyContext);
    return (
      <div>
        <MyContext.Consumer>
          {(value) => {
            return `这是context传的值${value}`;
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}
