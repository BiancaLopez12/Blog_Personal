import React from "react";
export function Post() {
  return;
}

const Post = ({ titulo, descripcion, link, parrafo }) => {
  return (
    <article>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Leer más
        </a>
      )}
      <p>{parrafo}</p>
    </article>
  );
};
