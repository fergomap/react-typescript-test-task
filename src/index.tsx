import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import app from 'firebase/app';
import FIREBASE_CONFIG from './config/firebase.config';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {mainReducer} from 'store/main.reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

app.initializeApp(FIREBASE_CONFIG);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(mainReducer, composeWithDevTools())}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
