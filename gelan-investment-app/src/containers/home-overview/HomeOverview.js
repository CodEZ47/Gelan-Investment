import React from "react";
import './home-overview.css';




const HomeOverview = () => {
    return ( 
        <div className="homeoverview-main">
            <div className= 'homeoverview-container'>
                <div className="homeoverview-container_content">
                    <div className="homeoverview-container_content_inner">
                        <div className="homeoverview-title">
                            <h1>Overview of Gelan City</h1>
                        </div>
                        <div className="homeoverview-par">
                            <p>
                                Cupiditate alias odio omnis minima veritatis saepe porro, repellendus natus vitae, sequi exercitationem ipsam, qui possimus sit eveniet laborum sapiente quisquam quae neque velit? 
                            </p>
                        </div>
                        <div className="homeoverview-btns">
                            <button className='homeoverview-btns_more'> See more </button>
                        </div>
                    </div>
                </div>
                <div className="homeoverview-container_outer_img">
                    <div className="homeoverview-img-inner">
                        <img src='https://images.unsplash.com/photo-1517911041065-4960862d38f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80'  alt="" className="homeoverview-container_img"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HomeOverview;