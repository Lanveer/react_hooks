/**
 * Created by Administrator on 2019/6/20/020.
 */

/**
*  这里使用useState 方法
*/
import React, {useState,useEffect } from 'react';
function UserPageOFEffects() {
    const [count, setCount] = React.useState(0);
    useEffect(()=>{
            document.title = `点击了 ${count} 次`;
        },[count]
    );
    return (
        <div>
            <h1>这是user页面,计数器使用useState</h1>
            Count: {count}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        </div>
    )
}
export default UserPageOFEffects