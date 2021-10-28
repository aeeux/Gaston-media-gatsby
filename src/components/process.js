import React from 'react'
import processimg from '../images/research.png';

const process = () => {
    return (
        <div>
            <li className="heading-ab">Work Process </li>

            <div className="overall-div-process">
                <div className="div-1">
                    <h2 className="number-pro">01</h2>
                    <h3 className="title-pro">Research</h3>
                    <p className="p-pro">We rebrand businesses through a well thoughout analysis on the market, the competitors and the customergroups.</p>
                </div>

                <div className="div-2">
                    <img className="img-p" src={processimg} alt="process img" /></div>
            </div>

        </div>
    )
}

export default process
