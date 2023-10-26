import React from 'react'
import NavBar from '../NavBar'
import './about.css'
import Sri from './Sri.PNG'
import Giri from './Giri.JPG'
export default function About() {
  return (
    <>
        <NavBar/>
        <div className='aboutBG'>
        <center>
            <div className='storyContainer'>
                <div className='aboutOurStoryHead'>
                    Our Story
                </div>
                <div className='aboutOurStoryContent'>
                    <p>We are students from Software Development and Architecture for IoT. We designed this application to keep track of the energy consumption in our campus</p>
                </div>
            </div>
            <div className='teamContainer'>
                <div className='teamMemberCard' >
                    <div>
                        <img src={Sri} className='teamMemberImage' alt='Image Not Found'/>
                    </div>
                    <div className='teamCardContent'>
                        <div className='name'>Sri Hari Krishnan</div>
                        <p>Full Stack Developer</p>
                    </div>
                </div>
                <div className='teamMemberCard'>
                    <div className='teamMemberImage'>
                        <img src={Giri} className='teamMemberImage' alt='Image Not Found'/>
                    </div>
                    <div className='teamCardContent'>
                        <div className='name'>Girivignesh</div>
                        <p>IoT Engineer</p>
                    </div>
                </div>
            </div>
        </center>
        </div>
    </>
  )
}
