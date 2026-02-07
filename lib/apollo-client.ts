import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://graphql-pokemon2.vercel.app/',
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            pokemon: {
              read(existing, { args, toReference }) {
                // Use client-side caching with normalized cache
                if (args?.name) {
                  return toReference({
                    __typename: 'Pokemon',
                    name: args.name,
                  });
                }
                return existing;
              },
            },
          },
        },
      },
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });
};

let apolloClient: ApolloClient<any> | undefined;

export const getClient = () => {
  if (!apolloClient) {
    apolloClient = createApolloClient();
  }
  return apolloClient;
};
