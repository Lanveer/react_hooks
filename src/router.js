import React, { PropTypes } from "react";
import { Router, Route, Switch } from "dva/router";
import PwdPage from "./components/pwd";
import UserPage from "./components/user";
import App from "./App";
import Counter from "./components/counter";
import UseState from "./components/counter/useState";
import UseEffect from "./components/counter/useEffect";
import UseEffectM from "./components/counter/useEffectMine";

function authenticated() {
  console.log("weewfre");
}

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/counter" exact component={Counter} />
        <Route path="/useState" exact component={UseState} />
        <Route path="/useEffect" exact component={UseEffect} />
        <Route path="/useEffectM" exact component={UseEffectM} />
         <Route path="/" exact component={App} />
        <Route path="/password" exact component={PwdPage} />
        <Route path="/user" exact component={UserPage} />
      </Switch>
    </Router>
  );
}
export default RouterConfig;
