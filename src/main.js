/**
 * Created by Administrator on 2019/6/20/020.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from './router';
import createHistory from 'history/createHashHistory';
import dva from 'dva';
const app = dva({
    history: createHistory(),
});
app.router(RouterConfig);
app.start('#app');
