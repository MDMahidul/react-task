import React from 'react';
import Banner from '../Banner/Banner/Banner';
import SportsProgrammes from '../SportsProgrammes/SportsProgrammes';
import Facilities from '../Facilities/Facilities';
import Instructors from '../Instructors/Instructors';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <SportsProgrammes/>
            <Facilities/>
            <Instructors/>
            <AboutUs/>
        </div>
    );
};

export default Home;