import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import favoritesReducer from './modules/favorites'

function getRootReducer(){
  return combineReducers({
    favoritesReducer,
  });
};

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, getRootReducer())

export default createStore( getRootReducer() )
//export const persistor = persistStore(store)