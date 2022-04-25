import React from "react";
import "./upload.css";
import { Link } from "react-router-dom";
import backArrow from "../../../static/images/motor-images/back.png";
import dropdown from "../../../static/images/motor-images/purple-down-caret.png";
import plus from "../../../static/images/motor-images/upload-plus.png";
import closewhite from "../../../static/images/motor-images/upload-close.png";
import greenTick from "../../../static/images/green-tick-big.png";
import uploadImg from "../../../static/images/motor-images/upload.png";


class upload extends React.Component{
  state = {
    selectedDocument : "",
    vehicle_photo : {
        front : "",
        back : "",
    },
    registration_card : {
        front : "",
        back : "",
    },
    driving_license : {
        front : "",
        back : "",
    }
}
  selectDocument = (selectedDocument) => {
      if(this.state.selectedDocument === selectedDocument){
          this.setState({ selectedDocument : "" });
      }else{
          this.setState({ selectedDocument});
      }
  }
  handleDocChange = (e, docKey, side) => {
      var file = e.target.files[0];
      var documentObj = {...this.state[docKey]};
      documentObj[side] = file;
      this.setState({ [docKey] : documentObj });
  }
  handleRemoveImg = (e, dockey,side) => {
      e.stopPropagation();
      var documentObj = {...this.state[dockey]};
      documentObj[side] = "";
      this.setState({ [dockey] : documentObj});
  }
  isValid = () => {
      return !(this.state.vehicle_photo.front === "" || this.state.registration_card.front === "" || this.state.driving_license.front === "" || this.state.vehicle_photo.back === "" || this.state.registration_card.back === "" || this.state.driving_license.back === "" )
  }

  componentDidMount(){
    window.scrollTo({ top : 0 });
  }


  render(){
    return(
      <div className="row min-vh-100 align-items-md-center justify-content-md-center">
        <div className="gradient-bg w-100  pc pb-md-5 position-relative">
          <div className="custom-header">
            <Link to="/payment-successful">
              <img src={backArrow} alt="Back" className="back-arrrow" />
            </Link>
            <div className="d-flex align-items-end justify-content-between insurare-page-header">
              <div className="header-links-container ">
                <div className="header-links"></div>
                <div className="header-links"></div>
                <div className="header-links">Upload Documents</div>
              </div>
              <img src={uploadImg} alt="Insurance Details" />
            </div>
          </div>
          <div className="note-card top-input-label">
            Note: We will be issuing your policy within 24 working hour so please upload the below document here or send them on mail
          </div>
          <div className="upload-documents-heding mb-4">
            Please provide us the below documents so that we can verify your details and issue your policy
          </div>

          {/* upload container */}

          <div className={"upload-doc-container " + (this.state.selectedDocument === "Vehicle Photo" ? "upload-container-active" : "")} onClick={() => this.selectDocument("Vehicle Photo")}>
            <div className="upload-doc-top-container">
              <div className="d-flex align-items-center justify-content-between">
                <div className="upload-card-heading">1. Vehicle Photos</div>
                  <div className="d-flex align-items-center">
                    <img src={dropdown} alt="DropDown"  className={`caret-icon ${this.state.selectedDocument === "Vehicle Photo" ? "caret-icon-rotated" : ""}`}/>
                  </div>
                </div>
              </div>
              <div className=""></div>
              <div className="promocode-bottom-container">
                <div>
                  <label className="d-flex justify-content-center align-items-center upload-file-label">
                      <input type="file" className="d-none" onChange={(e) => this.handleDocChange(e,"vehicle_photo","front")} name="vehicle_photo"/>
                      <img src={`${this.state.vehicle_photo.front !== "" ? greenTick : plus}`} alt="Add on" />
                      {
                        this.state.vehicle_photo.front !== "" &&
                        <span className = "d-flex align-items-center justify-content-center" onClick={(e) => this.handleRemoveImg(e,"vehicle_photo","front")}><img src = {closewhite} alt = "close button"  style ={{ maxHeight : "10px"}}/> </span>
                      }
                  </label>
                  <div className="upload-subtitle text-center">Front</div>
                </div>
                <div>
                  <label className="d-flex justify-content-center align-items-center upload-file-label">
                    {
                      this.state.vehicle_photo.back === "" &&
                      <input type="file" className="d-none" onChange={(e) => this.handleDocChange(e,"vehicle_photo","back")} name="vehicle_photo"/>
                    }
                    <img src={`${this.state.vehicle_photo.back !== "" ? greenTick : plus}`} alt="Add on" />
                        
                    {
                      this.state.vehicle_photo.back !== "" &&
                      <span className = "d-flex align-items-center justify-content-center" onClick={(e) => this.handleRemoveImg(e, "vehicle_photo","back")}><img src = {closewhite} alt = "close button" style ={{ maxHeight : "10px"}} /></span>
                    }
                  </label>
                <div className="upload-subtitle text-center">Back</div>
              </div>
            </div>
          </div>


          <div className={"upload-doc-container " + (this.state.selectedDocument === "Registrarion Card" ? "upload-container-active" : "")} onClick={() => this.selectDocument("Registrarion Card")}>
            <div className="upload-doc-top-container">
              <div className="d-flex align-items-center justify-content-between">
                <div className="upload-card-heading">2. Copy of Vehicle Registration Card</div>
                  <div className="d-flex align-items-center">
                    <img src={dropdown} alt="DropDown"  className={`caret-icon ${this.state.selectedDocument === "Registrarion Card" ? "caret-icon-rotated" : ""}`}/>
                  </div>
                </div>
              </div>
              <div className="promocode-bottom-container">
                <div>
                  <label className="d-flex justify-content-center align-items-center upload-file-label">
                    <input type="file" className="d-none" onChange={(e) => this.handleDocChange(e,"registration_card","front")} name="registration_card"/>
                    <img src={`${this.state.registration_card.front !== "" ? greenTick : plus}`} alt="Add on" />
                    {
                      this.state.registration_card.front !== "" &&
                      <span className = "d-flex align-items-center justify-content-center" onClick={(e) => this.handleRemoveImg(e,"registration_card","front")}><img src = {closewhite} alt = "close button" style ={{ maxHeight : "10px"}}/> </span>
                    }
                  </label>
                  <div className="upload-subtitle text-center">Front</div>
                </div>
                <div>
                  <label className="d-flex justify-content-center align-items-center upload-file-label">
                    {
                      this.state.registration_card.back === "" &&
                      <input type="file" className="d-none" onChange={(e) => this.handleDocChange(e,"registration_card","back")} name="registration_card"/>
                    }
                    <img src={`${this.state.registration_card.back !== "" ? greenTick : plus}`} alt="Add on" />
                        
                    {
                      this.state.registration_card.back !== "" &&
                      <span className = "d-flex align-items-center justify-content-center" onClick={(e) => this.handleRemoveImg(e, "registration_card","back")}><img src = {closewhite} alt = "close button"  style ={{ maxHeight : "10px"}}/></span>
                    }
                  </label>
                <div className="upload-subtitle text-center">Back</div>
              </div>
            </div>
          </div>

          <div className={"upload-doc-container " + (this.state.selectedDocument === "Driving License" ? "upload-container-active" : "")} onClick={() => this.selectDocument("Driving License")}>
            <div className="upload-doc-top-container">
              <div className="d-flex align-items-center justify-content-between">
                <div className="upload-card-heading">3. Copy of Driving License</div>
                  <div className="d-flex align-items-center">
                    <img src={dropdown} alt="DropDown"  className={`caret-icon ${this.state.selectedDocument === "Driving License" ? "caret-icon-rotated" : ""}`}/>
                  </div>
                </div>
              </div>
              <div className="promocode-bottom-container">
                <div>
                  <label className="d-flex justify-content-center align-items-center upload-file-label">
                    <input type="file" className="d-none" onChange={(e) => this.handleDocChange(e,"driving_license","front")} name="driving_license"/>
                    <img src={`${this.state.driving_license.front !== "" ? greenTick : plus}`} alt="Add on" />
                    {
                      this.state.driving_license.front !== "" &&
                      <span className = "d-flex align-items-center justify-content-center" onClick={(e) => this.handleRemoveImg(e,"driving_license","front")}><img src = {closewhite} alt = "close button" style ={{ maxHeight : "10px"}}/> </span>
                    }
                  </label>
                  <div className="upload-subtitle text-center">Front</div>
                </div>
                <div>
                  <label className="d-flex justify-content-center align-items-center upload-file-label">
                    {
                      this.state.driving_license.back === "" &&
                      <input type="file" className="d-none" onChange={(e) => this.handleDocChange(e,"driving_license","back")} name="driving_license"/>
                    }
                    <img src={`${this.state.driving_license.back !== "" ? greenTick : plus}`} alt="Add on" />
                        
                    {
                      this.state.driving_license.back !== "" &&
                      <span className = "d-flex align-items-center justify-content-center" onClick={(e) => this.handleRemoveImg(e, "driving_license","back")}><img src = {closewhite} alt = "close button" style ={{ maxHeight : "10px"}}/></span>
                    }
                  </label>
                <div className="upload-subtitle text-center">Back</div>
              </div>
            </div>
          </div>

          <Link to="/motor/thanks"  >
            <button className="motor-common-btn mb-5 mb-md-0 mt-5" >Complete</button>
          </Link>
        </div>
      </div>
    )
  }
}
export default upload;