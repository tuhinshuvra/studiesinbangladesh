import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi';
import "./InstitutionChoosed.css";
import useTitle from "../../../../hooks/useTitle";

const InstitutionChoosed = () => {
    useTitle("InstituteChoice")
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
            {/* <div className=" d-flex justify-content-end linkbtn">
                <Link to="/passportInfo" className=" btn btn-primary btn-sm">Passport Info</Link>
                <Link to="/basicInfo" className=" btn btn-primary btn-sm ms-2">Basic Info</Link>
            </div> */}
            <div className="">
                <h2 className="commonFormHeading fs-3 text-primary text-center fw-bold">Choosed Topics</h2>
            </div>
            <form onSubmit={handleOnSubmit} className="">
                <div className=" d-lg-flex my-md-3">

                    <div className="personalInfo ">
                        <div className="row  form-outline p-3">
                            <table className="table table-info table-striped-row table-hover text-center ">
                                <thead>
                                    <tr className=" text-center">
                                        <th scope="col">SL</th>
                                        <th scope="col">Institute Name</th>
                                        <th scope="col">Institute Type</th>
                                        <th scope="col">Discipline</th>
                                        <th scope="col">Program </th>
                                        <th scope="col">Course </th>
                                        <th scope="col">Specialization </th>
                                        <th scope="col">Eligibility </th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr>
                                        <td>1</td>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td >
                                            <BiUpArrowAlt className="trashBorder text-success fw-bolder my-1"></BiUpArrowAlt>
                                            <BiDownArrowAlt className="trashBorder text-danger"></BiDownArrowAlt>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td className="">
                                            <p>1. Equivalence of Foreign Degree:  • Must have passed qualifying examinations (HSC/”A” level) or equivalent examination. • Minimum aggregate GPA in SSC or equivalent and HSC or equivalent: 7.00 (seven). • Minimum GPA either in SSC or equivalent or in HSC or equivalent: 3.0 Minimum GP in Biology: 3.5 • For calculation of GPA against the marks obtained in SSC/’O’ level or equivalent exam, only top 5 subjects are considered for calculation of GPA. Therefore, GPA in ‘0’ level = (total marks obtained in top five subjects) ÷ 5 • For calculation of GPA against the marks obtained in HSC/’A’ level or equivalent exam, only 3 subjects (Physics, Chemistry and Biology) are considered for calculation of GPA. Qualifying grade in each subject individually is “C”: Therefore, GPA in ‘A’ level = (total marks obtained in three subjects) ÷ 3
                                            </p>
                                        </td>
                                        <td >
                                            <BiUpArrowAlt className="trashBorder text-success fw-bolder my-1"></BiUpArrowAlt>
                                            <BiDownArrowAlt className="trashBorder text-danger"></BiDownArrowAlt>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td >
                                            <BiUpArrowAlt className="trashBorder text-success fw-bolder my-1"></BiUpArrowAlt>
                                            <BiDownArrowAlt className="trashBorder text-danger"></BiDownArrowAlt>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td >
                                            <BiUpArrowAlt className="trashBorder text-success fw-bolder my-1"></BiUpArrowAlt>
                                            <BiDownArrowAlt className="trashBorder text-danger"></BiDownArrowAlt>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td >
                                            <BiUpArrowAlt className="trashBorder text-success fw-bolder my-1"></BiUpArrowAlt>
                                            <BiDownArrowAlt className="trashBorder text-danger"></BiDownArrowAlt>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td >
                                            <BiUpArrowAlt className="trashBorder text-success fw-bolder my-1"></BiUpArrowAlt>
                                            <BiDownArrowAlt className="trashBorder text-danger"></BiDownArrowAlt>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td >
                                            <BiUpArrowAlt className="trashBorder text-success fw-bolder my-1"></BiUpArrowAlt>
                                            <BiDownArrowAlt className="trashBorder text-danger"></BiDownArrowAlt>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td >
                                            <BiUpArrowAlt className="trashBorder text-success fw-bolder my-1"></BiUpArrowAlt>
                                            <BiDownArrowAlt className="trashBorder text-danger"></BiDownArrowAlt>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>



                <div className="col-lg-7 col-md-11 mx-auto  d-flex justify-content-between my-3">
                    <button type="reset" className="btn btn-warning fw-bold">Reset</button>

                    <div>
                        <Link to="/institutionChoice" className=" btn btn-info fw-bold">Back</Link>
                        <Link to="/apply" className="btn btn-info fw-bold mx-2">Main Form</Link>
                        <Link to="/next" className=" btn btn-info fw-bold">Next</Link>
                    </div>

                    <button type="submit" name="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
};

export default InstitutionChoosed;
