import React from 'react';
import { HomeHero, HomeOverview, HomeInvest, HomeTestimonial, HomeServices } from "../../containers";
import './home.css'

const Home = () => {
    return ( 
        <div className="home">
            <div className="homehero">
                <HomeHero/>
            </div>
            <div className="homeoverview">
                <HomeOverview/>
            </div>
            <div className="homeinvest">
                <HomeInvest/>
            </div>
            <div className="testimony">
                <HomeServices/>
            </div>
            <div className="testimony">
                <HomeTestimonial/>
            </div>
        </div>
     );
}
 
export default Home;