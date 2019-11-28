import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Login from './views/Login';
import Profile from './views/Profile';
import Home from './views/Home';

function Router() {
  const content = useSelector(state => state); //this hook gives us redux store state
  const dispatch = useDispatch(); //this hook gives us dispatch method

  return (
    <BrowserRouter>
      <Header />

      {content.LoginStatus.isLogin ? (
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/profile' component={Profile} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path='/' component={Login} />
        </Switch>
      )}
    </BrowserRouter>
  );
}

export default Router;
