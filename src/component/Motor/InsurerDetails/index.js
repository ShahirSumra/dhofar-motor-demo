import React from "react";
import "./insurer-details.css";
import { Link } from "react-router-dom";
import backArrow from "../../../static/images/motor-images/back.png";
import close from "../../../static/images/close-black.png";
import InsurerDetailsImg from "../../../static/images/motor-images/insurance-detalis.png";
import Input from "../Common/Input";

const driver = { driverName : "", licenseNumber : "" , licenseIssueDate : "" };
class InsurerDetails extends React.Component{ 
  state = {
    insuranceType : "",
    fname : "",
    lname : "",
    email : "",
    mobileNumber : "",
    drivers : [
      { driverName : "", licenseNumber : "" , licenseIssueDate : "", },
    ],
    policyPeriod : "",
    showBottomSheet : false,
    showBottomCard : false,
    additionDriver : "Yes",
    isValid : {
      faname : undefined,
      lname : undefined,
      email : undefined,
      mobileNumber : undefined
    },
    licenseYear : "",
    licenseMonth : "",
    licenseDate : "",
  }


  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }

  setData = () => {
    sessionStorage.setItem("insurer_fname", this.state.fname);
    sessionStorage.setItem("insurer_lname", this.state.lname);
    sessionStorage.setItem("email", this.state.email);
    sessionStorage.setItem("mobile_number", this.state.mobileNumber);
    sessionStorage.setItem("policy_period", this.state.policyPeriod);
    if(this.state.additionDriver === "Yes"){
      sessionStorage.setItem("additional_driver", "Yes")
      sessionStorage.setItem("drivers",JSON.stringify(this.state.drivers));
      sessionStorage.setItem("license_date", this.state.licenseDate);
      sessionStorage.setItem("license_year", this.state.licenseYear);
      sessionStorage.setItem("license_month", this.state.licenseMonth);
    }
    else{
      sessionStorage.setItem("additional_driver", "No")
    }
  }
  removeData = () => {
    sessionStorage.removeItem("insurer_fname");
    sessionStorage.removeItem("insurer_lname");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("mobile_number");
    sessionStorage.removeItem("policy_period");
    sessionStorage.removeItem("additional_driver")
    sessionStorage.removeItem("drivers")
    sessionStorage.removeItem("license_date");
    sessionStorage.removeItem("license_year");
    sessionStorage.removeItem("license_month");
  }
  getItemFromStorage = (item) => {
    sessionStorage.getItem(item)
  }

  componentDidMount(){
    window.scrollTo({ top : 0 })
    const isValid = {
      fname : sessionStorage.getItem("insurer_fname") ? true : undefined,
      lname : sessionStorage.getItem("insurer_lname") ? true : undefined,
      email : sessionStorage.getItem("email") ? true : undefined,
      mobileNumber : sessionStorage.getItem("mobile_number") ? true : undefined
    }
    const fname = sessionStorage.getItem("insurer_fname") ? sessionStorage.getItem("insurer_fname") : "";
    const lname = sessionStorage.getItem("insurer_lname") ? sessionStorage.getItem("insurer_lname") : "";
    const email = sessionStorage.getItem("email") ? sessionStorage.getItem("email") : "";
    const mobileNumber = sessionStorage.getItem("mobile_number") ? sessionStorage.getItem("mobile_number") : "";
    const policyPeriod = sessionStorage.getItem("policy_period") ? sessionStorage.getItem("policy_period") : "";
    const additionDriver = sessionStorage.getItem("additional_driver") ? sessionStorage.getItem("additional_driver") : "";
    const drivers = sessionStorage.getItem("drivers") ? JSON.parse(sessionStorage.getItem("drivers")) : [{ driverName : "", licenseNumber : "" , licenseIssueDate : "", }];
    const policyType = sessionStorage.getItem("policy_type") ? sessionStorage.getItem("policy_type") : "";
    const licenseDate = sessionStorage.getItem("license_date") ? sessionStorage.getItem("license_date") : "";
    const licenseMonth = sessionStorage.getItem("license_month") ? sessionStorage.getItem("license_month") : "";
    const licenseYear = sessionStorage.getItem("license_year") ? sessionStorage.getItem("license_year") : "";

    const backUrl = policyType === "renewal" ? "/renewal-quotation" : "vehicle-details";
    this.setState({
      additionDriver,
      isValid,
      fname,
      lname,
      email,
      mobileNumber,
      policyPeriod,
      drivers,
      backUrl,
      licenseDate,
      licenseMonth,
      licenseYear,
      policyType
    })
  }

  closeBottomSheet = () => {
    this.setState({ showBottomCard : false},() => {
        setTimeout(() => {
            this.setState({ showBottomSheet : false});
        },400)
    })
  }

  isValidData = () => {
    if(this.state.policyType === "renewal"){
      return (
      this.isValidMail() &&
      this.isValidPhone()
      )
    }
    else{
      return (
        this.state.fname !== "" &&
        this.state.lname !== "" &&
        this.isValidMail() &&
        this.isValidPhone()
      )
    }
  }
  isValidPopupDetails = () => {
    if(this.state.additionDriver === "Yes"){
      return !(
        this.state.driverName === "" ||
        this.state.licenseNumber === "" ||
        this.state.licenseIssueDate === ""
      )
    }
    else if(this.state.additionDriver === "No"){
      return true;
    }
    else{
      return false
    }
  }

  isValidMail = () => {
    const value = this.state.email;
    const atpos = value.indexOf("@");
    const dotpos = value.lastIndexOf(".");
    if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= value.length || value === ""){
      return false;
    }
    else{
      return true;
    }
  }

  isValidPhone = () => {
    const value = this.state.mobileNumber;
    if(value === "" || value.length !== 8 || isNaN(value)){
      return false;
    }
    else{
      return true;
    }
  }

  handleDriverChange = (ind,title,value) => {
    const drivers = [...this.state.drivers];
    const selectedDrivers = {...drivers[ind]};
    selectedDrivers[title] = value;
    drivers[ind] = selectedDrivers;
    this.setState({ drivers })
  }
  addDriver = () => {
    let drivers = [...this.state.drivers];
    drivers.push(driver);
    this.setState({ drivers })
  }
  removeDriver = (ind) => {
    let drivers = [...this.state.drivers];
    drivers.splice(ind,1);
    this.setState({ drivers })
  }

  handleLicenseDateChange = (e, ind) => {
    this.setState({ [e.target.name] : e.target.value },() => {
    const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    const month = this.state.licenseMonth
    let monthInd = months.indexOf(month);
    let dobMonth = monthInd + 1;
    const issueDate = `${this.state.licenseDate}/${dobMonth}/${this.state.licenseYear}`
    let drivers = this.state.drivers;
    })
  }

  getLicenseYears = () => {
    let optionsArr = [];
    const currentYear = new Date().getFullYear();
    for(var year = currentYear - 18; year >= currentYear - 60; year--){
      optionsArr.push(<option key={year} value={year}>{year}</option>)
    }
    return optionsArr;
    
  }
  getMonths = () => {
    let monthsArr = [];
    let months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    if(parseInt(this.state.year) === currentYear - 19 ){
      months.splice(currentMonth + 1,11);
    }
    else if(parseInt(this.state.year) === currentYear - 60 ){
      months.splice(0 ,currentMonth)
    }
    months.forEach((month,ind) => {
      monthsArr.push(<option key={ind} value = {month}>{month}</option>)
    });
    return monthsArr;
  }

  getDates = () => {
    let optionsArr = [];
    let endDate = 0;
    const oddMonths = ["JAN", "MAR", "MAY", "JUL", "AUG", "OCT", "DEC"];
    const evenMonths = ["APR", "JUN", "SEP", "NOV"];
    const isLeapYear = (this.state.year % 4 === 0)
    if(oddMonths.includes(this.state.month)){
      endDate = 31;
    }
    else if(evenMonths.includes(this.state.month)){
      endDate = 30;
    }
    else{
      endDate = isLeapYear ? 29 : 28;
    }
    for(var date = 1; date <= endDate; date++){
      optionsArr.push(<option key={date} value={date}>{date}</option>)
    }
    return optionsArr;
  }
  

  render(){
    return(
      <div className="row min-vh-100 align-items-md-center justify-content-md-center position-relative">
        <div className="gradient-bg w-100 pc position-relative">
          <div className="custom-header">
            <Link to={this.state.backUrl} onClick={this.removeData}>
              <img src={backArrow} alt="Back" className="back-arrrow" />
            </Link>
            <div className="d-flex align-items-center justify-content-between insurare-page-header">
              <div className="header-links-container ">
                <div className="header-links"></div>
                <div className="header-links">Payment</div>
                <div className="header-links">Insurer Details</div>
              </div>
              <img src={InsurerDetailsImg} alt="Insurance Details" />
            </div>
          </div>

          
        {
          this.state.policyType !== "renewal" &&
          <>
            <div className="input-label top-input-label">
              FULL NAME
            </div>
            <input
              type = "text"
              className = "common-input"
              name = "fname"
              value = {this.state.fname}
              onChange = {this.handleChange}
              autoComplete = "on"
            >
            </input>
            {
              this.state.isValid.fname === false &&
              <div className="input-error-message">
                Please enter valid first name
              </div>
            }
          </>

        }
        {
          this.state.policyType !== "renewal" &&
          <>
            <div className="input-label">
              LAST NAME
            </div>
            <input
              type = "text"
              className = "common-input"
              name = "lname"
              value = {this.state.lname}
              onChange = {this.handleChange}
              autoComplete = "on"
            >
            </input>
            {
              this.state.isValid.lname === false &&
              <div className="input-error-message">
                Please enter valid last name
              </div>
            }
          </>
        }

          <div className={"input-label " + (this.state.policyType === "renewal" ? "top-input-label" : "")}>
            EMAIL
          </div>
          <input
            type = "text"
            className = "common-input"
            name = "email"
            value = {this.state.email}
            onChange = {this.handleChange}
            autoComplete = "on"
          >
          </input>
          {
            this.state.isValid.email === false &&
            <div className="input-error-message">
              Please enter valid email id
            </div>
          }
          <div className="input-label">
            MOBILE NUMBER
          </div>
          <div className="estimated-container">
            <div className="mobile-number-container d-flex">
              <div className="estimated-omr-container col-2 d-flex align-items-center justify-content-center"> 968 </div> 
              <input 
                type = "number"
                className = "estimated-input w-100"
                name = "mobileNumber"
                value = {this.state.mobileNumber}
                onChange = {this.handleChange}
                autoComplete = "on"
              ></input>
            </div>  
          </div>
          {
            this.isValidPhone === false &&
            <div className="input-error-message">
              Please enter valid mobile number
            </div>
          } 
        
          <button className="motor-common-btn mb-5 mt-4 col-12 mt-5" onClick={() => this.setState({showBottomSheet : true, showBottomCard : true})} disabled={!this.isValidData()}> Proceed and Confirm </button> 


          <div className={"driver-popup-container " + (this.state.showBottomSheet === true ? "driver-poup-container-active" : "") }>
            <div className={"popup-card " + (this.state.showBottomCard === true ? "show-bottom-card" : "")}>
              <div className="close-popup-btn d-flex align-items-center justify-content-center" onClick={this.closeBottomSheet}>
                <img src={close} alt="close" />
              </div>
              <div className="popup-heading"> Just to confirm </div>
              <div className="input-label">Additional Driver</div>
              <div className = "insurance-type-row">
                <div className={"motor-insurance-type-box text-center d-flex justify-content-center align-items-center " + (this.state.additionDriver === "Yes" ? "motor-insurance-type-box-active" : "")} onClick={() => this.setState({ additionDriver : "Yes" })}> Yes </div>
                <div className={"motor-insurance-type-box text-center d-flex justify-content-center align-items-center " + (this.state.additionDriver === "No" ? "motor-insurance-type-box-active" : "")} onClick={() => this.setState({ additionDriver : "No" })}> No </div>
              </div>
              {
                this.state.additionDriver === "Yes" &&
                <>
                {
                  this.state.drivers.map((driver,ind) => 
                    <div className="driver-container" key={ind}>
                      <div className="driver-container-title d-flex align-items-center justify-content-between">
                        <div>Driver {ind + 1}</div>
                        {
                          this.state.drivers.length > 1 &&
                          <div
                            onClick = {() => this.removeDriver(ind)} 
                            className="remove-driver-container d-flex align-items-center justify-content-center text-center"
                          >
                            -
                          </div>
                        }
                      </div>
                      <div className="col-12">
                        <Input
                          type="text"
                          placeholder = "Driver Name"
                          name = {`driverName-${ind}`}
                          value={driver.driverName}
                          onChange={(e) => this.handleDriverChange(ind, "driverName", e.target.value)}
                        />
                        <Input
                          type="text"
                          placeholder = "License Number"
                          name = {`licenseNumber-${ind}`}
                          value={driver.licenseNumber}
                          onChange={(e) => this.handleDriverChange(ind, "licenseNumber", e.target.value)}
                        />
                        <div className="license-date-title">License Issue Date</div>
                        <div className="col-md-10 col-12 ">
                          <div className="row">
                            <div className="col p-0">
                              <select className="w-100 pi-dob-select" name="licenseYear" onChange={(e) => this.handleLicenseDateChange(e,ind)} value={this.state.year}>
                                <option value="">{ localStorage.getItem("language") === "arabic" ? "السنة" : "Year" }</option>
                                {
                                  this.getLicenseYears()
                                }
                              </select>
                            </div>
                            <div className="col-5 pr-2 pl-2">
                              <select className="w-100 pi-dob-select" name="licenseMonth" onChange={(e) => this.handleLicenseDateChange(e,ind)} value={this.state.month}>
                                <option value="">{ localStorage.getItem("language") === "arabic" ? "الشهر" : "Month" }</option>
                                {
                                  this.state.year === "" &&
                                  <option value="" disabled>Please select year</option>
                                }
                                {
                                  this.state.year !== "" &&
                                    this.getMonths()
                                }
                              </select>
                            </div>
                            <div className="col p-0">
                              <select className="w-100 pi-dob-select" name="licenseDate" value={this.state.date} onChange={(e) => this.handleLicenseDateChange(e,ind)}>
                                <option value="">{ localStorage.getItem("language") === "arabic" ? "اليوم" : "Date" }</option>
                                {
                                  this.state.year === "" &&
                                  <option disabled> Please select year </option>
                                }
                                {
                                  (this.state.year !== "" && this.state.month === "") &&
                                  <option disabled> Please select month </option>
                                }
                                {
                                  (this.state.year !== "" && this.state.month !== "") &&
                                  this.getDates()
                                }
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
                <button className="motor-common-btn mt-3" onClick={this.addDriver}>Add Driver</button>
                </>
                
              }
              <Link to="/payment" onClick={this.setData}>
                <button className="motor-common-btn mt-4" disabled={!this.isValidPopupDetails()}>Proceed to paymnet</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default InsurerDetails;