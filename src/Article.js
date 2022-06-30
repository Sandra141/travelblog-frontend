import React from "react";

function Article({ art }) {
  return (
    <div>
      <h2>{art.title}</h2>
      <img src={art.img} />
      <p>{art.content}</p>
    </div>
  );
}

export default Article;
