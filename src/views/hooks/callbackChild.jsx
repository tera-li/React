import React, {Component} from 'react';

const set = new Set()

class CallbackChild extends Component {
    render() {
        set.add(this.props.callback)
        console.log('callback更新了' + this.props.callback)
        return (
            <div>
                <h4>{this.props.callback()}</h4>
                {'useCallback-component：' + set.size}
            </div>
        );
    }
}

export default React.memo(CallbackChild);
