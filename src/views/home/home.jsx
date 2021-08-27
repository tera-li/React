import React from "react";
import { Tabs } from "antd";
import { Route } from "react-router-dom";
import MyNavLink from "../../router/index";
import home from "./home.module.css";

const { TabPane } = Tabs;

export default class Home extends React.Component {
  handleClick = () => {
    this.props.handleOk();
  };
  render() {
    console.log(this.props);
    const { todos, home: homeTitle } = this.props;
    return (
      <div className={home.title}>
        <Tabs defaultActiveKey="1" size={"small"} style={{ marginBottom: 32 }}>
          <TabPane tab="Tab 1" key="1">
            <h1>{homeTitle}</h1>
            <div>
              {todos.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </div>
            <button onClick={this.handleClick}>点击</button>
          </TabPane>
          <TabPane tab={<MyNavLink to="/home/A">homeA</MyNavLink>} key="2">
            <Route path="/home/A">HomeA</Route>
          </TabPane>
          <TabPane tab={<MyNavLink to="/home/B">homeB</MyNavLink>} key="3">
            <Route path="/home/B">HomeB</Route>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
