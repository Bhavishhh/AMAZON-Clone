import React from 'react'
import"./checkoutproduct.css";
import { useStateValue } from './StateProvider';

function Checkoutproduct({id,image,title,price,rating}) {
    const[{basket},dispatch]=useStateValue();
    const removefrombasket=()=>{
        //remove the item from the basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })

    }
  return (
    <div className='checkoutproduct'>
        <img className='checkoutproduct_image' src={image}/>
         <div className='checkoutproduct_info'>  {/* this contains everything except the image in the left section of the cart */}
            <p className='checkoutproduct_title'>{title}</p>
            <p className='checkoutproduct_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutproduct_rating'>
                {Array(rating)
                .fill()
                .map((_, i)=>(
                        <p>⭐</p>
                ))}
            </div>
            <button onClick={removefrombasket}>Remove from basket</button>

               
         </div>
    </div>
  )
}

export default Checkoutproduct;