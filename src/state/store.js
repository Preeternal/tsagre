import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {rootReducer} from '.';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['user'],
  blacklist: ['drivers'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const persistor = persistStore(store);

export {store, persistor};
