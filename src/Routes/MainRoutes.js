import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "../Pages/Home";
import Donate from "../Pages/Donate";
import LoginPage from "../Pages/Login";
import SignUpPage from "../Pages/Signup";
import Recipient from "../Pages/Recipient";
import Data from "../Pages/Data";
import DonorState from "../context/donors/DonorState";
import RecipientState from "../context/recipients/RecipientState";
import Bloodbank from "../Components/Bloodbanks/Bloodbank";
function MainRoutes() {
    return (
        <>
            <DonorState>
                <RecipientState>



                    <Router>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/donate" element={<Donate />} />
                            <Route exact path="/login" element={<LoginPage />} />
                            <Route exact path="/signup" element={<SignUpPage />} />
                            <Route exact path="/require" element={<Recipient />} />
                            <Route exact path="/explore" element={<Data />} />
                            <Route exact path="/banks" element={<Bloodbank />} />
                        </Routes>

                    </Router>
                </RecipientState>
            </DonorState>
        </>

    )
}

export default MainRoutes