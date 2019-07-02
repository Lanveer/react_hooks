import React, { PropTypes } from "react";
import { Router, Route, Switch } from "dva/router";
import PwdPage from "./components/pwd";
import UserPage from "./components/user";
import App from "./App";
import A from "./components/counter/useEffectMine";

function authenticated() {
  console.log("weewfre");
}

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={A} />
        {/* <Route path="/" exact component={App} /> */}
        <Route path="/password" exact component={PwdPage} />
        <Route path="/user" exact component={UserPage} />
      </Switch>
    </Router>
  );
}
export default RouterConfig;
