import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { History } from '@/services';
import { MainLayout, StylesProvider } from './layouts';

const HomePage = React.lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <StylesProvider>
      <Router history={History}>
        <Suspense fallback={null}>
          <MainLayout>
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
            </Switch>
          </MainLayout>
        </Suspense>
      </Router>
    </StylesProvider>
  );
}

export default App;
