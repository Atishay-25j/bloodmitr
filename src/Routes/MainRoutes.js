import React from "react";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Home from "../Pages/Home";
import Donate from "../Pages/Donate";
function MainRoutes() {
    return (
        <Router>
            <Routes>
            <Route  path="/" element={<Home/>} />
            <Route path="/donate" element = {<Donate/>} />
            </Routes>
            
        </Router>
    )
}
export default MainRoutes