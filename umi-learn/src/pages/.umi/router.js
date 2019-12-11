import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';

const Router = DefaultRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index.js').default,
    routes: [
      {
        path: '/404',
        exact: true,
        component: require('../404.js').default,
      },
      {
        path: '/footer',
        exact: true,
        component: require('../footer.js').default,
      },
      {
        path: '/',
        exact: true,
        component: require('../index.js').default,
      },
      {
        path: '/top',
        exact: true,
        component: require('../top.js').default,
      },
      {
        path: '/sub',
        exact: false,
        component: require('../sub/_layout.js').default,
        routes: [
          {
            path: '/sub/detail/:id?',
            exact: true,
            component: require('../sub/detail/$id$.js').default,
          },
          {
            path: '/sub',
            exact: true,
            component: require('../sub/index.js').default,
          },
          {
            path: '/sub/pageA',
            exact: true,
            component: require('../sub/pageA.js').default,
          },
          {
            path: '/sub/pageB',
            exact: true,
            component: require('../sub/pageB.js').default,
          },
          {
            path: '/sub/suber',
            exact: true,
            component: require('../sub/suber/index.js').default,
          },
          {
            path: '/sub/suber/pageA',
            exact: true,
            component: require('../sub/suber/pageA.js').default,
          },
          {
            path: '/sub/suber/pageB',
            exact: true,
            component: require('../sub/suber/pageB.js').default,
          },
          {
            path: '/sub/:name?/:stuno?',
            exact: true,
            component: require('../sub/$name$/$stuno$.js').default,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/lwq/AppData/Local/Yarn/Data/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: false },
              ),
          },
        ],
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/lwq/AppData/Local/Yarn/Data/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/lwq/AppData/Local/Yarn/Data/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
