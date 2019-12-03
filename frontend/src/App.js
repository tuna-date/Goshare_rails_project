import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import * as loginAction from './actions/loginAction';
import Router from './router';

import './App.css';

function App() {
  useEffect(() => {
    var token;
    try {
      window.addEventListener('load', () => {
        if ((token = localStorage.getItem('token')))
          store.dispatch(loginAction.rememberUser(token));
        else store.dispatch(loginAction.isloading());
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className='App'>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
