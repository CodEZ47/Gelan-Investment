import React from 'react';
import './about-cards.css';
import prof from '../../assets/prof.jpg';


const Cards = () => {
    return (
        <div className='about-cards_container'>
           <div className='about-cards_card'>
            <div className="about-cards_card-image"></div>
            <div className="about-cards_card-title">Mission</div>
            <div className="about-cards_card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci porro molestias nihil!
            </div>
        </div> 

         <div className='about-cards_card'>
            <div className="about-cards_card-image" >
            </div>
            <div className="about-cards_card-title">Vision</div>
            <div className="about-cards_card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci porro molestias nihil!
            </div>
        </div> 

         <div className='about-cards_card'>
            <div className="about-cards_card-image"></div>
            <div className="about-cards_card-title">Value</div>
            <div className="about-cards_card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci porro molestias nihil!
            </div>
        </div> 
        </div>

        

    
  )
}

export default Cards;