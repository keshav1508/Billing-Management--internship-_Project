import React ,{useState} from 'react'
import statesData from './happy';




export default function Navbar() {
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

  return (
      <div className="main-content">
              <div className="del">
      <form name="myform" className="form-group">
      
          <h2 style={{'textAlign':'center', 'fontweight': 'bold', 'fontsize': '45px'}}>ADD NEW MEMBER</h2>
          
          <div className="row jumbotron">
             
              <div class="col-md-4">
                 <label for="inputname">State</label> &nbsp;
                  <select value={state_place} onChange={handleStatesChange} id="sts" name="stt" class="form-control"
                      required>
                          {rajya}
                      </select>
              </div>
&nbsp;
              <div class="col-md-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
              <label for="inputname">City</label> &nbsp;
                  <select value={city} onChange={handleCitiesChange} id="state" class="form-control" required>
                  {cities}
                  </select>
                  
              </div>

              &nbsp;

              <div className="col-md-2">
                  <label for="inputname">Pin Code</label> &nbsp;
                  <input type="tel" className="form-control" placeholder="Pin Code"/>
              </div>
                                                      

          </div>    
  </form>
  </div>
  </div>




        
          
      
  );
}

