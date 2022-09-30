import React from 'react';
import { AboutCards, AboutSlider, AboutTeam } from "../../containers";

const About = () => {
    return ( 
        <div className="about">
            <div className="about-cards">
                <AboutCards/>
            </div>

            <div className="about-team">
                <AboutTeam/>
            </div>

            {/* <div className="about-slider">
                <AboutSlider/>
            </div> */}
        </div>
     );
}
 
export default About;