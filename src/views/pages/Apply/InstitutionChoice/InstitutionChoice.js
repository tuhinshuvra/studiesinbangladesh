import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "./InstitutionChoice.css";

const InstitutionChoice = () => {
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
        <div className=" mx-auto">
            <div className=" d-flex justify-content-end linkbtn">
                <Link to="/passportInfo" className=" btn btn-primary btn-sm">Passport Info</Link>
                <Link to="/basicInfo" className=" btn btn-primary btn-sm ms-2">Basic Info</Link>
            </div>
            <div className="">
                <h2 className=" text-primary text-center fw-bold">Choices are not limited, select multiple institute to improve your choices.</h2>

            </div>
            <form onSubmit={handleOnSubmit} className="">
                <div className=" d-lg-flex my-md-3">

                    <div className="personalInfo  col-md-11 mx-auto ">
                        <div className="row  form-outline p-3">

                            <table class="table table-info table-striped-row table-hover text-center ">
                                <thead>
                                    <tr className=" text-center">
                                        <th scope="col">Institute Name</th>
                                        <th scope="col">Institute Type</th>
                                        <th scope="col">Discipline</th>
                                        <th scope="col">Program </th>
                                        <th scope="col"> Course </th>
                                        <th scope="col"> Specialization </th>
                                        <th scope="col"> Eligibility </th>
                                        <th scope="col"> Apply</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td><button className=" btn btn-outline-primary">Apply </button></td>
                                    </tr>
                                    <tr>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td><button className=" btn btn-outline-primary">Apply </button></td>
                                    </tr>
                                    <tr>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td><button className=" btn btn-outline-primary">Apply </button></td>
                                    </tr>
                                    <tr>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td><button className=" btn btn-outline-primary">Apply </button></td>
                                    </tr>
                                    <tr>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td><button className=" btn btn-outline-primary">Apply </button></td>
                                    </tr>
                                    <tr>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td><button className=" btn btn-outline-primary">Apply </button></td>
                                    </tr>
                                    <tr>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td><button className=" btn btn-outline-primary">Apply </button></td>
                                    </tr>
                                    <tr>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td><button className=" btn btn-outline-primary">Apply </button></td>
                                    </tr>




                                </tbody>
                            </table>




                        </div>
                    </div>
                </div>



                <div className="col-lg-7 col-md-11 mx-auto  d-flex justify-content-between my-3">
                    <button type="reset" className="btn btn-warning fw-bold">Reset</button>

                    <div>
                        <Link to="/disciplines" className=" btn btn-primary mx-1">Back</Link>
                        <Link to="/next" className=" btn btn-primary mx-1">Next</Link>
                    </div>

                    <button type="submit" name="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
};

export default InstitutionChoice;
