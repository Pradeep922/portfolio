import "./Background.css";
import React from 'react'
import IntroImage from '../assets/bg.jpg';

const Background = () => {
  return (
    <div className='BG'>
        <div className='system'>
        <img className='intro-bg' src={IntroImage} alt='Intro Image' />        
        </div>
        <div className='content'>
            <h1>Welcome to my Resume</h1>
        </div>
    </div>
  )
}

export default Background;