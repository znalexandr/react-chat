import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { History } from '@/services';
import { MainLayout, GuestLayout, StylesProvider } from './layouts';

const MessagerPage = React.lazy(() => import('./pages/MessagerPage'));
const GuestPage = React.lazy(() => import('./pages/GuestPage'));

const isAuth = true;

function App() {
  return (
    <StylesProvider>
      <Router history={History}>
        <Suspense fallback={null}>
          <Switch>
            {isAuth ? (
              <MainLayout>
                <Route path="/">
                  <MessagerPage />
                </Route>
              </MainLayout>
            ) : (
              <GuestLayout>
                <Route path="/" exact>
                  <GuestPage />
                </Route>
              </GuestLayout>
            )}
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  );
}

export default App;
