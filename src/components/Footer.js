import { React } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./Home";
import Template from "./Template";
import Contact from "./Contact";
import About from "./About";
function Footer() {

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <img src="../logo.png" width={185} alt="Certificate Gen" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <ul class="nav">
                            <li class="nav-item">
                                {/* <a class="nav-link" href="/">Home</a> */}
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#">Templates</a> */}
                                <Link className="nav-link" to='/template'>Templates</Link>

                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#">About Us</a> */}
                                <Link className="nav-link" to='/about'>About Us</Link>

                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="/contact">Contact</a> */}
                                <Link className="nav-link" to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >





        </>
    );
}

export default Footer