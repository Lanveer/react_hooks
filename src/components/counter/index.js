/**
 * Created by Administrator on 2019/6/20/020.
 */
import React, { Component } from "react";
import { Link } from "dva/router";
import { connect } from 'dva';
import {Button} from 'antd';
import {getListData} from '../../../service/list';


@connect(state => ({
    list: state.user.list,
    author:state.user.author
}))
export default class PwdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
     console.log('get list data is:', this.props.list);
  };


    getAuthor=()=>{
      const {dispatch} = this.props;
      dispatch({
          type:'user/getAuthor',
          payload:{
              author:'fffff'
          }
      });
      console.log('author is:', this.props.author);
  };

  render() {
    return (
      <div>
        <h1>counter功能块</h1>
          <p>这个部分主要是通过react hooks 实现小demo</p>
        <Link to="/useState">useState</Link>
        <Link to="/useEffect">useEffect</Link>
        <Link to="/useEffectM">useEffectM</Link>
          <Button type="primary" onClick={()=>{this.getAuthor()}}>click</Button>
      </div>
    );
  }
}
