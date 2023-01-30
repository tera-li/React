import React, { Component } from "react";
import store from "./store";
import actions from "./actions";
import { connect } from "react-redux";
import { Button } from "antd";

class Todo extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe((e) => {
      console.log(this);
    });
  }
  componentWillUnmount() {
    this.unsubscribe(); //取消订阅
  }
  render() {
    //console.log('counter render')
    return (
      <div>
        <p>{this.props.number}</p>
        <Button onClick={this.props.increase}> + </Button>
        <br></br>
        <Button onClick={this.props.decrease}> - </Button>
        <br></br>
        <br></br>
        <Button onClick={this.props.typeOpen}> open </Button>
        <br></br>
        <Button onClick={this.props.typeClose}> close </Button>
      </div>
    );
  }
}

export default connect(
  (state) => state,
  actions,
  (reducer, state) => {
    return { ...reducer, ...state };
  }
)(Todo);
