import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://tmdb.apps.quintero.io",
  cache: new InMemoryCache(),
});
