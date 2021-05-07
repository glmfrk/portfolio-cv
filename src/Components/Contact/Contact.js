import { faDev, faFacebook, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt, faStreetView, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        // <!--===== Contact Section Start Here =====-->
        <section id="contact" className="container-fluid contact mt-5">
            <div className="container">
                <div className="section-title">
                    <h2>Contact </h2>
                    <p>Contact Me</p>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6 d-flex align-items-stretch">
                        <div className="info-box mt-3 p-3">
                            <div classNameName="info-icon">
                                <FontAwesomeIcon className="svgIcon" icon={faStreetView} /> 
                            </div>
                            <h6>My Address</h6>
                            <strong>Trishal, Mymensingh, Bangladesh 2220</strong>
                        </div>
                    </div>
                
                    <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                        <div className="info-box mt-3 p-3">
                            <div classNameName="info-icon">
                                <FontAwesomeIcon className="svgIcon" icon={faUserPlus} /> 
                            </div>
                            <h6>Social Profiles</h6>
                            <div className="social-links d-flex align-items-center justify-content-center p-2">
                                <a href="https://www.facebook.com/gulamfrk/" className="facebook p-3 mr-2"><span className=""><FontAwesomeIcon  icon={faFacebook} /></span></a>
                                <a href="https://www.linkedin.com/in/gulamfaruk/" className="linkedin p-3 mr-2"><span className=""><FontAwesomeIcon  icon={faLinkedinIn} /></span></a>
                                <a href="https://twitter.com/gulamfaruk_bd" className="twitter p-3 mr-2"><span className=""><FontAwesomeIcon  icon={faTwitter} /></span></a>
                                <a href="https://dev.to/gulamfaruk_bd" className="dev p-3 mr-2"><span className=""><FontAwesomeIcon  icon={faDev} /></span></a>
                                <a href="https://github.com/glmfrk" className="github p-3 mr-2"><span className=""><FontAwesomeIcon  icon={faGithub} /></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                        <div className="info-box mt-3 p-3">
                            <div classNameName="info-icon">
                                <FontAwesomeIcon className="svgIcon" icon={faEnvelope} /> 
                            </div>
                            <h6>Email Me</h6>
                            <strong>golamfaruk204@gmail.com</strong>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                        <div className="info-box  mt-3 p-3">
                            <div classNameName="info-icon">
                                <FontAwesomeIcon className="svgIcon" icon={faPhoneAlt} /> 
                            </div>
                            <h6>Call Now</h6>
                            <strong>+880 96 9610 3644</strong>
                        </div>
                    </div>
                </div>
                {/* <!--===== Contact From =====--> */}
                <form className="my-5 contact-from">
                    <div className="form-row">
                      <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
                        <input type="text" name="urName" className="form-control" placeholder="Your Name" required />
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
                        <input type="email" name="email" className="form-control" placeholder="example@email.com" required />
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-4 mb-2">
                        <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                      </div>
                      <div className="col-md-12 mb-2">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Message..." required></textarea>
                      </div>
                    </div>
                    <button className="btn btn-success" type="submit">Send Message </button>
                  </form>
            </div>
        </section>
    );
};

export default Contact;