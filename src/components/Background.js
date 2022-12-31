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
            <h1><b>Welcome to my Profile</b></h1>
            <h1><b>I specialize in developing and deploying responsive websites and web applications</b></h1>
        </div>
    </div>
  )
}

export default Background;