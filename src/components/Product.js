import React from "react";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, image, title, price, rating, category } = product;
    return (
      <div key={id} className="col product">
        <Link to={`/product/${id}`} className="no-link">
          <div className="card h-100 shadow-sm">
            <img
              height="300px"
              src={image}
              className="card-img-top border-bottom p-5"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title my-0 text-dark">{title}</h5>
            </div>
            <div className="p-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title text-warning my-0">
                  $ <span className="text-secondary">{price}</span>
                </h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={rating.rate}
                  edit={false}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </div>
              <p className="card-text text-secondary">{category}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default Product;
