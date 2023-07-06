import React from 'react';
import Student2 from '../../../../assets/students/student_(1).jpg'
import { Link } from 'react-router-dom';
import './AppliedStudentDetails.css';

const AppliedStudentDetails = () => {
    return (

        <div className="studentDetails col-lg-8 col-md-10 mx-auto px-lg-4 px-md-2 ">
            <h2 className=" common_Heading2 mt-5 mb-4 text-center">Applied Student's Information</h2>

            <div className=' d-flex justify-content-between'>
                <div className="d-lg-flex ">
                    <div>
                        <p className=""> <b> Name:</b> Rahul Sharma</p>
                        <p className=""> <b> Father's Name:</b> Rajesh Sharma</p>
                        <p className=""> <b> Mother's Name:</b> Depali Sharma</p>
                        <p className=""> <b> Name: </b> Rahul Sharma</p>
                        <p className=""> <b> State: </b>Bihar</p>
                        <p className=""> <b> Country: </b> India</p>
                    </div>

                    <div className=' ms-lg-5 '>
                        <p className=""> <b>Applied Subject: </b>Pharmacy</p>
                        <p className=""> <b>Applied Universities: </b></p>
                        <ol>
                            <li> North South University</li>
                            <li> East West University</li>
                            <li> Jahangir University</li>
                            <li> Rajshahi University</li>
                        </ol>

                    </div>
                </div>

                <div className=" ms-md-3">
                    <img src={Student2} alt="Candidate_Image" className="studentImage   border-2 rounded-3 " />
                </div>
            </div>


            <div className=" d-md-flex justify-content-between">
                <div className=' my-1 my-md-0'> <b>HSC Certificate: </b> <Link className=' text-decoration-none fst-italic' href="path/to/hsc_certificate.pdf">View HSC Certificate</Link></div>
                <div className=' my-1 my-md-0'> <b>SSC Certificate: </b> <Link className=' text-decoration-none fst-italic' href="path/to/ssc_certificate.pdf">View SSC Certificate</Link></div>
                <div className=' my-1 my-md-0'> <b>Testimonial: </b> <Link className=' text-decoration-none fst-italic' href="path/to/testimonial.pdf">View Testimonial</Link></div>
            </div>


            <div className=' d-md-flex justify-content-between my-md-2  '>
                <p className=""><b>Passport: </b> AB123456</p>
                <p className=""><b>Email: </b> abcdefgh@gmail.com</p>
                <p className=""><b>Phone: </b> 091423432434</p>
            </div>


            <div className=" ">
                <p className=""> <b>Other Information: </b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis in voluptas voluptate. Dolores quam neque et at id! Doloribus possimus numquam earum accusantium magnam at enim unde quo facere odio?   </p>
            </div>

        </div>




    );
};

export default AppliedStudentDetails;