import React from 'react';
import { Link } from 'react-router-dom';
import './Projeccts.css';
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';
import project5 from '../../images/project5.PNG';
import project6 from '../../images/project6.PNG';

const Projeccts = () => {
    return (
        // <!--===== My Projeccts =====-->
        <section id="projects" className="container-fluid projects mt-5">
            <div className="container">
                <div className="section-title">
                    <h3>Projeccts</h3>
                    <h6>My Projeccts</h6>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4 mt-4 d-flex align-items-stretch">
                        <div className="project-box"><Link to="//complete-website-client.web.app/" target="blank"><img src={project1} alt="" className="img-fluid" /></Link></div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-4 d-flex align-items-stretch">
                        <div className="project-box"><Link to="//condescending-spence-3555fb.netlify.app" target="blank"><img src={project2} alt="" className="img-fluid" /></Link></div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-4 d-flex align-items-stretch">
                        <div className="project-box"><Link to="//youthful-bcb-players.netlify.app/" target="blank"><img src={project3} alt="" className="img-fluid" /></Link></div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-4 d-flex align-items-stretch">
                        <div className="project-box"><Link to="//glmfrk.github.io/hungry-monster/" target="blank"><img src={project5} alt="" className="img-fluid" /></Link></div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-4 d-flex align-items-stretch">
                        <div className="project-box"><Link to="//glmfrk.github.io/responsive-assignment/" target="blank"><img src={project6} alt="" className="img-fluid" /></Link></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projeccts;