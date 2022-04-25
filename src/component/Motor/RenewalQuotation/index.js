import React from "react";
import "./renewalQuotation.css";
import { Link } from "react-router-dom";
import backArrow from "../../../static/images/motor-images/back.png";
import QuotationImg from "../../../static/images/motor-images/quotation.png";
import WhiteCheck from "../../../static/images/small-white-checkmark.png";
import RedClose from "../../../static/images/motor-images/red-close.png";
import BestValueImg from "../../../static/images/motor-images/best-value.png";
import DhofarLogo from "../../../static/images/motor-images/dhofar-small-logo.png";

class RenewalQuotation extends React.Component{
  state = {
    insuranceType : "TPL",
    BasePrice : "",
  }


  componentDidMount(){
    const estimatedValue = parseFloat(sessionStorage.getItem("estimate_value"));
    const insuranceType = sessionStorage.getItem("insurance_type") ? sessionStorage.getItem("insurance_type") : "";
    let BasePrice = "";
    if(insuranceType === "Comprehensive"){
      BasePrice = parseFloat(Number(estimatedValue * 1.82 / 100).toFixed(2));
    }
    else{
      BasePrice = 137.50;
    }
    this.setState({ BasePrice, insuranceType})
  }

  setData = () => {
    sessionStorage.setItem("base_price", this.state.BasePrice);
  }

  removeData = () => {
    sessionStorage.removeItem("base_price");
  }

  render(){
    return(
      <div className="row min-vh-100 align-items-md-center justify-content-md-center ">
        <div className="gradient-bg w-100  pc position-relative">
          <div className="custom-header">
            <Link to="/existing-policy-details" onClick={this.removeData}>
              <img src={backArrow} alt="Back" className="back-arrrow" />
            </Link>
            <div className="d-flex align-items-center justify-content-between">
              <div className="header-links-container">
                <div className="header-links">Payment</div>
                <div className="header-links">Confirm Details</div>
                <div className="header-links">Your Quotation</div>
              </div>
              <img src={QuotationImg} alt="Quotation Details" />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between previous-plan-container top-input-label">
            <div>Your previous plan</div>
            <Link to="/existing-policy-details">
              Edit Details
            </Link>
          </div>

          {
            this.state.insuranceType === "Comprehensive" &&
            <>
              <div className="policy-detail-container policy-detail-container-active">
                <div className="best-value-container d-flex align-items-center justify-content-center">
                  <img src={BestValueImg}  alt="Best value" />
                  <div className="mx-3" >Best Value</div>
                  <img src={BestValueImg} alt="Best value" />
                </div>
                <div className="quotation-card-top-container">
                  <div className="d-flex align-items-center justify-content-between ">
                    <div className="quotation-card-heading">Basic + Driver</div>
                    <img src={DhofarLogo} alt="Dhofar" />
                  </div>
                  <div className="quotation-card-container">
                    <div className="d-flex align-items-center">
                      <div className="green-right-container d-flex align-items-center justify-content-center text-center">
                        <img src={WhiteCheck} style={{ maxHeight : "6px"}} alt="Check"/>
                      </div>
                      <div className="ml-2">Driver Cover OMR 12</div>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <div className="green-right-container d-flex align-items-center justify-content-center text-center">
                        <img src={WhiteCheck} style={{ maxHeight : "6px"}} alt="Check" />
                      </div>
                      <div className="ml-2">Passenger Cover Free</div>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <div className="green-right-container d-flex align-items-center justify-content-center text-center">
                        <img src={WhiteCheck} style={{ maxHeight : "6px"}} alt="Check" />
                      </div>
                      <div className="ml-2">Roadside Assistance OMR 2</div>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <div className="red-close-container d-flex align-items-center justify-content-center text-center">
                        <img src={RedClose} style={{ maxHeight : "10px"}} alt="Not"/>
                      </div>
                      <div className="ml-2">Natural Calamities Not Available</div>
                    </div>
                  </div>
                </div>
                <div className="quotation-card-bottom-container d-flex justify-content-between align-items-center quotation-card-bottom-container-active">
                  <div className="policy-details-container d-flex justify-content-center align-items-center text-center">Policy Details</div>
                  <div className="quotation-omr quotation-omr-active">OMR {this.state.BasePrice}</div>
                </div>
              </div>
            </>
          }

          {
            this.state.insuranceType === "TPL" &&
            <>
              <div className="policy-detail-container policy-detail-container-active">
                <div className="best-value-container d-flex align-items-center justify-content-center">
                  <img src={BestValueImg}  alt="Best value" />
                  <div className="mx-3" >Best Value</div>
                  <img src={BestValueImg} alt="Best value" />
                </div>
                <div className="quotation-card-top-container">
                  <div className="d-flex align-items-center justify-content-between ">
                    <div className="quotation-card-heading">Basic + Driver</div>
                    <img src={DhofarLogo} alt="Dhofar" />
                  </div>
                  <div className="quotation-card-container">
                    <div className="d-flex align-items-center">
                      <div className="green-right-container d-flex align-items-center justify-content-center text-center">
                        <img src={WhiteCheck} style={{ maxHeight : "6px"}} alt="Check"/>
                      </div>
                      <div className="ml-2">Driver Cover OMR 12</div>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <div className="green-right-container d-flex align-items-center justify-content-center text-center">
                        <img src={WhiteCheck} style={{ maxHeight : "6px"}} alt="Check" />
                      </div>
                      <div className="ml-2">Passenger Cover Free</div>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <div className="green-right-container d-flex align-items-center justify-content-center text-center">
                        <img src={WhiteCheck} style={{ maxHeight : "6px"}} alt="Check" />
                      </div>
                      <div className="ml-2">Roadside Assistance OMR 2</div>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <div className="red-close-container d-flex align-items-center justify-content-center text-center">
                        <img src={RedClose} style={{ maxHeight : "10px"}} alt="Not"/>
                      </div>
                      <div className="ml-2">Natural Calamities Not Available</div>
                    </div>
                  </div>
                </div>
                <div className="quotation-card-bottom-container d-flex justify-content-between align-items-center quotation-card-bottom-container-active">
                  <div className="policy-details-container d-flex justify-content-center align-items-center text-center">Policy Details</div>
                  <div className="quotation-omr quotation-omr-active">OMR {this.state.BasePrice}</div>
                </div>
              </div>
            </>
          }
          <div className="proceed-btn-section d-flex justify-content-between">
            <div>
              <div className="quotation-base-price">OMR {this.state.BasePrice}</div>
              <div className="quotation-top-heading">(VAT not included)</div>
            </div>
            <Link to="/insurer-details">
              <button className="proceed-btn" onClick={this.setData} >Choose this plan</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default RenewalQuotation;