import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { Button } from "antd";

const Portal = () => {
	return (
		ReactDOM.createPortal(<div style={{textAlign: 'center'}}>创建的Portal，插入到body元素中</div>, document.body)
	)
}
// 定义基本组件
class Hoc extends Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<input name='name' {...this.props.name}/>
				<div>
					{/* 通过reactDom卸载组件，会将组件上的事件处理器和state一并清除 */}
					<Button type='primary' onClick={() => ReactDOM.unmountComponentAtNode(document.getElementById('root'))}>卸载组件</Button>
				</div>
				<Portal />
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
