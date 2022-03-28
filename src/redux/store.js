import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { rootWatcherSaga } from "./rootWatcherSaga";

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//persist configuration
const persistConfig = {
  key: "root",
  storage: storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

//create saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootWatcherSaga);
