import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "./Disciplines.css";

const Disciplines = () => {
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
                <h2 className=" text-primary text-center fw-bold">Select disciplines you want to apply</h2>

            </div>
            <form onSubmit={handleOnSubmit} className="">
                <div className=" d-lg-flex my-md-3">

                    <div className="personalInfo col-lg-7 col-md-11 mx-auto ">
                        <div className="row  form-outline p-3">

                            <table class="table table-info table-striped-row table-hover ">
                                <thead>
                                    <tr className=" text-center">
                                        <th scope="col">Serial</th>
                                        <th scope="col">Discipline</th>
                                        <th scope="col">Programme Level(s)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className=" text-center" scope="row">1</th>
                                        <td>Medicine and Surgery</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="underGraCheckBox" checked />
                                                <label class="form-check-label ms-2" for="underGraCheckBox">
                                                    Under-Graduate
                                                </label>
                                            </div>

                                            <div class="form-check mx-lg-2 my-lg-0 my-1">
                                                <input class="form-check-input" type="checkbox" value="" id="postGraCheckBox" />
                                                <label class="form-check-label ms-2" for="postGraCheckBox">
                                                    Post-Graduate
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className=" text-center" scope="row">2</th>
                                        <td>Dental surgery</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="underGraCheckBox" checked />
                                                <label class="form-check-label ms-2" for="underGraCheckBox">
                                                    Under-Graduate
                                                </label>
                                            </div>

                                            <div class="form-check mx-lg-2 my-lg-0 my-1">
                                                <input class="form-check-input" type="checkbox" value="" id="postGraCheckBox" />
                                                <label class="form-check-label ms-2" for="postGraCheckBox">
                                                    Post-Graduate
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className=" text-center" scope="row">3</th>
                                        <td>Business Administration</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="underGraCheckBox" checked />
                                                <label class="form-check-label ms-2" for="underGraCheckBox">
                                                    Under-Graduate
                                                </label>
                                            </div>

                                            <div class="form-check mx-lg-2 my-lg-0 my-1">
                                                <input class="form-check-input" type="checkbox" value="" id="postGraCheckBox" />
                                                <label class="form-check-label ms-2" for="postGraCheckBox">
                                                    Post-Graduate
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className=" text-center" scope="row">4</th>
                                        <td>Engineering</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="underGraCheckBox" checked />
                                                <label class="form-check-label ms-2" for="underGraCheckBox">
                                                    Under-Graduate
                                                </label>
                                            </div>

                                            <div class="form-check mx-lg-2 my-lg-0 my-1">
                                                <input class="form-check-input" type="checkbox" value="" id="postGraCheckBox" />
                                                <label class="form-check-label ms-2" for="postGraCheckBox">
                                                    Post-Graduate
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className=" text-center" scope="row">5</th>
                                        <td>Arts and Social Science</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="underGraCheckBox" checked />
                                                <label class="form-check-label ms-2" for="underGraCheckBox">
                                                    Under-Graduate
                                                </label>
                                            </div>

                                            <div class="form-check mx-lg-2 my-lg-0 my-1">
                                                <input class="form-check-input" type="checkbox" value="" id="postGraCheckBox" />
                                                <label class="form-check-label ms-2" for="postGraCheckBox">
                                                    Post-Graduate
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className=" text-center" scope="row">6</th>
                                        <td>Life Science</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="underGraCheckBox" checked />
                                                <label class="form-check-label ms-2" for="underGraCheckBox">
                                                    Under-Graduate
                                                </label>
                                            </div>

                                            <div class="form-check mx-lg-2 my-lg-0 my-1">
                                                <input class="form-check-input" type="checkbox" value="" id="postGraCheckBox" />
                                                <label class="form-check-label ms-2" for="postGraCheckBox">
                                                    Post-Graduate
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className=" text-center" scope="row">7</th>
                                        <td>Fashion and Technology</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="underGraCheckBox" checked />
                                                <label class="form-check-label ms-2" for="underGraCheckBox">
                                                    Under-Graduate
                                                </label>
                                            </div>

                                            <div class="form-check mx-lg-2 my-lg-0 my-1">
                                                <input class="form-check-input" type="checkbox" value="" id="postGraCheckBox" />
                                                <label class="form-check-label ms-2" for="postGraCheckBox">
                                                    Post-Graduate
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className=" text-center" scope="row">8</th>
                                        <td>Fine Arts</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="underGraCheckBox" checked />
                                                <label class="form-check-label ms-2" for="underGraCheckBox">
                                                    Under-Graduate
                                                </label>
                                            </div>

                                            <div class="form-check mx-lg-2 my-lg-0 my-1">
                                                <input class="form-check-input" type="checkbox" value="" id="postGraCheckBox" />
                                                <label class="form-check-label ms-2" for="postGraCheckBox">
                                                    Post-Graduate
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className=" text-center" scope="row">9</th>
                                        <td>Veterinary Medicine and Animal Science</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="underGraCheckBox" checked />
                                                <label class="form-check-label ms-2" for="underGraCheckBox">
                                                    Under-Graduate
                                                </label>
                                            </div>

                                            <div class="form-check mx-lg-2 my-lg-0 my-1">
                                                <input class="form-check-input" type="checkbox" value="" id="postGraCheckBox" />
                                                <label class="form-check-label ms-2" for="postGraCheckBox">
                                                    Post-Graduate
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className=" text-center" scope="row">10</th>
                                        <td>Medical and Surgery</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="underGraCheckBox" checked />
                                                <label class="form-check-label ms-2" for="underGraCheckBox">
                                                    Under-Graduate
                                                </label>
                                            </div>

                                            <div class="form-check mx-lg-2 my-lg-0 my-1">
                                                <input class="form-check-input" type="checkbox" value="" id="postGraCheckBox" />
                                                <label class="form-check-label ms-2" for="postGraCheckBox">
                                                    Post-Graduate
                                                </label>
                                            </div>
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
                        <Link to="/academicInfo" className=" btn btn-primary mx-1">Back</Link>
                        <Link to="/institutionChoice" className=" btn btn-primary mx-1">Next</Link>
                    </div>

                    <button type="submit" name="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
};

export default Disciplines;
