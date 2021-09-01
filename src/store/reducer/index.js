import { combineReducers } from "redux";
// 引入reducer
import { countReducer } from "./count";
import { receiveReducer } from "./receive";

// 汇总所有reducer变为一个总的reducer
export const reducers = combineReducers({
  // send组件的number
  sendNumber: countReducer,
  // receive组件的number
  receiveNumber: receiveReducer,
});
