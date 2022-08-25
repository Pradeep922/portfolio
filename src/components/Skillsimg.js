import React from 'react';
import "./Skillsimg.css";
import SkillImage from "../assets/skills.jpg";


const Skillimg = () => {
    return (
      <div className="Skillimg">
        <div className="Skills">
          <img className="Skill-bg" src={SkillImage} alt="Skill Image" />
        </div>
        <div className="content">
          <h1>Here are some of my skills</h1>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node JS</li>
            <li>SQL</li>
            <li>Mongodb</li>
          </ul>
        </div>
      </div>
    );
  };
  

export default Skillimg;