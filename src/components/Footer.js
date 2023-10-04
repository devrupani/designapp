import { React } from "react";
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Avatar } from "@mui/material";
function Footer() {

    const colorStyle = { backgroundColor: '#71BFBC' }

    return (
        <>
            <div className="container-fluid mt-5" style={{ backgroundColor: '#98d1cf', padding: '20px' }}>

                <div className="row  m-5">
                    <div className="col-xs-12 col-sm-12 col-md-4 " >
                        <img src="../logo-footer2.png" className="p-2" width={200} alt="Certificate Gen" />

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8 ">
                        <ul class="nav font-poppins">
                            <li class="nav-item">
                                <Link className="nav-link  text-white" to='/'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link text-white" to='/template'>Templates</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link text-white" to='/about'>About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link text-white" to='/contact'>Contact</Link>
                            </li>

                            <li class="nav-item mx-5">
                                <Avatar style={colorStyle}><GitHubIcon></GitHubIcon></Avatar>
                            </li>
                            <li class="nav-item">
                                <Avatar style={colorStyle}><LinkedInIcon></LinkedInIcon></Avatar>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12">
                        <div className="text-center text-white">
                            <b>Copyright © 2023 CertificateGen
                            </b>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Footer