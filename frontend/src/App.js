import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Post from './components/Post';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Header />
        <section className='App-main'>
          <Post
            nickname='Chris'
            avatar='https://www.laravelnigeria.com/img/chris.jpg'
            caption='Moving the community!'
            image='https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg'
          />
          {/* more posts */}
        </section>
      </Provider>
    </div>
  );
}

export default App;
