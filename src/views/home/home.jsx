import React from "react";
import home from "./home.module.css";

export default class Home extends React.Component {
  handleClick = () => {
    this.props.handleOk();
  };
  render() {
    // console.log(this.props);
    const { todos, home: homeTitle } = this.props;
    return (
      <div className={home.title}>
        <h1>{homeTitle}</h1>
        <div>
          {todos.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </div>
        <button onClick={this.handleClick}>点击</button>
      </div>
    );
  }
}
