import React from 'react'
import "./Contactimg.css";
import ContactImg from "../assets/contacts.jpg";

const  Form= () => {
  return (
    <div className="Contactimg" >
    <div className="Contact">
      {/* <img className="contact-bg" src={ContactImg} alt="Contact Image" /> */}
      <div className="Form">
        <form className="Content">
        <label>Name:</label>
        <input type="text"></input>
        <label>Designation:</label>
        <input type="text"></input>
        <label>Address:</label>
        <input type="text"></input>
        <label>Phone Number:</label>
        <input type="text"></input>
        <label>Email ID:</label>
        <input type="text"></input>
    </form>
    </div>
    </div>
    
</div>
)
}

export default Form;