import './App.css';
import { Sliderbar } from "./Components/Sliderbar";
import { Navbar} from "./Components/Navbar";
import { Body} from "./Components/Body";
import {About } from "./Components/About";
import  Inactive   from "./Components/Inactive"
import Active from "./Components/Active";
import OnbenchEmployee from "./Components/OnbenchEmployee";
import EmployeeInfo from "./Components/EmployeeInfo";
import CreateEmployee from "./Components/CreateEmployee";
import UpdateEmployee from "./Components/UpdateEmployee";
import AllocatedEmployee from "./Components/AllocatedEmployee";
import UpdateActive from "./Components/UpdateActive";
import UserPricipal from "./UserPricipal"
import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class Admin extends Component {
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
        if(this.state.newUsers[i].status=="WORKING" && this.state.newUsers[i].regular=="ACTIVE"){
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
      if(this.state.newUsers[i].status=="NOTWORKING" && this.state.newUsers[i].regular=="ACTIVE"){
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
       if(this.state.newUsers[i].status!="ADMIN" && this.state.newUsers[i].regular=="ACTIVE"){
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
render() {
    return (
        <>
           <Router>
      <Sliderbar/>
      <Navbar/>
      
       <Switch>
          <Route exact path="/admin" >
          <Body totNumEmp={this.total()} allEmp={this.counting()} nol={this.noncounting()}/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route  exact path="/remove"  component = {EmployeeInfo}>

          </Route>
        
          <Route exact  path="/AllocatedEmp"  component = {AllocatedEmployee}>

         </Route>
          <Route exact path="/onbench" component={OnbenchEmployee}>
            
          </Route>
          <Route exact path="/allocated"  component ={CreateEmployee}>
          </Route>
          <Route exact path="/update-employee/:id" component = {UpdateEmployee}>
          </Route>
          <Route exact path="/inactive" component = {Inactive}>
          </Route>
          <Route exact path="/active" component = {Active}>
          </Route>
          <Route exact path="/upactive/:id" component = {UpdateActive}>
          </Route>
        </Switch>
       </Router>
      </>  
      
        
    )
}
}
