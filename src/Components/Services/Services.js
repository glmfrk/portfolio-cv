import { faNodeJs, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Services.css';

const icons1 =  <FontAwesomeIcon icon={faReact} />
const icons2 =  <FontAwesomeIcon icon={faNodeJs} />
const icons3 =  <FontAwesomeIcon icon={faWordpress} />
const servicesData = [
    {
        id:1,
        heading: "Dynamic Website using ReactJS",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae dolorum explicabo obcaecati ipsum, culpa nihil quas magnam suscipit, quae, nisi minus vero nesciunt aspernatur?",
        icon: icons1
    },
    {
        id:2,
        heading: "Full-Stack Website using NodeJS",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae dolorum explicabo obcaecati ipsum, culpa nihil quas magnam suscipit, quae, nisi minus vero nesciunt aspernatur?",
        icon: icons2
    },
    {
        id:3,
        heading: "WordPress Theme development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae dolorum explicabo obcaecati ipsum, culpa nihil quas magnam suscipit, quae, nisi minus vero nesciunt aspernatur?",
        icon: icons3
    },
]

const Services = () => {
    const [services, setServices] = useState(servicesData)

    return (
        // <!--===== Services Section Start Here =====-->
        <section id="services" class="container-fluid mt-5">
            <div class="container">
                <h2>Services</h2>
                <p>My Services</p>
                <div class="row mt-5">

                    {
                        services.map((service) =>{
                            const {id, heading, description, icon } = service;
                            return (
                                <div class="col-sm-12 mb-sm-3 col-md-6  mb-md-3 col-lg-4 col-lg-4 d-flex align-items-stretch">
                                    <div class="icon-box">
                                        <div class="icons d-flex align-items-center justify-content-center"> 
                                            <div className="bx-icon">
                                                {icon}
                                            </div>
                                        </div>
                                        <h4>{heading}</h4>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;