import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas/rootSaga";

import { persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {store, persistor};