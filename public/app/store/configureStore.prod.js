import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from '../middleware/api';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const buildStore = compose(applyMiddleware(thunk, api))(createStore);

  return buildStore(rootReducer, initialState);
}
