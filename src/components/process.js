import React from 'react'
import processimg from '../images/research.png';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Process = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
  return (
    <div className="font xtra">
      <li data-aos="fade-right"  className="heading-ab">Work Process </li>

      <div  class="timeline">
        <div data-aos="fade-right"  class="container1 left">
          <div class="content">
            <h2 className="number-pro">01</h2>
            <h3 className="tittle-pro">Research</h3>
            <p>We rebrand businesses through a well thoughout analysis on the market, the competitors and the customergroups.</p>
          </div>
        </div>
        <div data-aos="fade-left"  class="container1 process-right">
          <div class="content">
            <h2 className="number-pro">02</h2>
            <h3 className="tittle-pro">Design</h3>
            <p> When we design, it's a creative process in which we use our intuition and analytical ability to understand the opportunities and constraints business goals, competitive markets, customer needs, and technologies present, that envision, communicate, and realize practical solutions that meet customer needs and create business value</p>
          </div>
        </div>
        <div data-aos="fade-right"  class="container1 prcoess-left">
          <div class="content">
            <h2 className="number-pro">03</h2>
            <h3 className="tittle-pro">Development</h3>
            <p>
Our development process is based on the seven stages of the New Product Development process include — idea generation, idea screening, concept development, and testing, building a market strategy, product development, market testing, and market commercialization.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Process
