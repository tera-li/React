import { Button } from "antd";
import React, { Component } from "react";
import store from "../../store/store";

export default class send extends Component {
  state = { card: "汽车" };
// 监听redux变化，通过更改状态来更改render
//   componentDidMount() {
//     store.subscribe(() => {
//       this.setState({});
//     });
//   }
  handleSend = () => {
    store.dispatch({ type: "count", data: 1 });
  };
  render() {
    return (
      <div>
        <h1>{store.getState()}</h1>
        <Button type="primary" onClick={this.handleSend}>
          send
        </Button>
      </div>
    );
  }
}
