import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import favoritesReducer from './modules/favorites'
import contactsReducer from './modules/contacts'
import contactDialogReducer from './modules/contactDialog'

/* this configuration will persist all the reducers in local storage
    TODO: Only persist in storage the required reducers
*/

function getRootReducer(){
    return combineReducers({
        favoritesReducer,
        contactDialogReducer,
        contactsReducer,
    });
};

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, getRootReducer())

export const store =  createStore( persistedReducer )
export const persistor = persistStore(store)