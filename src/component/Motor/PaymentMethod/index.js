import React from "react";
import "./payment-method.css";
import { Link } from "react-router-dom";
import backArrow from "../../../static/images/motor-images/back.png";
import Visa from "../../../static/images/visa.png";
import Master from "../../../static/images/master.png";
import Calendar from "../../../static/images/calendar.png";
import PaymentCardImg from "../../../static/images/motor-images/payment-card.png";


class PaymentMethod extends React.Component{ 
  state={
    PaymentMethod : "",
    Cvv : "",
    expirayDate : "",
    cardNumber : "",
  }

  handleChange = (e) => {
      this.setState({ [e.target.name] : e.target.value})
  }
  componentDidMount(){
      window.scrollTo({ top : 0 });
  }
  isValid = () => {
      return !(this.state.cardNumber === "" || this.state.Cvv === "" || this.state.expirayDate === "")
  }

  render(){
    return(
      <div className="row min-vh-100 align-items-md-center justify-content-md-center">
        <div className="gradient-bg w-100  pc pb-md-5 position-relative">
          <div className="custom-header">
            <Link to="/payment">
              <img src={backArrow} alt="Back" className="back-arrrow" />
            </Link>
            <div className="d-flex align-items-end justify-content-between insurare-page-header">
              <div className="header-links-container ">
                <div className="header-links"></div>
                <div className="header-links"></div>
                <div className="header-links">Payment</div>
              </div>
              <img src={PaymentCardImg} alt="Payment card" />
            </div>
          </div>
          <div className="input-label top-input-label">CARD NUMBER</div>
          <input type="number" value={this.state.cardNumber} name="cardNumber" autoComplete = "off" className="common-input  w-100" onChange={this.handleChange}/>
          <div className="car-payment-row">
            <div>
                <div className="input-label">EXPIRATION DATE</div>
                <div className="d-flex expiray-date-container">
                  <input className="expiray-date-input cvv-input-text" autoComplete = "off" type="number" value={this.state.expirayDate} name="expirayDate" onChange={this.handleChange}/>
                  <div className="calendar-container d-flex align-items-center justify-content-center"><img src={Calendar} alt="Calendar" style ={{ maxHeight : "20px"}} /></div>
                </div>
            </div>
            <div>
              <div className="input-label">CVV</div>
              <input type="number" value={this.state.Cvv} name="Cvv" autoComplete = "off" className="cvv-input cvv-input-text" onChange={this.handleChange} />
            </div>
          </div>
          <div className="d-flex">
            <div className="master-visa-container">
              <img src={Visa} alt="visa" style = {{ maxHeight : "45px" }} />
              <img src={Master}  className="ml-4" alt="Master" style = {{ maxHeight : "50px" }} />
            </div>
          </div>
          <Link to="/payment-successful" onClick={this.setData} >
            <button className="motor-common-btn next-btn mt-4" disabled={!this.isValid()}>Pay</button>
          </Link>
        </div>
      </div>
    )
  }
}
export default PaymentMethod;