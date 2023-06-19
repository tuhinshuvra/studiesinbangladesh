import React from 'react';
import './HomePageCountriesSection.css';
import CountriesGridCarousol from './CountriesGridCarousol';

const HomePageCountriesSection = () => {
    return (
        <div className='countryArea'>
            <h2 className=' text-center featured_Head  '>Countries</h2>

            <CountriesGridCarousol></CountriesGridCarousol>
        </div>
    );
};

export default HomePageCountriesSection;