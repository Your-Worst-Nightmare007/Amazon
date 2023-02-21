import React from 'react';
import './checkout.css';
import Subtotal from './subtotal.jsx';
import CheckoutProduct from './checkoutProduct';
import { useStateValue } from './stateProvider';


function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout-left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/LATV/1071374_750x200_8._V515060851_.jpg" alt="" className='checkout-ad' />
                <div>
                    <h2 className="checkout-title">Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;