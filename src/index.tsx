import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { apolloClient } from "./graphql";
import { ApolloProvider } from "@apollo/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);
