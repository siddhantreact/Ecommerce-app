

import { createSlice } from '@reduxjs/toolkit'




var initialState = {

     addToBasket: [],
     currentUser:null
   
  

}



 var AddtocartReducer = createSlice(
    {
        name: "addToBasket",

        initialState,

        reducers: {




            addToCart(state, action) {
         

             

                state.addToBasket.push(action.payload)

            },

            removeItem(state,action){
               
                
               const index =  state.addToBasket.findIndex((ele)=>{


                    return (ele.image == action.payload)
                })
              

                if(index >= 0)
                {
                    state.addToBasket.splice(index,1)
                }


            },

            addUser(state,action){
      
                 state.currentUser = action.payload
                  

            }


      

         


        }



    }
)

export const { addToCart ,removeItem ,addUser } = AddtocartReducer.actions

export default AddtocartReducer.reducer

