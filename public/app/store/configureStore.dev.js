import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from '../middleware/api';
import rootReducer from '../reducers';
import DevTools from '../DevTools';

export default function configureStore(initialState) {
  const buildStore = compose(
    applyMiddleware(thunk, api),
    DevTools.instrument()
  )(createStore);

  const store = buildStore(rootReducer, initialState);

  if(module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers'));
    })
  }

  return store;
}
