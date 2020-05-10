/* Onbly in React 16.8. React Hooks are functions that let us hook into the React state and lifecycle features from function components. */
import React, { useState } from "react";
import "../App.css";

function ShoppingCartHook() {
  const [productsCount, setProductsCount] = useState(0);

  return (
    <div className="component">
      <h2>Shopping Cart (Hook)</h2>
      <h3>Items in cart : {productsCount}</h3>
      <button
        className="button"
        onClick={() => setProductsCount(productsCount + 1)}
      >
        +
      </button>{" "}
      <button
        className="button"
        onClick={() => setProductsCount(productsCount - 1)}
      >
        -
      </button>
    </div>
  );
}

export default ShoppingCartHook;
