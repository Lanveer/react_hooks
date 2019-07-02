/**
 * Created by Administrator on 2019/6/20/020.
 */

/**
 *  这里使用useState 方法
 */
import React, { useState, useEffect } from "react";

function CounterPageUseEffect() {
  const [count, setCount] = React.useState(5);
  useEffect(() => {
    document.title = `点击了 ${count} 次`;
  }, [count]);

  function setCountM(count, flag) {
    console.log("sss:", count, flag);
    if (flag === "plus") {
      return count + 1;
    }
    return count - 1;
  }
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <h1>
        使用useEffect扩展功能， 使用自定义函数方法， 处理请求数据以及点击事件
      </h1>
      Count: {count}
      <button
        onClick={() => {
          setCount(setCountM(count, "plus"));
        }}
      >
        +
      </button>
      <button onClick={() => setCount(setCountM(count, "sub"))}>-</button>
    </div>
  );
}
export default CounterPageUseEffect;
