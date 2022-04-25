import React from 'react'
import UserComp from './UserComp'
import CreateEmployee from "./Components/CreateEmployee"
import { Route,Switch } from 'react-router-dom'
import Admin from './Admin'
import PM from'./PM';
import Hooka from './Hooka'
import Emp from './Emp'
import Finanace from './Finanace'
import EmployeeInfo from "./Components/EmployeeInfo";
import AllocatedEmployee from "./Components/AllocatedEmployee";
import OnbenchEmployee from "./Components/OnbenchEmployee";
import  Inactive   from "./Components/Inactive"
import Active from "./Components/Active";
import UpdateEmployee from "./Components/UpdateEmployee";
import UpdateActive from "./Components/UpdateActive";
import CreateProject from "./PM/CreateProject"
import UpdateProject from "./PM/UpdateProject";
import PmEmployeeInfo from "./PM/PmEmployeeInfo";
import PmAllocatedEmp from "./PM/PmAllocatedEmp";
import PmOnbenchEmp from "./PM/PmOnbenchEmp"
import AssignWork from "./PM/AssignWork"
import GenerateInvoice from "./PM/GenerateInvoice";
import Pm from "./PM/Pm";
import EmployeeDetails from "./Finance/EmployeeDetails";
import Fallocated from "./Finance/Fallocated";
import Fonbench from "./Finance/Fonbench";
import GetInvoice from "./Finance/GetInvoice";
import Invoice from "./Finance/Invoice";






export default function App() {
    return (
        <>
          <Switch>
          <Route exact path="/" component={UserComp}/>
          <Route path="/admin" component={Admin}/>
          <Route exact path="/allocated"  component ={CreateEmployee}>
          </Route>
          <Route  exact path="/remove"  component = {EmployeeInfo}>
          </Route>
          <Route exact  path="/AllocatedEmp"  component = {AllocatedEmployee}>

</Route>
<Route exact path="/onbench" component={OnbenchEmployee}>
            
</Route>
<Route exact path="/update-employee/:id" component = {UpdateEmployee}>
          </Route>
          <Route exact path="/inactive" component = {Inactive}>
          </Route>
          <Route exact path="/active" component = {Active}>
          </Route>
          <Route exact path="/upactive/:id" component = {UpdateActive}>
          </Route>
          <Route path="/pm" component={PM}/>
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
          <Route path="/empdetails" component={Finanace}/>
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
          <Route path="/user" component={Hooka}/>
          <Route path="/emp" component={Emp}/>
          </Switch>
        </>
    )
}
