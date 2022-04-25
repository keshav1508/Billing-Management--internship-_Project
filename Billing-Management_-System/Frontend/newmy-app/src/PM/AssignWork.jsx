
import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import {Navbar} from "./Navbar";
import {Sliderbar} from "./Sliderbar";

 class AssignWork extends Component {
    constructor(props){
        super(props) 
        this.state={
           id:this.props.match.params.id, 
           firstName:'',
           lastName:'',
           emailID:'',
           passWord:'',
           addRess:'',
           dob:'',
           contact:'',
           statett:'',
           city:'',
           pincode:'',
           gender:'',
           design:'',
           pm:'',
           prowork:'',
           status:'',
           regular:'',
           pro:[]
        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
         this.changeEmailHandler=this.changeEmailHandler.bind(this);
         this.changePasswordHandler=this.changePasswordHandler.bind(this);
         this.changeAddressHandler=this.changeAddressHandler.bind(this);
         this.changeDateHandler=this.changeDateHandler.bind(this);
         this.changePhoneHandler=this.changePhoneHandler.bind(this);
         this.changeStateHandler=this.changeStateHandler.bind(this);
         this.changeCityHandler=this.changeCityHandler.bind(this);
         this.changePincodeHandler=this.changePincodeHandler.bind(this);
         this.changeGenderHandler=this.changeGenderHandler.bind(this);
         this.changeDesginHandler=this.changeDesginHandler.bind(this);
         this.changePMHandler=this.changePMHandler.bind(this);
         this.changeStatusHandler=this.changeStatusHandler.bind(this);
         this.changeRegularHandler=this.changeRegularHandler.bind(this);
         this.updateEmployee=this.updateEmployee.bind(this);
         this.changePnnHandler=this.changePnnHandler.bind(this);
     
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
            let employee=res.data;
            this.setState({firstName:employee.firstName,
                lastName:employee.lastName,
                emailID:employee.emailID,
                passWord:employee.passWord,
                addRess:employee.addRess,
                dob:employee.dob,
                contact:employee.contact,
                statett:employee.statett,
                city:employee.city,
                pincode:employee.pincode,
                gender:employee.gender,
                design:employee.design,
                pm:employee.pm,
                prowork:employee.prowork,
                status:employee.status,
                regular:employee.regular
               
            });
        });

        EmployeeService.getpm().then((res) => {
            this.setState({ pro:res.data});
     
             });

    }
    updateEmployee= (e) =>{
        e.preventDefault();
        let employee={firstName:this.state.firstName,lastName:this.state.lastName,emailID:this.state.emailID,passWord:this.state.passWord,addRess:this.state.addRess,dob:this.state.dob,contact:this.state.contact,statett:this.state.statett,city:this.state.city,pincode:this.state.pincode,gender:this.state.gender,design:this.state.design,pm:this.state.pm,prowork:this.state.prowork,status:this.state.status,regular:this.state.regular};
        console.log('employee =>' +JSON.stringify(employee));
        EmployeeService.updateEmployee(employee, this.state.id).then(res=>{
                  this.props.history.push('/admin');
        });
      
       
    }
    changeFirstNameHandler=(event)=>{
       this.setState({firstName:event.target.value});
    }
    changeLastNameHandler=(event)=>{
       this.setState({lastName:event.target.value});
    }
    changeEmailHandler=(event)=>{
       this.setState({emailID:event.target.value});
    }
    changePasswordHandler=(event)=>{
       this.setState({passWord:event.target.value});
    }
    changeAddressHandler=(event)=>{
       this.setState({addRess:event.target.value});
    }
    changeDateHandler=(event)=>{
       this.setState({dob:event.target.value});
    }
    changePhoneHandler=(event)=>{
       this.setState({contact:event.target.value});
    }
    changeStateHandler=(event)=>{
       this.setState({statett:event.target.value});
    }
    changeCityHandler=(event)=>{
       this.setState({city:event.target.value});
    }
    changePincodeHandler=(event)=>{
       this.setState({pincode:event.target.value});
    }
    changeGenderHandler=(event)=>{
       this.setState({gender:event.target.value});
    }
    changeDesginHandler=(event)=>{
       this.setState({design:event.target.value});
    }
    changePMHandler=(event)=>{
       this.setState({pm:event.target.value});
    }
    changeStatusHandler=(event)=>{
       this.setState({status:event.target.value});
    }
    changePnnHandler=(event)=>{
       this.setState({prowork:event.target.value});
    }
    changeRegularHandler=(event)=>{
        this.setState({regular:event.target.value});
     }
  
    cancel(){
        this.props.history.push('/');
    }
    render() {
        return (
          <div>
                <Navbar/>
            <Sliderbar/>
               <div className="main-content">
                <div className="del">
        <form name="myform" className="form-group">
        
            <h2 style={{'textAlign':'center', 'fontweight': 'bold', 'fontsize': '45px'}}>ASSIGN PROJECT</h2>
            <div className=" row jumbotron ">
                <div className="col-md-6" hidden>
                    <label for="inputname">First name</label>
                    <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                </div>
                <div className="col-md-6" hidden>
                    <label for="inputname">Last name</label>
                    <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler} />
                </div>
                <div className="col-md-6" hidden>
                    <label for="inputname">Email</label>
                    <input placeholder="Email ID" name="emailID" className="form-control" value={this.state.emailID} onChange={this.changeEmailHandler} />
                </div>
                <div className="col-md-6" hidden>
                    <label for="inputname">Password</label>
                    <input type="text" className="form-control" name="passWord" value={this.state.passWord} onChange={this.changePasswordHandler}placeholder="Password"/>
                </div>
                <div className="col-md-8" hidden>
                    <label for="inputname">Address</label>
                    <input type="text" className="form-control" placeholder="Address"
                    value={this.state.addRess} onChange={this.changeAddressHandler}/>
                </div>
                <div className="col-md-4" hidden>
                    <label for="inputname">DOB</label>
                    <input type="date" className="form-control"placeholder="DOB" min="1997-01-01" max="2018-01-01" value={this.state.dob} onChange={this.changeDateHandler}/>
                </div>
                <div className="col-md-4" hidden>
                    <label for="inputname">Phone Number</label>
                    <input type="tel" className="form-control" placeholder="Contact Number" value={this.state.contact} onChange={this.changePhoneHandler}/>
                </div>
                <div class="col-md-4" hidden>
                    <label for="inputname">State</label>
                    <input type="text" className="form-control" placeholder="State"
                    value={this.state.statett} onChange={this.changeStateHandler}/>
                 
                </div>
                <div class="col-md-4" hidden>
                    <label for="inputname">City</label>
                    <input type="text" className="form-control" placeholder="City"
                    value={this.state.city} onChange={this.changeCityHandler}/>
                </div>
                <div className="col-md-2" hidden>
                    <label for="inputname">Pin Code</label>
                    <input type="tel" className="form-control" placeholder="Pin Code" value={this.state.pincode} onChange={this.changePincodeHandler}/>
                </div>
                <div className="col-md-2" hidden>
                    <label for="inputname">Gender</label>
                    <div className="form-control">
                        <input type="radio" name="mygen" id="gender" value="MALE" value={this.state.gender} onChange={this.changeGenderHandler}/ >  MALE
                        
                    </div>
                    <div className="form-control">
                       
                        <input type="radio" name="mygen" id="gender" value="FEMALE" value={this.state.gender} onChange={this.changeGenderHandler} />  FEMALE
                    </div>
                    </div>
                    
                 <div className="col-md-4" hidden>
                    <label for="inputname">Designation</label>

                    <select id="DESIGNATION" className="form-control"value={this.state.design} onChange={this.changeDesginHandler}
                   >
                        <option value="None">Select Option</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="PROJECT MANAGER">PROJECT MANAGER</option>
                        <option value="EMPLOYEE">EMPLOYEE</option>
                        
                    </select>
                </div>
          
                <div className="col-md-6" >
                    <label for="inputname">Status</label>
                    
                    <select id="PM" className="form-control" value={this.state.status} onChange={this.changeStatusHandler}>
                       <option selected value="NOTWORKING">NOT WORKING</option>
                        <option value="WORKING">WORKING</option>
                     
                         
                    </select>
                
             </div> 
             
                <div className="col-md-6" >
                    <label for="inputname">Project_Name</label>
                    
                    <select className="form-control" key={this.state.pro.userid} value={this.state.prowork} onChange={this.changePnnHandler}>
                        <option value="">Select Project NAME</option>{
                               this.state.pro.map(
                                       (pm) =>

                                <option key={pm.userid}value={pm.projectName} selected>{pm.projectName}</option>)}
                                </select>
                         
                   
                </div>
             
                <div className="col-md-12" style={{'textAlign':'center' ,'margin':"24px 0px 12px "}}>
                    <button type="Submit" className="btn btn-primary" onClick={this.updateEmployee} >Submit</button>
                </div>

            </div>    
    </form>
    </div>
    </div>
    </div>
        )
    }
}

export default AssignWork 