import React, { useState } from 'react';
import './HomePageSubscription.css';
import { toast } from 'react-hot-toast';

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
            <div className=" d-flex flex-column justify-content-center align-items-center  g-lg-5 my-4">
                <div className="col-lg-7 text-center  mx-auto  ">
                    <h2 className="common_Heading2  mb-3 text-primary" data-aos=" fade-up-right">Subscribe & Receive <br />Our Exclusive Offers</h2>
                    {/* <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p> */}
                </div>

                <div className=' col-lg-4 mx-auto px-xl-4' data-aos="fade-up-left">
                    <form onClick={() => handleSubsription()} className=' d-flex justify-content-between '>
                        <input onChange={handleEmailAddress} type="email" className=' form-control' placeholder='Email address' required />
                        <button type='submit' className='applyBtn ms-2'>Subscrive</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default HomePageSubscription;