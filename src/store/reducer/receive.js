import { SETDATARECEIVE } from "../constant";

export const receiveReducer = (preciousState = 11, action) => {
    console.log(action);
    if (action.type === SETDATARECEIVE) {
      return action.data;
    }
    return preciousState;
  };