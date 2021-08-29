import React, { Component } from "react";
import Count from "../../containers/Count";
import store from '../../store/store'

export default class receive extends Component {
  render() {
    return (
        <Count store={store}/>
    )
  }
}
