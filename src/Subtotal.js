/* eslint-disable no-unused-vars */
import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
import { ReactComponent as TickSvg } from "./assets/tick.svg";

function Subtotal() {
    //provide browser history
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <div className='subtotal_gift_text_container'>
            <span className='tick__icon'>
                <TickSvg />
            </span>
                <p className='subtotal_gift_text'><span className='subtotal_gift_text_green'>Part of your order qualifies for FREE Delivery.
                </span> Select this option at checkout Details</p>
            </div>
            {/*For rendering the money*/}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p className='subtotal__text'>
                            Subtotal({basket.length} items) : <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift</small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeprator={true}
                prefix={"₹ "}
            />
            <button onClick={e => history.push("/payment")} className="proceed__button">Proceed to Buy</button>
        </div>
    );
}

export default Subtotal;
