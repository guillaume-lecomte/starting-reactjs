import React from "react";
import "../App.css";

function Books({ author }) {
  return (
    <div className="component">
      <h2>Books of {author}</h2>
      <ul>
        <li>“The Raven”</li>
        <li>“The Cask of Amontillado”</li>
        <li>“The Masque of the Red Death”</li>
        <li>“The Tell-Tale Heart”</li>
        <li>“The Murders in the Rue Morgue”</li>
        <li>“The Fall of the House of Usher”</li>
        <li>"Metzengerstein"</li>
        <li>"The Gold Bug"</li>
      </ul>
    </div>
  );
}

export default Books;
