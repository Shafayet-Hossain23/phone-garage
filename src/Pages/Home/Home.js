import React from 'react';
import AdvertiseProducts from './AdvertiseProducts/AdvertiseProducts';

import Banner from './Banner/Banner';
import Feedback from './Feedback/Feedback';
import PhoneCategories from './PhoneCategories/PhoneCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhoneCategories></PhoneCategories>
            <AdvertiseProducts></AdvertiseProducts>
            <Feedback></Feedback>


        </div>
    );
};

export default Home;