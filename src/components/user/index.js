/**
 * Created by Administrator on 2019/6/20/020.
 */

/**
 *  这里使用useState 方法
 */
import React from "react";
import { Button, Tabs } from "antd";
import "./user.less";

const { TabPane } = Tabs;

function UserPage() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <div className="user_list">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
      <h1>这是user页面,计数器使用useState</h1>
      Count:
      {count}
      <button
        type="button"
        onClick={() => setCount(prevCount => prevCount + 1)}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => setCount(prevCount => prevCount - 1)}
      >
        -
      </button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
    </div>
  );
}

export default UserPage;
