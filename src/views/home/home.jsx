import React from "react";
import { Tabs } from "antd";
import { Route, useHistory, useLocation, useParams } from "react-router-dom";
import MyNavLink from "../../router/index";
import home from "./home.module.css";
import Example from "../funcComponent";

const { TabPane } = Tabs;

export default class Home extends React.Component {
  state = {
    isLoad: "false",
  };
  handleClick = () => {
    // 在事件处理函数中调用setState将会是异步的
    this.setState({
      isLoad: "true",
    });
    this.props.handleOk();
  };

  componentDidMount() {
    // 使用setState更新后不会触发挂载声明周期钩子
    console.log(this.state.isLoad);
  }

  render() {
    console.log(this.props);
    const { todos, home: homeTitle } = this.props;
    return (
      <div>
        <Tabs defaultActiveKey="1" size={"small"} style={{ marginBottom: 32 }}>
          <TabPane tab="Tab 1" key="1">
            <h1>{homeTitle}</h1>
            <div className={home.title}>
              {todos.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </div>
            <div>{this.state.isLoad}</div>
            <button onClick={this.handleClick}>点击</button>
          </TabPane>
          <TabPane
            tab={<MyNavLink to="/home/A?id=123">homeA</MyNavLink>}
            key="2"
          >
            <Route path="/home/A">
              <HomeA />
              <Example />
            </Route>
          </TabPane>
          <TabPane tab={<MyNavLink to="/home/B">homeB</MyNavLink>} key="3">
            <Route path="/home/B">HomeB</Route>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

const HomeA = () => {
  // 返回history对象，可以获取相关参数和调用方法
  let history = useHistory();
  // 返回history对象中的location
  let location = useLocation();
  let params = useParams();
  console.log(params);
  console.log(history);
  console.log(location);
  return (
    <div>
      <h3>react-router-dom Api</h3>
    </div>
  );
};
