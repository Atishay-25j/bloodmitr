import React from "react";
import video from './rcbmove2.mp4'
import './Donors.css'
function Donors() {
    return (
        <div>
            <video autoPlay loop muted play-inline= {"true".toString()} className="backvid">
                <source src={video}/>
            </video>
            <div className="container" style={{ "margin": "100px" }}>
                <h1>Blood Donation Form</h1>
                <header>Enter Personal Details</header>
                <form action="/donate" /*onSubmit={validatedonar()}*/ method="post">
                    <div className="details personal">
                        <span className="title"> Donor's Detail </span>
                        <div className="fields">
                            <div className="input-field">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter your name" title="Enter full name"
                                    pattern="^(\w\w+)\s(\w+)$" name="name" required />
                            </div>
                            <div className="input-field">
                                <label>Age</label>
                                <input type="text" placeholder="Enter your age" id="age" name="age" pattern="[0-9]{1,3}"
                                    required />
                            </div>
                            <div className="input-field">
                                <label>Email</label>
                                <input type="text" placeholder="Enter Email" name="email" required />
                            </div>

                            <div className="input-field">
                                <label>Mobile Number</label>
                                <input type="tel" placeholder="Enter your mobile number" title="Enter 10 digit phone number"
                                    pattern="[0-9]{10}" name="mobilenum" required />
                            </div>
                            <div className="input-field">
                                <label>Address</label>
                                <input type="text" placeholder="Enter your Address" name="address" required />
                            </div>
                            <div className="input-field">
                                <label>Gender</label>
                                <input type="text" placeholder="Enter your Gender" name="gender" required />
                            </div>
                            <div className="input-field">
                                <label>Occupation</label>
                                <input type="text" placeholder="Enter your occupation" name="occupation" required />
                            </div>
                            <div className="input-field">
                                <label>Height(in cm)</label>
                                <input type="text" placeholder="Enter your height" name="height" required />
                            </div>
                            <div className="input-field">
                                <label>Weight(in Kg)</label>
                                <input type="text" placeholder="Enter your weight" name="weight" id="weight" required />
                            </div>
                            <div className="input-field">
                                <label for="blood-group">Blood Group:</label>
                                <select id="blood-group" name="bloodgroup" required>
                                    <option value="">Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>

                            <div className="input-field">
                                <label for="donation-date">Donation Date:</label>
                                <input type="date" id="donation-date" name="donationdate" required />
                            </div>

                            <div className="input-field">
                                <label for="id-proof">ID proof:</label>
                                <input type="file" id="idproof" name="proof" title="Max size 0.8 MB"
                                    accept="application/pdf" required />
                            </div>


                            <div className="input-field">
                                <label for="state">Select a state:</label>
                                <select id="state" name="state">
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                            </div>

                            <div className="input-field">
                                <label for="city">Select City:</label>
                                <select id="city" name="city">
                                    <option value="default">Select your city</option>
                                </select>
                            </div>
                            {/* <!-- <div className="input-field"> -->
                        <!-- <label for="last-donation-date">Last Donation Date:</label>
                        <input type="date" id="last-donation-date" name="last-donation-date" required>
                        </div> --> */}
                        </div>
                        <br />

                        <h4>🩸 Have you donated blood in last 3 months ?</h4>
                        <br />
                        <div className="check-label">
                            <label><input type="radio" name="previously" onChange="prev()" required />Yes</label>
                            <label><input type="radio" name="previously" onChange="prev()" />No</label>
                        </div>
                        <br />
                        <br />

                        <h4>🩸 Have You any reason to believe that you may be infected by either Hepatitis, Malaria,
                            HIV/AIDS,
                            and/or Venereal Disease ? </h4>
                        <br />
                        <div className="check-label">
                            <label><input type="radio" name="infected" onChange="infec()" required />Yes</label>
                            <label><input type="radio" name="infected" onChange="infec()" />No</label>
                        </div>
                        <br />
                        <br />

                        <h4>🩸 In the last 6 Months have you had any history of the following: </h4>
                        <div className="check-label">
                            <br />
                            <label><input type="checkbox" id="wtLoss" />Unexplained Weight Loss</label>
                            <br />
                            <label><input type="checkbox" id="reDi" />Repeared Diarrhoea</label>
                            <br />
                            <label><input type="checkbox" id="swGl" />Swollen Glands</label>
                            <br />
                            <label><input type="checkbox" id="fev" />Continuous Low-Grade Fever</label>
                        </div>
                        <br />



                        <h4>🩸 In the last 6 Months have you had any :-</h4>
                        <div className="check-label">
                            <br />
                            <label><input type="checkbox" id="tatto" /> Tattooing</label>
                            <br />
                            <label><input type="checkbox" id="erPi" /> Ear Piercing </label>
                            <br />
                            <label><input type="checkbox" id="deEx" /> Dental Extraction</label>
                            <br />
                        </div>

                        <h4> 🩸 Do you suffer from or have suffered from any of the following Diseases?:- </h4>
                        <div className="check-label">
                            <br />
                            <div className="checkAlign">

                                <label><input type="checkbox" id="heDi" />Heart Diseas</label>

                                <label><input type="checkbox" id="luDi" /> Lung Disease </label>

                                <label><input type="checkbox" id="kiDi" /> Kidney Disease</label>

                                <label><input type="checkbox" id="caDi" /> Cancer/ Malignant Disease </label>

                                <label><input type="checkbox" id="eiDi" /> Epilepsy</label>

                                <label><input type="checkbox" id="diDi" /> Diabetes</label>

                                <label><input type="checkbox" id="tuDi" /> Tuberculosis</label>

                                <label><input type="checkbox" id="abDi" /> Abnormal bleeding tendency</label>

                                <label><input type="checkbox" id="hepDi" /> Hepatitis B/C</label>

                                <label><input type="checkbox" id="alDi" /> Allergic Disease</label>

                                <label><input type="checkbox" id="jaDi" /> Jaundice</label>

                                <label><input type="checkbox" id="seDi" /> Sexually Trans. Disease </label>

                                <label><input type="checkbox" id="maDi" /> Malaria</label>

                                <label><input type="checkbox" id="tyDi" /> Typhoid (Last 1 yr.) </label>

                                <label><input type="checkbox" id="faDi" /> Fainting Spells</label>

                            </div>
                        </div>

                        <br />


                        <h4>🩸 Is There any history of surgery or Blood Transfusion in the past 6 Months? :- </h4>
                        <div className="check-label">
                            <br />
                            <label><input type="checkbox" id="maSur" /> Major Surgery</label>
                            <br />
                            <label><input type="checkbox" id="blTrans" />Blood Transfusion </label>
                            <br />
                            <label><input type="checkbox" id="miSur" /> Minor Surgery</label>
                            <br />
                        </div>
                        <div className="btn">
                            <input type="submit" value="Ready to donate" id="sbtn" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Donors;