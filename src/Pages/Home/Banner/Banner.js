import React from 'react';
import banner from '../../../Assets/Banner/banner.png'

const Banner = () => {
    return (
        <div className='mb-14'>
            <div className="hero h-[500px] " style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"> PHONE GARAGE</h1>
                        <p className="mb-5">PHONE GARAGE is type of website that is  related to selling used second-hand mobile phones with the ability to advertise a product. Here a visitor can both buy and sell their used mobile phones.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;