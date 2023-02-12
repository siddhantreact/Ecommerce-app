import React, { useEffect, useState } from 'react'
import "../Styles/Checkout.css"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { removeItem } from '../Redux/Reducer/Reducer'
import FlipMove from "react-flip-move"





function Checkout() {


  const dispatch = useDispatch()

  const [amount, setAmount] = useState("")



  var navigate = useNavigate()

  var basketItems = useSelector((state) => {


    return state.Cart.addToBasket
  })


 



console.log("renders....checkout")



  useEffect(() => {

   const amountTotal = basketItems.reduce((acc,ele)=>{

        return acc + Number(ele.price)
   },0)



    setAmount(amountTotal)

  },[basketItems])







  return (


    <div className='checkout_container'>

      <div className='checkout_info_left'>


        <img className='checkout_banner' src='Images/payment.jpeg' />

        <h2>Your Shopping Basket</h2>


        <FlipMove >

          {

            basketItems.map((ele, index) => {

              return (

                <div className='flex' key={index} >


                  <img src={ele.image} className="checkout_basket_images" alt='basket-images' />

                  <div className='flex_content'>


                    <p>

                      <small> <strong>The Lean Startup:</strong>How Constant innovation Creates Radically Successful Business Paperback</small>

                    </p>
                    <p>

                      <small>$</small><strong>{ele.price}</strong>

                    </p>

                    <button className='checkout_remove_button' onClick={() => {

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


      <div className='checkout_info_right'>


        <p>

          <small>Subtotal({basketItems.length}) :</small>
          <strong>$ {amount}</strong>

        </p>



        <button className='checkout_button' onClick={() => { navigate("/payment") }}>Proceed to Checkout</button>


      </div>


    </div>



  )
}

export default Checkout
