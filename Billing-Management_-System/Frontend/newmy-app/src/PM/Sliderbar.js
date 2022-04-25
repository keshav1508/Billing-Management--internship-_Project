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
            <li><Link to="/pm" className="active"><span className="las la-igloo"></span>
                    <span>Dashboard</span></Link>
            </li>
            <li><Link to="/create" className="active"><span className="las la-igloo"></span>
                    <span>Create New Project</span></Link>
            </li>
            <li><Link to="/projectinfo" className="active"><span className="las la-igloo"></span>
                    <span>Project Info</span></Link>
            </li>
            <li><Link to="/enfo"><span className="las la-shopping-bag"></span>
                    <span>Employee Info</span></Link>
            </li>
           
        </ul>
    </div>
    </div>
    </>

    )
}
