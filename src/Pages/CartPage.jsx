import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CartPage = () => {
  const location = useLocation();
  const cart_product_details = location.state || {};


  return (
    <>
      <h1>Your Cart</h1>
      <div className="product-card">
        <div>
          <img
            src={cart_product_details.catImg}
            className="product-info-img"
          ></img>
          <div>{cart_product_details.productName}</div>
          <div>{cart_product_details.price}</div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
