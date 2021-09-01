import { SETDATARECEIVE } from "../constant";

export const reducerActionReceive = (value, time = 100) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type: SETDATARECEIVE, data: value})
        }, time)
    }
}