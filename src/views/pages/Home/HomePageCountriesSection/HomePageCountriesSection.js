import React from 'react';
import CountriesGridCarousol from './CountriesGridCarousol';
import './HomePageCountriesSection.css';

const HomePageCountriesSection = () => {
    return (
        <div className='countryArea'>
            <h2 className=' text-center featured_Head  '>Countries</h2>

            <CountriesGridCarousol></CountriesGridCarousol>
        </div>
    );
};

export default HomePageCountriesSection;