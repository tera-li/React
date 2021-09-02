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
const Home = lazy(() => import('./views/home/home'))
const Page = lazy(() => import('./views/page/page'))
const Message = lazy(() => import('./views/message/send'))
const Receive = lazy(() => import('./views/message/receive'))

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
    this.setState( state => ({home: state.home + 1}), () => {
      console.log('修改完毕')
    })
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
          <MyNavLink to={{ pathname: "/page", state: { name: "join" } }}>
            page
          </MyNavLink>
        </Button>
        <Button type="primary">
          <MyNavLink to="/message">message</MyNavLink>
        </Button>
        <Button type="primary">
          <MyNavLink to="/receive">receive</MyNavLink>
        </Button>
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
          <Route path="/page" component={Page}></Route>
          <Route path="/message" component={Message}></Route>
          <Route path="/receive" component={Receive}></Route>
          <Redirect to="/home" />
        </Switch>
        </Suspense>
      
      </div>
    );
  }
}
