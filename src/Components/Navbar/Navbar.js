import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home"
                    ><img src="images/bloodmitr.png" alt="" width="150px" height="55px"
                        /></a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul
                            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                            style={{ '--bs-scroll-height': '100px' }}>
                            <li className="nav-item">
                                <Link to="/" className="nav-link navITEM">
                                    VOLUNTEERS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link navITEM">
                                    DONATE
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link navITEM">
                                    FIND A DONOR
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link navITEM">
                                    SPRED AWARENESS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link navITEM">
                                    JOIN US
                                </Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav sideITEMS" style={{ '--bs-scroll-height': '100px' }}>
                            <li className="nav-item">
                                <Link className="nav-link navITEM" aria-current="page" to="/request"
                                >REQUESTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navITEM" to="/logout">LOGIN</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;