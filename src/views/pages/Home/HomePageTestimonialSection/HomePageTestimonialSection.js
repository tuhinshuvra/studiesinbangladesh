import React from 'react';
import TestimonialImage from '../../../../assets/testimonialImage.png';
import './HomePageTestimonialSection.css';

const HomePageTestimonialSection = () => {
    return (
        <div className='bar1'>
            <h2 className='common_Heading text-center text-primary'>Testimonials</h2>
            <div className='col-lg-9 mx-auto my-5 '>
                <p className='servicesSub text-center'>Please check the testimonials from our satisfied clients to confirm.</p>
            </div>
            <div className='testimonialArea d-md-flex bar2'>
                <div className='col-lg-5 col-md-6 tesimonialImage'>
                    <img className='  img-fluid' src={TestimonialImage} alt="" />
                </div>
                <div className='col-lg-7 col-md-6 tesimonialTextArea'>
                    <div className="testimonialCardTwo p-xl-5 p-md-2 mx-auto">
                        <p className='testiCardSubTitle p-md-1  p-3'>I am absolutely thrilled with the service i’ve received from the Excellence team.
                            they are truly per excellence, you should without a doubt apply to their program and achieve your dream.  </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomePageTestimonialSection;