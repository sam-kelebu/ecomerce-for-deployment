import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import Cart from "./Cart";
const Shope = () => {
  return (
    <>
      <div className="shope">
        <h2>Shope</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, dolor
          ipsa natus fugit blanditiis delectus sed praesentium pariatur veniam
          nisi reiciendis perferendis autem aliquid eveniet quaerat omnis illo
          tempora! Debitis.
        </p>
        <button onClick={Cart}>Cart</button>
        <p>filter</p>
        <p>Catagories</p>
        <div className="product-grid">
          <div className="product-grid-1"></div>
          <div className="product-grid-2"></div>
          <div className="product-grid-3"></div>
          <div className="product-grid-4"></div>
          <div className="product-grid-5"></div>
          <div className="product-grid-6"></div>
        </div>
      </div>
      <button className="btn-01">Button </button>
    </>
  );
};
export default Shope;
