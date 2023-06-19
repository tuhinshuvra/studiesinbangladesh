import React from 'react';
import TestimonialImage from '../../../../assets/testimonialImage.png';
import './HomePageTestimonialSection.css';

const HomePageTestimonialSection = () => {
    return (
        <div className='testimonialArea d-md-flex'>
            <div className='col-md-5 tesimonialImage'>
                <img className='testimonialImage' src={TestimonialImage} alt="" />
            </div>
            <div className='col-md-7 tesimonialTextArea'>
                <div class="testimonialCardOne p-5 mx-auto">
                    <h3 className='testiCardTitle text-center'>Testimonials</h3>
                    <p className='testiCardSubTitle text-center'>Please check the testimonials from our satisfied clients to confirm.</p>
                </div>

                <div class="testimonialCardTwo p-5 mx-auto">
                    <p className='testiCardSubTitle'>I am absolutely thrilled with the service i’ve received from the Excellence team.
                        they are truly per excellence, you should without a doubt apply to their program and achieve your dream.  </p>
                </div>

            </div>
        </div>
    );
};

export default HomePageTestimonialSection;