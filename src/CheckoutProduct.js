/* eslint-disable no-unused-vars */
import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, reviews }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutimage__product" src={image} alt="Checkout Product" />
            <div className="checkoutProduct__info">
                <div className='checkout_Alignment'>
                    <div className="checkoutProduct__title">{title}</div>
                    <div className="checkoutproduct__price">
                        <small>&#x20b9; </small>
                        <strong>{price}</strong>
                    </div>
                </div>

                <div className="checkoutproduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))}
                    <span className='product__reviews'>({reviews})</span>
                </div>
                <button className="product__button" onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
