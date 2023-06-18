import React from 'react';
import HomePageHeroSection from './HomePageHeroSection/HomePageHeroSection';
import HomePageFeaturedUniversities from './HomePageFeaturedUniversities/HomePageFeaturedUniversities';
import HomePageServicesSection from './HomePageServicesSection/HomePageServicesSection';
import HomePageUpcommingEventsSection from './HomePageUpcommingEventsSection/HomePageUpcommingEventsSection';
import HomePageCountriesSection from './HomePageCountriesSection/HomePageCountriesSection';
import HomePageTestimonialSection from './HomePageTestimonialSection/HomePageTestimonialSection';
import HomePageApplyNowSection from './HomePageApplyNowSection/HomePageApplyNowSection';

const Home = () => {
    return (
        <div>
            <HomePageHeroSection></HomePageHeroSection>
            <HomePageFeaturedUniversities></HomePageFeaturedUniversities>
            <HomePageServicesSection></HomePageServicesSection>
            <HomePageUpcommingEventsSection></HomePageUpcommingEventsSection>
            <HomePageCountriesSection></HomePageCountriesSection>
            <HomePageTestimonialSection></HomePageTestimonialSection>
            <HomePageApplyNowSection></HomePageApplyNowSection>
        </div>
    );
};

export default Home;