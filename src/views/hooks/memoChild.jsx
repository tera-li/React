import React, {Component} from 'react';

class MemoChild extends Component {
	render() {
		console.log('只有修改count，才会更新render')
		return (
			<div>
				{ 'useCallback,'+ this.props.count }
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

export default React.memo(MemoChild, areEqual);
