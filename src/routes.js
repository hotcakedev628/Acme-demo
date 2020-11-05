import React, {
  Suspense,
  // Fragment,
  lazy
} from 'react';
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import LoadingScreen from './components/LoadingScreen';

import IndexView from './views/IndexView';
import MainView from './views/MainView';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Component = route.component;

        console.log('route', i, Component)

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <MainLayout>
                <Component {...props} />
              </MainLayout>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  // {
  //   exact: true,
  //   path: '/',
  //   component: () => <Redirect to="/index" />
  // },
  {
    exact: true,
    path: '/',
    component: lazy(() => import('./views/IndexView'))
  },
  {
    exact: true,
    path: '/conversation/:id/view',
    component: lazy(() => import('./views/MainView'))
  },
];

export default routes;
