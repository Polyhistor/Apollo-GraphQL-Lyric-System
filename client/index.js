import React from "react";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import App from "./components/app";
import SongList from "./components/songList";
import SongCreate from "./components/songCreate";
import SongDetail from "./components/songDetail";
import "./style/style.css";

// ApolloClient assumes that /graphql route exists on your server
const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate} />
          <Route path="songs/:id" component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
