import React, {useEffect, useState} from 'react';
import {AppRegistry, View} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {RestLink} from 'apollo-link-rest';
import AsyncStorage from '@react-native-community/async-storage';
import {CachePersistor, AsyncStorageWrapper} from 'apollo3-cache-persist';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
// import {client, apolloPersistor} from './src/api/client';
import {name as appName} from './app.json';
import {store, persistor} from './src/state/store';
import {Loader} from './src/components/common/Loader/Loader';
import {apiUrl} from './src/config';

const Start = () => {
  // useEffect(() => {
  //   async function restore() {
  //     await apolloPersistor.restore();
  //     apolloPersistor.getLogs(true);
  //   }
  //   restore();
  // }, []);

  const [client, setClient] = useState();
  const [apolloPersistor, setPersistor] = useState();

  useEffect(() => {
    async function init() {
      const cache = new InMemoryCache();
      let newPersistor = new CachePersistor({
        cache,
        storage: new AsyncStorageWrapper(AsyncStorage),
        debug: __DEV__,
        trigger: 'write',
      });
      await newPersistor.restore();
      setPersistor(newPersistor);
      const restLink = new RestLink({uri: apiUrl});
      setClient(
        new ApolloClient({
          cache,
          link: restLink,
          connectToDevTools: __DEV__,
        }),
      );
    }

    init();
  }, []);

  return client ? (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loader />}>
          <App />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  ) : (
    <View />
  );
};

AppRegistry.registerComponent(appName, () => Start);
