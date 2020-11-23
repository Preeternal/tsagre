import {ApolloClient, InMemoryCache} from '@apollo/client';
import {RestLink} from 'apollo-link-rest';

import {apiUrl} from '../config';

const restLink = new RestLink({uri: apiUrl});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});
