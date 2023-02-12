import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "../Styles/Delivery.css"


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";


function Delivery() {

    const [date, setDate] = useState()

    const [orderId, setOrderId] = useState()


    console.log("renders....delivery")




    function CurrentDate() {
        var currentDate = new Date().toLocaleDateString()
        setDate(currentDate)
    }


    function randomOrderNum() {

        const num = Math.random() * 10000000
        setOrderId(~~num)

    }




    const items = useSelector((state) => {

        return state.Cart.addToBasket

    })


    const email = useSelector((state) => {

        return state.Cart.currentUser

    })



    useEffect(() => {

        CurrentDate()

        randomOrderNum()

    }, [])






    return (
        <div className='delivery_container'>


            <div className='delivery_infos '>

                <div className='delivery_info_left'>

                    <h2>Thankyou , your order has been placed.</h2>
                    <p>We've sent you an e-mail to {email}.You will recieve SMS Alerts on your registered Mobile No.</p>

                    <p>

                        <strong>Order Number:{orderId}</strong>
                        <strong></strong>

                    </p>

                    <p>

                        <small>Estimated delivery by:</small>
                        <strong>{date}</strong>

                    </p>


                </div>

                <div className='delivery_info_right'>





                    {

                        items.map((ele) => {

                            return (
                                <div className='delivery_items'  key={ele.id}>
                                    <img src={ele.image} className="delivery_images" />


                                    <p>

                                        <small> <strong>I just bought </strong>The Lean Startup:How Constant innovation Creates Radically Successful Business Paperback</small>

                                    </p>

                                </div>

                            )
                        })


                    }


                    {/* <button className='delivery_share_button'>share this item</button> */}
                </div>

            </div>




            <div className="delivery_related_items">





                <h2>Related to items you've viewed</h2>

                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide> <img src='Images/watch.jpg' />  </SwiperSlide>
                    <SwiperSlide> <img src='Images/watch.jpg' />  </SwiperSlide>
                    <SwiperSlide> <img src='Images/watch.jpg' />  </SwiperSlide>
                    <SwiperSlide> <img src='Images/watch.jpg' />  </SwiperSlide>
                    <SwiperSlide> <img src='Images/watch.jpg' />  </SwiperSlide>
                    <SwiperSlide> <img src='Images/watch.jpg' />  </SwiperSlide>
                    <SwiperSlide> <img src='Images/watch.jpg' />  </SwiperSlide>
                    <SwiperSlide> <img src='Images/watch.jpg' />  </SwiperSlide>
                    <SwiperSlide> <img src='Images/watch.jpg' />  </SwiperSlide>
                    <SwiperSlide> <img src='Images/watch.jpg' />  </SwiperSlide>
                    <SwiperSlide> <img src='Images/watch.jpg' />  </SwiperSlide>
                    <SwiperSlide> <img src='Images/watch.jpg' />  </SwiperSlide>
                    <SwiperSlide> <img src='Images/watch.jpg' />  </SwiperSlide>
                    <SwiperSlide> <img src='Images/watch.jpg' />  </SwiperSlide>
                    <SwiperSlide> <img src='Images/watch.jpg' />  </SwiperSlide>

                </Swiper>


            </div>





        </div>
    )
}

export default Delivery
