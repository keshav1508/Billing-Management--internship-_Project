import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import {Navbar} from "./Navbar"
import {Sliderbar} from "./Sliderbar"

 class Active extends Component {
    constructor(props){
        super(props) 
        this.state={
           emp:[]
        }
        
        this.edtEmployee=this.edtEmployee.bind(this);
    }
   




    edtEmployee(id){
        this.props.history.push(`/upactive/${id}`);
       
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
       this.setState({ emp:res.data});

        });
    }
   

    render() {
        return (<div>   <Navbar/>
            <Sliderbar/>
            <div className="main-content">
            <div className="del">
            <div>
            <h2 className="text-center">Employee List</h2>
          
           </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                {/* <th>Select</th> */}
                                <th>Employee Id</th>
                                <td  style={{textAlign:"center"}} colSpan="6">DETAILS</td>
                            </tr>
                        </thead>
                        
                        <tbody>
                       
                             
                                   
                                     {
                                   this.state.emp.map(
                                       (employee) =>
                                       employee.regular==="ACTIVE" && employee.status!="ADMIN"?(
                                       <tr  key ={employee.id}>
                                           
                                           <td>{employee.id}</td>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailID}</td>
                                     
                                            <td>{employee.design}</td>
                                           
                                            <td>{employee.status}</td>
                                            <td>
                                                <button onClick={()=>this.edtEmployee(employee.id) } className="btn btn-info">INACTIVE NOW</button>
                                            </td>
                                       </tr>):null
                                    
                                     
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

export default Active