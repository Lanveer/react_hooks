import React, { PropTypes } from "react";
import { Router, Route, Switch } from "dva/router";
import cloneDeep from 'lodash/cloneDeep';
import { setApp } from '../utils/core';
import getNavData from 'app/nav';
import PwdPage from "./components/pwd";
import UserPage from "./components/user";
import App from "./App";
import Counter from "./components/counter";
import UseState from "./components/counter/useState";
import UseEffect from "./components/counter/useEffect";
import UseEffectM from "./components/counter/useEffectMine";

// import BasicLayout from './components/layout/basic'

function getRouteData(navData, path) {
    if (
        !navData.some(item => item.layout === path) ||
        !navData.filter(item => item.layout === path)[0].children
    ) {
        return null;
    }
    const route = cloneDeep(navData.filter(item => item.layout === path)[0]);
    const nodeList = getPlainNode(route.children);
    console.log('ssss:', nodeList);
    return nodeList;
}

function getPlainNode(nodeList, parentPath = '') {
    const arr = [];
    nodeList.forEach(node => {
        const item = node;
        item.path = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
        item.exact = true;
        if (item.children && !item.component) {
            arr.push(...getPlainNode(item.children, item.path));
        } else {
            if (item.children && item.component) {
                item.exact = false;
            }
            arr.push(item);
        }
    });
    return arr;
}


function getLayout(navData, path) {
    if (
        !navData.some(item => item.layout === path) ||
        !navData.filter(item => item.layout === path)[0].children
    ) {
        return null;
    }
    const route = navData.filter(item => item.layout === path)[0];
    return {
        component: route.component,
        layout: route.layout,
        name: route.name,
        path: route.path
    };
}

const initRouteConfig = [
    'counter',
    'password',
    'user',
];

function RouterConfig({ history,app}) {
    const navData = getNavData(app);
    const BasicLayout = getLayout(navData, 'basic').component;
    setApp(app);
    const passProps = path => ({
        app,
        getRouteData,
        navData: getRouteData(navData, path)
    })

  return (
    <Router history={history}>
      <Switch>
          {/*<Route path="/" exact component={App} />*/}
        {/*<Route path="/counter" exact component={Counter} />*/}
        {/*<Route path="/useState" exact component={UseState} />*/}
        {/*<Route path="/useEffect" exact component={UseEffect} />*/}
        {/*<Route path="/useEffectM" exact component={UseEffectM} />*/}
        {/*<Route path="/password" exact component={PwdPage} />*/}
        {/*<Route path="/user" exact component={UserPage} />*/}
          {initRouteConfig.map(item => {
              return (
                  <Route
                      path={`/${item}`}
                      key={item}
                      render={props => (
                          <BasicLayout {...props} {...passProps('basic')} />
                      )}
                  />
              );
          })}
      </Switch>
    </Router>
  );
}
export default RouterConfig;
