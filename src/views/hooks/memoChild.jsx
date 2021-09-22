import React, {Component} from 'react';

class MemoChild extends Component {
	render() {
		console.log('只有修改count，才会更新render')
		return (
			<div>
				{ 'memo-component：'+ this.props.count }
			</div>
		);
	}
}

const areEqual = (prevProps, nextProps) => {
	/**
	 * 如果传入的prevProps属性和nextProps属性相同，则返回true，render则不更新
	 * */
	return prevProps.count === nextProps.count;
}
/**
 * 与pureComponent类似，返回值判定相反
 * memo返回值为true则不更新render
 * shouldComponentUpdate返回值为false则不更新render
 * */
export default React.memo(MemoChild, areEqual);
