import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "./BasicInfo.css";

const BasicInfoForm = () => {
    const navigate = useNavigate();
    const [basicInfo, setBasicInfo] = useState([]);



    const handlePermanentAddress = () => {
        // console.log("I am clicked");
        let preAddressLineOne = document.getElementById("preAddressLineOne");
        let preAddressLineTwo = document.getElementById("preAddressLineTwo");
        let preCity = document.getElementById("preCity");
        let preState = document.getElementById("preState");
        let preZip = document.getElementById("preZip");
        let preCountry = document.getElementById("preCountry");

        let perAddressLineOne = document.getElementById("perAddressLineOne");
        let perAddressLineTwo = document.getElementById("perAddressLineTwo");
        let perCity = document.getElementById("perCity");
        let perState = document.getElementById("perState");
        let perZip = document.getElementById("perZip");
        let perCountry = document.getElementById("perCountry");



        perAddressLineOne.value = preAddressLineOne.value;
        perAddressLineTwo.value = preAddressLineTwo.value;
        perCity.value = preCity.value;
        perState.value = preState.value;
        perZip.value = preZip.value;
        perCountry.value = preCountry.value;

    };

    const handleOnChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...basicInfo };
        newData[field] = value;
        setBasicInfo(newData)
    }


    const handleOnSubmit = (event) => {
    }


    console.log("basicInfo :", basicInfo);


    return (
        <div className="col-lg-8  col-md-10 mx-auto">
            <div className=" d-flex justify-content-end mt-5">
                <Link to="/passportInfo" className=" btn btn-primary btn-sm">Passport Info</Link>
                <Link to="/applyNow" className=" btn btn-primary btn-sm ms-2">Academic Info</Link>
            </div>
            <h2 className=" text-primary text-center fw-bold">Enter Basic Information</h2>
            <form onSubmit={handleOnSubmit} className="">
                <div className="my-md-3">
                    <span className=" fs-5 text-primary  label-text text-md fw-bold fst-italic">Personal Information</span>
                    <div className="personalInfo">
                        <div className="row   form-outline p-3">

                            <div className=" col-lg-4 col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">First Name</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="firstName"
                                        className="input form-control "
                                        id="firstName"
                                        type="text"
                                        placeholder="Enter first name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">Middle Name(optional)</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="middleName"
                                        className="input form-control "
                                        id="middleName"
                                        type="text"
                                        placeholder="Enter middle name"
                                    />
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">Last Name</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="lastName"
                                        className="input form-control "
                                        id="lastName"
                                        type="text"
                                        placeholder="Enter last name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className=" col-lg-4 col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">Date of birth</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="dateOfBirth"
                                        className="input form-control "
                                        id="dateOfBirth"
                                        type="date"
                                        required
                                    />
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-6 mb-3">

                                <span className="label-text text-md fw-bold  ">
                                    Gender<span className="star"> </span>
                                </span>
                                <select
                                    onChange={handleOnChange}
                                    name="gender"
                                    className="form-select"
                                    required
                                >
                                    <option>-Plese Select-</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>

                            </div>
                            <div className=" col-lg-4 col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">Phone</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="phoneMobile"
                                        className="input form-control "
                                        id="phoneMobile"
                                        type="text"
                                        placeholder="Enter phone/mobile"
                                        required
                                    />
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">Email</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="email"
                                        className="input form-control "
                                        id="email"
                                        type="email"
                                        placeholder="Enter email"
                                    // disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className=" my-md-4">
                    <span className="fs-5 text-primary  label-text text-md fw-bold fst-italic">Present Address</span>
                    <div className="personalInfo">
                        <div className=" row   form-outline  p-3">
                            <div className="col-lg-6 mb-3">
                                <span className="label-text text-md fw-bold">Address Line 1</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="preAddressLineOne"
                                        className="input form-control "
                                        id="preAddressLineOne"
                                        type="text"
                                        placeholder="Enter address Line 1"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <span className="label-text text-md fw-bold">Address Line 2(optional)</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="preAddressLineTwo"
                                        className="input form-control "
                                        id="preAddressLineTwo"
                                        type="text"
                                        placeholder="Enter address Line 2"
                                    />
                                </div>
                            </div>
                            <div className=" col-lg-3 col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">City</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="preCity"
                                        className="input form-control "
                                        id="preCity"
                                        type="text"
                                        placeholder="Enter city"
                                        required
                                    />
                                </div>
                            </div>
                            <div className=" col-lg-3 col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">State(optional)</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="preState"
                                        className="input form-control "
                                        id="preState"
                                        type="text"
                                        placeholder="Enter state"
                                    />
                                </div>
                            </div>

                            <div className=" col-lg-3 col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">Zip(optional)</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="preZip"
                                        className="input form-control "
                                        id="preZip"
                                        type="text"
                                        placeholder="Enter Zip"
                                    />
                                </div>
                            </div>
                            <div className=" col-lg-3 col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">Country</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="preCountry"
                                        className="input form-control "
                                        id="preCountry"
                                        type="text"
                                        placeholder="Enter Country"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className=" my-md-4">

                    <div className=" d-md-flex justify-content-between">
                        <span className=" fs-5 text-primary  label-text text-md fw-bold fst-italic ">Permanent Address</span>
                        <div className="form-check " onClick={handlePermanentAddress}>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label fw-bold fst-italic" for="flexCheckDefault">
                                Same as present address
                            </label>
                        </div>
                    </div>

                    <div className="personalInfo">
                        <div className=" row   form-outline p-3 ">
                            <div className="col-lg-6 mb-3">
                                <span className="label-text text-md fw-bold">Address Line 1</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="perAddressLineOne"
                                        className="input form-control "
                                        id="perAddressLineOne"
                                        type="text"
                                        placeholder="Enter address Line 1"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <span className="label-text text-md fw-bold">Address Line 2(optional)</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="perAddressLineTwo"
                                        className="input form-control "
                                        id="perAddressLineTwo"
                                        type="text"
                                        placeholder="Enter address Line 2"
                                    />
                                </div>
                            </div>
                            <div className=" col-lg-3 col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">City</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="perCity"
                                        className="input form-control "
                                        id="perCity"
                                        type="text"
                                        placeholder="Enter city"
                                        required
                                    />
                                </div>
                            </div>
                            <div className=" col-lg-3 col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">State(optional)</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="perState"
                                        className="input form-control "
                                        id="perState"
                                        type="text"
                                        placeholder="Enter state"
                                    />
                                </div>
                            </div>

                            <div className=" col-lg-3 col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">Zip(optional)</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="perZip"
                                        className="input form-control "
                                        id="perZip"
                                        type="text"
                                        placeholder="Enter Zip"
                                    />
                                </div>
                            </div>
                            <div className=" col-lg-3 col-md-6 mb-3">
                                <span className="label-text text-md fw-bold">Country</span>
                                <div>
                                    <input
                                        onChange={handleOnChange}
                                        name="perCountry"
                                        className="input form-control "
                                        id="perCountry"
                                        type="text"
                                        placeholder="Enter Country"
                                        required
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

export default BasicInfoForm;
