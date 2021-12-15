import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Product from "./Product";
import "./Products.css";
import { setProducts } from "./../state/actions/productActions";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => dispatch(setProducts(data)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        <Product />
      </div>
    </div>
  );
};

export default Products;
