import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';
import blog1 from '../../images/blog1webp';
import blog2 from '../../images/blog2';
import blog3 from '../../images/blog3';
import blog4 from '../../images/blog4';
import blog5 from '../../images/blog5';
import blog6 from '../../images/blog-6';

const articles = [
  {
    id:1,
    blogImage:blog1,
    heading:"If possible, submit a proposal before writing the manuscript",
    blog:"Do you know how to write a great blog article? Is there an exact equation or are there certain elements that you must included to have an article be considered “Great” by readers and Google? It’s a tricky task to create content that not only ROCKS a reader, but gets Google.",
    readMore: "continue"
  },
  {
    id:2,
    blogImage:blog2,
    heading:"HTML tags for SEO success",
    blog:"So you created a website and you’re wondering why you don’t have that many visitors? You tried to promote your page using Facebook or Instagram, and even you paid a great amount of money to reach a certain number of visitors? Let me ask you two other questions:",
    readMore: "continue"
  },
  {
    id:3,
    blogImage:blog3,
    heading:"HOW TO WRITE A GREAT BLOG ARTICLE",
    blog:"In the proposal, you need to make clear why the topic is important – and why it is important now. You also need to justify why you should write it. You do not necessarily need to explicitly list the reasons.",
    readMore: "continue"
  },
  {
    id:4,
    blogImage:blog4,
    heading:"If possible, submit a proposal before writing the manuscript",
    blog:"In the proposal, you need to make clear why the topic is important – and why it is important now. You also need to justify why you should write it. You do not necessarily need to explicitly list the reasons.",
    readMore: "continue"
  },
  {
    id:5,
    blogImage:blog5,
    heading:"If possible, submit a proposal before writing the manuscript",
    blog:"In the proposal, you need to make clear why the topic is important – and why it is important now. You also need to justify why you should write it. You do not necessarily need to explicitly list the reasons.",
    readMore: "continue"
  },
  {
    id:6,
    blogImage:blog6,
    heading:"If possible, submit a proposal success",
    blog:"In the proposal, you need to make clear why the topic is important – and why it is important now. You also need to justify why you should write it. You do not necessarily need to explicitly list the reasons.",
    readMore: "continue"
  },
]

const Blogs = () => {
  const [vlogs, setVlogs] = useState(articles);
    return (
        // <!--===== Blogs Section Start Here =====-->
        <section id="blogs" class="container-fluid mt-5">
            <div class="container mt-5">
              <h3>Blogs</h3>
              <h6>My Blogs</h6>
                <div class="row">

                    {
                      vlogs.map((blogs) =>{
                        const {id, blogImage, heading, blog, readMore} = blogs ;
                        return (
                          <div class="col-md-6 col-lg-4">
                          <div class="card" style={{width: '18rem', background: 'rgba(255, 255, 255, 0.027)'}}>
                              <img class="card-img-top" src={blogImage} alt="Card image cap" />
                              <div class="card-body">
                                <h5 class="card-title">{heading}</h5>
                                <p class="card-text">{blog}</p>
                                <Link to="//golamfaruk204.wordpress.com/about-me/" target="blank" class="btn btn-primary">{readMore}</Link>
                              </div>
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

export default Blogs;