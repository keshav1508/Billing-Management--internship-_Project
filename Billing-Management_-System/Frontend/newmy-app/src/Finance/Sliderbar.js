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
            <li><Link to="/empdetails" className="active"><span className="las la-igloo"></span>
                    <span>Employee Details</span></Link>
            </li>
            <li><Link to="/invoice"><span className="las la-receipt"></span>
                    <span>Invoice Details</span></Link>
            </li>
        </ul>
    </div>
    </div>
    </>

    )
}
