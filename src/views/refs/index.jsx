import React, {Component} from 'react';

const FancyButton = React.forwardRef((props, ref) => {
    return (
        <>
            <button className="FancyButton">
                {props.children}
            </button>
            <input ref={ref}/>
        </>
    );
})

const ref = React.createRef()

class Refs extends Component {
    componentDidMount() {
        ref.current.value = '转发refs，操作dom成功'
        setTimeout(() => ref.current.focus(), 2000)
    }
    render() {
        return (
            <div>
                {/* FancyButton组件可以转发ref给绑定到内部元素Dom，
                    使其他组件能够操作转发绑定的dom */}
                <FancyButton ref={ref}>click me!</FancyButton>
            </div>
        );
    }
}

export default Refs
