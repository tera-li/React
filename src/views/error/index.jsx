import React, {Component} from 'react';
import Child from './child'

class Error extends Component {
	state = {
		name: 123,
		hasError: false
	}
	// 捕获子组件错误信息，更新对应状态，对相关错误进行处理
	static getDerivedStateFromError(error) {
		return { hasError: true }
	}
	// 捕获报错组件栈追踪信息
	componentDidCatch(err, info) {
		console.log(err)
		console.log(info)
	}
	render() {
		return (
			<div>
				{ this.state.name }
				{ this.state.hasError ? <div>子组件出错了</div> : <Child /> }
			</div>
		);
	}
}

export default Error;
