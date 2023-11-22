import React from 'react'
import NavBar from './NavBar'
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
                <a href='https://www.linkedin.com/in/sri-hari-krishnan/' target='_blank' rel='noreferrer' className='linkedinAnchor' >
                    <div className='teamMemberCard' title='click to view LinkedIn Profile' >
                        <div>
                            <img src={Sri} className='teamMemberImage' alt='Not Found'/>
                        </div>
                        <div className='teamCardContent'>
                            <div className='name'>Sri Hari Krishnan</div>
                            <p>Full Stack Developer</p>
                        </div>
                    </div>
                </a>
                    
                <a href='https://www.linkedin.com/in/mb-giri-vignesh/' target='_blank' rel='noreferrer' className='linkedinAnchor' >
                    <div className='teamMemberCard' title='click to view LinkedIn Profile' >
                        <div className='teamMemberImage'>
                            <img src={Giri} className='teamMemberImage' alt='Not Found'/>
                        </div>
                        <div className='teamCardContent'>
                            <div className='name'>Girivignesh</div>
                            <p>IoT Engineer</p>
                        </div>
                    </div>
                </a>
            </div>
        </center>
        </div>
    </>
  )
}
