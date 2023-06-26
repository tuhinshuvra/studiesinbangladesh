import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "./PassportInfo.css";

const PassportInfo = () => {
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
        <div className="col-lg-8  col-md-10 mx-auto">
            <div className=" d-flex justify-content-end linkbtn">
                <Link to="/basicInfo" className=" btn btn-primary btn-sm">Basic Info</Link>
                <Link to="/academicInfo" className=" btn btn-primary btn-sm ms-2">Apply Now</Link>
            </div>

            <h2 className=" text-primary text-center fw-bold">Enter Passport and reference Information</h2>

            <form onSubmit={handleOnSubmit} className="">

                <div className="my-md-3">
                    <span className=" fs-5 text-primary  label-text text-md fw-bold fst-italic my-3">Passport Information</span>

                    <div className="form-check my-3" onClick={toggleInput}>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label fw-bold fst-italic" for="flexCheckDefault">
                            I have passport
                        </label>
                    </div>

                    <div className="personalInfo">
                        <div className="row   form-outline p-3">

                            <div className="col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">Name as in Passport</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="nameInPassport"
                                        className="input form-control "
                                        id="nameInPassport"
                                        type="text"
                                        placeholder="Enter name as in passport"
                                        disabled={disabled}
                                    />
                                </div>
                            </div>
                            <div className="  col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">Passport Number</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="passportNumber"
                                        className="input form-control "
                                        id="passportNumber"
                                        type="text"
                                        placeholder="Enter passport number"
                                        disabled={disabled}
                                    />
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">Issuing Authority</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="IssuingAuthority"
                                        className="input form-control "
                                        id="IssuingAuthority"
                                        type="text"
                                        placeholder="Enter passport issuing authority"
                                        disabled={disabled}
                                    />
                                </div>
                            </div>

                            <div className=" col-lg-4 col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">Passport Expiry Date</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="passExpiryDate"
                                        className="input form-control "
                                        id="passExpiryDate"
                                        type="date"
                                        disabled={disabled}
                                    />
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">Issuing Country</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="passIssueCountry"
                                        className="input form-control "
                                        id="passIssueCountry"
                                        type="text"
                                        placeholder="Enter passport issuing country"
                                        disabled={disabled}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className=" my-md-4">
                    <span className="fs-5 text-primary  label-text text-md fw-bold fst-italic">References</span>
                    <div className="personalInfo">

                        {/* reference one details */}
                        <div className=" row   form-outline  p-3">
                            <div className="col-lg-6 mb-3">
                                <span className="label-text text-md fw-bold">Name</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="refOneName"
                                        className="input form-control "
                                        id="refOneName"
                                        type="text"
                                        placeholder="Enter refference name"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <span className="label-text text-md fw-bold">Email</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="refOneEmail"
                                        className="input form-control "
                                        id="refOneEmail"
                                        type="text"
                                        placeholder="Enter refference email"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <span className="label-text text-md fw-bold">Contact Number</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="refOneContact"
                                        className="input form-control "
                                        id="refOneContact"
                                        type="text"
                                        placeholder="Enter refference contact no"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <span className="label-text text-md fw-bold">Address</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="refOneAddress"
                                        className="input form-control "
                                        id="refOneAddress"
                                        type="text"
                                        placeholder="Enter refference address"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* reference two details */}

                        <div className=" row   form-outline  p-3">
                            <div className="col-lg-6 mb-3">
                                <span className="label-text text-md fw-bold">Name</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="refTwoName"
                                        className="input form-control "
                                        id="refTwoName"
                                        type="text"
                                        placeholder="Enter refference name"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <span className="label-text text-md fw-bold">Email</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="refTwoEmail"
                                        className="input form-control "
                                        id="refTwoEmail"
                                        type="text"
                                        placeholder="Enter refference email"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <span className="label-text text-md fw-bold">Contact Number</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="refTwoContact"
                                        className="input form-control"
                                        id="refTwoContact"
                                        type="text"
                                        placeholder="Enter refference contact no"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <span className="label-text text-md fw-bold">Address</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="refTwoAddress"
                                        className="input form-control "
                                        id="refTwoAddress"
                                        type="text"
                                        placeholder="Enter refference address"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" d-flex justify-content-between my-lg-3">
                    <button type="reset" className="btn btn-warning fw-bold">Reset</button>
                    <button type="submit" name="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
};

export default PassportInfo;
