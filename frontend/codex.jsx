import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store/store';
import Root from './components/root';

//Testing
import { signup, login, logout } from './util/session_api_util';

const windowTest = (store) => {
	window.store = store;
	window.dispatch = store.dispatch;
	window.getState = store.getState;
  window.signup = signup;
  window.login = login;
};


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configStore();

  windowTest(store);

  ReactDOM.render(<Root store= { store } />, rootEl);
});
