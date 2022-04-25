import React from "react";
import "./payment.css";
import { Link } from "react-router-dom";
import backArrow from "../../../static/images/motor-images/back.png";
import WhiteCheck from "../../../static/images/small-white-checkmark.png";
import RedClose from "../../../static/images/motor-images/red-close.png";
import promocode from "../../../static/images/motor-images/promo-code.png";
import dropdown from "../../../static/images/motor-images/purple-down-caret.png";
import Addon from "../../../static/images/motor-images/add-on.png";
import PaymentCardImg from "../../../static/images/motor-images/payment-card.png";
import DhofarLogo from "../../../static/images/motor-images/dhofar-small-logo.png";


class Paymnet extends React.Component{
  state = {
    showAddOn : false,
    tcChecked : false,
    addOnType : "",
    addOns : [],
    addOnPrice : [],
    VAT : "",
    totalAddOnPrice : 0,
  }
  showPromoCode = () => {
    if(this.state.showPromoCode === true){
      this.setState({ showPromoCode : false });
    }
    else{
      this.setState({ showPromoCode : true})
    }
  }
  addOn = (addOnType,addOnPrice) => {
    this.setState({addOnType,addOnPrice});
  }
  handleAddonChange = (e,addOn,addOnPrice) => {
    let addOns = [...this.state.addOns];
    let addOnPrices = [...this.state.addOnPrice];
    let finalPrice;
    let totalAddOnPrice;
    if(e.target.checked){
        addOns.push(addOn);
        addOnPrices.push(addOnPrice);
        totalAddOnPrice = parseFloat((this.state.totalAddOnPrice) + parseFloat(addOnPrice));
        finalPrice = parseFloat(this.state.finalPrice + parseFloat(addOnPrice));
    }
    else{
        const ind = addOns.indexOf(addOn);
        addOns.splice(ind, 1);
        const priceInd = addOnPrices.indexOf(addOnPrices);
        addOnPrices.splice(priceInd,1)
        finalPrice = parseFloat(this.state.finalPrice - parseFloat(addOnPrice));
        totalAddOnPrice = parseFloat((this.state.totalAddOnPrice) - parseFloat(addOnPrice));
    }
    this.setState({ addOns, addOnPrices, finalPrice, totalAddOnPrice});
  }
  showAddOn = () => {
    this.setState({ showAddOn : !this.state.showAddOn })
  }

  handleChecked = (e) => {
    this.setState({ tcChecked : e.target.checked });
  }
  isValid = () => {
    return !(this.state.tcChecked === false)
  }

  componentDidMount(){
    window.scrollTo({ top : 0 });
    let VAT,finalPrice;

    const PlanType = sessionStorage.getItem("plan_type") ? sessionStorage.getItem("plan_type") : "";
    const basePrice = sessionStorage.getItem("base_price") ? parseFloat(sessionStorage.getItem("base_price")) : "";
    VAT = parseFloat(Number(basePrice * 5 / 100).toFixed(2));
    finalPrice = parseFloat(basePrice + VAT);
    this.setState({ 
      basePrice,
      PlanType,
      VAT,
      finalPrice
    })

  } 

  render(){
    return(
      <div className="row min-vh-100 align-items-md-center justify-content-md-center">
        <div className="gradient-bg w-100 position-relative">
          <div className="pc">
            <div className="custom-header">
              <Link to="/insurer-details">
                <img src={backArrow} alt="Back" className="back-arrrow" />
              </Link>
              <div className="d-flex align-items-end justify-content-between insurare-page-header">
                <div className="header-links-container ">
                  <div className="header-links"></div>
                  <div className="header-links"></div>
                  <div className="header-links">Payment</div>
                </div>
                <img src={PaymentCardImg} alt="Insurance Details" />
              </div>
            </div>
            <div className="input-label payment-screen-mt">
              Type of insurance
            </div>

            <div className="policy-detail-container payment-screen-policy-details">
              <div className="quotation-card-top-container">
                <div className="d-flex align-items-center justify-content-between ">
                  <div className="quotation-card-heading">Basic + Driver</div>
                  <img src={DhofarLogo} alt="Dhofar" />
                </div>
                <div className="quotation-card-container">
                  <div className="d-flex align-items-center">
                    <div className="green-right-container d-flex align-items-center justify-content-center text-center">
                      <img src={WhiteCheck} style={{ maxHeight : "6px"}} alt="Check" />
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
                      <img src={WhiteCheck} style={{ maxHeight : "6px"}} alt="Check"/>
                    </div>
                    <div className="ml-2">Roadside Assistance OMR 2</div>
                  </div>
                  <div className="d-flex align-items-center mt-1">
                    <div className="red-close-container d-flex align-items-center justify-content-center text-center">
                      <img src={RedClose} style={{ maxHeight : "10px"}} alt="Cross" />
                    </div>
                    <div className="ml-2">Natural Calamities Not Available</div>
                  </div>
                </div>
              </div>
              <div className="quotation-card-bottom-container d-flex justify-content-between align-items-center quotation-card-bottom-container-active">
                <div className="policy-details-container d-flex justify-content-center align-items-center text-center">Policy Details</div>
                <div className="quotation-omr quotation-omr-active">OMR {this.state.basePrice}</div>
              </div>
            </div>

            <div className={"promocode-container  " + (this.state.showPromoCode ? "promocode-container-active" : "")} >
              <div onClick={this.showPromoCode}>
                <div className="d-flex align-items-center justify-content-between h-100">
                  <div className="d-flex align-items-center">
                    <img src={promocode} alt="promo-code-img" className="mr-4" />
                    <div className="promocode-title">Promo code</div>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={dropdown} alt="DropDown"  className={`caret-icon ${this.state.showPromoCode === true ? "caret-icon-rotated" : ""}`}/>
                  </div>
                </div>
              </div>
                
              <div className="promocode-input-container d-flex">
                <input type="text" name="promocode" value={this.state.promocode} className="promocode-input " />
                <button className="promocode-btn w-100">Apply</button>
              </div>
            </div>

            <div className={"add-on-container " + (this.state.showAddOn === true ? "addon-container-active" : "")}>
              <div onClick={this.showAddOn}>
                <div className="d-flex align-items-center justify-content-between h-100 addon-top-container">
                  <div className="d-flex align-items-center">
                    <img src={Addon} alt="promo-code-img" className="mr-4" />
                    <div className="add-on-title">Add-on</div>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={dropdown} alt="DropDown"  className={`caret-icon ${this.state.showAddOn === true ? "caret-icon-rotated" : ""}`}/>
                  </div>
                </div>
              </div>
              <div className="addon-row ">
                <div className={"addon-box d-flex align-items-center justify-content-center text-center " + (this.state.addOns.includes("Natural Calamities") ? "checked-addon" : "")}>
                  <div>
                    Natural Calamities 
                    <div >(STF) - <span className="addon-price">15 OMR</span></div>
                    <label >
                      <input
                        type="checkbox"
                        name="addon-checkbox"
                        className="checkbox addon-custom-checkbox mb-0"
                        onChange = {(e) => this.handleAddonChange(e, "Natural Calamities","15")}
                        checked = {this.state.addOns.includes("Natural Calamities")}
                      />
                      <span className="addon-checkbox d-block mr-auto ml-auto mt-2"></span>
                    </label>
                  </div>
                </div>
                <div className={"addon-box d-flex align-items-center justify-content-center text-center " + (this.state.addOns.includes("Fire and Theft") ? "checked-addon" : "")}>
                  <div>
                    Fire and Theft
                    <div className="addon-price">20 OMR</div>
                    <label >
                      <input
                        type="checkbox"
                        name="addon-checkbox"
                        className="checkbox addon-custom-checkbox mb-0"
                        onChange = {(e) => this.handleAddonChange(e, "Fire and Theft","20")}
                        checked = {this.state.addOns.includes("Fire and Theft")}
                      />
                      <span className="addon-checkbox d-block mr-auto ml-auto mt-2"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="premium-summary-container">
            <div className="premium-summary-title">Premium Summary</div>
            <div className="premium-summary-card">
              <div className="premium-summary-subtitle">
                <div className="d-flex align-items-center justify-content-between">
                  <div>Annual Premium</div>
                  <div>{this.state.basePrice} OMR</div>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <div>VAT</div>
                  <div>{this.state.VAT} OMR</div>
                </div>
                {
                  this.state.totalAddOnPrice !== 0 &&
                  <>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <div>Add-on</div>
                      <div>{this.state.totalAddOnPrice} OMR</div>
                    </div>
                  </>
                }
                <div className="border-bottom"></div>
                <div className="premium-bottom-text d-flex align-items-center justify-content-between">
                  <div>Total</div>
                  <div>{this.state.finalPrice} OMR</div>
                </div>
              </div>
            </div>
            <label className="d-flex mt-4">
              <input type="checkbox" name="checkbox" checked = {this.state.tcChecked} className="checkbox tc-checkbox" onChange = {this.handleChecked} />
              <span className="custom-checkbox"></span>
              <div className="tc-text">I agree to the Terms of Use and the Privacy Policy</div>
            </label>
            <Link to="/payment-method" >
              <button className="payment-btn mt-4 mb-4" disabled={!this.isValid()}>Procced and confirm</button>
            </Link>
          </div>
                
          {/* <div className="premium-summary-container">
            <div className="input-label">PREMIUM SUMMARY</div>
            <div className="premium-summary-card">
              <div className="bottom-dotted">
                <div className="d-flex justify-content-between ">
                  <div className="promocode-text">Annual Premium</div>
                  <div className="payment-card-omr">{this.state.basePrice} OMR</div>
                </div>
                <div className="d-flex justify-content-between ">
                  <div className="promocode-text">VAT</div>
                  <div className="payment-card-omr">{this.state.VAT} OMR</div>
                </div>
                {
                  this.state.totalAddOnPrice !== 0 &&
                  <>
                    <div className="d-flex justify-content-between ">
                      <div className="promocode-text">Add-on</div>
                      <div className="payment-card-omr">{this.state.totalAddOnPrice} OMR</div>
                    </div>
                  </>
                }
              </div>
              <div className="d-flex justify-content-between">
                <div className="promocode-text premium-bottom-text" >Total</div>
                <div className="payment-card-omr premium-bottom-text" style = {{ color : "#6B2652" }} >{this.state.finalPrice} OMR</div>
              </div>
            </div>
          </div>
          <label className="d-flex">
            <input type="checkbox" name="checkbox" checked = {this.state.tcChecked} className="checkbox tc-checkbox" onChange = {this.handleChecked} />
            <span className="custom-checkbox"></span>
            <div className="tc-text">I agree to the Terms of Use and the Privacy Policy</div>
          </label>

          <Link to="/payment-method" >
              <button className="next-btn mt-4 mb-5" disabled={!this.isValid()}>Procced and confirm</button>
          </Link> */}
        </div>
      </div>
    )
  }
}
export default Paymnet;