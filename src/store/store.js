import { createStore, applyMiddleware } from "redux";
// 用于支持异步action
import thunk from "redux-thunk";
// 引入汇总的所有reducers
import { reducers } from "./reducer/index";
// 引入redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";
// 创建状态，应用中间件
export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
