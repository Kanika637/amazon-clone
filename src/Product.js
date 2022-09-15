import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating, reviews }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        reviews: reviews,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p style={{paddingTop:"150px"}}>{title}</p>
        <p className="product__price">
          <small>Rs</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
          <span className="product__reviews">({reviews})</span>
        </div>
      </div>

      <img className="product__image" src={image} alt="Product"/>

      <button className="product__button" onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
