import React from 'react'
import { NavLink } from 'react-router-dom'
import {Navbar} from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import  'bulma/css/bulma.css'

const navbar = () =>{

    return(
        <div>

      <NavLink to="/login" exact className="nav-link">login</NavLink>
     <NavLink to="/list" exact className="nav-link">list</NavLink>
      <NavLink to="/listings" exact className="nav-link">listings</NavLink>
      <NavLink to="/favorites" exact className="nav-link">favorites</NavLink>


        </div>
       
    )
}


export default navbar