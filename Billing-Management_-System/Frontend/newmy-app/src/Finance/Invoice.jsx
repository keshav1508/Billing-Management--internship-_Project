import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Sliderbar } from "./Sliderbar";
import { Navbar} from "./Navbar";

 class Invoice extends Component {
    constructor(props){
        super(props) 
        this.state={
           pro:[]
        }
        
     
    }
   
  
    viewEmployee(userid){
        this.props.history.push(`/see/${userid}`);
       
    }



   
    componentDidMount(){
        EmployeeService.getpm().then((res) => {
       this.setState({ pro:res.data});

        });
    }
    

    render() {
        return(
            <div>
            <Sliderbar/>
            <Navbar/>
            <div className="main-content">
            <div className="del">
            <div>
            <h2 className="text-center">INVOICE DETAILS</h2>
            <div className="row">
   
           </div>
           </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                {/* <th>Select</th> */}
                                <th>BILLING ID</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Project Name</th>
                                <th>Total Cost</th>
                                
                            </tr>
                        </thead>
                        
                        <tbody>
                       {
                                         
                                   this.state.pro.map(
                                   
                                       (pm) =>
                                      
                                       <tr  key ={pm.userid}>
                                           
                                           <td>{pm.userid}</td>
                                            <td>{pm.fullName}</td>
                                            <td>{pm.email}</td>
                                           <td>{pm.projectName}</td>
                                            <td>{pm.tcost}</td>
                                            <td>
                                            <button onClick={()=>this.viewEmployee(pm.userid) } className="btn btn-info">Download Invoice</button>
                                           
                                     
                                            </td>
                                       </tr>
                                        
                                     
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

export default Invoice