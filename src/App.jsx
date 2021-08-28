import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MyNavLink from "./router/index";
import { Button } from "antd";
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
        <Button type="primary">
          <MyNavLink to="/home">home</MyNavLink>
        </Button>

        <Button type="primary">
          {/* params */}
          {/* <MyNavLink to={`/page/${1}`}>page</MyNavLink> */}
          {/* search */}
          {/* <MyNavLink to={`/page/?name=join&id=1`}>page</MyNavLink> */}
          <MyNavLink to={{pathname: '/page', state: {name: 'join'}}}>page</MyNavLink>
        </Button>
        <Switch>
          {/* 精确匹配 */}
          <Route path="/home">
            <Home home={home} todos={todos} handleOk={this.handleSetState} />
          </Route>
          {/* 模糊匹配 */}
          {/* params接收参数 */}
          {/* <Route path="/page/:id" component={Page}></Route> */}
          {/* search接收参数、state接收参数 */}
          <Route path="/page" component={Page}></Route>
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}
