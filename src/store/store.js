import {compose, createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger";
import {rootReducer} from "./root-reducer";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import createSagaMiddleWare from 'redux-saga'
import {rootSaga} from "./root-saga";



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const sagaMiddleWare = createSagaMiddleWare()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWare = [process.env.NODE_ENV === 'development' && logger, sagaMiddleWare].filter(Boolean)

const composedEnhancers = compose(applyMiddleware(...middleWare))
export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleWare.run(rootSaga)

export const persistor = persistStore(store)