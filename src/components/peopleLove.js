import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const PeopleLove = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className="margin-love">
            <li   data-aos="fade-right" className="heading-ab">The people love us </li>

            <div className="loveit">

                <div >
                    <div>
                        <h2 data-aos="fade-right" className="sub-heading-ab sub-heading-abcde">Why people <span className="sub-h-span bold"> love us</span></h2></div>
                    <div className="">
                        <p data-aos="fade-right" className="love-p">We are a creative design and develop agency created to revolutionize the way you look a digital solutions. we’re a team of passioante and hard wokring people here to push your business to the next level. What’s not to like?</p></div>

                </div>
                <div data-aos="fade-left" >
                    <p data-aos="fade-left" className="message message1">Nice people, good communication and an even better digital solution. Thank you for your work!</p>
                    <p data-aos="fade-left" className="message message2">First time working with these guys, and definetly not last time.</p>
                    <p data-aos="fade-left" className="message message3">Amazing results, simply amazing. I'm speechless. I'll be back for sure!</p>
                </div>
            </div>
        </div>
    )
}

export default PeopleLove