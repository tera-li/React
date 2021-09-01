import React, { Component } from "react";
// 引入redux容器组件
import Count from "../../containers/Count";
import store from '../../store/store'

export default class receive extends Component {
  render() {
    return (
        <Count store={store}/>
    )
  }
}
