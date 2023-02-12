import React from 'react'
import "../Styles/Payment.css"
import { useSelector } from "react-redux"
import { removeItem } from '../Redux/Reducer/Reducer'
import { useDispatch } from "react-redux"
import FlipMove from 'react-flip-move'
import { useNavigate } from 'react-router-dom'


function Payment() {


   console.log("renders from payment")




    const dispatch = useDispatch()

    const navigate = useNavigate()

    const basket = useSelector((state) => {

        return state.Cart.addToBasket
    })
   


   function emailProcessing()
   {
   
    console.log("email processed for delivery")



   }

   const email = useSelector((state)=>{
     
    return state.Cart.currentUser

  })








    return (
        <div className='payment_section'>

            <div className='payment_section_title'>

                <h2>Checkout({basket.length} items)</h2>

            </div>




            <div className='payment_container'>


                <h4>Delivery Address</h4>

                <div>
                    <p>{email}</p>
                    <p>23rd street</p>
                    <p>Los Angelas ,CA</p>

                </div>





            </div>

            <div className='payment_container'>

                <h4>Review items and delivery</h4>

                <FlipMove >

                    {

                        basket.map((ele, index) => {

                            return (

                                <div className='flex' key={index}>


                                    <img src={ele.image} className="payment_basket_images" alt='basket-images' />

                                    <div className='flex_content'>


                                        <p>

                                            <small> <strong>The Lean Startup:</strong>How Constant innovation Creates Radically Successful Business Paperback</small>

                                        </p>
                                        <p>

                                            <small>$</small><strong>{ele.price}</strong>

                                        </p>

                                        <button className='payment_remove_button' onClick={() => {
                                            dispatch(
                                                removeItem(ele.image)
                                            )
                                        }}>Remove</button>

                                    </div>
                                </div>)

                        })



                    }

                </FlipMove>

            </div>

            <div className='payment_container'>

                {/* <h4>payment Method</h4>
                <h4>card details</h4> */}

                <button className='payment_pay_button' onClick={()=>{
                    
                    navigate("/delivery")

                    emailProcessing()
                    
                    
                    
                    
                    }
                     
                }>Place Order</button>

            </div>

        </div>
    )
}

export default Payment
