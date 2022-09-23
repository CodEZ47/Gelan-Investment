import React from 'react';
import { AgriSvg, IndSvg, ManSvg, SerSvg } from '../../assets';
import './opportunities-main.css';

const OpportunitiesMain = () => {

    return (
        <div className="opportunities-main">
            <div className="opportunities-main_title">
                <h1>Opportunities in Gelan</h1>
            </div>
            <div className="opportunities-main_container">
                <div className="opportunities-main_inner-container">

                    <div className="opportunities-main_card">
                        <div className="face face1 .opportunities-main_card-right">
                            <div className="opportunities-main_card-content">
                                <img src={AgriSvg}/>
                                <h3>Agriculture</h3>
                            </div>
                        </div>
                        <div className="face face2 opportunities-main_card-right">
                            <div className="opportunities-main_card-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                    <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="opportunities-main_card">
                        <div className="face face1 opportunities-main_card-left">
                            <div className="opportunities-main_card-content">
                                <img src={IndSvg}/>
                                <h3>Industry</h3>
                            </div>
                        </div>
                        <div className="face face2 opportunities-main_card-left">
                            <div className="opportunities-main_card-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                    <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="opportunities-main_card">
                        <div className="face face1 opportunities-main_card-right">
                            <div className="opportunities-main_card-content">
                                <img src={ManSvg}/>
                                <h3>Manufacturing</h3>
                            </div>
                        </div>
                        <div className="face face2 opportunities-main_card-right">
                            <div className="opportunities-main_card-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                    <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="opportunities-main_card">
                        <div className="face face1 opportunities-main_card-left">
                            <div className="opportunities-main_card-content">
                                <img src={SerSvg}/>
                                <h3>More</h3>
                            </div>
                        </div>
                        <div className="face face2 opportunities-main_card-left">
                            <div className="opportunities-main_card-content">
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

export default OpportunitiesMain;