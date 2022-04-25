import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import InsurerDetails from "./component/Motor/InsurerDetails";
import QuotationDetails from "./component/Motor/QuotationDetails";
import Quotation from "./component/Motor/Quotation";
import Spalsh  from "./component/Motor/Spalsh";
import MotorThanks from "./component/Motor/Thanks";
import MotorUpload from "./component/Motor/Upload";
import VehicleDetails from "./component/Motor/VehicleDetails";
import Payment from "./component/Motor/Payment";
import PaymentDone from "./component/Motor/PaymentDone";
import PaymentMethod from "./component/Motor/PaymentMethod";
import RenewalDetails from "./component/Motor/RenewalDetails";
import RenewalQuotation from "./component/Motor/RenewalQuotation";

const Routes = () => (
  <Router>
    <Route exact path="/" component={Spalsh} />
    <Route exact path="/quotation-details" component={QuotationDetails} />
    <Route exact path="/quotation" component={Quotation} />
    <Route exact path="/motor/Thanks" component={MotorThanks} />
    <Route exact path="/vehicle-details" component={VehicleDetails} />
    <Route exact path="/motor/upload" component={MotorUpload} />
    <Route exact path="/payment" component={Payment} />
    <Route exact path="/payment-method" component={PaymentMethod} />
    <Route exact path="/payment-successful" component={PaymentDone} />
    <Route exact path="/insurer-details" component={InsurerDetails} /> 
    <Route exact path="/existing-policy-details" component={RenewalDetails} />  
    <Route exact path="/renewal-quotation" component={RenewalQuotation} />
  </Router>
)
export default Routes;