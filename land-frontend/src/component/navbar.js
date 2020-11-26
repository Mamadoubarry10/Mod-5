import React from 'react'
import { NavLink } from 'react-router-dom'
import {Navbar} from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { connect } from 'react-redux'

import  'bulma/css/bulma.css'

const navbar = () =>{

    return(
        <div>
            

     <NavLink to="/list" exact className="nav-link">list</NavLink>
      <NavLink to="/listings" exact className="nav-link">listings</NavLink>
      <NavLink to="/favorites" exact className="nav-link">favorites</NavLink>
      <NavLink to="/profile" exact className="nav-link">profile</NavLink>


        </div>
       
    )
}
const msp = (state)=>{

    return { user: state.user}
}

export default connect(msp)(navbar)