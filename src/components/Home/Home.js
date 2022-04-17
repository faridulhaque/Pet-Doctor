import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import '../CommonStyles/CommonStyles.css';
import FutureShop from '../FutureShop/FutureShop';

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Services></Services>
            <FutureShop></FutureShop>
        </div>
    );
};

export default Home;