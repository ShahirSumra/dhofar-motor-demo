import React from "react";
import "./splash.css";
import DhofarLogo from "../../../static/images/dhofar-logo.jpg";
import Cloud_1 from "../../../static/images/motor-images/cloud-1.png";
import Cloud_2 from "../../../static/images/motor-images/cloud-2.png";
import Cloud_3 from "../../../static/images/motor-images/cloud-3.png";
import Cloud_4 from "../../../static/images/motor-images/cloud-4.png";
import SpalshBbottom from "../../../static/images/motor-images/spalsh-bottom.png";
import { Link } from "react-router-dom";


class MotorWelcome extends React.Component{
  
  setData = (type) => {
    sessionStorage.setItem("policy_type", type)
  }

    render(){
        return(
          <div className="row min-vh-100 align-items-center justify-content-center bg-pink">
            <img src={Cloud_1} className="cloud-1 position-fixed" alt="Cloud" />
            <img src={Cloud_2} className="cloud-2 position-fixed" alt="Cloud" />
            <img src={Cloud_3} className="cloud-3 position-fixed" alt="Cloud" />
            <img src={Cloud_4} className="cloud-4 position-fixed" alt="Cloud" />
            <img src={SpalshBbottom} className="spalsh-bottom-img position-fixed" alt="Bottom Img" />
            <div className="w-100 pc pt-md-5 pb-md-5 text-center bg-pink"> 
              <img src={DhofarLogo} alt="Dhofar Insurance Company" className="welcome-logo" />
              <div className="h1-title mt-5">
                <div>Welcome to Dhofar</div>
                <div>Motor Insurance</div>
              </div>
              <div className="spalsh-subtitle">Get the best deal of your insurance</div>
              <Link to="/quotation-details" className="d-block" onClick={() =>  this.setData("new") }>
                <button className="motor-common-btn col-12 col-md-4">Get the best deal for your car</button>  
              </Link>
              <Link to="/existing-policy-details" className="d-block " onClick={() =>  this.setData("renewal") }>
                <button className="welcome-renewal-btn"> Existing Policy Renewal? </button>
              </Link>
            </div>
          </div>
        )
    }
}
export default MotorWelcome;
