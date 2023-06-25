import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./ApplyNow.css";

const BackgroundInfo = () => {
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
        <div className="col-lg-12  col-md-9 mx-auto">
            <div className="">
                <h2 className=" text-primary text-center fw-bold">Enter Academic Information</h2>

            </div>
            <form onSubmit={handleOnSubmit} className="">
                <div className=" d-lg-flex my-md-3">

                    <div className="personalInfo col-lg-6 mx-1 ">
                        <div className="row   form-outline p-3">
                            <div className=" d-flex justify-content-evenly">
                                <span className=" fs-5 text-primary  label-text text-md fw-bold fst-italic my-3">Qualification</span>
                                <span className=" fs-5 text-primary  label-text text-md fw-bold fst-italic my-3">Percentage</span>
                            </div>

                            <div className="  mb-3 d-flex justify-content-between">
                                <div className=" d-flex flex-column">
                                    <span className="label-text text-md fw-bold">Secondary/ Class X / O Level</span>
                                    <span className="label-text text-md">Equivalent Qualification Score</span>
                                </div>
                                <div className=" d-flex justify-content-center align-items-center">
                                    <input
                                        onChange={handleOnChange}
                                        name="secondaryScore"
                                        className="input form-control "
                                        id="secondaryScore"
                                        type="number"
                                        placeholder="Enter score"
                                    /> <b>%</b>
                                </div>
                            </div>

                            <div className="  mb-3 d-flex justify-content-between">
                                <div className=" d-flex flex-column">
                                    <span className="label-text text-md fw-bold">Higher Secondary/ Class XII / A Level / Equivalent Qualification Score</span>
                                    <div className=" d-flex">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="hscMarks" id="hscMarksYes" checked />
                                            <label class="form-check-label" for="hscMarksYes">                                                Yes
                                            </label>
                                        </div>
                                        <div class="form-check mx-4">
                                            <input class="form-check-input" type="radio" name="hscMarks" id="hscMarksNo" />
                                            <label class="form-check-label" for="hscMarksNo">
                                                No
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="hscMarks" id="hscMarksAppeared" />
                                            <label class="form-check-label" for="hscMarksAppeared">
                                                appeared
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className=" d-flex justify-content-center align-items-center">
                                    <input
                                        onChange={handleOnChange}
                                        name="secondaryScore"
                                        className="input form-control "
                                        id="secondaryScore"
                                        type="number"
                                        placeholder="Enter score"
                                    /> <b>%</b>
                                </div>
                            </div>

                            <div className="  mb-3 d-flex justify-content-between">
                                <div className=" d-flex flex-column">
                                    <span className="label-text text-md fw-bold">Diploma Score</span>
                                    <div className=" d-flex">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="diplomaMarks" id="diplomaMarksYes" />
                                            <label class="form-check-label" for="diplomaMarksYes">Yes</label>
                                        </div>
                                        <div class="form-check mx-4">
                                            <input class="form-check-input" type="radio" name="diplomaMarks" id="diplomaMarksNo" checked />
                                            <label class="form-check-label" for="diplomaMarksNo">No</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="diplomaMarks" id="diplomaMarksAppeared" />
                                            <label class="form-check-label" for="diplomaMarksAppeared">appeared</label>
                                        </div>
                                    </div>
                                </div>
                                <div className=" d-flex justify-content-center align-items-center">
                                    <input
                                        onChange={handleOnChange}
                                        name="diplomaScore"
                                        className="input form-control "
                                        id="diplomaScore"
                                        type="number"
                                        placeholder="Enter score"
                                    /> <b>%</b>
                                </div>
                            </div>

                            <div className="  mb-3 d-flex justify-content-between">
                                <div className=" d-flex flex-column">
                                    <span className="label-text text-md fw-bold">Graduation Score</span>
                                    <div className=" d-flex">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="graduationMarks" id="graduationMarksYes" />
                                            <label class="form-check-label" for="graduationMarksYes">Yes</label>
                                        </div>
                                        <div class="form-check mx-4">
                                            <input class="form-check-input" type="radio" name="graduationMarks" id="graduationMarksNo" checked />
                                            <label class="form-check-label" for="graduationMarksNo">No</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="graduationMarks" id="graduationMarksAppeared" />
                                            <label class="form-check-label" for="graduationMarksAppeared">appeared</label>
                                        </div>
                                    </div>
                                </div>
                                <div className=" d-flex justify-content-center align-items-center">
                                    <input
                                        onChange={handleOnChange}
                                        name="graduationScore"
                                        className="input form-control "
                                        id="graduationScore"
                                        type="number"
                                        placeholder="Enter score"
                                    /> <b>%</b>
                                </div>
                            </div>

                            <div className="  mb-3 d-flex justify-content-between">
                                <div className=" d-flex flex-column">
                                    <span className="label-text text-md fw-bold">Post Graduation Score</span>
                                    <div className=" d-flex">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="postgraduationMarks" id="postgraduationMarksYes" />
                                            <label class="form-check-label" for="postgraduationMarksYes">Yes</label>
                                        </div>
                                        <div class="form-check mx-4">
                                            <input class="form-check-input" type="radio" name="postgraduationMarks" id="postgraduationMarksNo" checked />
                                            <label class="form-check-label" for="postgraduationMarksNo">No</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="postgraduationMarks" id="postgraduationMarksAppeared" />
                                            <label class="form-check-label" for="postgraduationMarksAppeared">appeared</label>
                                        </div>
                                    </div>
                                </div>
                                <div className=" d-flex justify-content-center align-items-center">
                                    <input
                                        onChange={handleOnChange}
                                        name="postGraduationScore"
                                        className="input form-control "
                                        id="postGraduationScore"
                                        type="number"
                                        placeholder="Enter score"
                                    /> <b>%</b>
                                </div>
                            </div>
                            <div className="  mb-3 d-flex justify-content-between">
                                <div className=" d-flex flex-column">
                                    <span className="label-text text-md fw-bold">NEET Score</span>
                                    <div className=" d-flex">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="neetMarks" id="neetScoreYes" />
                                            <label class="form-check-label" for="neetScoreYes">Yes</label>
                                        </div>
                                        <div class="form-check mx-4">
                                            <input class="form-check-input" type="radio" name="neetMarks" id="neetScoreNo" checked />
                                            <label class="form-check-label" for="neetScoreNo">No</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="neetMarks" id="neetScoreAppeared" />
                                            <label class="form-check-label" for="neetScoreAppeared">appeared</label>
                                        </div>
                                    </div>
                                </div>
                                <div className=" d-flex justify-content-center align-items-center">
                                    <input
                                        onChange={handleOnChange}
                                        name="neetScore"
                                        className="input form-control "
                                        id="neetScore"
                                        type="number"
                                        placeholder="Enter score"
                                    /> <b>%</b>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="personalInfo col-g-6 mx-1 my-lg-0 my-4">
                        <div className="row   form-outline p-3">
                            <div className=" d-flex justify-content-evenly">
                                <span className=" fs-5 text-primary  label-text text-md fw-bold fst-italic my-3">Qualification</span>
                                <span className=" fs-5 text-primary  label-text text-md fw-bold fst-italic my-3">Percentage</span>
                            </div>

                            <div className="  mb-3 d-flex justify-content-between">
                                <div className=" d-flex flex-column">
                                    <span className="label-text text-md fw-bold">Do you have GRE score?</span>
                                    <div className=" d-flex">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="greMarks" id="greScoreYes" />
                                            <label class="form-check-label" for="greScoreYes">Yes</label>
                                        </div>
                                        <div class="form-check mx-4">
                                            <input class="form-check-input" type="radio" name="greMarks" id="greScoreNo" checked />
                                            <label class="form-check-label" for="greScoreNo">No</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="greMarks" id="greScoreAppeared" />
                                            <label class="form-check-label" for="greScoreAppeared">appeared</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <input
                                        onChange={handleOnChange}
                                        name="greScore"
                                        className="input form-control "
                                        id="greScore"
                                        type="number"
                                        placeholder="Enter score"
                                    />
                                </div>
                            </div>

                            <div className="  mb-3 d-flex justify-content-between">
                                <div className=" d-flex flex-column">
                                    <span className="label-text text-md fw-bold">Do you have GMAT score?</span>
                                    <div className=" d-flex">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="gmatMarks" id="gmatScoreYes" />
                                            <label class="form-check-label" for="gmatScoreYes">Yes</label>
                                        </div>
                                        <div class="form-check mx-4">
                                            <input class="form-check-input" type="radio" name="gmatMarks" id="gmatScoreNo" checked />
                                            <label class="form-check-label" for="gmatScoreNo">No</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="gmatMarks" id="gmatScoreAppeared" />
                                            <label class="form-check-label" for="gmatScoreAppeared">appeared</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <input
                                        onChange={handleOnChange}
                                        name="gmatScore"
                                        className="input form-control "
                                        id="gmatScore"
                                        type="number"
                                        placeholder="Enter score"
                                    />
                                </div>
                            </div>

                            <div className="  mb-3 d-flex justify-content-between">
                                <div className=" d-flex flex-column">
                                    <span className="label-text text-md fw-bold">Do you have SAT Level 1 score?</span>
                                    <div className=" d-flex">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="satOneMarks" id="satOneScoreYes" />
                                            <label class="form-check-label" for="satOneScoreYes">Yes</label>
                                        </div>
                                        <div class="form-check mx-4">
                                            <input class="form-check-input" type="radio" name="satOneMarks" id="satOneScoreNo" checked />
                                            <label class="form-check-label" for="satOneScoreNo">No</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="satOneMarks" id="satOneScoreAppeared" />
                                            <label class="form-check-label" for="satOneScoreAppeared">appeared</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <input
                                        onChange={handleOnChange}
                                        name="satOneScore"
                                        className="input form-control "
                                        id="satOneScore"
                                        type="number"
                                        placeholder="Enter score"
                                    />
                                </div>
                            </div>


                            <div className="  mb-3 d-flex justify-content-between">
                                <div className=" d-flex flex-column">
                                    <span className="label-text text-md fw-bold">Do you have SAT Level 2 score?</span>
                                    <div className=" d-flex">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="satTwoMarks" id="satTwoScoreYes" />
                                            <label class="form-check-label" for="satTwoScoreYes">Yes</label>
                                        </div>
                                        <div class="form-check mx-4">
                                            <input class="form-check-input" type="radio" name="satTwoMarks" id="satTwoScoreNo" checked />
                                            <label class="form-check-label" for="satTwoScoreNo">No</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="satTwoMarks" id="satTwoScoreAppeared" />
                                            <label class="form-check-label" for="satTwoScoreAppeared">appeared</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <input
                                        onChange={handleOnChange}
                                        name="satTwoScore"
                                        className="input form-control "
                                        id="satTwoScore"
                                        type="number"
                                        placeholder="Enter score"
                                    />
                                </div>
                            </div>
                            <div className="  mb-3 d-flex justify-content-between">
                                <div className=" d-flex flex-column">
                                    <span className="label-text text-md fw-bold">Do you have TOEFL score?</span>
                                    <div className=" d-flex">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="toffelMarks" id="toffelScoreYes" />
                                            <label class="form-check-label" for="toffelScoreYes">Yes</label>
                                        </div>
                                        <div class="form-check mx-4">
                                            <input class="form-check-input" type="radio" name="toffelMarks" id="toffelScoreNo" checked />
                                            <label class="form-check-label" for="toffelScoreNo">No</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="toffelMarks" id="toffelScoreAppeared" />
                                            <label class="form-check-label" for="toffelScoreAppeared">appeared</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <input
                                        onChange={handleOnChange}
                                        name="toffelScore"
                                        className="input form-control "
                                        id="toffelScore"
                                        type="number"
                                        placeholder="Enter score"
                                    />
                                </div>
                            </div>
                            <div className="  mb-3 d-flex justify-content-between">
                                <div className=" d-flex flex-column">
                                    <span className="label-text text-md fw-bold">Do you have IELTS score?</span>
                                    <div className=" d-flex">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="ieltsMarks" id="ieltsScoreYes" />
                                            <label class="form-check-label" for="ieltsScoreYes">Yes</label>
                                        </div>
                                        <div class="form-check mx-4">
                                            <input class="form-check-input" type="radio" name="ieltsMarks" id="ieltsScoreNo" checked />
                                            <label class="form-check-label" for="ieltsScoreNo">No</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="ieltsMarks" id="ieltsScoreAppeared" />
                                            <label class="form-check-label" for="ieltsScoreAppeared">appeared</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <input
                                        onChange={handleOnChange}
                                        name="ieltsScore"
                                        className="input form-control "
                                        id="ieltsScore"
                                        type="number"
                                        placeholder="Enter score"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



                <div className=" d-flex justify-content-between my-3">
                    <button type="reset" className="btn btn-warning fw-bold">Reset</button>
                    <button type="submit" name="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
};

export default BackgroundInfo;
