import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import favoritesReducer from './modules/favorites'
import contactDialogReducer from './modules/contactDialog'

function getRootReducer(){
  return combineReducers({
    favoritesReducer,
    contactDialogReducer,
  });
};

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, getRootReducer())

export const store =  createStore( persistedReducer )
export const persistor = persistStore(store)