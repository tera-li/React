import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildLast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 1
        };
    }
    onProp = () => {
        // 点击触发更改子组件属性
        this.setState({
            data: this.state.data += 1
        });
        // 调用参数传过来的方法传值进去
        this.props.data(this.state.data);
        this.props.nameP('长大后的小明')
        this.props.childWorld('这是兄弟节点的值')
    };
    render() {
        return (
            <button onClick={this.onProp}>Click</button>
        )
    }
}
export default ChildLast;

ChildLast.propTypes = {
    data: PropTypes.func,
};
