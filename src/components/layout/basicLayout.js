/**
 * Created by Administrator on 2019/6/20/020.
 */
import React,{PureComponent} from "react";
import { Layout, Menu, Form, Input,form,Icon  } from 'antd';
const { Header, Content, Footer, Sider, } = Layout;
import { Link } from "dva/router";
import { Route } from 'dva/router';
import './layout.less';
import logo from '../../imgs/logo-head.png'
import user from '../../imgs/user.png'
const { SubMenu } = Menu;
const { Search } = Input;
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
@Form.create()
export default class BasicLayout extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    componentDidMount() {
    }

    render() {
        const { navData } = this.props;
        const { getFieldDecorator } = form;
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
                    <div className="layout-logo">
                        <img src={logo} alt="logo"/>
                        <h1>AC-DR</h1>
                    </div>


                    <div className="layout-search">
                        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        {userMenu.map(item => {
                            return (
                                <Menu.Item key={`${item.name}`}  to={{ pathname: `/${item.code}` }}>
                                    <span>
                                        <Link to={{ pathname: `/${item.code}` }}>
                                        {item.name}
                                    </Link>
                                    </span>
                                </Menu.Item>
                            );
                        })}

                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                     <Icon type="mail" />
                                     <span>Navigation One</span>
                                 </span>
                            }
                        >
                            <Menu.Item key="5">
                                <Link to={{ pathname: `/counter` }}>
                                    counter
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link to={{ pathname: `/password` }}>
                                    password
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </Menu>


                    <div className="layout-user">
                        <img src={user} alt="用户"/>
                        <h1>张三</h1>
                        <a href="#">logout</a>
                    </div>

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

