import React,{useState,useEffect} from 'react'
import "./payment.css";
import { useStateValue } from './StateProvider';
import Checkoutproduct from './checkoutproduct';
import { getBasketTotal } from './reducer';
import { Link, Navigate } from 'react-router-dom';
// import { useElements, useStripe } from '@stripe/react-stripe-js';
import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';


// import axios from './axios';


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
   
    const Navigate=useNavigate();
    const stripe=useStripe();
    const elements=useElements();



    const[succeeded,setSucceeded]=useState(null);
    const[processing,setProcessing]=useState("");
    const [error, setError]= useState(null);
    const [disabled, setDisabled]= useState(true);
    const [clientSecret,setClientSecret]=useState(true);

    useEffect(()=>{
        //generate the special stripe secret which allows us to charge a customer
        const getClientSecret=async()=>{
         const reponse=await axios ({
            
            method:"POST",
            url:`/payment/create?total=${getBasketTotal(basket) * 100}`
         });
         setClientSecret(reponse.data.clientSecret);
        }

         getClientSecret();
        },[basket])


    const handlesubmit= async event=>{
        event.preventDefault();
        setProcessing(true);
        const {payload} = await stripe.confirmCardPayment(clientSecret,{
            payement_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({payementIntent})=>{
            //payementIntent=payement confirmation
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            Navigate.replace('/orders')
        })
    }

    //         type: 'card',
    //         card: elements.getElement(CardElement),
    //     });
    //     if(error){
    //         setError(error.message);
    //         setProcessing(false);
    //         return;
    //     }
    //     const paymentIntent = await stripe.confirmCardPayment(
    //         succeeded.paymentIntent.id,
    //         {
    //             payment_method: paymentMethod.id,
    //         }
    //     );
    //     if(paymentIntent.error){
    //         setError(paymentIntent.error.message);
    //         setProcessing(false);
    //         return;
    //     }


    // }
    const handlechange=event=>{
        setDisabled(event.empty);
        setError(event.error? event.error.message : '');






    }




  return (
    <div className='payment'>
      <div className='payment_container'>
        <h1>checkout (<Link to='/checkout'>{basket?.length} items</Link>)</h1>
        {/* payment section - delivery address */}
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>delivery address</h3>
            </div>
            <div className='payment_address'>
                <p>{user?.email}</p>
                <p>123 react lane</p>
                <p>los angeles , CA</p>
            </div>
        </div>

        {/* payment section - review items */}
        <div className='payment_section'>
             <div className='payment_title'>
                <h3>Review items and delivery</h3>
            </div>
                <div className='payment_items'>
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
        {/* payment section - payment method */}
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>payment method</h3>
            </div>
            <div className='payment_details'>
                {/* stripe */}
                <form onSubmit={handlesubmit}>
                    <CardElement onChange={handlechange}/>
                    <div className='payment_pricecontainer'>
                        <h3>Order Total: ${getBasketTotal(basket)}</h3>
                        <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>processing</p>:"Buy Now"}</span>
                        </button>
                    </div>
                    {/* errors */}
                    {error && <div className='error'>{error}</div>}
                    {succeeded && <div className='success'>{succeeded}</div>}
                </form>

            </div>
        </div>
        </div>

    </div>


  )
}

export default Payment