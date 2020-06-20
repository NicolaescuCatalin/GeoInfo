import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import App from "./App";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: "https://countries.trevorblades.com/",
  }),
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
