import React from 'react';
import TestimonialImage from '../../../../assets/testimonialImage.png';
import './HomePageTestimonialSection.css';

const HomePageTestimonialSection = () => {
    return (
        <div className='testimonialArea d-md-flex'>
            <div className='col-md-5 tesimonialImage'>
                <img className='  img-fluid' src={TestimonialImage} alt="" />
            </div>
            <div className='col-md-7 tesimonialTextArea'>
                <div className="testimonialCardOne p-lg-4 p-2 mx-auto">
                    <h3 className='testiCardTitle text-center my-4'>Testimonials</h3>
                    <p className='testiCardSubTitle p-xl-5 p-md-1 text-md-start text-center'>Please check the testimonials from our satisfied clients to confirm.</p>
                </div>

                <div className="testimonialCardTwo p-xl-5 p-md-2 mx-auto">
                    <p className='testiCardSubTitle p-md-1  p-3'>I am absolutely thrilled with the service i’ve received from the Excellence team.
                        they are truly per excellence, you should without a doubt apply to their program and achieve your dream.  </p>
                </div>

            </div>
        </div>
    );
};

export default HomePageTestimonialSection;