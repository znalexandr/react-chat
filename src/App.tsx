import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

import { History } from '@/services';
import { MainLayout } from './layouts';

const HomePage = React.lazy(() => import('./pages/HomePage'));

function App() {
  return (
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
  );
}

export default App;
