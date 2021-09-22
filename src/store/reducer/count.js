import { SETDATA } from "../constant";
/**
 * reducer是改变state，触发action提交的唯一方式
 * */
export const countReducer = (preciousState = 11, action) => {
  console.log(action);
  if (action.type === SETDATA) {
    return action.data + 1;
  }
  return preciousState;
};
