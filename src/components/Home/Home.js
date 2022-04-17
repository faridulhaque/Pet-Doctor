import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import '../CommonStyles/CommonStyles.css';

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;