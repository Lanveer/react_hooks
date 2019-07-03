/**
 * Created by Administrator on 2019/6/20/020.
 */
import React,{PureComponent} from "react";
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { Link } from "dva/router";
import { Route } from 'dva/router';

const userMenu = [
    {
        "code": "counter",
        "name": "counter",
        "order": 0,
        "parentId": null,
        "id": null,
        "status": null,
        "enabledAll": null,
        "subMenuList": [

        ]
    },
    {
        "code": "password",
        "name": "password",
        "order": 0,
        "parentId": null,
        "id": null,
        "status": null,
        "enabledAll": null,
        "subMenuList": [

        ]
    },
];
export default class BasicLayout extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }


    render() {
        const { navData } = this.props;
        return (
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        {userMenu.map(item => {
                            return (
                                <Menu.Item key={`${item.name}`}>
                                    <Link to={{ pathname: `/${item.code}` }}>
                                        {item.name}
                                    </Link>
                                </Menu.Item>
                            );
                        })}
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        {navData.map((item, index) => (
                            <Route
                                exact={item.exact}
                                key={`item.path_${index}`}
                                path={item.path}
                                component={item.component}
                            />
                        ))}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

