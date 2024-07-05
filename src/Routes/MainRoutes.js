import React from "react";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'

import Home from "../Pages/Home";
import Donate from "../Pages/Donate";
import LoginPage from "../Pages/Login";
import SignUpPage from "../Pages/Signup";
import Recipient from "../Pages/Recipient";
function MainRoutes() {
    return (
        <Router>
            <Routes>
            <Route  path="/" element={<Home/>} />
            <Route path="/donate" element = {<Donate/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/require" element={<Recipient/>} />
            </Routes>
            
        </Router>
    )
}

export default MainRoutes