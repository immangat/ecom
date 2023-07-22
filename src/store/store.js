import {compose, createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger";
import {rootReducer} from "./root-reducer";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'



const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],


}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWare = [logger]

const composedEnhancers = compose(applyMiddleware(...middleWare))
export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)