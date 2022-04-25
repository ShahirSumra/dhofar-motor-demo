import React from "react";
import "./Input.css";
import $ from "jquery";

class Input extends React.Component{
  componentWillReceiveProps(props){
    if(props.value.trim() !== ""){
      const name = `[name="${props.name}"]`;
      $(name).siblings(".form-input-place-holder").addClass("form-input-place-holder-up");
      $(name).addClass("form-input-down");
    }
  }

  componentDidMount(){
    if(this.props.value.trim() !== ""){
      const name = `[name="${this.props.name}"]`;
      $(name).siblings(".form-input-place-holder").addClass("form-input-place-holder-up");
      $(name).addClass("form-input-down");
    }
  }
  handleFocus = (e) => {
    $(e.target).siblings(".form-input-place-holder").addClass("form-input-place-holder-up");
    $(e.target).addClass("form-input-down");
    this.props.onFocus && this.props.onFocus(e);
  }
  handleBlur = (e) => {
    if(e.target.value.trim() === ""){
      $(e.target).siblings(".form-input-place-holder").removeClass("form-input-place-holder-up");
      $(e.target).removeClass("form-input-down");
    }
    this.props.onBlur && this.props.onBlur(e.target.name, e.target.value.trim());
  }
  handleKeyPress = (e) => {
    this.props.onKeyPress && this.props.onKeyPress(e);
  }
  handleKeyUp = (e) => {
    this.props.onKeyUp && this.props.onKeyUp(e);
  }
  render(){
    return(
      <>
        <div className="form-input-container d-flex align-items-center justify-content-between">
          <label className="form-input-place-holder">{this.props.placeholder}</label>
          <input
            type= {this.props.type}
            className="form-input"
            onFocus = {this.handleFocus}
            onBlur = {this.handleBlur}
            value = {this.props.value}
            onChange = {this.props.onChange}
            name = {this.props.name}
            onKeyPress = {this.handleKeyPress}
            onKeyUp = {this.handleKeyUp}
            maxLength = {this.props.maxLength}
          />
          {
            this.props.valid &&
            <svg className="form-input-check" xmlns="http://www.w3.org/2000/svg" width="11.944" height="8.651" viewBox="0 0 11.944 8.651">
              <path id="Path_15623" data-name="Path 15623" d="M37.606,34.381l-5.329,5.387L29.79,37.331c-1.112-1.09-2.82.616-1.707,1.706l3.353,3.286a1.22,1.22,0,0,0,1.707,0l6.169-6.236A1.208,1.208,0,0,0,37.606,34.381Z" transform="translate(-27.722 -34.022)" fill="#6b9b3e"/>
            </svg>
          }
        </div>
        {
          this.props.valid === false &&
          <div className="input-error-message"> { this.props.errorMessage } </div>
        }
      </>
    )
  }
}

export default Input;