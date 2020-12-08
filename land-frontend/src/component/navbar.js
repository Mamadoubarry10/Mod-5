import React from 'react'
import { NavLink } from 'react-router-dom'
import {Navbar} from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { connect } from 'react-redux'

import  'bulma/css/bulma.css'

const navbar = (props) =>{

    return(
        
        <Navbar bg="dark" expand="lg" sticky="top">
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               
     <NavLink to="/" exact className="nav-link" style={{
    fontWeight: "bold",
    color: "white"
  }}>Home</NavLink>
      <NavLink to="/listings" exact className="nav-link"  style={{
    fontWeight: "bold",
    color: "white"
  }}>Listings</NavLink>
      <NavLink to="/favorites" exact className="nav-link"  style={{
    fontWeight: "bold",
    color: "white"
  }}>Favorites</NavLink>
      <NavLink to="/list" exact className="nav-link"  style={{
    fontWeight: "bold",
    color: "white"
  }}>Sell</NavLink>
      <NavLink to="/profile" exact className="nav-link"  style={{
    fontWeight: "bold",
    color: "white"
  }}>Profile</NavLink>  
         
            </Nav>
            
           <Nav>
    <p onClick={props.logOut} className="nav-link" style={{
    fontWeight: "bold",
    color: "white",
    cursor:"pointer",
    display:"inline"
    
  }}>Log Out</p>   
  </Nav>      
        </Navbar.Collapse>
    </Navbar>
        
  
    )
}
const mdp = (dispatch)=>{

    return { logOut:()=> dispatch({type: "LOG_OUT"})}
}

export default connect(null,mdp)(navbar)