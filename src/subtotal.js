import React from 'react';
import "./subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';




function Subtotal() {
  const Navigate = useNavigate();
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <CurrencyFormat 
        renderText={(value)=>(
        <> <p>subtotal ({basket.length} items): <strong>{value}</strong></p><small className='subtotal_gift'><input type='checkbox'/> This order contains a gift</small></>)}
        decimalScale={2} value={getBasketTotal(basket)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        <button onClick={e => Navigate('/payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal;