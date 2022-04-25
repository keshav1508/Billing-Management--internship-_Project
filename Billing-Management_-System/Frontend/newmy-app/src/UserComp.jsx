// import './style.css';
// import './register.css';
import React, { Component } from 'react'
import UserPricipal from './UserPricipal'
import { withRouter } from "react-router-dom";



class UserComp extends Component {
    

            constructor(props){
                super(props)
            this.state={
                users:[],
                naam:"",
                pass:""
            }
        }

        login(){
            let des="" ; let status=false;
            for(let i=0;i<=this.state.users.length-1;i++)
            {
                if(this.state.naam==this.state.users[i].emailID)
                {
                if(this.state.users[i].passWord==this.state.pass)
                {des=this.state.users[i].design
                    status=true   }                   }

                }
                
               if(status==true)
               {
                   if(des=="ADMIN"){
                    this.props.history.push("/admin");
                     console.log("ADMIN")   
                   }

                   else if(des=="FINANCE"){
                    this.props.history.push("/empdetails");
                    console.log("empdetails")
                   }

                   else {
                    this.props.history.push("/pm");
                    console.log("PM")
                   }

               } 
              
               else {
                    alert("BAD CREDENTIALS")
               }

            }



        componentDidMount(){
        UserPricipal.getUsers().then((response) => {
            this.setState({users:response.data})
            
        })
   
        
        
        
   
   
   
    }
    

    
   
    
    render() {
        return (
            <>
            
          <section className="Form my-4 mx-5" style={{boxSizing:"border-box"}} >
		<div className="container justify-content-center" style={{"boxShadow":" 12px 12px 12px grey","borderRadius":"30px","background": "rgb(219,226,226)"
}}>
			<div className="row g-0" >
				<div className="col-lg-6 p-5" >
					<img src={process.env.PUBLIC_URL+"/login.jpg"} className="img-fluid" alt="Login Image"/>
				</div>
				<div className="col-lg-6 px-5 pt-3">
					<h1 className="font-weight-bold py-1">WELCOME</h1>
					<h4 className="font-weight-bold py-1">Login to your account</h4>
					<form>
						<div className="form-row">
							<div className="col-lg-10">
								<input type="email" name="email" className="form-control my-3 p-2" placeholder="Email Address" required="" style={{borderRadius: "34px"}} onChange={(e)=>this.setState({naam:e.target.value})}/>
							</div>
						</div>
						<div className="form-row">
							<div className="col-lg-10">
								<input type="password" name="password" className="form-control my-3 p-2" placeholder="Password" required="" style={{borderRadius: "34px"}} onChange={(e)=>this.setState({pass:e.target.value})}/>
							</div>
						</div>
						<div className="form-row">
							<div className="col-lg-10">
								<button type="button" className="btn1 mt-2 mb-3" className="btn btn-info" onClick={()=>{this.login()} }>Login</button>
							</div>
						</div>
						<a href="#">Forgot Password?</a>
						
					</form>
				</div>
			</div>
		</div>
      
	</section>
            {/* <div> <h1>LOGIN PAGE</h1> </div> 
           <div> <input type="text" name="uid" placeholder="User id" onChange={(e)=>this.setState({naam:e.target.value})} />  </div> 
           <div> <input type="text" name="pwd" placeholder="password" onChange={(e)=>this.setState({pass:e.target.value})} /> </div> 
           <Button onClick={()=>{this.login()} }>Log IN</Button> */}
           
             
 </>
        )
    }
}
export default withRouter(UserComp)