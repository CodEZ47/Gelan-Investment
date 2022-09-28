import React from "react";
import './opportunities-invest.css';


const OpportunitiesInvest = () => {

    const steps = document.querySelectorAll(".opportunities-invest_container-item");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry =>{
                entry.target.classList.toggle("show", entry.isIntersecting);
                // if(entry.isIntersecting) observer.unobserve(entry.target);
            })
        },{
            threshold: 1
        }
    )

    steps.forEach(step =>{
        observer.observe(step);
    })


    return ( 
        <div className="opportunities-invest">
            <div className="opportunities-invest_container-title">
                <h1>Investment Process</h1>
            </div>

            <div className="opportunities-invest_container">
                <div className="opportunities-invest_container-item">
                    <div className="opportunities-invest_container-item-inner">
                        <div className="flip-card-front">
                            <p>Step-1</p>
                        </div>
                        <div className="flip-card-back">
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>
                
                <div className="opportunities-invest_container-item">
                    <div className="opportunities-invest_container-item-inner">
                        <div className="flip-card-front">
                            <p>Step-2</p>
                        </div>
                        <div className="flip-card-back">
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>

                <div className="opportunities-invest_container-item">
                    <div className="opportunities-invest_container-item-inner">
                        <div className="flip-card-front">
                            <p>Step-3</p>
                        </div>
                        <div className="flip-card-back">
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>

                <div className="opportunities-invest_container-item">
                    <div className="opportunities-invest_container-item-inner">
                        <div className="flip-card-front">
                            <p>Step-4</p>
                        </div>
                        <div className="flip-card-back">
                             <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>

                <div className="opportunities-invest_container-item">
                    <div className="opportunities-invest_container-item-inner">
                        <div className="flip-card-front">
                            <p>Step-5</p>
                        </div>
                        <div className="flip-card-back">
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>

                <div className="opportunities-invest_container-item">
                    <div className="opportunities-invest_container-item-inner">
                        <div className="flip-card-front">
                            <p>Step-6</p>
                        </div>
                        <div className="flip-card-back">
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>

                <div className="opportunities-invest_container-item">
                    <div className="opportunities-invest_container-item-inner">
                        <div className="flip-card-front">
                            <p>Step-7</p>
                        </div>
                        <div className="flip-card-back">
                        <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default OpportunitiesInvest;