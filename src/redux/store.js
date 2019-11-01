import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/rootReducer";

import { persistStore } from "redux-persist";


export const store = createStore(rootReducer, composeWithDevTools(
    // applyMiddleware()
));

export const persistor = persistStore(store);

export default {store, persistor};