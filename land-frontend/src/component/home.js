import React from 'react'
import image from '../homeImage/home..jpg'
import { NavLink } from 'react-router-dom'




const homePage = () =>{
    return(
        <div>
            <div className='container1'>
            <img src={image} alt=''/>
          <NavLink to={'/listings'} className="btn"> View Listings</NavLink>
          <NavLink to={'/profile'} className="btn2"> Profile</NavLink>


            </div>
        

        </div>
    )
}

export default homePage