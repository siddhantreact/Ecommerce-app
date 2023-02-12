
import { configureStore } from "@reduxjs/toolkit";

import cart from "../Reducer/Reducer"

var Store = configureStore({

reducer:{

 
  Cart :  cart



}
   



})



export default Store 