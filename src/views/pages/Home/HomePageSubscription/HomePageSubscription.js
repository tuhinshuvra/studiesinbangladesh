import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import './HomePageSubscription.css';

const HomePageSubscription = () => {
    const [email, setEmail] = useState("");

    const handleEmailAddress = (event) => {
        event.preventDefault();
        const subsEmail = event.target.value;
        setEmail(subsEmail);
    }
    // console.log("Email Address : ", email);

    const handleSubsription = () => {
        // toast.success("Congratulation! You have subscribes successfully!")
    }

    return (
        <div className="subArea col-xl-12">
            <div className="my-4">
                <div className="col-lg-7 text-center  mx-auto" data-aos="fade-up-right">
                    <h2 className="common_Heading2  mb-3 text-primary">Subscribe & Receive <br />Our Exclusive Offers</h2>
                    {/* <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p> */}
                </div>

                <div className=' col-lg-4 col-md-7 col-10  mx-auto px-xl-4' data-aos="fade-up-left">
                    <form onClick={() => handleSubsription()} className=' d-md-flex justify-content-between '>
                        <input onChange={handleEmailAddress} type="email" className=' form-control' placeholder='Email address' required />
                        <div className=' text-center mt-2 mt-md-0'>
                            <button type='submit' className='applyBtn ms-md-2'>Subscrive</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default HomePageSubscription;