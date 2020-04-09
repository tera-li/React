import React, { Component } from 'react';

class ChildTwo extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            value: '哈哈哈哈'
        }
    }
    valueState(e) {
      this.setState({
          value: e.target.value
          // 通过onChang实现e.target.value数据双向绑定
          // 当view发生改变时，更改model，再传给view
      })
    };
    componentWillMount() {
        console.log('1----渲染前调用')
    }
    componentDidMount() {
        console.log('2----渲染后调用，可以执行延时之类的操作')
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('在接收到一个新的prop时调用')
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // console.log('返回一个布尔值，接收新的props或者state时，可以在你确认不需要更新组件时调用')
        return true;
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('3----在接收到新的props或state时调用，在render没调用时触发')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('4----组件完成更新')
    }
    componentWillUnmount() {
        console.log('组件被移除的时候调用，可以设置清除延时')
    }

    render() {
        return (
            <div>
            <div>{this.props.childH}</div>
            <div>{this.state.value}</div>
            <input type='text' value={this.state.value} onChange={this.valueState.bind(this)}/>
            </div>
        )
    }
}
export default ChildTwo;
