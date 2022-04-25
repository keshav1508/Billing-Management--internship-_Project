import './App.css';
import { Sliderbar } from "./PM/Sliderbar";
import { Navbar} from "./PM/Navbar";
import { Body} from "./PM/Body";
import CreateProject from "./PM/CreateProject"
import UpdateProject from "./PM/UpdateProject";
import PmEmployeeInfo from "./PM/PmEmployeeInfo";
import PmAllocatedEmp from "./PM/PmAllocatedEmp";
import PmOnbenchEmp from "./PM/PmOnbenchEmp"
import AssignWork from "./PM/AssignWork"
import GenerateInvoice from "./PM/GenerateInvoice";
import UserPricipal from "./UserPricipal"
import Pm from "./PM/Pm";

import React, {Component} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default class PM extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       newUsers:[],
       designation:"",
       

      
    }
    this.counting=this.counting.bind(this)
  }
 

  
  counting=()=>{
   let wY=0;
   
   console.log(this.state.designation)
    for(let i=0;i<=this.state.newUsers.length-1;i++)
    {
        if(this.state.newUsers[i].status=="WORKING" && this.state.newUsers[i].regular=="ACTIVE" && this.state.newUsers[i].pm=="AdishwarSharma"){
           wY=wY+1 
           
        }
      
        
    }
    return (wY)
}    
  noncounting=()=>{
   let nwY=0;
   
   console.log(this.state.designation)
    for(let i=0;i<=this.state.newUsers.length-1;i++)
    {
      if(this.state.newUsers[i].status=="NOTWORKING" && this.state.newUsers[i].regular=="ACTIVE" && this.state.newUsers[i].pm=="AdishwarSharma"){
        nwY=nwY+1
      }
           
        
      
        
    }
    return (nwY)
}  
total=()=>{
  let TwY=0;
  
  console.log(this.state.designation)
   for(let i=0;i<=this.state.newUsers.length-1;i++)
   {
       if(this.state.newUsers[i].status!="ADMIN" && this.state.newUsers[i].regular=="ACTIVE" && this.state.newUsers[i].pm=="AdishwarSharma"){
          TwY=TwY+1 
          
       }
     
       
   }
   return (TwY)  

  }

  componentDidMount(){
    UserPricipal.getUsers().then((response) => {
        this.setState({newUsers:response.data})
        
    })

}
render() {return (
 
    <>
    
    <Router>
      <Sliderbar/>
      <Navbar/>
       <Switch>
           <Route exact path="/pm" >
           <Body totNumEmp={this.total()} allEmp={this.counting()} nol={this.noncounting()}/>
          </Route>
     
         
        
          <Route  exact path="/create"  component = {CreateProject}>

</Route>
          <Route  exact path="/enfo" component={PmEmployeeInfo} >
</Route> 
<Route exact path="/updatepm/:userid" component ={UpdateProject}>
          </Route>
<Route exact path="/allocated" component ={PmAllocatedEmp}>
          </Route>
<Route exact path="/onbench" component ={PmOnbenchEmp}>
          </Route>

<Route  exact path="/projectinfo"  component = {Pm}>

</Route>
<Route  exact path="/assign/:id"  component = {AssignWork}>

</Route>
<Route  exact path="/view/:userid"  component = {GenerateInvoice}>

</Route>

        
        </Switch>
       </Router>
      </>  
      
  );
}

}
