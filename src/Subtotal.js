/* eslint-disable no-unused-vars */
import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
    //provide browser history
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            {/*For rendering the money*/}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
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
                prefix={"Rs "}
            />
            <button onClick={e => history.push("/payment")} className="proceed__button">Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;
