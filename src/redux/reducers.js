import { combineReducers } from "redux";
import constant from "./constant";

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case constant.INCREASE:
      return { count: state.count + 1 };
    case constant.DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const changeTypeReducer = (state = { type: "open" }, action) => {
  switch (action.type) {
    case constant.TYPE_OPEN:
      return { type: "open" };
    case constant.TYPE_CLOSE:
      return { type: "close" };
    default:
      return state;
  }
};

// 汇总所有reducer变为一个总的reducer
export default combineReducers({
  reducer,
  changeTypeReducer,
});
