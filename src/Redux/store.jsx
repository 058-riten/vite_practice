import { combineReducers, createStore } from "redux";
import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
    itemStore: itemReducer,
    cartStore: cartReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const myPersistedReducer = persistReducer(persistConfig, rootReducer)

export const myStore = createStore(myPersistedReducer)
export const myPersistor = persistStore(myStore)