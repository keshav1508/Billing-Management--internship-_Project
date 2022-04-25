import React from 'react'
import {
    Link
  } from "react-router-dom";
export const Body = (props) => {
    return (
       
   

<>
          <div className="main-content">
        <main>
            <div className="cards">
                <div className="card-single">
                <div>
                        <h1>{props.totNumEmp}</h1>
                        <span>TOTAL NUMBER OF EMPLOYEES</span>
                    </div>
                    <div>
                        <span className="las la-users"></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <h1>{props.allEmp}</h1>
                        <Link to="/AllocatedEmp" style={{'color':'black'}}>
                        <span>ALLOCATED EMPLOYEES</span> </Link>
                    </div>
                    <div>
                        <span className="las la-clipboard-list"></span>
                    </div>
                </div>
                <div className="card-single">
                  <div>
                        <h1>{props.nol}</h1>
                        <Link to="/onbench" style={{'color':'black'}}>
                        <span>ON BENCH EMPLOYEES</span></Link>
                    </div>
                    <div>
                        <span className="las la-shopping-bag"></span>
                    </div>
                </div>
            </div>
        </main>
    </div>
    </>
       
    )
}
