import dynamic from 'dva/dynamic';

export const dynamicWrapper = (app, models, component, ifPathFree) =>
  dynamic({
    app,
    models: [],
    component,
  });

let app = null;
export const setApp = dvaApp => {
  app = dvaApp;
};

export const getApp = () => app;
/**
 * 生成动态组件
 * @param {*} app
 * @param {*} models
 * @param {*} component
 */
export const lazy = (component, models=[]) => {
  return dynamic({
    app,
    models: () => models,
    component,
  });
};
