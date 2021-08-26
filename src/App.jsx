import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Button from 'antd/es/button';
import Home from "./views/home/home";
import Page from "./views/page/page";
import "./App.css";

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
        <Button type="primary">Button</Button>
        <BrowserRouter>
          <Link to="/home">
            {/* <Home home={home} todos={todos} handleOk={this.handleSetState} /> */}
            home
          </Link>
          <Link to="/page">
            {/* <Page /> */}
            page
          </Link>
        </BrowserRouter>
      </div>
    );
  }
}
