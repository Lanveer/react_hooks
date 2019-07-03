/**
 * Created by Administrator on 2019/6/20/020.
 */
import React from "react";
import { Layout } from 'antd';
import { Route } from 'dva/router';

const { Content } = Layout;
const PageContent = ({ navData}) => {
    console.log('name is:', navData);
    return (
        <div>
            <Content>
                {navData.map((item, index) => (
                    <Route
                        exact={item.exact}
                        key={`item.path_${index}`}
                        path={item.path}
                        component={item.component}
                    />
                ))}
            </Content>
        </div>
    );
};

export default PageContent;