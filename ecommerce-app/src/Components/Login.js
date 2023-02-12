import React, { useEffect, useState ,use } from 'react'
import { useNavigate  } from 'react-router-dom'

import { auth } from '../firebase/Firebase'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

import "../Styles/Login.css"



function Login() {

    var navigate = useNavigate()
    
    console.log("renders....login")
    
    

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    function registerUser(e) {
           
       e.preventDefault()


       createUserWithEmailAndPassword(auth,email,password).then((response)=>{
           
         console.log(response)
         navigate("/")
      

      

       }).catch((error)=>{

        console.log(error)
       })

    }


    function login(e) {


         e.preventDefault()

    

        signInWithEmailAndPassword(auth,email,password).then((response)=>{

            console.log(response)
            navigate("/")
       
         
             
            
        
        }).catch((error)=>{
            
            console.log(error)
        })

    }











    return (
        <div className='login_section'>

            <img className='login_logo' src='Images/logo.jpg' alt='login_logo' onClick={() => { navigate("/") }} />


            <div className='login_container'>



                <h2>Sign-in</h2>

                <form className='login_form'>

                    <h5>E-mail</h5>
                    <input onChange={(e) => { setEmail(e.target.value) }} type={"email"} />

                    <h5>Password</h5>
                    <input type={"password"} onChange={(e) => { setPassword(e.target.value) }} />
                    <br />
                    <button className='login_button' onClick={login}>Sign in</button>

                    <p>By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
                        Notice.
                    </p>

                    <button className='login_register_button' onClick={registerUser}>Create your Amazon Account </button>


                </form>
            </div>
        </div>
    )
}

export default Login
