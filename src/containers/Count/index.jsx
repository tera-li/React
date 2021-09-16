import React, { Component } from "react";
import { Button } from "antd";

// react-redux的使用
// 这是容器组件，用于连接UI组件和redux的store
// 引入连接方法
import { connect } from "react-redux";
import { reducerActionReceive } from "../../store/action/receive";

class Count extends Component {
  handleSend = () => {
    this.props.addReceive(this.props.number + 1);
  };
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
        <h1>{this.props.count}</h1>
        <Button type="primary" onClick={this.handleSend}>
          点击调用
        </Button>
        <div>这是UI组件</div>
      </div>
    );
  }
}

// 这里连接UI组件，store的连接通过在容器组件上传入props得到
// 如：<Count store={store}/>
export default connect(
  (state) => ({ number: state.sendNumber, count: state.receiveNumber }),
  // (dispatch) => ({
  //     add: number => dispatch(reducerActionReceive(number))
  // })
  {
    addReceive: reducerActionReceive,
  }
)(Count);
