import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { History } from '@/services';
import { MainLayout, GuestLayout, StylesProvider } from './layouts';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const GuestPage = React.lazy(() => import('./pages/GuestPage'));

const isAuth = false;

function App() {
  return (
    <StylesProvider>
      <Router history={History}>
        <Suspense fallback={null}>
          <Switch>
            {isAuth ? (
              <MainLayout>
                <Route path="/">
                  <HomePage />
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
