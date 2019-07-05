import React from "react";

const LyricsList = ({ lyrics }) => {
  const renderLyrics = () => {
    return lyrics.map(({ id, content }) => {
      return (
        <li className="collection-item" key={id}>
          {content}
        </li>
      );
    });
  };

  return <ul className="collection">{renderLyrics()}</ul>;
};

export default LyricsList;
