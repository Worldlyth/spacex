import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const client = new ApolloClient({
    uri: "https://graphql.datocms.com/",
    cache: new InMemoryCache(),
    headers: {
        "Authorization": 'efb3dfc65bcdfc574446f5f5924f9e',
      }
  });
