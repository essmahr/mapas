// https://github.com/matthew-sun/redux-example

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import DevTools from './DevTools';

const store = configureStore();

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools/>
    </div>
  </Provider>,
  document.getElementById('app')
);
