import { SETDATA } from "../constant";
// 在redux中，返回Object是同步action
// export const reducerAction = (value) => ({ type: SETDATA, data: value });
// 在redux中，返回Func是异步action
export const reducerAction = (value, time = 100) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type: SETDATA, data: value})
        }, time)
    }
}
