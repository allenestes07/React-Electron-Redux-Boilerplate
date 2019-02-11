import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./../reducers";

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(),
    reduxDevTools
  )
);

export default store;
