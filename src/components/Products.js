import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {products?.map((product) =>
          products.length === 0 ? (
            <button class="btn btn-primary" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          ) : (
            <Product product={product} key={product.id} />
          )
        )}
      </div>
    </div>
  );
};

export default Products;
