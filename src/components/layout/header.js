/**
 * Created by Administrator on 2019/6/20/020.
 */
import React from "react";
import './layout.less'
import { Link } from "dva/router";
import { Layout, Menu, Dropdown } from 'antd';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;

const PageHeader = props => {
    const { history, userInfo, userMenu} = props;
    const menu = (
        <Menu>
            <Menu.Item>
                <a onClick={props.logout}>退出</a>
            </Menu.Item>
        </Menu>
    );
    return (
            <div className='header'>
                <div className='logo'>
                    <h1>logo</h1>
                </div>
                <div className='menu'>
                    <Menu mode="horizontal" theme="lignt">
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

                    <div>
                        欢迎您：
                        <Dropdown overlay={menu}>
                            <a>{userInfo.name}</a>
                        </Dropdown>
                    </div>
                </div>
            </div>
    );
};
export default PageHeader;

