import React, {Component} from 'react';
import './index.css'

let list = []
for (let i = 0; i < 10000; i++) {
    list.push(i)
}

class Index extends Component {
    state = {
        height: 60,
        viewList: list.slice(0, 40),
        offsetY: 0,
        itemNumber: 40
    }
    handleScroll = (e) => {
        let sliceNum = Math.floor(e.target.scrollTop / this.state.height)
        this.setState({
            offsetY: e.target.scrollTop,
            viewList: list.slice(sliceNum, sliceNum + this.state.itemNumber)
        })
    }

    componentDidMount() {
    }

    render() {
        const {height, viewList, offsetY} = this.state
        return (
            <div className='box' onScroll={this.handleScroll}>
                <ul>
                    {
                        viewList.map((item) => {
                            return <li
                                style={{
                                    height: `${height}px`,
                                    lineHeight: `${height}px`,
                                    transform: `translateY(${offsetY}px)`
                                }}
                                key={item}>{item + 1}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Index;
