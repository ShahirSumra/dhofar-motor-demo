import React from "react";
import "./payment-done.css";
import { Link } from "react-router-dom";
import success from "../../../static/images/success.png";
import PaymentDoneImg from "../../../static/images/motor-images/pyment-done.png";
import email from "../../../static/images/motor-images/email.png";
import phone from "../../../static/images/motor-images/phone-call.png";


class PaymentDone extends React.Component{ 


  componentDidMount(){
    window.scrollTo({ top : 0 })
  }  

  render(){
    return(
      <div className="row min-vh-100 align-items-md-center justify-content-md-center">
        <div className="gradient-bg w-100  pc pt-md-4 text-center bg-pink">
          <div className="d-flex justify-content-center align-items-center mt-5 mt-md-3"><img src={success} alt="Successfully done" className="success-img" /></div>
          <div className="greetings-text ">
            Payment Successful!
          </div>
          <div className="subheading-greetings-text">
            Thank you for your paying quickly! <br/>
            Payment information was sent to your email.
          </div>
          <div className="policy-number-container">
            <div className="policy-number-inner-container">
              <div className="refernce-text policy-number-upper-text">
                  Your policy Number is<br/> SZ2030
              </div>
              <div className="refernce-text policy-number-bottom-text">In the mean time we need a few <br/> documents before we can issue your policy.</div>
            </div>
          </div>
          <div className="w-100">
            <img src={PaymentDoneImg}  alt="payment-done" className="payment-done-img" />
          </div>
          <Link to="/motor/upload">
            <button className="motor-common-btn mb-4 ">Upload Documents</button>
          </Link>
          <div className="d-flex align-items-center justify-content-between thanks-contact-container mb-4">
            <div className="d-flex align-items-center"><img src={phone} className="contact-us-images" alt="Phone"/>456878565</div>
            <div className="d-flex align-items-center"><img src={email} className="mr-1" alt="Emial"/>dhofar@motor.com</div>
          </div>
        </div>
    </div>
    )
  }
}
export default PaymentDone;