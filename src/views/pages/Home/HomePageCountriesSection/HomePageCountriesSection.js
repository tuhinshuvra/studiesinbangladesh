import React from 'react';
import CountriesGridCarousol from './CountriesGridCarousol';
import './HomePageCountriesSection.css';

const HomePageCountriesSection = () => {
    return (
        <div className='countryArea'>
            <h2 className='common_Heading text-center  text-primary mb-md-5' data-aos="fade-up">Countries</h2>

            <CountriesGridCarousol></CountriesGridCarousol>
        </div>
    );
};

export default HomePageCountriesSection;