import React from 'react';
import thinkingImg from '../../assets/img/extra-image.jpg'

import './ThinkingSection.css'
const ThinkingSection = () => {


    return (
        <div className="extra-container">
            <div className='d-flex justify-content-center align-items-center container  '>
                <div className='row  mt-5 '>
                    <div className=' col-lg-6 d-flex align-items-center'>
                        <div>
                            <h1>
                                Suzuki GSX125<br />
                            </h1>
                            <p>is one of the best models in Suzuki’s commuter bike series,


                                It is worth mentioning that most of the people who use bikes for general needs in Bangladesh prefer 125cc bikes mostly for regular use.</p>
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex  justify-content-end extrapart-img'>
                        <img className='img-fluid rounded-img' src={thinkingImg} alt="" />
                    </div>
                </div >
            </div>
        </div>

    );
};

export default ThinkingSection;