import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import configureStore from './store/configureStore';
import DevTools from './DevTools';

const store = configureStore();

render(
  <Provider store={store}>
    <div>
      <AppContainer />
      <DevTools/>
    </div>
  </Provider>,
  document.getElementById('app')
);
