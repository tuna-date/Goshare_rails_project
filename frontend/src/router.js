import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Post from './components/Post';
import Login from './views/Login';
import Profile from './views/Profile';

function Router() {
  const content = useSelector(state => state); //this hook gives us redux store state
  const dispatch = useDispatch(); //this hook gives us dispatch method

  return (
    <BrowserRouter>
      <Header />

      {content.LoginStatus.isLogin ? (
        <Switch>
          <Route
            exact
            path='/'
            component={() => (
              <Post
                nickname='Chris'
                avatar='https://lh3.googleusercontent.com/-NncmLvZP5l4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3re14K03xKtbJui9PE-L2dTnt7Jq-Q/photo.jpg?sz=46'
                caption='Moving the community!'
                image='https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg'
              />
            )}
          />
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
