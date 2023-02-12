
import {  Navigate, Outlet } from 'react-router-dom'
import {useSelector} from "react-redux"

function ProtectedRoute() {




    var  CurrentUser = useSelector((state)=>{
        
      return state.Cart.currentUser

     })

     



  return (
    <div>
 
 { !CurrentUser ?  <Navigate to={"/login"}/> : <Outlet/>}

    </div>
  )
}

export default ProtectedRoute
