import React, {Component} from 'react';

// 封装组件时，外部组件可以通过ref直接控制内层组件或元素的行为
const FancyButton = React.forwardRef((props, ref) => {
    const inputRef = React.useRef()

    // 该hooks与forwardRef配合使用，将默认转发的ref，进行处理过后的实例属性转发给父组件的ref，父组件通过自定义属性函数控制子组件ref
    React.useImperativeHandle(ref, () => ({
        focus: () => {
          inputRef.current.focus()
        },
        setValue: (val) => {
          inputRef.current.value = val
        }
    }))
    return (
        <>
            <button className="FancyButton">
                {props.children}
            </button>
            <input ref={inputRef}/>
        </>
    );
})

const ref = React.createRef()

class Refs extends Component {
    componentDidMount() {
      // console.log(ref.current)
        ref.current.setValue('转发refs，操作dom')
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
