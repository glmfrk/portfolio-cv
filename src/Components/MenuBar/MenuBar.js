import React from 'react';
import './MenuBar.css';
import { Link, NavLink } from 'react-router-dom';


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
                            <li className="nav-item pr-1 mr-3"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item pr-1 mr-3"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item pr-1 mr-3"><a className="nav-link" href="#resume">Resume</a></li>
                            <li className="nav-item pr-1 mr-3"><a className="nav-link" href="#services">Services</a></li>
                            <li className="nav-item pr-1 mr-3"><a className="nav-link" href="#projects">Projeccts</a></li>
                            <li className="nav-item pr-1 mr-3"><a className="nav-link" href="#blogs">Blogs</a></li>
                            <li className="nav-item pr-1 mr-0"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MenuBar;