import React from "react";

const Post = ({ titulo, descripcion, link, parrafo }) => {
  return (
    <article>
      <h2>{titulo}</h2>

      <img src={link}></img>
      <p>{parrafo}</p>
    </article>
  );
};

export default Post;
