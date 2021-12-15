import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import {
  selectedProduct,
  removeSelectedProduct,
} from "./../state/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { image, title, description, category } = product;
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => dispatch(selectedProduct(data)));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="single-p-width border my-5 shadow-sm">
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col">
          <img src={image} alt="" className="single-product-img" />
        </div>
        <div className="col p-5">
          <h4>{title}</h4>
          {/* <div className="tag"></div> */}
          <h6 className="bg-light rounded py-2 px-3 bold color border my-3">
            {category}
          </h6>
          <p className="text-secondary">{description}</p>
          <button className="btn add-btn px-5 fw-bold">
            <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
