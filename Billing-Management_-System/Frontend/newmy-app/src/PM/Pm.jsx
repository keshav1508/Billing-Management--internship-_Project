import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import {Navbar} from "./Navbar";
import {Sliderbar} from "./Sliderbar";

 class Pm extends Component {
    constructor(props){
        super(props) 
        this.state={
           pro:[]
        }
        
        this.edtEmployee=this.edtEmployee.bind(this);
    }
   
    edtEmployee(userid){
        this.props.history.push(`/updatepm/${userid}`);
       
    }
    viewEmployee(userid){
        this.props.history.push(`/view/${userid}`);
       
    }



   
    componentDidMount(){
        EmployeeService.getpm().then((res) => {
       this.setState({ pro:res.data});

        });
    }
    

    render() {
        return (
            <div>
            <Navbar/>
            <Sliderbar/>
            <div className="main-content">
            <div className="del">
            <div>
            <h2 className="text-center">About Project</h2>
            <div className="row">
   
           </div>
           </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                {/* <th>Select</th> */}
                                <th>Employee Id</th>
                                <td  style={{textAlign:"center"}} colSpan="12">DETAILS</td>
                            </tr>
                        </thead>
                        
                        <tbody>
                       
                             
                                   
                                     {
                                   this.state.pro.map(
                                       (pm) =>
                                     
                                       <tr  key ={pm.userid}>
                                           
                                           <td>{pm.userid}</td>
                                            <td>{pm.fullName}</td>
                                            <td>{pm.address}</td>
                                            <td>{pm.email}</td>
                                           <td>{pm.projectName}</td>
                                            <td>{pm.end}</td>
                                            <td>{pm.std}</td>
                                            <td>{pm.contact}</td>
                                            <td>{pm.shipping_add}</td>
                                           
                                            <td>{pm.ecost}</td>
                                            <td>{pm.gst}</td>
                                            <td>{pm.tcost}</td>
                                            <td>
                                                <button onClick={()=>this.edtEmployee(pm.userid) } className="btn btn-info">Update</button>     
                                            </td>
                                            <td>
                                            <button onClick={()=>this.viewEmployee(pm.userid) } className="btn btn-info">GENERATE INVOICE</button>
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

export default Pm