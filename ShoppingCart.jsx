import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone", price: 8900, quantity: 0 },
      { id: 2, productName: "Sony Camera", price: 8900, quantity: 0 },
      { id: 3, productName: "iPad Pro", price: 8900, quantity: 0 },
      { id: 4, productName: "Xbox", price: 8900, quantity: 0 },
      { id: 5, productName: "Dell Monitor", price: 8900, quantity: 0 },
      { id: 6, productName: "Samsung QLED TV", price: 8900, quantity: 0 },
    ],
  };
  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>
        <div>
          {this.state.products.map((prod) => {
            return <Product key={prod.id} id={prod.id} />;
          })}
        </div>
      </div>
    );
  }
}
