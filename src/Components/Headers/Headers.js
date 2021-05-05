import React, { useState } from 'react';
import './Headers.css';
import profile from '../../images/profile.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import TypewriterComponent, { TypewriterClass } from 'typewriter-effect';

const Headers = () => {
    const [state] = useState({
        title: "Hello, guy's...",
        myName: "I am  Gulam Faruk...! ",
        image: profile
    })
    return (
        <header id="header" classNameName="container-fluid">
            <div className="container py-3">
                <div className="row d-flex  justify-content-center align-items-center">
                    <div className="col-md-6">
                        <h1 className="text-muted">{state.title}</h1>
                        <h3 className="text-secondary"> <span className="text-warning"> 
                            <TypewriterComponent 
                                options={{
                                    autoStart:true,
                                    loop:true,
                                    delay:40,
                                    strings:[
                                        "I am I'm Gulam Faruk...! ",
                                        "I am Mern Stack Developer...! ",
                                        "I am WorPress Developer...! ",
                                        "I am SEO Expert...! ",
                                        "I am Student & Tech Learner!!!... "
                                    ]
                                }}
                            />
                            </span></h3>
                            <p>"Would you like me to give you a formula for success? It's quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn't at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that's where you will find success." <strong>-- Thomas J. Watson</strong></p>
                        <Link to="https://drive.google.com/file/d/1DtqN-sNxNjjWt0Q5CcV9UYujANl4jhIC/view?usp=sharing"><button className="btn btn-success" type="submit">Hire Me</button></Link>
                        {/* --===== Social Links =====-- */}
                        <div className="social-links my-3">
                            <Link to="https://www.facebook.com/gulamfrk/" className="facebook"><FontAwesomeIcon icon={faFacebook} /></Link>
                            <Link to="https://twitter.com/gulamfaruk_bd" className="twitter"><FontAwesomeIcon icon={faTwitter} /></Link>
                            <Link to="https://www.linkedin.com/in/gulamfaruk/" className="linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                            <Link to="https://github.com/glmfrk" className="github"><FontAwesomeIcon icon={faGithub} /></Link>
                        </div>
                    </div>
                    <div className="col-md-6 profileImg  ">
                        <img src={state.image}  alt="faruk" className="img-fluid rounded circle"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Headers;