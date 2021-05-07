import React from 'react';
import './MenuBar.css';
import { Link } from 'react-router-dom';


const MenuBar = () => {
    return (
        <nav id="navbar-menu" className="container-fluid navbar navbar-expand-sm sticky-lg-top sticky-xl-top d-md-block d-lg-block">
            <div className="container ">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col-md-4 ">
                        <div className="logo"><Link className="link"  to="/">glm<span>frk</span></Link></div>
                    </div>
                    <div className="col-md-4 ">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item pr-1 mr-3"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item pr-1 mr-3"><Link className="nav-link" to="/about">About</Link></li>
                            <li className="nav-item pr-1 mr-3"><Link className="nav-link" to="/resume">Resume</Link></li>
                            <li className="nav-item pr-1 mr-3"><Link className="nav-link" to="/services">Services</Link></li>
                            <li className="nav-item pr-1 mr-3"><Link className="nav-link" to="/projeccts">Projeccts</Link></li>
                            <li className="nav-item pr-1 mr-3"><Link className="nav-link" to="/blogs">Blogs</Link></li>
                            <li className="nav-item pr-1 mr-0"><Link className="nav-link" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MenuBar;