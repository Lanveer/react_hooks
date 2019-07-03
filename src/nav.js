import { dynamicWrapper } from '../utils/core';

export default app => [
  {
    component: dynamicWrapper(app, ['user'], () => import('./components/layout/basicLayout')),
    layout: 'basic',
    children: [
      {
        name: 'counter',
        path: 'counter',
        component: dynamicWrapper(app, [], () =>
          import('./components/counter')
        )
      },
      {
        name: 'password',
        path: 'password',
        component: dynamicWrapper(app, [], () =>
          import('./components/pwd')
        )
      },
        {
            name: 'user',
            path: 'user',
            component: dynamicWrapper(app, [], () =>
                import('./components/user')
            )
        },

    ]
  }
];
