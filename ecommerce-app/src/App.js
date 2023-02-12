

import Header from './Components/Header';


import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Components/Home';

import "../src/App.css"
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import Payment from './Components/Payment';
import Delivery from './Components/Delivery';
import ProtectedRoute from './Components/ProtectedRoute';
import { useDispatch } from 'react-redux';



//we can also pass multiple elements using route and show what ever we want to render


function App() {





 




  return (

    <div className='App'>

      <Router>

      

        <Routes>

        
        <Route exact path='/' element={[<Header/>,<Home/>] } />
        

       
        <Route exact path='/login' element={<Login/>} />




{/* ================================> protected route */}

         {/* <Route  element={<ProtectedRoute/>}> */}

         <Route exact path='/checkout' element={[<Header/>,<Checkout/>] } />

         <Route exact path='/payment' element={[<Header/>,<Payment/>]} />

         <Route exact path='/delivery' element={[<Header/>,<Delivery/>]} />
        
         {/* </Route> */}


        

        </Routes>

      </Router>

    </div>

  );
}

export default App;
