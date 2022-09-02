import './test-style.css'
import imgs from '../../assets/profile.jpg'
const Slides = ({img, title, desc}) => {

    return (
        <div className='slider-card'>
            <div className='slider-image' style={{backgroundImage: `url(${imgs})`}}></div>
            <div className='slider-review'>
                <p className='slide-card-title'>{title}</p>
                <p className='slide-card-desc'>{desc} </p>
            </div>
        </div>
    )
}

export default Slides