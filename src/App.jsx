// PureComponent
import { Component, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MyNavLink from "./router/index";
import { Button } from "antd";
// import Home from "./views/home/home";
// import Page from "./views/page/page";
// import Message from "./views/message/send";
// import Receive from "./views/message/receive";
import "./App.css";

// 懒加载，需要配合suspense，使用fallback应急
const Home = lazy(() => import("./views/home/home"));
const Page = lazy(() => import("./views/page/page"));

const lazyList = {
  Message: lazy(() => import("./views/message/send")),
  Receive: lazy(() => import("./views/message/receive")),
  Hooks: lazy(() => import("./views/hooks")),
  Error: lazy(() => import("./views/error")),
  Refs: lazy(() => import("./views/refs")),
  HOC: lazy(() => import("./views/hoc")),
  virtualScroll: lazy(() => import("./views/virtualScroll")),
};

/**
 * 使用PureComponent时state和props的更新，
 * 如果是相同引用的更新，则不会让shouldComponentUpdate返回true
 * 什么时候使用？
 *    1、父组件更新状态，子组件没有state或props的关联，
 *       由于父组件render，子组件也会随之render，导致效率低（在子组件使用PureComponent）
 *  */
export default class App extends Component {
  state = {
    home: "这是home组件",
    todos: [
      { id: 1, text: "json", done: false },
      { id: 2, text: "json1", done: false },
    ],
  };
  handleSetState = () => {
    // 回调函数将在setState更新完毕后调用，在componentDidUpdate后调用
    // this.setState({ home: '这是改变后的home组件' }, () => {
    //   console.log('修改完毕')
    // })
    this.state.todos.push({ id: 3, text: "json2", done: false });
    this.setState(
      (state) => ({ todos: state.todos }),
      () => {
        console.log("修改完毕");
      }
    );
  };

  render() {
    console.log("render-app");
    console.log(Object.entries(lazyList));
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
          <MyNavLink to={{ pathname: "/page", state: { name: "join" } }}>
            page
          </MyNavLink>
        </Button>
        {Object.keys(lazyList).map((item) => {
          return (
            <Button type="primary" key={item}>
              <MyNavLink to={"/" + item}>{item}</MyNavLink>
            </Button>
          );
        })}
        <Suspense fallback={<h1>loading....</h1>}>
          <Switch>
            {/* 精确匹配 */}
            <Route path="/home">
              <Home home={home} todos={todos} handleOk={this.handleSetState} />
            </Route>
            {/* 模糊匹配 */}
            {/* params接收参数 */}
            {/* <Route path="/page/:id" component={Page}></Route> */}
            {/* search接收参数、state接收参数 */}
            <Route path="/page" component={Page} />
            {Object.entries(lazyList).map((item) => {
              return (
                <Route key={item[0]} path={"/" + item[0]} component={item[1]} />
              );
            })}
            <Redirect to="/home?id=123" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
