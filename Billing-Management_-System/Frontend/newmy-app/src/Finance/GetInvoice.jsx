import React,{ Component }  from 'react'
import jsPDF from 'jspdf';
import EmployeeService from '../services/EmployeeService';
import { Sliderbar } from "./Sliderbar";
import { Navbar} from "./Navbar";


 class GetInvoice extends Component {
    constructor(props){
        super(props) 
        this.state={
           userid:this.props.match.params.userid, 
           pro:{}
        }
   }

   pdfGenerate=()=>{
       var doc=new jsPDF('p','pt','a4');
    doc.html(document.querySelector("#content"),{
        callback:function(pdf){
            var pageCount=doc.internal.getNumberOfPages();
            pdf.deletePage(pageCount);
            pdf.save("myfile.pdf");
        }
    })
   }
    componentDidMount(){
        EmployeeService.getPMById(this.state.userid).then((res)=>{
            this.setState({ pro:res.data});
        })
    }
   

    
    render() {
        return (
          <div >
                 
                <Sliderbar/>
                <Navbar/>
              <body>
   
               <div className="main-content">
                <div className="del">
                <div style={{textAlign:'center'}}>
                        <button onClick={this.pdfGenerate}>Download pdf</button>
                    </div>
                <br></br>
                <div id="content">
               <div className="card col-md-5 offset-md-1 row jumbotron">
                   <h3 className="text-center">View Invoice</h3>
                   <div className="row">
                    <label style={{fontFamily:"sans-serif"}}>Billing ID</label>
                    <div style={{fontFamily:"sans-serif"}}>{this.state.pro.userid}</div>
                   </div>
                   <div className="row">
                    <label style={{fontFamily:"sans-serif"}}>CLIENT NAME</label>
                    <div style={{fontFamily:"sans-serif"}}>{this.state.pro.fullName}</div>
                   </div>
                   <div className="row">
                    <label style={{fontFamily:"sans-serif"}}>CLIENT EMAIL</label>
                    <div style={{fontFamily:"sans-serif"}}>{this.state.pro.email}</div>
                   </div>
                   <div className="row">
                    <label style={{fontFamily:"sans-serif"}}>CLIENT ADDRESS</label>
                    <div style={{fontFamily:"sans-serif"}}>{this.state.pro.address}</div>
                   </div>
                   <div className="row">
                    <label style={{fontFamily:"sans-serif"}}>CLIENT PROJECT NAME</label>
                    <div style={{fontFamily:"sans-serif"}}>{this.state.pro.projectName}</div>
                   </div>
                   <div className="row">
                    <label style={{fontFamily:"sans-serif"}}>PROJECT STARTING DATE</label>
                    <div style={{fontFamily:"sans-serif"}}>{this.state.pro.std}</div>
                   </div>
                   <div className="row">
                    <label style={{fontFamily:"sans-serif"}}>PROJECT ENDING DATE</label>
                    <div style={{fontFamily:"sans-serif"}}>{this.state.pro.end}</div>
                   </div>
                   <div className="row">
                    <label style={{fontFamily:"sans-serif"}}>CLIENT PHONE NUMBER</label>
                    <div style={{fontFamily:"sans-serif"}}>{this.state.pro.contact}</div>
                   </div>
                   <div className="row">
                    <label style={{fontFamily:"sans-serif"}}>PROJECT SHIPPING ADDRESS</label>
                    <div style={{fontFamily:"sans-serif"}}>{this.state.pro.shipping_add}</div>
                   </div>
                   <div className="row">
                    <label style={{fontFamily:"sans-serif"}}>ESTIMATED PROJECT COST</label>
                    <div style={{fontFamily:"sans-serif"}}>{this.state.pro.ecost}</div>
                   </div>
                   <div className="row">
                    <label style={{fontFamily:"sans-serif"}}>GST</label>
                    <div style={{fontFamily:"sans-serif"}}>{this.state.pro.gst}</div>
                   </div>
                   <div className="row">
                    <label style={{fontFamily:"sans-serif"}}>OVERALL PROJECT COST</label>
                    <div style={{fontFamily:"sans-serif"}}>{this.state.pro.tcost}</div>
                   </div>
               </div>
    </div>
    </div>
    </div>
    </body>
   </div>
   
        )
    }
}

export default GetInvoice