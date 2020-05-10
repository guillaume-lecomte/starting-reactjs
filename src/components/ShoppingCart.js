import React from "react";
import "../App.css";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsCount: 0,
      lastUpdate: new Date(),
    };
  }

  // componentWillMount is executed before rendering, on both the server and the client side.
  componentWillMount() {
    console.log("Component WILL MOUNT!");
  }

  // componentDidMount is executed after the first render only on the client side. This is where AJAX requests and DOM or state updates should occur. This method is also used for integration with other JavaScript frameworks and any functions with delayed execution such as setTimeout or setInterval. We are using it to update the state so we can trigger the other lifecycle methods.
  componentDidMount() {
    console.log("Component DID MOUNT!");
  }

  // componentWillReceiveProps is invoked as soon as the props are updated before another render is called. We triggered it from setNewNumber when we updated the state.
  componentWillReceiveProps(newProps) {
    console.log("Component WILL RECIEVE PROPS!");
  }

  // shouldComponentUpdate should return true or false value. This will determine if the component will be updated or not. This is set to true by default. If you are sure that the component doesn't need to render after state or props are updated, you can return false value.
  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  // componentWillUpdate is called just before rendering.
  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL UPDATE!");
  }

  // componentDidUpdate is called just after rendering.
  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID UPDATE!");
  }

  // componentWillUnmount is called after the component is unmounted from the dom. We are unmounting our component in main.js.
  componentWillUnmount() {
    console.log("Component WILL UNMOUNT!");
  }

  render() {
    const { productsCount, lastUpdate } = this.state;
    return (
      <div className="component">
        <h2>Shopping Cart</h2>
        <h3>
          Items in cart : {productsCount} at {lastUpdate.toLocaleTimeString()}
        </h3>
        <button
          className="button"
          onClick={() =>
            this.setState({
              productsCount: productsCount + 1,
              lastUpdate: new Date(),
            })
          }
        >
          +
        </button>{" "}
        <button
          className="button"
          onClick={() =>
            this.setState({
              productsCount: productsCount - 1,
              lastUpdate: new Date(),
            })
          }
        >
          -
        </button>
      </div>
    );
  }
}

export default ShoppingCart;
