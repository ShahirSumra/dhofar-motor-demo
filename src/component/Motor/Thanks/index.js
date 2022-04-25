import React from "react";
import "./thanks.css";
import { Link } from "react-router-dom";
import success from "../../../static/images/success.png";
import email from "../../../static/images/motor-images/email.png";
import phone from "../../../static/images/motor-images/phone-call.png";
import ThanksImg from "../../../static/images/motor-images/thanks.png";

class MotorThanks extends React.Component{
  

  render(){
    return(
      <div className="row min-vh-100 align-items-md-center justify-content-md-center">
        <div className="gradient-bg w-100  pc pb-md-4 pt-md-4 text-center bg-pink">
          <div className="d-flex justify-content-center align-items-center mt-5 mt-md-3">
            <img src={success} alt="Successfully done" className="success-img" />
          </div>
          <div className="greetings-text mt-5">
            Thankyou!
          </div>
          <div className="subheading-greetings-text">
            We are glad that you chose us.
          </div>
          <img src={ThanksImg} alt="Thanks" className="thanks-img" />
          <Link to="/">
            <button className="motor-common-btn mb-4 mt-4 mb-md-4 " onClick={() => sessionStorage.clear()}>Go to home</button>
          </Link>
          <div className="d-flex align-items-center justify-content-between thanks-contact-container">
            <div className="d-flex align-items-center"><img src={phone} className="contact-us-images" alt="Phone"/>456878565</div>
            <div className="d-flex align-items-center"><img src={email} className="mr-1" alt="Emial"/>dhofar@motor.com</div>
          </div>
        </div>
      </div>
    )
  }
}
export default MotorThanks;