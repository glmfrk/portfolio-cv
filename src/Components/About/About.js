import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faDownload, faFolderPlus, faPlus, faQuoteLeft, faQuoteRight, faSmile, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import profile2 from '../../images/faruk.png';
import dhdel from '../../images/dh-del.jpg';
import iqubal from '../../images/iqubal.jpg';
import nmkazi from '../../images/nm-kazi.jpg';
import delower from '../../images/delowar.jpg';
import alamin from '../../images/alamin.jpg';
import { faLifeRing } from '@fortawesome/free-regular-svg-icons';

const icon1 = <FontAwesomeIcon icon={faAngleDoubleRight} />;
const plusIcon = <FontAwesomeIcon className="count-box-icon text-success" icon={faPlus} />
const iconsData = [
    {
        id:1,
        fontAwesomeIcon: icon1,
        infoTitle: "Birthday :",
        info: "1 jan 1999"

    },
    {
        id:2,
        fontAwesomeIcon: icon1,
        infoTitle: "Age :",
        info: "22 Years"

    },
    {
        id:3,
        fontAwesomeIcon: icon1,
        infoTitle: "Website :",
        info: <Link to="//my-portfolio-cv-8980e.web.app/" target="blank">my-portfolio-cv-8980e.web.app</Link>

    },
    {
        id:4,
        fontAwesomeIcon: icon1,
        infoTitle: "Freelancing :",
        info: "Available"

    },
    {
        id:5,
        fontAwesomeIcon: icon1,
        infoTitle: "Phone :",
        info: "+880 96 9610 3644"

    },
    {
        id:6,
        fontAwesomeIcon: icon1,
        infoTitle: "Email :",
        info: "golamfaruk204@gmail.com"

    },
    {
        id:7,
        fontAwesomeIcon: icon1,
        infoTitle: "City :",
        info: "Mymensingh, Bangladesh"

    },

    {
        id:8,
        fontAwesomeIcon: icon1,
        infoTitle: "Academic Degree :",
        info: "H.S.C"

    },
];
const projects = [
    {
        id:1,
        icon: faSmile,
        Icon: plusIcon,
        numbers:30 ,
        title:"Happy Clients"
    },
    {
        id:2,
        icon: faFolderPlus,
        Icon: plusIcon,
        numbers:41 ,
        title:"My Projects"
    },
    {
        id:3,
        icon: faLifeRing,
        Icon: plusIcon,
        numbers:10 ,
        title:"Hours of Support"
    },
    {
        id:4,
        icon: faUserAlt,
        Icon: plusIcon,
        numbers:14 ,
        title:"Hard Worker"
    },
];


const progres = [
    {
        key:1,
        progressTitle: 'HTML, CSS & BOOTSTRAP',
        percent: '%',
        values: 98,
        widths: `width: '98%'`
    },
    {
        key:2,
        progressTitle: 'JavaScript, JQuery & ReactJS',
        percent: '%',
        values: 80,
        widths: `width: '80%'`
    },
    {
        key:3,
        progressTitle: 'NodeJS & ExpressJS',
        percent: '%',
        values: 75,
        widths: `width: '75%'`
    },
    {
        key:4,
        progressTitle: 'OOP PHP',
        percent: '%',
        values: 70,
        widths: `width: '70%'`
    },
    {
        key:5,
        progressTitle: 'PSD to WordPress',
        percent: '%',
        values: 90,
        widths: `width: '90%'`
    },
    {
        key:6,
        progressTitle: 'MySQL & MongoDB',
        percent: '%',
        values: 80,
        widths: `width: '80%'`
    },
];

const reviewData = [
    // {
    //     reviewKey: 1,
    //     reviewMgs: <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat est dicta sunt corporis velit quia doloribus. Est excepturi, repudiandae distinctio consequatur quas, sunt architecto similique iusto nemo voluptatem neque corrupti!</p>,
    //     reviewProfilePic: dhdel,
    //     reviewwer: 'DH DEL',
    //     reviewwerDesignaton: `'Managing Director & Founder from'<span><a class="Company" href="#">easyOne</a></span>`
    // },
    // {
    //     reviewKey: 2,
    //     reviewMgs: <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat est dicta sunt corporis velit quia doloribus. Est excepturi, repudiandae distinctio consequatur quas, sunt architecto similique iusto nemo voluptatem neque corrupti!</p>,
    //     reviewProfilePic: iqubal,
    //     reviewwer: 'Iqubal Bengali',
    //     reviewwerDesignaton: `'CEO & Founder from'<span><a class="Company" href="#">Semi-Academy</a></span>`
    // },
    {
        reviewKey: 3,
        reviewMgs: <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat est dicta sunt corporis velit quia doloribus. Est excepturi, repudiandae distinctio consequatur quas, sunt architecto similique iusto nemo voluptatem neque corrupti!</p>,
        reviewProfilePic: nmkazi,
        reviewwer: 'NM KAZI (WordPress Developer)',
        reviewwerDesignaton: `'Account Managager & MS Office Trainer from'<span><a class="Company" href="#">DSTech IT</a></span>`
    },
    // {
    //     reviewKey: 3,
    //     reviewMgs: <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat est dicta sunt corporis velit quia doloribus. Est excepturi, repudiandae distinctio consequatur quas, sunt architecto similique iusto nemo voluptatem neque corrupti!</p>,
    //     reviewProfilePic: delower,
    //     reviewwer: 'Delower Hossain',
    //     reviewwerDesignaton: `'PHP & Laraver Developer'`
    // },
    // {
    //     reviewKey: 3,
    //     reviewMgs: <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat est dicta sunt corporis velit quia doloribus. Est excepturi, repudiandae distinctio consequatur quas, sunt architecto similique iusto nemo voluptatem neque corrupti!</p>,
    //     reviewProfilePic: alamin,
    //     reviewwer: 'Alamin Saki',
    //     reviewwerDesignaton: `'PHP & Python Developer'`
    // },
]

const About = () => {
 
    const [detailsBio, setDetailsBio] = useState(iconsData);
    const [projetData, setProjectDta] = useState(projects)
    return (
        <section id="about" classNameName="about">
            <div className="container about-me">
                <div className="section-title py-2 mb-2">
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
                        <h3></h3>
                        <small> </small>
                        <div className="row pt-2">
                                {
                            detailsBio.map((bio) =>{
                                const {id,fontAwesomeIcon,infoTitle,info} = bio;
                                    return (
                                        <div className="col-md-6">
                                            <ul>
                                                <li>{fontAwesomeIcon}<strong>{infoTitle}:</strong> {info} </li>
                                            </ul>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>  


                </div>
            </div> {/* --===== About End Here=====-- */}

            <div className="counts container mt-3">
                <div className="row">
                    {
                        projetData.map((projets) =>{
                            const {id,icon,Icon,numbers,title} = projets;
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
                                    <div className="count-box">
                                        <div id="count-icon">
                                        <FontAwesomeIcon className="count-box-icon" icon={icon} />
                                        </div>
                                        <span>{numbers} {Icon}</span>
                                        <p>{title}</p>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>
            </div>   {/* --===== Counts End Here=====-- */}
           
            <div className="skills container">  {/* <!--===== skills container start =====--> */}
                <div className="skill-title mb-3">
                    <h2>My Skills</h2>
                </div>
                <div className="row skill-content">
                    <div className="col-md-6">
                        {
                            progres.map((progBar) =>{
                                const {key,progressTitle,percent,values, widths} = progBar;
                                return (
                                    <div className="progress-wraper">
                                        <span className="skill ">{progressTitle} {values}{percent}</span>
                                        <div class="progress mt-2">
                                            <div class="progress-bar" role="progressbar" style={{width: '90%'}}  aria-valuenow={values} aria-valuemin="0" aria-valuemax="100">{values}{percent}</div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                <div className="col-md-6">
                    <div id="resume">
                        <strong>Subject: Application for the post of "my client"</strong>
                        <p>Dear Client,<br/>

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
                            {
                                reviewData.map((reviews) =>{
                                    const {reviewKey,reviewMgs,reviewProfilePic,reviewwer,reviewwerDesignaton} = reviews;
                                    return (
                                        <div className="carousel-item active">
                                          
                                            <div className="feedback shadow p-5 d-flex">
                                                <FontAwesomeIcon icon={faQuoteLeft} />
                                                <article>
                                                    {reviewMgs}
                                                </article>
                                                    
                                                <FontAwesomeIcon icon={faQuoteRight} />
                                            </div>
                                            <img src={reviewProfilePic} className="rounded-circle testimonial-img" alt="DH DEL" />
                                            <h5>{reviewwer}</h5>
                                            <p></p>
                                           
                                        </div>
                                    );
                                })
                            }


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