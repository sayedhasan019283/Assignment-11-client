import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import InventorySection from '../InventorySection/InventorySection';
import ThinkingSection from '../ThinkingSection/ThinkingSection';
import './Home.css';

const Home = () => {
    return (

        <div><Banner></Banner>
            <div className='row align-items-cenetr text-center border-bottom  py-5  items' >
                <div className="col-lg-2 border  ">
                    <h4 className="p-5">Runner</h4>
                </div>
                <div className="col-lg-2 border ">
                    <h4 className="p-5">Keeway</h4>
                </div>
                <div className="col-lg-2 border ">
                    <h4 className='p-5'>Ktm</h4></div>
                <div className="col-lg-2 border "><h4 className="p-5">Kawasaki</h4></div>
                <div className="col-lg-2 border "><h4 className="p-5">Aprilia</h4></div>
                <div className="col-lg-2 border "><h4 className="p-5">Bajaj</h4></div>
            </div>
            <ThinkingSection></ThinkingSection>
            <Inventory></Inventory>
            <InventorySection></InventorySection>
        </div>
    );
};

export default Home;