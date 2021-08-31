import React, { Component } from 'react'
import { Button } from "antd";
// import store from '../store/store'

export default class Count extends Component {
    handleSend = () => {
        // const count = store.getState();
        this.props.addReceive(11 + 1)
      };
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.count1}</h1>
                <Button type="primary" onClick={this.handleSend}>点击调用</Button>
                <div>这是UI组件</div>
            </div>
        )
    }
}
