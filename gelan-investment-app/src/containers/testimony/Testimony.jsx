import './test-style.css'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import Slides from './Slides'
import Profile from '../../assets/profile.jpg';


const Testimony = () => {
    const desc_text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quas consequuntur obcaecati dignissimos necessitatibus officiis, tempora eligendi consequatur voluptatem est amet distinctio ipsam? Suscipit ex aliquid amet neque minus cum!"
    const profile = [
        {photo: {Profile}, title: 'Person #1', desc: desc_text},
        {photo: {Profile}, title: 'Person #2', desc: desc_text},
        {photo: {Profile}, title: 'Person #3', desc: desc_text},
        {photo: {Profile}, title: 'Person #4', desc: desc_text},
        {photo: {Profile}, title: 'Person #5', desc: desc_text},
    ]
    const val = 320
    return (
        <div className='feedback-container'>
            <div className='card-sclider-box'>
                <div className='card'>
                    <MdChevronLeft size={40} className='slider-icons left' onClick={() => {
                        const scroll = document.getElementById('slider-elements')
                        scroll.scrollLeft -= val
                    }}/>
                    <div id='slider-elements' className='slider-elements'>
                        {profile.map((e) =>( <Slides img={e.photo} title={e.title} desc={e.desc}/>))}
                    </div>
                    <MdChevronRight size={40} className='slider-icons right' onClick={() => {
                        const scroll = document.getElementById('slider-elements')
                        scroll.scrollLeft += val
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default Testimony