import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Form, Link, useNavigate } from "react-router-dom";
import "./FinishApplication.css";
import useTitle from "../../../../hooks/useTitle";

const FinishApplication = () => {
    useTitle("FinishAppliation")
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const [passportInfo, setPassportInfo] = useState([]);
    const [accepted, setAccepted] = useState(false);

    const toggleInput = () => {
        setDisabled(!disabled);
    };


    const handleTermsAndConditions = (event) => {
        setAccepted(event.target.checked);
    };

    const handleOnChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...passportInfo };
        newData[field] = value;
        setPassportInfo(newData)
    }

    const handleOnSubmit = (event) => {

    }

    console.log("basicInfo :", passportInfo);


    return (
        <div className="col-xl-6 col-lg-8  col-md-10 mx-auto">

            <h2 className="commonFormHeading fs-3 text-primary text-center fw-bold">Finish Application</h2>


            <form onSubmit={handleOnSubmit} className="">

                <div className="personalInfo ">
                    <div className="row  form-outline p-3">


                        <div className=" d-flex fw-bold">
                            <p>By submitting this application I agree to the</p>
                            <div className="form-check ms-2" onClick={handleTermsAndConditions}>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    <Link to="/termsAndConditions" className=" text-decoration-none text-primary fst-italic">Terms and Conditions</Link>
                                </label>
                            </div>
                        </div>


                        <div className=" d-flex justify-content-between my-2">
                            <span className="label-text text-md fw-bold">Profile Photo</span>
                            <div>
                                <input
                                    onChange={handleOnChange}
                                    name="profilePhoto"
                                    className="input form-control "
                                    id="profilePhoto"
                                    type="file"
                                    required
                                />
                            </div>
                        </div>

                        <div className=" d-flex justify-content-between my-2">
                            <span className="label-text text-md fw-bold">Signature</span>
                            <div>
                                <input
                                    onChange={handleOnChange}
                                    name="signature"
                                    className="input form-control "
                                    id="signature"
                                    type="file"
                                    required
                                />
                            </div>
                        </div>

                        <h6 className=" text-danger  fst-italic my-4">Note: Once you finish submitting this application you won't be able to edit anything. Check twice before finishing the application.</h6>


                    </div>
                </div>


                <div className=" d-flex justify-content-between my-3">
                    <button type="reset" className="btn btn-warning fw-bold">Reset</button>

                    <div>
                        <Link to="/uploadDocument" className=" btn btn-info fw-bold">Back</Link>
                        <Link to="/apply" className="btn btn-info fw-bold mx-2">Main Form</Link>
                        <Link to="/next" className=" btn btn-info fw-bold">Next</Link>
                    </div>

                    <button type="submit" name="submit" className="btn btn-primary" disabled={!accepted}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default FinishApplication;
