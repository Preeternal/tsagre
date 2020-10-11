import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import {name as appName} from './app.json';
import {store, persistor} from './src/state/store';
import {Loader} from './src/components/common/Loader/Loader';

const Start = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Loader />}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Start);
