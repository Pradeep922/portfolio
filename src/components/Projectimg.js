import React from "react";
import "./Projectimg.css";
import Projectimg from "../assets/projects.jpg";

const ProjectList = () => {
  return (
    <div className="ProjectList">
      <div className="Project">
        <img className="project-bg" src={Projectimg} alt="Project Image" />
      </div>
      <div className="Content">
        <h1>Here are some of my Works</h1>
        <h2>CRM Application</h2>
        <p>
          An CRM Application where only an Admin is able to create Tickets whereas an Manager has only the View Option.
        </p>
        <a href="https://github.com/Pradeep922/crm-react.git">Git Front-End</a><br />
        <a href="https://github.com/Pradeep922/CRM-Node.git">Git Back-End</a>
        <h2>User-Form</h2>
        <p>User Form where an User is able to add his Name and Age and store them.</p>
        <a href="https://github.com/Pradeep922/Form.git">Git Front-End</a>
        <h2>YouTube Clone</h2>
        <p>YouTube Clone with the API of YouTube.</p>
        <a href="https://github.com/Pradeep922/YT-Clone.git">Git Front-End</a>
      </div>
    </div>
  );
};

export default ProjectList;
