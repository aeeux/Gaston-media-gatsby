import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const OurNumbers = () => {
    useEffect(()=>{
        Aos.init({duration:1500});
    }, []);
    return (
        <div className="font flex-other">
            <li data-aos="zoom-in"  className="heading-ab">Our numbers </li>

            <div data-aos="zoom-in" >
                <h2 className="sub-heading-ab sub-heading-abc">Numbers speak <span className="sub-h-span sub-h-span2">louder than words!</span></h2>
            </div>
            <div data-aos="zoom-in"  className="centering">
                <div className="flexing">
                    <div className="nam nam1">
                        <br /><h2 className="ninenine">99%</h2> <p className="pp">client satisfaction</p>
                    </div>

                    <div className="nam nam2">
                        <br /><h2 className="ninenine">>7 years</h2> <p className="pp">over 7 years of expertise</p>
                    </div>

                    <div className="nam nam3">
                        <br /><h2 className="ninenine">24/7</h2> <p className="pp">daily support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurNumbers