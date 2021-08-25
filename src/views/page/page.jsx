import React from "react";
import page from "./page.module.css";

export default class Page extends React.Component {
  render() {
    return <div className={page.title}>这是Page组件</div>;
  }
}
