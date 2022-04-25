import React from 'react'
import {
    Link
  } from "react-router-dom";
export const Sliderbar = () => {
    return (
    <>
    <input type="checkbox" id="nav-toggle"/>
    <div className="sidebar">
        <div className="sidebar-brand">
            <h2><span className="lab la-accusoft"></span><span> KASPA</span></h2>
        </div>
    <div className="sidebar-menu">
        <ul>
            <li><Link to="/admin" className="active"><span className="las la-igloo"></span>
                    <span>Dashboard</span></Link>
            </li>
            <li><Link to="/allocated"><span className="las la-users"></span>
                    <span>Create New Employee</span></Link>
            </li>
            <li><Link to="/remove"><span className="las la-clipboard-list"></span>
                    <span>Employee Info</span></Link>
            </li>
            <li><Link to="/active"><span className="las la-receipt"></span>
                    <span>Active Employee</span></Link>
            </li>
            <li><Link to="/inactive"><span className="las la-shopping-bag"></span>
                    <span>Inactive Employee</span></Link>
            </li>
           
            {/* <li><Link to="/remove"><span className="las la-receipt"></span>
                    <span>Remove Employee</span></Link>
            </li> */}
            {/* <li><Link to=""><span className="las la-user-circle"></span>
                    <span>Accounts</span></Link>
            </li> */}
        </ul>
    </div>
    </div>
    </>

    )
}
