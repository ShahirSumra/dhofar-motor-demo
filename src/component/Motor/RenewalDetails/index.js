import React from "react";
import "./renewal-details.css";
import { Link } from "react-router-dom";
import backArrow from "../../../static/images/motor-images/back.png";
import QuotationDetailImg from "../../../static/images/motor-images/qoutation-details.png";
import renewalData from "../../../services/renewalData";
import XMLJS from "xml-js";

class RenewalDetails extends React.Component{
  state = {
    quoteNumber : "",
    registrationMark : "A",
    registrationNumber : "",
    civilId : "",
    rangeMin : "0",
    rangeMax : "75000",
    estimatedValue : "50000",
    minValue : "0",
    maxValue : "75000",
    isValid : {
      registrationMark : "",
      registrationNumber : "",
      civilId : ""
    }
  }

  handleEstimatedValueChange = (e) => {
    this.setState({ estimatedValue : e.target.value });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    },() => {
      if(this.state.civilId !== "" && this.state.registrationMark !== "" && this.state.registrationNumber !== ""){
        this.getRenewalPolicyData();
      }
    })
  }

  onBlurRegistrationMark = (name, value) => {
    const validObj = {...this.state.isValid};
    if(value === "" || value.length > 3 || !isNaN(value)){
      validObj[name] = false
    }
    else{
      validObj[name] = true;
    }
    this.setState({
      isValid : validObj
    })
  }

  onBlurRegistrationNumber = (name, value) => {
    const validObj = {...this.state.isValid};
    if(value === "" || value.length > 5 || isNaN(value)){
      validObj[name] = false
    }
    else{
      validObj[name] = true;
    }
    this.setState({
      isValid : validObj
    })
  }

  onBlurCivilID = (name, value) => {
    let validObj = {...this.state.isValid};
    if(value === "" || value.length !== 8 || isNaN(value)){
      validObj[name] = false;
    }
    else{
      validObj[name] = true;
    }
    this.setState({
      isValid : validObj
    })
  }

  setData = () => {
    sessionStorage.setItem("registration_mark", this.state.registrationMark)
    sessionStorage.setItem("registration_number", this.state.registrationNumber)
    sessionStorage.setItem("civil_id", this.state.civilId)
    sessionStorage.setItem("estimate_value", this.state.estimatedValue)
    sessionStorage.setItem("quote_number", this.state.quoteNumber)
    sessionStorage.setItem("insurance_type", "TPL")
  }
  removeData = () => {
    sessionStorage.removeItem("registration_mark")
    sessionStorage.removeItem("registration_number")
    sessionStorage.removeItem("civil_id")
    sessionStorage.removeItem("estimate_value")
    sessionStorage.removeItem("quote_number")
    sessionStorage.removeItem("insurance_type")
    sessionStorage.removeItem("plate_registration_type")
  }

  componentDidMount(){
    const registrationMark = sessionStorage.getItem("registration_mark") ? sessionStorage.getItem("registration_mark") : "A";
    const registrationNumber = sessionStorage.getItem("registration_number") ? sessionStorage.getItem("registration_number") : "";
    const civilId = sessionStorage.getItem("civil_id") ? sessionStorage.getItem("civil_id") : "";
    const estimatedValue = sessionStorage.getItem("estimate_value") ? sessionStorage.getItem("estimate_value") : "";
    const quoteNumber = sessionStorage.getItem("quote_number") ? sessionStorage.getItem("quote_number") : "";

    this.setState({
      quoteNumber,
      registrationMark,
      registrationNumber,
      civilId,
      estimatedValue,
    })

  }

  isValidData = () => {
    return !(
      this.state.quoteNumber === "" ||
      this.state.registrationMark === "" ||
      this.state.registrationNumber === "" ||
      this.state.civilId === ""
    )
  }

  getRenewalPolicyData = async () => {
    const getData = await renewalData.getData( this.state.civilId, this.state.registrationNumber, this.state.registrationMark);
    const json = JSON.parse(XMLJS.xml2json(getData.data, {compact: true, spaces: 4}))["soap:Envelope"]["soap:Body"]["ns2:SearchRenewalResponse"]["response"]["errMsg"]._text;
  }

  render(){
    return(
      <div className="row min-vh-100 align-items-md-center justify-content-md-center ">
        <div className="gradient-bg w-100  pc pb-md-5 position-relative">
          <div className="custom-header">
            <Link to="/" onClick={this.removeData}>
              <img src={backArrow} alt="Back" className="back-arrrow" />
            </Link>
            <div className="d-flex align-items-center justify-content-between">
              <div className="header-links-container">
                <div className="header-links">Confirm Details</div>
                <div className="header-links">Your Quotation</div>
                <div className="header-links">Existing Policy Details</div>
              </div>
              <img src={QuotationDetailImg} alt="Quotation Details" />
            </div>
          </div>

          <div className="top-input-label input-label">
            QUOTE NUMBER
          </div>
          <input
            type = "text"
            className = "common-input"
            name = "quoteNumber"
            value = {this.state.quoteNumber.toLocaleUpperCase()}
            onChange = {this.handleChange}
            // onBlur = {() => {this.onBlurquoteNumber("quoteNumber",this.state.quoteNumber)}}
          >
          </input>

          <div className="input-label">
            REGISTRATION MARK (PLATE CHARACTER)
          </div>
          <select className="refistration-mark-container" value={this.state.registrationMark} onChange = {this.handleChange} name="registrationMark">
                <option value="A">A</option>
                <option value="A A">A A</option>
                <option value="A B">A D</option>
                <option value="A M">A M</option>
                <option value="A R">A R</option>
                <option value="A S">A S</option>
                <option value="A W">A W</option>
                <option value="A Y">A Y</option>
                <option value="B">B</option>
                <option value="B B">B B</option>
                <option value="B D">B D</option>
                <option value="B H">B H</option>
                <option value="B R">B R</option>
                <option value="B S">B S</option>
                <option value="B W">B W</option>
                <option value="B Y">B Y</option>
                <option value="D">D</option>
                <option value="D D">D D</option>
                <option value="D R">D R</option>
                <option value="D W">D W</option>
                <option value="D Y">D Y</option>
                <option value="H">H</option>
                <option value="H D">H D</option>
                <option value="H H">H H</option>
                <option value="H R">H R</option>
                <option value="H S">H S</option>
                <option value="H Y">H Y</option>
                <option value="I N T L">I N T L</option>
                <option value="Inspection">Inspection</option>
                <option value="L">L</option>
                <option value="G">G</option>
                <option value="M">M</option>
                <option value="M M">M M</option>
                <option value="M W">M W</option>
                <option value="M Y">M Y</option>
                <option value="R">R</option>
                <option value="R M">R M</option>
                <option value="R R">R R</option>
                <option value="R S">R S</option>
                <option value="R W">R W</option>
                <option value="R Y">R Y</option>
                <option value="S">S</option>
                <option value="S S">S S</option>
                <option value="T B A">T B A</option>
                <option value="W">W</option>
                <option value="W W">W W</option>
                <option value="Y">Y</option>
                <option value="Y A">Y A</option>
                <option value="Y Y">Y Y</option>
              </select>
          {
            this.state.isValid.registrationMark === false &&
            <div className="input-error-message">
              Please enter valid plate character
            </div>
          }

          <div className="input-label">
            REGISTRATION NUMBER (PLATE NUMBER)
          </div>
          <input
            type = "text"
            className = "common-input"
            name = "registrationNumber"
            value = {this.state.registrationNumber}
            onChange = {this.handleChange}
            onBlur = {() => {this.onBlurRegistrationNumber("registrationNumber",this.state.registrationNumber)}}
          >
          </input>

          <div className="input-label">
            CIVIL ID
          </div>
          <input
            type = "text"
            className = "common-input"
            name = "civilId"
            value = {this.state.civilId}
            onChange = {this.handleChange}
            // onBlur = {() => { this.onBlurCivilID("civilId",this.state.civilId)}}
          >
          </input>
          {
            this.state.isValid.civilId === false &&
            <div className="input-error-message">
              Please enter valid civil id
            </div>
          }

          {
            this.state.insuranceType === "Comprehensive" &&
            <>
              <div className="input-label">
                ESTIMATED CAR VALUE
              </div>
              <div className="d-flex estimated-container">
                <div className="estimated-omr-container d-flex justify-content-center align-items-center col-2">OMR</div>
                <div className="estimated-input w-100 d-flex align-items-center justify-content-start">{this.state.estimatedValue}</div>
              </div>
              <input 
                type="range"
                className="estimate-value-range" 
                name="estimatedValue" 
                min = {this.state.rangeMin}
                max = {this.state.rangeMax} 
                value={this.state.estimatedValue} 
                onChange={this.handleEstimatedValueChange}
              />
              <div className="common-blue-subheading mt-1">We estimate that your car value is {this.state.minValue} OMR to {this.state.maxValue} OMR</div>
            </>
          }
          
          <Link to="/renewal-quotation" onClick={this.setData}  >
            <button className="motor-common-btn mb-3 mt-5 col-12" disabled = {!this.isValidData()}> Retrieve Quote Details </button> 
          </Link>
          <Link to="/quotation">
            <button className="motor-common-btn transparent-btn mb-3 mb-md-0 col-12" disabled = {!this.isValidData()} > New </button> 
          </Link>
        </div>
      </div>
    )
  }
}
export default RenewalDetails;