import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faDownload, faFolderPlus, faSmile, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import profile2 from '../../images/faruk.png';
import dhdel from '../../images/dh-del.jpg';
import iqubal from '../../images/iqubal.jpg';
import nmkazi from '../../images/nm-kazi.jpg';
import delower from '../../images/delowar.jpg';
import alamin from '../../images/alamin.jpg';
import { faLifeRing } from '@fortawesome/free-regular-svg-icons';


const About = () => {
    return (
        <section id="about" classNameName="about">
            <div className="container about-me">
                <div className="section-title py-2">
                    <h2>About Me</h2>
                    <p>I am gulam faruk. I am a very sensitive, honest, and cool-minded person as a professional in my work.
                        To say, I have been working and learning about my active activity for almost 3 years online.
                        I am a very professional Web Developer using React.js with MongoDB and Node JS. WordPress theme development expert Although I love SEO and I enjoy Computer-related anything...</p>
                </div>
                <div className="row">
                    <div className="col-md-4" >
                        <img className="img-fluid" src={profile2} alt="faruk profile"/>
                    </div>
                    <div className="col-md-8 pt-4 pt-md-0 content" >
                        <h3>Web Designer &amp; Developer</h3>
                        <small> I am a very professional Web Developer using React.js with MongoDB and Node JS. WordPress theme development expert</small>
                        <div className="row pt-2">
                            <div className="col-md-6">
                                <ul>
                                    <li><FontAwesomeIcon icon={faAngleDoubleRight} /><strong>Birthday :</strong> 1 jan 1999</li>
                                    <li><FontAwesomeIcon icon={faAngleDoubleRight} /><strong>Website :</strong> <Link to="//localhost:3000/" target="blank">localhost:3000/</Link></li>
                                    <li><FontAwesomeIcon icon={faAngleDoubleRight} /><strong>Phone :</strong> +880 96 9610 3644</li>
                                    <li><FontAwesomeIcon icon={faAngleDoubleRight} /><strong>Email :</strong> golamfaruk204@gmail.com</li>
                                    <li><FontAwesomeIcon icon={faAngleDoubleRight} /><strong>City :</strong> Mymensingh, Bangladesh</li>
                                    
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li><FontAwesomeIcon icon={faAngleDoubleRight} /><strong>Age :</strong> 22 years</li>
                                    <li><FontAwesomeIcon icon={faAngleDoubleRight} /><strong>Academic Degree :</strong> H.S.C</li>
                                    <li><FontAwesomeIcon icon={faAngleDoubleRight} /><strong>Freelancing :</strong> Available</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* --===== About End Here=====-- */}

            <div className="counts container mt-3">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="count-box">
                            <div id="count-icon">
                            <FontAwesomeIcon className="count-box-icon" icon={faSmile} />
                            </div>
                            <span >230</span>
                            <p>Happy Clients </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-5 mt-md-0">
                        <div className="count-box">
                            <div id="count-icon">
                            <FontAwesomeIcon className="count-box-icon" icon={faFolderPlus} />
                            </div>
                            <span >23</span>
                            <p>My Projects </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-5 mt-md-0">
                        <div className="count-box">
                           <div id="count-icon">
                                <FontAwesomeIcon className="count-box-icon " icon={faLifeRing} />
                           </div>
                            <span >230</span>
                            <p>Hours of Support</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-5 mt-md-0">
                        <div className="count-box">
                            <div id="count-icon">
                            <FontAwesomeIcon className="count-box-icon" icon={faUserAlt} />
                            </div> 
                            <span >13</span>
                            <p>Hard Worker </p>
                        </div>
                    </div>
                </div>
            </div>   {/* --===== Counts End Here=====-- */}
           
            <div className="skills container">  {/* <!--===== skills container start =====--> */}
                <div className="skill-title">
                    <h2>My Skills</h2>
                </div>
                <div className="row skill-content">
                    <div className="col-md-6">
                        <div className="progress">
                            <span className="skill">HTML, CSS & BOOTSTRAP<i className="val"></i> 90%</span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    
                        <div className="progress">
                            <span className="skill">JavaScript,JQuery & ReactJS<i className="val"></i> 80%</span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">Node & Express<i className="val"></i> 70%</span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">PHP<i className="val"></i> 70%</span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">WordPress<i className="val"></i> 85%</span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">MongoDB & MySQL<i className="val"></i> 85%</span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                <div className="col-md-6">
                    <div id="resume">
                        <p>Hello There,

                            I am Faruk as a professional full-stack web developer. Are you looking for a reliable and expert web developer? you can choose me for any web project. <br/>
                            
                            I am a motivated and skilled person. I can Develop any kind of WordPress theme from any URL or simple image. I can also convert any PSD file to a WordPress Premium Theme. <br/>
                            
                            If you sent me any PSD file, at first I will do convert PSD to HTML , CSS with Bootstrap using JS then I will move to Backend Development proses with WordPress or Node Js using DataBase like My SQL for WordPress or Mongo DB for Node Js. <br/>
                            
                            I will be able to deliver any development project within 3 days. If you need any kind of website design or development then knock me. I will create any kind of website as your requirement. <br/><br/><br/>
                            
                            Thanks <br/>
                            Gulam Faruk</p>
                        <Link to="//drive.google.com/file/d/1DtqN-sNxNjjWt0Q5CcV9UYujANl4jhIC/view?usp=sharing" target="blank"><button className="btn btn-success"><FontAwesomeIcon color="#ddd" icon={faDownload} /> Download My CV</button></Link>
                    </div>
                </div>
                </div>
            </div>  {/* --===== End Skill =====-- */}

            {/* <!--===== Testimonial Start =====--> */}
        <div className="testimonials container mt-5">
            <div className="section-title">
                <h2>Testimonial</h2>
            </div>
            <div className="row ">
                <div className="col-md-12 col-lg-12">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                    
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="feedback shadow p-5 d-flex">
                                <i className="fas fa-quote-left"></i>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid obcaecati voluptas qui molestias labore perspiciatis quidem optio ut. Facilis voluptatem perferendis optio iste aut rem blanditiis nostrum placeat modi culpa.</p>
                                <i className="fas fa-quote-right"></i>
                            </div>
                            <img src={dhdel} className="rounded-circle testimonial-img" alt="DH DEL" />
                            <h5>DH DEL</h5>
                            <p>Managing Director &amp; Founder</p>
                          </div>
                          <div className="carousel-item ">
                            <div className="feedback shadow p-5 d-flex">
                                <i className="fas fa-quote-left"></i>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid obcaecati voluptas qui molestias labore perspiciatis quidem optio ut. Facilis voluptatem perferendis optio iste aut rem blanditiis nostrum placeat modi culpa.</p>
                                <i className="fas fa-quote-right"></i>
                            </div>
                            <img src={iqubal} className="rounded-circle testimonial-img" alt="iqubal" />
                            <h5>Iqubal Bengali</h5>
                            <p>CEO&amp; Founder</p>
                          </div>
                          <div className="carousel-item">
                            <div className="feedback shadow p-5 d-flex">
                                <i className="fas fa-quote-left"></i>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid obcaecati voluptas qui molestias labore perspiciatis quidem optio ut. Facilis voluptatem perferendis optio iste aut rem blanditiis nostrum placeat modi culpa.</p>
                                <i className="fas fa-quote-right"></i>
                            </div>
                            <img src={nmkazi} className="rounded-circle testimonial-img" alt=" kazi nadim" />
                            <h5>NM KAZI</h5>
                            <p>WordPress Developer &amp; manager</p>
                          </div>
                          <div className="carousel-item">
                            <div className="feedback shadow p-5 d-flex">
                                <i className="fas fa-quote-left"></i>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid obcaecati voluptas qui molestias labore perspiciatis quidem optio ut. Facilis voluptatem perferendis optio iste aut rem blanditiis nostrum placeat modi culpa.</p>
                                <i className="fas fa-quote-right"></i>
                            </div>
                            <img src={delower} className="rounded-circle testimonial-img" alt="Delower" />
                            <h5>Delower Hossain</h5>
                            <p>PHP&amp; Laravel Developer</p>
                          </div>
                          <div className="carousel-item">
                            <div className="feedback shadow p-5 d-flex">
                                <i className="fas fa-quote-left"></i>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid obcaecati voluptas qui molestias labore perspiciatis quidem optio ut. Facilis voluptatem perferendis optio iste aut rem blanditiis nostrum placeat modi culpa.</p>
                                <i className="fas fa-quote-right"></i>
                            </div>
                            <img src={alamin} className="rounded-circle testimonial-img" alt="Delower" />
                            <h5>Alamin Saki</h5>
                            <p>PHP&amp; Python Developer</p>
                          </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                </div>
            </div>
        </div>   {/* <!--===== Testimonal End Here =====--> */}
        </section>
    );
};

export default About;