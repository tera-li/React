// react-redux的使用
// 这是容器组件，用于连接UI组件和redux的store

// 引入UI组件
import CountUI from "../../components/Count";
// 引入连接方法
import { connect } from "react-redux";

// 这里连接UI组件，store的连接通过在容器组件上传入props得到
// 如：<Count store={store}/>
export default connect()(CountUI);
