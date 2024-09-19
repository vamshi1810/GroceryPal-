import React, { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children, productInfo }) => {
  const [products, setProducts] = useState(productInfo);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
