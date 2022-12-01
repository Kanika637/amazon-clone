import React, { useState,useEffect} from 'react'
import CheckoutProduct from '../checkOut/CheckoutProduct';
import "./Payment.css" 
import { useStateValue } from '../../StateProvider';
import {Link,useHistory} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "../../reducer";
import axios from '../../axios';
import {db} from "../../firebase";


// importing some hooks from stripe
const promise=loadStripe('pk_test_51JdCsbSDjgMnau9ncKpDOaddNIWtdhVTTV92V4ShkTzLec033vWcRQjqEUByb1s4D6vmPmH6oMK0bkBJyBlRsStp00wQV1pNuX')



function Payment() {
    const[{basket,user},dispatch]=useStateValue();
    const history=useHistory();

    //hooks from stripe


const [processing,setProcessing]=useState("");
const [succeeded,setSucceeded]=useState(false);

const stripe = useStripe();
const elements = useElements();

    // adding two states 
 
    //for disabling
const [disabled,setDisabled]=useState(true);

    

    //another for error
const[error,setError]=useState(null);
    
    //making a client secret

    const [clientSecret,setClientSecret]=useState(true);

    
        
        //whenever the basket chnages it will 
        // make a request to have client secret
        // so that we can charge the cutomers
// generate the special stripe secret which allows
        // us to charge a customer
        
        useEffect(() => {
            // generate the special stripe secret which allows us to charge a customer
            const getClientSecret = async () => {
                const response = await axios({
                    method: 'post',
                    // Stripe expects the total in a currencies subunits
                    url: `/payments/create?total=${getBasketTotal(basket) * 100}`
                });
                setClientSecret(response.data.clientSecret)
            }
    
            getClientSecret();
        }, [basket])

    console.log('THE SECRET IS>>>>',clientSecret)

    const handleSubmit= async (event)=>{
        event.preventDefault();
        setProcessing(true);
        const payload=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({response})=>{
        
            // payment confirmation
            

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            history.replace("./orders");
        

        })


    }

    const handleChange=event=>{

        setDisabled(event.empty);
        setError(event.error?event.error.message:"");


    }
    
    return (
        <div className="payment">
            <div className="payment__container">

                <h1 className="head"> Checkout(<Link to="/checkout"> {basket?.length} Items</Link>)
                </h1>
                <div className="payment_section">
                  <div className="payment_title">
                     <h3>Delivery Address </h3>
                     </div>
                     <div className="payment_address">
                       <p>{user?.email}</p>
                           <p className="payment_address">Flat No. 409 Tower-A3</p>
                               </div>

                            
                </div>
                <div className="payment_section">
                <div className="payment_title">
                    <h3>Review items and delivery</h3>

                    </div>
                    <div className="payment_items">
                        {basket.map((item)=>(
                            <CheckoutProduct
                            id={item.id}
                            rating={item.rating}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            />
                        ))}
                    </div>


                </div>
                <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                    </div>
                    <div className="paymenyt_details">
                        {/* stripe magic */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment_pricecontainer">
                                <CurrencyFormat
                                renderText={(value)=>(
                                    <h3>Order Total: {value}</h3>
                                    
                                )}

                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"Rs"}
                                />
                                
                                <Link to="/thanku">
                                <button className="buy_button" disabled={processing||disabled||succeeded}>
                                <span>{processing?<p>Processing...</p>:
                                "Buy Now"}</span>
                                </button>
                                </Link>
                                



                            </div>
                            {error && <div>{error}</div>}
                        </form>
                       
                        </div>

                </div>
            </div>

            
        </div>
    )
}

export default Payment