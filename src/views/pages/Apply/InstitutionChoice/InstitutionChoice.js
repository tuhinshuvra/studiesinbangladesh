import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';
import "./InstitutionChoice.css";
import useTitle from "../../../../hooks/useTitle";

const InstitutionChoice = () => {
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
                <h2 className="commonFormHeading fs-3 text-primary text-center fw-bold">Choices are not limited, select multiple institute to improve your choices.</h2>
            </div>
            <form onSubmit={handleOnSubmit} className="">
                <div className=" d-lg-flex my-md-3">

                    <div className="personalInfo ">

                        <div className="col-lg-10 mx-auto d-flex justify-content-between my-2">

                            <div>
                                <label className="form-check-label" for="">Disciplines</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Please Select</option>
                                    <option value="1">Medicine and Surgery</option>
                                    <option value="2">Business Administration</option>
                                    <option value="3">Life Science</option>
                                    <option value="4">Medical and Surgery</option>
                                    <option value="5">Fashion and Technology</option>
                                </select>
                            </div>


                            <div >
                                <label className="form-check-label" for="">Program Level</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Please Select</option>
                                    <option value="1">Under Graduate</option>
                                    <option value="2">Graduate</option>
                                </select>
                            </div>


                            <div className="">
                                <label className="form-check-label" for="">Course</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Course</option>
                                    <option selected>Please Select</option>
                                    <option value="1">Under Graduate</option>
                                    <option value="2">Graduate</option>
                                </select>
                            </div>


                            <div  >
                                <lavel className="form-check-label" for="">Specialization</lavel>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Please Select</option>
                                    <option value="1">Under Graduate</option>
                                    <option value="2">Graduate</option>
                                </select>
                            </div>

                        </div>
                        <div className="row  form-outline p-3">
                            <table className="table   table-striped  table-hover text-center ">
                                <thead>
                                    <tr className=" text-center">
                                        <th scope="col">Institute Name</th>
                                        <th scope="col">Institute Type</th>
                                        <th scope="col">Discipline</th>
                                        <th scope="col">Program </th>
                                        <th scope="col">Course </th>
                                        <th scope="col">Specialization </th>
                                        <th scope="col">Eligibility </th>
                                        <th scope="col">Apply</th>
                                    </tr>
                                </thead>
                                <tbody className=" my-auto ">
                                    <tr className=" ">
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
                            <div className="">
                                <h2 className=" text-primary text-center fw-bold mt-3">Final Choices</h2>
                            </div>
                            <table className="table table-info table-striped-row table-hover text-center ">
                                <thead>
                                    <tr className=" text-center">
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
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td ><FaTrash className="trashBorder text-danger"></FaTrash> </td>
                                    </tr>
                                    <tr>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td ><FaTrash className="trashBorder text-danger"></FaTrash> </td>
                                    </tr>
                                    <tr>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td ><FaTrash className="trashBorder text-danger"></FaTrash> </td>
                                    </tr>
                                    <tr>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td ><FaTrash className="trashBorder text-danger"></FaTrash> </td>
                                    </tr>
                                    <tr>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td ><FaTrash className="trashBorder text-danger"></FaTrash> </td>
                                    </tr>
                                    <tr>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td ><FaTrash className="trashBorder text-danger"></FaTrash> </td>
                                    </tr>
                                    <tr>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td ><FaTrash className="trashBorder text-danger"></FaTrash> </td>
                                    </tr>
                                    <tr>
                                        <td>Anwer Khan Modern Medical College</td>
                                        <td>Private</td>
                                        <td>Medicine and Surgery</td>
                                        <td>Under-Graduate</td>
                                        <td>MBBS</td>
                                        <td>Medicine and Surgery</td>
                                        <td>NONE</td>
                                        <td ><FaTrash className="trashBorder text-danger"></FaTrash> </td>
                                    </tr>




                                </tbody>
                            </table>




                        </div>
                    </div>
                </div>



                <div className="col-lg-7 col-md-11 mx-auto  d-flex justify-content-between my-3">
                    <button type="reset" className="btn btn-warning fw-bold">Reset</button>

                    <div>
                        <Link to="/disciplines" className=" btn btn-info fw-bold">Back</Link>
                        <Link to="/apply" className="btn btn-info fw-bold mx-2">Main Form</Link>
                        <Link to="/choosedTopics" className=" btn btn-info fw-bold">Next</Link>
                    </div>

                    <button type="submit" name="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
};

export default InstitutionChoice;
