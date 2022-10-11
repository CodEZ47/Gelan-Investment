import React from "react";
import './home-invest.css';




const HomeInvest = () => {
    return ( 
        <div className="homeinvest-main">
            <div className= 'homeinvest-container'>

                <div className="homeinvest-container_outer_img">
                    <div className="homeinvest-img-inner">
                        <img src='https://images.unsplash.com/photo-1517911041065-4960862d38f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80'  alt="" className="homeinvest-container_img"/>
                    </div>
                </div>

                <div className="homeinvest-container_content">
                    <div className="homeinvest-container_content_inner">
                        <div className="homeinvest-title">
                            <h1>Invest With Us</h1>
                        </div>
                        <div className="homeinvest-par">
                            <p>
                                Cupiditate alias odio omnis minima veritatis saepe porro, repellendus natus vitae, sequi exercitationem ipsam, qui possimus sit eveniet laborum sapiente quisquam quae neque velit? 
                            </p>
                        </div>
                        <div className="homeinvest-btns">
                            <button className='homeinvest-btns_more'> See more </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default HomeInvest;