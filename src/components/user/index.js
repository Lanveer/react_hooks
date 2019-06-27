/**
 * Created by Administrator on 2019/6/20/020.
 */
import React, { PropTypes, Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'dva/router';
import App from '../../App';
const { SubMenu }  = Menu;


export default class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }
    render() {
        return (
            <div>
                <h1>this is UserPage</h1>
                <App/>
                <Link to='/password'>to pwd page</Link>
            </div>
        );
    }
}
