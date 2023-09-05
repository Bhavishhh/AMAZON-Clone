import React from 'react';
import "./checkout.css";
import Subtotal from './subtotal';
import Checkoutproduct from './checkoutproduct';
import { useStateValue } from './StateProvider';



function Checkout() {
  const[{basket,user},dispatch]=useStateValue();
  return (
    <div className='checkout'>
        <div className='chechout_left'>
            <img className='checkout_ad' src='http://g-ecx.images-amazon.com/images/G/31/prime/PEX/PeX-Top-PC-1500X375.jpg' />
                <div>
                <h3>Hello , {user?.email}</h3>



                    <h2 className='checkout_title'>your shopping basket</h2>
                    {basket.map(item=>(
                        <Checkoutproduct 
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}
                          />


                    ))}
                </div>
        </div>
            <div className='chechout_right'>
                <Subtotal />

            </div>
    </div>
  )
}

export default Checkout