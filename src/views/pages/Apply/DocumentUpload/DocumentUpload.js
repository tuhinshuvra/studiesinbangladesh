import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "./DocumentUpload.css";
import useTitle from "../../../../hooks/useTitle";

const DocumentUpload = () => {
    useTitle("DocumentsUpload")
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const [passportInfo, setPassportInfo] = useState([]);

    const toggleInput = () => {
        setDisabled(!disabled);
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
        <div className="col-xl-8 col-lg-10  col-md-11 mx-auto">

            <h2 className="commonFormHeading fs-3 text-primary text-center fw-bold">Upload Documents of Your Selected Academic Information</h2>


            <form onSubmit={handleOnSubmit} className="">

                <div className="personalInfo ">
                    <div className="row  form-outline p-3">

                        <div className=" d-flex justify-content-between fw-bold">
                            <p className="col-md-8">Document Name</p>
                            <p className="col-md-4">Upload</p>
                        </div>


                        <div className=" d-flex justify-content-between my-2">
                            <span className="label-text text-md fw-bold">Secondary / Class X / O Level / Equivalent Qualification</span>
                            <div>
                                <input
                                    onChange={handleOnChange}
                                    name="secondaryDoc"
                                    className="input form-control "
                                    id="secondaryDoc"
                                    type="file"
                                    placeholder="Enter secondary documents"
                                    required
                                />
                            </div>
                        </div>

                        <div className=" d-flex justify-content-between my-2">
                            <span className="label-text text-md fw-bold">Higher Secondary / Class XII / A Level / Equivalent Qualification</span>
                            <div>
                                <input
                                    onChange={handleOnChange}
                                    name="higherSecondaryDoc"
                                    className="input form-control "
                                    id="higherSecondaryDoc"
                                    type="file"
                                    required
                                />
                            </div>
                        </div>

                        <div className=" d-flex justify-content-between my-2">
                            <div>
                                <span className=" text-danger   fw-bold">Have additional documents to Upload?</span>
                                <p>
                                    <b>Note:</b>  <br />
                                    1. Use an easily understandable name for these documents (ie: Character Certificate.jpg | Testimonial.pdf etc) <br />
                                    2. Upload as many files as you need <br />
                                    3. Total file size shouldn't exceed 5MB
                                </p>
                            </div>
                            <div>
                                <input
                                    onChange={handleOnChange}
                                    name="additionalDoc"
                                    className="input form-control "
                                    id="additionalDoc"
                                    type="file"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-7 col-md-11 mx-auto  d-flex justify-content-between my-3">
                    <button type="reset" className="btn btn-warning fw-bold">Reset</button>

                    <div>
                        <Link to="/choosedTopics" className=" btn btn-info fw-bold">Back</Link>
                        <Link to="/apply" className="btn btn-info fw-bold mx-2">Main Form</Link>
                        <Link to="/finishApplication" className=" btn btn-info fw-bold">Next</Link>
                    </div>

                    <button type="submit" name="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
};

export default DocumentUpload;
