import React, {Component} from 'react';

// 定义基本组件
class Hoc extends Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<input name='name' {...this.props.name}/>
			</div>
		);
	}
}

// 定义高阶组件（接收组件作为参数的函数）
// 将传入的组件进行props和state的组合
// 返回新组件
function ppHOC(WrappedComponent) {
	return class PP extends Component {
		state = {
			name: '123'
		}

		handleChangeName = (event) => {
			this.setState({
				name: event.target.value
			})
		}

		render() {
			const newProps = {
				name: {
					value: this.state.name,
					onChange: this.handleChangeName,
				}
			}
			return <WrappedComponent {...this.props} {...newProps}/>
		}
	}
}

// 使用高阶组件
const Hight = ppHOC(Hoc)

export default Hight;
