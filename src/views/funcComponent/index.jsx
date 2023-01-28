import React, { useState, useEffect } from "react";

const Example = () => {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  useEffect(() => {
    return () => {
      console.log("Bye");
    };
  }, []);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default Example;
