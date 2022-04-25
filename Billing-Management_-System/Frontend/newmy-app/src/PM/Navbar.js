import React from 'react'

export const Navbar = () => {
    return (
        
        
        <div className="main-content">
        <header>
            <h4>
                <label for="nav-toggle">
                    <span className="las la-bars"></span>
                </label>
                WELCOME PROJECT MANAGER
            </h4>
            {/* <div className="search-wrapper">
                <span className="las la-search"></span>
                <input type="search" placeholder="Search here"/ >
            </div> */}

            <div className="user-wrapper">
            {/* <img src={process.env.PUBLIC_URL+"/kesh.jpeg"} width="45px" height="45px" alt=""/> */}
                <div>
                    {/* <h4>Keshav Dubey</h4> */}
                    <h4><a href="http://localhost:3000">Log out</a></h4>
                </div>
            </div>
        </header>
    </div>
    )
}
