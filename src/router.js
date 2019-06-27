import React, { PropTypes } from 'react';
import { Router, Route, Switch  } from 'dva/router';
import PwdPage from './components/pwd';
import UserPage from './components/user';

function authenticated(){
    console.log('weewfre')
}

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={UserPage} />
                <Route path="/password" exact component={PwdPage}/>
                <Route path="/user" exact component={UserPage}/>
            </Switch>
        </Router>
    );
}
export default RouterConfig;