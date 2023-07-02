import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "./Disciplines.css";
import useTitle from "../../../../hooks/useTitle";

const Disciplines = () => {
    useTitle("Disciplines")
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const [disciplineInfo, setDisciplineInfo] = useState([]);

    const toggleInput = () => {
        setDisabled(!disabled);
    };

    const handleOnChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...disciplineInfo };
        newData[field] = value;
        setDisciplineInfo(newData)
    }

    const handleOnSubmit = (event) => {

    }

    console.log("disciplineInfo : ", disciplineInfo);


    return (
        <div className=" mx-auto">
            {/* <div className=" d-flex justify-content-end linkbtn">
                <Link to="/passportInfo" className=" btn btn-primary btn-sm">Passport Info</Link>
                <Link to="/basicInfo" className=" btn btn-primary btn-sm ms-2">Basic Info</Link>
            </div> */}
            <div className="">
                <h2 className="commonFormHeading text-primary text-center fw-bold">Select disciplines you want to apply</h2>

            </div>
            <form onSubmit={handleOnSubmit} className="">
                <div className=" d-lg-flex my-md-3">

                    <div className="personalInfo col-lg-7 col-md-11 mx-auto ">
                        <div className="row  form-outline p-3">

                            <table className="table table-info table-striped-row table-hover ">
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
                                            <div className="form-check">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="medicineAndSurgery" value="ugMedicineAndSurgery" id="pgMedicineAndSurgery" checked />
                                                <label className="form-check-label ms-2" htmlFor="ugMedicineAndSurgery">
                                                    Under-Graduate
                                                </label>
                                            </div>

                                            <div className="form-check mx-lg-2 my-lg-0 my-1">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="medicineAndSurgery" value="pgMedicineAndSurgery" id="pgMedicineAndSurgery" />
                                                <label className="form-check-label ms-2" htmlFor="pgMedicineAndSurgery">
                                                    Post-Graduate
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className=" text-center" scope="row">2</th>
                                        <td>Dental surgery</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div className="form-check">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="dentalSurgery" value="ugDentalSurgery" id="ugDentalSurgery" checked />
                                                <label className="form-check-label ms-2" htmlFor="ugDentalSurgery">
                                                    Under-Graduate
                                                </label>
                                            </div>

                                            <div className="form-check mx-lg-2 my-lg-0 my-1">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="dentalSurgery" value="pgDentalSurgery" id="pgDentalSurgery" />
                                                <label className="form-check-label ms-2" htmlFor="pgDentalSurgery">
                                                    Post-Graduate
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className=" text-center" scope="row">3</th>
                                        <td>Business Administration</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div className="form-check">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="businessAdministration" value="ugBusinessAdministration" id="ugBusinessAdministration" checked />
                                                <label className="form-check-label ms-2" htmlFor="ugBusinessAdministration">
                                                    Under-Graduate
                                                </label>
                                            </div>

                                            <div className="form-check mx-lg-2 my-lg-0 my-1">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="businessAdministration" value="pgBusinessAdministration" id="pgBusinessAdministration" />
                                                <label className="form-check-label ms-2" htmlFor="pgBusinessAdministration">
                                                    Post-Graduate
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className=" text-center" scope="row">4</th>
                                        <td>Engineering</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div className="form-check">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="engineering" value="ugEngineering" id="ugEngineering" checked />
                                                <label className="form-check-label ms-2" htmlFor="ugEngineering">
                                                    Under-Graduate
                                                </label>
                                            </div>

                                            <div className="form-check mx-lg-2 my-lg-0 my-1">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="engineering" value="pgEngineering" id="pgEngineering" />
                                                <label className="form-check-label ms-2" htmlFor="pgEngineering">
                                                    Post-Graduate
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className=" text-center" scope="row">5</th>
                                        <td>Arts and Social Science</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div className="form-check">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="artsAndSocialScience" value="ugArtsAndSocialScience" id="ugArtsAndSocialScience" checked />
                                                <label className="form-check-label ms-2" htmlFor="ugArtsAndSocialScience">
                                                    Under-Graduate
                                                </label>
                                            </div>

                                            <div className="form-check mx-lg-2 my-lg-0 my-1">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="artsAndSocialScience" value="pgArtsAndSocialScience" id="pgArtsAndSocialScience" />
                                                <label className="form-check-label ms-2" htmlFor="pgArtsAndSocialScience">
                                                    Post-Graduate
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className=" text-center" scope="row">6</th>
                                        <td>Life Science</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div className="form-check">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="lifeScience" value="" id="ugLifeScience" checked />
                                                <label className="form-check-label ms-2" htmlFor="ugLifeScience">
                                                    Under-Graduate
                                                </label>
                                            </div>

                                            <div className="form-check mx-lg-2 my-lg-0 my-1">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="lifeScience" value="" id="pgLifeScience" />
                                                <label className="form-check-label ms-2" htmlFor="pgLifeScience">
                                                    Post-Graduate
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className=" text-center" scope="row">7</th>
                                        <td>Fashion and Technology</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div className="form-check">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="fashionAndTechnology" value="ugFashionAndTechnology" id="ugFashionAndTechnology" checked />
                                                <label className="form-check-label ms-2" htmlFor="ugFashionAndTechnology">
                                                    Under-Graduate
                                                </label>
                                            </div>

                                            <div className="form-check mx-lg-2 my-lg-0 my-1">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="fashionAndTechnology" value="pgFashionAndTechnology" id="pgFashionAndTechnology" />
                                                <label className="form-check-label ms-2" htmlFor="pgFashionAndTechnology">
                                                    Post-Graduate
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className=" text-center" scope="row">8</th>
                                        <td>Fine Arts</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div className="form-check">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="fineArts" value="ugFineArts" id="ugFineArts" checked />
                                                <label className="form-check-label ms-2" htmlFor="ugFineArts">Under-Graduate</label>
                                            </div>

                                            <div className="form-check mx-lg-2 my-lg-0 my-1">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="fineArts" value="pgFineArts" id="pgFineArts" />
                                                <label className="form-check-label ms-2" htmlFor="pgFineArts">Post-Graduate</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className=" text-center" scope="row">9</th>
                                        <td>Veterinary Medicine and Animal Science</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div className="form-check">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="veterinaryMedicineAndAnimalScience" value="ugVeterinaryMedicineAndAnimalScience" id="ugVeterinaryMedicineAndAnimalScience" checked />
                                                <label className="form-check-label ms-2" htmlFor="underGraCheckBox">Under-Graduate</label>
                                            </div>

                                            <div className="form-check mx-lg-2 my-lg-0 my-1">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="veterinaryMedicineAndAnimalScience" value="pgVeterinaryMedicineAndAnimalScience" id="pgVeterinaryMedicineAndAnimalScience" />
                                                <label className="form-check-label ms-2" htmlFor="ugVeterinaryMedicineAndAnimalScience">Post-Graduate</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className=" text-center" scope="row">10</th>
                                        <td>Medical and Surgery</td>
                                        <td className=" d-flex justify-content-center flex-column flex-lg-row">
                                            <div className="form-check">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="medicalAndSurgery" value="ugMedicalAndSurgery" id="ugMedicalAndSurgery" checked />
                                                <label className="form-check-label ms-2" htmlFor="ugMedicalAndSurgery">Under-Graduate</label>
                                            </div>

                                            <div className="form-check mx-lg-2 my-lg-0 my-1">
                                                <input onChange={handleOnChange} className="form-check-input" type="radio" name="medicalAndSurgery" value="pgMedicalAndSurgery" id="pgMedicalAndSurgery" />
                                                <label className="form-check-label ms-2" htmlFor="pgMedicalAndSurgery">
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
                        <Link to="/academicInfo" className=" btn btn-info fw-bold mx-1">Back</Link>
                        <Link to="/apply" className="btn btn-info fw-bold mx-2">Main Form</Link>
                        <Link to="/institutionChoice" className=" btn btn-info fw-bold mx-1">Next</Link>
                    </div>

                    <button type="submit" name="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
};

export default Disciplines;
