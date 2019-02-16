import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./../reducers";
// import rootSaga from './sagas';

import createSagaMiddleware from "redux-saga";

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools
  )
);

// sagaMiddleware.run(rootSaga);

export default store;
