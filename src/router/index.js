import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
    render() {
        // console.log('====================================');
        // console.log(this.props);
        // console.log('====================================');
        return (
          <NavLink activeClassName="defaultName" {...this.props}/>
        )
    }
}
