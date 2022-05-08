import React, { useState } from 'react';
import bannerImg from "../../assets/img/start.jpg";
import bannerImg2 from "../../assets/img/banner-image-22-removebg-preview.png";
import './Banner.css';

import 'swiper/css';


const Banner = () => {
    const [slide, setSlide] = useState(false)

    return (
        <div className='bg-color'>
            <div className='d-flex justify-content-center align-items-center container'>


                <div className='d-flex justify-content-center row align-items-center container'>
                    <div className='col-lg-6'>
                        <small>MOTORBIKE</small>

                        <div>
                            <div>
                                <div>
                                    <h1>HUNT YOUR BIKE</h1>
                                    <p>Safe Trading E Bike on Leading B2B Platform. Quality E Bike with Competitive Price</p>
                                </div>
                            </div>

                        </div>



                    </div>
                    <div className='d-flex justify-content-end col-lg-6 '>
                        <div>


                            <div ><img className=' banner-img' src={bannerImg} alt="" /></div>

                        </div>

                    </div>
                </div>




            </div>
        </div >
    );
};

export default Banner;