import React,{useState} from 'react';
import statesData from "./data";

export const About = () => {
    const [{ state_place, city }, setData] = useState({
        state_place: "Select Place",
        city: "Select City"
      });
    
      const rajya = statesData.map((state_place) => (
        <option key={state_place.name} value={state_place.name}>
          {state_place.name}
        </option>
      ));
    
      const cities = statesData.find(item => item.name === state_place)?.cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ));
    
      function handleStatesChange(event) {
        setData(data => ({ city: '', state_place: event.target.value }));
      }
    
      function handleCitiesChange(event) {
        setData(data => ({ ...data, city: event.target.value }));
      }
    let id= "EMP" + Math.random().toString(4).slice(22)
    const [state]=useState(id)
    const [state_pm,setState_pm]=useState(true)
    const handleOnChange=(e)=>{
        if(e.target.value=='EMPLOYEE')
        {
            setState_pm(false)
        }
        else{
            setState_pm(true)
        }
    }
    return (
        <div className="main-content">
                <div className="del">
        <form name="myform" className="form-group">
        
            <h2 style={{'textAlign':'center', 'fontweight': 'bold', 'fontsize': '45px'}}>ADD NEW MEMBER</h2>
            <div className="row jumbotron">
                <div className="col-md-6">
                    <label for="inputname">First name</label>
                    <input type="text" className="form-control" placeholder="First Name"/>
                </div>
                <div className="col-md-6">
                    <label for="inputname">Last name</label>
                    <input type="text" className="form-control" placeholder="Last Name"/>
                </div>
                <div className="col-md-6">
                    <label for="inputname">Email</label>
                    <input type="text" className="form-control" placeholder="Email"/>
                </div>
                <div className="col-md-6">
                    <label for="inputname">Password</label>
                    <input type="text" className="form-control" placeholder="Password"/>
                </div>
                <div className="col-md-8">
                    <label for="inputname">Address</label>
                    <input type="text" className="form-control" placeholder="Address"/>
                </div>
                <div className="col-md-4">
                    <label for="inputname">DOB</label>
                    <input type="date" className="form-control"placeholder="DOB" min="1997-01-01" max="2018-01-01"/>
                </div>
                <div className="col-md-4">
                    <label for="inputname">Phone Number</label>
                    <input type="tel" className="form-control" placeholder="Contact Number"/>
                </div>
                <div class="col-md-4">
                    <label for="inputname">State</label>

                    <select value={state_place} onChange={handleStatesChange} id="sts" name="stt" class="form-control"
                      required>
                          {rajya}
                      </select>
                </div>
                <div class="col-md-4">
                    <label for="inputname">City</label>
                    <select value={city} onChange={handleCitiesChange} id="state" class="form-control" required>
                  {cities}
                  </select>
                    
                </div>
                <div className="col-md-2">
                    <label for="inputname">Pin Code</label>
                    <input type="tel" className="form-control" placeholder="Pin Code"/>
                </div>
                <div className="col-md-2" >
                    <label for="inputname">Gender</label>
                    <div className="form-control">
                        <input type="radio" name="mygen" id="gender" />  MALE
                        
                    </div>
                    <div className="form-control">
                       
                        <input type="radio" name="mygen" id="gender" />  FEMALE
                    </div>
                    </div>
                    
                 <div className="col-md-4">
                    <label for="inputname">Designation</label>

                    <select id="DESIGNATION" className="form-control"
                    onChange={handleOnChange}>
                        <option value="None">Select Option</option>
                        <option value="Admin">Select Option</option>
                        <option value="PROJECT MANAGER">PROJECT MANAGER</option>
                        <option value="EMPLOYEE">EMPLOYEE</option>
                        
                    </select>
                </div>
                 <div className="col-md-4">
                    <label for="inputname" id="yo">Select Project Manager</label>

                    <select hidden={state_pm} id="PM" className="form-control">
                        <option value="None">Select Option</option>
                        <option value="NAME">KESHAV</option>
                        <option value="NAME">ADITYA</option>
                        <option value="NAME">POOJA</option> 
                    </select>
                </div>
                <div className="col-md-4" >
                    <label for="inputname">Status</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col-md-12" style={{'textAlign':'center'}}>
                    <button type="Submit" className="btn btn-primary" >Submit</button>
                </div>

            </div>    
    </form>
    </div>
    </div>
        
    )
}
