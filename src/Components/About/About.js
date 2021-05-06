import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div class="container about-me">
                <div class="section-title py-2">
                    <h2>About Me</h2>
                    <p>I am gulam faruk. I am a very sensitive, honest, and cool-minded person as a professional in my work.
                        To say, I have been working and learning about my active activity for almost 3 years online.
                        I am a very professional Web Developer using React.js with MongoDB and Node JS. WordPress theme development expert Although I love SEO and I enjoy Computer-related anything...</p>
                </div>
                <div class="row">
                    <div class="col-md-4" >
                        <img class="img-fluid" src="./images/faruk.png" alt="faruk profile"/>
                    </div>
                    <div class="col-md-8 pt-4 pt-md-0 content" >
                        <h3>Web Designer &amp; Developer</h3>
                        <small> I am a very professional Web Developer using React.js with MongoDB and Node JS. WordPress theme development expert</small>
                        <div class="row pt-2">
                            <div class="col-md-6">
                                <ul>
                                    <li><i class="fas fa-angle-double-right"></i><strong>Birthday :</strong> 1 jan 1999</li>
                                    <li><i class="fas fa-angle-double-right"></i><strong>Website :</strong> <a href="#">www.example.com</a></li>
                                    <li><i class="fas fa-angle-double-right"></i><strong>Phone :</strong> +880 96 9610 3644</li>
                                    <li><i class="fas fa-angle-double-right"></i><strong>Email :</strong> golamfaruk204@gmail.com</li>
                                    <li><i class="fas fa-angle-double-right"></i><strong>City :</strong> Mymensingh, Bangladesh</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul>
                                    <li><i class="fas fa-angle-double-right"></i><strong>Age :</strong> 22 years</li>
                                    <li><i class="fas fa-angle-double-right"></i><strong>Academic Degree :</strong> H.S.C</li>
                                    <li><i class="fas fa-angle-double-right"></i><strong>Freelancing :</strong> Available</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* --===== About End Here=====-- */}

            <div class="counts container mt-3">
                <div class="row">
                    <div class="col-md-6 col-lg-3">
                        <div class="count-box">
                            <i class="fas fa-smile"></i>
                            <span >230</span>
                            <p>Happy Clients </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mt-5 mt-md-0">
                        <div class="count-box">
                            <i class="fas fa-folder-plus"></i>
                            <span >23</span>
                            <p>My Projects </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mt-5 mt-md-0">
                        <div class="count-box">
                            <i class="fas fa-life-ring"></i>
                            <span >230</span>
                            <p>Hours of Support</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mt-5 mt-md-0">
                        <div class="count-box">
                            <i class="fas fa-user-alt"></i>
                            <span >13</span>
                            <p>Hard Worker </p>
                        </div>
                    </div>
                </div>
            </div>   {/* --===== Counts End Here=====-- */}
           
            <div class="skills container">  {/* <!--===== skills container start =====--> */}
                <div class="skill-title">
                    <h2>My Skills</h2>
                </div>
                <div class="row skill-content">
                    <div class="col-md-6">
                        <div class="progress">
                            <span class="skill">HTML, CSS & BOOTSTRAP<i class="val"></i> 90%</span>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    
                        <div class="progress">
                            <span class="skill">JavaScript,JQuery & ReactJS<i class="val"></i> 80%</span>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div class="progress">
                            <span class="skill">Node & Express<i class="val"></i> 70%</span>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="progress">
                            <span class="skill">PHP<i class="val"></i> 70%</span>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="progress">
                            <span class="skill">WordPress<i class="val"></i> 85%</span>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="progress">
                            <span class="skill">MongoDB & MySQL<i class="val"></i> 85%</span>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                <div class="col-md-6">
                    <div id="resume">
                        <p>Hello There,

                            I am Faruk as a professional full-stack web developer. Are you looking for a reliable and expert web developer? you can choose me for any web project. <br/>
                            
                            I am a motivated and skilled person. I can Develop any kind of WordPress theme from any URL or simple image. I can also convert any PSD file to a WordPress Premium Theme. <br/>
                            
                            If you sent me any PSD file, at first I will do convert PSD to HTML , CSS with Bootstrap using JS then I will move to Backend Development proses with WordPress or Node Js using DataBase like My SQL for WordPress or Mongo DB for Node Js. <br/>
                            
                            I will be able to deliver any development project within 3 days. If you need any kind of website design or development then knock me. I will create any kind of website as your requirement. <br/><br/><br/>
                            
                            Thanks <br/>
                            Gulam Faruk</p>
                        <a href="https://drive.google.com/file/d/1DtqN-sNxNjjWt0Q5CcV9UYujANl4jhIC/view?usp=sharing"><input class="btn btn-success" type="button" value="Download CV" /></a>
                    </div>
                </div>
                </div>
            </div>  {/* --===== End Skill =====-- */}

            {/* <!--===== Testimonial Start =====--> */}
        <div class="testimonials container mt-5">
            <div class="section-title">
                <h2>Testimonial</h2>
            </div>
            <div class="row ">
                <div class="col-md-12 col-lg-12">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <div class="feedback shadow p-5 d-flex">
                                <i class="fas fa-quote-left"></i>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid obcaecati voluptas qui molestias labore perspiciatis quidem optio ut. Facilis voluptatem perferendis optio iste aut rem blanditiis nostrum placeat modi culpa.</p>
                                <i class="fas fa-quote-right"></i>
                            </div>
                            <img src="./images/dh-del.jpg" class="rounded-circle testimonial-img" alt="DH DEL" />
                            <h5>DH DEL</h5>
                            <p>Managing Director &amp; Founder</p>
                          </div>
                          <div class="carousel-item ">
                            <div class="feedback shadow p-5 d-flex">
                                <i class="fas fa-quote-left"></i>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid obcaecati voluptas qui molestias labore perspiciatis quidem optio ut. Facilis voluptatem perferendis optio iste aut rem blanditiis nostrum placeat modi culpa.</p>
                                <i class="fas fa-quote-right"></i>
                            </div>
                            <img src="./images/iqubal.jpg" class="rounded-circle testimonial-img" alt="iqubal" />
                            <h5>Iqubal Bengali</h5>
                            <p>CEO&amp; Founder</p>
                          </div>
                          <div class="carousel-item">
                            <div class="feedback shadow p-5 d-flex">
                                <i class="fas fa-quote-left"></i>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid obcaecati voluptas qui molestias labore perspiciatis quidem optio ut. Facilis voluptatem perferendis optio iste aut rem blanditiis nostrum placeat modi culpa.</p>
                                <i class="fas fa-quote-right"></i>
                            </div>
                            <img src="./images/nm-kazi.jpg" class="rounded-circle testimonial-img" alt=" kazi nadim" />
                            <h5>NM KAZI</h5>
                            <p>WordPress Developer &amp; manager</p>
                          </div>
                          <div class="carousel-item">
                            <div class="feedback shadow p-5 d-flex">
                                <i class="fas fa-quote-left"></i>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid obcaecati voluptas qui molestias labore perspiciatis quidem optio ut. Facilis voluptatem perferendis optio iste aut rem blanditiis nostrum placeat modi culpa.</p>
                                <i class="fas fa-quote-right"></i>
                            </div>
                            <img src="./images/delowar.jpg" class="rounded-circle testimonial-img" alt="Delower" />
                            <h5>Delower Hossain</h5>
                            <p>PHP&amp; Laravel Developer</p>
                          </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                </div>
            </div>
        </div>   {/* <!--===== Testimonal End Here =====--> */}
        </section>
    );
};

export default About;