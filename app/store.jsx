import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

export * from './reducers';
