import React, { useState } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const LyricsCreate = ({ mutate, id }) => {
  console.log(id);
  const [content, setContent] = useState("");

  const onSubmit = event => {
    event.preventDefault();

    // as soon as you use graphql helper from react-apollo library to glue your component to your mutation, you can access mutate on your props. that's my son, is the magic
    mutate({
      variables: {
        content: content,
        SongId: id
      }
    }).then(() => setContent(""));
  };

  return (
    <form onSubmit={onSubmit.bind(this)}>
      <label>Add a lyrics</label>
      <input
        value={content}
        onChange={event => setContent(event.target.value)}
      />
    </form>
  );
};

const mutation = gql`
  mutation AddLyricsToSong($content: String, $SongId: ID) {
    addLyricToSong(content: $content, songId: $SongId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricsCreate);
