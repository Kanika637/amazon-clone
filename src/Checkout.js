import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    const Finalproducts = ({ basket }) => (
        <FlipMove duration={750} easing="ease-out">
            {basket.map((article) => (
                <article key={basket.id} {...basket} />
            ))}
        </FlipMove>
    );

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__add"
                    src="https://th.bing.com/th/id/R.80ae5f35f1c44b0f930163d23226366c?rik=%2bJmqA3%2bhXOe%2byw&riu=http%3a%2f%2fwww.newburyportef.org%2fwp-content%2fuploads%2f2016%2f11%2famazon_smile_newbanner.png&ehk=QYz%2b3M45putNX9M8TW4b9l%2fDWCIrYVY34oQs0qJZQCA%3d&risl=&pid=ImgRaw&r=0"
                />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h1 className="checkout__title">Your Shopping Basket</h1>

                    {/*This will send all the products we are adding in our basket to the shopping list using the basket variable*/}
                    {basket.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            price={item.price}
                            rating={item.rating}
                            title={item.title}
                            image={item.image}
                            reviews={item.reviews}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
