/**
 * Created by Administrator on 2019/6/20/020.
 */
import React, { PropTypes, Component, useState, useEffect } from 'react';
import { Menu, Icon, Button } from 'antd';
// import { Link } from 'dva/router';
const { SubMenu }  = Menu;


// const [count, setCount] = useState(1);
//
// setCount(2);
// setCount(prevCount => prevCount + 1);

function Counter() {
    // const [count, setCount] = React.useState(5);
    const [fold, setFold] = React.useState( true);

    const [count, setCountM] = React.useState(5);

    function setCountMs(count, flag) {
        if(flag === 'sub'){
            return count-1;
        }
        return count+1;
    }



    useEffect(()=>{
        document.title = `You clicked ${count} times`;
    },[count]
    );

    // 只有当count的值发生变化时，才会重新执行`document.title`这一句
    return (
        <div>
            Count: {count}

            {/*自定义函数方式*/}
            <button onClick={()=>{setCountM(setCountMs(count,'plus'))}}>+</button>
            <button onClick={()=>{setCountM(setCountMs(count,'sub'))}}>+</button>

            {/*官方推荐*/}
            {/*<button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>*/}
            {/*<button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>*/}

            <div>
                <article>
                    <header>
                        <h2>Life</h2>
                    </header>
                    <section className={fold ? 'fold' : 'unfold'}>
                        <p> If life is a river， it is the most exciting  section.</p>
                        <p style={{display:fold ? 'none' : 'block'}}> Flowing a trickle of childhood， life began to  restlessness，
                            personality spray， a piece after  piece of  Pentium the melody of youth。
                            It is  surging， it's always  a time of the wild and  intractable， slap embankment，
                            heaving ship of  life。</p>
                    </section>
                </article>
                <span onClick={()=>{setFold(!fold)}}>{fold ? '查看更多' : '收起'}</span>
            </div>
        </div>
    );
}


export default Counter