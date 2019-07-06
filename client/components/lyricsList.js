import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const LyricsList = ({ lyrics, mutate }) => {
  const onLike = (id, like) => {
    mutate({
      variables: {
        id: id
      },
      // optimisticResponse is a technique of instantly updating UI based on the system's behaviour. In our case,
      // we think that on each click of like, one like should be added to the total sum, thus, the user feels the instant update,
      // and we under the hood send the data, and get it back and update the UI. This is an approach of many like systems like Facebook.
      optimisticResponse: {
        __typename: "Mutation",
        // the exact respone of the backend should be duplicated here.
        likeLyric: {
          id: id,
          __typename: "LyricType",
          likes: like + 1
        }
      }
    });
  };

  const renderLyrics = () => {
    return lyrics.map(({ id, content, likes }) => {
      return (
        <li className="collection-item" key={id}>
          {content}
          <div className="icon-box">
            <i onClick={() => onLike(id, likes)} className="material-icons">
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      );
    });
  };

  return <ul className="collection">{renderLyrics()}</ul>;
};

const mutation = gql`
  mutation AddLikes($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricsList);
