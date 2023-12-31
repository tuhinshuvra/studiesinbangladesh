import React from 'react';
import './HomePageFeaturedUniversities.css';
import GridCarousol from '../../../components/GridCarousol/GridCarousol';

const HomePageFeaturedUniversities = () => {
    return (
        <div className='featuredUniversity'>
            <h2 className='common_Heading text-primary  text-center mb-md-5' data-aos="fade-up">Featured Universities</h2>
            <GridCarousol></GridCarousol>
        </div>
    );
};

export default HomePageFeaturedUniversities;