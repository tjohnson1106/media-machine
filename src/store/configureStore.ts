import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import rootSaga from "./sagas";

// interface DevTool extends Window {
//   _REDUX_DEVTOOLS_EXTENSION_COMPOSE_: any;
// }

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    //   @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
