import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="badge badge-primary text-wrap" style={{width: '6rem'}}>
                This text should wrap
            </div>
        )
    }
}

export default Home;
