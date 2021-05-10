import React from 'react';
import './Home.css'
import MenuBar from '../MenuBar/MenuBar';
import Headers from '../Headers/Headers';
import About from '../About/About';
import Services from '../Services/Services';
import Projeccts from '../Projeccts/Projeccts';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
          <MenuBar /> 
          <Headers />
          <About />
          <Services />
          <Projeccts />
          <Blogs />
          <Contact />

          {/* <!--===== Footer Section =====--> */}
          <footer id="footer" class="container-fluid mb-3">
              <div class="container">
                  <row>
                      <div class="col">
                          <strong>&copy; Powered by <Link to="//www.facebook.com/gulamfrk" target="blank"> Gulam Faruk</Link></strong>
                      </div>
                  </row>
              </div>
          </footer>
        </>
    );
};

export default Home;