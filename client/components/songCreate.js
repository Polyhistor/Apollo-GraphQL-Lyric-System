import React, { useState } from "react";

const SongCreate = () => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <h3>Create a New Song</h3>
      <form>
        <label>Song Title:</label>
        <input onChange={event => setTitle(event.target.value)} value={title} />
      </form>
    </div>
  );
};

export default SongCreate;
