import React from "react";
import { useLocation } from "react-router-dom";
import { ProductProvider } from "../Context/ProductContext";
import ProductGrid from "../Components/ProductGrid";

const ProductList = () => {
  const location = useLocation();
  let product_info_details = location.state;
  console.log(product_info_details);

  return (
    <ProductProvider productInfo={product_info_details}>
      <ProductGrid />
    </ProductProvider>
  );
};

export default ProductList;
