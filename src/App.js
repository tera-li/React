import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './table/table.js';

function App() {
  const h1 = <h1 className="App-h1">Hello Wrold!</h1>;
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          // rel="noopener noreferrer"
        >
          Learn React1
        </a>
        <Table Head={Head} state={state}/>
      </header>
    </div>
  );
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
