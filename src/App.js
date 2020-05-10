import React from "react";
import "./App.css";

import Header from "./Header";
import Biography from "./components/Biography";
// import Books from "./components/Books";
import ShoppingCart from "./components/ShoppingCart";
// import ShoppingCartHook from "./components/ShoppingCartHook";

function App() {
  const authorName = "Edgar Allan Poe";
  return (
    <>
      <Header />
      <div className="container">
        <Biography author={authorName} />
        <ShoppingCart />
      </div>
    </>
  );
}

export default App;
