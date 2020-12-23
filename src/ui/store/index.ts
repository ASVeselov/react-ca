import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import {
  createStore,
  combineReducers,
  applyMiddleware,
  Middleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { all } from "redux-saga/effects";

//reducers

//sagas

//const

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
middlewares.push(sagaMiddleware);

const rootReducer = combineReducers({});

function* rootSaga() {
  yield all([]);
}

export function makeStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

const store = makeStore();
export default store;

export type AppState = ReturnType<typeof rootReducer>;
