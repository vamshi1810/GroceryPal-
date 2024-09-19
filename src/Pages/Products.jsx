import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import no_results_img from "../assets/no-results-image.png";

const Products = () => {
  const [products, setProductData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const titleParam = queryParams.get("q");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data.productData);
        setFilteredProducts(filterProducts(data.productData, titleParam));
      })
      .catch((error) => {
        console.log("error handling", error);
      });
  }, [titleParam]);

  const filterProducts = (data, searchTerm) => {
    const lowerCaseTerm = searchTerm.toLowerCase();

    return data
      .map((item) => ({
        ...item,
        items: item.items.map((product) => ({
          ...product,
          products: product.products.filter((pro) => {
            const cat_name =
              item.cat_name &&
              item.cat_name.toLowerCase().includes(lowerCaseTerm);
            const nameMatch = pro.productName
              .toLowerCase()
              .includes(lowerCaseTerm);
            const descriptionMatch =
              pro.description &&
              pro.description.toLowerCase().includes(lowerCaseTerm);
            const priceMatch =
              pro.price && pro.price.toString().includes(lowerCaseTerm);

            return nameMatch || descriptionMatch || priceMatch;
          }),
        })),
      }))
      .filter((item) =>
        item.items.some((product) => product.products.length > 0)
      );
  };

  const navigateProductDetails = (info) => () => {
    console.log(info);

    navigate(`/products-details?name=${info.productName}`, { state: info });
  };

  return (
    <>
      {filteredProducts.length === 0 ? (
        <div className="text-center">
          <img src={no_results_img} alt="no-results-found"></img>
          <div>Sorry no result found</div>
        </div>
      ) : (
        <div>
          {filteredProducts.map((item, id) => (
            <div key={id}>
              <h1>{item.cat_name}</h1>
              <div>
                {item.items.map((product, id) => (
                  <div key={id}>
                    <div className="row">
                      {product.products.map((pro, id) => (
                        <div className="col-3" key={id}>
                          <div
                            className="card"
                            onClick={navigateProductDetails(pro)}
                          >
                            <img
                              src={pro.catImg}
                              className="card-img-top"
                              alt={pro.productName}
                            ></img>
                            <div className="card-body">
                              <p className="card-text">{pro.productName}</p>
                              <p className="card-text">
                                {pro?.price.toLocaleString("en-US", {
                                  style: "currency",
                                  currency: "INR",
                                })}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
