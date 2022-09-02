import React from 'react';
import { HomeHero, HomeOverview, HomeInvest, Testimony } from "../../containers";
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
                <Testimony/>
            </div>
        </div>
     );
}
 
export default Home;