import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projeccts.css';
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';
import project5 from '../../images/project5.PNG';
import project6 from '../../images/project6.PNG';


const ProjectData =[{
    id:1,
    title: 'Nephron Coaching',
    category: 'full-stack',
    project: project1
},
{
    id:2,
    title: 'React Shop',
    category: 'reactjs',
    project: project2
},
{
    id:3,
    title: 'BCB ALL Players',
    category: 'web-design',
    project: project3
},
{
    id:4,
    title: 'Natural Pencil Drawing',
    category: 'wordpress',
    project: project6
},
{
    id:5,
    title: 'Food Commerce',
    category: 'wordpress',
    project: project5
},
]
const Projeccts = () => {
    const [portfolio, setPortfolio] = useState(ProjectData);
    const fillterItems = (cateItems) =>{
        const updateItems = ProjectData.filter((currentElement) =>{
            return currentElement.category === cateItems;
        });
        setPortfolio(updateItems);
    }
    return (
        // <!--===== My Projeccts =====-->
        <section id="projects" className="container-fluid projects my-5">
            <div className="container">
                <div className="section-title">
                    <h3>Projeccts</h3>
                    <h6>My Projeccts</h6>
                    <div className="row">
                        <div className="col-md-10">
                            <button onClick={() => fillterItems('full-stack')} className="btn btn-warning mr-3">WordPress</button>
                            <button onClick={() => fillterItems('reactjs')} className="btn btn-warning mr-3">WordPress</button>
                            <button onClick={() => fillterItems('web-design')} className="btn btn-warning mr-3">WordPress</button>
                            <button onClick={() => fillterItems('psd')} className="btn btn-warning mr-3">WordPress</button>
                            <button onClick={() => fillterItems('wordpress')} className="btn btn-warning mr-3">WordPress</button>
                            <button onClick={() => setPortfolio(ProjectData)} className="btn btn-warning mr-3">ALL</button>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {
                        portfolio.map((elements) =>{
                            const {id,title,category,project} =elements;
                            return(
                                <div className="col-md-6 col-lg-4 mt-4 d-flex align-items-stretch">
                                    <div className="project-box mb-4">
                                        <h5 className="text-light"><Link to="//complete-website-client.web.app/" target="blank">{title}</Link></h5>
                                        <img src={project} alt={title} />
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

export default Projeccts;