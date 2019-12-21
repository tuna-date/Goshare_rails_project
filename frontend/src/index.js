import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

import './i18n';

ReactDOM.render(
  <Suspense fallback={<div>Loading</div>}>
    <ActionCableProvider url={'ws://localhost:5050/cable'}>
      <App />
    </ActionCableProvider>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
