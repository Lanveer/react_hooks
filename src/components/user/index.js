/**
 * Created by Administrator on 2019/6/20/020.
 */

/**
*  这里使用useState 方法
*/
import React, {useState } from 'react';
// import './user.less'

function UserPage() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <div className="user_list">3323</div>
            <h1>这是user页面,计数器使用useState</h1>
            Count: {count}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>


            <h1>

            </h1>
        </div>
    )
}
export  default UserPage