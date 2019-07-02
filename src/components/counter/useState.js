/**
 * Created by Administrator on 2019/6/20/020.
 */

/**
 *  这里使用useState 方法
 */
import React, { useState } from "react";

function CounterPageUseState() {
  const [count] = React.useState(20);
  return (
    <div>
      <h1>主要介绍react hooks的 userState</h1>
      Count: {count}
      <p>
        注意： 这里的React.useState(20) 就是设置初始化counter 的值为20，
        到线下面直接使用就是， 不需要像之前this.state方式获取
      </p>
    </div>
  );
}

export default CounterPageUseState;
