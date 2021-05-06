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
                                <i class="bx1 fab fa-react"></i>
                            </div>
                            <h4><a href="#">Dynamic Website using ReactJS</a></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae dolorum explicabo obcaecati ipsum, culpa nihil quas magnam suscipit, quae, nisi minus vero nesciunt aspernatur?</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 d-flex align-items-stretch mt-4 mt-lg-0">
                        <div class="icon-box">
                            <div class="icons d-flex align-items-center justify-content-center">
                                <i class="bx1 fab fa-node-js"></i>
                            </div>
                            <h4><a href="#"> Full-Stack Website using NodeJS</a></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae dolorum explicabo obcaecati ipsum, culpa nihil quas magnam suscipit, quae, nisi minus vero nesciunt aspernatur?</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 d-flex align-items-stretch mt-4 mt-lg-0">
                        <div class="icon-box">
                            <div class="icons d-flex align-items-center justify-content-center">
                                <i class="bx1 fab fa-wordpress"></i>
                            </div>
                            <h4><a href="#">WordPress Theme development</a></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae dolorum explicabo obcaecati ipsum, culpa nihil quas magnam suscipit, quae, nisi minus vero nesciunt aspernatur?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;