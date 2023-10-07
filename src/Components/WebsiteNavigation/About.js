import React from 'react'
import NavBar from '../NavBar'
import './about.css'
import './Sri.PNG'
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
                <div className='ourTeam' >
                    <div className='image'>
                        <img src=''/>
                    </div>
                    <h3 className='name'>Sri Hari Krishnan</h3>
                    <p>Full Stack Developer</p>
                </div>
                <div className='ourTeam'>
                    <div className='image'>
                        <img src=''/>
                    </div>
                    <h2 className='name'>Giri Vignesh</h2>
                    <p>IoT Engineer</p>
                </div>
            </div>
        </center>
        </div>
    </>
  )
}
