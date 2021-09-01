import { SETDATARECEIVE } from "../constant";

// 同步action，就是指action的值为Object类型的一般对象
export const increment = data => ({ type: SETDATARECEIVE, data })
// 异步action，就是指action的值为Func的函数，异步action中一般会调用同步action
export const reducerActionReceive = (value, time = 1000) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(value));
    }, time);
  };
};
