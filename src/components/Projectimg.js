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
        <h2>CC Tool </h2>
        <p>
          An Internal Tool which is used for creating and editing Boards that
          are used for the Website as a part of Course Creation. An Tool where
          the User has the ability to create, edit and delete the Boards based
          on the Requirements of the Client and allows them to add Assets for
          the Boards too based on each board type
        </p>
        <h2>Web Page </h2>
        <p>Designing Webpage for each page of the Website for different Clients and makes the changes according to the requirements of the Client.</p>
      </div>
    </div>
  );
};

export default ProjectList;
