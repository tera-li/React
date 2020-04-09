import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        const MYBody = this.props.Body.map((item, index) => {
            return <tr key={index}><td>{item.name}</td><td>{item.job}</td></tr>
        });
        return (
                <tbody>
                   {MYBody}
               </tbody>
        )
    }
}
export default Child;
