import React from 'react';
import './HomePageFeaturedUniversities.css';
import GridCarousol from '../../../components/GridCarousol/GridCarousol';

const HomePageFeaturedUniversities = () => {
    return (
        <div className='featuredUniversity'>
            <h2 className=' text-center featured_Head mb-md-5'>Featured Universities</h2>
            <GridCarousol></GridCarousol>
        </div>
    );
};

export default HomePageFeaturedUniversities;