import React from 'react';
import HomePageHeroSection from './HomePageHeroSection/HomePageHeroSection';
import HomePageFeaturedUniversities from './HomePageFeaturedUniversities/HomePageFeaturedUniversities';
import HomePageServicesSection from './HomePageServicesSection/HomePageServicesSection';
import HomePageUpcommingEventsSection from './HomePageUpcommingEventsSection/HomePageUpcommingEventsSection';
import HomePageCountriesSection from './HomePageCountriesSection/HomePageCountriesSection';
import HomePageTestimonialSection from './HomePageTestimonialSection/HomePageTestimonialSection';
import HomePageSubscription from './HomePageSubscription/HomePageSubscription';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='vectorBg'>
                <HomePageHeroSection></HomePageHeroSection>
                <HomePageFeaturedUniversities></HomePageFeaturedUniversities>
                <HomePageServicesSection></HomePageServicesSection>
            </div>
            <HomePageUpcommingEventsSection></HomePageUpcommingEventsSection>
            <HomePageCountriesSection></HomePageCountriesSection>
            <HomePageTestimonialSection></HomePageTestimonialSection>
            <HomePageSubscription></HomePageSubscription>
        </div>
    );
};

export default Home;    