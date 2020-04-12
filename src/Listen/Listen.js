import React, { Component } from 'react';

class Listen extends Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
        this.toggleContainer = React.createRef();
        // 创建Ref


        this.onClickHandler = this.onClickHandler.bind(this);
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    }

    componentDidMount() {
        window.addEventListener('click', this.onClickOutsideHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler);

    }

    onClickHandler() {
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    }

    onClickOutsideHandler(event) {
        console.log(this.toggleContainer);
        console.log(this.state.isOpen);
        if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) { // 绑定dom元素，判断点击的元素是不是本身或者子元素
            this.setState({ isOpen: false });
        }
    }

    render() {
        return (
            <div ref={this.toggleContainer}>
                {/*div绑定ref属性*/}
                <button onClick={this.onClickHandler}>Select an option</button>
                {this.state.isOpen && (
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                )}
            </div>
        );
    }
}

export default Listen;
