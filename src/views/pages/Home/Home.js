import React from 'react';
import HomePageHeroSection from './HomePageHeroSection/HomePageHeroSection';
import HomePageFeaturedUniversities from './HomePageFeaturedUniversities/HomePageFeaturedUniversities';
import HomePageServicesSection from './HomePageServicesSection/HomePageServicesSection';
import HomePageUpcommingEventsSection from './HomePageUpcommingEventsSection/HomePageUpcommingEventsSection';
import HomePageCountriesSection from './HomePageCountriesSection/HomePageCountriesSection';
import HomePageTestimonialSection from './HomePageTestimonialSection/HomePageTestimonialSection';
import HomePageApplyNowSection from './HomePageApplyNowSection/HomePageApplyNowSection';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='vectorBg'>
                <HomePageHeroSection></HomePageHeroSection>
                <HomePageFeaturedUniversities></HomePageFeaturedUniversities>
                <HomePageServicesSection></HomePageServicesSection>
            </div>
            {/* <HomePageUpcommingEventsSection></HomePageUpcommingEventsSection>
            <HomePageCountriesSection></HomePageCountriesSection>
            <HomePageTestimonialSection></HomePageTestimonialSection>
            <HomePageApplyNowSection></HomePageApplyNowSection> */}
        </div>
    );
};

export default Home;    