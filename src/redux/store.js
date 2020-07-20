import rootReducer from './root-reducer';
import rootSaga from './root-saga';

import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

// Middlewares
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') middleware.push(logger);

const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

export default store;
