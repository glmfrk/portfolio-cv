import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        // <!--===== Contact Section Start Here =====-->
        <section id="contact" class="container-fluid contact mt-5">
            <div class="container">
                <div class="section-title">
                    <h2>Contact </h2>
                    <p>Contact Me</p>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6 d-flex align-items-stretch">
                        <div class="info-box mt-3 p-3">
                            <i class="fas fa-street-view"></i>
                            <h6>My Address</h6>
                            <strong>Trishal, Mymensingh, Bangladesh 2220</strong>
                        </div>
                    </div>
                
                    <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                        <div class="info-box mt-3 p-3">
                            <i class="fas fa-user-plus"></i>
                            <h6>Social Profiles</h6>
                            <div class="social-links d-flex align-items-center p-2">
                                <a href="https://www.facebook.com/gulamfrk/" class="facebook"><i class="m-2 fab fa-facebook"></i></a>
                                <a href="https://www.linkedin.com/in/gulamfaruk/" class="linkedin"><i class="m-2 fab fa-linkedin"></i></a>
                                <a href="https://twitter.com/gulamfaruk_bd" class="twitter"><i class="m-2 fab fa-twitter"></i></a>
                                <a href="https://dev.to/gulamfaruk_bd" class="dev"><i class="m-2 fab fa-dev"></i></a>
                                <a href="https://github.com/glmfrk" class="github"><i class="m-2 fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                        <div class="info-box mt-3 p-3">
                            <i class="fas fa-envelope"></i>
                            <h6>Email Me</h6>
                            <strong>golamfaruk204@gmail.com</strong>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                        <div class="info-box  mt-3 p-3">
                            <i class="fas fa-phone"></i>
                            <h6>Call Now</h6>
                            <strong>+880 96 9610 3644</strong>
                        </div>
                    </div>
                </div>
                {/* <!--===== Contact From =====--> */}
                <form class="my-5 contact-from">
                    <div class="form-row">
                      <div class="col-sm-12 col-md-6 col-lg-4 mb-2">
                        <input type="text" name="urName" class="form-control" placeholder="Your Name" required />
                      </div>
                      <div class="col-sm-12 col-md-6 col-lg-4 mb-2">
                        <input type="email" name="email" class="form-control" placeholder="example@email.com" required />
                      </div>
                      <div class="col-sm-12 col-md-12 col-lg-4 mb-2">
                        <input type="text" class="form-control" name="subject" placeholder="Subject" required />
                      </div>
                      <div class="col-md-12 mb-2">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Message..." required></textarea>
                      </div>
                    </div>
                    <button class="btn btn-success" type="submit">Send Message </button>
                  </form>
            </div>
        </section>
    );
};

export default Contact;