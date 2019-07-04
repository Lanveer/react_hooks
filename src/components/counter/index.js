/**
 * Created by Administrator on 2019/6/20/020.
 */
import React, { Component } from "react";
import { Link } from "dva/router";
import { connect } from 'dva';
import {getListData} from '../../../service/list';


@connect(state => ({
    isLoading: state.user,
}))
export default class PwdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  componentDidMount() {
     this.getList();
  };


  getList =()=>{
      const { dispatch } = this.props;
      dispatch({
          type: 'user/getListAct',
          payload: {
              id:'123',
              name:'lan'
          }
      });
      // getListData().then(r=>{
      //     console.log('r data is:', r);
      // })
  }

  render() {
    return (
      <div>
        <h1>counter功能块</h1>
          <p>这个部分主要是通过react hooks 实现小demo</p>
        <Link to="/useState">useState</Link>
        <Link to="/useEffect">useEffect</Link>
        <Link to="/useEffectM">useEffectM</Link>
      </div>
    );
  }
}
