import React from "react";
import './home-testimonial.css';
import Avatar1 from "../../assets/avatar_1.svg";
import Avatar2 from "../../assets/avatar_2.svg";

const HomeTestimonial = () => {
    return ( 
    
        <div className="home-testimonial">

            <div className="home-testimonial_cards-container">

                <div className="home-testimonial_cards-header">
                    <h1>Testimonials.</h1>
                    <p>See what people are saying.</p>
                </div>

                <div className="home-testimonial_btns">
                <button className="home-testimonial_btns-left"><span>&lt;</span></button>
                </div>
        
                <div className="home-testimonial_multi-card">

                    <div className="home-testimonial_card">
                        <div className="home-testimonial_card-img">
                            <img src={Avatar1} alt="testimonial giver's image"/>
                        </div>

                        <div className="home-testimonial_card-info">
                            <p className="home-testimonial_card-name">
                                John Doe
                            </p>
                            <p className="home-testimonial_card-job">
                                Technical Writer at Microsoft
                            </p>
                        </div>

                        <div className="home-testimonial_card-testimony">
                            <p><span className="home-testimonial_-leftq">&ldquo;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorum architecto repudiandae quo dolor, a amet porro distinctio reiciendis consequatur!</p>
                        </div>
                    </div>
                </div>

                <div className="home-testimonial_btns">
                    <button className="home-testimonial_btns-right"><span>&gt;</span></button>
                </div>

            </div>
        </div>
     );
}
 
export default HomeTestimonial;