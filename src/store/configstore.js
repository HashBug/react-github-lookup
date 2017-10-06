import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default (intialState) => {
  return createStore(
    rootReducer,
    intialState,
    applyMiddleware(thunk)
  );
}
