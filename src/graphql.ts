import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://analytics-api.herokuapp.com/analytics" as any,
  cache: new InMemoryCache(),
});
