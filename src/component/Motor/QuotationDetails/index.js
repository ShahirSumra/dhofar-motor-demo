import React from "react";
import "./quotation-details.css";
import { Link } from "react-router-dom";
import backArrow from "../../../static/images/motor-images/back.png";
import QuotationDetailImg from "../../../static/images/motor-images/qoutation-details.png"


class QuotationDetails extends React.Component{ 
    state = {
      registrationMark  : "",
      registrationNumber : "",
      civilId : "",
      carYears : [],
      carYear : "",
      plateRegistrationType : "",
      estimatedValue : "",
      rangeMin :"1000",
      rangeMax : "75000",
      minValue : "1,000",
      maxValue : "75,000",
      insuranceType : "",
      isValid : {
        registrationNumber : "",
        civilId : ""
      }
    }


    handleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }
    handleCarYearChange = (e) => {
      this.setState({ carYear : [e.target.value] })
    }
    handleEstimatedValueChange = (e) => {
      this.setState({ estimatedValue : e.target.value });
    }
    handleInsuranceTypeChange = (insuranceType) => {
      this.setState({ insuranceType })
    }
    handleRegistrationTypeChange = (plateRegistrationType) => {
      this.setState ({ plateRegistrationType })
    }

    setData = () => {
      sessionStorage.setItem("registration_mark", this.state.registrationMark)
      sessionStorage.setItem("registration_number", this.state.registrationNumber)
      sessionStorage.setItem("civil_id", this.state.civilId)
      sessionStorage.setItem("plate_registration_type", this.state.plateRegistrationType)
      sessionStorage.setItem("estimate_value", this.state.estimatedValue)
      sessionStorage.setItem("insurance_type", this.state.insuranceType)
    }
    removeData = () => {
      sessionStorage.removeItem("registration_mark")
      sessionStorage.removeItem("registration_number")
      sessionStorage.removeItem("civil_id")
      sessionStorage.removeItem("plate_registration_type")
      sessionStorage.removeItem("estimate_value")
      sessionStorage.removeItem("insurance_type")
    }

    componentDidMount(){
      window.scrollTo({ top : 0 })
      const isValid = {
        registrationNumber : sessionStorage.getItem("registration_number") ? true : undefined,
        civilId : sessionStorage.getItem("civil_id") ? true : undefined,
      }
      const registrationMark = sessionStorage.getItem("registration_mark") ? sessionStorage.getItem("registration_mark") : "";
      const registrationNumber = sessionStorage.getItem("registration_number") ? sessionStorage.getItem("registration_number") : "";
      const civilId = sessionStorage.getItem("civil_id") ? sessionStorage.getItem("civil_id") : "";
      const plateRegistrationType = sessionStorage.getItem("plate_registration_type") ? sessionStorage.getItem("plate_registration_type") : "";
      const estimatedValue = sessionStorage.getItem("estimate_value") ? sessionStorage.getItem("estimate_value") : "1000";
      const insuranceType = sessionStorage.getItem("insurance_type") ? sessionStorage.getItem("insurance_type") : "";
     

      this.setState({ 
        rangeMin : "1000",
        rangeMax : "75000" ,
        estimatedValue,
        registrationMark,
        registrationNumber,
        civilId,
        plateRegistrationType,
        insuranceType,
        isValid
      },this.isValidData)
    }
    isValidData = () => {
      if(
        !this.state.isValid.registrationNumber ||
        !this.state.isValid.civilId ||
        this.state.plateRegistrationType === "" ||
        this.state.insuranceType === "" 
      ){
        return false
      }
      else{
        return true
      }
      // return !(this.state.registrationMark === "" ||
      // this.state.registrationNumber === "" ||
      // this.state.civilId === "" ||
      // this.state.carYear === "" ||
      // this.state.plateRegistrationType === "" ||
      // this.state.estimatedValue === "")  
    }

    onBlurRegistrationNumber = (name, value) => {
      const validObj = {...this.state.isValid};
      if(value === "" || value.length > 4 || isNaN(value)){
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
                      <div className="header-links">Vehicle Details</div>
                      <div className="header-links">Quotation</div>
                      <div className="header-links">Quotation Details</div>
                    </div>
                    <img src={QuotationDetailImg} alt="Qoutation Details" />
                  </div>
                </div>

              <div className="top-input-label input-label">
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
              {
                this.state.isValid.registrationNumber === false &&
                <div className="input-error-message">
                  Please enter valid plate number
                </div>
              }

              <div className="input-label">
                CIVIL ID
              </div>
              <input
                type = "text"
                className = "common-input"
                name = "civilId"
                value = {this.state.civilId}
                onChange = {this.handleChange}
                onBlur = {() => { this.onBlurCivilID("civilId",this.state.civilId)}}
              >
              </input>
              {
                this.state.isValid.civilId === false &&
                <div className="input-error-message">
                  Please enter valid civil id
                </div>
              }
              
              <div className="input-label">
                PLATE REGISTRATION TYPE
              </div>
              <div className = "insurance-type-row">
                <div className={"motor-insurance-type-box text-center d-flex justify-content-center align-items-center " + (this.state.plateRegistrationType === "Oman Plate" ? "motor-insurance-type-box-active" : "")} onClick={() => this.handleRegistrationTypeChange("Oman Plate") }> Oman Plate</div>
                <div className={"motor-insurance-type-box text-center d-flex justify-content-center align-items-center " + (this.state.plateRegistrationType === "GCC Plate" ? "motor-insurance-type-box-active" : "")} onClick={() => this.handleRegistrationTypeChange("GCC Plate") }> GCC Plate </div>
              </div>

              <div className="input-label">
                TYPE OF INSURANCE
              </div>
              <div className = "insurance-type-row">
                <div className={"motor-insurance-type-box text-center d-flex justify-content-center align-items-center " + (this.state.insuranceType === "TPL" ? "motor-insurance-type-box-active" : "")} onClick={() => this.handleInsuranceTypeChange("TPL") }> TPL </div>
                <div className={"motor-insurance-type-box text-center d-flex justify-content-center align-items-center " + (this.state.insuranceType === "Comprehensive" ? "motor-insurance-type-box-active" : "")} onClick={() => this.handleInsuranceTypeChange("Comprehensive") }> Comprehensive </div>
              </div>
              
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

              {/* <div className="input-label">
                CAR YEAR
              </div>
              <select className="car-year-container w-100" value={this.state.carYear} onChange={this.handleCarYearChange} >
                <option value = "">Select Year</option>
                {
                  this.state.carYears.map((year,yearInd) => 
                    <option value={year} key={yearInd}>{year}</option>
                  )
                }
              </select> */}


              <Link to="/quotation" onClick={this.setData}  >
                <button className="motor-common-btn mb-5 mt-5 mb-md-0  col-12" disabled = {!this.isValidData()}>Show me Quotes</button> 
              </Link>
            </div>

              {/* loader */}
              <div className="loader d-flex align-items-center justify-content-center">
                <div className="d-flex">
                  <div className="circle"></div>
                  <div className="circle mx-2"></div>
                  <div className="circle"></div>
                </div>
              </div>
            <div className={"driver-popup-container " + (this.state.showBottomSheet === true ? "driver-poup-container-active" : "") }>
              <div className={"popup-card " + (this.state.showBottomCard === true ? "show-bottom-card" : "")}>
                <div className="close-popup-btn d-flex align-items-center justify-content-center" onClick={this.closeBottomSheet}></div>
              </div>
            </div>
          </div>
        )
    }
}
export default QuotationDetails;