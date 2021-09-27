import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    // console.log('====================================');
    // console.log(this.props);
    // console.log('====================================');
    // navLink会自动加上active的class
    return (
      <NavLink
        activeClassName="defaultName"
        activeStyle={{
          fontWeight: "bold",
          fontSize: '22px',
          lineHeight: '22px'
        }}
        {...this.props}
        replace
      />
    );
  }
}
