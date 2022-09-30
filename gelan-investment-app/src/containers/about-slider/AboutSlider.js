import React, { useState} from 'react';
import './about-slider.css';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from 'react-icons/fa';

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    console.log(current)

    if (!Array.isArray(slides) ||  slides.length <= 0) {
        return null;
    }

return (

    <div className='about-slider-main'>
        <div className="about-slider-container">
            <div className='about-slider-head'>

                <h2>Key Achivement</h2>
                <FaArrowAltCircleLeft className='about-slider-container-left-arrow' onClick={prevSlide}/>
                <FaArrowAltCircleRight className='about-slider-container-right-arrow' onClick={nextSlide}  />

                {SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'about-slider-container-slide active' : 'about-slider-container-slide'} key=
                        {index}>
                        {index === current && (<img src={slide.image} alt='travel image' className='about-slider-image' />
                        )} 
                        
                        </div>
                    )    
                })}
            </div>
        </div>
    </div>
  
);

};

export default Slider;