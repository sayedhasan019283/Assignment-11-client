import React from 'react';
import "./Fotter.css"

const Footer = () => {
    const date = new Date
    return (
        <div className='footer  p-2 footer-styling footer-container'>
            <div className=''>
                <p className='text-center footer-item mt-4'>© Motorcycle Valley  {date.getFullYear()}</p>
            </div>
        </div>
    );
};

export default Footer; 