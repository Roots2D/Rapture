import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const preloadedState = { session: {currentUser: window.currentUser} };

  let store;
  if (window.currentUser) {
    preloadedState['session']['currentUser'] = window.currentUser;
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root);
});
