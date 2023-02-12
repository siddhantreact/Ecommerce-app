import React from 'react'
import "../Styles/Products.css"
import {useDispatch} from "react-redux"
import { addToCart } from '../Redux/Reducer/Reducer'



function Product(props) {


    console.log("renders from product")

    var dispatch = useDispatch()


    return (
        <div className='  product_container'>

            <div className=' product_content'>
                <div className='product_info'>

                    <p>
                    
                    <small> <strong>The Lean Startup:</strong>How Constant innovation Creates Radically Successful Business Paperback</small>
                    
                    </p>

                </div>

                <div className='product_price'>
                   <p>
                    <small>$</small>
                    <strong>{props.price}</strong>
                    </p>
                </div>

                <img className='product_image' src={props.image} alt='product_image'></img>

                <button className='addtocart_button'  onClick={()=>{

                
                    dispatch(
                        
                      
                        
                        addToCart({ id: Math.random()*100,
                        image: props.image,
                        price: props.price})
                        
                        
                        
                        )

                    console.log("clicked")
                }}>Add to Basket</button>

            </div>
        </div>


    )
}

export default Product
