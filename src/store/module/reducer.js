export const reducer = (preciousState = 11, action) => {
    console.log('====================================');
    console.log(preciousState);
    console.log(action);
    console.log('====================================');
    if (action.type === 'count') {
        return action.data
    }
    return preciousState

}