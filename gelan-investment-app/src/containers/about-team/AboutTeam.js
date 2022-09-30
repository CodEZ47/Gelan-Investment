import React from 'react';
import './about-team.css';
import  prof  from '../../assets/prof.jpg';
import  proff  from '../../assets/proff.jpg';
import  profff  from '../../assets/profff.jpg';

const Team = () => {
  return (
    <div className="about-team">
      <div className='about-team-container'>

        <h1 className='about-team-container-heading'><span>Meet</span> Our Team</h1>

          <div className='about-team-profiles-container'>

            <div className='about-team-profile'>
              <img src={prof} class='about-team-profile-img' alt='profile pic' />
                <h3 className='about-team-profile-user-name'>Taylor</h3>
                <h5>Creative Director</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente blanditiis minus!</p>
            </div>

            <div className='about-team-profile'>
              <img src={proff} class='about-team-profile-img' alt='profile pic' />
                <h3 className='about-team-profile-user-name'>Taylor</h3>
                <h5>Producer</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente blanditiis minus!</p>
            </div>

            <div className='about-team-profile'>
              <img src={profff} class='about-team-profile-img' alt='profile pic' />
                <h3 className='about-team-profile-user-name'>Taylor</h3>
                <h5>Director</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente blanditiis minus!</p>
            </div>
            
            
          </div>
          
        </div>

    </div>


        
  )
}

export default Team;