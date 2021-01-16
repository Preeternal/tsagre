import {ApolloClient, InMemoryCache} from '@apollo/client';
import {RestLink} from 'apollo-link-rest';
import AsyncStorage from '@react-native-community/async-storage';
import {CachePersistor, AsyncStorageWrapper} from 'apollo3-cache-persist';

import {apiUrl} from '../config';

const cache = new InMemoryCache();

export const apolloPersistor = new CachePersistor({
  cache,
  storage: new AsyncStorageWrapper(AsyncStorage),
  debug: __DEV__,
  trigger: 'write',
});

const restLink = new RestLink({uri: apiUrl});

export const client = new ApolloClient({
  // cache: new InMemoryCache(),
  cache,
  link: restLink,
  connectToDevTools: __DEV__,
});
