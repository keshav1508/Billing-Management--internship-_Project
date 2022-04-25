import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import {Navbar} from "./Navbar"
import {Sliderbar} from "./Sliderbar"

 class EmployeeInfo extends Component {
    constructor(props){
        super(props) 
        this.state={
           emp:[]
        }
        
        this.edtEmployee=this.edtEmployee.bind(this);
    }
   


   main()
   {
    this.props.history.push("/AllocatedEmp");
   }
   ON()
   {
    this.props.history.push("/onbench");
   
   }

    edtEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
       
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
       this.setState({ emp:res.data});

        });
    }
    state = { checked: true }
    handleCheckboxChange = event =>
      this.setState({ checked: event.target.checked })
    handleCheckboxChangee = event =>
      this.setState({ checked: event.target.checked })

    render() {
        return (
            <div>   <Navbar/>
            <Sliderbar/>
            <div className="main-content">
            <div className="del">
            <div>
            <h2 className="text-center">Employee List</h2>
            <div className="row">
              <div  className="col-md-6">
                
                <input type="checkbox"
                 checked={this.state.checked}
                  onChange={this.handleCheckboxChange} 
                  onClick={()=>this.main() }  
                   />ALLOCATED
                </div>   
                <div className="col-md-6">
                <input type="checkbox"
                 checked={this.state.checked}
                  onChange={this.handleCheckboxChange} 
                  onClick={()=>this.ON() }  
                   />ONBENCH
                   </div>   
           </div>
                   
    
           </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                {/* <th>Select</th> */}
                                <th>Employee Id</th>
                                <td  style={{textAlign:"center"}} colSpan="8">DETAILS</td>
                            </tr>
                        </thead>
                        
                        <tbody>
                       
                      

                                   
                                     {
                                            
                                   this.state.emp.map(
                                       (employee) =>
                                       employee.status!="ADMIN" && employee.regular==="ACTIVE" ?(
                                       <tr  key ={employee.id}>
                                           
                                           <td>{employee.id}</td>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.projectName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailID}</td>
                                     
                                            
                                            
                                           
                                            <td>
                                                <button onClick={()=>this.edtEmployee(employee.id) } className="btn btn-info">Update</button>
                                            </td>
                                       </tr>
                                       ):null
                                     
                                   )
                                    
                                  
                                 
                                
                            }
                          
                        </tbody>
                    </table>
                </div>

            </div>
            </div>
            </div>
        )
    }
}

export default EmployeeInfo