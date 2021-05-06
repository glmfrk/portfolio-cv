import React from 'react';
import './Projeccts.css';

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
                        <div className="project-box"><a href="https://complete-website-client.web.app/"><img src="./images/project1.png" alt="" className="img-fluid" /></a></div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-4 d-flex align-items-stretch">
                        <div className="project-box"><a href="https://condescending-spence-3555fb.netlify.app"><img src="./images/project2.png" alt="" className="img-fluid" /></a></div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-4 d-flex align-items-stretch">
                        <div className="project-box"><a href="https://youthful-bcb-players.netlify.app/"><img src="./images/project3.png" alt="" className="img-fluid" /></a></div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-4 d-flex align-items-stretch">
                        <div className="project-box"><a href="https://glmfrk.github.io/hungry-monster/"><img src="./images/project5.png" alt="" className="img-fluid" /></a></div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-4 d-flex align-items-stretch">
                        <div className="project-box"><a href="https://glmfrk.github.io/responsive-assignment/"><img src="./images/project6.png" alt="" className="img-fluid" /></a></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projeccts;