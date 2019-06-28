/**
 * Created by Administrator on 2019/6/20/020.
 */
import React, { PropTypes, Component } from 'react';
import { Link } from 'dva/router';
import './pwd.less'

export default class PwdPage extends Component {
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
                <h1>this is PwdPage </h1>
                <Link to='/user'>to user page</Link>
                <div className="pwd_list">hello world</div>
            </div>
        );
    }
}
