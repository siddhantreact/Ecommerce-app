import React, { useEffect } from 'react'
import "../Styles/Home.css"
import Product from './Product'


function Home() {

   
  console.log("renders....home")
  
     
 /////!!!! 



  return (
    <div className=' home_container'>

      <img className='amazon_banner' src='Images/banners/1.jpeg' alt='amazon_banner' />

      <div className='home_row   grid grid_two_column'>

        <Product image={"Images/alexa.jpg"} price={"44"}/>
        <Product image={"Images/product.jpg"} price={"4"}/>

      </div>

      <div className='home_row   grid grid_three_column'>

        <Product image={"Images/watch.jpg"}  price={"1244"}/>
        <Product image={"Images/bottle.png"}  price={"1000"}/>
        <Product image={"Images/lamp.jpg"}  price={"500"}/>

      </div>

      <div className='home_row  grid grid_one_column'>

        <Product image={"Images/monitor.jpg"}  price={"6000"}/>


      </div>



    </div>
  )
}

export default Home
