import React from 'react'

export const Deleteemp = () => {
    return (
        <div className="main-content">
    <form className="del jumbotron">
    <h3 className="text-center">REMOVE EMPLOYEE</h3>
    <div className="mb-4">
    <label for="Employeeid" className="form-label">EMPLOYEE ID</label>
    <input type="string" className=" form-control" id="Employeeid" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">PLEASE ENTER EMPLOYEE ID CORRECTLY.</div>
  </div>
  <div class="form-group">
                <label for="Description">REASON</label>
                <textarea class="form-control" id="Description" rows="3"></textarea>
            </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">ARE YOU SURE</label>
  </div >
  <div style={{'textAlign':'center'}}>
  <button type="submit" className="btn btn-danger btn-primary">DELETE</button>
  </div>
</form>
        </div>
    )
}
