import React from "react";
import { Button } from "antd";
import {MyContext, Provider} from "./context";
import Child from "./child.jsx";
import MemoChild from "./memoChild.jsx";
import ContextValue from "./contextValue";

export default function Hooks() {
  /**
   * 让函数组件也有state状态
   * 第一个值为state值
   * 第二个值为方法，用来更新state值
   * 第一次执行会初始化指定的值在内部作缓存
   * */
  const [count, setCount] = React.useState(0);

  /**
   * 让函数组件模拟生命周期钩子（componentDidMount，componentDidUpdate，componentWillUnmount）
   * 第一个参数为回调，触发时执行的方法
   * 第二个参数为数组，监听内部对应的值，值更改后触发useEffect回调
   *    1、参数为空，监听所有state、props变化
   *    2、参数为空[]，不监听任何state、props
   *    3、参数为[count]，监听count的变化
   * return返回的函数，作为下一次触发之前的调用
   */
  React.useEffect(() => {
    console.log("页面更新了", myRef);
    return () => {
      console.log("页面卸载了哈");
    };
  }, [count]);

  /**
   * class定义组件使用React.createRef()
   * 函数定义组件使用React.useRef()
   * 绑定ref
   */
  const myRef = React.useRef();

  /**
   * 函数式组件当中使用useContext，可以直接获取createContext的值
  */
  const context = React.useContext(MyContext)
  console.log(context)

  /**
   * 使用场景：state是一个数组或者对象
   *         state的变化很复杂，经常一个操作需要修改很多state
   *         统一处理复杂的state
   * */
  const initFormData = {
    name: "",
    age: 18,
    ethnicity: "汉族"
  }
  const init = (initFormData) => {
    return initFormData
  }
  const [reducerState, dispatch] = React.useReducer((state, action) => {
    if (action.type === 'add') {
      return { age: state.age + 1 }
    }
    if (action.type === 'cut') {
      return { age: state.age - 1 }
    }
    if (action.type === 'reset') {
      return init(action.payload)
    }
    throw new Error('error')
  }, initFormData, init)

  const memoizedCallback = React.useCallback(() => {
    setCount(count + 1)
    console.log('变化了count')
  }, [count])

  return (
    // Fragment可以将子元素分组，而无需向DOM添加额外节点
    <React.Fragment>
      {/* useRef */}
      <h1 ref={myRef}>这是hooks</h1>
      {/* useState */}
      <div>
        <h4>{count}</h4>
        <Button type="primary" onClick={() => setCount(count + 1)}>
          点击加count
        </Button>
      </div>
      {/* useContext */}
      <div>
        <Provider value={111}>
          <Child />
        </Provider>
        <ContextValue />
      </div>
      {/* useReducer */}
      <div>
        <h4>{reducerState.age}</h4>
        <Button type='primary' onClick={() => dispatch({type: 'add'})}>加一次reducer</Button>&nbsp;
        <Button type='primary' onClick={() => dispatch({type: 'cut'})}>减一次reducer</Button>&nbsp;
        <Button type='primary' onClick={() => dispatch({type: 'reset', payload: initFormData})}>重置reducer</Button>
      </div>
      {/* useCallback */}
      <div>
        <MemoChild count={count} />
      </div>
    </React.Fragment>
  );
}
