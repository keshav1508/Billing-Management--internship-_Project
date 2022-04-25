import './App.css';
import { Sliderbar } from "./Finance/Sliderbar";
import { Navbar} from "./Finance/Navbar";
import EmployeeDetails from "./Finance/EmployeeDetails";
import Fallocated from "./Finance/Fallocated";
import Fonbench from "./Finance/Fonbench";
import GetInvoice from "./Finance/GetInvoice";
import Invoice from "./Finance/Invoice";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Finance(){
    return (
 
    <>
    
    <Router>
      <Sliderbar/>
      <Navbar/>
       <Switch>
         
          <Route exact path="/invoice" component={Invoice}>
          </Route>
          <Route  exact path="/fallocated"  component = {Fallocated}>
         </Route>
          <Route exact path="/fonbench" component={Fonbench}>
          </Route>
          <Route exact path="/empdetails" component={EmployeeDetails}>
          </Route>
          <Route exact path="/see/:userid" component={GetInvoice}>
          </Route>
        </Switch>
       </Router>
      </>  
      
  );
}


