import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);
  return (
    <div className="single-p-width border my-5 shadow-sm">
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col">
          <img src={product?.image} alt="" className="single-product-img" />
        </div>
        <div className="col p-5">
          <h4>{product?.title}</h4>
          {/* <div className="tag"></div> */}
          <h6 className="bg-light rounded py-2 px-3 bold color border my-3">
            {product?.category}
          </h6>
          <p className="text-secondary">{product?.description}</p>
          <button className="btn add-btn px-5 fw-bold">
            {" "}
            <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
