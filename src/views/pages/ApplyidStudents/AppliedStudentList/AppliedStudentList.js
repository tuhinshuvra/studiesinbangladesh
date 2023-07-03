import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const AppliedStudentList = () => {
    const [applicants, setApplicants] = useState([]);

    console.log("ApplicantList jobId :", applicants);


    // useEffect(() => {
    //     fetch(
    //         `${process.env.REACT_APP_CABD_SERVER}/jobapplicant?jobId=${jobId}`
    //     )
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setApplicants(data);
    //             // console.log(" ApplicantList ApplicantList :", data);
    //         });
    // }, [jobId]);

    // const applicantNum = applicants.length;
    // console.log("applicantNum : ", applicantNum);


    return (
        <div>
            {
                // applicantNum === 0
                //     ?
                //     <div className=" text-center">
                //         <h3 className=" fw-bold">Nobody applied yet </h3>
                //     </div>
                //     :
                <>
                    <div className="text-center font-bold my-3">
                        <h5 className="commonFormHeading text-primary ">Applicant List</h5>
                    </div>
                    <div className="overflow-x-auto">
                        {/* <table className="table w-full"> */}
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr className="table-secondary text-center">
                                    <th>SL</th>
                                    <th>Name</th>
                                    <th>Subject</th>
                                    <th>Institute</th>
                                    <th>Country</th>
                                    <th>Applied</th>
                                    <th>Profile</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=" text-center">
                                    <td>1</td>
                                    <td>Debakor Shyannal</td>
                                    <td>Pharmacy</td>
                                    <td>NorthSouth University</td>
                                    <td>India</td>
                                    <td>26/06/2023</td>
                                    <td> <Link to="/appliedStudentDetails" className=" text-decoration-none fw-bold"> Details</Link></td>
                                </tr>
                                <tr className=" text-center">
                                    <td>2</td>
                                    <td>Rashid Latif</td>
                                    <td>EEE</td>
                                    <td>NorthSouth University</td>
                                    <td>Pakistan</td>
                                    <td>26/06/2023</td>
                                    <td> <Link to="/appliedStudentDetails" className=" text-decoration-none fw-bold"> Details</Link></td>
                                </tr>
                                <tr className=" text-center">
                                    <td>3</td>
                                    <td>Ayus Barman</td>
                                    <td>Pharmacy</td>
                                    <td>NorthSouth University</td>
                                    <td>Myanmar</td>
                                    <td>26/06/2023</td>
                                    <td> <Link to="/appliedStudentDetails" className=" text-decoration-none fw-bold"> Details</Link></td>
                                </tr>
                                <tr className=" text-center">
                                    <td>4</td>
                                    <td>Sakil Ahmed</td>
                                    <td>Pharmacy</td>
                                    <td>NorthSouth University</td>
                                    <td>Maldives</td>
                                    <td>26/06/2023</td>
                                    <td> <Link to="/appliedStudentDetails" className=" text-decoration-none fw-bold"> Details</Link></td>
                                </tr>
                                <tr className=" text-center">
                                    <td>5</td>
                                    <td>Barun Thapa</td>
                                    <td>MBBS</td>
                                    <td>NorthSouth University</td>
                                    <td>Nepal</td>
                                    <td>26/06/2023</td>
                                    <td> <Link to="/appliedStudentDetails" className=" text-decoration-none fw-bold"> Details</Link></td>
                                </tr>
                                <tr className=" text-center">
                                    <td>6</td>
                                    <td>Kajol Ranatunga</td>
                                    <td>MBBS</td>
                                    <td>Uttara Medical College</td>
                                    <td>Srilanka</td>
                                    <td>01/07/2023</td>
                                    <td> <Link to="/appliedStudentDetails" className=" text-decoration-none fw-bold"> Details</Link></td>
                                </tr>
                                <tr className=" text-center">
                                    <td>7</td>
                                    <td>Taher Uddin</td>
                                    <td>MBBS</td>
                                    <td>Uttara Medical College</td>
                                    <td>Pakistan</td>
                                    <td>01/07/2023</td>
                                    <td> <Link to="/appliedStudentDetails" className=" text-decoration-none fw-bold"> Details</Link></td>
                                </tr>
                                <tr className=" text-center">
                                    <td>8</td>
                                    <td>Nayan Thakur</td>
                                    <td>MBBS</td>
                                    <td>Uttara Medical College</td>
                                    <td>Nepal</td>
                                    <td>01/07/2023</td>
                                    <td> <Link to="/appliedStudentDetails" className=" text-decoration-none fw-bold"> Details</Link></td>
                                </tr>
                                <tr className=" text-center">
                                    <td>9</td>
                                    <td>Taher Uddina Thakur</td>
                                    <td>MBBS</td>
                                    <td>Uttara Medical College</td>
                                    <td>Nepal</td>
                                    <td>01/07/2023</td>
                                    <td> <Link to="/appliedStudentDetails" className=" text-decoration-none fw-bold"> Details</Link></td>
                                </tr>
                                <tr className=" text-center">
                                    <td>10</td>
                                    <td>Ong Kung Ping</td>
                                    <td>MBBS</td>
                                    <td>Uttara Medical College</td>
                                    <td>Mayamar</td>
                                    <td>01/07/2023</td>
                                    <td> <Link to="/appliedStudentDetails" className=" text-decoration-none fw-bold"> Details</Link></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </>
            }
        </div>
    );
};

export default AppliedStudentList;
