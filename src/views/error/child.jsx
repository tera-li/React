import React, {Component} from 'react';

class Child extends Component {
	state = {
		// 模拟子组件出错，触发父组件的错误边界
		userList: "123"
	}
	render() {
		return (
			<div>
				{
					this.userList.map((item) => <li key={item}>{item}</li>)
				}
			</div>
		);
	}
}

export default Child;
