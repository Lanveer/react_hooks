/**
 * Created by Administrator on 2019/6/20/020.
 */
import React, { Component } from "react";
import { Link } from "dva/router";
import {connect} from 'dva';
import "./pwd.less";

@connect(state=>({
    data:state.user.pList,
    name:state.user.name,
}))

export default class PwdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
      console.log('data is:', this.props.name);
  }

  render() {
    return (
      <div>
        <h1>this is PwdPage</h1>
        <Link to="/user">to user page</Link>
        <div className="pwd_list">hello world</div>
      </div>
    );
  }
}
