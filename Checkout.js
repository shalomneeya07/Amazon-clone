import React from 'react';
import {useStateValue} from"./StateProvider"; 
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
function Checkout() {
    const [{basket}] = useStateValue();
    return(
     <div className="checkout">
         <div className="checkout__left">
        <img 
            className="checkout__ad" 
            src="https://adeect.files.wordpress.com/2011/08/strip_ad312.jpg"alt=""
        />
        {basket?.length === 0? (
            <div>
                <h2>Your Shopping Basket is empty</h2>
                <p>You have no items in your basket. To buy one or more items, click on "Add to basket" next to the item.</p>
            </div>
        ) : (
             <div>
                 <h2 className="checkout__title">Your Shopping Basket</h2>
                 {basket?.map(item=> (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                 ))}
             </div>
         )}
         </div>
         {basket.length > 0 && (
             <div className="checkout__right">
                    <Subtotal/>
             </div>
         )}
     </div>
    );
}

export default Checkout;
