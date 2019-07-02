/**
 * Created by Administrator on 2019/6/20/020.
 */

/**
 *  这里使用useState 方法
 */
import React, { useState, useEffect } from "react";

function CounterPageUseEffect() {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    document.title = `点击了 ${count} 次`;
  }, [count]);
  return (
    <div>
      <h1>使用useEffect 自带功能</h1>
      Count: {count}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </div>
  );
}
export default CounterPageUseEffect;
