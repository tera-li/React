import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './table/table.js';
import Home from "./home/home.js";
import Listen from "./Listen/Listen.js";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// 添加router，进行单页面应用
import Last from "./Last/last";


class App extends Component{
  constructor(props) {
    super(props);
    console.log(props);
    const liss =  [
      {id:0,name:"Home",link:'/',class:'nav-link'},
      {id:1,name:"Table",link:'/table',class: 'nav-link'},
      {id:2,name:"Last",link:'/last',class: 'nav-link'},
      {id:3,name:"Listen",link:'/listen',class: 'nav-link'},
    ];
    this.mylist = liss.map((v,index) => {
      return <li className="nav-item" key={index}>
        <Link className={v.class} to={v.link} id={v.id} onClick={this.setActive}>{v.name}</Link>
      </li>
    });
  }

  render() {
    const h1 = <h1 className="App-h1">Hello Wrold!</h1>;
    const h2 = <h1 className="App-h1">Hi hello Star!</h1>;
    const Head = [
      {header: 'Name'},
      {header: 'Job'}
    ];
    const state = {
      Body: [
        {
          name: '李狗蛋',
          job: '程序猿',
        },
        {
          name: '王翠花',
          job: '攻城狮',
        },
        {
          name: '二狗子',
          job: '加班狗',
        }
      ]
    };


    return (
        <div className="App">
          <header className="App-header">
            {h1}
            {h2}
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            {/*<a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    // rel="noopener noreferrer"*/}
            {/*>*/}
            {/*  Learn React1*/}
            {/*</a>*/}
            <Router>
              <div>
                <ul className="nav nav-tabs">
                  {this.mylist}
                </ul>
                <hr />
              </div>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>`
                <Route path="/table">
                  <Table Head={Head} state={state}/>
                </Route>
                <Route path="/last">
                  <Last/>
                </Route>
                <Route path="/listen">
                  <Listen/>
                </Route>
              </Switch>
            </Router>
          </header>
        </div>
    );
  }
}
export default App;
// 模块化
/* 把一个文件分为各种小模块，互相依赖构成
* 增加模块的重用性，提高维护性，减少不必要的命名冲突
* 定义的模块，可以实现加载顺序的自定义
* */

// 组件化
/*封装某些代码以及功能为组件
* 写代码的时候使用组件，提高代码的复用性，维护性，提高效率
* */
