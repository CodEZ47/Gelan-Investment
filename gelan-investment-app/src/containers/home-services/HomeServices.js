import React from 'react';
import { AgriSvg, IndSvg, ManSvg, SerSvg } from '../../assets';
import './home-services.css';

const HomeServices = () => {

    return (
        <div className="home-services">
            <div className="home-services_title">
                <h1>Services We Offer</h1>
            </div>
            <div class="home-services_container">
                <div className="home-services_inner-container">
                    <div class="home-services_card">
                        <div class="face face1">
                            <div class="home-services_card-content">
                                <img src={AgriSvg}/>
                                <h3>Agriculture</h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="home-services_card-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                    <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="home-services_card">
                        <div class="face face1">
                            <div class="home-services_card-content">
                                <img src={IndSvg}/>
                                <h3>Industry</h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="home-services_card-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                    <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="home-services_card">
                        <div class="face face1">
                            <div class="home-services_card-content">
                                <img src={ManSvg}/>
                                <h3>Manufacturing</h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="home-services_card-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                    <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="home-services_card">
                        <div class="face face1">
                            <div class="home-services_card-content">
                                <img src={SerSvg}/>
                                <h3>More</h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="home-services_card-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                    <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default HomeServices;