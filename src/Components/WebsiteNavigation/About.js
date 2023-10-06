import React from 'react'
import NavBar from '../NavBar'

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
                {/* <div className='' */}
            </div>
        </center>
        </div>
    </>
  )
}
