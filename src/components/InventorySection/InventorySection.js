import React from 'react';
import inventoryImg from '../../assets/img/extrapart2.jpg'
import './InventorySection.css';
const InventorySection = () => {
    return (

     <div className="Inventory-Planning">
            <div className='d-flex justify-content-center'>
            <div className='row align-items-center justify-content-center mt-5 container'>
                <div className='col-lg-6'>
                    < h1 >Hunter Bikes</ h1>
                    <p>Do you think you need to buy a motorcycle now, or change the old model? Take a look at almost all the brands of bikes available in Bangladesh, analyze them, and make the right decision as to which bike is right for you.</p>
                </div >
                <div className='col-lg-6 extra-img'>
                    <img className='' src={inventoryImg} alt="" />
                </div>
            </div >
        </div>
     </div>

    );
};

export default InventorySection;