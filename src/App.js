import React, { Suspense } from 'react';
import Navigator from './navigator';
import NotFound from "./pages/NotFound";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
const First = React.lazy(() => import('./pages/First'));
const Second = React.lazy(() => import('./pages/Second'));
const Third = React.lazy(() => import('./pages/Third'));

function App(props) {
  return (
      <Router history={props.history}>
          <Navigator />
          <Suspense fallback={<div>loading.....</div>}>
              <Switch>
                  <Route exact path='/first' component={First} />
                  <Route exact path='/second' component={Second} />
                  <Route exact path='/third' component={Third} />
                  {/*Switch中的子路由不一定必須由Route组件包裹*/}
                  <Third exact path='/four' compoennt={First} />
                  <Redirect to='/first' />
              </Switch>
          </Suspense>
      </Router>
  );
}

export default App;
