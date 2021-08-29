import { SETDATA } from "./constant";
export const reducer = (preciousState = 11, action) => {
  console.log(action);
  if (action.type === SETDATA) {
    return action.data;
  }
  return preciousState;
};
