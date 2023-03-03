import { createContext } from "react";

/**
 * Provider,Consumer来源于同一个createContext()
 * 通过Provider传入的value属性，将数据保存起来传递给其他组件
 * 实现跨组件传值
 *  */
const MyContext = createContext("context初始值");
export default MyContext;
