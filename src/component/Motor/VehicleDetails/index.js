import React from "react";
import "./vehicle-details.css";
import { Link } from "react-router-dom";
import backArrow from "../../../static/images/motor-images/back.png";
import Vehicle from "../../../static/images/motor-images/vehicle.png";


class VehicleDetails extends React.Component{ 
  state = {
    chasisNumber : "",
    carCompany  : "",
    model : "",
    modelYears : ["2017","2018","2019","2020"],
    modelYear : "",
    mulkiyaStatus : "",
    ncd : ""
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleModelYearChange = (e) => {
    this.setState({ modelYear : e.target.value })
  }
  setData = () => {
    sessionStorage.setItem("chasis_number", this.state.chasisNumber)
    sessionStorage.setItem("car_company", this.state.carCompany)
    sessionStorage.setItem("model", this.state.model)
    sessionStorage.setItem("model_year",this.state.modelYear)
    sessionStorage.setItem("mulkiya_status", this.state.mulkiyaStatus)
    sessionStorage.setItem("ncd", this.state.ncd)
  }
  removeData = () => {
    sessionStorage.removeItem("chasis_number")
    sessionStorage.removeItem("car_company")
    sessionStorage.removeItem("model")
    sessionStorage.removeItem("model_year")
    sessionStorage.removeItem("mulkiya_status")
    sessionStorage.removeItem("ncd")
  }
  componentDidMount(){
    window.scrollTo({ top : 0 });
    
    const chasisNumber = sessionStorage.getItem("chasis_number") ? sessionStorage.getItem("chasis_number") : "ASFKJ12685KLW";
    const carCompany = sessionStorage.getItem("car_company") ? sessionStorage.getItem("car_company") : "AUDI";
    const model = sessionStorage.getItem("model") ? sessionStorage.getItem("model") : "A3";
    const modelYear = sessionStorage.getItem("model_year") ? sessionStorage.getItem("model_year") : "2019";
    const mulkiyaStatus = sessionStorage.getItem("mulkiya_status") ? sessionStorage.getItem("mulkiya_status") : "New";
    const ncd = sessionStorage.getItem("ncd") ? sessionStorage.getItem("ncd") : "No";

    this.setState({ 
      chasisNumber,
      carCompany,
      model,
      modelYear,
      mulkiyaStatus,
      ncd
    })
  }

  isValid = () => {
    return !(
      this.state.chasisNumber === "" ||
      this.state.carCompany === "" ||
      this.state.model === "" ||
      this.state.modelYear === "" 
      // this.state.mulkiyaStatus === ""
      )
  }

  render(){
    return(
      <div className="row min-vh-100 align-items-md-center justify-content-md-center position-relative">
        <div className="gradient-bg w-100 pc position-relative">
          <div className="custom-header">
            <Link to="/quotation" onClick={this.removeData}>
              <img src={backArrow} alt="Back" className="back-arrrow" />
            </Link>
            <div className="d-flex align-items-end justify-content-between">
              <div className="header-links-container">
                <div className="header-links">Payment</div>
                <div className="header-links">Insurer Details</div>
                <div className="header-links">Vehicle Details</div>
              </div>
              <img src={Vehicle} alt="Qoutation Details" />
            </div>
          </div>

          <div className="top-input-label input-label">
            CHASIS NUMBER
          </div>
          <div
            type = "text"
            className = "common-input d-flex align-items-center"
            name = "chasisNumber"
            value = {this.state.chasisNumber}
            onChange = {this.handleChange}
          >
            {this.state.chasisNumber}
          </div>
          <div className="input-label">
            VEHICLE MAKE
          </div>
          <div
            className = "common-input d-flex align-items-center"
            type = "text"
            name = "carCompany"
            value = {this.state.carCompany}
            onChange = {this.handleChange}
          >
            {this.state.carCompany}
          </div>
          
          <div className="input-label">
            VEHICLE MODEL
          </div>
          <div
            className = "common-input d-flex align-items-center"
            type = "text"
            name = "model"
            value = {this.state.model}
            onChange = {this.handleChange}
          >
            {this.state.model}
          </div>

          <div className="input-label">
            VEHICLE MODEL YEAR
          </div>
          {/* <select className="car-year-container w-100" value={this.state.modelYear} onChange={this.handleModelYearChange} >
            <option value = "">Select Year</option>
            {
              this.state.modelYears.map((year,yearInd) => 
                  <option value={year} key={yearInd}>{year}</option>
              )
            }
          </select> */}
          <div className="common-input d-flex align-items-center"> {this.state.modelYear} </div>
          <div className="input-label">
            MULKIYA STATUS
          </div>
          <div className = "insurance-type-row">
            <div className={"motor-insurance-type-box text-center d-flex justify-content-center align-items-center motor-insurance-type-box-active" }> New </div>
            <div className={"motor-insurance-type-box text-center d-flex justify-content-center align-items-center " }> Commercial </div>
          </div>
          
          <div className="input-label">
            NCD/CLAIMS LOADING
          </div>
          <div className = "ncd-row">
            <div className={"ncd-box text-center d-flex justify-content-center align-items-center ncd-active-box"}> None </div>
            <div className={"ncd-box text-center d-flex justify-content-center align-items-center " }> Part loss </div>
            <div className={"ncd-box text-center d-flex justify-content-center align-items-center " }> E-Service <br/> Loading </div>
          </div>

          <Link to="/insurer-details">
            <button className="motor-common-btn mb-5 mt-4 col-12 mt-5" onClick={this.setData}> Proceed and Confirm </button> 
          </Link>
        </div>
      </div>
    )
  }
}
export default VehicleDetails;