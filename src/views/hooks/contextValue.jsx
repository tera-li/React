import React from 'react'
import { MyContext } from "./context";

export default function ContextValue() {
    /**
     * 函数式组件使用context
     */
    const contextValue = React.useContext(MyContext)
    console.log(contextValue);
    return (
        <div>
            context in Func
        </div>
    )
}
