import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
  useReducer,
  useRef,
  useLayoutEffect,
} from "react";
import { Fragment, useContext, useEffect, useState } from "react";

function Hook(props) {
  const [value, setValue] = useState(0);
  console.log(props.qwe);
  return <div onClick={() => setValue(0)}>value: {value}</div>;
}
// forwardRef 接受的 父组件 ref 属性并转发到包裹组件中
export default memo(Hook);

// , (pre, next) => {
//     console.log(Object.is(pre.handle, next.handle));
//     return pre.handle === next.handle;
//   }
