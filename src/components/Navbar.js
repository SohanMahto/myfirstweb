// import React , from 'react'
import '../App.css'
import React, { useState } from 'react'

export default function Navbar(props) {
  let Style = {

  }
  if (props.mode === "dark") {
    Style = {
      backgroundColor: "#5f6266"
      
    }
  }
  else {
    Style = {
      backgroundColor: "white",
      color:"black"
    }}

    //  let style={
    //   color:"blue",
    // }
    // dark mode function

    console.log("Hi bro")

    return (<div>
      <nav id='dada'style={Style} className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid" >
          <a className="navbar-brand" href="#">{props.title}</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>


            <form className="d-flex">
              {/* dark mode button */}
              <span className='mx-2' >Light_Mode</span>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" disabled onClick={props.cmode}  role="switch" id="flexSwitchCheckDefault" />
              </div>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      {/* <div id='Dabba'> 
      This is An Dabba
    </div> */}


    </div>
    )
  }
