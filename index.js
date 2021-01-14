import React, {useEffect} from 'react';
import {AppRegistry} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import {client, apolloPersistor} from './src/api/client';
import {name as appName} from './app.json';
import {store, persistor} from './src/state/store';
import {Loader} from './src/components/common/Loader/Loader';

const Start = () => {
  useEffect(() => {
    async function restore() {
      await apolloPersistor.restore();
      apolloPersistor.getLogs(true);
    }
    restore();
  }, []);
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loader />}>
          <App />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
};

AppRegistry.registerComponent(appName, () => Start);
