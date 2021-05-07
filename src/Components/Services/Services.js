import { faNodeJs, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Services.css';

const Services = () => {
    return (
        // <!--===== Services Section Start Here =====-->
        <section id="services" class="container-fluid mt-5">
            <div class="container">
                <h2>Services</h2>
                <p>My Services</p>
                <div class="row">
                    <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
                        <div class="icon-box">
                            <div class="icons d-flex align-items-center justify-content-center"> 
                                <div className="bx-icon">
                                    <FontAwesomeIcon icon={faReact} />
                                </div>
                            </div>
                            <h4>Dynamic Website using ReactJS</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae dolorum explicabo obcaecati ipsum, culpa nihil quas magnam suscipit, quae, nisi minus vero nesciunt aspernatur?</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 d-flex align-items-stretch mt-4 mt-lg-0">
                        <div class="icon-box">
                            <div class="icons d-flex align-items-center justify-content-center">
                                <div className="bx-icon">
                                    <FontAwesomeIcon icon={faNodeJs} />
                                </div>
                            </div>
                            <h4>Full-Stack Website using NodeJS</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae dolorum explicabo obcaecati ipsum, culpa nihil quas magnam suscipit, quae, nisi minus vero nesciunt aspernatur?</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 d-flex align-items-stretch mt-4 mt-lg-0">
                        <div class="icon-box">
                            <div class="icons d-flex align-items-center justify-content-center">
                                <div className="bx-icon">
                                    <FontAwesomeIcon icon={faWordpress} />
                                </div>
                            </div>
                            <h4>WordPress Theme development</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae dolorum explicabo obcaecati ipsum, culpa nihil quas magnam suscipit, quae, nisi minus vero nesciunt aspernatur?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;