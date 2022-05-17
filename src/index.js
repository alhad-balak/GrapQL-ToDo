import { ApolloProvider, InMemoryCache, ApolloClient, createHttpLink } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: 'https://that-todo.hasura.app/v1/graphql',
});

// Add Hasura admin secret header to allow permission to perform mutations and queries
const authLink = setContext((_, { headers }) => {
  const token = 'WPBIVVYj081eL930HFqNIWp0pdOnjAJhGAiTVmC892icbjK18egkIfHTHCoysnug';
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": token
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
