import './navbar.css'
import logo from '../../assets/logo.jpg';
import { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

const link_elements = () => (
    <>
    <p><a href="#">Home</a></p>
    <p><a href="#">About Us</a></p>
    <p><a href="#">Oppotunities</a></p>
    <p><a href="#">Services</a></p>
    <p><a href="#">Contact Us</a></p>
    </>
)

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='navbar'>
            <div className='navbar_logo'>
                <img src={logo} />
            </div>
            <div className='navbar-links'>
               {link_elements()}
            </div>
            {/* Responsive Feature */}
            <div className='navbar_menu'>
                {
                toggle ? 
                <RiCloseLine style={{cursor: 'pointer'}} onClick={() => setToggle(false)} /> :
                <RiMenu3Line style={{cursor: 'pointer'}} onClick={() => setToggle(true)} />
                }
                {toggle && (
                    <div className='navbar_menu_container'>
                        <div className='navbar_menu_container_links slide-fwd-center'>
                            {link_elements()}
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Navbar