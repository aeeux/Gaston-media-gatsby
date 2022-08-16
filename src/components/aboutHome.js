import React, { useEffect } from 'react'
import box2 from '../images/creativity.jpeg';
import Aos from "aos";
import "aos/dist/aos.css";

const AboutHome = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    }, []);
    return (
        <div >
            <li data-aos="zoom-in" className="heading-ab">What we do </li>

           <div>
            <h2 data-aos="zoom-in" className="sub-heading-ab sub-heading-abcde">Creative solutions <span className="sub-h-span">for impact</span></h2></div>
            <div className="center">
            <p data-aos="zoom-in" className="about-p">We are a creative design and web development agency founded to revolutionize the way you look at digital solutions. we’re a team of passionate and hard working people here to push your business to the next level. What’s not to like?</p>
            <img data-aos="zoom-in" className="img-about" src={box2} alt="Logo" />


            </div>
        </div>
    )
}

export default AboutHome