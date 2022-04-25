import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import {Navbar} from "./Navbar";
import {Sliderbar} from "./Sliderbar";
 class CreateProject extends Component {
    constructor(props){
        super(props) 
        this.state={
           fullName:'',
           address:'',
           email:'',
           projectName:'',
           end:'',
           std:'',
           contact:'',
           shipping_add:'',
           tcost:'',
           ecost:'',
           gst:'18%'
        }
        this.changeFullnameHandler=this.changeFullnameHandler.bind(this);
        this.changeProjectnameHandler=this.changeProjectnameHandler.bind(this);
        this.changeEnddateHandler=this.changeEnddateHandler.bind(this);
        this.changeStartingdateHandler=this.changeStartingdateHandler.bind(this);
        this.saveProject=this.saveProject.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changePhoneHandler=this.changePhoneHandler.bind(this);
        this.changeShippingaddHandler=this.changeShippingaddHandler.bind(this);
        this.changeTcostHandler=this.changeTcostHandler.bind(this);
        this.changeEcostHandler=this.changeEcostHandler.bind(this);
        this.changeGstHandler=this.changeGstHandler.bind(this);
        var ToDate=new Date();
        console.log(ToDate);
     
    }
   
    saveProject= (e) =>{
        e.preventDefault();
        let pm={fullName:this.state.fullName,address:this.state.address,email:this.state.email,projectName:this.state.projectName,end:this.state.end,
      std:this.state.std,contact:this.state.contact,shipping_add:this.state.shipping_add,tcost:this.state.tcost,ecost:this.state.ecost,gst:this.state.gst};
        console.log('pm =>' +JSON.stringify(pm));

        EmployeeService.createProject(pm).then(res=>{
           this.props.history.push('/pm');
        });
    }
    changeFullnameHandler=(event)=>{
       this.setState({fullName:event.target.value});
    }
    changeAddressHandler=(event)=>{
       this.setState({address:event.target.value});
    }
    changeEmailHandler=(event)=>{
       this.setState({email:event.target.value});
    }
    changeProjectnameHandler=(event)=>{
       this.setState({projectName:event.target.value});
    }
    changeEnddateHandler=(event)=>{
       this.setState({end:event.target.value});
    }
    changeStartingdateHandler=(event)=>{
       this.setState({std:event.target.value});
    }
    changePhoneHandler=(event)=>{
       this.setState({contact:event.target.value});
    }
    changeShippingaddHandler=(event)=>{
       this.setState({shipping_add:event.target.value});
    }
    changeTcostHandler=(event)=>{
       this.setState({tcost:event.target.value});
    }
    changeEcostHandler=(event)=>{
        this.setState({ecost:event.target.value});
     }
     changeGstHandler=(event)=>{
        this.setState({gst:event.target.value});
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
        
            <h2 style={{'textAlign':'center', 'fontweight': 'bold', 'fontsize': '45px'}}>ADD NEW PROJECT</h2>
            <div className="row jumbotron">
                <div className="col-md-6">
                    <label for="inputname">FULL NAME</label>
                    <input placeholder="FullName" name="FullName" className="form-control" value={this.state.fullName} onChange={this.changeFullnameHandler} />
                </div>
                <div className="col-md-6">
                    <label for="inputname">Billing Address</label>
                    <input placeholder="Address" name="Address" className="form-control" value={this.state.address} onChange={this.changeAddressHandler} />
                </div>
                <div className="col-md-6">
                    <label for="inputname">Email</label>
                    <input placeholder="Email ID" name="emailID" className="form-control" value={this.state.email} onChange={this.changeEmailHandler} />
                </div>
                <div className="col-md-6">
                    <label for="inputname">Project Name</label>
                    <input placeholder="Project Name" name="Project Name" className="form-control" value={this.state.projectName} onChange={this.changeProjectnameHandler} />
                </div>
                <div className="col-md-4">
                    <label for="inputname">Project Starting Date</label>
                    <input type="date" className="form-control"placeholder="Start_Date" min="2021-08-01"  value={this.state.std} onChange={this.changeStartingdateHandler}/>
                </div>
                <div className="col-md-4">
                    <label for="inputname">Project End Date</label>
                    <input type="date" className="form-control"placeholder="End_Date" min="2021-08-01"  value={this.state.end} onChange={this.changeEnddateHandler}/>
                </div>
                <div className="col-md-4">
                    <label for="inputname">Phone Number</label>
                    <input type="tel" className="form-control" placeholder="Contact Number" value={this.state.contact} onChange={this.changePhoneHandler}/>
                </div>
                <div className="col-md-12">
                    <label for="inputname">Shipping Address</label>
                    <input placeholder="Shipping Address" name="Shipping Address" className="form-control" value={this.state.shipping_add} onChange={this.changeShippingaddHandler} />
                </div>
                <div className="col-md-4">
                    <label for="inputname">Estimated Cost</label>
                    <input type="tel" className="form-control" placeholder="Estimated Cost" value={this.state.ecost} onChange={this.changeEcostHandler}/>
                </div>
                <div className="col-md-4">
                    <label for="inputname">GST IN %</label>
                    <input disabled type="tel" className="form-control" placeholder="GST" value={this.state.gst} onChange={this.changeGstHandler}/>
                </div>
                <div className="col-md-4">
                    <label for="inputname">Total Cost</label>
                    <input disabled type="tel" className="form-control" placeholder="Cost" value={this.state.tcost=Math. round(this.state.ecost*(1.18))} onChange={this.changeTcostHandler}
                   />
                </div>
                <div className="col-md-12" style={{'textAlign':'center'}}>
                    <button type="Submit" className="btn btn-primary" onClick={this.saveProject} >Submit</button>
                </div>

            </div>    
    </form>
    </div>
    </div>
   </div>
        )
    }
}

export default CreateProject