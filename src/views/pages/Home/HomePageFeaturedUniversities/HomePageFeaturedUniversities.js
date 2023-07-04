import React, { useReducer } from 'react';
import { Rerousel } from 'rerousel';
import CollegeOne from '../../../../assets/mediclaCollegeLogo/bangladeshMedicalCollege.png'
import CollegeTwo from '../../../../assets/mediclaCollegeLogo/enamMedicalCollege.png'
import CollegeThree from '../../../../assets/mediclaCollegeLogo/greenLifeCollege.png'
import CollegeFour from '../../../../assets/mediclaCollegeLogo/magOsmaniMedicalCollege.jpg'
import CollegeFive from '../../../../assets/mediclaCollegeLogo/rajshahiMedicalCollege.png'
import CollegeSix from '../../../../assets/mediclaCollegeLogo/popularMedicalCollege.png'
import CollegeSeven from '../../../../assets/mediclaCollegeLogo/shahidSuhrawardyMedicalCollege.png'
import CollegeEight from '../../../../assets/mediclaCollegeLogo/redcrecentMedicalCollege.jpg'
import CollegeNine from '../../../../assets/mediclaCollegeLogo/usBanglaMedicalCollege.png'
import './HomePageFeaturedUniversities.css';

const HomePageFeaturedUniversities = () => {
    const ref = useReducer(null);
    return (
        <div className='featuredUniversity'>
            <h2 className='common_Heading text-primary  text-center mb-md-5' data-aos="fade-up">Featured Universities</h2>
            <Rerousel itemRef={ref} interval={5000}>
                <img src={CollegeOne} className='rerousel' alt="" ref={ref} />
                <img src={CollegeTwo} className='rerousel' alt="" />
                <img src={CollegeThree} className='rerousel' alt="" />
                <img src={CollegeFour} className='rerousel' alt="" />
                <img src={CollegeFive} className='rerousel' alt="" />
                <img src={CollegeSix} className='rerousel' alt="" />
                <img src={CollegeSeven} className='rerousel' alt="" />
                <img src={CollegeEight} className='rerousel' alt="" />
                <img src={CollegeNine} className='rerousel' alt="" />
            </Rerousel>
        </div>
    );
};

export default HomePageFeaturedUniversities;