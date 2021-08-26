import "./App.css";
import React from "react";
import Home from "./views/home/home";
import Page from "./views/page/page";

export default class App extends React.Component {
  state = {
    home: "这是home组件",
    todos: [
      { id: 1, text: "json", done: false },
      { id: 2, text: "json1", done: false },
    ],
  };
  handleSetState = () => {
    console.log(this);
  };
  render() {
    const { home, todos } = this.state;
    return (
      <div className="App">
        <Home home={home} todos={todos} handleOk={this.handleSetState} />
        <hr />
        <Page />
      </div>
    );
  }
}
