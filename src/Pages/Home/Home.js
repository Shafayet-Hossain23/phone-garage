import React from 'react';
import { Toaster } from 'react-hot-toast';
import Banner from './Banner/Banner';
import PhoneCategories from './PhoneCategories/PhoneCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhoneCategories></PhoneCategories>
            <Toaster></Toaster>

        </div>
    );
};

export default Home;