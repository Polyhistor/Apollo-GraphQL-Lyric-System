import React, { useState } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link, hashHistory } from "react-router";

import query from "../queries/fetchSongs";

const SongCreate = props => {
  const [title, setTitle] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    props
      .mutate({
        // this is how we pass our react variable into our graphql mutation
        variables: {
          title: title
        },
        refetchQueries: [{ query }]
      })
      .then(() => hashHistory.push("/"));
  };

  return (
    <div>
      <Link to="/">Songs List</Link>
      <h3>Create a New Song</h3>
      <form onSubmit={handleSubmit.bind(this)}>
        <label>Song Title:</label>
        <input onChange={event => setTitle(event.target.value)} value={title} />
      </form>
    </div>
  );
};

// our graphql mutation
const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
