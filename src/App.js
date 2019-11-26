import React from 'react';
import First from './pages/First';
import Second from './pages/Second';
import NotFound from "./pages/NotFound";
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App(props) {
  return (
      <Router history={props.history}>
          <Switch>
              <Route exact path='/a' component={First}/>
              <Route exact path='/b' component={Second} />
              <Route component={NotFound} />
          </Switch>
      </Router>
  );
}

export default App;
