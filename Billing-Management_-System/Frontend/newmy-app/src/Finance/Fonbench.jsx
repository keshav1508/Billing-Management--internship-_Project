import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Sliderbar } from "./Sliderbar";
import { Navbar} from "./Navbar";

 class Fonbench extends Component {
    constructor(props){
        super(props) 
        this.state={
           emp:[]
        }
      
        this.main=this.main.bind(this);
    }
   

    main()
    {
        this.props.history.push("/empdetails")
    }
  

  
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
       this.setState({ emp:res.data});

        });
    }
    

    render() {
        return (
            <div>
            <Sliderbar/>
            <Navbar/>
            <div className="main-content">
            <div className="del">
            <div>
           
                <h2 className="text-center">Employee List</h2>
                <input type="checkbox"
                 checked="true" 
                  onClick={()=>this.main() }  
                   />ONBENCH
           
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
                                      employee.status==="NOTWORKING" && employee.regular==="ACTIVE"&& employee.design==="EMPLOYEE" ?(
                                       <tr  key ={employee.id}>
                                           
                                           <td>{employee.id}</td>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailID}</td>
                                     
                                            <td>{employee.design}</td>
                                           
                                            <td>{employee.status}</td>
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

export default Fonbench