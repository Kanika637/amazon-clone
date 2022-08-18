import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, reviews }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutimage__product" src={image} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutproduct__price">
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}

                    <span className="product__reviews">({reviews})</span>
                </div>
                <button
                    className="checkoutproduct__button"
                    onClick={removeFromBasket}
                >
                    Remove from basket
                </button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
