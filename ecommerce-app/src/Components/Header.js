import React, { useEffect, useRef, useState } from 'react'
import "../Styles/Header.css"
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

import { Cancel, Menu } from "@mui/icons-material"

import { IconButton } from "@mui/material"
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';

import { useDispatch, useSelector } from "react-redux"
import { auth } from '../firebase/Firebase';

import { addUser } from '../Redux/Reducer/Reducer';

function Header() {

    var navigate = useNavigate()

    var dispatch = useDispatch()

     
    const input = useRef()



    const [user, setUser] = useState()


    var count = useSelector((state) => {


        return state.Cart.addToBasket
    })


    console.log("renders....headers")

    useEffect(() => {

        auth.onAuthStateChanged((user) => {


            setUser(user?.email)

            dispatch(addUser(user?.email))

        })



    }, [])






    function logout() {

        auth.signOut().then((response) => {


            setUser("")

            dispatch(addUser(null))


        }).catch((error) => {

            alert(error)
        })
    }


    return (
        <div className='header '  ref={input}>



            <img className='header_logo' src='Images/logo.jpg' alt='amazon' onClick={() => { navigate("/") }} />


            <input type={"text"} className="header_search" />


            <div className='search'>
                <IconButton><SearchIcon className='search_icon' /></IconButton>
            </div>






            <div className='header_options_container'>

                <div className='header_option1' onClick={() => { navigate("/login") }}>




                    {!user ? <><span className='option_line1'>hello,guest</span>
                        <span className='option_line2' >Sign in</span></> : <><span className='option_line1'>hello,{user}</span><span className='option_line2' onClick={logout}>Logout</span></>}

                </div>

                <div className='header_option2'>

                    <span className='option_line1'>pictures</span>
                    <span className='option_line2'>& Orders</span>
                </div>

                <div className='header_option3'>

                    <span className='option_line1'>your</span>
                    <span className='option_line2'>Prime</span>
                </div>


                <div className='header_option4'>
                    <IconButton onClick={() => { navigate("/checkout") }}><ShoppingBasketSharpIcon className='shopping_icon_logo' /></IconButton>
                    <span>{count.length}</span>
                </div>




            </div>


            <div className='menu_logo'>
                <Menu className='menu_icon' onClick={() => {

                  
                   

                    input.current.classList.add("active")

                  

                }} />


                <Cancel className='cancel_logo' onClick={() => {

                
                    input.current.classList.remove("active")
                   

                }} />


            </div>





        </div>
    )
}

export default Header
