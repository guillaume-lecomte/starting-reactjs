import React from "react";
import "../App.css";

function Biography({ author }) {
  return (
    <div className="component">
      <h2>Biography of {author}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a nisl
        magna. Curabitur ut suscipit ligula. Phasellus nec commodo dui.
        Pellentesque vulputate ex mi, non ultricies nisl condimentum vitae.
        Praesent efficitur, tortor sed porttitor ultrices, enim elit fermentum
        arcu, condimentum hendrerit sem ligula eget risus.
      </p>
    </div>
  );
}

export default Biography;
