import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <div style={{ marginTop: '10px' }} className="home-page-container">

            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <Destinations></Destinations>
        </div>
    );
};

export default Home;