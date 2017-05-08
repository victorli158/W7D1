import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import allTodos from './reducers/selectors';
import Root from './components/root';

// import configureStore from './store/store';

// import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.allTodos = allTodos;
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
