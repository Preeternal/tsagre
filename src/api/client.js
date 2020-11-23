import {ApolloClient, InMemoryCache} from '@apollo/client';
import {RestLink} from 'apollo-link-rest';

const restLink = new RestLink({uri: 'http://ergast.com/api/f1'});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});
